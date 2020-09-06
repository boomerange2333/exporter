// ==UserScript==
// @name        approval-migrator
// @version     0.0.6
// @match       *://aflow.dingtalk.com/*
// @match       *://oa.dingtalk.com/*
// @run-at      document-start
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_download
// @grant       unsafeWindow
// @updateURL   https://cdn.jsdelivr.net/gh/boomerange2333/approval-migrator/index.meta.js
// @downloadURL https://cdn.jsdelivr.net/gh/boomerange2333/approval-migrator/index.user.js
// @noframes    
// ==/UserScript==

!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=[];function r(e){n.push(e)}var s,a;!function(){console.log("hookFetch");const e=unsafeWindow.fetch;unsafeWindow.fetch=function(t,o){console.log("fetch called");const r=e.apply(null,arguments);return r.then((function(e){return e.text().then((function(r){return n.forEach(n=>{n(o.method||"GET",t,r,e.status)}),new Response(r,{headers:e.headers,status:e.status,statusText:e.statusText})}))}))}}(),s=unsafeWindow.XMLHttpRequest,(a=function(){function e(e){Object.defineProperty(this,e,{get:function(){return this.xhr[e]},set:function(e){this.xhr.timeout=e}})}this.xhr=new s,e.call(this,"timeout"),e.call(this,"responseType"),e.call(this,"withCredentials"),e.call(this,"onerror"),e.call(this,"onabort"),e.call(this,"onloadstart"),e.call(this,"onloadend"),e.call(this,"onprogress")}).prototype.open=function(e,t,o,r,s){var a=this;function i(o){a.responseText=a.xhr.responseText;for(var r=0;r<n.length;r++)try{n[r](e,t,a.responseText,a.xhr.status)}catch(e){console.error(e.stack)}}function c(){a.readyState=a.xhr.readyState,a.responseText=a.xhr.responseText,a.responseURL=a.xhr.responseURL,a.responseXML=a.xhr.responseXML,a.status=a.xhr.status,a.statusText=a.xhr.statusText}this.xhr.open(e,t,o,r,s),this.xhr.onload=function(e){if(a.onload)return c(),4===a.xhr.readyState&&i(),a.onload(e)},this.xhr.onreadystatechange=function(e){if(a.onreadystatechange)return c(),4===a.xhr.readyState&&i(),a.onreadystatechange(e)}},a.prototype.addEventListener=function(e,t){return this.xhr.addEventListener(e,t)},a.prototype.send=function(e){return this.xhr.send(e)},a.prototype.abort=function(){return this.xhr.abort()},a.prototype.getAllResponseHeaders=function(){return this.xhr.getAllResponseHeaders()},a.prototype.getResponseHeader=function(e){return this.xhr.getResponseHeader(e)},a.prototype.setRequestHeader=function(e,t){return this.xhr.setRequestHeader(e,t)},a.prototype.overrideMimeType=function(e){return this.xhr.overrideMimeType(e)},unsafeWindow.XMLHttpRequest=a;const i=".c_left_box .angular-ui-tree-node .dep-tree-pos-btn .iconfont.icon-collapsed",c=".c_left_box .angular-ui-tree-node .dep-name",l="/dingtalk/web/query/dashboard",d="/dingtalk/web/query/oaDesigner",u="/contacts.htm",f={getMgrProcessList:"/dingtalk/web/query/process/getMgrProcessList.json",getFormAndProcessConfigV2:"/dingtalk/web/query/form/getFormAndProcessConfigV2.json",getProcessManagerList:"/dingtalk/web/query/process/getProcessManagerList.json",getProcessVisible:"/dingtalk/web/query/process/getProcessVisible.json",getProcessDataVisible:"/dingtalk/web/query/process/getProcessDataVisible.json",getNoticeSetting:"/dingtalk/web/query/paasForm/getNoticeSetting.json",getProcessConf:"/dingtalk/web/query/process/getProcessConf.json",getDeptChainInfo:"/omp/dept/get_dept_chain_info",getDeptStaff:"/omp/emp/dept_staff"},p="https://aflow.dingtalk.com/dingtalk/web/query/dashboard#/aflowSetting",g=e=>`https://aflow.dingtalk.com/dingtalk/web/query/oaDesigner?from=oaAdminHomeWeb&processCode=${e}#/`,h="https://oa.dingtalk.com/contacts.htm#/contacts";function m(e){return new Promise((t,o)=>{r((function o(r,s,a,i){e(r,s,a,i)&&(!function(e){const t=n.indexOf(e);t>=0&&n.splice(t,1)}(o),t())}))})}async function y(e,t,o){const n=GM_openInTab(e,o),r=await function(e){return new Promise((t,o)=>{function n(){GM_removeValueChangeListener(e,n),GM_removeValueChangeListener("errMsg",r);const o=GM_getValue(e);GM_deleteValue(o),t(JSON.parse(o))}function r(){GM_removeValueChangeListener(e,n),GM_removeValueChangeListener("errMsg",r),o(new Error(GM_getValue("errMsg")))}GM_addValueChangeListener(e,n),GM_addValueChangeListener("errMsg",r)})}(t);return await b(300),n.close(),r}function b(e){return new Promise(t=>setTimeout(t,e))}function w(){const e=document.createElement("div");e.className="ant-modal-root",e.innerHTML='\n  <div class="ant-modal-mask"></div>\n  <div tabindex="-1" class="ant-modal-wrap" role="dialog" aria-labelledby="rcDialogTitle0" style=""><div role="document" class="ant-modal" style="width:616px;transform-origin:164px 282px;font-family:PingFang SC;"><div tabindex="0" aria-hidden="true" style="width:0px;height:0px;overflow:hidden;outline:none;"></div><div class="ant-modal-content" style="padding:32px;width:616px;height:206px">\n    <div style="color:#1f2329;margin-bottom:4px;font-size:16px;line-height:24px;font-weight:500;">导出中</div>\n    <div style="color:#F54A45;margin-bottom:4px;font-size:14px;line-height:22px;">请保留在当前页面，不要切换到其他窗口，否则导出可能会中断</div>\n    <div style="background:#DEE0E3;border-radius:6px;height:6px;margin:32px 0;"><div class="migrator-bg" style="width:0%;border-radius:6px;background:#3370ff;height:6px;"></div></div>\n    <div style="color:#1f2329;margin-bottom:4px;font-size:14px;line-height:22px;">预计需要5分钟左右完成导出，目前已完成<span class="migrator-title">0%</span></div>\n  </div><div tabindex="0" aria-hidden="true" style="width:0px;height:0px;overflow:hidden;outline:none;"></div></div></div>\n',document.body.appendChild(e);const t=e.querySelector(".migrator-bg"),o=e.querySelector(".migrator-title");return{update:function(e){const n=100*e+"%",r=Math.floor(100*e)+"%";t.style.width=n,o.textContent=r},destroy:function(){e.parentElement.removeChild(e)}}}const x="1"===GM_getValue("exporting","0");function v(e){GM_setValue("errMsg",e||"导出失败。")}if(console.log(location.pathname),x)if(console.log("Exporting..."),location.pathname===l)r(async(e,t,o,n)=>{if(console.log(t,n),200!==n)return console.error("network request error."),void v();if(t===f.getMgrProcessList){const e=JSON.parse(o).data.sortedDirProcessList;GM_setValue("mgrProcessList",JSON.stringify(e))}});else if(location.pathname===d){const e={getFormAndProcessConfigV2:null,getProcessManagerList:null,getProcessVisible:null,getProcessDataVisible:null,getNoticeSetting:null,getProcessConf:null};r(async(t,o,n,r)=>{if(console.log(o,r),200!==r)return console.error("network request error."),void v();let s=!0;for(const t of Object.keys(e))o===f[t]?(console.log(t),e[t]=JSON.parse(n).data):e[t]||(s=!1);s&&GM_setValue("mgrProcessData",JSON.stringify(e))})}else location.pathname===u&&async function(){const e=w();e.update(.7);const t={},o={};async function n(){let e="";return await m((o,n,r,s)=>{n.startsWith("/")&&(n=location.origin+n),n=new URL(n);const a=new URLSearchParams(n.search);if(n.pathname===f.getDeptChainInfo)return e=a.get("deptIds"),console.log("getDeptChainInfo",e),t[e]=JSON.parse(r).result,!0}),e}async function r(){let e="";const t=[];let n=!1;for(await m((o,r,s,a)=>{r.startsWith("/")&&(r=location.origin+r),r=new URL(r);const i=new URLSearchParams(r.search);if(r.pathname===f.getDeptStaff){e=i.get("deptId"),console.log("getDeptStaff",e);const o=JSON.parse(s).result;n=o.hasMore;for(const e of o.orgEmpExtVOList)t.push(e);return!0}});n;)console.log("hasMore"),await b(500),window.scrollBy(0,1e4),await m((o,r,s,a)=>{r.startsWith("/")&&(r=location.origin+r),r=new URL(r);const i=new URLSearchParams(r.search);if(r.pathname===f.getDeptStaff){if(i.get("deptId")!==e)return;const o=JSON.parse(s).result;n=o.hasMore;for(const e of o.orgEmpExtVOList)t.push(e);return!0}});return o[e]=t,e}async function s(){await Promise.all([n(),r()])}for(await s(),await function(e){return new Promise(t=>{const o=new MutationObserver(()=>{const n=document.querySelector(e);n&&(t(n),o.disconnect())});o.observe(document.body,{attributes:!0,childList:!0,characterData:!0,subtree:!0})})}(c);;){const e=document.querySelectorAll(i);let t=!1;for(const o of e)58901===o.textContent.charCodeAt(0)&&(o.parentElement.click(),await b(200),t=!0);if(!t)break}e.update(.75),await b(2e3);const a=document.querySelectorAll(c).length;let l=1;for(e.update(l/a*.25+.75);;){window.scrollTo(0,0),await b(500);let t=!1,o=!1;for(const n of document.querySelectorAll(c))if(n.classList.contains("dep-name-hl"))t=!0;else if(t){console.log("click",n),n.click(),await s(),o=!0,e.update(++l/a*.25+.75);break}if(!o)break}console.log(t,o),GM_setValue("contactsData",JSON.stringify({deptChainInfo:t,deptStaff:o})),window.close()}();function M(e,t,o,n){return{id:t.getFormAndProcessConfigV2.processCode,name:e.flowTitle,description:e.description,managers:t.getProcessManagerList.map(e=>o[e.staffId]),visibleUsers:t.getProcessVisible.filter(e=>1===e.visibleType).map(e=>o[e.visibleValue]),visibleDepartments:t.getProcessVisible.filter(e=>0===e.visibleType).map(e=>n[e.visibleValue]),icon:e.iconUrl,form:t.getFormAndProcessConfigV2.formVo.content}}window.location.pathname===l&&GM_registerMenuCommand("导出",(async function(){if(!confirm("确定要导出吗？导出开始后，请静候片刻，暂时不要操作浏览器，直到导出完成。"))return;GM_listValues().forEach(e=>{GM_deleteValue(e)}),GM_setValue("exporting","1");const e=w();try{const t=await y(p,"mgrProcessList"),o=t.map(e=>e.sortedProcessAndFormVoList.filter(e=>e.canManage).length).reduce((e,t)=>e+t,0)+1;let n=1;e.update(n/o*.7);const r={};console.log(t);for(const s of t)for(const t of s.sortedProcessAndFormVoList){if(!t.canManage)continue;if("INVALID"===t.processStatus)continue;const s=await y(g(t.processCode),"mgrProcessData");r[t.processCode]=s,e.update(++n/o*.7),console.log(s)}const s=await y(h,"contactsData",{active:!0});console.log(s),GM_setValue("exporting","0"),await function(e,t){"object"==typeof e&&(e=JSON.stringify(e,void 0,4));var o=new Blob([e],{type:"text/json"});const n=window.URL.createObjectURL(o);var r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)}(function({mgrProcessList:e,itemDetail:t,contacts:o}){const n=[],r={},s={};for(const e of Object.keys(o.deptChainInfo)){const t=o.deptChainInfo[e].map(e=>e.name),n=t.pop();s[e]={name:n,parentDepartments:t}}for(const e of Object.keys(o.deptStaff))for(const t of o.deptStaff[e])r[t.staffId]?r[t.staffId].departments.push(s[e]):r[t.staffId]={name:t.name,departments:[s[e]]};for(const o of e){const e={name:o.dirName,approvals:o.sortedProcessAndFormVoList.filter(e=>!!t[e.processCode]).map(e=>M(e,t[e.processCode],r,s))};n.push(e)}return{groups:n}}({mgrProcessList:t,itemDetail:r,contacts:s}),`网页审批导出-${(new Date).toLocaleString("en-GB")}.json`),alert("导出成功")}catch(e){alert(e.message)}finally{e.destroy()}})),console.log("Page reloaded.")}]);
