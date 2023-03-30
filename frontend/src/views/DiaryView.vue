<template>
  <div>
    <DataTable
      :value="journal"
      rowGroupMode="subheader"
      groupRowsBy="subject_name"
      scrollable
      scrollHeight="90vh"
      resizable-columns
    >
      <Column field="subject_name" header="subject_name" resizable />
      <Column field="date" header="Дата" resizable />
      <Column field="note_name" header="Примечание" resizable />
      <Column field="name" header="Проподаватель" resizable />
      <Column field="rating" header="Оценка" resizable />
      <template #groupheader="slotProps">
        <div class="flex align-items-center gap-2">
          <span>{{ slotProps.data.subject_name }}</span>
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
  name: "DiaryView",
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
    const { journal } = storeToRefs(data);
    const { getStudentDiary } = data;
    return {
      userData,
      journal,
      getStudentDiary,
    };
  },

  mounted() {
    if (this.userData.user.role !== "student") {
      this.$router.push("/");
      return;
    }
    if (!this.journal.length) this.loadData();
  },

  methods: {
    async loadData() {
      if (this.userData.user.role === "student") await this.getStudentDiary();
      console.log(this.journal);
    },
  },
};
</script>
