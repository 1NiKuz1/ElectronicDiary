<template>
  <div class="side-menu">
    <div class="side-menu__content">
      <nav class="side-menu__nav">
        <ul class="side-menu__elements">
          <template v-if="isLogged">
            <li
              class="side-menu__el"
              v-if="
                userData.user.role === 'student' ||
                userData.user.role === 'teacher'
              "
            >
              <button class="side-menu__button" @click="goByRoute('/schedule')">
                расп
              </button>
            </li>
            <li class="side-menu__el" v-if="userData.user.role === 'admin'">
              <button
                class="side-menu__button"
                @click="goByRoute('/edit-schedule')"
              >
                арасп
              </button>
            </li>
            <li class="side-menu__el" v-if="userData.user.role === 'student'">
              <button class="side-menu__button" @click="goByRoute('/diary')">
                сднев
              </button>
            </li>
            <li class="side-menu__el" v-if="userData.user.role === 'teacher'">
              <button class="side-menu__button" @click="goByRoute('/journal')">
                журнал
              </button>
            </li>
            <li class="side-menu__el">
              <button class="side-menu__button" @click="logout">выход</button>
            </li>
          </template>
          <li class="side-menu__el" v-if="!isLogged">
            <button class="side-menu__button" @click="isShowDialog = true">
              вход
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <Dialog v-model:visible="isShowDialog" modal header="Авторизация">
    <AuthorizationForm @hideDialog="isShowDialog = false" />
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import AuthorizationForm from "@/components/forms/AuthorizationForm.vue";
import { useAuthStore } from "@/stores/auth";
import { useDataStore } from "@/stores/data";
import { storeToRefs } from "pinia";
export default {
  name: "side-menu",
  components: {
    Dialog,
    AuthorizationForm,
  },

  setup() {
    const auth = useAuthStore();
    const data = useDataStore();
    const { userData } = auth;
    const { isLogged } = storeToRefs(auth);
    const { logout } = auth;
    return {
      userData,
      isLogged,
      logout,
      data,
    };
  },

  data() {
    return {
      isShowDialog: false,
    };
  },

  methods: {
    async logout() {
      await this.logout();
      this.data.$reset();
      this.$router.push("/");
    },

    goByRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.side-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 98px;
  background: var(--color-blue);
  z-index: 100;
}

.side-menu__elements {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.side-menu__button {
  line-height: 1;
  font-size: 18px;
  padding: 20px 0;
  color: var(--color-text);
  transition: color 0.15s ease-out;
}

.side-menu__button:hover {
  color: var(--color-accent);
}

.side-menu__button:focus {
  color: var(--color-dark-green);
}

@media (max-width: 600px) {
  .side-menu {
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: 98px;
  }

  .side-menu__elements {
    flex-direction: row;
    margin-top: 0px;
  }

  .side-menu__button {
    padding: 0px 20px;
  }
}
</style>
