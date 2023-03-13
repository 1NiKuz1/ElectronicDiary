<template>
  <div>
    <DataTable
      :value="items"
      editMode="cell"
      @cell-edit-complete="onCellEditComplete"
      tableClass="editable-cells-table"
      rowGroupMode="subheader"
      groupRowsBy="subject"
      scrollable
      scrollHeight="90vh"
      resizable-columns
    >
      <ColumnGroup type="header">
        <Row>
          <Column header="" :colspan="2" />
          <Column header="Число" :colspan="31" />
        </Row>
        <Row>
          <Column field="name" header="Ф. И. учащегося" resizable />
          <Column field="id" header="Номер" resizable />
          <Column
            v-for="startDays of endDays"
            :key="startDays.toString()"
            :field="startDays.toString()"
            :header="startDays.toString()"
            resizable
          >
          </Column>
        </Row>
      </ColumnGroup>
      <Column field="subject" header="subject" resizable />
      <Column field="id" header="Номер" resizable />
      <Column field="name" header="Ф. И. учащегося" resizable />
      <Column
        v-for="startDays of endDays"
        :key="startDays.toString()"
        :field="startDays.toString()"
        :header="startDays.toString()"
        resizable
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" maxlength="1" />
        </template>
      </Column>
      <template #groupheader="slotProps">
        <div class="flex align-items-center gap-2">
          <span>{{ slotProps.data.subject + " " + slotProps.data.month }}</span>
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
  name: "JournalView",
  components: {
    DataTable,
    Column,
    ColumnGroup,
    Row,
    InputText,
  },
  data() {
    return {
      startDays: 1,
      endDays: 30,
      items: [
        {
          id: 1,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 2,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 3,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 4,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 5,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 6,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 7,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 8,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
        {
          id: 9,
          name: "Иванов Иван",
          subject: "Математика",
          month: "Январь",
          1: "5",
          2: "5",
          3: "5",
          4: "5",
          5: "5",
          6: "5",
          7: "-",
          8: "5",
          9: "5",
          10: "-",
          11: "5",
          12: "5",
          13: "5",
          14: "5",
          15: "-",
          16: "5",
          17: "5",
          18: "5",
          19: "5",
          20: "5",
          21: "5",
          22: "5",
          23: "5",
          24: "5",
          25: "5",
          26: "5",
          27: "5",
          28: "5",
          29: "5",
          30: "5",
        },
      ],
    };
  },
  methods: {
    onCellEditComplete(event) {
      let { data, newValue, field } = event;
      if (!/[2-5]/.test(newValue)) newValue = "-";
      if (newValue.trim().length > 0) data[field] = newValue;
      else event.preventDefault();
    },
  },
};
</script>
