<template>
  <div id="app" style="width:100%">
    <el-main class="mainMain">

      <el-button style="margin-bottom: 10px;" @click="" type="primary" size="small">添加单页</el-button>
      <el-table
          :data="aboutpages"
          border
          style="width: 100%">
        <el-table-column
            prop="title_cn"
            label="标题">
        </el-table-column>
        <el-table-column
            prop="page"
            label="页面标识">
        </el-table-column>
        <el-table-column
            prop="id"
            label="操作">
          <template slot-scope="scope">
            <el-button @click="" type="primary" size="small" plain>编辑</el-button>
            <el-button @click="" type="primary" size="small" plain>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>


<script>
import {sendAjax} from "../../public/static/js/functions";

export default {
  data(){
    return{
      aboutpages: [],
    }
  },
  methods:{

  },
  created() {
    let _this = this
    sendAjax("/aboutpages", "get", {}, function (result) {
      _this.aboutpages = result;
    });
  },
}
</script>