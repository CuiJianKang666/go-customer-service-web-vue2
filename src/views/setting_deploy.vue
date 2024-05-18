<template>
  <div id="app" style="width:100%">
    <el-container>

      <el-main class="mainMain">
        <el-tabs type="border-card">
          <el-tab-pane label="普通模式">
            <el-descriptions style="margin-bottom: 10px;" direction="vertical" :column="1" border>
              <el-descriptions-item label="通用聊天链接">
                <a style="margin-right: 10px">{{ host }}/chatIndex?kefu_id=kefu2</a>
                <el-button size="mini" v-on:click="copyText(host+'/chatIndex?kefu_id=kefu2')">复制</el-button>
              </el-descriptions-item>
            </el-descriptions>
          </el-tab-pane>
          <el-tab-pane label="弹窗模式">
            <pre>
            <code>
              (function(a, b, c, d) {
              let h = b.getElementsByTagName(&#39;head&#39;)[0];
              let s = b.createElement(&#39;script&#39;);
              s.type = &#39;text/javascript&#39;;
              s.src = c+&quot;/static/js/kefu-front.js&quot;;
              s.onload = s.onreadystatechange = function () {
              if (!this.readyState || this.readyState === &quot;loaded&quot; || this.readyState === &quot;complete&quot;) d(c);
              };
              h.appendChild(s);
              })(window, document,&quot;http://127.0.0.1:8080&quot;,function(u){
              KEFU.init({
              KEFU_URL:u,
              KEFU_KEFU_ID: &quot;kefu2&quot;
              })
              });
            </code>
              </pre>
          </el-tab-pane>
        </el-tabs>
      </el-main>

    </el-container>
  </div>
</template>


<script>
import {copyText, getBaseUrl} from "../../public/static/js/functions";

export default {
  data() {
    return {
      host: getBaseUrl(),
    }
  },
  methods: {
    copyText
  }
}
</script>