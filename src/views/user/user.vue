
<!-- 个人中心页面 展示用户头像,用户iduserId,手机号userPhone,用户积分userPoints -->
<template>
  <div id="app">
    <div class="user-profile" >
      <el-row class="tac">
        <el-col :span="1">
          <div><p style="color:white;">.</p></div>
        </el-col>
        
        <MessageBox v-for="(message) in messageList" 
        :userId=message.userId
        :userName="message.userName"
        :message="message.message"
        :avatar="message.avatar"
        :numOfNewMessage="message.numOfNewMessage"
        />

      </el-row>
    </div>
  </div>

</template>

<script>
import MessageBox from './messageBox.vue'
export default {
  components:{MessageBox },
  data() {
    return {
      messageList:[
          {
            userId:1,
            userName:"昨日机器A数据",
            message:"耗电数据：123123123123123",
            avatar:"",
            numOfNewMessage:6,
          },
          {
            userId:2,
            userName:"设计迭代方案",
            message:"方案1：xxxxxx",
            avatar:"",
            numOfNewMessage:6,
          },
      ]
      // dialogVisible: false
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped>
.clock{
  /*background-color: #005dba;*/
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
#chat .chatBox {
            width: 100%;
            height: auto;
            margin: 2.5rem auto 0;
      margin-top: 0;
            background-color: #fff;
            overflow: hidden;
            border-radius: 0.625rem;
        }
 
        #chat .chatBox-top {
            width: 100%;
            height: 3.75rem;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            background-color: #2B3D63;
        }
 
        #chat .chatBox-top-imgBox {
            margin-left: 1.25rem;
        }
 
        #chat .chatBox-top-text {
            margin-left: 1.25rem;
            font-size: 1rem;
            color: #fff;
        }
 
        #chat .chatBox-middle {
            width: 100%;
            height: 31.25rem;
            background-color: #fff;
            border-bottom: 0.0625rem solid #2B3D63;
        }
 
        #chat .chatBox-middle {
            width: 100%;
            height: 31.25rem;
            background-color: #fff;
        }
 
        #chat .chatBox-infoDesk {
            width: 100%;
            height: 10rem;
        }
 
        #chat .chatBox-textarea {
            width: 100%;
            height: 6.25rem;
        }
 
        #chat .chatBox-sendOut {
            margin-top: 0.625rem;
            width: 100%;
            height: 3.125rem;
            text-align: right;
        }
 
        #chat .sendOut {
            padding: 0 1.25rem;
            height: 2.1875rem;
            margin: 0.3125rem 1.25rem 0 0;
        }
 
        #chat .chatInfo {
            width: 94%;
            height: 94%;
            margin: 1.25rem auto;
            overflow: auto;
        }
 
        #chat .chatUser-box {
            width: 100%;
            margin-bottom: 6px;
            display: flex;
            flex-direction: row;
        }
        
        
        #chat .chatUser-box-img {
            display: flex;
        }
 
        #chat .chatUser-info {
            margin: 0 1.25rem;
        }
 
        #chat .chatUser-info-name {
            font-size: 0.875rem;
            color: #888;
            display: flex;
            flex-direction: row;
        }
 
        #chat .nowDate {
            margin: 0 0.625rem;
        }
 
        #chat .chatUser-info-text {
            margin-top: 0.3125rem;
            max-width: 20rem;
            padding: 0.5rem;
            background-color: #E8E8E8;
            border-radius: 0.5rem;
            float: left;
            table-layout:fixed;
            word-break: break-all;
            overflow:hidden;
        }
 
        #chat .chatUser-info-text span{
            font-size: 0.9375rem;
            line-height: 1.5625rem;
        }
        #chat .chatUser-box1 {
            flex-direction: row-reverse;
        }
        #chat .chatUser-info-name1 {
            flex-direction: row-reverse;
        }
        #chat .chatUser-info-text1 {
            float: right;
      }
</style>
