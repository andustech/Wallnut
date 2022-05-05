"use strict";(self.webpackChunkecomm_levity=self.webpackChunkecomm_levity||[]).push([[879],{4879:(e,t,n)=>{n.d(t,{Z:()=>b});n(1249),n(9254),n(9753),n(2526),n(1817),n(1539),n(2165),n(6992),n(8783),n(3948),n(7042),n(8309),n(1038);var r=n(7294),i=n(5697),o=n.n(i),a=(n(9554),n(4747),n(3710),n(9714),n(9653),n(1893)),l=n(1573);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=e.link,n=e.header,i=e.body,o=e.index,a=e.videoPlaying,c=e.setVideoPlaying,d=s((0,r.useState)(!0),2),y=d[0],h=d[1],v=(0,r.useRef)();(0,r.useEffect)((function(){var e=window.matchMedia("(max-width: 768px)"),t=(0,l.tq)(navigator)&&e.matches&&v.current,n=new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>.75?h(!0):h(!1)}))}),{threshold:.75});t&&n.observe(v.current)}),[]),(0,r.useEffect)((function(){var e=document.getElementById("video".concat(o));window.matchMedia("(min-width: 769px)")&&o===a.toString()&&e.play()}),[o,a,c]),(0,r.useEffect)((function(){var e=window.matchMedia("(max-width: 768px)");if((0,l.tq)(navigator)&&e.matches&&v.current){var t=document.getElementById("video".concat(o));y&&(t.play(),t.loop=!0),y||(t.pause(),t.loop=!0)}}),[o,y]);return r.createElement("div",{ref:v,className:"flex flex-col mb-10 lg:mb-0"},r.createElement("div",{className:"relative"},r.createElement("video",{id:"video".concat(o),onEnded:function(){window.matchMedia("(min-width: 769px)")&&c(a<3?Number(o)+1:1)},width:"100%",muted:!0,playsInline:!0},r.createElement("source",{src:"".concat(t,"#t=0.001"),type:"video/mp4"})),r.createElement(p,null,r.createElement("div",{className:"mt-4"},o))),r.createElement(u,null,r.createElement(f,null,n),r.createElement(m,null,i)))},u=a.ZP.div.attrs({className:"flex flex-col text-center font-serif h-20"}).withConfig({displayName:"Video__TextContainer",componentId:"sc-8la8ve-0"})([""]),f=a.ZP.div.attrs({className:"text-lg lg:text-xl font-medium text-blue mt-4 lg:mt-6"}).withConfig({displayName:"Video__Header",componentId:"sc-8la8ve-1"})([""]),m=a.ZP.div.attrs({className:"text-base lg:text-lg mt-3 lg:mt-0.5"}).withConfig({displayName:"Video__BodyText",componentId:"sc-8la8ve-2"})([""]),p=a.ZP.div.withConfig({displayName:"Video__Triangle",componentId:"sc-8la8ve-3"})((function(){return[{position:"absolute",bottom:"0px",display:"flex",justifyContent:"center",fontFamily:'stolzl, sans-serif, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'},"width: 0;\n  left:43%;\n    height: 0;\n    border-left: 30px solid transparent;\n    border-right: 30px solid transparent;\n    border-bottom: 50px solid #f7f7f7;"]}));d.defaultProps={link:"",header:"",body:"",index:"",videoPlaying:1,setVideoPlaying:function(){return null}},d.propTypes={link:o().string,header:o().string,body:o().string,index:o().string,videoPlaying:o().number,setVideoPlaying:o().func};const y=d;function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=function(e){var t=e.videoLinks,n=t.link1,i=t.link2,o=t.link3,a=h((0,r.useState)(1),2),l=a[0],s=a[1],c=[{link:n,header:"Remove the Cover",body:"Unzip, unsnap, or unstrap your chair's upholstered cover"},{link:i,header:"Wash and Dry",body:"Wash the cover right at home with mild detergent. Dry on low heat."},{link:o,header:"Reattach",body:"Zip, snap, or strap your cover back into place for refreshed comfort and style."}];return r.createElement("div",{className:"flex justify-center bg-grey px-4 lg:px-8 py-9 lg:py-12"},r.createElement("div",{className:"grid gird-cols-1 lg:grid-cols-3  gap-4 max-w-screen-xxl"},c.map((function(e,t){return r.createElement(y,{key:t,index:"".concat(t+1),link:e.link,header:e.header,body:e.body,videoPlaying:l,setVideoPlaying:s})}))))};g.defaultProps={videoLinks:{link1:"https://cdn.shopify.com/s/files/1/0492/6321/4743/files/CL-Step-one_534x375px_1.mp4",link2:"https://cdn.shopify.com/s/files/1/0492/6321/4743/files/CL-Step-two_534x375px_1.mp4",link3:"https://cdn.shopify.com/s/files/1/0492/6321/4743/files/CL-Step-Three_534x375px_1.mp4"}},g.propTypes={videoLinks:o().shape({link1:o().string,link2:o().string,link3:o().string})};const b=g}}]);