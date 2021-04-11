<template>
  <rs-form class="form" ref="form" :model="user" :rules="rules">
    <rs-form-item label="用户名" prop="username">
      <!-- <rs-input v-model="user.username"></rs-input> -->
      <rs-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></rs-input>
    </rs-form-item>
    <rs-form-item label="密码" prop="password">
      <rs-input type="password" v-model="user.password"></rs-input>
    </rs-form-item>
    <rs-form-item>
      <rs-button type="primary" @click="login">登 录</rs-button>
    </rs-form-item>
  </rs-form>
</template>

<script>
import RsForm from './form/Form.vue'
import RsFormItem from './form/FormItem.vue'
import RsInput from './form/Input.vue'
import RsButton from './form/Button.vue'
export default {
  name: 'form-test',
  components:{
    RsForm,
    RsFormItem,
    RsInput,
    RsButton
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
}
</script>

<style>
  .form {
    width: 30%;
    margin: 150px auto;
  }
</style>
