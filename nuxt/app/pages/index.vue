<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-tile v-for="example in examples" :key="example.id" :class="example.colour">
          <v-list-tile-content>{{example.name}}{{TEST}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      examples: [],
      TEST: process.env.TEST // 環境変数テスト中
    }
  },
  methods: {
    async updateExamples() {
      this.examples = await this.$axios.$get('/examples')
      console.log('log',await this.$axios.$get('/posts'))
    }
  },
  mounted () {
    this.updateExamples()
  }
}
</script>