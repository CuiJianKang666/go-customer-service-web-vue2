<template>
  <div id="app" style="width:100%">
    <el-container>

      <el-main class="mainMain">
        <el-form :model="modifyPass" label-width="100px">
          <el-form-item label="原密码">
            <el-input v-model="modifyPass.old_pass"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="modifyPass.new_pass"></el-input>
          </el-form-item>
          <el-form-item label="重复新密码">
            <el-input v-model="modifyPass.confirm_new_pass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="setModifyPass()">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import {sendAjax} from "../../public/static/js/functions";

export default {
  data() {
    return {
      modifyPass: {
        old_pass: "",
        new_pass: "",
        confirm_new_pass: ""
      },
    }
  },
  methods: {
    //修改密码
    setModifyPass() {
      let _this = this;
      sendAjax("/modifypass", "POST", _this.modifyPass, function (result) {
        _this.$message({
          message: "修改成功",
          type: 'success'
        });
        _this.modifyPass.new_pass = _this.modifyPass.old_pass = _this.modifyPass.confirm_new_pass = ""
      });
    },
  }
}

</script>