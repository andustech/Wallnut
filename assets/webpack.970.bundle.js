"use strict";(self.webpackChunkecomm_levity=self.webpackChunkecomm_levity||[]).push([[970],{970:(e,t,r)=>{r.d(t,{Z:()=>ve});var n=r(7514),o=(r(5827),r(6992),r(1539),r(189),r(8783),r(3948),r(285),r(4916),r(4765),r(1058),r(9826),r(7327),r(9554),r(4747),r(6699),r(9753),r(2526),r(1817),r(2165),r(1038),r(7042),r(8309),r(9070),r(7941),r(5003),r(9337),r(3321),r(7294)),a=r(5697),i=r.n(a),l=r(1893),c=(r(1249),r(4553),r(2023),r(3848));function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){var t=e.images,r=e.watchForReset,n=(0,o.useRef)(),a=s((0,o.useState)(0),2),i=a[0],l=a[1],u=function(e){var t=n.current.children[e].getBoundingClientRect();n.current.scrollTo(n.current.scrollLeft+t.left,0),l(e)};return(0,o.useEffect)((function(){u(0)}),[r]),o.createElement("div",{className:"w-full h-full"},o.createElement(m,{ref:n,onScroll:function(){var e=n.current.scrollLeft,t=n.current.scrollWidth/n.current.children.length,r=Array.from(n.current.children).map((function(e,r){return Math.round(r*t)})).findIndex((function(t){return t-5>e||e<t+5}));l(r)}},t.map((function(e,t){return o.createElement(c.Z,{key:t,image:e.url,alt:e.alt,backgroundImage:!0,bgCover:e.url.includes("color-swatch")})}))),t.length>1&&o.createElement(o.Fragment,null,o.createElement("div",{className:"flex justify-center space-x-1 mt-2"},t.map((function(e,t){return o.createElement(c.Z,{key:t,image:e.url,currentImage:i===t,onClick:function(){return u(t)},onMouseOver:function(){return u(t)},thumbnail:!0,alt:e.alt})}))),o.createElement("div",{className:"absolute bg-white bottom-18 px-3 rounded text-sm font-serif left-2 md:bottom-26"},i+1,"/",t.length)))};d.defaultProps={watchForReset:""},d.propTypes={images:i().arrayOf(i().shape({url:i().string,alt:i().string})).isRequired,watchForReset:i().string};var m=l.ZP.div.attrs({className:"h-5/6 relative bg-gray-50"}).withConfig({displayName:"CarouselA__CarouselContainer",componentId:"sc-ye0xg-0"})(["height:100%;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}& > *{scroll-snap-align:center;}"]);const p=d;function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){var t=e.images,r=e.watchForReset,n=(0,o.useRef)(),a=f((0,o.useState)(0),2),i=a[0],l=a[1],s=function(e){var t=n.current.children[e].getBoundingClientRect();n.current.scrollTo(n.current.scrollLeft+t.left,0),l(e)};return(0,o.useEffect)((function(){s(0)}),[r]),o.createElement("div",{className:"w-full h-full"},o.createElement(y,{ref:n,onScroll:function(){var e=n.current.scrollLeft,t=n.current.scrollWidth/n.current.children.length,r=Array.from(n.current.children).map((function(e,r){return Math.round(r*t)})).findIndex((function(t){return t-5>e||e<t+5}));l(r)}},t.map((function(e,t){return o.createElement(c.Z,{key:t,image:e.url,alt:e.alt,backgroundImage:!0,bgCover:e.url.includes("color-swatch")})}))),t.length>1&&o.createElement(o.Fragment,null,o.createElement("div",{className:"flex justify-center space-x-1 mt-2"},t.map((function(e,t){return o.createElement(c.Z,{key:t,image:e.url,currentImage:i===t,onClick:function(){return s(t)},onMouseOver:function(){return s(t)},thumbnail:!0,alt:e.alt})}))),o.createElement("div",{className:"absolute bg-white -bottom-18 px-3 rounded text-sm font-serif left-2 md:bottom-26"},i+1,"/",t.length)))};h.defaultProps={watchForReset:""},h.propTypes={images:i().arrayOf(i().shape({url:i().string,alt:i().string})).isRequired,watchForReset:i().string};var y=l.ZP.div.attrs({className:"h-5/6 relative bg-gray-50"}).withConfig({displayName:"CarouselB__CarouselContainer",componentId:"sc-1s5mrhp-0"})(["height:100%;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}& > *{scroll-snap-align:center;}"]);var b={experimentId:"21022950299",variants:[{id:"20997990334",component:p},{id:"20997780111",component:h}]};const v=function(e){return(0,n.ZP)(b,e)};var w=r(1573),x=r(3761),E=r(2594),N=function(e){var t=e.qty,r=e.setQty,n=e.marginTop;return o.createElement("div",{className:"mt-".concat(n," border border-solid border-black rounded grid grid-cols-3 text-xl my-auto")},o.createElement(S,{type:"button",className:"h-9 leading-none",onClick:function(){var e=t-1;r(t&&0!==e?e:1)}}," ","−"," "),o.createElement(C,{type:"text",className:"border-none center h-9 leading-none mb-0 min-w-full text-sm w-full",value:t,min:"1","aria-label":"quantity",pattern:"[0-9]*",name:"quantity",id:"quantity",onChange:function(e){e.target.value?r(parseInt(e.target.value,10)):r(e.target.value)}}),o.createElement(S,{onClick:function(){r(t?t+1:1)},type:"button",className:"h-9 leading-none"}," ","+"," "))},C=l.ZP.input.withConfig({displayName:"ProductQty__StyledQtyInput",componentId:"sc-19wdg2g-0"})(["&&&{text-indent:0px;}"]),S=l.ZP.button.withConfig({displayName:"ProductQty__Button",componentId:"sc-19wdg2g-1"})(["&&&{color:black;background:none;}"]);N.defaultProps={marginTop:"auto"},N.propTypes={qty:i().number.isRequired,setQty:i().func.isRequired,marginTop:i().string};const k=N;r(5306),r(9600),r(2772),r(2222);const O={All:{All:["off-white","sand","dark-denim-blue","light-gray","charcoal-gray","cerulean","mustard-yellow","dark-sage","light-sage","burnt-orange","chili-red","maroon","dusty-rose","arctic-blue","soft-chartreuse","ash-brown","kali-ikat-blue","sedona-ivory","houndstooth","herringbone-off-white","herringbone-light-gray","herringbone-sand","herringbone-denim","herringbone-cerulean","herringbone-charcoal-gray","herringbone-dark-sage","herringbone-mustard-yellow","herringbone-light-sage","woven-mosaic-storm-gray","woven-mosaic-off-white","camellia-cream","camellia-lily-white","camellia-sunset-orange","pinstripe-dark-gray","pinstripe-off-white","sedona-ivory","kali-ikat-blue","houndstooth","cowhide-black-and-white","evergreen-forest","mezzo-diamond-sapphire","mezzo-diamond-grayscale","shagreen-storm-gray","staccato-salt-and-pepper","gingham-powder-blue","gingham-rustic-red"],White:["off-white","herringbone-off-white","camellia-cream","gingham-powder-blue","woven-mosaic-off-white","camellia-lily-white","pinstripe-off-white"],Gray:["light-gray","charcoal-gray","herringbone-light-gray","herringbone-charcoal-gray","woven-mosaic-storm-gray","pinstripe-dark-gray","shagreen-storm-gray","mezzo-diamond-grayscale"],Blue:["dark-denim-blue","cerulean","herringbone-denim","kali-ikat-blue","arctic-blue","mezzo-diamond-sapphire","herringbone-cerulean"],Green:["dark-sage","light-sage","soft-chartreuse","evergreen-forest","herringbone-dark-sage","herringbone-light-sage"],Yellow:["mustard-yellow","kali-ikat-blue","herringbone-mustard-yellow"],Orange:["burnt-orange","camellia-sunset-orange"],Red:["dusty-rose","chili-red","maroon","gingham-rustic-red"],Brown:["sand","ash-brown"],Black:["sedona-ivory","houndstooth","cowhide-black-and-white","staccato-salt-and-pepper"],Multi:["herringbone-off-white","herringbone-light-gray","herringbone-sand","herringbone-denim","herringbone-cerulean","herringbone-charcoal-gray","herringbone-dark-sage","herringbone-mustard-yellow","herringbone-light-sage","woven-mosaic-storm-gray","woven-mosaic-off-white","camellia-cream","camellia-lily-white","camellia-sunset-orange","pinstripe-dark-gray","pinstripe-off-white","sedona-ivory","kali-ikat-blue","houndstooth","cowhide-black-and-white","evergreen-forest","mezzo-diamond-sapphire","mezzo-diamond-grayscale","shagreen-storm-gray","staccato-salt-and-pepper","gingham-powder-blue","gingham-rustic-red"]},"Best Sellers":{All:["off-white","sand","dark-denim-blue","light-gray","charcoal-gray","cerulean","mustard-yellow","dark-sage","kali-ikat-blue","sedona-ivory","houndstooth","herringbone-off-white","herringbone-light-gray","herringbone-denim","woven-mosaic-storm-gray","herringbone-charcoal-gray","cowhide-black-and-white"]}};var P=r(7271),A=function(e){var t=e.onClick,r=e.onMouseEnter,n=e.text,a=e.active;return o.createElement(I,{onClick:t,onMouseEnter:r,tabIndex:0,onKeyDown:function(){},role:"button",active:a,text:n},n)},I=l.ZP.div.attrs((function(e){var t="center text-base py-1 px-1 text-lg font-serif font-extralight w-2/5";return e.active&&(t="".concat(t," border-b-4 border-orange-burnt font-light")),{className:t}})).withConfig({displayName:"FilterTabs__StyledFilterTabs",componentId:"sc-8noj4a-0"})([""]);A.propTypes={onClick:i().func.isRequired,onMouseEnter:i().func.isRequired,text:i().string.isRequired,active:i().bool.isRequired};const _=A;var R=r(7723),j=function(e){var t=e.fabrics,r=e.type,n=e.setSelectedColor,a=e.handleColorSelect,i=e.group,l=e.setGroup,c=e.groupName,s=t[r][c][0],u=i===c?"All":c;return o.createElement(M,{group:i,groupName:c},o.createElement(T,{onClick:function(){l(u),n(s),a(s)},background:w.uo[c].background},"Multi"===c?o.createElement(R.Rj,null):""))},M=l.ZP.div.attrs((function(e){var t=e.group,r=e.groupName,n="relative h-10 w-11 rounded-md border-2 border-white";return{className:n="".concat(n,t===r?" border-2 border-blue":" hover:border-gray-300")}})).withConfig({displayName:"ColorGroupFilter__StyledColorGroupContainer",componentId:"sc-1nv8pra-0"})([""]),T=l.ZP.div.attrs({className:"absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-no-repeat h-8 w-9 rounded-md border border-gray-300 cursor-pointer"}).withConfig({displayName:"ColorGroupFilter__StyledColorGroup",componentId:"sc-1nv8pra-1"})(["",""],(function(e){var t=e.group,r=e.background;return"Multi"!==t?"background-color: ".concat(void 0===r?"":r,"; background-size: 36px 36px;"):"background-size: 36px 36px;"}));j.defaultProps={fabrics:{},type:"",group:"",groupName:""},j.propTypes={fabrics:i().shape({}),type:i().string,setSelectedColor:i().func.isRequired,handleColorSelect:i().func.isRequired,group:i().string,setGroup:i().func.isRequired,groupName:i().string};const Z=j;function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=function(e,t,r){var n=e.includes("cover")?r:t;return location.search.includes("?variant")?n.toLowerCase().replace(/\s/g,"-"):"herringbone-off-white"},L=function(e){var t=e.product,r=e.selectedVariant,n=e.setSelectedVariant,a=e.setCurrentOptions,i=t.handle,l=t.variants,c=r.option1,s=r.option2,u=function(e,t){var r=t.option1,n=t.option2,o=(e.includes("cover")?n:r).toLowerCase().replace(/\s/g,"-");return location.search.includes("variant=")||location.search.includes("color=")?Object.keys(O).reduce((function(e,t){return O[t].All.includes(o)?t:e}),""):"All"}(i,r),d=D(i,c,s),m=F((0,o.useState)(u),2),p=m[0],f=m[1],g=F((0,o.useState)("All"),2),h=g[0],y=g[1],b=F((0,o.useState)(d),2),v=b[0],w=b[1],x=F((0,o.useState)(!1),2),E=x[0],N=x[1];(0,o.useEffect)((function(){if(location.search.includes("variant="))w(D(i,c,s));else{var e=t.variants.find((function(e){return e.title.includes("Herringbone Off White")}));e&&(n(e),a({option1:e.option1,option2:e.option2,option3:e.option3}))}}),[i,t,a,n,r,v,c,s]),(0,o.useEffect)((function(){window.matchMedia("(min-width: 768px)").matches&&N(!0)}),[N]);var C=O[p],S=function(e){var r=t.options.indexOf("Color"),o=l.find((function(t){return t.options.map((function(e){return e.toLowerCase().replace(/ /g,"-")})).includes(e)}));history.pushState("","","?variant=".concat(o.id,"&color=").concat(o.options[r])),n(o),a({option1:o.option1,option2:o.option2,option3:o.option3}),window.optimizely.push({type:"event",eventName:"handle-color-swatch",tags:{revenue:0,value:0}})},k=function(e){e!==p&&(f(e),y("All"),w(O[e].All[0]),S(O[e].All[0]))};return o.createElement("div",null,o.createElement("div",{className:"flex justify-around"},Object.keys(O).map((function(e,t){return o.createElement(_,{key:t,onClick:function(){k(e)},onMouseEnter:function(){k(e)},text:e,active:e===p})}))),o.createElement("div",{className:"border-gray border-b"}),o.createElement(V,{type:p},"Filter by Color:"),Object.keys(C).length>1&&o.createElement("div",{className:"grid grid-cols-7 md:flex md:justify-between my-2"},function(e,t){return e?t:t.filter((function(e,t){return t<6}))}(E,Object.keys(C)).filter((function(e){return"All"!==e})).map((function(e,t){return o.createElement(Z,{key:t,fabrics:O,type:p,setSelectedColor:w,handleColorSelect:S,group:h,setGroup:y,groupName:e})})),function(e,t){return e?o.createElement("div",{className:"relative col-span-2 text-base md:hidden",onClick:function(){return t(!e)},tabIndex:0,onKeyDown:function(){},role:"button"},o.createElement("div",{className:"underline -translate-y-1/2 absolute left-0 top-1/2 transform w-11/12 font-serif"},"show less")):o.createElement("div",{className:"relative col-span-2 text-center border border-blue rounded-md text-base h-8 my-auto md:hidden",onClick:function(){return t(!e)},tabIndex:0,onKeyDown:function(){},role:"button"},o.createElement("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transform w-11/12 font-serif"},"+5 more"))}(E,N)),o.createElement("h5",{className:"text-sm text-left mt-3"},"Washable Fabric Color"," ",o.createElement(o.Fragment,null,"-"," ",o.createElement("span",{className:"brown-text md:text-sm"},i.includes("cover")?s:c))),o.createElement("div",{className:"lg:max-h-80"},o.createElement("ul",{className:"lg:border-b grid grid-cols-8 lg:border-none lg:pb-0 pb-2"},function(e,t,r){if("extra-chair-cover"===e.handle){var n=e.variants.filter((function(e){return e.option1===r}));return t.filter((function(e){return!!n.find((function(t){return t.options.join(" ").replace(/ /g,"-").toLowerCase().includes(e)}))}))}return t.filter((function(t){return!!e.variants.find((function(e){return e.options.join(" ").replace(/ /g,"-").toLowerCase().includes(t)}))}))}(t,C[h],c).map((function(e,t){return o.createElement("li",{key:t,className:"mt-2"},o.createElement(z,{isSelected:e===v,onClick:function(){w(e),S(e)},tabIndex:0,onKeyDown:function(){},role:"button","aria-label":"change color"},o.createElement(P.Z,{option:e})))})))))},z=l.ZP.div.attrs((function(e){var t=e.isSelected,r="relative grid justify-items-center items-center border-2 h-9 w-9 mx-auto rounded-full md:h-11 md:w-11";return{className:r="".concat(r,t?" border-blue":" border-white")}})).withConfig({displayName:"PDPColorFilterC__ColorSwatchContainer",componentId:"sc-1c5b9nu-0"})([""]),V=l.ZP.p.attrs((function(e){var t="mt-3 mb-0 text-base";return"All"!==e.type&&(t="".concat(t," hidden")),{className:t}})).withConfig({displayName:"PDPColorFilterC__StyledCopy",componentId:"sc-1c5b9nu-1"})([""]);L.defaultProps={selectedVariant:{option2:null,option3:null}},L.propTypes={product:i().shape({options:i().arrayOf(i().string),handle:i().string,variants:i().arrayOf(i().shape({}))}).isRequired,selectedVariant:i().shape({option1:i().string.isRequired,option2:i().string,option3:i().string,name:i().string.isRequired}),setSelectedVariant:i().func.isRequired,currentOptions:i().shape({option1:i().string,option2:i().string,option3:i().string}).isRequired,setCurrentOptions:i().func.isRequired};const B=L;function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q=function(e){var t=e.productMessaging,r=t.productMessage,n=t.productMessageInfo,a=t.productMessageHeight,i=G((0,o.useState)(!0),2),l=i[0],c=i[1],s=function(e){l||"messagebox"!==e.target.id&&"messagebox"!==e.target.lastChild.id&&c(!0)};return(0,o.useEffect)((function(){return window.addEventListener("click",s),function(){window.removeEventListener("click",s)}}),[l]),void 0!==r&&void 0!==n?o.createElement("div",{className:"flex text-grey-about text-sm font-serif mt-2"},o.createElement("div",{className:"flex items-start lg:items-center mr-2 w-8 md:w-min"},o.createElement(R.Yw,null)),o.createElement("div",{className:"mr-1.5 whitespace-nowrap flex"},o.createElement("div",{className:"text-green-bright text-lg font-normal whitespace-normal w-33 md:mr-4.5 flex items-center"},"Free Shipping on All Orders"),o.createElement(U,null),o.createElement("div",{className:"text-green-bright text-lg font-normal whitespace-normal w-48 ml-2 md:ml-8"},r,o.createElement("div",{className:"inline-block ml-1"},o.createElement("div",{onClick:function(){c(!l)},onKeyDown:function(){},tabIndex:0,role:"button",className:"flex items-center h-full"},o.createElement(R.og,null)),o.createElement(H,{hideBox:l,productMessageHeight:a},o.createElement("div",{className:"flex items-center absolute whitespace-normal text-white p-2 leading-4 text-xxs",id:"messagebox"},n)))))):null},H=l.ZP.div.attrs((function(e){return{className:"".concat(e.hideBox?"invisible":"visible"," absolute w-52 h-").concat(e.productMessageHeight," bg-grey-about transform -translate-x-3/4 md:-translate-x-1/2 translate-y-1.5")}})).withConfig({displayName:"PDPMessaging__StyledProductMessageContainer",componentId:"sc-1n2i68s-0"})([""]),U=l.ZP.div.withConfig({displayName:"PDPMessaging__Divider",componentId:"sc-1n2i68s-1"})(["width:2px;margin:6px 0;background:#435570;"]);Q.defaultProps={productMessaging:{}},Q.propTypes={productMessaging:i().shape({productMessage:i().string,productMessageInfo:i().string,productMessageHeight:i().string})};const W=Q;var $=function(e){var t=e.product,r=e.selectedVariant,n=e.selectOptions,a=e.handleColorSwatch,i=e.handleOptionClick,l=e.handleSelectingOption,c=t.handle;return o.createElement(Y,{handle:c},n.map((function(e,n){var s,u="option".concat(n+1),d=function(e,t){return"Chair Style"===t.name?e.option1:e.option2}(r,e);return"Leg"===e.name&&t.title.includes("The Classic Lounge Chair")?null:o.createElement(J,{isColor:"Color"===e.name,key:n,onClick:"Color"===e.name?function(){return a()}:void 0,tabIndex:0,onKeyDown:function(){},role:"button"},o.createElement("h5",{className:"text-sm text-left mb-3"},"Color"===(s=e.name)?"Washable Fabric Color":"Leg"===s?"Leg Style":"Amount"===s?"Select Amount":s," ","Amount"!==e.name&&o.createElement(o.Fragment,null,"- ",o.createElement("span",{className:"brown-text md:text-sm"},d))),o.createElement(X,{hasGap:"Amount"===e.name,handle:c},e.options.map((function(t){return o.createElement(ee,{selectOptionName:e.name,handle:c,key:t.name||t,role:"menuitem",onKeyDown:function(){},tabIndex:0},"extra-chair-cover"===c&&"Chair Style"===e.name&&o.createElement(te,{isSelected:t.name===d,className:"chair-style h-14 w-14"},o.createElement("div",{onClick:function(){return l(t.handle)},className:"h-12 w-12 rounded-full design-color-swatch ".concat(t.name),role:"button",onKeyDown:function(){},tabIndex:0,"aria-label":"Select Chair Style"})),"Leg"===e.name&&o.createElement(re,{isSelected:t.name===r.option2},o.createElement("div",{onClick:function(){return l(t.handle)},className:"h-7 w-7 md:h-9 md:w-9 rounded-full wood-color-swatch ".concat(t.name),role:"button",onKeyDown:function(){},tabIndex:0,"aria-label":"Select Chair Leg Color"})),"Color"===e.name&&o.createElement(re,{isSelected:t===d},o.createElement(P.Z,{option:t})),"Amount"===e.name&&o.createElement("div",{onClick:function(){return i(t,u)},className:"p-2 text-sm font-extralight h-full w-full center border-solid grid justify-items-center items-center rounded cursor-pointer ".concat(t===d?" border-blue border-2":"border-gray-300 border"),role:"button",onKeyDown:function(){},tabIndex:0,"aria-label":"Select Amount"},o.createElement("div",{className:"h-full w-full"},"$",t)))}))))})))},Y=l.ZP.div.attrs((function(e){var t=e.handle,r="product_form product_form";return["the-classic-dining-chair","extra-chair-cover"].includes(t)&&(r="".concat(r," mb-3 pb-1 pt-3 border-grey-50 border-b lg:border-t border-solid lg:border-none")),{className:r}})).withConfig({displayName:"PDPSimpleFilter__SimpleFilterContainer",componentId:"sc-15s8af8-0"})([""]),J=l.ZP.div.attrs((function(e){var t="text-left";return e.isColor&&(t="".concat(t," hidden")),{className:t}})).withConfig({displayName:"PDPSimpleFilter__SelectionsContainer",componentId:"sc-15s8af8-1"})([""]),X=l.ZP.div.attrs((function(e){var t=e.hasGap,r=e.handle,n="flex flex-wrap mb-3 w-72 md:w-90";return t&&(n="".concat(n," gap-3")),"extra-chair-cover"===r&&(n="".concat(n," flex-row")),{className:n}})).withConfig({displayName:"PDPSimpleFilter__OptionsContainer",componentId:"sc-15s8af8-2"})([""]),ee=l.ZP.div.attrs((function(e){var t=e.selectOptionName,r=e.handle,n="";return"Amount"!==t&&(n="".concat(n," color")),"extra-chair-cover"===r&&(n="".concat(n," col-span-1")),"Amount"===t&&(n="".concat(n," col-span-2")),{className:n}})).withConfig({displayName:"PDPSimpleFilter__Option",componentId:"sc-15s8af8-3"})([""]),te=l.ZP.div.attrs((function(e){var t=e.isSelected,r="border-solid border-2 rounded-full grid justify-items-center items-center cursor-pointer";return{className:r="".concat(r,t?" border-blue":" border-white")}})).withConfig({displayName:"PDPSimpleFilter__StandardOption",componentId:"sc-15s8af8-4"})([""]),re=(0,l.ZP)(te).attrs((function(e){var t=e.isSelected,r="h-9 w-9 md:h-11 md:w-11 border-2";return{className:r="".concat(r,t?" border-blue":" border-white")}})).withConfig({displayName:"PDPSimpleFilter__LegColorOption",componentId:"sc-15s8af8-5"})([""]);$.defaultProps={product:{variants:[]}},$.propTypes={product:i().shape({id:i().number,variants:i().arrayOf(i().shape({option1:i().string,option2:i().string,option3:i().string})),handle:i().string,title:i().string}),selectedVariant:i().shape({option1:i().string,option2:i().string,option3:i().string,id:i().number}).isRequired,selectOptions:i().arrayOf(i().oneOfType([i().object,i().string])).isRequired,handleColorSwatch:i().func.isRequired,handleOptionClick:i().func.isRequired,handleSelectingOption:i().func.isRequired};const ne=$;function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||se(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e){return function(e){if(Array.isArray(e))return ue(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){if(e){if("string"==typeof e)return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ue(e,t):void 0}}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var de=function(e,t,r){var n=e.variants.reduce((function(e,n){return"option1"===r&&e.push(n[r]),n.option1===t.option1&&e.push(n[r]),e}),[]);return ce(new Set(n))},me=function(e){var t=e.product,r=e.currentVariant,n=e.reviews,a=e.reviewsRef,i=void 0===a?{}:a,l=e.discount,c=e.productMessaging,s=e.handleSelectingOption,u=t.handle,d=r.option1,m=r.option2,p=r.option3,f=le((0,o.useState)(function(e,t){var r=new URLSearchParams(window.location.search),n=parseInt(r.get("variant"),10);return n&&t.id!==n&&e.variants.find((function(e){return e.id===n}))||t}(t,r)),2),g=f[0],h=f[1],y=le((0,o.useState)({option1:d,option2:m,option3:p}),2),b=y[0],N=y[1],C=le((0,o.useState)(!1),2),S=C[0],O=C[1],P=le((0,o.useState)(1),2),A=P[0],I=P[1],_=function(e,t){return e.options.reduce((function(r,n,o){var a="option".concat(o+1);return r.push({name:n,options:de(e,t,a)}),r}),[])}(t,g),R=(0,o.useRef)(),j=function(e,r){var n=ae(ae({},b),{},ie({},r,e)),o=t.variants.find((function(e){return e.option1===n.option1&&e.option2===n.option2&&e.option3===n.option3}));if(o)history.pushState("","","?variant=".concat(o.id)),h(o),N(n);else{var a=t.variants.filter((function(e){return e.option1===n.option1}));history.pushState("","","?variant=".concat(a.id)),h(a[0]),N(n)}};(0,o.useEffect)((function(){new IntersectionObserver((function(e){e.forEach((function(e){1!==e.intersectionRatio&&e.target.getBoundingClientRect().top<0?O(!0):O(!1)}))}),{threshold:1}).observe(R.current)}),[t,g]),(0,o.useEffect)((function(){h(r)}),[r]);var M=function(){window.optimizely.push({type:"event",eventName:"handle-color-swatch",tags:{revenue:0,value:0}})};return o.createElement(pe,null,o.createElement("div",{className:"absolute lg:relative w-11/12 h-90 md:h-110 lg:w-7/12"},o.createElement(v,{images:(0,w.SF)(t,g),watchForReset:g.sku})),o.createElement(fe,{handle:u},o.createElement("form",{className:"mb-3 md:pr-10",onSubmit:function(e){return(0,w.Pq)(e,t,A,g.id)}},o.createElement("div",null,o.createElement("h1",{className:"text-xl mb-0 md:text-2xl"},t.metafields.productTitle),o.createElement("div",{onClick:function(){window.scrollTo({behavior:"smooth",top:i.current.offsetTop})},onKeyDown:function(){},role:"button",tabIndex:0},n.reviews&&o.createElement(E.Z,{stars:n.bottomline.average_score,totalReview:n.bottomline.total_review,location:"product-header"})),o.createElement("div",{className:"grid grid-cols-10  border-none text-sm "},o.createElement("div",{className:"col-span-7"},o.createElement("span",{id:"pdp-product-price",className:"text-2xl"},t.compare_at_price?o.createElement("div",{className:"md:w-80"},o.createElement("span",{className:"font-normal text-errorRed text-2xl md:text-3xl"},(0,w.pF)(g.price)),o.createElement("span",{className:"ml-1 line-through text-sm"},(0,w.pF)(g.compare_at_price)),o.createElement("span",{className:"ml-2 text-errorRed text-xl md:text-2xl"},l,"% Off")):(0,w.pF)(g.price)))),o.createElement(x.Z,{price:g.price,product:t.title}),"extra-chair-cover"===u&&o.createElement(ne,{product:t,selectedVariant:g,selectOptions:t.metafields.styleOptions||[],handleColorSwatch:M,handleOptionClick:j,handleSelectingOption:s}),"e-gift-card"!==u&&o.createElement(B,{product:t,selectedVariant:g,setSelectedVariant:h,currentOptions:b,setCurrentOptions:N,selectOptions:_}),"extra-chair-cover"!==u&&o.createElement(ne,{product:t,selectedVariant:g,selectOptions:"e-gift-card"===t.handle?t.metafields.amountOptions:t.metafields.legOptions||[],handleColorSwatch:M,handleOptionClick:j,handleSelectingOption:s}),o.createElement("div",{className:"grid grid-cols-4 my-4"},o.createElement(k,{qty:A,setQty:I,marginTop:"1"}),o.createElement("div",{className:"border-grey-50 border-solid center md:border-none col-span-3 ml-4"},o.createElement(ge,{ref:R,type:"submit",name:"button",value:"Add to Cart"}),o.createElement(he,{showStickySubmit:S},o.createElement("div",{className:"w-20 my-auto ml-2 justify-self-end col-span-3"},o.createElement(k,{qty:A,setQty:I})),o.createElement("div",{className:"col-span-2 my-auto ml-3 font-serif font-xl"},(0,w.pF)(g.price)),o.createElement(ye,{type:"submit",value:"Add to Cart"})))),o.createElement(W,{productMessaging:c})))))};me.defaultProps={product:{variants:[]},reviews:{},reviewsRef:{},discount:"0",productMessaging:{}},me.propTypes={product:i().shape({id:i().number,variants:i().arrayOf(i().shape({option1:i().string,option2:i().string,option3:i().string})),handle:i().string,title:i().string,compare_at_price:i().number,metafields:i().shape({productTitle:i().string,styleOptions:i().oneOfType([i().array,i().string]),legOptions:i().oneOfType([i().array,i().string]),amountOptions:i().oneOfType([i().array,i().string])})}),currentVariant:i().shape({option1:i().string,option2:i().string,option3:i().string,id:i().number}).isRequired,reviews:i().shape({bottomline:i().shape({average_score:i().number,total_review:i().number}),reviews:i().arrayOf(i().shape({}))}),reviewsRef:i().shape({current:i().shape({offsetTop:i().number})}),discount:i().string,productMessaging:i().shape({productMessage:i().string,productMessageInfo:i().string,productMessageHeight:i().string}),handleSelectingOption:i().func.isRequired};var pe=l.ZP.div.attrs({className:"flex flex-col items-center max-w-screen-xl lg:flex-row"}).withConfig({displayName:"ProductSelectorA__ProductSelectorContainer",componentId:"sc-1ok6b5p-0"})([""]),fe=l.ZP.div.attrs((function(e){var t=e.handle,r="md:mt-100 lg:mt-0 lg:pt-0 md:pl-5 md:mx-28 lg:mx-5 w-full md:w-8/12 lg:w-5/12";return{className:r=["extra-chair-cover","e-gift-card"].includes(t)?"".concat(r," mt-80 md:pt-4"):"".concat(r," mt-84 md:pt-8")}})).withConfig({displayName:"ProductSelectorA__ProductFormContainer",componentId:"sc-1ok6b5p-1"})([""]),ge=l.ZP.input.attrs({className:"AddtoCart pb-0 pt-0 text-base font-light h-11 leading-none mb-0 md:h-auto md:py-0.5 md:w-full"}).withConfig({displayName:"ProductSelectorA__AddToCartSubmitInput",componentId:"sc-1ok6b5p-2"})([""]),he=l.ZP.div.attrs((function(e){var t=e.showStickySubmit,r="fixed mb-0 px-2 w-full bg-white md:hidden";return{className:r="".concat(r,t?" grid grid-cols-10 left-0 bottom-0 rounded-none border-t border-gray-light h-16 z-20":" hidden")}})).withConfig({displayName:"ProductSelectorA__StickyAddToCartContainer",componentId:"sc-1ok6b5p-3"})([""]),ye=l.ZP.input.attrs({className:"AddtoCart col-span-4 pt-0 text-sm px-0 font-light h-10 leading-none my-auto ml-4 mb-3 "}).withConfig({displayName:"ProductSelectorA__StickyAddToCartInput",componentId:"sc-1ok6b5p-4"})([""]);var be={experimentId:"21022950299",variants:[{id:"20997990334",component:me},{id:"20997780111",component:me}]};const ve=function(e){return(0,n.ZP)(be,e)}},2594:(e,t,r)=>{r.d(t,{Z:()=>u});r(1058);var n=r(7294),o=r(5697),a=r.n(o),i=r(1893),l=function(e){for(var t=[],r=parseInt(e,10),o=e%1,a=parseInt(5-e,10),i=0;i<r;i+=1)t.push(n.createElement("span",{key:"fullstar-".concat(i),className:"yotpo-icon yotpo-icon-star pull-left"}));for(var l=0;l<1;l+=1)o>=.8?t.push(n.createElement("span",{key:"partialStar-".concat(l),className:"yotpo-icon yotpo-icon-star pull-left"})):o<.8&&o>0&&t.push(n.createElement("span",{key:"partialStar-".concat(l),className:"yotpo-icon yotpo-icon-half-star yotpo-icon-star pull-left"}));for(var c=0;c<a;c+=1)t.push(n.createElement("span",{key:"emptyStar-".concat(c),className:"yotpo-icon yotpo-icon-empty-star pull-left"}));return t},c=function(e){var t=e.starsOnly,r=e.stars,o=e.totalReviews,a=e.displayAvgStars,i=e.location;if(t)return n.createElement("div",{className:"yotpo yotpo-small"},n.createElement("div",{className:"yotpo-display-wrapper",style:{visibility:"hidden"}},n.createElement("div",{className:"standalone-bottomline",tabIndex:"-1"},n.createElement("div",{className:"yotpo-bottomline pull-left grid items-center"},n.createElement("span",{className:"yotpo-stars mr-2"},l(t)),n.createElement("div",{className:"yotpo-clr"})),n.createElement("div",{className:"yotpo-clr"})),n.createElement("div",{className:"yotpo-clr"})));var c;return n.createElement("div",{className:"yotpo yotpo-small"},n.createElement("div",{className:"yotpo-display-wrapper",style:{visibility:"hidden"}},n.createElement("div",{className:"standalone-bottomline",tabIndex:"-1"},n.createElement("div",{className:"yotpo-bottomline pull-left grid items-center"},n.createElement("div",{className:(c=i,"reviews-header"===c?"":"product-header"===c?"flex items-center":"grid grid-cols-2 items-center lg:grid-cols-2 md:grid-cols-3")},n.createElement("div",{className:function(e){return"reviews-header"===e?"yotpo-stars mx-auto md:inline-block md:mx-0":"product-header"===e?"yotpo-stars col-span-1 md:mr-2":"yotpo-stars col-span-1 lg:col-span-1 md:col-span-2 md:mr-2"}(i)},l(r)),o&&!a?"reviews-header"===i?n.createElement("div",{className:"text-brown text-xs text-center mt-1 md:inline-block"},Math.round(10*r)/10," Stars"):"product-header"===i?n.createElement("div",{className:"text-brown text-s font-normal md:ml-0 ml-2 mr-1 mt-1 flex"},o," Reviews",n.createElement(s,null),n.createElement("div",{className:"text-brown text-s font-normal ml-1"},Math.round(10*r)/10," Stars")):n.createElement("div",{className:"text-brown text-xs mt-1 md:inline-block"},o," Reviews"):n.createElement("div",{className:"".concat("reviews-header"===i?"text-center":"inline-block mt-1 ml-2 md:ml-0"," text-brown text-xs")},Math.round(10*r)/10," Stars")),n.createElement("div",{className:"yotpo-clr"})),n.createElement("div",{className:"yotpo-clr"})),n.createElement("div",{className:"yotpo-clr"})))},s=i.ZP.div.attrs({className:"h-3 ml-1 mt-1"}).withConfig({displayName:"YotpoReviewStars__StyledBorder",componentId:"sc-t10d0f-0"})(["border-left:1px solid #ac6433 !important;"]);c.defaultProps={starsOnly:0,totalReviews:0,displayAvgStars:!1,stars:0,location:""},c.propTypes={starsOnly:a().number,stars:a().number,totalReviews:a().number,displayAvgStars:a().bool,location:a().string};const u=c}}]);