<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <select
    class="field"
    :value="modelValue"
    :id="uuid"
    v-bind="{
      ...$attrs,
      onchange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from "@/features/UniqueID";
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
    },
  },
  setup() {
    // const { updateValue } = SetupFormComponent(props, context)
    const uuid = UniqueID().getID();
    return {
      // updateValue,
      uuid,
    };
  },
};
</script>

<style></style>
