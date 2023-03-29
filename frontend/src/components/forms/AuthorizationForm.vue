<template>
  <Form @submit="handleLogin" :validation-schema="schema" class="auth-form">
    <div class="auth-form__content-wrapper">
      <label for="login">Логин</label>
      <Field
        class="auth-form__form-input p-inputtext p-component"
        type="text"
        name="login"
      ></Field>
      <ErrorMessage name="login" class="auth-form__error" />
      <label for="password">Пароль</label>
      <Field
        class="auth-form__form-input p-inputtext p-component"
        type="password"
        name="password"
      ></Field>
      <ErrorMessage name="password" class="auth-form__error" />
      <p class="auth-form__error" v-if="isLogError">
        Неверно введен логин или пароль
      </p>
    </div>
    <div class="auth-form__butn-wrapper">
      <Button :disabled="isLoading" label="Войти" type="submit" />
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Button from "primevue/button";
import * as yup from "yup";
import { useAuthStore } from "@/stores/auth";

export default {
  name: "authorization-form",
  components: {
    Form,
    Field,
    ErrorMessage,
    Button,
  },

  emits: ["hideDialog"],

  setup() {
    const auth = useAuthStore();
    const { login } = auth;
    return {
      login,
    };
  },

  data() {
    return {
      isLoading: false,
      isLogError: false,
    };
  },

  computed: {
    schema() {
      return yup.object({
        login: yup.string().trim().required("Обязательное поле"),
        password: yup.string().trim().required("Обязательное поле"),
      });
    },
  },

  methods: {
    async handleLogin(values) {
      this.isLoading = true;
      this.isLogError = false;
      try {
        //User authorization
        await this.login({ login: values.login, password: values.password });
        this.$emit("hideDialog");
      } catch (error) {
        this.isLogError = true;
        console.log(error);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
}

.auth-form__fogort-wrapper {
  display: flex;
  justify-content: space-between;
}

.auth-form__error {
  color: red;
}
.auth-form__content-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.auth-form__form-input {
  margin: 5px 0;
}
.auth-form__butn-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
</style>
