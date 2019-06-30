<template>
<div>
  <v-layout>
    <v-flex>
    <Zdog/>
      <template v-if="page_render_flag">
      <v-btn @click="colour({name: bar_name, colour: bar_colour})">color add</v-btn>
      <v-text-field :dark="true" prepend-icon="color_lens" label="color" v-model="bar_colour"/>
      <v-text-field :dark="true" prepend-icon="edit" label="text" v-model="bar_name"/>
      <v-list>
        <v-list-tile v-for="example in api.data" :key="example.id" :class="example.colour">
          <v-list-tile-content>{{example.name}}{{TEST}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
      {{api.data}}
      </template>
      <template v-if="!page_render_flag">
        <div>
           <v-text-field
           v-model="email"
          prepend-icon="email"
          :dark="true"
          label="E-mail"
          :rules="[rules.required, rules.email]"
        />
        <v-text-field
        v-model="password"
          prepend-icon="lock"
          :dark="true"
          :rules="[rules.required, rules.min]"
            label="password"
          />
          <v-btn @click="sign_up_button_func({email: email,password: password})">signup</v-btn>
          <v-btn @click="sign_in_button_func({email: email,password: password})">signin</v-btn>
        </div>
      </template>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import api from '../plugins/axios';
import {mapActions,mapState} from 'vuex'
import Zdog from './zdog/index'
export default {
  components: {
    Zdog
  },
  data () {
    return {
      examples: [],
      page_render_flag: false,
      TEST: process.env.TEST, // 環境変数テスト中
      rules: {
          required: value => !!value || 'Required.',
          min: v => !v || v.length >= 8 || 'Min 8 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
      }
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
      return result ? this.page_render_flag = true:console.log('signin miss ...')
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
