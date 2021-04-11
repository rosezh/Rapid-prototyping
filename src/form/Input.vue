<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name:'RsInput',
  //禁用继承父组件传过来的属性
  inheriAttrs:false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods:{
    handleInput(evt){
      this.$emit('input',evt.target.value)
      const findParent = parent => {
        while(parent){
          if(parent.$options.name === 'RsFormItem'){
            break
          }else{
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if(parent){
        // 有parent,触发自定义事件
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>

</style>