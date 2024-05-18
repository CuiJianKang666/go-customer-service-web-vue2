<template>
  <el-aside width="200px">
    <el-menu
        default-active="1-1" :default-openeds="openIndex"
        :unique-opened=true>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>账户设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" v-on:click="changeComponent('setting_statistics')">统计信息</el-menu-item>
          <el-menu-item index="1-3" v-on:click="changeComponent('setting_modifypass')">修改密码</el-menu-item>
          <el-menu-item index="1-4" v-on:click="changeComponent('setting_avator')">修改资料</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-6" v-on:click="changeComponent('setting_config')">配置参数</el-menu-item>
          <el-menu-item index="4-5" v-on:click="changeComponent('setting_ipblack')">IP黑名单</el-menu-item>
          <el-menu-item index="2-5" v-on:click="changeComponent('setting_deploy')">网页部署</el-menu-item>
          <el-menu-item index="2-7" v-on:click="changeComponent('setting_pageindex')">索引页配置</el-menu-item>
          <el-menu-item index="2-7" v-on:click="changeComponent('setting_indexpages')">索引页</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>客服设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-6" v-on:click="changeComponent('setting_role_list')">客服分类</el-menu-item>
          <el-menu-item index="4-5" v-on:click="changeComponent('setting_kefu_list')">客服列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data(){
    return{
      openIndex: [1],
    }
  },
  methods: {
    changeComponent(componentName) {
      this.$emit('change-component', componentName);
    },
  }
}

</script>