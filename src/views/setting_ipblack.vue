<template>
  <div id="app" style="width:100%">
    <el-container v-loading.fullscreen.lock="false">

      <el-main class="mainMain">
        <el-table
            :data="ipblackList"
            border
            style="width: 100%">
          <el-table-column
              prop="ip"
              label="IP地址">
          </el-table-column>
          <el-table-column
              prop="create_at"
              label="添加时间">
          </el-table-column>
          <el-table-column
              prop="id"
              label="操作">
            <template slot-scope="scope">
              <el-button @click="deleteIpblack(scope.row.ip)" type="danger" size="small" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import {sendAjax} from "../../public/static/js/functions";

export default {
  data(){
    return{
      ipblackList: [],
    }
  },
  created() {
    let _this = this
    sendAjax("/ipblacks_all", "get", {}, function (result) {
      _this.ipblackList = result.list;
    });
  }
}

</script>