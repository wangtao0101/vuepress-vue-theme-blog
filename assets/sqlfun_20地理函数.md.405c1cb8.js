import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.222b9ad1.js";
const __pageData = JSON.parse('{"title":"\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"geohash\u51FD\u6570","slug":"geohash\u51FD\u6570","link":"#geohash\u51FD\u6570","children":[]}],"relativePath":"sqlfun/20\u5730\u7406\u51FD\u6570.md"}');
const _sfc_main = { name: "sqlfun/20\u5730\u7406\u51FD\u6570.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h1><p>\u672C\u6587\u4ECB\u7ECD\u5730\u7406\u51FD\u6570\u7684\u57FA\u672C\u8BED\u6CD5\u53CA\u793A\u4F8B\u3002</p><h1 id="\u51FD\u6570\u793A\u4F8B" tabindex="-1">\u51FD\u6570\u793A\u4F8B <a class="header-anchor" href="#\u51FD\u6570\u793A\u4F8B" aria-hidden="true">#</a></h1><p>\u65E5\u5FD7\u670D\u52A1\u652F\u6301\u5982\u4E0B\u5730\u7406\u51FD\u6570\u3002</p><blockquote><p>\u5728\u65E5\u5FD7\u670D\u52A1\u5206\u6790\u8BED\u53E5\u4E2D\uFF0C\u8868\u793A\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u5FC5\u987B\u4F7F\u7528\u5355\u5F15\u53F7\uFF08&#39;&#39;\uFF09\u5305\u88F9\uFF0C\u65E0\u7B26\u53F7\u5305\u88F9\u6216\u88AB\u53CC\u5F15\u53F7\uFF08&quot;&quot;\uFF09\u5305\u88F9\u7684\u5B57\u7B26\u8868\u793A\u5B57\u6BB5\u540D\u6216\u5217\u540D\u3002\u4F8B\u5982\uFF1A&#39;status&#39;\u8868\u793A\u5B57\u7B26\u4E32status\uFF0Cstatus\u6216&quot;status&quot;\u8868\u793A\u65E5\u5FD7\u5B57\u6BB5status\u3002</p></blockquote><table><thead><tr><th>\u51FD\u6570\u540D\u79F0</th><th>\u8BED\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><a href="#geohash%E5%87%BD%E6%95%B0">geohash\u51FD\u6570</a></td><td>geohash( <em>x</em> )</td><td>\u5BF9\u7EAC\u5EA6\u548C\u7ECF\u5EA6\u8FDB\u884Cgeohash\u7F16\u7801\u3002 <strong>\u8BF4\u660E</strong> \u65E5\u5FD7\u670D\u52A1\u652F\u6301\u5C06IP\u5730\u5740\u8F6C\u6362\u4E3A\u56FD\u5BB6\u3001\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u8FD0\u8425\u5546\u6216\u7ECF\u7EAC\u5EA6\u7B49\u4FE1\u606F\u3002\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1<a href="./t13116.html">IP\u51FD\u6570</a>\u3002</td></tr></tbody></table><h1 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h1><h2 id="geohash\u51FD\u6570" tabindex="-1">geohash\u51FD\u6570 <a class="header-anchor" href="#geohash\u51FD\u6570" aria-hidden="true">#</a></h2><p>geohash\u51FD\u6570\u7528\u4E8E\u5BF9\u7EAC\u5EA6\u548C\u7ECF\u5EA6\u8FDB\u884Cgeohash\u7F16\u7801\u3002</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">geohash(x)</span></span>\n<span class="line"></span></code></pre></div><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><em>x</em></td><td>\u53C2\u6570\u503C\u4E3Astring\u7C7B\u578B\u3002\u5185\u5BB9\u4E3A\u7ECF\u7EAC\u5EA6\uFF0C\u4F8B\u5982<code>ip_to_geo(\u7ECF\u5EA6,\u7EAC\u5EA6)</code>\u3002</td></tr></tbody></table><p>string\u7C7B\u578B\u3002</p><p>\u4F7F\u7528ip_to_geo\u51FD\u6570\u5C06client_ip\u5B57\u6BB5\u503C\u8F6C\u6362\u4E3A\u7ECF\u7EAC\u5EA6\u5F62\u5F0F\uFF0C\u518D\u4F7F\u7528geohash\u51FD\u6570\u8FDB\u884C\u7F16\u7801\u3002</p><ul><li><p>\u67E5\u8BE2\u548C\u5206\u6790\u8BED\u53E5</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> | </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> geohash(ip_to_geo(client_ip)) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">hash</span></span>\n<span class="line"></span></code></pre></div></li><li><p>\u67E5\u8BE2\u548C\u5206\u6790\u7ED3\u679C</p><p><img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9313887261/p300313.png" alt="geohash"></p></li></ul>', 14);
const _hoisted_15 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_15);
}
const _20____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20____ as default
};
