<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-tile v-for="example in api.data" :key="example.id" :class="example.colour">
          <v-list-tile-content>{{example.name}}{{TEST}}</v-list-tile-content>
        </v-list-tile>
      </v-list>{{api.data}}
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
      set_api: 'api/updateActionValue'
    })
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