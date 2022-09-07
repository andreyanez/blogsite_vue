<template>
    <label :for="uuid" v-if="label">{{label}}</label>
    <input
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="uuid"
        :value="modelValue"
        :placeholder="label"
        :aria-describedby="error ? `${uuid}-error` : null"
        :aria-invalid="error ? true : false"
        :class="{ error }"
    >
    <BaseErrorMessage
      v-if="error"
      :id="`${uuid}-error`"
    >
      {{ error }}
    </BaseErrorMessage>
</template>

<script>
import UniqueID from '../features/UniqueID'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  setup () {
    const uuid = UniqueID().getID()
    return {
      uuid
    }
  }
}
</script>

<style>

</style>
