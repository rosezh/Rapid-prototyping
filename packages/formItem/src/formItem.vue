<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
      <p v-if='errMessage'>{{ errMessage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name:'RsFormItem',
  inject: ['form'],
  props:{
    label:{
      type:String
    },
    prop:{
      type:String
    }
  },
  mounted(){
    // 组件渲染完毕注册自定义事件
    this.$on('validate', ()=>{
      console.log('注册validate事件')
      this.validate()
    })
  },
  data(){
    return{
      errMessage:''
    }
  },
  methods:{
    validate(){
      if (!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>