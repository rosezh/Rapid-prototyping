<template>
  <div class="lg-steps">
    <div class="lg-steps-line"></div>
    <div
     class="lg-step"
     v-for="index in count"
     :key="index"
     :style="{ color : active>= index ? activeColor : defaultColor }"
    >
    {{index}}
    </div>
  </div>
</template>

<script>
import './steps.css'
export default {
  name:'steps',
  props:{//接收父组件传递过来的数据
    count:{//设置步骤数
      type:Number,
      default:3
    },
    active:{//当前完成了几步
      type:Number,
      default:1
    },
    activeColor:{//完成步骤的字体颜色
      type:String,
      default:'red'
    },
    defaultColor:{
      type:String,
      default:'green'
    }
  }
}
</script>

<style>

</style>