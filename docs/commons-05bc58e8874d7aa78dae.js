(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[351],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var o=r(9489),n=r(7067);function a(t,r,i){return n()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var o=r(3646),n=r(6860),a=r(379),i=r(8206);e.exports=function(e){return o(e)||n(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var o=r(2632);e.exports={MDXRenderer:o}},2632:function(e,t,r){var o=r(9100),n=r(319),a=r(9713),i=r(7316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),d=r(3497).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,l),c=p(t),f=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:d},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return u.createElement(f,s({},a))}},5878:function(e,t,r){"use strict";r.d(t,{i:function(){return L}});var o=r(7294),n=r(2102),a=r(3497),i=r(9925),l=r(4187),c=r(3736),s=r(271),u=(0,i.css)(["h1,h2,h3,h4,h5,h6{font-weight:700;color:var(--text-high-contrast);}h1,h2,h3{margin-top:4.8rem;}h1{font-weight:800;font-size:3.2rem;line-height:1.25;&:after{display:block;height:0.3rem;width:5rem;content:'';margin-top:2.4rem;",";}}h2{font-size:2.5rem;line-height:1.35;}h3{font-size:2.15rem;line-height:1.5;}h4{font-size:1.8rem;}h1,h2,h3,h4,h5,h6{> .anchor{position:absolute;right:100%;top:0;bottom:0;width:",";","{width:2.8rem;}> svg{color:var(--text-low-contrast);transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;",";visibility:hidden;@media (hover:none),(hover:on-demand){visibility:visible;}}&:hover > svg{visibility:visible;}}}h1:hover .anchor > svg,h2:hover .anchor > svg,h3:hover .anchor > svg,h4:hover .anchor > svg,h5:hover .anchor > svg,h6:hover .anchor > svg,h1 .anchor:focus > svg,h2 .anchor:focus > svg,h3 .anchor:focus > svg,h4 .anchor:focus > svg,h5 .anchor:focus > svg,h6 .anchor:focus > svg{visibility:visible;}"],c.Lc,l.Mj,s.AV.minSm,(0,c.xH)("1.6rem")),d=(0,i.css)(["blockquote{padding-left:2.4rem;border-left:0.4rem solid var(--detail-low-contrast);> *:last-child{margin-bottom:0;}}"]),p=(0,i.css)(["ol,ul{margin-left:2.4rem;}ol > li,ul > li{margin-bottom:1.2rem;}ul{list-style:disc outside none;}"]),f="0.4rem",b=(0,i.css)([".language-text{background-color:var(--detail-low-contrast);border-radius:",";font-size:1.44rem;padding:0.288rem 0.6rem;box-sizing:border-box;}.gatsby-highlight{",";background-color:var(--background-code);overflow:hidden;position:relative;font-size:1.36rem;margin-bottom:2.4rem;&:before{display:block;content:attr(data-language);line-height:1;font-size:1.2rem;text-transform:uppercase;position:absolute;top:0;left:",";padding:0.4rem 0.8rem;border-bottom-left-radius:",";border-bottom-right-radius:",";}&[data-language='jsx']{&:before{background-color:#61dafb;color:#000000;}}&[data-language='js']{&:before{background-color:#f7de1e;color:#000000;}}&[data-language='ts']{&:before{background-color:#007acc;color:#ffffff;}}&[data-language='html']{&:before{background-color:#005b9c;color:#ffffff;}}&[data-language='css']{&:before{background-color:#2965f1;color:#ffffff;}}&[data-language='shell']{&:before{background-color:#d9d7e0;color:#232129;}}","{border-radius:",";}}.gatsby-highlight-code-line{position:relative;display:block;margin-left:-2.4rem;margin-right:-2.4rem;padding-left:2.4rem;padding-right:2.4rem;&:before,&:after{z-index:",";position:absolute;top:0;bottom:0;content:'';pointer-events:none;",";}&:after{left:0;width:0.4rem;}&:before{right:0;left:0;opacity:0.07;}}.gatsby-highlight pre[class*='language-']{padding:"," 0;background-color:transparent;border:0;margin-bottom:0;}.gatsby-highlight pre code{padding:0 ",";background-color:transparent;display:block;font-size:100%;line-height:1.5;float:left;min-width:100%;}pre{color:var(--text-body);overflow:auto;white-space:pre;::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb);}::-webkit-scrollbar-track{background-color:var(--detail-low-contrast);}::-webkit-scrollbar{width:0.4rem;height:0.5rem;}}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:var(--text-comment);}.token.class-name,.token.attr-value,.token.keyword,.token.control,.token.directive,.token.selector,.token.function:not(.function-variable),.token.singlequote,.token.unit{color:var(--brand-primary);}.token.string,.token.property,.token.attr-name,.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.statement,.token.regex,.token.atrule,.token.placeholder,.token.variable{color:var(--brand-secondary);}.token.punctuation,.token.plain-text{color:var(--text-high-contrast);}.token.tag,.token.boolean,.token.number,.token.function-name,.token.constant,.token.symbol{color:var(--brand-alternative);}.token.namespace{opacity:0.75;}.token.deleted{text-decoration:line-through;}.token.italic{font-style:italic;}.token.important,.token.bold{font-weight:600;}.token.entity{cursor:help;}"],f,l.rh,l.Mj,f,f,s.AV.minXs,f,s.k0.STEP,c.Lc,l.Mj,l.Mj),g=(0,i.css)(["hr{border-top:0;border-right:0;border-left:0;border-bottom:0.1rem solid var(--detail-medium-contrast);}"]),h=i.default.div.withConfig({displayName:"Styles__MdxStyles",componentId:"sc-18i58cr-0"})(["",";",";",";",";",";color:var(--text-body);h1,h2,h3,h4,h5,h6,hgroup,ul,ol,dl,blockquote,p,address,table,fieldset,figure,pre,hr,ul,ol,dd,blockquote code,kbd,samp{margin-bottom:2.4rem;}> *:first-child{margin-top:0;}> *:last-child{margin-bottom:0;}"],d,p,b,u,g),m=r(124),v=function(e){var t,r=((null===(t=e.className)||void 0===t?void 0:t.split(" "))||[]).indexOf("anchor")>-1?m.SX:m._3;return o.createElement(r,Object.assign({to:e.href},e))},y=r(9299),k=function e(t){return void 0===t&&(t=""),("string"==typeof t?[t]:o.Children.toArray(t)).reduce((function(t,r){if("string"==typeof r)return t+r;if(!o.isValidElement(r))return t;var n=r.props,a=n.className,i=n.children,l="gatsby-highlight-code-line"===a?"\n":"";return t+e(i)+l}),"")},x=i.default.div.withConfig({displayName:"Pre__Wrapper",componentId:"sc-2f6qd2-0"})(["position:relative;&:before,&:after{width:",";display:block;position:absolute;content:'';top:0;bottom:0;pointer-events:none;}&:before{left:0;background:linear-gradient( to left,rgba(var(--background-code-rgb-value),0) 0,var(--background-code) 100% );}&:after{right:0;background:linear-gradient( to right,rgba(var(--background-code-rgb-value),0) 0,var(--background-code) 100% );}"],l.Mj),w=i.default.div.withConfig({displayName:"Pre__CopyCode",componentId:"sc-2f6qd2-1"})(["display:flex;justify-content:flex-end;height:0;"]),O=(0,i.default)(y.Dr).withConfig({displayName:"Pre__CopyCodeButton",componentId:"sc-2f6qd2-2"})(["position:relative;z-index:",";margin-right:calc("," - 0.8rem);color:var(--text-low-contrast);padding:0 0.8rem;font-size:1.2rem;height:2.5rem;line-height:2.5rem;align-items:center;&:before{content:'';visibility:hidden;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:0.4rem;",";}&:hover{color:var(--background-site);&:before{visibility:visible;}}@media (hover:none),(hover:on-demand){&:hover{color:var(--text-low-contrast);&:before{display:none;}}}"],s.k0.STEP,l.Mj,c.Lc),_=i.default.span.withConfig({displayName:"Pre__ButtonStatus",componentId:"sc-2f6qd2-3"})(["",";"],c.JM),j=i.default.span.withConfig({displayName:"Pre__ButtonText",componentId:"sc-2f6qd2-4"})(["position:relative;z-index:",";"],s.k0.STEP),E=function(e){var t=e.children,r=(0,o.useState)(!1),n=r[0],a=r[1],i=(0,o.useMemo)((function(){return k(t)}),[t]),l=(0,o.useRef)(0),s=(0,o.useCallback)((function(){(0,c.vQ)(i),a(!0),l.current=window.setTimeout((function(){return a(!1)}),3e3)}),[i,a]);return(0,o.useEffect)((function(){return function(){window.clearTimeout(l.current)}}),[]),o.createElement(x,null,o.createElement(w,null,o.createElement(O,{"aria-label":"Copy code snippet to clipboard",onClick:s,disabled:n,type:"button"},o.createElement(_,{"aria-roledescription":"status"},n?"Code snipped copied to clipboard":"Copy code snippet to clipboard"),o.createElement(j,null,n?"Copied":"Copy"))),o.createElement("pre",e))},P=r(4942);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var C=function(e){var t=e["data-language"],r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,P.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);return t&&(r["data-language"]=t.replace("-with-json","")),o.createElement("div",r)},S=r(3366),z=r(3067),D=["to","children"],I=(0,i.default)(m.SX).withConfig({displayName:"RepositoryLink__Wrapper",componentId:"sc-1ozgi4j-0"})(["color:var(--text-low-contrast);display:inline-flex;font-size:1.4rem;padding-top:0.6rem;padding-bottom:0.6rem;margin-bottom:1.8rem;"]),T=function(e){var t=e.to,r=e.children,n=(0,S.Z)(e,D);return o.createElement(I,Object.assign({to:t},n),o.createElement(z.M,{iconSvg:"github",iconSize:"1.5rem"},r))},A=r(1844),R=function(){var e=(0,A.Zk)((0,A.MI)());return 0===e.length?null:o.createElement("ul",null,e.map((function(e){var t=e.id,r=e.slug,n=e.title;return o.createElement("li",{key:t},o.createElement(m._3,{to:r},n))})))},N=i.default.span.withConfig({displayName:"BrandText__ColoredText",componentId:"sc-1p5v9a1-0"})(["color:",";"],(function(e){return e.$color})),q=function(e){return o.createElement(N,Object.assign({$color:"var(--brand-primary)"},e))},B=function(e){return o.createElement(N,Object.assign({$color:"var(--brand-secondary)"},e))},X=function(e){return o.createElement(N,Object.assign({$color:"var(--brand-alternative)"},e))},L=function(e){var t=e.body;return o.createElement(h,null,o.createElement(a.MDXProvider,{components:{a:v,pre:E,div:C,RepositoryLink:T,PageChildLinks:R,BrandPrimaryText:q,BrandSecondaryText:B,BrandAlternativeText:X}},o.createElement(n.MDXRenderer,null,t)))}}}]);
//# sourceMappingURL=commons-05bc58e8874d7aa78dae.js.map