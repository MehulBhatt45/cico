"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7943],{7943:(u,m,l)=>{l.r(m),l.d(m,{pwa_camera:()=>v});var n=l(5861),a=l(6738);let g=window.ImageCapture;typeof g>"u"&&(g=class{constructor(t){if("video"!==t.kind)throw new DOMException("NotSupportedError");this._videoStreamTrack=t,"readyState"in this._videoStreamTrack||(this._videoStreamTrack.readyState="live"),this._previewStream=new MediaStream([t]),this.videoElement=document.createElement("video"),this.videoElementPlaying=new Promise(e=>{this.videoElement.addEventListener("playing",e)}),HTMLMediaElement?this.videoElement.srcObject=this._previewStream:this.videoElement.src=URL.createObjectURL(this._previewStream),this.videoElement.muted=!0,this.videoElement.setAttribute("playsinline",""),this.videoElement.play(),this.canvasElement=document.createElement("canvas"),this.canvas2dContext=this.canvasElement.getContext("2d")}get videoStreamTrack(){return this._videoStreamTrack}getPhotoCapabilities(){return new Promise(function(e,i){const s={current:0,min:0,max:0};e({exposureCompensation:s,exposureMode:"none",fillLightMode:["none"],focusMode:"none",imageHeight:s,imageWidth:s,iso:s,redEyeReduction:!1,whiteBalanceMode:"none",zoom:s}),i(new DOMException("OperationError"))})}setOptions(t={}){return new Promise(function(i,s){})}takePhoto(){const t=this;return new Promise(function(i,s){if("live"!==t._videoStreamTrack.readyState)return s(new DOMException("InvalidStateError"));t.videoElementPlaying.then(()=>{try{t.canvasElement.width=t.videoElement.videoWidth,t.canvasElement.height=t.videoElement.videoHeight,t.canvas2dContext.drawImage(t.videoElement,0,0),t.canvasElement.toBlob(i)}catch{s(new DOMException("UnknownError"))}})})}grabFrame(){const t=this;return new Promise(function(i,s){if("live"!==t._videoStreamTrack.readyState)return s(new DOMException("InvalidStateError"));t.videoElementPlaying.then(()=>{try{t.canvasElement.width=t.videoElement.videoWidth,t.canvasElement.height=t.videoElement.videoHeight,t.canvas2dContext.drawImage(t.videoElement,0,0),i(window.createImageBitmap(t.canvasElement))}catch{s(new DOMException("UnknownError"))}})})}}),window.ImageCapture=g;const v=class{constructor(t){var e=this;(0,a.r)(this,t),this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.showShutterOverlay=!1,this.flashIndex=0,this.hasCamera=null,this.rotation=0,this.deviceError=null,this.hasMultipleCameras=!1,this.hasFlash=!1,this.flashModes=[],this.flashMode="off",this.handlePickFile=i=>{},this.handleShutterClick=i=>{console.debug("shutter click"),this.capture()},this.handleRotateClick=i=>{this.rotate()},this.handleClose=i=>{this.handlePhoto&&this.handlePhoto(null)},this.handleFlashClick=i=>{this.cycleFlash()},this.handleCancelPhoto=i=>{const s=this.stream&&this.stream.getTracks()[0];let r=s&&s.getConstraints();this.photo=null,this.photoSrc=null,r?this.initCamera({video:{facingMode:r.facingMode}}):this.initCamera()},this.handleAcceptPhoto=i=>{this.handlePhoto&&this.handlePhoto(this.photo)},this.handleFileInputChange=function(){var i=(0,n.Z)(function*(s){const c=s.target.files[0];try{const o=yield e.getOrientation(c);console.debug("Got orientation",o),e.photoOrientation=o}catch{}e.handlePhoto&&e.handlePhoto(c)});return function(s){return i.apply(this,arguments)}}(),this.handleVideoMetadata=i=>{console.debug("Video metadata",i)},this.isServer=(0,a.d)(this,"isServer")}componentDidLoad(){var t=this;return(0,n.Z)(function*(){t.isServer||(t.defaultConstraints={video:{facingMode:t.facingMode}},yield t.queryDevices(),yield t.initCamera())})()}componentDidUnload(){this.stopStream(),this.photoSrc&&URL.revokeObjectURL(this.photoSrc)}hasImageCapture(){return"ImageCapture"in window}queryDevices(){var t=this;return(0,n.Z)(function*(){try{const i=(yield navigator.mediaDevices.enumerateDevices()).filter(s=>"videoinput"==s.kind);t.hasCamera=!!i.length,t.hasMultipleCameras=i.length>1}catch(e){t.deviceError=e}})()}initCamera(t){var e=this;return(0,n.Z)(function*(){t||(t=e.defaultConstraints);try{const i=yield navigator.mediaDevices.getUserMedia(Object.assign({video:!0,audio:!1},t));e.initStream(i)}catch(i){e.deviceError=i,e.handleNoDeviceError&&e.handleNoDeviceError(i)}})()}initStream(t){var e=this;return(0,n.Z)(function*(){e.stream=t,e.videoElement.srcObject=t,e.hasImageCapture()?(e.imageCapture=new window.ImageCapture(t.getVideoTracks()[0]),yield e.initPhotoCapabilities(e.imageCapture)):(e.deviceError="No image capture",e.handleNoDeviceError&&e.handleNoDeviceError()),e.el.forceUpdate()})()}initPhotoCapabilities(t){var e=this;return(0,n.Z)(function*(){const i=yield t.getPhotoCapabilities();i.fillLightMode&&i.fillLightMode.length>1&&(e.flashModes=i.fillLightMode.map(s=>s),e.flashMode?(e.flashMode=e.flashModes[e.flashModes.indexOf(e.flashMode)]||"off",e.flashIndex=e.flashModes.indexOf(e.flashMode)||0):e.flashIndex=0)})()}stopStream(){this.videoElement&&(this.videoElement.srcObject=null),this.stream&&this.stream.getTracks().forEach(t=>t.stop())}capture(){var t=this;return(0,n.Z)(function*(){if(t.hasImageCapture())try{const e=yield t.imageCapture.takePhoto({fillLightMode:t.flashModes.length>1?t.flashMode:void 0});yield t.flashScreen(),t.promptAccept(e)}catch(e){console.error("Unable to take photo!",e)}t.stopStream()})()}promptAccept(t){var e=this;return(0,n.Z)(function*(){e.photo=t;const i=yield e.getOrientation(t);if(console.debug("Got orientation",i),e.photoOrientation=i,i)switch(i){case 1:case 2:e.rotation=0;break;case 3:case 4:e.rotation=180;break;case 5:case 6:e.rotation=90;break;case 7:case 8:e.rotation=270}e.photoSrc=URL.createObjectURL(t)})()}getOrientation(t){return new Promise(e=>{const i=new FileReader;i.onload=s=>{const r=new DataView(s.target.result);if(65496!==r.getUint16(0,!1))return e(-2);const c=r.byteLength;let o=2;for(;o<c;){const f=r.getUint16(o,!1);if(o+=2,65505===f){if(1165519206!==r.getUint32(o+=2,!1))return e(-1);const h=18761===r.getUint16(o+=6,!1);o+=r.getUint32(o+4,h);const p=r.getUint16(o,h);o+=2;for(let d=0;d<p;d++)if(274===r.getUint16(o+12*d,h))return e(r.getUint16(o+12*d+8,h))}else{if(65280!=(65280&f))break;o+=r.getUint16(o,!1)}}return e(-1)},i.readAsArrayBuffer(t.slice(0,65536))})}rotate(){this.stopStream();const t=this.stream&&this.stream.getTracks()[0];if(!t)return;let i=t.getConstraints().facingMode;if(!i){let s=t.getCapabilities();s.facingMode&&(i=s.facingMode[0])}this.initCamera("environment"===i?{video:{facingMode:"user"}}:{video:{facingMode:"environment"}})}setFlashMode(t){console.debug("New flash mode: ",t),this.flashMode=t}cycleFlash(){this.flashModes.length>0&&(this.flashIndex=(this.flashIndex+1)%this.flashModes.length,this.setFlashMode(this.flashModes[this.flashIndex]))}flashScreen(){var t=this;return(0,n.Z)(function*(){return new Promise((e,i)=>{t.showShutterOverlay=!0,setTimeout(()=>{t.showShutterOverlay=!1,e()},100)})})()}iconExit(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}iconPhotos(){return(0,a.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},(0,a.h)("path",{d:"M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z"}),(0,a.h)("path",{d:"M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z"}))}iconConfirm(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}iconReverseCamera(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E"}iconRetake(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}iconFlashOff(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E"}iconFlashOn(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E"}iconFlashAuto(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E"}render(){return(0,a.h)("div",{class:"camera-wrapper"},(0,a.h)("div",{class:"camera-header"},(0,a.h)("section",{class:"items"},(0,a.h)("div",{class:"item close",onClick:e=>this.handleClose(e)},(0,a.h)("img",{src:this.iconExit()})),(0,a.h)("div",{class:"item flash",onClick:e=>this.handleFlashClick(e)},this.flashModes.length>0&&(0,a.h)("div",null,"off"==this.flashMode?(0,a.h)("img",{src:this.iconFlashOff()}):"","auto"==this.flashMode?(0,a.h)("img",{src:this.iconFlashAuto()}):"","flash"==this.flashMode?(0,a.h)("img",{src:this.iconFlashOn()}):"")))),(!1===this.hasCamera||!!this.deviceError)&&(0,a.h)("div",{class:"no-device"},(0,a.h)("h2",null,this.noDevicesText),(0,a.h)("label",{htmlFor:"_pwa-elements-camera-input"},this.noDevicesButtonText),(0,a.h)("input",{type:"file",id:"_pwa-elements-camera-input",onChange:this.handleFileInputChange,accept:"image/*",class:"select-file-button"})),this.photoSrc?(0,a.h)("div",{class:"accept"},(0,a.h)("div",{class:"accept-image",style:Object.assign({backgroundImage:`url(${this.photoSrc})`},{})})):(0,a.h)("div",{class:"camera-video"},this.showShutterOverlay&&(0,a.h)("div",{class:"shutter-overlay"}),this.hasImageCapture()?(0,a.h)("video",{ref:e=>this.videoElement=e,onLoadedMetaData:this.handleVideoMetadata,autoplay:!0,playsinline:!0}):(0,a.h)("canvas",{ref:e=>this.canvasElement=e,width:"100%",height:"100%"}),(0,a.h)("canvas",{class:"offscreen-image-render",ref:e=>this.offscreenCanvas=e,width:"100%",height:"100%"})),this.hasCamera&&(0,a.h)("div",{class:"camera-footer"},this.photo?(0,a.h)("section",{class:"items"},(0,a.h)("div",{class:"item accept-cancel",onClick:e=>this.handleCancelPhoto(e)},(0,a.h)("img",{src:this.iconRetake()})),(0,a.h)("div",{class:"item accept-use",onClick:e=>this.handleAcceptPhoto(e)},(0,a.h)("img",{src:this.iconConfirm()}))):[(0,a.h)("div",{class:"shutter",onClick:this.handleShutterClick},(0,a.h)("div",{class:"shutter-button"})),(0,a.h)("div",{class:"rotate",onClick:this.handleRotateClick},(0,a.h)("img",{src:this.iconReverseCamera()}))]))}static get assetsDirs(){return["icons"]}get el(){return(0,a.g)(this)}static get style(){return":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,\u201cSegoe UI\u201d,\u201cRoboto\u201d,\u201cDroid Sans\u201d,\u201cHelvetica Neue\u201d,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height:375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.pick-image{display:none;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:#fff}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:#fff;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;-ms-flex-pack:center;-ms-flex-align:center}.error,.no-device{color:#fff;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.no-device{background-color:#000;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:#000}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:#000;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}"}}}}]);