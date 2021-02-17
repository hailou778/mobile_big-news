<template>
  <div>
    <div class="user-profile">
      <div class="info">
        <van-image round :src="user.photo" />
        <h3 class="name">
          {{user.name}}
          <br />
          <van-tag size="mini">{{user.birthday}}</van-tag>
        </h3>
      </div>
    </div>

    <!-- 操作链接 -->
    <van-row class="user-links">
      <van-col span="8">
        <van-icon name="newspaper-o" color="#7af" />我的作品
      </van-col>
      <van-col span="8">
        <van-icon name="star-o" color="#f00" />我的收藏
      </van-col>
      <van-col span="8">
        <van-icon name="tosend" color="#fa0" />阅读历史
      </van-col>
    </van-row>

     <!-- 编辑入口 -->
    <van-cell-group class="user-group">
      <van-cell icon="edit" title="编辑资料" to="/user/profile" is-link />
      <van-cell icon="chat-o" title="小智同学" to="/user/chat" is-link />
      <van-cell icon="setting-o" title="系统设置" is-link />
      <van-cell icon="warning-o" title="退出登录" to="/login" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
  name: 'User',

  data () {
    return {
      // 存个人信息
      user: {}
    }
  },

  async created () {
    const res = await getUserInfo()
    console.log(res.data.data)
    // 将请求到的数据存到user中
    this.user = res.data.data
  }
}
</script>

<style scoped lang='less'>
.user {
  &-profile {
    width: 100%;
    height: 100px;
    display: block;
    background: #3296fa;
    color: #fff;
    .info {
      display: flex;
      padding: 20px;
      align-items: center;
      .van-image {
        width: 64px;
        height: 64px;
      }
      .name {
        font-size: 16px;
        font-weight: normal;
        margin-left: 10px;
      }
      .van-tag {
        background: #fff;
        color: #3296fa;
      }
    }
  }
  &-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  .van-icon {
    display: block;
    font-size: 24px;
    padding-bottom: 5px;
  }
}
}
</style>
