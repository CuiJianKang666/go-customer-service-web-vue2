<template>
  <div id="app" style="width:100%">
    <el-container>

      <el-main class="mainMain">
        <el-form ref="form" :model="pageindex" label-width="100px">
          <el-form-item label="中文标题">
            <el-input v-model="pageindex.title_cn"></el-input>
          </el-form-item>
          <el-form-item label="英文标题">
            <el-input v-model="pageindex.title_en"></el-input>
          </el-form-item>
          <el-form-item label="中文关键词">
            <el-input v-model="pageindex.keywords_cn"></el-input>
          </el-form-item>
          <el-form-item label="英文关键词">
            <el-input v-model="pageindex.keywords_en"></el-input>
          </el-form-item>
          <el-form-item label="中文描述">
            <el-input v-model="pageindex.desc_cn"></el-input>
          </el-form-item>
          <el-form-item label="英文描述">
            <el-input v-model="pageindex.desc_en"></el-input>
          </el-form-item>
          <el-form-item label="JS&CSS">
            <el-input :autosize="{ minRows: 2, maxRows: 6}" type="textarea" v-model="pageindex.css_js"></el-input>
          </el-form-item>
          <el-form-item label="中文内容">
            <el-input :autosize="{ minRows: 2, maxRows: 8}" type="textarea" v-model="pageindex.html_cn"></el-input>
          </el-form-item>
          <el-form-item label="英文内容">
            <el-input :autosize="{ minRows: 2, maxRows: 8}" type="textarea" v-model="pageindex.html_en"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="setPageIndex()">保存</el-button>
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
  data(){
    return{
      pageindex: {
        title_cn: "",
        title_en: "",
        keywords_cn: "",
        keywords_en: "",
        desc_cn: "",
        desc_en: "",
        css_js: "",
        html_cn: "",
        html_en: "",
      },
    }
  },
  methods:{
    setPageIndex() {
      let _this = this;
      sendAjax("/about", "POST", this.pageindex, function (result) {
        if (result.code!=200){
          _this.$message({
            message: result.msg,
            type: 'error'
          });
          return
        }
        _this.$message({
          message: "编辑成功",
          type: 'success'
        });
      });
    },
  },
  created() {
    let _this = this;
    sendAjax("/about", "get", {}, function (result) {
      _this.pageindex = result;
    });
  }
}
</script>