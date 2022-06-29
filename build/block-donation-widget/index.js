(()=>{"use strict";var e,t={197:(e,t,a)=>{const n=window.wp.blocks;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}const r=window.wp.element,c=window.React;var i=a.n(c);window.wp.i18n;const s=window.wp.components,o=window.wp.blockEditor,m=window.wp.autop,p=JSON.parse('{"u2":"planet4-japan/block-donation-widget"}');(0,n.registerBlockType)(p.u2,{edit:function(e){let{attributes:t,setAttributes:a}=e;const n=(0,o.useBlockProps)(),c=e=>t=>{a({[e]:t})},p=(e,n,l)=>r=>{const c=[...t[e]];c[n][l]=r,a({[e]:c})};return(0,r.createElement)("div",l({},n,{className:"p4-jp-block-wrapper"}),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Block Type")),(0,r.createElement)("div",null,(0,r.createElement)(s.RadioControl,{selected:t.blockType,options:[{label:"Donation",value:"donation"},{label:"About GP",value:"about"}],onChange:c("blockType")})),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Title")),(0,r.createElement)("div",null,(0,r.createElement)(s.TextControl,{onChange:c("title"),value:t.title,placeholder:"Enter Title..."})),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Description")),(0,r.createElement)("div",null,(0,r.createElement)(o.PlainText,{onChange:c("description"),value:(0,m.removep)(t.description)})),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Image")),(0,r.createElement)("div",{className:"image-settings"},(0,r.createElement)(o.MediaUploadCheck,null,(0,r.createElement)(o.MediaUpload,{onSelect:e=>{c("image")(e.url),c("imageId")(e.id)},allowedTypes:["image"],value:t.imageId,render:e=>{let{open:t}=e;return(0,r.createElement)(s.Button,{onClick:t},"Select Image")}})),(0,r.createElement)("div",null,(0,r.createElement)("img",{src:t.image}))),"donation"===t.blockType&&t.tabLabels.map(((e,a)=>(0,r.createElement)(i().Fragment,{key:a},(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Tab ",a+1)),(0,r.createElement)("div",{className:"tab-settings"},(0,r.createElement)("div",null,"Label"),(0,r.createElement)("div",null,(0,r.createElement)(s.TextControl,{onChange:p("tabLabels",a,"value"),value:e.value})),(0,r.createElement)("div",null,"Content"),(0,r.createElement)("div",null,(0,r.createElement)(o.PlainText,{onChange:p("tabPanels",a,"content"),value:t.tabPanels[a].content})),(0,r.createElement)("div",null,"Button Text"),(0,r.createElement)("div",null,(0,r.createElement)(s.TextControl,{onChange:p("tabPanels",a,"btnText"),value:t.tabPanels[a].btnText})),(0,r.createElement)("div",null,"Button Link"),(0,r.createElement)("div",null,(0,r.createElement)("div",null,(0,r.createElement)(o.URLInput,{onChange:p("tabPanels",a,"btnLink"),value:t.tabPanels[a].btnLink}))))))),"about"===t.blockType&&t.ctaBtns.map(((e,t)=>(0,r.createElement)(i().Fragment,{key:t},(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Button ",t+1)),(0,r.createElement)("div",{className:"btn-settings"},(0,r.createElement)("div",null,"Button Text"),(0,r.createElement)("div",null,(0,r.createElement)(s.TextControl,{onChange:p("ctaBtns",t,"btnText"),value:e.btnText})),(0,r.createElement)("div",null,"Button Link"),(0,r.createElement)("div",null,(0,r.createElement)("div",null,(0,r.createElement)(o.URLInput,{onChange:p("ctaBtns",t,"btnLink"),value:e.btnLink}))))))))},save:function(e){let{attributes:t}=e;return(0,r.createElement)("div",o.useBlockProps.save({className:"p4jp-block-wrapper "+("donation"===t.blockType?"p4jp-block-wrapper--donation":"p4jp-block-wrapper--about")}),"donation"===t.blockType&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"fullwidth"},(0,r.createElement)("div",{className:"fullwidth__left"}),(0,r.createElement)("div",{className:"fullwidth__right"})),(0,r.createElement)("div",{className:"content"},(0,r.createElement)("div",{className:"content__left info"},(0,r.createElement)("div",{className:"wrapper wrapper--title"},(0,r.createElement)("h3",{className:"title"},t.title)),(0,r.createElement)("div",{className:"wrapper wrapper--description",dangerouslySetInnerHTML:{__html:(0,m.autop)(t.description)}}),(0,r.createElement)("div",{className:"wrapper wrapper--keyvisual"},(0,r.createElement)("img",{className:"keyvisual",src:t.image}))),(0,r.createElement)("div",{className:"content__right cta"},(0,r.createElement)("div",{className:"tabs"},(0,r.createElement)("div",{className:"wrapper wrapper--tabs-label"},t.tabLabels.map(((e,t)=>{let{value:a}=e;return(0,r.createElement)("a",{className:["tabs__label",0===t?" tabs__label--active":""].join(""),"data-label-index":t,key:t,href:"#"},a)}))),(0,r.createElement)("div",{className:"wrapper wrapper--tabs-panel"},t.tabPanels.map(((e,t)=>{let{content:a,btnText:n,btnLink:l}=e;return(0,r.createElement)("div",{className:["tabs__panel",0===t?" tabs__panel--active":""].join(""),key:t},(0,r.createElement)("div",{className:"tabs__content"},a),(0,r.createElement)("a",{className:"tabs__link",href:l},(0,r.createElement)("button",{className:"tabs__btn"},n)))}))))))),"about"===t.blockType&&(0,r.createElement)("div",{className:"content"},(0,r.createElement)("div",{className:"content__top"},(0,r.createElement)("div",{className:"wrapper wrapper--title"},(0,r.createElement)("h3",{className:"title"},t.title)),(0,r.createElement)("div",{className:"wrapper wrapper--keyvisual"},(0,r.createElement)("div",{className:"aspect-box"},(0,r.createElement)("img",{className:"keyvisual",src:t.image})))),(0,r.createElement)("div",{className:"content__bottom"},(0,r.createElement)("div",{className:"wrapper wrapper--description",dangerouslySetInnerHTML:{__html:(0,m.autop)(t.description)}}),(0,r.createElement)("div",{className:"cta"},t.ctaBtns.map(((e,t)=>{let{btnText:a,btnLink:n}=e;return(0,r.createElement)("div",{className:"cta-btn",key:t},(0,r.createElement)("a",{className:"cta-btn__link",href:n},(0,r.createElement)("button",{className:"cta-btn__btn"},a)))}))))))}}),(0,n.registerBlockStyle)(p.u2,{name:"fancy-quote",label:"Fancy Quote"})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var c=1/0;for(m=0;m<e.length;m++){for(var[a,l,r]=e[m],i=!0,s=0;s<a.length;s++)(!1&r||c>=r)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(i=!1,r<c&&(c=r));if(i){e.splice(m--,1);var o=l();void 0!==o&&(t=o)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,l,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={106:0,295:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[c,i,s]=a,o=0;if(c.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(s)var m=s(n)}for(t&&t(a);o<c.length;o++)r=c[o],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},a=globalThis.webpackChunkplanet4_gpjp_plugin_blocks=globalThis.webpackChunkplanet4_gpjp_plugin_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[295],(()=>n(197)));l=n.O(l)})();