<template>
  <div id="app" style="width:100%">
    <el-container v-loading.fullscreen.lock="false">
      <el-main class="mainMain settingMain">
        <h2 class="textDark">数据总览</h2>
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="smallBox bgInfo">
              <h3 v-html="this.statistics.visitors"></h3>
              <p>总访客数</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="smallBox bgSuccess">
              <h3 v-html="this.statistics.message"></h3>
              <p>总消息数</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="smallBox bgDanger">
              <h3 v-html="this.statistics.session"></h3>
              <p>当前会话数</p>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import header from "@/template/header.vue";
import {sendAjax} from "../../public/static/js/functions";

export default {
  data(){
    return{
      statistics:{},
    }
  },
  methods:{

  },
  components:{
    header
  },
  created() {
    sendAjax("/statistics", "get", {}, (result) =>{
      this.statistics = result;
    });
  }
}
</script>