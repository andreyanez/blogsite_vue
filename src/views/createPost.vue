<template>
  <section class="section section-header-offset createPost">
    <h1>Create a new article!</h1>
    <form @submit="submit">

      <BaseSelect
        label="Select a category"
        :options="tagNames"
        v-model="category"
        :error="errors.category"
      />

      <fieldset>
        <BaseInput
          v-model="title"
          label="Title"
          type="text"
          :error="errors.title"
        />
        <BaseInput
          v-model="description"
          label="Description"
          type="text"
          :error="errors.description"
        />
        <BaseInput
          v-model="location"
          label="Location"
          type="text"
          :error="errors.location"
        />
      </fieldset>

      <fieldset>
        <legend>Are pets allowed?</legend>
        <BaseRadioGroup
          name="pets"
          :options="[
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
          ]"
          v-model="pets"
          :error="errors.pets"
        />
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox
            v-model="catering"
            label="Catering"
            :error="errors.catering"
          />
        </div>
        <div>
          <BaseCheckbox
            v-model="music"
            label="Live Music"
            :error="errors.music"
          />
        </div>
      </fieldset>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { useField, useForm } from 'vee-validate'
import { object, string, number, boolean } from 'yup'
export default {

  setup () {
    // instantiate vuex store
    const store = useStore()
    // no need to use this.$store anymore
    store.dispatch('getTags')

    // validation, creating schema, which stablishes validations with yup
    const validationSchema = object({
      category: string().required(),
      title: string().required('A cool title is required').min(3),
      description: string().required(),
      location: string(),
      pets: number(),
      catering: boolean(),
      music: boolean()
    })

    // we use useForm to set the validation made with the schema, as well as the errors set there
    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        pets: 1,
        catering: false,
        music: false
      }
    })

    // we use useField to link the fields
    const { value: category } = useField('category')
    const { value: title } = useField('title')
    const { value: description } = useField('description')
    const { value: location } = useField('location')
    const { value: pets } = useField('pets')
    const { value: catering } = useField('catering')
    const { value: music } = useField('music')

    // the method which fires when the form gets send with the button
    const submit = handleSubmit(values => {
      console.log('submit', values)
    })

    return {
      tagNames: computed(() => {
        return store.state.tags.map((tag) => {
          return tag.tagName
        })
      }),
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      submit,
      errors
    }
  }
}
</script>

<style>
@import "@/styles/views/createPost.css";
</style>
