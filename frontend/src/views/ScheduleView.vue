<template>
  <div>
    <DataTable
      :value="items"
      rowGroupMode="subheader"
      groupRowsBy="date"
      scrollable
      scrollHeight="90vh"
      resizable-columns
    >
      <Column field="date" header="date" resizable />
      <Column field="time" header="Время" resizable />
      <Column field="subject" header="Предмет" resizable />
      <Column field="teacher" header="Проподаватель" resizable />
      <Column field="room" header="Кабинет" resizable />
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
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";

export default {
  name: "MyTableComponent",
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
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 2,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 3,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 4,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 5,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 6,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 7,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 8,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 9,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 10,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Суббота",
        },
        {
          id: 11,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
        {
          id: 12,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
        {
          id: 13,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
        {
          id: 14,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
        {
          id: 15,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
        {
          id: 16,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
        {
          id: 17,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
        {
          id: 18,
          time: "12:50",
          subject: "Математика",
          teacher: "Морозова И А",
          room: "42",
          date: "21.01.2023 – Вторник",
        },
      ],
    };
  },
};
</script>
