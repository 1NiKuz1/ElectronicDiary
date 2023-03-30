<template>
  <div>
    <DataTable
      :value="schedule"
      rowGroupMode="subheader"
      groupRowsBy="date"
      scrollable
      scrollHeight="90vh"
      resizable-columns
    >
      <Column field="date" header="date" resizable />
      <Column field="time" header="Время" resizable />
      <Column field="subject_name" header="Предмет" resizable />
      <Column
        v-if="userData.user.role == 'student'"
        field="name"
        header="Проподаватель"
        resizable
      />
      <Column
        v-if="userData.user.role == 'teacher'"
        field="class_name"
        header="Класс"
        resizable
      />
      <Column field="num_cabinet" header="Кабинет" resizable />
      <template #groupheader="slotProps">
        <div class="flex align-items-center gap-2">
          <span>{{ slotProps.data.date }}</span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional
import InputText from "primevue/inputtext";
import { useAuthStore } from "@/stores/auth";
import { useDataStore } from "@/stores/data";
import { storeToRefs } from "pinia";

export default {
  name: "ScheduleView",
  components: {
    DataTable,
    Column,
    ColumnGroup,
    Row,
    InputText,
  },

  setup() {
    const auth = useAuthStore();
    const data = useDataStore();
    const { userData } = auth;
    const { schedule } = storeToRefs(data);
    const { getSheduleForTeacher, getSheduleForStudent } = data;
    return {
      userData,
      schedule,
      getSheduleForTeacher,
      getSheduleForStudent,
    };
  },

  mounted() {
    if (
      this.userData.user.role !== "teacher" &&
      this.userData.user.role !== "student"
    ) {
      this.$router.push("/");
      return;
    }
    if (!this.schedule.length) this.loadData();
  },

  methods: {
    async loadData() {
      if (this.userData.user.role === "teacher")
        await this.getSheduleForTeacher();
      if (this.userData.user.role === "student")
        await this.getSheduleForStudent();
    },
  },
};
</script>
