<template>
  <div class="mainLeftMenu">
    <div style="margin: 20px auto;" @click="homePage()">
      <el-badge :type="onlineType" is-dot class="item" >
        <el-avatar v-if="kefuImg !== ''" class="mainLogo" title="智能客服" :size="45" :src="kefuImg"></el-avatar>
      </el-badge>
    </div>
    <div class="menuLeftItem">
      <div class="menuLeftItem" :class="{ active: activeItem === 'pannel' }" @click="changeActiveItem('pannel'); changeComponent('pannel')">
        <i class="el-icon-platform-eleme"></i>
        <span slot="title">面板</span>
      </div>

      <div class="menuLeftItem" :class="{ active: activeItem === 'chat_main' }" @click="changeActiveItem('chat_main'); changeComponent('chat_main')">
        <i class="el-icon-chat-dot-round"></i>
        <span slot="title">对话</span>
      </div>

      <div style="display: none" class="menuLeftItem" @click="changeComponent('setting_deploy')">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">对接</span>
      </div>

      <div class="menuLeftItem" :class="{ active: activeItem === 'setting' }" @click="changeActiveItem('setting'); changeComponent('setting')">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </div>

      <div class="menuLeftItem menuLeftItemLogout" :class="{ active: activeItem === 'logout' }" @click="changeActiveItem('logout'); logout()">
        <i class="el-icon-switch-button"></i>
        <span slot="title">退出</span>
      </div>
    </div>
  </div>
</template>


<script>
import pannel from "@/views/pannel.vue";
import chat_main from "@/views/chat_main.vue";
import setting_deploy from "@/views/setting_deploy.vue";
import setting from "@/views/setting.vue";
import login from "@/views/login.vue";
import home_page from "@/views/home_page.vue";
import {sendAjax} from "../../public/static/js/functions";

export default {
  data() {
    return {
      activeItem: 'chat_main',
      window: window,
      mailTotal: 0,
      adminAvator: "",
      adminRole: "",
      onlineType: "success",
      haveNewMessage: "",
      kefuImg: "",
    }
  },
  methods: {
    changeActiveItem(item) {
      this.activeItem = item;
    },
    changeComponent(componentName) {
      this.$emit('change-component', componentName);
    },
    //退出
    logout() {
      localStorage.removeItem("token");
      window.location.href = "/login"
    },
    homePage() {
      this.changeComponent("home_page")
    }
  },
  created() {
    let _this = this
    sendAjax("/kefuinfo", "get", {}, function (result) {
      _this.kefuImg = result.avator;
      // _this.$set(_this, 'kefuImg', result.avator);
    });
  },
  components: {
    pannel,
    chat_main,
    setting_deploy,
    setting,
    login,
    home_page
  },
}
</script>