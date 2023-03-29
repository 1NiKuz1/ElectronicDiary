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
  name: "ScheduleView",
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
      ],
    };
  },
};
</script>
