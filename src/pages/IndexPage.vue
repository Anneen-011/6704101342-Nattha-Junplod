<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">Basic Form</div>
      </q-card-section>

      <q-card-section>
        <q-input filled v-model="name" label="Name" />
        <q-input filled v-model="email" label="Email" type="email" />
        <q-input filled v-model="password" label="Password" type="password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Submit" color="primary" @click="submitForm" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

function submitForm() {
  alert(`Name: ${name.value}\nEmail: ${email.value}`)
}
</script>
