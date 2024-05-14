<!--<link rel="stylesheet" href="https://cdn.staticfile.org/element-ui/2.15.1/theme-chalk/index.min.css">-->
<!--<script src="https://cdn.staticfile.org/vue/2.6.9/vue.min.js">-->

<!--</script>-->
<!--<script src="https://cdn.staticfile.org/element-ui/2.15.1/index.js"></script>-->
<!--<script src="https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js"></script>-->

<!--<link rel="stylesheet" href="/static/css/common.css">-->
<!--<script src="/assets/js/functions.js"></script>-->
<style>
@import "/public/static/css/common.css";

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

.text-center {
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  overflow: hidden;
  background-color: #f5f5f5;
}

.el-aside {
  height: 100%;
  background: #fff;
  border: solid 1px #e6e6e6;
}

.el-aside .el-menu {
  border-right: none;
}

.mainLogo {
  font-size: 20px;
  font-weight: bold;
}

.mainMain {
  background: #fff;
  margin-left: 10px;
  margin-bottom: 60px;
}

.el-card__body {
  cursor: pointer;
}

</style>


<template>
  <div class="text-center">
    <Nav @change-component="handleComponentChange"></Nav>
    <div class="mainRight">
      <component v-if="this.socket" :socket=this.socket :kfConfig=this.kfConfig :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>

import Nav from "@/template/nav.vue";
import pannel from "@/views/pannel.vue";
import chat_main from "@/views/chat_main.vue";
import setting_deploy from "@/views/setting_deploy.vue";
import setting from "@/views/setting.vue";
import login from "@/views/login.vue";
import {getWsBaseUrl, notify} from "@/../public/static/js/functions";
import ReconnectingWebSocket from '@/../public/static/js/reconnecting-websocket.min';
import home_page from "@/views/home_page.vue";

export default {
  data() {
    return {
      currentComponent: 'chat_main',
      server: getWsBaseUrl() + "/ws_kefu?token=" + localStorage.getItem("token"),
      socket: null,
      kfConfig: {
        id: "kf_1",
        name: "客服丽丽",
        avator: "",
        to_id: "",
      },
    }
  },
  methods: {
    handleComponentChange(componentName) {
      // 在这里处理组件切换逻辑
      this.currentComponent = componentName
    },
    focusWindow() {
      var _this = this;
      window.addEventListener('message', function (e) {
        var redata = e.data;
        if (!redata.name || !redata.body) {
          return;
        }
        notify(redata.name, {
          body: redata.body,
          icon: redata.icon
        }, function (notification) {
          //可直接打开通知notification相关联的tab窗口
          window.focus();
          notification.close();
        });
      });
    },
    //退出
    logout() {
      localStorage.removeItem("token");
      window.location.href = "/login"
    },
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    checkAuth() {
      let _this = this;
      $.ajax({
        type: "post",
        url: "/check_auth",
        headers: {
          "token": localStorage.getItem("token")
        },
        success: function (data) {
          if (data.code != 200) {
            window.location.href = "/login";
          } else {
            _this.adminAvator = data.result.avator;
            _this.adminRole = data.result.role_name;
          }
        }
      });
    },
    //获取客服信息
    getKefuInfo() {
      let _this = this;
      $.ajax({
        type: "get",
        url: "/kefuinfo",
        headers: {
          "token": localStorage.getItem("token")
        },
        success: function (data) {
          if (data.code == 200 && data.result != null) {
            _this.kfConfig.id = data.result.id;
            _this.kfConfig.name = data.result.name;
            _this.kfConfig.avator = data.result.avator;
          }
          if (data.code != 200) {
            _this.$message({
              message: data.msg,
              type: 'error'
            });
          }
          if (data.code == 401) {
            //token失效
            window.location.href = "/login";
          }
        }
      });
    },
  },
  created: function () {
    this.$nextTick(() => {
      this.getKefuInfo()
      this.checkAuth();
      this.focusWindow();
    });
  },
  mounted() {
    // 创建Socket实例
    this.socket = new ReconnectingWebSocket(this.server);
  },
  components: {
    Nav,
    pannel,
    chat_main,
    setting_deploy,
    setting,
    login,
    home_page,
  }
}
$(window).bind("focus", function (e) {
  //alert(1);
});
</script>
