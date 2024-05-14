
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<template>
  <div style="width:100%">
    <el-container>
      <el-main class="mainMain">
        <el-form label-width="80px">
          <el-form-item label="账户">
            <el-input v-model="kefuInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="kefuInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="原头像">
            <el-avatar :size="120" :src="kefuInfo.avator"></el-avatar>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>


<script>

import {sendAjax} from "../../public/static/js/functions";

export default {
  data(){
    return{
      kefuInfo: {},
    }
  },
  methods:{
  },
  created() {
    let _this = this
    sendAjax("/kefuinfo", "get", {}, function (result) {
      _this.kefuInfo = result;
    });
  }
}
</script>
