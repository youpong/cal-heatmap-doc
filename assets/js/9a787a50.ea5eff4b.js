"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var b=n(2389);const f="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1007:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),r=n(6010);const l="browserWindow_my1Q",o="browserWindowHeader_jXSR",i="buttons_uHc7",s="browserWindowAddressBar_Pd8y",u="dot_giz1",c="browserWindowMenuIcon_Vhuh",d="bar_rrRL",p="browserWindowBody_Idgs";function m(e){let{children:t,minHeight:n,url:m="http://localhost:3000"}=e;return a.createElement("div",{className:l,style:{minHeight:n}},a.createElement("div",{className:o},a.createElement("div",{className:i},a.createElement("span",{className:u,style:{background:"#f25f58"}}),a.createElement("span",{className:u,style:{background:"#fbbe3c"}}),a.createElement("span",{className:u,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(s,"text--truncate")},m),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:p},t))}},1555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162),i=n(1007);const s={title:"Legend",sidebar_position:2},u=void 0,c={unversionedId:"plugins/legend",id:"plugins/legend",title:"Legend",description:"This plugin generates a legend",source:"@site/docs/plugins/legend.md",sourceDirName:"plugins",slug:"/plugins/legend",permalink:"/docs/plugins/legend",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/plugins/legend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Legend",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/plugins/"},next:{title:"Tooltip",permalink:"/docs/plugins/tooltip"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"LegendOptions",id:"legendoptions",level:2},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"<code>itemSelector</code>",id:"itemselector",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>width</code>",id:"width",level:3},{value:"And more...",id:"and-more",level:3}],m={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"subhead"},"This plugin generates a legend"),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cdn",label:"CDN",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Add the legend plugin in your page's ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>"),", after cal-heatmap library ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/cal-heatmap@4.0.0-beta.7/dist/plugins/Legend.min.js"><\/script>\n'))),(0,r.kt)(o.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,r.kt)("p",null,"The plugin is built-in in the core CalHeatmap, just import the module with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { Legend } from 'cal-heatmap';\n")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\n// highlight-next-line\ncal.paint({}, [[Legend, LEGEND_OPTIONS]]);\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#legendoptions"},"LegendOptions")," for the full list of available options."),(0,r.kt)("h2",{id:"legendoptions"},"LegendOptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"interface LegendOptions {\n  enabled: boolean;\n  itemSelector: string | null;\n  label: string | null;\n  width: number;\n}\n")),(0,r.kt)("h3",{id:"enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,r.kt)("p",null,"Whether to enable the legend"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h3",{id:"itemselector"},(0,r.kt)("inlineCode",{parentName:"h3"},"itemSelector")),(0,r.kt)("p",null,"Specify where the legend should be rendered"),(0,r.kt)("p",null,"If not specified, the legend will be inserted just after the calendar, in the same DOM node defined by ",(0,r.kt)("a",{parentName:"p",href:"/docs/options/itemSelector"},(0,r.kt)("inlineCode",{parentName:"a"},"itemSelector")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\n// highlight-next-line\ncal.paint({}, [[Legend, { itemSelector: '#my-legend-container' }]]);\n")),(0,r.kt)("h3",{id:"label"},(0,r.kt)("inlineCode",{parentName:"h3"},"label")),(0,r.kt)("p",null,"Set the legend's title"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)(i.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({}, [\n  [\n    Legend,\n    {\n      label: 'Max daily temperature (\xb0C)',\n      itemSelector: '#legend-label',\n    },\n  ],\n]);\n\nrender(<div id=\"legend-label\"></div>);\n"))),(0,r.kt)("h3",{id:"width"},(0,r.kt)("inlineCode",{parentName:"h3"},"width")),(0,r.kt)("p",null,"Set the legend's width"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)(i.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({}, [\n  [\n    Legend,\n    {\n      width: 500,\n      itemSelector: '#legend-width',\n    },\n  ],\n]);\n\nrender(<div id=\"legend-width\"></div>);\n"))),(0,r.kt)("h3",{id:"and-more"},"And more..."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The legend uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/observablehq/plot"},"ObservaleHQ Plot library")," under the hood.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-legend"},"this article")," for a more detailed and advanced customisation of the legend."),(0,r.kt)("p",{parentName:"admonition"},"You can find more supported options directly on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/observablehq/plot#plotlegendscalename-options"},"library documentation"))))}g.isMDXComponent=!0}}]);