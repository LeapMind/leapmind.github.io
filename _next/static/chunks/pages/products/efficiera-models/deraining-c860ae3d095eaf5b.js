(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{7557:function(e,t,i){"use strict";var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImgComparisonSlider=void 0;let a=r(i(7294));"undefined"!=typeof document&&Promise.resolve().then(()=>o(i(9058))),t.ImgComparisonSlider=({children:e,onSlide:t,...i})=>{let s=a.default.createRef();return a.default.useEffect(()=>{void 0!==i.value&&(s.current.value=parseFloat(i.value.toString()))},[i.value,s]),a.default.useEffect(()=>{t&&s.current.addEventListener("slide",t)},[]),a.default.createElement("img-comparison-slider",Object.assign({class:i.className?`${i.className} rendered`:"rendered",tabIndex:0,ref:s},i),e)}},9058:function(){(()=>{"use strict";var e={792:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(609),n=i.n(s)()(function(e){return e[1]});n.push([e.id,':host{--divider-width: 1px;--divider-color: #fff;--divider-shadow: none;--default-handle-width: 50px;--default-handle-color: #fff;--default-handle-opacity: 1;--default-handle-shadow: none;--handle-position-start: 50%;position:relative;display:inline-block;overflow:hidden;line-height:0;direction:ltr}@media screen and (-webkit-min-device-pixel-ratio: 0)and (min-resolution: 0.001dpcm){:host{outline-offset:1px}}:host(:focus){outline:2px solid -webkit-focus-ring-color}::slotted(*){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.first{position:absolute;left:0;top:0;right:0;line-height:normal;font-size:100%;max-height:100%;height:100%;width:100%;--exposure: 50%;--keyboard-transition-time: 0ms;--default-transition-time: 0ms;--transition-time: var(--default-transition-time)}.first .first-overlay-container{position:relative;clip-path:inset(0 var(--exposure) 0 0);transition:clip-path var(--transition-time);height:100%}.first .first-overlay{overflow:hidden;height:100%}.first.focused{will-change:clip-path}.first.focused .first-overlay-container{will-change:clip-path}.second{position:relative}.handle-container{transform:translateX(50%);position:absolute;top:0;right:var(--exposure);height:100%;transition:right var(--transition-time),bottom var(--transition-time)}.focused .handle-container{will-change:right}.divider{position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.divider:after{content:" ";display:block;height:100%;border-left-width:var(--divider-width);border-left-style:solid;border-left-color:var(--divider-color);box-shadow:var(--divider-shadow)}.handle{position:absolute;top:var(--handle-position-start);pointer-events:none;box-sizing:border-box;margin-left:1px;transform:translate(calc(-50% - 0.5px), -50%);line-height:0}.default-handle{width:var(--default-handle-width);opacity:var(--default-handle-opacity);transition:all 1s;filter:drop-shadow(var(--default-handle-shadow))}.default-handle path{stroke:var(--default-handle-color)}.vertical .first-overlay-container{clip-path:inset(0 0 var(--exposure) 0)}.vertical .handle-container{transform:translateY(50%);height:auto;top:unset;bottom:var(--exposure);width:100%;left:0;flex-direction:row}.vertical .divider:after{height:1px;width:100%;border-top-width:var(--divider-width);border-top-style:solid;border-top-color:var(--divider-color);border-left:0}.vertical .handle{top:auto;left:var(--handle-position-start);transform:translate(calc(-50% - 0.5px), -50%) rotate(90deg)}',""]);let o=n},609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i}).join("")},t.i=function(e,i,s){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(s)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);s&&n[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={id:s,exports:{}};return e[s](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(792);let t="rendered",s=(e,t)=>{let i,s;let n=e.getBoundingClientRect();return"mousedown"===t.type?(i=t.clientX,s=t.clientY):(i=t.touches[0].clientX,s=t.touches[0].clientY),i>=n.x&&i<=n.x+n.width&&s>=n.y&&s<=n.y+n.height},n=document.createElement("template");n.innerHTML='<div class="second" id="second"> <slot name="second"><slot name="before"></slot></slot> </div> <div class="first" id="first"> <div class="first-overlay"> <div class="first-overlay-container" id="firstImageContainer"> <slot name="first"><slot name="after"></slot></slot> </div> </div> <div class="handle-container"> <div class="divider"></div> <div class="handle" id="handle"> <slot name="handle"> <svg xmlns="http://www.w3.org/2000/svg" class="default-handle" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"/> </svg> </slot> </div> </div> </div> ';let o={ArrowLeft:-1,ArrowRight:1},r=["horizontal","vertical"],a=e=>({x:e.touches[0].pageX,y:e.touches[0].pageY}),l=e=>({x:e.pageX,y:e.pageY});class d extends HTMLElement{constructor(){super(),this.exposure=this.hasAttribute("value")?parseFloat(this.getAttribute("value")):50,this.slideOnHover=!1,this.slideDirection="horizontal",this.keyboard="enabled",this.isMouseDown=!1,this.animationDirection=0,this.isFocused=!1,this.handle=!1,this.onMouseMove=e=>{if(this.isMouseDown||this.slideOnHover){let t=l(e);this.slideToPage(t)}},this.bodyUserSelectStyle="",this.onMouseDown=e=>{if(this.slideOnHover||this.handle&&!s(this.handleElement,e))return;e.preventDefault(),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onWindowMouseUp),this.isMouseDown=!0,this.enableTransition();let t=l(e);this.slideToPage(t),this.focus(),this.bodyUserSelectStyle=window.document.body.style.userSelect,window.document.body.style.userSelect="none"},this.onWindowMouseUp=()=>{this.isMouseDown=!1,window.document.body.style.userSelect=this.bodyUserSelectStyle,window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onWindowMouseUp)},this.touchStartPoint=null,this.isTouchComparing=!1,this.hasTouchMoved=!1,this.onTouchStart=e=>{this.handle&&!s(this.handleElement,e)||(this.touchStartPoint=a(e),this.isFocused&&(this.enableTransition(),this.slideToPage(this.touchStartPoint)))},this.onTouchMove=e=>{if(null===this.touchStartPoint)return;let t=a(e);if(this.isTouchComparing)return this.slideToPage(t),e.preventDefault(),!1;if(!this.hasTouchMoved){let i=Math.abs(t.y-this.touchStartPoint.y),s=Math.abs(t.x-this.touchStartPoint.x);if("horizontal"===this.slideDirection&&i<s||"vertical"===this.slideDirection&&i>s)return this.isTouchComparing=!0,this.focus(),this.slideToPage(t),e.preventDefault(),!1;this.hasTouchMoved=!0}},this.onTouchEnd=()=>{this.isTouchComparing=!1,this.hasTouchMoved=!1,this.touchStartPoint=null},this.onBlur=()=>{this.stopSlideAnimation(),this.isFocused=!1,this.firstElement.classList.remove("focused")},this.onFocus=()=>{this.isFocused=!0,this.firstElement.classList.add("focused")},this.onKeyDown=e=>{if("disabled"===this.keyboard)return;let t=o[e.key];this.animationDirection!==t&&void 0!==t&&(this.animationDirection=t,this.startSlideAnimation())},this.onKeyUp=e=>{if("disabled"===this.keyboard)return;let t=o[e.key];void 0!==t&&this.animationDirection===t&&this.stopSlideAnimation()},this.resetDimensions=()=>{this.imageWidth=this.offsetWidth,this.imageHeight=this.offsetHeight};let t=this.attachShadow({mode:"open"}),i=document.createElement("style");i.innerHTML=e.Z,this.getAttribute("nonce")&&i.setAttribute("nonce",this.getAttribute("nonce")),t.appendChild(i),t.appendChild(n.content.cloneNode(!0)),this.firstElement=t.getElementById("first"),this.secondElement=t.getElementById("second"),this.handleElement=t.getElementById("handle")}get value(){return this.exposure}set value(e){let t=parseFloat(e);t!==this.exposure&&(this.exposure=t,this.enableTransition(),this.setExposure())}get hover(){return this.slideOnHover}set hover(e){this.slideOnHover="false"!==e.toString().toLowerCase(),this.removeEventListener("mousemove",this.onMouseMove),this.slideOnHover&&this.addEventListener("mousemove",this.onMouseMove)}get direction(){return this.slideDirection}set direction(e){this.slideDirection=e.toString().toLowerCase(),this.slide(0),this.firstElement.classList.remove(...r),r.includes(this.slideDirection)&&this.firstElement.classList.add(this.slideDirection)}static get observedAttributes(){return["hover","direction"]}connectedCallback(){this.hasAttribute("tabindex")||(this.tabIndex=0),this.addEventListener("dragstart",e=>(e.preventDefault(),!1)),new ResizeObserver(this.resetDimensions).observe(this),this.setExposure(0),this.keyboard=this.hasAttribute("keyboard")&&"disabled"===this.getAttribute("keyboard")?"disabled":"enabled",this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keyup",this.onKeyUp),this.addEventListener("focus",this.onFocus),this.addEventListener("blur",this.onBlur),this.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.addEventListener("touchend",this.onTouchEnd),this.addEventListener("mousedown",this.onMouseDown),this.handle=this.hasAttribute("handle"),this.hover=!!this.hasAttribute("hover")&&this.getAttribute("hover"),this.direction=this.hasAttribute("direction")?this.getAttribute("direction"):"horizontal",this.resetDimensions(),this.classList.contains(t)||this.classList.add(t),this.querySelectorAll('[slot="before"], [slot="after"]').length>0&&console.warn('<img-comparison-slider>: slot names "before" and "after" are deprecated and soon won\'t be supported. Please use slot="first" instead of slot="after", and slot="second" instead of slot="before".')}disconnectedCallback(){this.transitionTimer&&window.clearTimeout(this.transitionTimer)}attributeChangedCallback(e,t,i){"hover"===e&&(this.hover=i),"direction"===e&&(this.direction=i),"keyboard"===e&&(this.keyboard="disabled"===i?"disabled":"enabled")}setExposure(e=0){var t;this.exposure=(t=this.exposure+e)<0?0:t>100?100:t,this.firstElement.style.setProperty("--exposure",100-this.exposure+"%")}slide(e=0){this.setExposure(e);let t=new Event("slide");this.dispatchEvent(t)}slideToPage(e){"horizontal"===this.slideDirection&&this.slideToPageX(e.x),"vertical"===this.slideDirection&&this.slideToPageY(e.y)}slideToPageX(e){let t=e-this.getBoundingClientRect().left-window.scrollX;this.exposure=t/this.imageWidth*100,this.slide(0)}slideToPageY(e){let t=e-this.getBoundingClientRect().top-window.scrollY;this.exposure=t/this.imageHeight*100,this.slide(0)}enableTransition(){this.firstElement.style.setProperty("--transition-time","100ms"),this.transitionTimer=window.setTimeout(()=>{this.firstElement.style.setProperty("--transition-time","var(--default-transition-time)"),this.transitionTimer=null},100)}startSlideAnimation(){let e=null,t=this.animationDirection;this.firstElement.style.setProperty("--transition-time","var(--keyboard-transition-time)");let i=s=>{if(0===this.animationDirection||t!==this.animationDirection)return;null===e&&(e=s);let n=(s-e)/16.666666666666668*this.animationDirection;this.slide(n),setTimeout(()=>window.requestAnimationFrame(i),0),e=s};window.requestAnimationFrame(i)}stopSlideAnimation(){this.animationDirection=0,this.firstElement.style.setProperty("--transition-time","var(--default-transition-time)")}}"undefined"!=typeof window&&window.customElements.define("img-comparison-slider",d)})()})()},327:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/efficiera-models/deraining",function(){return i(770)}])},3925:function(e,t,i){"use strict";i.d(t,{eM:function(){return l},ql:function(){return u},D6:function(){return c}});var s=i(5893),n=i(7557),o=i(6101),r=i.n(o),a=i(4819);let l=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:r().comparisonSlider,children:(0,s.jsxs)(n.ImgComparisonSlider,{children:[t,(0,s.jsx)("div",{slot:"handle",className:r().customHandle,children:(0,s.jsx)(a.Pr,{fill:"var(--color-gray-50)"})})]})})};i(7294);var d=i(5675),h=i.n(d);let c=e=>{let{src:t,width:i="564",height:n="376",alt:o,...r}=e;return(0,s.jsx)(h(),{src:t,width:i,height:n,alt:o,slot:"first",...r})},u=e=>{let{src:t,width:i="564",height:n="376",alt:o,...r}=e;return(0,s.jsx)(h(),{src:t,width:i,height:n,alt:o,slot:"second",...r})}},770:function(e,t,i){"use strict";i.r(t),i.d(t,{DerainingPage:function(){return w},__N_SSG:function(){return x},default:function(){return y}});var s=i(5893),n=i(2962),o=i(7561),r=i(5374),a=i(1458),l=i(4760),d=i(3964),h=i(7932),c=i(3644),u=i(8232),m=i(5960),f=i(3925);let v=()=>{let{t:e}=(0,o.$G)("deraining");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.J,{active:"efficiera-models"}),(0,s.jsxs)(r.mr,{children:[(0,s.jsx)(r.BV,{children:"Deraining"}),(0,s.jsx)(r.uv,{children:e("pageHeader.description")})]}),(0,s.jsx)(a.W,{as:"section",backgroundColor:"alternate",children:(0,s.jsx)(d.K,{direction:"column",gap:{sm:32,md:48,lg:48},alignItems:"stretch",children:(0,s.jsxs)(m.Hn,{id:"deraining",children:[(0,s.jsxs)(m.HK,{children:[(0,s.jsx)(m.sc,{children:"Deraining"}),(0,s.jsx)(m.Ag,{children:e("model.text")})]}),(0,s.jsxs)(m.sS,{children:[(0,s.jsxs)(f.eM,{children:[(0,s.jsx)(f.D6,{src:"/images/efficiera-models/deraining-original.jpg",alt:e("model.alt1")||""}),(0,s.jsx)(f.ql,{src:"/images/efficiera-models/deraining-modified.jpg",alt:e("model.alt2")||""})]}),(0,s.jsx)(l.Z,{size:"small",children:e("model.caption")})]})]})})}),(0,s.jsx)(a.W,{as:"section",backgroundColor:"alternate",children:(0,s.jsxs)(d.K,{direction:"column",gap:{sm:32,md:48,lg:48},alignItems:"stretch",children:[(0,s.jsx)(l.Z,{as:"h2",size:"sectionTitle",align:"center",bold:!0,children:"USE CASE"}),(0,s.jsxs)(h.r,{columns:{sm:1,md:2,lg:2},gap:{sm:16,md:24,lg:32},children:[(0,s.jsxs)(d.K,{direction:"column",gap:8,alignItems:"stretch",children:[(0,s.jsx)(l.Z,{bold:!0,children:e("useCase.item1.title")}),(0,s.jsx)(l.Z,{children:e("useCase.item1.text")})]}),(0,s.jsxs)(d.K,{direction:"column",gap:8,alignItems:"stretch",children:[(0,s.jsx)(l.Z,{bold:!0,children:e("useCase.item2.title")}),(0,s.jsx)(l.Z,{children:e("useCase.item2.text")})]}),(0,s.jsxs)(d.K,{direction:"column",gap:8,alignItems:"stretch",children:[(0,s.jsx)(l.Z,{bold:!0,children:e("useCase.item3.title")}),(0,s.jsx)(l.Z,{children:e("useCase.item3.text")})]}),(0,s.jsxs)(d.K,{direction:"column",gap:8,alignItems:"stretch",children:[(0,s.jsx)(l.Z,{bold:!0,children:e("useCase.item4.title")}),(0,s.jsx)(l.Z,{children:e("useCase.item4.text")})]})]})]})}),(0,s.jsx)(a.W,{as:"section",backgroundColor:"alternate",children:(0,s.jsx)(u.F,{})})]})};var p=i(4155);let g="Deraining",b=p.env.NEXT_PUBLIC_BASE_URL||"https://leapmind.io";var x=!0;let w=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.PB,{title:g,description:"雨滴画像除去AIモデル",openGraph:{images:[{url:"".concat(b,"/images/common/ogp-deraining.jpg"),alt:g}]}}),(0,s.jsx)(v,{})]});var y=w},6101:function(e){e.exports={comparisonSlider:"ComparisonSlider_comparisonSlider__0P3GR",customHandle:"ComparisonSlider_customHandle__jE6GV"}}},function(e){e.O(0,[675,255,774,888,179],function(){return e(e.s=327)}),_N_E=e.O()}]);