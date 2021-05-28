<template>
<div>
  Hello
  <router-link to="/details"> 进去详情页 </router-link>
</div>
</template>

<script>
export default {
  name: 'dispatch',
  mounted () {
  },
  created () {
    this.init()
  },
  methods: {
    init () {
    }
  }
}
</script>

<style scoped>

</style>
