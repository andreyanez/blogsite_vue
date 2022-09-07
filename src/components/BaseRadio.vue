<template>
  <input
      type="radio"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
      :id="uuid"
      :checked="modelValue === value"
      :value="value"
    />
  <label v-if="label" :for="uuid">{{ label }}</label>
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
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    },
    error: {
      type: String,
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
