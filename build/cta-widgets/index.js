(()=>{"use strict";var e,t={698:(e,t,a)=>{const n=window.wp.blocks;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}const r=window.wp.element,c=window.React;var o=a.n(c);window.wp.i18n;const i=window.wp.components,s=window.wp.blockEditor,m=window.wp.compose,p=window.wp.hooks,u=window.wp.autop,d=(v=function(e){let{instanceId:t,attributes:a,setAttributes:n}=e;const c=(0,s.useBlockProps)(),m=e=>t=>{n({[e]:t})},p=(e,t,l)=>r=>{const c=[...a[e]];c[t][l]=r,n({[e]:c})};return(0,r.useEffect)((()=>{n({blockId:t})}),[]),(0,r.createElement)("div",l({},c,{className:"p4-jp-block-wrapper"}),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Block Type")),(0,r.createElement)("div",null,(0,r.createElement)(i.RadioControl,{selected:a.blockType,options:[{label:"Donation",value:"donation"},{label:"About GP",value:"about"}],onChange:m("blockType")})),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Title")),(0,r.createElement)("div",null,(0,r.createElement)(i.TextControl,{onChange:m("title"),value:a.title,placeholder:"Enter Title..."})),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Description")),(0,r.createElement)("div",null,(0,r.createElement)(s.PlainText,{onChange:m("description"),value:a.description})),(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Image")),(0,r.createElement)("div",{className:"image-settings"},(0,r.createElement)(s.MediaUploadCheck,null,(0,r.createElement)(s.MediaUpload,{onSelect:e=>{m("image")(e.url),m("imageId")(e.id)},allowedTypes:["image"],value:a.imageId,render:e=>{let{open:t}=e;return(0,r.createElement)(i.Button,{onClick:t},"Select Image")}})),(0,r.createElement)("div",null,(0,r.createElement)("img",{src:a.image}))),"donation"===a.blockType&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Image Overlay Color")),(0,r.createElement)("div",null,(0,r.createElement)(i.ColorPicker,{color:a.imageOverlayColor,onChange:m("imageOverlayColor"),enableAlpha:!0,defaultValue:"rgba(0,0,0,0.5)"})),a.tabLabels.map(((e,t)=>(0,r.createElement)(o().Fragment,{key:t},(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Tab ",t+1)),(0,r.createElement)("div",{className:"tab-settings"},(0,r.createElement)("div",null,"Label"),(0,r.createElement)("div",null,(0,r.createElement)(i.TextControl,{onChange:p("tabLabels",t,"value"),value:e.value})),(0,r.createElement)("div",null,"Content"),(0,r.createElement)("div",null,(0,r.createElement)(s.PlainText,{onChange:p("tabPanels",t,"content"),value:a.tabPanels[t].content})),(0,r.createElement)("div",null,"Button Text"),(0,r.createElement)("div",null,(0,r.createElement)(i.TextControl,{onChange:p("tabPanels",t,"btnText"),value:a.tabPanels[t].btnText})),(0,r.createElement)("div",null,"Button Link"),(0,r.createElement)("div",null,(0,r.createElement)("div",null,(0,r.createElement)(s.URLInput,{onChange:p("tabPanels",t,"btnLink"),value:a.tabPanels[t].btnLink})))))))),"about"===a.blockType&&a.ctaBtns.map(((e,t)=>(0,r.createElement)(o().Fragment,{key:t},(0,r.createElement)("div",null,(0,r.createElement)("strong",null,"Button ",t+1)),(0,r.createElement)("div",{className:"btn-settings"},(0,r.createElement)("div",null,"Button Text"),(0,r.createElement)("div",null,(0,r.createElement)(i.TextControl,{onChange:p("ctaBtns",t,"btnText"),value:e.btnText})),(0,r.createElement)("div",null,"Button Link"),(0,r.createElement)("div",null,(0,r.createElement)("div",null,(0,r.createElement)(s.URLInput,{onChange:p("ctaBtns",t,"btnLink"),value:e.btnLink}))))))))},e=>{const t=(0,m.useInstanceId)(v);return(0,r.createElement)(v,l({},e,{instanceId:t}))});var v;(0,p.addFilter)("blocks.getBlockAttributes","planet4-japan/cta-widgets",(function(e,t){return"planet4-japan/cta-widgets"===t.name&&e.description&&(e.description=(0,u.removep)(e.description)),e}));const b=JSON.parse('{"u2":"planet4-japan/cta-widgets"}');(0,n.registerBlockType)(b.u2,{edit:d,save:function(e){let{attributes:t}=e;const{blockId:a,blockType:n,title:l,description:c,image:o,imageOverlayColor:i,tabLabels:m,tabPanels:p,ctaBtns:d}=t,v=`\n    .p4jp-block-wrapper--${a}.p4jp-block-wrapper--donation {\n      --imageOverlayColor: ${i};\n    }\n  `;return(0,r.createElement)("div",s.useBlockProps.save({className:`p4jp-block-wrapper p4jp-block-wrapper--${a} ${"donation"===n?"p4jp-block-wrapper--donation":"p4jp-block-wrapper--about"}`}),"donation"===n&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("style",null,v),(0,r.createElement)("div",{className:"fullwidth"},(0,r.createElement)("div",{className:"fullwidth__left"}),(0,r.createElement)("div",{className:"fullwidth__right"})),(0,r.createElement)("div",{className:"content"},(0,r.createElement)("div",{className:"content__left info"},l&&(0,r.createElement)("div",{className:"wrapper wrapper--title"},(0,r.createElement)("h3",{className:"title"},l)),c&&(0,r.createElement)("div",{className:"wrapper wrapper--description",dangerouslySetInnerHTML:{__html:(0,u.autop)(c)}}),o&&(0,r.createElement)("div",{className:"wrapper wrapper--keyvisual"},(0,r.createElement)("img",{className:"keyvisual",src:o}))),(0,r.createElement)("div",{className:"content__right cta"},(0,r.createElement)("div",{className:"tabs"},(0,r.createElement)("div",{className:"wrapper wrapper--tabs-label"},m.map(((e,t)=>{let{value:a}=e;return a&&(0,r.createElement)("a",{className:["tabs__label",0===t?" tabs__label--active":""].join(""),"data-label-index":t,key:t,href:"#"},a)}))),(0,r.createElement)("div",{className:"wrapper wrapper--tabs-panel"},p.map(((e,t)=>{let{content:a,btnText:n,btnLink:l}=e;return a&&(0,r.createElement)("div",{className:["tabs__panel",0===t?" tabs__panel--active":""].join(""),key:t},(0,r.createElement)("div",{className:"tabs__content"},a),(0,r.createElement)("a",{className:"tabs__link",href:l},(0,r.createElement)("button",{className:"tabs__btn"},n)))}))))))),"about"===n&&(0,r.createElement)("div",{className:"content"},(0,r.createElement)("div",{className:"content__top"},l&&(0,r.createElement)("div",{className:"wrapper wrapper--title"},(0,r.createElement)("h3",{className:"title"},l)),o&&(0,r.createElement)("div",{className:"wrapper wrapper--keyvisual"},(0,r.createElement)("div",{className:"aspect-box"},(0,r.createElement)("img",{className:"keyvisual",src:o})))),(0,r.createElement)("div",{className:"content__bottom"},c&&(0,r.createElement)("div",{className:"wrapper wrapper--description",dangerouslySetInnerHTML:{__html:(0,u.autop)(c)}}),(0,r.createElement)("div",{className:"cta"},d.map(((e,t)=>{let{btnText:a,btnLink:n}=e;return a&&(0,r.createElement)("div",{className:"cta-btn",key:t},(0,r.createElement)("a",{className:"cta-btn__link",href:n},(0,r.createElement)("button",{className:"cta-btn__btn"},a)))}))))))}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var c=1/0;for(m=0;m<e.length;m++){for(var[a,l,r]=e[m],o=!0,i=0;i<a.length;i++)(!1&r||c>=r)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(o=!1,r<c&&(c=r));if(o){e.splice(m--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,l,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={151:0,786:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[c,o,i]=a,s=0;if(c.some((t=>0!==e[t]))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(i)var m=i(n)}for(t&&t(a);s<c.length;s++)r=c[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},a=globalThis.webpackChunkplanet4_gpjp_plugin_blocks=globalThis.webpackChunkplanet4_gpjp_plugin_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[786],(()=>n(698)));l=n.O(l)})();