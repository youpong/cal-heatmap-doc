"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[316],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>y});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,y=c["".concat(s,".").concat(p)]||c[p]||u[p]||o;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1007:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(7294),r=t(6010);const o="browserWindow_my1Q",i="browserWindowHeader_jXSR",l="buttons_uHc7",s="browserWindowAddressBar_Pd8y",d="dot_giz1",m="browserWindowMenuIcon_Vhuh",c="bar_rrRL",u="browserWindowBody_Idgs";function p(e){let{children:n,minHeight:t,url:p="http://localhost:3000"}=e;return a.createElement("div",{className:o,style:{minHeight:t}},a.createElement("div",{className:i},a.createElement("div",{className:l},a.createElement("span",{className:d,style:{background:"#f25f58"}}),a.createElement("span",{className:d,style:{background:"#fbbe3c"}}),a.createElement("span",{className:d,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(s,"text--truncate")},p),a.createElement("div",{className:m},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:u},n))}},2669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),o=t(1007);const i={title:"Showcase"},l=void 0,s={unversionedId:"showcase",id:"showcase",title:"Showcase",description:"Following are some examples of what you can accomplish with cal-heatmap, using real world data.",source:"@site/docs/showcase.md",sourceDirName:".",slug:"/showcase",permalink:"/docs/showcase",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/showcase.md",tags:[],version:"current",frontMatter:{title:"Showcase"},sidebar:"tutorialSidebar",previous:{title:"Migrating from 3.x",permalink:"/docs/migrate_from_v3"}},d={},m=[{value:"Seattle daily maximum temperature",id:"seattle-daily-maximum-temperature",level:2},{value:"Seattle daily wind",id:"seattle-daily-wind",level:2},{value:"Seattle daily minimum temperature",id:"seattle-daily-minimum-temperature",level:2},{value:"Seattle daily average precipitation",id:"seattle-daily-average-precipitation",level:2},{value:"Dow Jones Industrial Index Trading volume",id:"dow-jones-industrial-index-trading-volume",level:2}],c={toc:m};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following are some examples of what you can accomplish with cal-heatmap, using real world data."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Page and examples may take longer to load, and animation may be jaggered\ndue to high number of calendars on this page.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All examples are accompanied by a live editable code."),(0,r.kt)("p",{parentName:"admonition"},"Edit the code, and play with the options to see the results live.")),(0,r.kt)("h2",{id:"seattle-daily-maximum-temperature"},"Seattle daily maximum temperature"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    data: {\n      source: '../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: 'temp_max',\n      groupY: 'max',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    scale: { type: 'linear', scheme: 'PRGn', domain: [0, 40] },\n    domain: {\n      type: 'year',\n      label: { text: null },\n      subLabel: {\n        width: 30,\n        textAlign: 'start',\n        text: () => dayjs.weekdaysShort().map((d, i) => (i % 2 == 0 ? '' : d)),\n      },\n    },\n    subDomain: { type: 'day', radius: 2 },\n    itemSelector: '#ex-year',\n  },\n  [\n    [\n      Tooltip,\n      {\n        text: function (date, value, dayjsDate) {\n          return (\n            (value ? value + '\xb0C' : 'No data') + ' on ' + dayjsDate.format('LL')\n          );\n        },\n      },\n    ],\n  ]\n);\n\nrender(\n  <div>\n    <div id=\"ex-year\" className=\"margin-bottom--md\"></div>\n    <a\n      className=\"button button--sm button--secondary\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.previous();\n      }}\n    >\n      \u2190 Previous\n    </a>\n    <a\n      className=\"button button--sm button--secondary margin-left--xs\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.next();\n      }}\n    >\n      Next \u2192\n    </a>\n  </div>\n);\n"))),(0,r.kt)("h2",{id:"seattle-daily-wind"},"Seattle daily wind"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    data: {\n      source: '../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: 'wind',\n      groupY: 'max',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 8,\n    scale: { type: 'linear', scheme: 'Oranges', domain: [0, 8] },\n    domain: {\n      type: 'month',\n    },\n    subDomain: { type: 'day', radius: 2 },\n    itemSelector: '#ex-wind',\n  },\n  [\n    [\n      Tooltip,\n      {\n        text: function (date, value, dayjsDate) {\n          return (\n            (value ? value + 'km/h' : 'No data') +\n            ' on ' +\n            dayjsDate.format('LL')\n          );\n        },\n      },\n    ],\n  ]\n);\n\nrender(\n  <div>\n    <div id=\"ex-wind\"></div>\n    <a\n      className=\"button button--sm button--secondary\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.previous();\n      }}\n    >\n      \u2190 Previous\n    </a>\n    <a\n      className=\"button button--sm button--secondary margin-left--xs\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.next();\n      }}\n    >\n      Next \u2192\n    </a>\n  </div>\n);\n"))),(0,r.kt)("h2",{id:"seattle-daily-minimum-temperature"},"Seattle daily minimum temperature"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    data: {\n      source: '../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: 'temp_min',\n      groupY: 'min',\n    },\n    verticalOrientation: true,\n    range: 5,\n    itemSelector: '#ex-1',\n    date: { start: new Date('2012-01-01') },\n    scale: { type: 'diverging', scheme: 'PRGn', domain: [-10, 15] },\n    domain: {\n      type: 'month',\n      padding: [10, 10, 10, 10],\n      label: { position: 'top' },\n    },\n    subDomain: { type: 'x_day', radius: 2, width: 15, height: 15, label: 'D' },\n  },\n  [\n    [\n      Tooltip,\n      {\n        text: function (date, value, dayjsDate) {\n          return (\n            (value ? value + '\xb0C' : 'No data') + ' on ' + dayjsDate.format('LL')\n          );\n        },\n      },\n    ],\n  ]\n);\nrender(\n  <div>\n    <div id=\"ex-1\" className=\"margin-bottom--md\"></div>\n    <a\n      className=\"button button--sm button--secondary\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.previous();\n      }}\n    >\n      \u2190 Previous\n    </a>\n    <a\n      className=\"button button--sm button--secondary margin-left--xs\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.next();\n      }}\n    >\n      Next \u2192\n    </a>\n  </div>\n);\n"))),(0,r.kt)("h2",{id:"seattle-daily-average-precipitation"},"Seattle daily average precipitation"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\nlet dayRowTemplate = (dateHelper, { domain }) => ({\n  name: 'day_row',\n  level: 31,\n  rowsCount() {\n    return 1;\n  },\n  columnsCount(d) {\n    return domain.dynamicDimension\n      ? dateHelper.date(d).endOf('month').date()\n      : 31;\n  },\n  mapping: (startDate, endDate, defaultValues) => {\n    return dateHelper\n      .intervals('day', startDate, dateHelper.date(endDate))\n      .map((d, index) => ({\n        t: d,\n        x: index,\n        y: 0,\n        ...defaultValues,\n      }));\n  },\n\n  format: {\n    date: 'Do',\n    legend: 'Do',\n  },\n  extractUnit(d) {\n    return dateHelper.date(d).startOf('day').valueOf();\n  },\n});\n\ncal.addTemplates(dayRowTemplate);\n\ncal.paint(\n  {\n    range: 6,\n    date: {\n      start: new Date('2012-01-01'),\n      min: new Date('2012-01-01'),\n      max: new Date('2015-12-01'),\n    },\n    data: {\n      source: '../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: 'precipitation',\n    },\n    domain: { type: 'month', gutter: 5, label: { textAlign: 'start' } },\n    subDomain: {\n      type: 'day_row',\n      width: 3,\n      height: 35,\n      gutter: 0,\n    },\n    scale: {\n      type: 'linear',\n      scheme: 'Purples',\n      domain: [0, 35],\n    },\n    itemSelector: '#ex-2',\n  },\n  [\n    [\n      Tooltip,\n      {\n        text: function (date, value, dayjsDate) {\n          return (\n            (value ? value + 'mm' : 'No data') + ' on ' + dayjsDate.format('LL')\n          );\n        },\n      },\n    ],\n  ]\n);\n\nrender(\n  <div>\n    <div id=\"ex-2\"></div>\n    <a\n      className=\"button button--sm button--secondary\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.previous();\n      }}\n    >\n      \u2190 Previous\n    </a>\n    <a\n      className=\"button button--sm button--secondary margin-left--xs\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.next();\n      }}\n    >\n      Next \u2192\n    </a>\n  </div>\n);\n"))),(0,r.kt)("h2",{id:"dow-jones-industrial-index-trading-volume"},"Dow Jones Industrial Index Trading volume"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const weekDaysTemplate = (DateHelper, options) => ({\n  name: 'weekday',\n  parent: 'day',\n  rowsCount: () => 5,\n  columnsCount: () => 54,\n  mapping: (startTimestamp, endTimestamp) => {\n    let weekNumber = 0;\n    let x = -1;\n    const domainType = options.domain.type;\n    return DateHelper.intervals(\n      'day',\n      startTimestamp,\n      DateHelper.date(endTimestamp)\n    )\n      .map(ts => {\n        const date = DateHelper.date(ts);\n\n        if (weekNumber !== date.week()) {\n          weekNumber = date.week();\n          x += 1;\n        }\n\n        return {\n          t: ts,\n          x,\n          y:\n            date.format('d') == 0 || date.format('d') === 6\n              ? -1\n              : date.format('d') - 1,\n        };\n      })\n      .filter(n => n.y >= 0);\n  },\n});\nconst cal = new CalHeatmap();\ncal.addTemplates(weekDaysTemplate);\ncal.paint(\n  {\n    range: 5,\n    date: {\n      start: new Date('2007-01-01'),\n      min: new Date('2000-05-01'),\n      max: new Date('2020-05-01'),\n      timezone: 'utc',\n    },\n    data: {\n      source: '../fixtures/DJIA.csv',\n      type: 'csv',\n      x: 'Date',\n      y: 'Volume',\n    },\n    domain: {\n      type: 'year',\n      label: {\n        position: 'left',\n        textAlign: 'end',\n        width: 50,\n        offset: { x: -10, y: 5 },\n      },\n    },\n    legend: {\n      show: true,\n      label: 'Daily Volume',\n      width: 150,\n      marginLeft: 10,\n      marginRight: 10,\n    },\n    verticalOrientation: true,\n    subDomain: {\n      type: 'weekday',\n    },\n    scale: {\n      type: 'linear',\n      domain: [50000000, 500000000],\n      scheme: 'YlOrRd',\n    },\n    itemSelector: '#ex-stock',\n  },\n  [\n    [\n      Tooltip,\n      {\n        text: function (date, value, dayjsDate) {\n          return (\n            (value ? d3.format(',')(value) : 'No volume') +\n            ' on ' +\n            dayjsDate.format('dddd LL')\n          );\n        },\n      },\n    ],\n  ]\n);\n\nrender(\n  <div>\n    <div id=\"ex-stock\" className=\"margin-bottom--md\"></div>\n    <a\n      className=\"button button--sm button--secondary\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.previous();\n      }}\n    >\n      \u2190 Previous\n    </a>\n    <a\n      className=\"button button--sm button--secondary margin-left--xs\"\n      href=\"#\"\n      onClick={e => {\n        e.preventDefault();\n        cal.next();\n      }}\n    >\n      Next \u2192\n    </a>\n  </div>\n);\n"))))}u.isMDXComponent=!0}}]);