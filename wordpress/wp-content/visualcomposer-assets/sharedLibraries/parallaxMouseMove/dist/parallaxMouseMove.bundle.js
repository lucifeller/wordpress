!function(e){function t(i){if(s[i])return s[i].exports;var n=s[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var s={};return t.m=e,t.c=s,t.p=".",t(0)}({"./src/parallax.js":function(e,t){"use strict";window.vcv.on("ready",function(e,t){if("merge"!==e){var s="[data-vce-assets-parallax-mouse-move]";s=t?'[data-vcv-element="'+t+'"] '+s:s,window.vceAssetsParallaxMouseMove(s)}})},"./src/plugin.js":function(e,t){"use strict";!function(e,t){function s(s){var i={element:null,bgElement:null,waypoint:null,observer:null,reverse:!1,speed:30,setup:function(e){return this.resize=this.resize.bind(this),this.handleAttributeChange=this.handleAttributeChange.bind(this),this.mouseParallax=this.mouseParallax.bind(this),this.update=this.update.bind(this),e.getVceParallaxMouseMove?this.update():(e.getVceParallaxMouseMove=this,this.element=e,this.bgElement=e.querySelector(e.dataset.vceAssetsParallaxMouseMove),this.elementRoot=t.getElementById("el-"+e.dataset.vceAssetsParallaxMouseMoveElement),this.prepareElement(),this.create()),e.getVceParallaxMouseMove},handleAttributeChange:function(){this.element.getAttribute("data-vce-assets-parallax-move-mouse")?this.update():this.destroy()},addScrollEvent:function(){e.addEventListener("scroll",this.resize),this.resize()},removeScrollEvent:function(){e.removeEventListener("scroll",this.resize)},resize:function(){if(this.element.clientHeight){var t=e.innerHeight,s=this.element.getBoundingClientRect(),i=s.height+t,n=(s.top-t)*-1,r=0;n>=0&&n<=i&&(r=n/i);var a=2*this.speed*r*-1+this.speed;"true"===this.reverse&&(a*=-1),this.bgElement.style.transform="translateY("+a+"vh)"}},prepareElement:function(){this.speed=parseInt(s.dataset.vceAssetsParallaxSpeed)||30,"vceAssetsParallaxReverse"in s.dataset&&(this.reverse=s.dataset.vceAssetsParallaxReverse),this.bgElement.style.left="-"+this.speed+"vw",this.bgElement.style.top="-"+this.speed+"vh",this.bgElement.style.right="-"+this.speed+"vw",this.bgElement.style.bottom="-"+this.speed+"vh",this.bgElement.style.transform="translate(0px, 0px)"},addMouseMoveEvent:function(){this.elementRoot.addEventListener("mousemove",this.mouseParallax),e.addEventListener("resize",this.update)},removeMouseMoveEvent:function(){this.elementRoot.removeEventListener("mousemove",this.mouseParallax),e.removeEventListener("resize",this.update)},create:function(){this.addMouseMoveEvent(),this.observer=new MutationObserver(this.handleAttributeChange),this.observer.observe(this.element,{attributes:!0})},mouseParallax:function(t){var s,i,n=t.clientX,r=t.clientY,a=this.bgElement.parentNode,l=a.getBoundingClientRect(),o=l.left+l.width/2,h=l.top+l.height/2;"true"===this.reverse?(s=n-o-this.speed,i=r-h-this.speed):(s=o-n-this.speed,i=h-r-this.speed);var u=e.innerWidth/100,d=e.innerHeight/100;s<-(this.speed*u)?s=-(this.speed*u):s>this.speed*u&&(s=this.speed*u),i<-(this.speed*d)?i=-(this.speed*d):i>this.speed*d&&(i=this.speed*d),this.bgElement.style.transform="translate("+s+"px, "+i+"px)"},update:function(){this.prepareElement()},destroy:function(){this.removeMouseMoveEvent(),this.bgElement.style.top=null,this.bgElement.style.bottom=null,this.bgElement.style.transform=null,this.bgElement=null,this.observer.disconnect(),this.observer=null,delete this.element.getVceParallaxMouseMove,this.element=null}};return i.setup(s)}var i={init:function(e){var i=t.querySelectorAll(e);return i=[].slice.call(i),i.forEach(function(e){e.getVceParallaxMouseMove?e.getVceParallaxMouseMove.update():s(e)}),1===i.length?i.pop():i}};e.vceAssetsParallaxMouseMove=i.init}(window,document)},"./src/parallax.css":function(e,t){},0:function(e,t,s){s("./src/plugin.js"),s("./src/parallax.js"),e.exports=s("./src/parallax.css")}});