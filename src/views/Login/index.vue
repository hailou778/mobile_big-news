<template>
  <div>
    <!-- 通用导航条 -->
    <van-nav-bar title="登录"/>

    <!-- 表单 -->
    <van-form @submit="onSubmit">
  <van-field
    v-model="mobile"
    type="Number"
    label="手机号"
    placeholder=" 请输入您的手机号"
    :rules="rules.mobile"
    required
  />
  <van-field
    v-model="code"
    type="Number"
    label="验证码"
    placeholder=" 请输入验证码"
    :rules="rules.code"
    required
  />
  <div style="margin: 16px;">
    <van-button :disabled='isLoading' :loading='isLoading'
    loading-text="正在玩命加载中..."
    round block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '13912345678',
      code: '246810',
      // 表单校验
      rules: {
        mobile: [
          { required: true, message: '输入手机号', trigger: 'onBlur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误', trigger: 'onChange' }
        ],
        code: [
          { required: true, message: '输入验证码', trigger: 'onBlur' },
          { pattern: /^\d{6}$/, message: '验证码格式错误', trigger: 'onChange' }
        ]
      },

      // loading效果 &禁用
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      // 点击登录后，loading效果&禁用开启
      this.isLoading = true
      // 发送axios，提交表单
      try {
        const res = await login(this.mobile, this.code)
        console.log(res)
        this.$toast.success('登录成功')
        // 跳转到登录页
        this.$router.push('/')

        //  存token到vuex中
        this.$store.commit('setToken', res.data.data)
      } catch (error) {
        this.$toast.fail('登录失败')
      }
      // 请求发完后loading效果&禁用关闭
      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>
