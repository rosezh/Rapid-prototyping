import Button from './src/button.vue'
//为了别人用时可以直接通过vue.use()使用
Button.install = Vue=> {
  Vue.component(Button.name, Button)
}

export default Button