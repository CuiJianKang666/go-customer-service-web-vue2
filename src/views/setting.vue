<style>
.setting_right{
  width: 100%;
}
</style>
<template>
  <div id="app" style="width:100%">
    <el-container v-loading.fullscreen.lock="false">
      <setting_left @change-component="handleComponentChange"></setting_left>
      <div class="setting_right">
        <component :is="currentComponent"></component>
      </div>
    </el-container>
  </div>
</template>

<script>
import setting_left from "@/template/setting_left.vue";
import setting_statistics from "@/views/setting_statistics.vue";
import setting_modifypass from "@/views/setting_modifypass.vue";
import setting_avator from "@/views/setting_avator.vue";
import setting_config from "@/views/setting_config.vue";
import setting_ipblack from "@/views/setting_ipblack.vue";
import setting_pageindex from "@/views/setting_pageindex.vue";
import setting_indexpages from "@/views/setting_indexpages.vue";
import setting_deploy from "@/views/setting_deploy.vue";
import setting_role_list from "@/views/setting_role_list.vue";
import setting_kefu_list from "@/views/setting_kefu_list.vue";

export default {
  data(){
    return{
      currentComponent:'setting_statistics',
      actionValue: 'setting_statistics'
    }
  },
  methods:{
    handleComponentChange(componentName) {
      // 在这里处理组件切换逻辑
      this.currentComponent = componentName
      this.actionValue = "/"+componentName
      console.log('切换到组件:', componentName);
    },
  },
  components: {
    setting_left,
    setting_statistics,
    setting_modifypass,
    setting_avator,
    setting_config,
    setting_ipblack,
    setting_pageindex,
    setting_indexpages,
    setting_deploy,
    setting_role_list,
    setting_kefu_list,
  }
}
</script>

