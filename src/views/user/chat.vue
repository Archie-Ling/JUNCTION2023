<!-- 个人中心页面 展示用户头像,用户iduserId,手机号userPhone,用户积分userPoints -->
<template>
    <div id="app">
      <div class="user-profile">
        <el-row class="tac">
          <el-col :span="1">
            <div><p style="color:white;">.</p></div>
          </el-col>
          <!-- 页面主题内容 -->
          <el-col :span="22">
            <div id="chat">
            <div class="chatBox">
              <div class="chatBox-top">
                <div class="chatBox-top-imgBox">
                  <van-image round width="2.5rem" height="2.5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                </div>
                <div class="chatBox-top-text">
                  <span>{{ thisChatInfo.userName }}</span>
                </div>
              </div>
              <van-icon class="chatBox-back" @click="back" name ="revoke"></van-icon>
              <div class="chatBox-middle">
                <div class="chatInfo" id="chatInfo">
                  <div class="chatUser-box" v-for="(message) in thisChatInfo.messageList" :class="[message.isMyText?'chatUser-box1':'chatUser-box']">
                    <div class="chatUser-box-img">
                      <van-image round width="2.5rem" height="2.5rem"
                        :src="message.messageImg" />
                    </div>
                    <div class="chatUser-info">
                      <div class="chatUser-info-name" :class="[message.isMyText?'chatUser-info-name1':'chatUser-info-name']"><span class="nowDate">{{message.time}}</span>
                      </div>
                      <div class="chatUser-info-text" :class="[message.isMyText?'chatUser-info-text1':'chatUser-info-text']">
                        <span>{{message.messageText}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chatBox-fastChat">
                  <van-button class="fastChat" type="primary" @click="fastChatEvent(woqu,hahaha)">今日数据</van-button>
                  <van-button class="fastChat" type="primary" @click="">今日数据</van-button>
                  <van-button class="fastChat" type="primary" @click="">今日数据</van-button>
              </div>
              <div class="chatBox-infoDesk">
                <div class="chatBox-textarea">
                  <van-field v-model="messages" rows="4" type="textarea" placeholder="请输入咨询信息" />
                </div>
                <div class="chatBox-sendOut">
                  <van-button class="sendOut" type="primary" @click="getSends">客户</van-button>
                  <van-button class="sendOut" type="primary" @click="getSend">用户</van-button>
                </div>
              </div>
            </div>
          </div>
          </el-col>
  
        </el-row>
      </div>
    </div>
  
  </template>
  
  <script>
  export default {
    name:"chat",
    data() {
      return {
        messages:"",
        chatInfo:[{
            userId:1,
            userName:"昨日机器A数据",
            messageList:[
              {
                time:"16:28",
                isMyText:false,
                messageText:"xxxxxxxxxxxxxxxxxxxxxxxxx",
                messageImg:""
              },
              {
                time:"16:28",
                isMyText:true,
                messageText:"xxxxxxxxxxxxxxxxxxxxxxxxx",
                messageImg:""
              },
            ],
          },
          {
            userId:2,
            userName:"设计迭代方案",
            messageList:[
              {
                time:"16:28",
                isMyText:false,
                messageText:"",
                messageImg:""
              }
            ],
          },
        ],
        thisChatInfo:{
        }
      }
    },
    created() {
      this.InitChatInfo();
    },
    methods: {
      fastChatEvent(msg,img){
        let info={
          time:"",
          isMyText:false,
          messageText:msg,
          messageImg:img
        }
        this.thisChatInfo.messageList.push(info)
      },
      InitChatInfo(){
        const id = this.$route.query.userId;
        this.chatInfo.forEach(info => {
          console.log(info);
          if(info.userId==id){
            this.thisChatInfo=info;
          }
        });
      },
      getSend(){
        if(this.messages == ''){
          return
        }
        let message={
          time:Date.now().toString(),
          isMyText:true,
          messageText:this.messages,
          messageImg:""
        }
        this.thisChatInfo.messageList.push(message)
        this.messages = ''
      },
      getSends(){
        if(this.messages == ''){
          return
        }
        let message={
          time:Date.now,
          isMyText:false,
          messageText:this.messages,
          messageImg:""
        }
        this.thisChatInfo.messageList.push(message)
        this.messages = ''
      },
      back(){
        this.$router.go(-1);
      }
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
  .fastChat{
    margin: 10px;
    float: right;
    height: 20px;
    border: 1px solid rgb(241, 241, 241);
    background-color: transparent;
    color: gray;
    border-radius: 10px;
  }
  .chatBox-back{
    float: right;
    color: white;
    margin-top: -15%;
    margin-right: 5%;
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
  
  
  