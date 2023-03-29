<template>
  <Form @submit="handleLogin" :validation-schema="schema" class="auth-form">
    <div class="auth-form__content-wrapper">
      <label for="login">login</label>
      <Field class="auth-form__form-input" type="text" name="login"></Field>
      <ErrorMessage name="username" class="auth-form__error" />
      <label for="password">Пароль</label>
      <Field
        class="auth-form__form-input"
        type="password"
        name="password"
      ></Field>
      <ErrorMessage name="password" class="auth-form__error" />
    </div>
    <div class="auth-form__butn-wrapper">
      <Button
        :disabled="isLoading"
        label="Войти"
        class="auth-form__butn"
        type="submit"
      />
      <!--<button class="auth-form__butn" :disabled="isLoading">Войти</button>-->
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
    };
  },

  computed: {
    schema() {
      return yup.object({
        login: yup.string().trim().required("Обязательное поле"),
        password: yup.string().trim().min(8).required("Обязательное поле"),
      });
    },
  },

  methods: {
    async handleLogin(values) {
      console.log(values);
      this.$emit("hideDialog");
      this.isLoading = true;
      try {
        //User authorization
        await this.login({ login: values.login, password: values.password });
      } catch (error) {
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
  padding: 2px 10px;
  border: 1px solid var(--color-light-black);
  border-radius: 8px;
  margin: 5px 0;
}
.auth-form__butn-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.auth-form__butn {
  color: white;
}
</style>
