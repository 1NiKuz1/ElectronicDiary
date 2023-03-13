<template>
  <div>
    <DataTable
      :value="items"
      rowGroupMode="subheader"
      groupRowsBy="subject"
      scrollable
      scrollHeight="90vh"
      resizable-columns
    >
      <Column field="subject" header="subject" resizable />
      <Column field="time" header="Время" resizable />
      <Column field="date" header="Дата" resizable />
      <Column field="note" header="Примечание" resizable />
      <Column field="teacher" header="Проподаватель" resizable />
      <Column field="mark" header="Оценка" resizable />
      <template #groupheader="slotProps">
        <div class="flex align-items-center gap-2">
          <span>{{ slotProps.data.subject }}</span>
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
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";

export default {
  name: "DiaryView",
  components: {
    DataTable,
    Column,
    ColumnGroup,
    Row,
    InputText,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          time: "12:50",
          subject: "Математика",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 2,
          time: "12:50",
          subject: "Математика",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 3,
          time: "12:50",
          subject: "Математика",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 4,
          time: "12:50",
          subject: "Математика",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 5,
          time: "12:50",
          subject: "Математика",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 6,
          time: "12:50",
          subject: "Русский язык",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 7,
          time: "12:50",
          subject: "Русский язык",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 8,
          time: "12:50",
          subject: "Русский язык",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 9,
          time: "12:50",
          subject: "Русский язык",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 10,
          time: "12:50",
          subject: "Русский язык",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
        {
          id: 11,
          time: "12:50",
          subject: "Русский язык",
          note: "Самостоятельная работа",
          teacher: "Морозова И А",
          mark: "5",
          date: "21.01.2023",
        },
      ],
    };
  },
};
</script>
