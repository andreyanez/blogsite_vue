<template>
    <input
      @change="$emit('update:modelValue',$event.target.checked)"
      :checked="modelValue"
      :id="uuid"
      type="checkbox"
      class="field"
    />
    <label v-if="label" :for="uuid">{{label}}</label>
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
      type: Boolean,
      default: false
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

<style>

</style>
