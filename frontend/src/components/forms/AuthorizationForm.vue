<template>
  <Form @submit="handleLogin" :validation-schema="schema" class="auth-form">
    <div class="auth-form__content-wrapper">
      <label for="username">username</label>
      <Field class="auth-form__form-input" type="text" name="username"></Field>
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
      <button class="auth-form__butn" :disabled="isLoading">Войти</button>
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "authorization-form",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["hideDialog"],
  data() {
    return {
      errorMessage: "",
      isLoading: false,
    };
  },
  computed: {
    schema() {
      return yup.object({
        username: yup.string().trim().required("Обязательное поле"),
        password: yup.string().trim().min(8).required("Обязательное поле"),
      });
    },
  },
  methods: {
    async handleLogin(values) {
      console.log(values);
      this.$emit("hideDialog");
      //this.isLoading = true;
      //try {
      //  await this.login({ email: values.email, password: values.password });
      //  this.$emit("hideDialog");
      //} catch (error) {
      //  this.errorMessage =
      //    (error.response &&
      //      error.response.data &&
      //      error.response.data.message) ||
      //    error.message ||
      //    error.toString();
      //  console.log(this.message);
      //}
      //this.isLoading = false;
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
