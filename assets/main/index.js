System.register("chunks:///_virtual/background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts"],(function(t){var e,i,r,n,o,a,s,c,u,l,p,h,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized,o=t.createClass},function(t){a=t.cclegacy,s=t._decorator,c=t.SpriteFrame,u=t.Label,l=t.Vec3,p=t.Sprite,h=t.Component},function(t){g=t.ResultScreen}],execute:function(){var d,S,f,y,b,k,m,w,v;a._RF.push({},"47f99imjSJCfJIk5j5FLp+Y","background",void 0);var B=s.ccclass,x=s.property;t("Backgorund",(d=B("Backgorund"),S=x(c),f=x(c),y=x(u),d((m=e((k=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,r(e,"daySprite",m,n(e)),r(e,"nightSprite",w,n(e)),r(e,"textScore",v,n(e)),e.wBackgound=288,e.isNight=!1,e.lastSwitchScore=0,e.elapsedTime=0,e.baseSpeed=100,e}i(e,t);var a=e.prototype;return a.start=function(){},a.update=function(t){if(0==g.Instance.node.active&&(this.elapsedTime+=t,this.node.translate(new l(-this.speed*t,0,0)),this.node.position.x<=-1*(this.wBackgound/2+this.wBackgound)&&this.node.translate(new l(this.wBackgound,0,0)),this.textScore)){var e=parseInt(this.textScore.string);e>=this.lastSwitchScore+5&&(this.toggleBackground(),this.lastSwitchScore=e)}},a.toggleBackground=function(){var t=this;this.isNight=!this.isNight;var e=this.getComponent(p);e&&(e.spriteFrame=this.isNight?this.nightSprite:this.daySprite),this.node.children.forEach((function(e){var i=e.getComponent(p);i&&(i.spriteFrame=t.isNight?t.nightSprite:t.daySprite)}))},o(e,[{key:"speed",get:function(){return this.baseSpeed}}]),e}(h)).prototype,"daySprite",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(k.prototype,"nightSprite",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(k.prototype,"textScore",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=k))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/birds.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(t){var e,n,i,s,o,r,c,a,u,l,p;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t._decorator,s=t.input,o=t.Input,r=t.Collider2D,c=t.Contact2DType,a=t.Vec3,u=t.Component},function(t){l=t.ResultScreen},function(t){p=t.StartScreen}],execute:function(){var h,d;n._RF.push({},"60d94p52aZDlY5TWhtucf+N","birds",void 0);var v=i.ccclass;i.property,t("Birds",v("Birds")(((d=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))||this).vy=0,e.gravity=500,e.elapsedTime=0,e}e(n,t);var i=n.prototype;return i.start=function(){s.on(o.EventType.TOUCH_START,this.onTouchStart,this);var t=this.getComponent(r);t&&t.on(c.BEGIN_CONTACT,this.onBeginContact,this)},i.onTouchStart=function(t){this.vy=200},i.onBeginContact=function(t,e,n){l.Instance.node.active=!0,this.elapsedTime>p.Instance.bestDuration&&localStorage.setItem("bestDur",JSON.stringify({bestDuration:this.elapsedTime}))},i.update=function(t){0==p.Instance.node.active&&0==l.Instance.node.active&&(this.elapsedTime+=t,this.node.translate(new a(0,this.vy*t,0)),this.vy-=this.gravity*t)},n}(u)).Instance=void 0,h=d))||h);n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,i,o,t,n,p,l,a,c,u,s;return{setters:[function(e){r=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){n=e.cclegacy,p=e._decorator,l=e.Node,a=e.SpriteFrame,c=e.Label,u=e.Sprite,s=e.Component}],execute:function(){var g,h,P,f,C,d,m,b,S,y,w;n._RF.push({},"4e23aoEG8BGzqniVnUXyrzs","GameController",void 0);var v=p.ccclass,z=p.property;e("GameController",(g=v("GameController"),h=z(l),P=z(l),f=z(a),C=z(a),g((b=r((m=function(e){function r(){for(var r,i=arguments.length,n=new Array(i),p=0;p<i;p++)n[p]=arguments[p];return r=e.call.apply(e,[this].concat(n))||this,o(r,"groupPipe1",b,t(r)),o(r,"groupPipe2",S,t(r)),o(r,"greenPipeSprite",y,t(r)),o(r,"redPipeSprite",w,t(r)),r.currentPipeColor="green",r}i(r,e);var n=r.prototype;return n.onLoad=function(){this.setPipeColor(this.greenPipeSprite)},n.switchPipeColor=function(){console.log("Switching pipe color...");var e=this.node.getComponentInChildren(c);"green"===this.currentPipeColor?(this.setPipeColor(this.redPipeSprite),this.currentPipeColor="red",console.log("Switched to red."),e&&(e.string="Turn Pipe to Green")):(this.setPipeColor(this.greenPipeSprite),this.currentPipeColor="green",console.log("Switched to green."),e&&(e.string="Turn Pipe to Red"))},n.setPipeColor=function(e){this.changePipesColor(this.groupPipe1,e),this.changePipesColor(this.groupPipe2,e)},n.changePipesColor=function(e,r){e.children.forEach((function(e){var i=e.getComponent(u);i?(i.spriteFrame=r,console.log("Changed sprite for "+e.name+" to "+r.name)):console.warn("No Sprite component found on "+e.name)}))},r}(s)).prototype,"groupPipe1",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=r(m.prototype,"groupPipe2",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=r(m.prototype,"greenPipeSprite",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=r(m.prototype,"redPipeSprite",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=m))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameController.ts","./ResultScreen.ts","./StartScreen.ts","./Timer.ts","./background.ts","./birds.ts","./pipe.ts","./ss.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StartScreen.ts","./ResultScreen.ts"],(function(e){var t,n,s,i,o,a,c,r,p;return{setters:[function(e){t=e.inheritsLoose,n=e.createClass},function(e){s=e.cclegacy,i=e._decorator,o=e.Vec3,a=e.randomRangeInt,c=e.Component},function(e){r=e.StartScreen},function(e){p=e.ResultScreen}],execute:function(){var u;s._RF.push({},"5645cLxwx5KX4SLoAQ05t6a","pipe",void 0);var d=i.ccclass;i.property,e("Pipe",d("Pipe")(u=function(e){function s(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))||this).wBackgound=288,t.wPipa=52,t.elapsedTime=0,t.baseSpeed=100,t}t(s,e);var i=s.prototype;return i.start=function(){this.node.translate(new o(0,a(-100,100),0))},i.update=function(e){0==r.Instance.node.active&&0==p.Instance.node.active&&(this.elapsedTime+=e,this.node.translate(new o(-this.speed*e,0,0)),this.node.position.x<=-1*(this.wBackgound/2+this.wBackgound)&&this.node.translate(new o(this.wBackgound,0,0)),this.node.position.x<=-196&&(this.node.position.y<0?this.node.translate(new o(this.wBackgound+this.wPipa,a(0,100),0)):this.node.translate(new o(this.wBackgound+this.wPipa,a(-100,0),0))))},n(s,[{key:"speed",get:function(){return this.baseSpeed}}]),s}(c))||u);s._RF.pop()}}}));

System.register("chunks:///_virtual/ResultScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,o,s,a;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,o=e.Label,s=e.director,a=e.Component}],execute:function(){var c,i;n._RF.push({},"dcab1v/VfVEIZLJKow9IkYn","ResultScreen",void 0);var l=r.ccclass;r.property,e("ResultScreen",l("ResultScreen")(((i=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).bestDuration=0,t.bestLabel=null,t.scoreLabel=null,t.elapsedTime=0,t}t(n,e);var r=n.prototype;return r.start=function(){n.Instance=this;var e=localStorage.getItem("bestDur");if(null!=e&&""!==e){var t=JSON.parse(e);this.bestDuration=t.bestDuration;var r=this.node.getComponentsInChildren(o);r.length>0?(this.bestLabel=r[0],this.bestLabel.string="Best Score: "+this.bestDuration.toFixed(2).toString()):console.warn("No Label components found in children.")}this.node.active=!1},r.update=function(e){},r.doRestart=function(e,t){s.loadScene("Gameplay")},n}(a)).Instance=void 0,c=i))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/ss.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,r,a,c,i,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,c=e._decorator,i=e.Button,s=e.game,l=e.Component}],execute:function(){var u,d,h,p,f;a._RF.push({},"f5ae7y2RcBB57XqfLIQkDHh","ss",void 0);var v=c.ccclass,b=c.property;e("ScreenshotButton",(u=v("ScreenshotButton"),d=b(i),u((f=t((p=function(e){function t(){for(var t,o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n(t,"button",f,r(t)),t}o(t,e);var a=t.prototype;return a.start=function(){this.button?this.button.node.on(i.EventType.CLICK,this.takeScreenshot,this):console.error("Button is not assigned in the inspector.")},a.takeScreenshot=function(){var e=s.canvas,t=e.getContext("webgl")||e.getContext("webgl2");if(t){var o=e.width,n=e.height,r=new Uint8Array(o*n*4);t.readPixels(0,0,o,n,t.RGBA,t.UNSIGNED_BYTE,r);var a=document.createElement("canvas");a.width=o,a.height=n;var c=a.getContext("2d");if(c){for(var i=c.createImageData(o,n),l=0;l<n;l++)for(var u=0;u<o;u++){var d=4*(l*o+u),h=4*((n-l-1)*o+u);i.data[h]=r[d],i.data[h+1]=r[d+1],i.data[h+2]=r[d+2],i.data[h+3]=r[d+3]}c.putImageData(i,0,0),a.toBlob((function(e){if(e){var t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download="screenshot.png",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}else console.error("Failed to create a blob from the canvas.")}),"image/png")}else console.error("Failed to create 2D context for temporary canvas.")}else console.error("WebGL context not available.")},t}(l)).prototype,"button",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=p))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/StartScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,c,a;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,c=t.director,a=t.Component}],execute:function(){var o,i;n._RF.push({},"a0f4c2R5GpG+alkT8Rua7Qr","StartScreen",void 0);var s=r.ccclass;r.property,t("StartScreen",s("StartScreen")(((i=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))||this).bestDuration=0,e}e(n,t);var r=n.prototype;return r.start=function(){n.Instance=this},r.update=function(t){},r.clickStart=function(t,e){this.node.active=!1},r.doRestart=function(t,e){c.loadScene("Gameplay")},n}(a)).Instance=void 0,o=i))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/Timer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StartScreen.ts","./ResultScreen.ts"],(function(e){var t,r,n,i,o,c,a,s,l,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,a=e.Label,s=e.Component},function(e){l=e.StartScreen},function(e){u=e.ResultScreen}],execute:function(){var p,f,d,h,S,m;o._RF.push({},"be6a9Pa7P1GjYe4eNqcw5s1","Timer",void 0);var v=c.ccclass,y=c.property;e("Timer",(p=v("Timer"),f=y(a),p(((m=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o))||this,n(t,"textScore",S,i(t)),t.elapsedTime=0,t}return r(t,e),t.prototype.update=function(e){0==l.Instance.node.active&&0==u.Instance.node.active&&(this.elapsedTime+=e,this.textScore&&(this.textScore.string=Math.floor(this.elapsedTime).toString()))},t}(s)).Instance=void 0,S=t((h=m).prototype,"textScore",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=h))||d));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});