<template>
  <div>
    <!--  <title>应急在线客服系统</title>-->

    <h3 id="客服对接">客服对接</h3>
    <p>聊天链接</p>
    <p><a href="http://127.0.0.1:8080/chatIndex?kefu_id=kefu2">http://127.0.0.1:8080/chatIndex?kefu_id=kefu2</a></p>
    <p>弹窗使用</p>
    <pre>
    <code>    (function(a, b, c, d) {
        let h = b.getElementsByTagName(&#39;head&#39;)[0];let s = b.createElement(&#39;script&#39;);
        s.type = &#39;text/javascript&#39;;s.src = c+&quot;/static/js/kefu-front.js&quot;;s.onload = s.onreadystatechange = function () {
            if (!this.readyState || this.readyState === &quot;loaded&quot; || this.readyState === &quot;complete&quot;) d(c);
        };h.appendChild(s);
    })(window, document,&quot;http://127.0.0.1:8080&quot;,function(u){
        KEFU.init({
            KEFU_URL:u,
            KEFU_KEFU_ID: &quot;kefu2&quot;
        })
    });
  </code>
  </pre>
  </div>
</template>


<script type='text/javascript'>
(function (a, b, c, d) {
  let h = b.getElementsByTagName('head')[0];
  let s = b.createElement('script');
  s.type = 'text/javascript';
  s.src = c + "/static/js/kefu-front.js";
  s.onload = s.onreadystatechange = function () {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") d(c);
  };
  h.appendChild(s);
})(window, document, "http://127.0.0.1:8081", function (u) {
  KEFU.init({
    KEFU_URL: u,
    KEFU_KEFU_ID: "kefu2",
  })
});
</script>
