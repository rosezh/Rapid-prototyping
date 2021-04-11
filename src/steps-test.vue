<template>
  <div>
    <steps :count="count" :active="active"></steps>
    <button @click="next">下一步</button>
  </div>
</template>

<script>
import steps from './steps.vue'
export default {
  components:{
    steps
  },
  data(){
    return{
      count:4,
      active:0
    }
  },
  methods:{
    next(){
      this.active++
    }
  }
}
</script>

<style>

</style>