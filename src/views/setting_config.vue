
<style>
.el-table .cell {
  color: #666;
}
</style>

<template>
  <div style="width:100%;">
    <el-container v-loading.fullscreen.lock="false">

      <el-main class="mainMain">

        <el-table
            :data="configList"
            border
            style="width: 100%">
          <el-table-column
              width="150"
              prop="conf_name"
              label="配置参数">
          </el-table-column>
          <el-table-column
              prop="conf_key"
              label="配置key"
              width="150"
          >
          </el-table-column>
          <el-table-column
              prop="id"
              label="操作">
            <template slot-scope="scope">
              <el-input type="textarea" @change="setConfigItem(scope.row.conf_key,scope.row.conf_value)"
                        v-model="scope.row.conf_value"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import Header from "@/template/header.vue";
import setting_left from "@/template/setting_left.vue";
import {sendAjax} from "../../public/static/js/functions";

export default {
  data(){
    return{
      configList: [],
    }
  },
  created() {
    let _this = this;
    sendAjax("/configs", "get", {}, function (result) {
      _this.configList = result;
    });
  },
  components: {
    Header,
    setting_left
  }
}
</script>
