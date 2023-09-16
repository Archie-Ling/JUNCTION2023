<template>
    <div class="base"
        @click="chat">
      <div
        class="content"
      >
      <div class="img"><img :src="avatar" v-if="checkIcon()"/></div>
      <span class="newcount">{{ numOfNewMessage }}</span>
      <div class="title">{{ userName || "未知用户" }}</div>
      <div class="message">{{ message || "" }}</div>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MessageBox",
    props: {
      userId:{
        type:[Number],
        default() {
          return 0;
        }
      },
      userName: {
        type: [Number, String],
        default() {
          return "";
        }
      },
      message:{
        type: [Number, String],
        default() {
          return "";
        }
      },
      avatar: {
        type: [Number, String],
        default() {
          return "";
        }
      },
      numOfNewMessage:{
        type: [Number],
        default() {
          return 0;
        }
      }
    },
    methods:{
      checkIcon(){
        if(this.avatar=="")return false;//defaultAvatar
        return true;
      },
      chat(){
        console.log("clicked");
        this.$router.push({ 
          path: '/user/chat' ,
          query:{userId:this.userId}
          },
        )
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .base {
    width: calc(100% - 20px);
    margin: auto;
    height: 100%;
    border-radius: 3px;
    padding: 0px;
    .title {
      font-size: 16px;
      font-weight: bold;
      display: inline-block;
    }
    .content {
      margin-top: 10px;
      background: #fff;
      box-shadow: 0 0 4px 1px #ddd;
      padding: 20px;
      height: 100px;
    }
    .img {
      border: 1px solid #ddd;
      width: 60px;
      height: 100%;
      float: left;
      margin-right: 10px;
      border-radius: 10px;
    }
    .message{
        font-size: 14px;
        overflow: hidden;
        color: gray;
    }
    .newcount{
        float: right;
        background-color: red;
        color: white;
        border-radius: 50px;
        border: 1px solid white;
        width: 30px;
        text-align: center;
    }
  }
  </style>
  