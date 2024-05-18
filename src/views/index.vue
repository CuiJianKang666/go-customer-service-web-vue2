<style>
.kefuSelect {
  display: flex;
  justify-content: center;
}

h2 {
  display: flex;
  justify-content: center;
}
.kefuList{

}
</style>
<template>
  <div>
    <h2>请选择您要咨询的客服类型</h2>
    <div class="kefuSelect">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch=true>
        <el-tab-pane
            v-for="role in roleList"
            :key="role.role_id"
            :label="role.role_name"
            :name="role.role_id.toString()"
        />
      </el-tabs>
    </div>
    <div class="kefuList" style="text-align: center;">
      <el-row v-for="item in kefuList" :key="item.uid">
        <div style="cursor:pointer;" v-on:click="goToLink(item.name)">
          <div style="display: flex; justify-content: center;align-items: center;">
            <el-avatar :size="40" :src="item.avator" style="margin-right: 8px;"></el-avatar>
            <span>{{ item.nickname }}</span>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>


<script>
import {sendAjax} from "../../public/static/js/functions";

export default {
  data() {
    return {
      activeName: "3",
      kefuList: [],
      roleMap: new Map(),
      roleList: [],
    };
  },
  methods: {
    goToLink(id){
      window.location.href = "http://127.0.0.1:8080/chatIndex?kefu_id="+id;
    },
    handleClick(tab, event) {
      let _this = this
      sendAjax("/kefulist", "get", {}, function (result) {
        _this.kefuList = result.filter(item => item.role_id === _this.activeName);
      });

    },
    roleInit() {
      let _this = this
      sendAjax("/roles", "get", {}, function (result) {
        _this.roleList = result.reverse();
      });
    },
    kefuInit() {
      let _this = this
      sendAjax("/kefulist", "get", {}, function (result) {
        _this.kefuList = result.filter(item => item.role_id === '3');
      });
    }
  },
  created() {
    this.roleInit()
    this.kefuInit()
  }
};
</script>
