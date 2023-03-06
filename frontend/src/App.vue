<template>
  <div class="content-wrapper">
    <button @click="showDialog = !showDialog">show/hide</button>
    <RouterView />
  </div>
  <main-dialog v-model:show="showDialog">
    <authorization-form @hideDialog="showDialog = false" />
  </main-dialog>
  <side-menu />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import MainDialog from "@/components/MainDialog.vue";
import SideMenu from "@/components/SideMenu.vue";
import AuthorizationForm from "@/components/forms/AuthorizationForm.vue";
export default {
  components: {
    MainDialog,
    AuthorizationForm,
    SideMenu,
  },
  data() {
    return {
      showDialog: false,
    };
  },
};
</script>

<style scoped>
.content-wrapper {
  padding-left: 146px;
}

@media (max-width: 480px) {
  .content-wrapper {
    padding-left: 0px;
    padding-bottom: 100px;
  }
}
</style>
