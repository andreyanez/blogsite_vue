<template>
  <section class="section section-header-offset loginForm">
    <form @submit.prevent="submit">
      <fieldset>
        <div class="field_wrapper">
          <BaseInput
            label="Email"
            type="email"
            :error="errors.email"
            :modelValue="email"
            @change="handleChange"
          />
        </div>
        <div class="field_wrapper">
          <BaseInput
            label="Password"
            type="password"
            v-model="password"
            :error="errors.password"
          />
        </div>
      </fieldset>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const validationSchema = object({
      email: string().email("must be vaild email").required(),
      password: string().required("A password is required").min(6),
    });

    const { handleSubmit, errors, setFieldValue } = useForm({
      validationSchema,
    });

    const { value: email } = useField("email");
    const { value: password } = useField("password");

    const handleChange = (event) => {
      setFieldValue("email", event.target.value);
    };

    const submit = handleSubmit((values) => {
      console.log("submit", values);
      router.push("/home");
    });

    return {
      submit,
      email,
      password,
      errors,
      handleChange,
    };
  },
};
</script>

<style>
@import "@/styles/views/createPost.css";
</style>
