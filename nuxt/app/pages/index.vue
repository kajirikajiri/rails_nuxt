<template>

  <v-layout>
    <v-flex>
      <v-list>
        <v-list-tile v-for="example in api.data" :key="example.id" :class="example.colour">
          <v-list-tile-content>{{example.name}}{{TEST}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
      {{api.data}}
      <button @click="colour({name: bar_name, colour: bar_colour})">colour</button>
      <input v-model="bar_colour">
      <input v-model="bar_name">
      <button @click="sign_up_button_func({email: email,password: password})">signup</button>
      <input v-model="email">
      <input v-model="password">
      <button @click="sign_in({email: email,password: password})">signin</button>
    </v-flex>
  </v-layout>
</template>

<script>
import api from '../plugins/axios';
import {mapActions,mapState} from 'vuex'
export default {
  data () {
    return {
      examples: [],
      TEST: process.env.TEST, // 環境変数テスト中
    }
  },
  methods: {
    async updateExamples() {
      console.log('log',await api.get('/posts'))
    },
    ...mapActions({
      set_api: 'api/updateActionValue',
      colour: 'api/colour',
      sign_up: 'api/sign_up',
      sign_in: 'api/sign_in'
    }),
    async sign_up_button_func({email,password}) {
      const result = await this.sign_up({email:email,password:password})
      return result ? console.log('signup!!'):console.log('signup miss ...')
    },
    async sign_in_button_func({email,password}) {
      const result = await this.sign_in({email:email,password:password})
      return result ? console.log('signin!!'):console.log('signin miss ...')
    }
  },
  computed: {
    ...mapState({
      api: state => state.api.value
    })
  },
  mounted () {
    this.set_api()
    this.updateExamples()
  }
}
</script>

<style scoped>
</style>
