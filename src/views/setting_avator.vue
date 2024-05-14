
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
        <el-form :model="modifyPass" label-width="80px">
          <el-form-item label="账户">
            <el-input v-model="kefuInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="kefuInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="原头像">
            <el-avatar :size="120" :src="kefuInfo.avator"></el-avatar>
          </el-form-item>
          <el-form-item label="新头像">
            <el-upload
                class="avatar-uploader"
                action="/uploadimg"
                :show-file-list="false"
                name="imgfile"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="setModifyAvatar()">保存</el-button>
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
    //修改头像
    setModifyAvatar() {
      let _this = this;
      sendAjax("/kefuinfo", "POST", {
        id: _this.kefuInfo.uid,
        name: _this.kefuInfo.username,
        nickname: _this.kefuInfo.nickname,
        avator: _this.kefuInfo.avator,
      }, function (result) {
        _this.$message({
          message: "操作成功：注意，如果修改账户名,后台需重新登录",
          type: 'success'
        });
      });
    },
    handleAvatarSuccess(res, file) {
      console.log(res, file);
      if (res.code != 200) {
        _this.$message({
          message: res.msg,
          type: 'error'
        });
        return;
      }
      this.kefuInfo.avator = '/' + res.result.path;
    },
    beforeAvatarUpload(file) {
      var isLt2M = file.size / 1024 / 1024 < 1;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1MB!');
      }
      return isLt2M;
    },
  },
  created() {
    let _this = this
    sendAjax("/kefuinfo", "get", {}, function (result) {
      _this.kefuInfo = result;
    });
  }
}
</script>
