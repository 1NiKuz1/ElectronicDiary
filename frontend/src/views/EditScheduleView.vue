<template>
  <div>
    <DataTable
      :value="items"
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
      <Column field="subject" header="Предмет">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column field="teacher" header="Проподаватель">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column field="room" header="Кабинет">
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
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";

export default {
  name: "EditScheduleView",
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
  methods: {
    onCellEditComplete(event) {
      let { data, newValue, field } = event;

      if (newValue.trim().length > 0) data[field] = newValue;
      else event.preventDefault();
    },
  },
};
</script>

<!--<Column field="time" header="Время" sortable resizable />
      <Column field="subject" header="Предмет" sortable resizable />
      <Column field="teacher" header="Проподаватель" sortable resizable />
      <Column field="room" header="Кабинет" sortable resizable />-->
