<template>
  <div>
    <DataTable
      :value="schedule"
      editMode="cell"
      @cell-edit-complete="onCellEditComplete"
      tableClass="editable-cells-table"
      rowGroupMode="subheader"
      groupRowsBy="date"
      scrollable
      scrollHeight="90vh"
      resizable-columns
    >
      <Column field="date" header="date" resizable />
      <Column field="time" header="Время">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column field="subject_name" header="Предмет">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column field="name" header="Проподаватель">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column field="class_name" header="Класс">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column field="num_cabinet" header="Кабинет">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
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
  name: "EditScheduleView",
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
    const { getSheduleForAdmin } = data;
    return {
      userData,
      schedule,
      getSheduleForAdmin,
    };
  },

  mounted() {
    if (this.userData.user.role !== "admin") {
      this.$router.push("/");
      return;
    }
    if (!this.schedule.length) this.loadData();
  },

  methods: {
    async loadData() {
      if (this.userData.user.role === "admin") await this.getSheduleForAdmin();
      //console.log(this.schedule);
    },

    onCellEditComplete(event) {
      let { data, newValue, field } = event;

      if (newValue.trim().length > 0) data[field] = newValue;
      else event.preventDefault();
    },
  },
};
</script>
