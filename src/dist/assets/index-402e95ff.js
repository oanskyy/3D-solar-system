(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="149",fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Id=0,za=1,Nd=2,sc=1,kd=2,ur=3,Ln=0,Be=1,Tn=2,An=0,Ri=1,Ba=2,Ga=3,Ha=4,Fd=5,Li=100,Od=101,Ud=102,Wa=103,ja=104,Vd=200,zd=201,Bd=202,Gd=203,oc=204,ac=205,Hd=206,Wd=207,jd=208,qd=209,Xd=210,Kd=0,Yd=1,$d=2,go=3,Zd=4,Jd=5,Qd=6,tp=7,lc=0,ep=1,np=2,_n=0,ip=1,rp=2,sp=3,op=4,ap=5,cc=300,Ni=301,ki=302,_o=303,vo=304,ns=306,bo=1e3,$e=1001,xo=1002,Te=1003,qa=1004,Is=1005,je=1006,lp=1007,dr=1008,Zn=1009,cp=1010,up=1011,uc=1012,hp=1013,Xn=1014,Kn=1015,pr=1016,dp=1017,pp=1018,Ii=1020,fp=1021,Ze=1023,mp=1024,gp=1025,Yn=1026,Fi=1027,_p=1028,vp=1029,bp=1030,xp=1031,wp=1033,Ns=33776,ks=33777,Fs=33778,Os=33779,Xa=35840,Ka=35841,Ya=35842,$a=35843,yp=36196,Za=37492,Ja=37496,Qa=37808,tl=37809,el=37810,nl=37811,il=37812,rl=37813,sl=37814,ol=37815,al=37816,ll=37817,cl=37818,ul=37819,hl=37820,dl=37821,Us=36492,Mp=36283,pl=36284,fl=36285,ml=36286,Jn=3e3,Qt=3001,Sp=3200,Ep=3201,hc=0,Cp=1,en="srgb",fr="srgb-linear",Vs=7680,Pp=519,gl=35044,_l="300 es",wo=1035;class ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const a=o.indexOf(e);a!==-1&&o.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let a=0,h=o.length;a<h;a++)o[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zs=Math.PI/180,vl=180/Math.PI;function gr(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[c&255]+Me[c>>8&255]+Me[c>>16&255]+Me[c>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function De(c,t,e){return Math.max(t,Math.min(e,c))}function Tp(c,t){return(c%t+t)%t}function Bs(c,t,e){return(1-e)*c+e*t}function bl(c){return(c&c-1)===0&&c!==0}function yo(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Nr(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Fe(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),a=this.x-t.x,h=this.y-t.y;return this.x=a*i-h*o+t.x,this.y=a*o+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,o,a,h,u,p,d){const f=this.elements;return f[0]=t,f[1]=o,f[2]=u,f[3]=e,f[4]=a,f[5]=p,f[6]=i,f[7]=h,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,h=i[0],u=i[3],p=i[6],d=i[1],f=i[4],m=i[7],v=i[2],x=i[5],E=i[8],g=o[0],_=o[3],M=o[6],A=o[1],P=o[4],T=o[7],C=o[2],k=o[5],z=o[8];return a[0]=h*g+u*A+p*C,a[3]=h*_+u*P+p*k,a[6]=h*M+u*T+p*z,a[1]=d*g+f*A+m*C,a[4]=d*_+f*P+m*k,a[7]=d*M+f*T+m*z,a[2]=v*g+x*A+E*C,a[5]=v*_+x*P+E*k,a[8]=v*M+x*T+E*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],u=t[5],p=t[6],d=t[7],f=t[8];return e*h*f-e*u*d-i*a*f+i*u*p+o*a*d-o*h*p}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],u=t[5],p=t[6],d=t[7],f=t[8],m=f*h-u*d,v=u*p-f*a,x=d*a-h*p,E=e*m+i*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/E;return t[0]=m*g,t[1]=(o*d-f*i)*g,t[2]=(u*i-o*h)*g,t[3]=v*g,t[4]=(f*e-o*p)*g,t[5]=(o*a-u*e)*g,t[6]=x*g,t[7]=(i*p-d*e)*g,t[8]=(h*e-i*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,a,h,u){const p=Math.cos(a),d=Math.sin(a);return this.set(i*p,i*d,-i*(p*h+d*u)+h+t,-o*d,o*p,-o*(-d*h+p*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new ze;function dc(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function mr(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function $n(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function ts(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Hs={[en]:{[fr]:$n},[fr]:{[en]:ts}},Ce={legacyMode:!0,get workingColorSpace(){return fr},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.legacyMode||t===e||!t||!e)return c;if(Hs[t]&&Hs[t][e]!==void 0){const i=Hs[t][e];return c.r=i(c.r),c.g=i(c.g),c.b=i(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}},pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},me={r:0,g:0,b:0},Xe={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Ws(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}function Fr(c,t){return t.r=c.r,t.g=c.g,t.b=c.b,t}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ce.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=Ce.workingColorSpace){if(t=Tp(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,h=2*i-a;this.r=Ws(h,a,t+1/3),this.g=Ws(h,a,t),this.b=Ws(h,a,t-1/3)}return Ce.toWorkingColorSpace(this,o),this}setStyle(t,e=en){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let a;const h=o[1],u=o[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Ce.toWorkingColorSpace(this,e),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Ce.toWorkingColorSpace(this,e),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u)){const p=parseFloat(a[1])/360,d=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return i(a[4]),this.setHSL(p,d,f,e)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=o[1],h=a.length;if(h===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Ce.toWorkingColorSpace(this,e),this;if(h===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Ce.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=en){const i=pc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Ce.fromWorkingColorSpace(Fr(this,me),t),De(me.r*255,0,255)<<16^De(me.g*255,0,255)<<8^De(me.b*255,0,255)<<0}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Fr(this,me),e);const i=me.r,o=me.g,a=me.b,h=Math.max(i,o,a),u=Math.min(i,o,a);let p,d;const f=(u+h)/2;if(u===h)p=0,d=0;else{const m=h-u;switch(d=f<=.5?m/(h+u):m/(2-h-u),h){case i:p=(o-a)/m+(o<a?6:0);break;case o:p=(a-i)/m+2;break;case a:p=(i-o)/m+4;break}p/=6}return t.h=p,t.s=d,t.l=f,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Fr(this,me),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=en){return Ce.fromWorkingColorSpace(Fr(this,me),t),t!==en?`color(${t} ${me.r} ${me.g} ${me.b})`:`rgb(${me.r*255|0},${me.g*255|0},${me.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Xe),Xe.h+=t,Xe.s+=e,Xe.l+=i,this.setHSL(Xe.h,Xe.s,Xe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xe),t.getHSL(kr);const i=Bs(Xe.h,kr.h,e),o=Bs(Xe.s,kr.s,e),a=Bs(Xe.l,kr.l,e);return this.setHSL(i,o,a),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Jt.NAMES=pc;let gi;class fc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=mr("canvas")),gi.width=t.width,gi.height=t.height;const i=gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),a=o.data;for(let h=0;h<a.length;h++)a[h]=$n(a[h]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($n(e[i]/255)*255):e[i]=$n(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class mc{constructor(t=null){this.isSource=!0,this.uuid=gr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let h=0,u=o.length;h<u;h++)o[h].isDataTexture?a.push(js(o[h].image)):a.push(js(o[h]))}else a=js(o);i.url=a}return e||(t.images[this.uuid]=i),i}}function js(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?fc.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ap=0;class Re extends ni{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,i=$e,o=$e,a=je,h=dr,u=Ze,p=Zn,d=Re.DEFAULT_ANISOTROPY,f=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=gr(),this.name="",this.source=new mc(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=h,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=p,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=cc;Re.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,i=0,o=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*o+h[12]*a,this.y=h[1]*e+h[5]*i+h[9]*o+h[13]*a,this.z=h[2]*e+h[6]*i+h[10]*o+h[14]*a,this.w=h[3]*e+h[7]*i+h[11]*o+h[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,a;const p=t.elements,d=p[0],f=p[4],m=p[8],v=p[1],x=p[5],E=p[9],g=p[2],_=p[6],M=p[10];if(Math.abs(f-v)<.01&&Math.abs(m-g)<.01&&Math.abs(E-_)<.01){if(Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(E+_)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(d+1)/2,T=(x+1)/2,C=(M+1)/2,k=(f+v)/4,z=(m+g)/4,y=(E+_)/4;return P>T&&P>C?P<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(P),o=k/i,a=z/i):T>C?T<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),i=k/o,a=y/o):C<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(C),i=z/a,o=y/a),this.set(i,o,a,e),this}let A=Math.sqrt((_-E)*(_-E)+(m-g)*(m-g)+(v-f)*(v-f));return Math.abs(A)<.001&&(A=1),this.x=(_-E)/A,this.y=(m-g)/A,this.z=(v-f)/A,this.w=Math.acos((d+x+M-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qn extends ni{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const o={width:t,height:e,depth:1};this.texture=new Re(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:je,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gc extends Re{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Te,this.minFilter=Te,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lp extends Re{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Te,this.minFilter=Te,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,a,h,u){let p=i[o+0],d=i[o+1],f=i[o+2],m=i[o+3];const v=a[h+0],x=a[h+1],E=a[h+2],g=a[h+3];if(u===0){t[e+0]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m;return}if(u===1){t[e+0]=v,t[e+1]=x,t[e+2]=E,t[e+3]=g;return}if(m!==g||p!==v||d!==x||f!==E){let _=1-u;const M=p*v+d*x+f*E+m*g,A=M>=0?1:-1,P=1-M*M;if(P>Number.EPSILON){const C=Math.sqrt(P),k=Math.atan2(C,M*A);_=Math.sin(_*k)/C,u=Math.sin(u*k)/C}const T=u*A;if(p=p*_+v*T,d=d*_+x*T,f=f*_+E*T,m=m*_+g*T,_===1-u){const C=1/Math.sqrt(p*p+d*d+f*f+m*m);p*=C,d*=C,f*=C,m*=C}}t[e]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,o,a,h){const u=i[o],p=i[o+1],d=i[o+2],f=i[o+3],m=a[h],v=a[h+1],x=a[h+2],E=a[h+3];return t[e]=u*E+f*m+p*x-d*v,t[e+1]=p*E+f*v+d*m-u*x,t[e+2]=d*E+f*x+u*v-p*m,t[e+3]=f*E-u*m-p*v-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,o=t._y,a=t._z,h=t._order,u=Math.cos,p=Math.sin,d=u(i/2),f=u(o/2),m=u(a/2),v=p(i/2),x=p(o/2),E=p(a/2);switch(h){case"XYZ":this._x=v*f*m+d*x*E,this._y=d*x*m-v*f*E,this._z=d*f*E+v*x*m,this._w=d*f*m-v*x*E;break;case"YXZ":this._x=v*f*m+d*x*E,this._y=d*x*m-v*f*E,this._z=d*f*E-v*x*m,this._w=d*f*m+v*x*E;break;case"ZXY":this._x=v*f*m-d*x*E,this._y=d*x*m+v*f*E,this._z=d*f*E+v*x*m,this._w=d*f*m-v*x*E;break;case"ZYX":this._x=v*f*m-d*x*E,this._y=d*x*m+v*f*E,this._z=d*f*E-v*x*m,this._w=d*f*m+v*x*E;break;case"YZX":this._x=v*f*m+d*x*E,this._y=d*x*m+v*f*E,this._z=d*f*E-v*x*m,this._w=d*f*m-v*x*E;break;case"XZY":this._x=v*f*m-d*x*E,this._y=d*x*m-v*f*E,this._z=d*f*E+v*x*m,this._w=d*f*m+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],a=e[8],h=e[1],u=e[5],p=e[9],d=e[2],f=e[6],m=e[10],v=i+u+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(f-p)*x,this._y=(a-d)*x,this._z=(h-o)*x}else if(i>u&&i>m){const x=2*Math.sqrt(1+i-u-m);this._w=(f-p)/x,this._x=.25*x,this._y=(o+h)/x,this._z=(a+d)/x}else if(u>m){const x=2*Math.sqrt(1+u-i-m);this._w=(a-d)/x,this._x=(o+h)/x,this._y=.25*x,this._z=(p+f)/x}else{const x=2*Math.sqrt(1+m-i-u);this._w=(h-o)/x,this._x=(a+d)/x,this._y=(p+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,a=t._z,h=t._w,u=e._x,p=e._y,d=e._z,f=e._w;return this._x=i*f+h*u+o*d-a*p,this._y=o*f+h*p+a*u-i*d,this._z=a*f+h*d+i*p-o*u,this._w=h*f-i*u-o*p-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,a=this._z,h=this._w;let u=h*t._w+i*t._x+o*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=h,this._x=i,this._y=o,this._z=a,this;const p=1-u*u;if(p<=Number.EPSILON){const x=1-e;return this._w=x*h+e*this._w,this._x=x*i+e*this._x,this._y=x*o+e*this._y,this._z=x*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(p),f=Math.atan2(d,u),m=Math.sin((1-e)*f)/d,v=Math.sin(e*f)/d;return this._w=h*m+this._w*v,this._x=i*m+this._x*v,this._y=o*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(o),i*Math.sin(a),i*Math.cos(a),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*o,this.y=a[1]*e+a[4]*i+a[7]*o,this.z=a[2]*e+a[5]*i+a[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=t.elements,h=1/(a[3]*e+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*o+a[12])*h,this.y=(a[1]*e+a[5]*i+a[9]*o+a[13])*h,this.z=(a[2]*e+a[6]*i+a[10]*o+a[14])*h,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,a=t.x,h=t.y,u=t.z,p=t.w,d=p*e+h*o-u*i,f=p*i+u*e-a*o,m=p*o+a*i-h*e,v=-a*e-h*i-u*o;return this.x=d*p+v*-a+f*-u-m*-h,this.y=f*p+v*-h+m*-a-d*-u,this.z=m*p+v*-u+d*-h-f*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o,this.y=a[1]*e+a[5]*i+a[9]*o,this.z=a[2]*e+a[6]*i+a[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,a=t.z,h=e.x,u=e.y,p=e.z;return this.x=o*p-a*u,this.y=a*h-i*p,this.z=i*u-o*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new V,xl=new ti;class _r{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,o=1/0,a=-1/0,h=-1/0,u=-1/0;for(let p=0,d=t.length;p<d;p+=3){const f=t[p],m=t[p+1],v=t[p+2];f<e&&(e=f),m<i&&(i=m),v<o&&(o=v),f>a&&(a=f),m>h&&(h=m),v>u&&(u=v)}return this.min.set(e,i,o),this.max.set(a,h,u),this}setFromBufferAttribute(t){let e=1/0,i=1/0,o=1/0,a=-1/0,h=-1/0,u=-1/0;for(let p=0,d=t.count;p<d;p++){const f=t.getX(p),m=t.getY(p),v=t.getZ(p);f<e&&(e=f),m<i&&(i=m),v<o&&(o=v),f>a&&(a=f),m>h&&(h=m),v>u&&(u=v)}return this.min.set(e,i,o),this.max.set(a,h,u),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let h=0,u=a.count;h<u;h++)zn.fromBufferAttribute(a,h).applyMatrix4(t.matrixWorld),this.expandByPoint(zn)}else i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox),Xs.applyMatrix4(t.matrixWorld),this.union(Xs);const o=t.children;for(let a=0,h=o.length;a<h;a++)this.expandByObject(o[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Or.subVectors(this.max,nr),_i.subVectors(t.a,nr),vi.subVectors(t.b,nr),bi.subVectors(t.c,nr),Sn.subVectors(vi,_i),En.subVectors(bi,vi),Bn.subVectors(_i,bi);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!Ks(e,_i,vi,bi,Or)||(e=[1,0,0,0,1,0,0,0,1],!Ks(e,_i,vi,bi,Or))?!1:(Ur.crossVectors(Sn,En),e=[Ur.x,Ur.y,Ur.z],Ks(e,_i,vi,bi,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return zn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new V,new V,new V,new V,new V,new V,new V,new V],zn=new V,Xs=new _r,_i=new V,vi=new V,bi=new V,Sn=new V,En=new V,Bn=new V,nr=new V,Or=new V,Ur=new V,Gn=new V;function Ks(c,t,e,i,o){for(let a=0,h=c.length-3;a<=h;a+=3){Gn.fromArray(c,a);const u=o.x*Math.abs(Gn.x)+o.y*Math.abs(Gn.y)+o.z*Math.abs(Gn.z),p=t.dot(Gn),d=e.dot(Gn),f=i.dot(Gn);if(Math.max(-Math.max(p,d,f),Math.min(p,d,f))>u)return!1}return!0}const Dp=new _r,ir=new V,Ys=new V;class Co{constructor(t=new V,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Dp.setFromPoints(t).getCenter(i);let o=0;for(let a=0,h=t.length;a<h;a++)o=Math.max(o,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(ir,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Ys)),this.expandByPoint(ir.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new V,$s=new V,Vr=new V,Cn=new V,Zs=new V,zr=new V,Js=new V;class Rp{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.direction).multiplyScalar(e).add(this.origin),dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){$s.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub($s);const a=t.distanceTo(e)*.5,h=-this.direction.dot(Vr),u=Cn.dot(this.direction),p=-Cn.dot(Vr),d=Cn.lengthSq(),f=Math.abs(1-h*h);let m,v,x,E;if(f>0)if(m=h*p-u,v=h*u-p,E=a*f,m>=0)if(v>=-E)if(v<=E){const g=1/f;m*=g,v*=g,x=m*(m+h*v+2*u)+v*(h*m+v+2*p)+d}else v=a,m=Math.max(0,-(h*v+u)),x=-m*m+v*(v+2*p)+d;else v=-a,m=Math.max(0,-(h*v+u)),x=-m*m+v*(v+2*p)+d;else v<=-E?(m=Math.max(0,-(-h*a+u)),v=m>0?-a:Math.min(Math.max(-a,-p),a),x=-m*m+v*(v+2*p)+d):v<=E?(m=0,v=Math.min(Math.max(-a,-p),a),x=v*(v+2*p)+d):(m=Math.max(0,-(h*a+u)),v=m>0?a:Math.min(Math.max(-a,-p),a),x=-m*m+v*(v+2*p)+d);else v=h>0?-a:a,m=Math.max(0,-(h*v+u)),x=-m*m+v*(v+2*p)+d;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),o&&o.copy(Vr).multiplyScalar(v).add($s),x}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const i=dn.dot(this.direction),o=dn.dot(dn)-i*i,a=t.radius*t.radius;if(o>a)return null;const h=Math.sqrt(a-o),u=i-h,p=i+h;return u<0&&p<0?null:u<0?this.at(p,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,a,h,u,p;const d=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(i=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(i=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),f>=0?(a=(t.min.y-v.y)*f,h=(t.max.y-v.y)*f):(a=(t.max.y-v.y)*f,h=(t.min.y-v.y)*f),i>h||a>o||((a>i||isNaN(i))&&(i=a),(h<o||isNaN(o))&&(o=h),m>=0?(u=(t.min.z-v.z)*m,p=(t.max.z-v.z)*m):(u=(t.max.z-v.z)*m,p=(t.min.z-v.z)*m),i>p||u>o)||((u>i||i!==i)&&(i=u),(p<o||o!==o)&&(o=p),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,i,o,a){Zs.subVectors(e,t),zr.subVectors(i,t),Js.crossVectors(Zs,zr);let h=this.direction.dot(Js),u;if(h>0){if(o)return null;u=1}else if(h<0)u=-1,h=-h;else return null;Cn.subVectors(this.origin,t);const p=u*this.direction.dot(zr.crossVectors(Cn,zr));if(p<0)return null;const d=u*this.direction.dot(Zs.cross(Cn));if(d<0||p+d>h)return null;const f=-u*Cn.dot(Js);return f<0?null:this.at(f/h,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,o,a,h,u,p,d,f,m,v,x,E,g,_){const M=this.elements;return M[0]=t,M[4]=e,M[8]=i,M[12]=o,M[1]=a,M[5]=h,M[9]=u,M[13]=p,M[2]=d,M[6]=f,M[10]=m,M[14]=v,M[3]=x,M[7]=E,M[11]=g,M[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/xi.setFromMatrixColumn(t,0).length(),a=1/xi.setFromMatrixColumn(t,1).length(),h=1/xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,a=t.z,h=Math.cos(i),u=Math.sin(i),p=Math.cos(o),d=Math.sin(o),f=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const v=h*f,x=h*m,E=u*f,g=u*m;e[0]=p*f,e[4]=-p*m,e[8]=d,e[1]=x+E*d,e[5]=v-g*d,e[9]=-u*p,e[2]=g-v*d,e[6]=E+x*d,e[10]=h*p}else if(t.order==="YXZ"){const v=p*f,x=p*m,E=d*f,g=d*m;e[0]=v+g*u,e[4]=E*u-x,e[8]=h*d,e[1]=h*m,e[5]=h*f,e[9]=-u,e[2]=x*u-E,e[6]=g+v*u,e[10]=h*p}else if(t.order==="ZXY"){const v=p*f,x=p*m,E=d*f,g=d*m;e[0]=v-g*u,e[4]=-h*m,e[8]=E+x*u,e[1]=x+E*u,e[5]=h*f,e[9]=g-v*u,e[2]=-h*d,e[6]=u,e[10]=h*p}else if(t.order==="ZYX"){const v=h*f,x=h*m,E=u*f,g=u*m;e[0]=p*f,e[4]=E*d-x,e[8]=v*d+g,e[1]=p*m,e[5]=g*d+v,e[9]=x*d-E,e[2]=-d,e[6]=u*p,e[10]=h*p}else if(t.order==="YZX"){const v=h*p,x=h*d,E=u*p,g=u*d;e[0]=p*f,e[4]=g-v*m,e[8]=E*m+x,e[1]=m,e[5]=h*f,e[9]=-u*f,e[2]=-d*f,e[6]=x*m+E,e[10]=v-g*m}else if(t.order==="XZY"){const v=h*p,x=h*d,E=u*p,g=u*d;e[0]=p*f,e[4]=-m,e[8]=d*f,e[1]=v*m+g,e[5]=h*f,e[9]=x*m-E,e[2]=E*m-x,e[6]=u*f,e[10]=g*m+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Np)}lookAt(t,e,i){const o=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Pn.crossVectors(i,Oe),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Pn.crossVectors(i,Oe)),Pn.normalize(),Br.crossVectors(Oe,Pn),o[0]=Pn.x,o[4]=Br.x,o[8]=Oe.x,o[1]=Pn.y,o[5]=Br.y,o[9]=Oe.y,o[2]=Pn.z,o[6]=Br.z,o[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,h=i[0],u=i[4],p=i[8],d=i[12],f=i[1],m=i[5],v=i[9],x=i[13],E=i[2],g=i[6],_=i[10],M=i[14],A=i[3],P=i[7],T=i[11],C=i[15],k=o[0],z=o[4],y=o[8],I=o[12],G=o[1],et=o[5],ot=o[9],j=o[13],B=o[2],J=o[6],at=o[10],tt=o[14],H=o[3],ut=o[7],ct=o[11],xt=o[15];return a[0]=h*k+u*G+p*B+d*H,a[4]=h*z+u*et+p*J+d*ut,a[8]=h*y+u*ot+p*at+d*ct,a[12]=h*I+u*j+p*tt+d*xt,a[1]=f*k+m*G+v*B+x*H,a[5]=f*z+m*et+v*J+x*ut,a[9]=f*y+m*ot+v*at+x*ct,a[13]=f*I+m*j+v*tt+x*xt,a[2]=E*k+g*G+_*B+M*H,a[6]=E*z+g*et+_*J+M*ut,a[10]=E*y+g*ot+_*at+M*ct,a[14]=E*I+g*j+_*tt+M*xt,a[3]=A*k+P*G+T*B+C*H,a[7]=A*z+P*et+T*J+C*ut,a[11]=A*y+P*ot+T*at+C*ct,a[15]=A*I+P*j+T*tt+C*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],a=t[12],h=t[1],u=t[5],p=t[9],d=t[13],f=t[2],m=t[6],v=t[10],x=t[14],E=t[3],g=t[7],_=t[11],M=t[15];return E*(+a*p*m-o*d*m-a*u*v+i*d*v+o*u*x-i*p*x)+g*(+e*p*x-e*d*v+a*h*v-o*h*x+o*d*f-a*p*f)+_*(+e*d*m-e*u*x-a*h*m+i*h*x+a*u*f-i*d*f)+M*(-o*u*f-e*p*m+e*u*v+o*h*m-i*h*v+i*p*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],u=t[5],p=t[6],d=t[7],f=t[8],m=t[9],v=t[10],x=t[11],E=t[12],g=t[13],_=t[14],M=t[15],A=m*_*d-g*v*d+g*p*x-u*_*x-m*p*M+u*v*M,P=E*v*d-f*_*d-E*p*x+h*_*x+f*p*M-h*v*M,T=f*g*d-E*m*d+E*u*x-h*g*x-f*u*M+h*m*M,C=E*m*p-f*g*p-E*u*v+h*g*v+f*u*_-h*m*_,k=e*A+i*P+o*T+a*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return t[0]=A*z,t[1]=(g*v*a-m*_*a-g*o*x+i*_*x+m*o*M-i*v*M)*z,t[2]=(u*_*a-g*p*a+g*o*d-i*_*d-u*o*M+i*p*M)*z,t[3]=(m*p*a-u*v*a-m*o*d+i*v*d+u*o*x-i*p*x)*z,t[4]=P*z,t[5]=(f*_*a-E*v*a+E*o*x-e*_*x-f*o*M+e*v*M)*z,t[6]=(E*p*a-h*_*a-E*o*d+e*_*d+h*o*M-e*p*M)*z,t[7]=(h*v*a-f*p*a+f*o*d-e*v*d-h*o*x+e*p*x)*z,t[8]=T*z,t[9]=(E*m*a-f*g*a-E*i*x+e*g*x+f*i*M-e*m*M)*z,t[10]=(h*g*a-E*u*a+E*i*d-e*g*d-h*i*M+e*u*M)*z,t[11]=(f*u*a-h*m*a-f*i*d+e*m*d+h*i*x-e*u*x)*z,t[12]=C*z,t[13]=(f*g*o-E*m*o+E*i*v-e*g*v-f*i*_+e*m*_)*z,t[14]=(E*u*o-h*g*o-E*i*p+e*g*p+h*i*_-e*u*_)*z,t[15]=(h*m*o-f*u*o+f*i*p-e*m*p-h*i*v+e*u*v)*z,this}scale(t){const e=this.elements,i=t.x,o=t.y,a=t.z;return e[0]*=i,e[4]*=o,e[8]*=a,e[1]*=i,e[5]*=o,e[9]*=a,e[2]*=i,e[6]*=o,e[10]*=a,e[3]*=i,e[7]*=o,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),a=1-i,h=t.x,u=t.y,p=t.z,d=a*h,f=a*u;return this.set(d*h+i,d*u-o*p,d*p+o*u,0,d*u+o*p,f*u+i,f*p-o*h,0,d*p-o*u,f*p+o*h,a*p*p+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,a,h){return this.set(1,i,a,0,t,1,h,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,a=e._x,h=e._y,u=e._z,p=e._w,d=a+a,f=h+h,m=u+u,v=a*d,x=a*f,E=a*m,g=h*f,_=h*m,M=u*m,A=p*d,P=p*f,T=p*m,C=i.x,k=i.y,z=i.z;return o[0]=(1-(g+M))*C,o[1]=(x+T)*C,o[2]=(E-P)*C,o[3]=0,o[4]=(x-T)*k,o[5]=(1-(v+M))*k,o[6]=(_+A)*k,o[7]=0,o[8]=(E+P)*z,o[9]=(_-A)*z,o[10]=(1-(v+g))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let a=xi.set(o[0],o[1],o[2]).length();const h=xi.set(o[4],o[5],o[6]).length(),u=xi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),t.x=o[12],t.y=o[13],t.z=o[14],Ke.copy(this);const d=1/a,f=1/h,m=1/u;return Ke.elements[0]*=d,Ke.elements[1]*=d,Ke.elements[2]*=d,Ke.elements[4]*=f,Ke.elements[5]*=f,Ke.elements[6]*=f,Ke.elements[8]*=m,Ke.elements[9]*=m,Ke.elements[10]*=m,e.setFromRotationMatrix(Ke),i.x=a,i.y=h,i.z=u,this}makePerspective(t,e,i,o,a,h){const u=this.elements,p=2*a/(e-t),d=2*a/(i-o),f=(e+t)/(e-t),m=(i+o)/(i-o),v=-(h+a)/(h-a),x=-2*h*a/(h-a);return u[0]=p,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,o,a,h){const u=this.elements,p=1/(e-t),d=1/(i-o),f=1/(h-a),m=(e+t)*p,v=(i+o)*d,x=(h+a)*f;return u[0]=2*p,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=-2*f,u[14]=-x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const xi=new V,Ke=new pe,Ip=new V(0,0,0),Np=new V(1,1,1),Pn=new V,Br=new V,Oe=new V,wl=new pe,yl=new ti;class is{constructor(t=0,e=0,i=0,o=is.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,a=o[0],h=o[4],u=o[8],p=o[1],d=o[5],f=o[9],m=o[2],v=o[6],x=o[10];switch(e){case"XYZ":this._y=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-f,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kp=0;const Ml=new V,wi=new ti,pn=new pe,Gr=new V,rr=new V,Fp=new V,Op=new ti,Sl=new V(1,0,0),El=new V(0,1,0),Cl=new V(0,0,1),Up={type:"added"},Pl={type:"removed"};class Ie extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new V,e=new is,i=new ti,o=new V(1,1,1);function a(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pe},normalMatrix:{value:new ze}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gr.copy(t):Gr.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(rr,Gr,this.up):pn.lookAt(Gr,rr,this.up),this.quaternion.setFromRotationMatrix(pn),o&&(pn.extractRotation(o.matrixWorld),wi.setFromRotationMatrix(pn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Pl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let o=0,a=this.children.length;o<a;o++){const h=this.children[o].getObjectsByProperty(t,e);h.length>0&&(i=i.concat(h))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let a=0,h=o.length;a<h;a++){const u=o[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(u,p){return u[p.uuid]===void 0&&(u[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const p=u.shapes;if(Array.isArray(p))for(let d=0,f=p.length;d<f;d++){const m=p[d];a(t.shapes,m)}else a(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let p=0,d=this.material.length;p<d;p++)u.push(a(t.materials,this.material[p]));o.material=u}else o.material=a(t.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const p=this.animations[u];o.animations.push(a(t.animations,p))}}if(e){const u=h(t.geometries),p=h(t.materials),d=h(t.textures),f=h(t.images),m=h(t.shapes),v=h(t.skeletons),x=h(t.animations),E=h(t.nodes);u.length>0&&(i.geometries=u),p.length>0&&(i.materials=p),d.length>0&&(i.textures=d),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function h(u){const p=[];for(const d in u){const f=u[d];delete f.metadata,p.push(f)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}Ie.DEFAULT_UP=new V(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new V,fn=new V,Qs=new V,mn=new V,yi=new V,Mi=new V,Tl=new V,to=new V,eo=new V,no=new V;class gn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),Ye.subVectors(t,e),o.cross(Ye);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(t,e,i,o,a){Ye.subVectors(o,e),fn.subVectors(i,e),Qs.subVectors(t,e);const h=Ye.dot(Ye),u=Ye.dot(fn),p=Ye.dot(Qs),d=fn.dot(fn),f=fn.dot(Qs),m=h*d-u*u;if(m===0)return a.set(-2,-1,-1);const v=1/m,x=(d*p-u*f)*v,E=(h*f-u*p)*v;return a.set(1-x-E,E,x)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(t,e,i,o,a,h,u,p){return this.getBarycoord(t,e,i,o,mn),p.set(0,0),p.addScaledVector(a,mn.x),p.addScaledVector(h,mn.y),p.addScaledVector(u,mn.z),p}static isFrontFacing(t,e,i,o){return Ye.subVectors(i,e),fn.subVectors(t,e),Ye.cross(fn).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ye.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,o,a){return gn.getUV(t,this.a,this.b,this.c,e,i,o,a)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,a=this.c;let h,u;yi.subVectors(o,i),Mi.subVectors(a,i),to.subVectors(t,i);const p=yi.dot(to),d=Mi.dot(to);if(p<=0&&d<=0)return e.copy(i);eo.subVectors(t,o);const f=yi.dot(eo),m=Mi.dot(eo);if(f>=0&&m<=f)return e.copy(o);const v=p*m-f*d;if(v<=0&&p>=0&&f<=0)return h=p/(p-f),e.copy(i).addScaledVector(yi,h);no.subVectors(t,a);const x=yi.dot(no),E=Mi.dot(no);if(E>=0&&x<=E)return e.copy(a);const g=x*d-p*E;if(g<=0&&d>=0&&E<=0)return u=d/(d-E),e.copy(i).addScaledVector(Mi,u);const _=f*E-x*m;if(_<=0&&m-f>=0&&x-E>=0)return Tl.subVectors(a,o),u=(m-f)/(m-f+(x-E)),e.copy(o).addScaledVector(Tl,u);const M=1/(_+g+v);return h=g*M,u=v*M,e.copy(i).addScaledVector(yi,h).addScaledVector(Mi,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Vp=0;class vr extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=Ri,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const o=this[e];if(o===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const h=[];for(const u in a){const p=a[u];delete p.metadata,h.push(p)}return h}if(e){const a=o(t.textures),h=o(t.images);a.length>0&&(i.textures=a),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Po extends vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new V,Hr=new Ft;class rn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),o=Fe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),o=Fe(o,this.array),a=Fe(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vc extends rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class bc extends rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class sn extends rn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zp=0;const We=new pe,io=new Ie,Si=new V,Ue=new _r,sr=new _r,be=new V;class Dn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?bc:vc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ze().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=[];for(let i=0,o=t.length;i<o;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const a=e[i];Ue.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let a=0,h=e.length;a<h;a++){const u=e[a];sr.setFromBufferAttribute(u),this.morphTargetsRelative?(be.addVectors(Ue.min,sr.min),Ue.expandByPoint(be),be.addVectors(Ue.max,sr.max),Ue.expandByPoint(be)):(Ue.expandByPoint(sr.min),Ue.expandByPoint(sr.max))}Ue.getCenter(i);let o=0;for(let a=0,h=t.count;a<h;a++)be.fromBufferAttribute(t,a),o=Math.max(o,i.distanceToSquared(be));if(e)for(let a=0,h=e.length;a<h;a++){const u=e[a],p=this.morphTargetsRelative;for(let d=0,f=u.count;d<f;d++)be.fromBufferAttribute(u,d),p&&(Si.fromBufferAttribute(t,d),be.add(Si)),o=Math.max(o,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,o=e.position.array,a=e.normal.array,h=e.uv.array,u=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*u),4));const p=this.getAttribute("tangent").array,d=[],f=[];for(let G=0;G<u;G++)d[G]=new V,f[G]=new V;const m=new V,v=new V,x=new V,E=new Ft,g=new Ft,_=new Ft,M=new V,A=new V;function P(G,et,ot){m.fromArray(o,G*3),v.fromArray(o,et*3),x.fromArray(o,ot*3),E.fromArray(h,G*2),g.fromArray(h,et*2),_.fromArray(h,ot*2),v.sub(m),x.sub(m),g.sub(E),_.sub(E);const j=1/(g.x*_.y-_.x*g.y);isFinite(j)&&(M.copy(v).multiplyScalar(_.y).addScaledVector(x,-g.y).multiplyScalar(j),A.copy(x).multiplyScalar(g.x).addScaledVector(v,-_.x).multiplyScalar(j),d[G].add(M),d[et].add(M),d[ot].add(M),f[G].add(A),f[et].add(A),f[ot].add(A))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let G=0,et=T.length;G<et;++G){const ot=T[G],j=ot.start,B=ot.count;for(let J=j,at=j+B;J<at;J+=3)P(i[J+0],i[J+1],i[J+2])}const C=new V,k=new V,z=new V,y=new V;function I(G){z.fromArray(a,G*3),y.copy(z);const et=d[G];C.copy(et),C.sub(z.multiplyScalar(z.dot(et))).normalize(),k.crossVectors(y,et);const j=k.dot(f[G])<0?-1:1;p[G*4]=C.x,p[G*4+1]=C.y,p[G*4+2]=C.z,p[G*4+3]=j}for(let G=0,et=T.length;G<et;++G){const ot=T[G],j=ot.start,B=ot.count;for(let J=j,at=j+B;J<at;J+=3)I(i[J+0]),I(i[J+1]),I(i[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new V,a=new V,h=new V,u=new V,p=new V,d=new V,f=new V,m=new V;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),g=t.getX(v+1),_=t.getX(v+2);o.fromBufferAttribute(e,E),a.fromBufferAttribute(e,g),h.fromBufferAttribute(e,_),f.subVectors(h,a),m.subVectors(o,a),f.cross(m),u.fromBufferAttribute(i,E),p.fromBufferAttribute(i,g),d.fromBufferAttribute(i,_),u.add(f),p.add(f),d.add(f),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(g,p.x,p.y,p.z),i.setXYZ(_,d.x,d.y,d.z)}else for(let v=0,x=e.count;v<x;v+=3)o.fromBufferAttribute(e,v+0),a.fromBufferAttribute(e,v+1),h.fromBufferAttribute(e,v+2),f.subVectors(h,a),m.subVectors(o,a),f.cross(m),i.setXYZ(v+0,f.x,f.y,f.z),i.setXYZ(v+1,f.x,f.y,f.z),i.setXYZ(v+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(u,p){const d=u.array,f=u.itemSize,m=u.normalized,v=new d.constructor(p.length*f);let x=0,E=0;for(let g=0,_=p.length;g<_;g++){u.isInterleavedBufferAttribute?x=p[g]*u.data.stride+u.offset:x=p[g]*f;for(let M=0;M<f;M++)v[E++]=d[x++]}return new rn(v,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Dn,i=this.index.array,o=this.attributes;for(const u in o){const p=o[u],d=t(p,i);e.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const p=[],d=a[u];for(let f=0,m=d.length;f<m;f++){const v=d[f],x=t(v,i);p.push(x)}e.morphAttributes[u]=p}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let u=0,p=h.length;u<p;u++){const d=h[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const p in i){const d=i[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let a=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],f=[];for(let m=0,v=d.length;m<v;m++){const x=d[m];f.push(x.toJSON(t.data))}f.length>0&&(o[p]=f,a=!0)}a&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const d in o){const f=o[d];this.setAttribute(d,f.clone(e))}const a=t.morphAttributes;for(const d in a){const f=[],m=a[d];for(let v=0,x=m.length;v<x;v++)f.push(m[v].clone(e));this.morphAttributes[d]=f}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,f=h.length;d<f;d++){const m=h[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new pe,Ei=new Rp,ro=new Co,or=new V,ar=new V,lr=new V,so=new V,Wr=new V,jr=new Ft,qr=new Ft,Xr=new Ft,oo=new V,Kr=new V;class Je extends Ie{constructor(t=new Dn,e=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=o.length;a<h;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,h=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const u=this.morphTargetInfluences;if(a&&u){Wr.set(0,0,0);for(let p=0,d=a.length;p<d;p++){const f=u[p],m=a[p];f!==0&&(so.fromBufferAttribute(m,t),h?Wr.addScaledVector(so,f):Wr.addScaledVector(so.sub(e),f))}e.add(Wr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const i=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(a),t.ray.intersectsSphere(ro)===!1)||(Al.copy(a).invert(),Ei.copy(t.ray).applyMatrix4(Al),i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1))return;let h;const u=i.index,p=i.attributes.position,d=i.attributes.uv,f=i.attributes.uv2,m=i.groups,v=i.drawRange;if(u!==null)if(Array.isArray(o))for(let x=0,E=m.length;x<E;x++){const g=m[x],_=o[g.materialIndex],M=Math.max(g.start,v.start),A=Math.min(u.count,Math.min(g.start+g.count,v.start+v.count));for(let P=M,T=A;P<T;P+=3){const C=u.getX(P),k=u.getX(P+1),z=u.getX(P+2);h=Yr(this,_,t,Ei,d,f,C,k,z),h&&(h.faceIndex=Math.floor(P/3),h.face.materialIndex=g.materialIndex,e.push(h))}}else{const x=Math.max(0,v.start),E=Math.min(u.count,v.start+v.count);for(let g=x,_=E;g<_;g+=3){const M=u.getX(g),A=u.getX(g+1),P=u.getX(g+2);h=Yr(this,o,t,Ei,d,f,M,A,P),h&&(h.faceIndex=Math.floor(g/3),e.push(h))}}else if(p!==void 0)if(Array.isArray(o))for(let x=0,E=m.length;x<E;x++){const g=m[x],_=o[g.materialIndex],M=Math.max(g.start,v.start),A=Math.min(p.count,Math.min(g.start+g.count,v.start+v.count));for(let P=M,T=A;P<T;P+=3){const C=P,k=P+1,z=P+2;h=Yr(this,_,t,Ei,d,f,C,k,z),h&&(h.faceIndex=Math.floor(P/3),h.face.materialIndex=g.materialIndex,e.push(h))}}else{const x=Math.max(0,v.start),E=Math.min(p.count,v.start+v.count);for(let g=x,_=E;g<_;g+=3){const M=g,A=g+1,P=g+2;h=Yr(this,o,t,Ei,d,f,M,A,P),h&&(h.faceIndex=Math.floor(g/3),e.push(h))}}}}function Bp(c,t,e,i,o,a,h,u){let p;if(t.side===Be?p=i.intersectTriangle(h,a,o,!0,u):p=i.intersectTriangle(o,a,h,t.side===Ln,u),p===null)return null;Kr.copy(u),Kr.applyMatrix4(c.matrixWorld);const d=e.ray.origin.distanceTo(Kr);return d<e.near||d>e.far?null:{distance:d,point:Kr.clone(),object:c}}function Yr(c,t,e,i,o,a,h,u,p){c.getVertexPosition(h,or),c.getVertexPosition(u,ar),c.getVertexPosition(p,lr);const d=Bp(c,t,e,i,or,ar,lr,oo);if(d){o&&(jr.fromBufferAttribute(o,h),qr.fromBufferAttribute(o,u),Xr.fromBufferAttribute(o,p),d.uv=gn.getUV(oo,or,ar,lr,jr,qr,Xr,new Ft)),a&&(jr.fromBufferAttribute(a,h),qr.fromBufferAttribute(a,u),Xr.fromBufferAttribute(a,p),d.uv2=gn.getUV(oo,or,ar,lr,jr,qr,Xr,new Ft));const f={a:h,b:u,c:p,normal:new V,materialIndex:0};gn.getNormal(or,ar,lr,f.normal),d.face=f}return d}class br extends Dn{constructor(t=1,e=1,i=1,o=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:a,depthSegments:h};const u=this;o=Math.floor(o),a=Math.floor(a),h=Math.floor(h);const p=[],d=[],f=[],m=[];let v=0,x=0;E("z","y","x",-1,-1,i,e,t,h,a,0),E("z","y","x",1,-1,i,e,-t,h,a,1),E("x","z","y",1,1,t,i,e,o,h,2),E("x","z","y",1,-1,t,i,-e,o,h,3),E("x","y","z",1,-1,t,e,i,o,a,4),E("x","y","z",-1,-1,t,e,-i,o,a,5),this.setIndex(p),this.setAttribute("position",new sn(d,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(m,2));function E(g,_,M,A,P,T,C,k,z,y,I){const G=T/z,et=C/y,ot=T/2,j=C/2,B=k/2,J=z+1,at=y+1;let tt=0,H=0;const ut=new V;for(let ct=0;ct<at;ct++){const xt=ct*et-j;for(let q=0;q<J;q++){const Q=q*G-ot;ut[g]=Q*A,ut[_]=xt*P,ut[M]=B,d.push(ut.x,ut.y,ut.z),ut[g]=0,ut[_]=0,ut[M]=k>0?1:-1,f.push(ut.x,ut.y,ut.z),m.push(q/z),m.push(1-ct/y),tt+=1}}for(let ct=0;ct<y;ct++)for(let xt=0;xt<z;xt++){const q=v+xt+J*ct,Q=v+xt+J*(ct+1),nt=v+(xt+1)+J*(ct+1),it=v+(xt+1)+J*ct;p.push(q,Q,it),p.push(Q,nt,it),H+=6}u.addGroup(x,H,I),x+=H,v+=tt}}static fromJSON(t){return new br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(c){const t={};for(const e in c){t[e]={};for(const i in c[e]){const o=c[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function Pe(c){const t={};for(let e=0;e<c.length;e++){const i=Oi(c[e]);for(const o in i)t[o]=i[o]}return t}function Gp(c){const t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}function xc(c){return c.getRenderTarget()===null&&c.outputEncoding===Qt?en:fr}const Hp={clone:Oi,merge:Pe};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?e.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[o]={type:"m4",value:h.toArray()}:e.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wc extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends wc{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,o,a,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,a=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,d=h.fullHeight;a+=h.offsetX*o/p,e-=h.offsetY*i/d,o*=h.width/p,i*=h.height/d}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Pi=1;class qp extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const o=new Ve(Ci,Pi,t,e);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const a=new Ve(Ci,Pi,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const h=new Ve(Ci,Pi,t,e);h.layers=this.layers,h.up.set(0,0,-1),h.lookAt(0,1,0),this.add(h);const u=new Ve(Ci,Pi,t,e);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(0,-1,0),this.add(u);const p=new Ve(Ci,Pi,t,e);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,1),this.add(p);const d=new Ve(Ci,Pi,t,e);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,-1),this.add(d)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[o,a,h,u,p,d]=this.children,f=t.getRenderTarget(),m=t.toneMapping,v=t.xr.enabled;t.toneMapping=_n,t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,o),t.setRenderTarget(i,1),t.render(e,a),t.setRenderTarget(i,2),t.render(e,h),t.setRenderTarget(i,3),t.render(e,u),t.setRenderTarget(i,4),t.render(e,p),i.texture.generateMipmaps=x,t.setRenderTarget(i,5),t.render(e,d),t.setRenderTarget(f),t.toneMapping=m,t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class To extends Re{constructor(t,e,i,o,a,h,u,p,d,f){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,i,o,a,h,u,p,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xp extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new To(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new br(5,5,5),a=new ei({name:"CubemapFromEquirect",uniforms:Oi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:An});a.uniforms.tEquirect.value=e;const h=new Je(o,a),u=e.minFilter;return e.minFilter===dr&&(e.minFilter=je),new qp(1,10,this).update(t,h),e.minFilter=u,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,o){const a=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,o);t.setRenderTarget(a)}}const ao=new V,Kp=new V,Yp=new ze;class Hn{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=ao.subVectors(i,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(ao),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:e.copy(i).multiplyScalar(a).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yp.getNormalMatrix(t),o=this.coplanarPoint(ao).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Co,$r=new V;class Ao{constructor(t=new Hn,e=new Hn,i=new Hn,o=new Hn,a=new Hn,h=new Hn){this.planes=[t,e,i,o,a,h]}set(t,e,i,o,a,h){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(h),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,o=i[0],a=i[1],h=i[2],u=i[3],p=i[4],d=i[5],f=i[6],m=i[7],v=i[8],x=i[9],E=i[10],g=i[11],_=i[12],M=i[13],A=i[14],P=i[15];return e[0].setComponents(u-o,m-p,g-v,P-_).normalize(),e[1].setComponents(u+o,m+p,g+v,P+_).normalize(),e[2].setComponents(u+a,m+d,g+x,P+M).normalize(),e[3].setComponents(u-a,m-d,g-x,P-M).normalize(),e[4].setComponents(u-h,m-f,g-E,P-A).normalize(),e[5].setComponents(u+h,m+f,g+E,P+A).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if($r.x=o.normal.x>0?t.max.x:t.min.x,$r.y=o.normal.y>0?t.max.y:t.min.y,$r.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let c=null,t=!1,e=null,i=null;function o(a,h){e(a,h),i=c.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=c.requestAnimationFrame(o),t=!0)},stop:function(){c.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){c=a}}}function $p(c,t){const e=t.isWebGL2,i=new WeakMap;function o(d,f){const m=d.array,v=d.usage,x=c.createBuffer();c.bindBuffer(f,x),c.bufferData(f,m,v),d.onUploadCallback();let E;if(m instanceof Float32Array)E=5126;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)E=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=5123;else if(m instanceof Int16Array)E=5122;else if(m instanceof Uint32Array)E=5125;else if(m instanceof Int32Array)E=5124;else if(m instanceof Int8Array)E=5120;else if(m instanceof Uint8Array)E=5121;else if(m instanceof Uint8ClampedArray)E=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version}}function a(d,f,m){const v=f.array,x=f.updateRange;c.bindBuffer(m,d),x.count===-1?c.bufferSubData(m,0,v):(e?c.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):c.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),f.onUploadCallback()}function h(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=i.get(d);f&&(c.deleteBuffer(f.buffer),i.delete(d))}function p(d,f){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=i.get(d);m===void 0?i.set(d,o(d,f)):m.version<d.version&&(a(m.buffer,d,f),m.version=d.version)}return{get:h,remove:u,update:p}}class Lo extends Dn{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const a=t/2,h=e/2,u=Math.floor(i),p=Math.floor(o),d=u+1,f=p+1,m=t/u,v=e/p,x=[],E=[],g=[],_=[];for(let M=0;M<f;M++){const A=M*v-h;for(let P=0;P<d;P++){const T=P*m-a;E.push(T,-A,0),g.push(0,0,1),_.push(P/u),_.push(1-M/p)}}for(let M=0;M<p;M++)for(let A=0;A<u;A++){const P=A+d*M,T=A+d*(M+1),C=A+1+d*(M+1),k=A+1+d*M;x.push(P,T,k),x.push(T,C,k)}this.setIndex(x),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(_,2))}static fromJSON(t){return new Lo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf="vec3 transformed = vec3( position );",sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ff=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Xf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,dm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Hm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Wm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Km=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vt={alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,begin_vertex:rf,beginnormal_vertex:sf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:df,color_fragment:pf,color_pars_fragment:ff,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:bf,displacementmap_pars_vertex:xf,displacementmap_vertex:wf,emissivemap_fragment:yf,emissivemap_pars_fragment:Mf,encodings_fragment:Sf,encodings_pars_fragment:Ef,envmap_fragment:Cf,envmap_common_pars_fragment:Pf,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Lf,fog_vertex:Df,fog_pars_vertex:Rf,fog_fragment:If,fog_pars_fragment:Nf,gradientmap_pars_fragment:kf,lightmap_fragment:Ff,lightmap_pars_fragment:Of,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Vf,lights_pars_begin:zf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Wf,lights_phong_pars_fragment:jf,lights_physical_fragment:qf,lights_physical_pars_fragment:Xf,lights_fragment_begin:Kf,lights_fragment_maps:Yf,lights_fragment_end:$f,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Qf,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:rm,metalnessmap_fragment:sm,metalnessmap_pars_fragment:om,morphcolor_vertex:am,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:um,normal_fragment_begin:hm,normal_fragment_maps:dm,normal_pars_fragment:pm,normal_pars_vertex:fm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:xm,output_fragment:wm,packing:ym,premultiplied_alpha_fragment:Mm,project_vertex:Sm,dithering_fragment:Em,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Lm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Rm,skinbase_vertex:Im,skinning_pars_vertex:Nm,skinning_vertex:km,skinnormal_vertex:Fm,specularmap_fragment:Om,specularmap_pars_fragment:Um,tonemapping_fragment:Vm,tonemapping_pars_fragment:zm,transmission_fragment:Bm,transmission_pars_fragment:Gm,uv_pars_fragment:Hm,uv_pars_vertex:Wm,uv_vertex:jm,uv2_pars_fragment:qm,uv2_pars_vertex:Xm,uv2_vertex:Km,worldpos_vertex:Ym,background_vert:$m,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:rg,distanceRGBA_frag:sg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:ug,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:pg,meshmatcap_vert:fg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:vg,meshphong_frag:bg,meshphysical_vert:xg,meshphysical_frag:wg,meshtoon_vert:yg,meshtoon_frag:Mg,points_vert:Sg,points_frag:Eg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Tg,sprite_frag:Ag},dt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ze},uv2Transform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}}},nn={basic:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Pe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Pe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Pe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Pe([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Pe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Pe([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Pe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Pe([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Pe([dt.common,dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Pe([dt.lights,dt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};nn.physical={uniforms:Pe([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Zr={r:0,b:0,g:0};function Lg(c,t,e,i,o,a,h){const u=new Jt(0);let p=a===!0?0:1,d,f,m=null,v=0,x=null;function E(_,M){let A=!1,P=M.isScene===!0?M.background:null;P&&P.isTexture&&(P=(M.backgroundBlurriness>0?e:t).get(P));const T=c.xr,C=T.getSession&&T.getSession();C&&C.environmentBlendMode==="additive"&&(P=null),P===null?g(u,p):P&&P.isColor&&(g(P,1),A=!0),(c.autoClear||A)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),P&&(P.isCubeTexture||P.mapping===ns)?(f===void 0&&(f=new Je(new br(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Oi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(k,z,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(f)),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.toneMapped=P.encoding!==Qt,(m!==P||v!==P.version||x!==c.toneMapping)&&(f.material.needsUpdate=!0,m=P,v=P.version,x=c.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Je(new Lo(2,2),new ei({name:"BackgroundMaterial",uniforms:Oi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.toneMapped=P.encoding!==Qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||v!==P.version||x!==c.toneMapping)&&(d.material.needsUpdate=!0,m=P,v=P.version,x=c.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function g(_,M){_.getRGB(Zr,xc(c)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,M,h)}return{getClearColor:function(){return u},setClearColor:function(_,M=1){u.set(_),p=M,g(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(_){p=_,g(u,p)},render:E}}function Dg(c,t,e,i){const o=c.getParameter(34921),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||a!==null,u={},p=_(null);let d=p,f=!1;function m(B,J,at,tt,H){let ut=!1;if(h){const ct=g(tt,at,J);d!==ct&&(d=ct,x(d.object)),ut=M(B,tt,at,H),ut&&A(B,tt,at,H)}else{const ct=J.wireframe===!0;(d.geometry!==tt.id||d.program!==at.id||d.wireframe!==ct)&&(d.geometry=tt.id,d.program=at.id,d.wireframe=ct,ut=!0)}H!==null&&e.update(H,34963),(ut||f)&&(f=!1,y(B,J,at,tt),H!==null&&c.bindBuffer(34963,e.get(H).buffer))}function v(){return i.isWebGL2?c.createVertexArray():a.createVertexArrayOES()}function x(B){return i.isWebGL2?c.bindVertexArray(B):a.bindVertexArrayOES(B)}function E(B){return i.isWebGL2?c.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function g(B,J,at){const tt=at.wireframe===!0;let H=u[B.id];H===void 0&&(H={},u[B.id]=H);let ut=H[J.id];ut===void 0&&(ut={},H[J.id]=ut);let ct=ut[tt];return ct===void 0&&(ct=_(v()),ut[tt]=ct),ct}function _(B){const J=[],at=[],tt=[];for(let H=0;H<o;H++)J[H]=0,at[H]=0,tt[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:at,attributeDivisors:tt,object:B,attributes:{},index:null}}function M(B,J,at,tt){const H=d.attributes,ut=J.attributes;let ct=0;const xt=at.getAttributes();for(const q in xt)if(xt[q].location>=0){const nt=H[q];let it=ut[q];if(it===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(it=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(it=B.instanceColor)),nt===void 0||nt.attribute!==it||it&&nt.data!==it.data)return!0;ct++}return d.attributesNum!==ct||d.index!==tt}function A(B,J,at,tt){const H={},ut=J.attributes;let ct=0;const xt=at.getAttributes();for(const q in xt)if(xt[q].location>=0){let nt=ut[q];nt===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor));const it={};it.attribute=nt,nt&&nt.data&&(it.data=nt.data),H[q]=it,ct++}d.attributes=H,d.attributesNum=ct,d.index=tt}function P(){const B=d.newAttributes;for(let J=0,at=B.length;J<at;J++)B[J]=0}function T(B){C(B,0)}function C(B,J){const at=d.newAttributes,tt=d.enabledAttributes,H=d.attributeDivisors;at[B]=1,tt[B]===0&&(c.enableVertexAttribArray(B),tt[B]=1),H[B]!==J&&((i.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,J),H[B]=J)}function k(){const B=d.newAttributes,J=d.enabledAttributes;for(let at=0,tt=J.length;at<tt;at++)J[at]!==B[at]&&(c.disableVertexAttribArray(at),J[at]=0)}function z(B,J,at,tt,H,ut){i.isWebGL2===!0&&(at===5124||at===5125)?c.vertexAttribIPointer(B,J,at,H,ut):c.vertexAttribPointer(B,J,at,tt,H,ut)}function y(B,J,at,tt){if(i.isWebGL2===!1&&(B.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;P();const H=tt.attributes,ut=at.getAttributes(),ct=J.defaultAttributeValues;for(const xt in ut){const q=ut[xt];if(q.location>=0){let Q=H[xt];if(Q===void 0&&(xt==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),xt==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),Q!==void 0){const nt=Q.normalized,it=Q.itemSize,X=e.get(Q);if(X===void 0)continue;const Dt=X.buffer,wt=X.type,yt=X.bytesPerElement;if(Q.isInterleavedBufferAttribute){const mt=Q.data,Ot=mt.stride,Rt=Q.offset;if(mt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<q.locationSize;Ct++)C(q.location+Ct,mt.meshPerAttribute);B.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ct=0;Ct<q.locationSize;Ct++)T(q.location+Ct);c.bindBuffer(34962,Dt);for(let Ct=0;Ct<q.locationSize;Ct++)z(q.location+Ct,it/q.locationSize,wt,nt,Ot*yt,(Rt+it/q.locationSize*Ct)*yt)}else{if(Q.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)C(q.location+mt,Q.meshPerAttribute);B.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let mt=0;mt<q.locationSize;mt++)T(q.location+mt);c.bindBuffer(34962,Dt);for(let mt=0;mt<q.locationSize;mt++)z(q.location+mt,it/q.locationSize,wt,nt,it*yt,it/q.locationSize*mt*yt)}}else if(ct!==void 0){const nt=ct[xt];if(nt!==void 0)switch(nt.length){case 2:c.vertexAttrib2fv(q.location,nt);break;case 3:c.vertexAttrib3fv(q.location,nt);break;case 4:c.vertexAttrib4fv(q.location,nt);break;default:c.vertexAttrib1fv(q.location,nt)}}}}k()}function I(){ot();for(const B in u){const J=u[B];for(const at in J){const tt=J[at];for(const H in tt)E(tt[H].object),delete tt[H];delete J[at]}delete u[B]}}function G(B){if(u[B.id]===void 0)return;const J=u[B.id];for(const at in J){const tt=J[at];for(const H in tt)E(tt[H].object),delete tt[H];delete J[at]}delete u[B.id]}function et(B){for(const J in u){const at=u[J];if(at[B.id]===void 0)continue;const tt=at[B.id];for(const H in tt)E(tt[H].object),delete tt[H];delete at[B.id]}}function ot(){j(),f=!0,d!==p&&(d=p,x(d.object))}function j(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:m,reset:ot,resetDefaultState:j,dispose:I,releaseStatesOfGeometry:G,releaseStatesOfProgram:et,initAttributes:P,enableAttribute:T,disableUnusedAttributes:k}}function Rg(c,t,e,i){const o=i.isWebGL2;let a;function h(d){a=d}function u(d,f){c.drawArrays(a,d,f),e.update(f,a,1)}function p(d,f,m){if(m===0)return;let v,x;if(o)v=c,x="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](a,d,f,m),e.update(f,a,m)}this.setMode=h,this.render=u,this.renderInstances=p}function Ig(c,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");i=c.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(z){if(z==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let u=e.precision!==void 0?e.precision:"highp";const p=a(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const d=h||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,m=c.getParameter(34930),v=c.getParameter(35660),x=c.getParameter(3379),E=c.getParameter(34076),g=c.getParameter(34921),_=c.getParameter(36347),M=c.getParameter(36348),A=c.getParameter(36349),P=v>0,T=h||t.has("OES_texture_float"),C=P&&T,k=h?c.getParameter(36183):0;return{isWebGL2:h,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:E,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:P,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:k}}function Ng(c){const t=this;let e=null,i=0,o=!1,a=!1;const h=new Hn,u=new ze,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||i!==0||o;return o=v,i=m.length,x},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){e=f(m,v,0)},this.setState=function(m,v,x){const E=m.clippingPlanes,g=m.clipIntersection,_=m.clipShadows,M=c.get(m);if(!o||E===null||E.length===0||a&&!_)a?f(null):d();else{const A=a?0:i,P=A*4;let T=M.clippingState||null;p.value=T,T=f(E,v,P,x);for(let C=0;C!==P;++C)T[C]=e[C];M.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(m,v,x,E){const g=m!==null?m.length:0;let _=null;if(g!==0){if(_=p.value,E!==!0||_===null){const M=x+g*4,A=v.matrixWorldInverse;u.getNormalMatrix(A),(_===null||_.length<M)&&(_=new Float32Array(M));for(let P=0,T=x;P!==g;++P,T+=4)h.copy(m[P]).applyMatrix4(A,u),h.normal.toArray(_,T),_[T+3]=h.constant}p.value=_,p.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function kg(c){let t=new WeakMap;function e(h,u){return u===_o?h.mapping=Ni:u===vo&&(h.mapping=ki),h}function i(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const u=h.mapping;if(u===_o||u===vo)if(t.has(h)){const p=t.get(h).texture;return e(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const d=new Xp(p.height/2);return d.fromEquirectangularTexture(c,h),t.set(h,d),h.addEventListener("dispose",o),e(d.texture,h.mapping)}else return null}}return h}function o(h){const u=h.target;u.removeEventListener("dispose",o);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Fg extends wc{constructor(t=-1,e=1,i=1,o=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-t,h=i+t,u=o+e,p=o-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,h=a+d*this.view.width,u-=f*this.view.offsetY,p=u-f*this.view.height}this.projectionMatrix.makeOrthographic(a,h,u,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,Ll=[.125,.215,.35,.446,.526,.582],qn=20,lo=new Fg,Dl=new Jt;let co=null;const Wn=(1+Math.sqrt(5))/2,Ai=1/Wn,Rl=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Wn,Ai),new V(0,Wn,-Ai),new V(Ai,0,Wn),new V(-Ai,0,Wn),new V(Wn,Ai,0),new V(-Wn,Ai,0)];class Il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){co=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,o,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(co),t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:pr,format:Ze,encoding:Jn,depthBuffer:!1},o=Nl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(a)),this._blurMaterial=Ug(a,t,e)}return o}_compileMaterial(t){const e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,i,o){const u=new Ve(90,1,e,i),p=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,v=f.toneMapping;f.getClearColor(Dl),f.toneMapping=_n,f.autoClear=!1;const x=new Po({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),E=new Je(new br,x);let g=!1;const _=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,g=!0):(x.color.copy(Dl),g=!0);for(let M=0;M<6;M++){const A=M%3;A===0?(u.up.set(0,p[M],0),u.lookAt(d[M],0,0)):A===1?(u.up.set(0,0,p[M]),u.lookAt(0,d[M],0)):(u.up.set(0,p[M],0),u.lookAt(0,0,d[M]));const P=this._cubeSize;Jr(o,A*P,M>2?P:0,P,P),f.setRenderTarget(o),g&&f.render(E,u),f.render(t,u)}E.geometry.dispose(),E.material.dispose(),f.toneMapping=v,f.autoClear=m,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Ni||t.mapping===ki;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const a=o?this._cubemapMaterial:this._equirectMaterial,h=new Je(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const p=this._cubeSize;Jr(e,0,0,3*p,2*p),i.setRenderTarget(e),i.render(h,lo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Rl[(o-1)%Rl.length];this._blur(t,o-1,o,a,h)}e.autoClear=i}_blur(t,e,i,o,a){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,o,"latitudinal",a),this._halfBlur(h,t,i,i,o,"longitudinal",a)}_halfBlur(t,e,i,o,a,h,u){const p=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new Je(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*qn-1),g=a/E,_=isFinite(a)?1+Math.floor(f*g):qn;_>qn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${qn}`);const M=[];let A=0;for(let z=0;z<qn;++z){const y=z/g,I=Math.exp(-y*y/2);M.push(I),z===0?A+=I:z<_&&(A+=2*I)}for(let z=0;z<M.length;z++)M[z]=M[z]/A;v.envMap.value=t.texture,v.samples.value=_,v.weights.value=M,v.latitudinal.value=h==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:P}=this;v.dTheta.value=E,v.mipInt.value=P-i;const T=this._sizeLods[o],C=3*T*(o>P-Di?o-P+Di:0),k=4*(this._cubeSize-T);Jr(e,C,k,3*T,2*T),p.setRenderTarget(e),p.render(m,lo)}}function Og(c){const t=[],e=[],i=[];let o=c;const a=c-Di+1+Ll.length;for(let h=0;h<a;h++){const u=Math.pow(2,o);e.push(u);let p=1/u;h>c-Di?p=Ll[h-c+Di-1]:h===0&&(p=0),i.push(p);const d=1/(u-2),f=-d,m=1+d,v=[f,f,m,f,m,m,f,f,m,m,f,m],x=6,E=6,g=3,_=2,M=1,A=new Float32Array(g*E*x),P=new Float32Array(_*E*x),T=new Float32Array(M*E*x);for(let k=0;k<x;k++){const z=k%3*2/3-1,y=k>2?0:-1,I=[z,y,0,z+2/3,y,0,z+2/3,y+1,0,z,y,0,z+2/3,y+1,0,z,y+1,0];A.set(I,g*E*k),P.set(v,_*E*k);const G=[k,k,k,k,k,k];T.set(G,M*E*k)}const C=new Dn;C.setAttribute("position",new rn(A,g)),C.setAttribute("uv",new rn(P,_)),C.setAttribute("faceIndex",new rn(T,M)),t.push(C),o>Di&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nl(c,t,e){const i=new Qn(c,t,e);return i.texture.mapping=ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(c,t,e,i,o){c.viewport.set(t,e,i,o),c.scissor.set(t,e,i,o)}function Ug(c,t,e){const i=new Float32Array(qn),o=new V(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function kl(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Fl(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vg(c){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const p=u.mapping,d=p===_o||p===vo,f=p===Ni||p===ki;if(d||f)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=t.get(u);return e===null&&(e=new Il(c)),m=d?e.fromEquirectangular(u,m):e.fromCubemap(u,m),t.set(u,m),m.texture}else{if(t.has(u))return t.get(u).texture;{const m=u.image;if(d&&m&&m.height>0||f&&m&&o(m)){e===null&&(e=new Il(c));const v=d?e.fromEquirectangular(u):e.fromCubemap(u);return t.set(u,v),u.addEventListener("dispose",a),v.texture}else return null}}}return u}function o(u){let p=0;const d=6;for(let f=0;f<d;f++)u[f]!==void 0&&p++;return p===d}function a(u){const p=u.target;p.removeEventListener("dispose",a);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function zg(c){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=c.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Bg(c,t,e,i){const o={},a=new WeakMap;function h(m){const v=m.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete o[v.id];const x=a.get(v);x&&(t.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function u(m,v){return o[v.id]===!0||(v.addEventListener("dispose",h),o[v.id]=!0,e.memory.geometries++),v}function p(m){const v=m.attributes;for(const E in v)t.update(v[E],34962);const x=m.morphAttributes;for(const E in x){const g=x[E];for(let _=0,M=g.length;_<M;_++)t.update(g[_],34962)}}function d(m){const v=[],x=m.index,E=m.attributes.position;let g=0;if(x!==null){const A=x.array;g=x.version;for(let P=0,T=A.length;P<T;P+=3){const C=A[P+0],k=A[P+1],z=A[P+2];v.push(C,k,k,z,z,C)}}else{const A=E.array;g=E.version;for(let P=0,T=A.length/3-1;P<T;P+=3){const C=P+0,k=P+1,z=P+2;v.push(C,k,k,z,z,C)}}const _=new(dc(v)?bc:vc)(v,1);_.version=g;const M=a.get(m);M&&t.remove(M),a.set(m,_)}function f(m){const v=a.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&d(m)}else d(m);return a.get(m)}return{get:u,update:p,getWireframeAttribute:f}}function Gg(c,t,e,i){const o=i.isWebGL2;let a;function h(v){a=v}let u,p;function d(v){u=v.type,p=v.bytesPerElement}function f(v,x){c.drawElements(a,x,u,v*p),e.update(x,a,1)}function m(v,x,E){if(E===0)return;let g,_;if(o)g=c,_="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](a,x,u,v*p,E),e.update(x,a,E)}this.setMode=h,this.setIndex=d,this.render=f,this.renderInstances=m}function Hg(c){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,h,u){switch(e.calls++,h){case 4:e.triangles+=u*(a/3);break;case 1:e.lines+=u*(a/2);break;case 3:e.lines+=u*(a-1);break;case 2:e.lines+=u*a;break;case 0:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function Wg(c,t){return c[0]-t[0]}function jg(c,t){return Math.abs(t[1])-Math.abs(c[1])}function qg(c,t,e){const i={},o=new Float32Array(8),a=new WeakMap,h=new ne,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function p(d,f,m,v){const x=d.morphTargetInfluences;if(t.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let M=a.get(f);if(M===void 0||M.count!==_){let at=function(){B.dispose(),a.delete(f),f.removeEventListener("dispose",at)};var E=at;M!==void 0&&M.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,k=f.morphAttributes.color!==void 0,z=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let G=0;T===!0&&(G=1),C===!0&&(G=2),k===!0&&(G=3);let et=f.attributes.position.count*G,ot=1;et>t.maxTextureSize&&(ot=Math.ceil(et/t.maxTextureSize),et=t.maxTextureSize);const j=new Float32Array(et*ot*4*_),B=new gc(j,et,ot,_);B.type=Kn,B.needsUpdate=!0;const J=G*4;for(let tt=0;tt<_;tt++){const H=z[tt],ut=y[tt],ct=I[tt],xt=et*ot*4*tt;for(let q=0;q<H.count;q++){const Q=q*J;T===!0&&(h.fromBufferAttribute(H,q),j[xt+Q+0]=h.x,j[xt+Q+1]=h.y,j[xt+Q+2]=h.z,j[xt+Q+3]=0),C===!0&&(h.fromBufferAttribute(ut,q),j[xt+Q+4]=h.x,j[xt+Q+5]=h.y,j[xt+Q+6]=h.z,j[xt+Q+7]=0),k===!0&&(h.fromBufferAttribute(ct,q),j[xt+Q+8]=h.x,j[xt+Q+9]=h.y,j[xt+Q+10]=h.z,j[xt+Q+11]=ct.itemSize===4?h.w:1)}}M={count:_,texture:B,size:new Ft(et,ot)},a.set(f,M),f.addEventListener("dispose",at)}let A=0;for(let T=0;T<x.length;T++)A+=x[T];const P=f.morphTargetsRelative?1:1-A;v.getUniforms().setValue(c,"morphTargetBaseInfluence",P),v.getUniforms().setValue(c,"morphTargetInfluences",x),v.getUniforms().setValue(c,"morphTargetsTexture",M.texture,e),v.getUniforms().setValue(c,"morphTargetsTextureSize",M.size)}else{const g=x===void 0?0:x.length;let _=i[f.id];if(_===void 0||_.length!==g){_=[];for(let C=0;C<g;C++)_[C]=[C,0];i[f.id]=_}for(let C=0;C<g;C++){const k=_[C];k[0]=C,k[1]=x[C]}_.sort(jg);for(let C=0;C<8;C++)C<g&&_[C][1]?(u[C][0]=_[C][0],u[C][1]=_[C][1]):(u[C][0]=Number.MAX_SAFE_INTEGER,u[C][1]=0);u.sort(Wg);const M=f.morphAttributes.position,A=f.morphAttributes.normal;let P=0;for(let C=0;C<8;C++){const k=u[C],z=k[0],y=k[1];z!==Number.MAX_SAFE_INTEGER&&y?(M&&f.getAttribute("morphTarget"+C)!==M[z]&&f.setAttribute("morphTarget"+C,M[z]),A&&f.getAttribute("morphNormal"+C)!==A[z]&&f.setAttribute("morphNormal"+C,A[z]),o[C]=y,P+=y):(M&&f.hasAttribute("morphTarget"+C)===!0&&f.deleteAttribute("morphTarget"+C),A&&f.hasAttribute("morphNormal"+C)===!0&&f.deleteAttribute("morphNormal"+C),o[C]=0)}const T=f.morphTargetsRelative?1:1-P;v.getUniforms().setValue(c,"morphTargetBaseInfluence",T),v.getUniforms().setValue(c,"morphTargetInfluences",o)}}return{update:p}}function Xg(c,t,e,i){let o=new WeakMap;function a(p){const d=i.render.frame,f=p.geometry,m=t.get(p,f);return o.get(m)!==d&&(t.update(m),o.set(m,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",u)===!1&&p.addEventListener("dispose",u),e.update(p.instanceMatrix,34962),p.instanceColor!==null&&e.update(p.instanceColor,34962)),m}function h(){o=new WeakMap}function u(p){const d=p.target;d.removeEventListener("dispose",u),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:h}}const Mc=new Re,Sc=new gc,Ec=new Lp,Cc=new To,Ol=[],Ul=[],Vl=new Float32Array(16),zl=new Float32Array(9),Bl=new Float32Array(4);function Vi(c,t,e){const i=c[0];if(i<=0||i>0)return c;const o=t*e;let a=Ol[o];if(a===void 0&&(a=new Float32Array(o),Ol[o]=a),t!==0){i.toArray(a,0);for(let h=1,u=0;h!==t;++h)u+=e,c[h].toArray(a,u)}return a}function ge(c,t){if(c.length!==t.length)return!1;for(let e=0,i=c.length;e<i;e++)if(c[e]!==t[e])return!1;return!0}function _e(c,t){for(let e=0,i=t.length;e<i;e++)c[e]=t[e]}function rs(c,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let i=0;i!==t;++i)e[i]=c.allocateTextureUnit();return e}function Kg(c,t){const e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function Yg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;c.uniform2fv(this.addr,t),_e(e,t)}}function $g(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;c.uniform3fv(this.addr,t),_e(e,t)}}function Zg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;c.uniform4fv(this.addr,t),_e(e,t)}}function Jg(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Bl.set(i),c.uniformMatrix2fv(this.addr,!1,Bl),_e(e,i)}}function Qg(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;zl.set(i),c.uniformMatrix3fv(this.addr,!1,zl),_e(e,i)}}function t_(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Vl.set(i),c.uniformMatrix4fv(this.addr,!1,Vl),_e(e,i)}}function e_(c,t){const e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function n_(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;c.uniform2iv(this.addr,t),_e(e,t)}}function i_(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;c.uniform3iv(this.addr,t),_e(e,t)}}function r_(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;c.uniform4iv(this.addr,t),_e(e,t)}}function s_(c,t){const e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function o_(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;c.uniform2uiv(this.addr,t),_e(e,t)}}function a_(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;c.uniform3uiv(this.addr,t),_e(e,t)}}function l_(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;c.uniform4uiv(this.addr,t),_e(e,t)}}function c_(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTexture2D(t||Mc,o)}function u_(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||Ec,o)}function h_(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||Cc,o)}function d_(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||Sc,o)}function p_(c){switch(c){case 5126:return Kg;case 35664:return Yg;case 35665:return $g;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return s_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return d_}}function f_(c,t){c.uniform1fv(this.addr,t)}function m_(c,t){const e=Vi(t,this.size,2);c.uniform2fv(this.addr,e)}function g_(c,t){const e=Vi(t,this.size,3);c.uniform3fv(this.addr,e)}function __(c,t){const e=Vi(t,this.size,4);c.uniform4fv(this.addr,e)}function v_(c,t){const e=Vi(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function b_(c,t){const e=Vi(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function x_(c,t){const e=Vi(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function w_(c,t){c.uniform1iv(this.addr,t)}function y_(c,t){c.uniform2iv(this.addr,t)}function M_(c,t){c.uniform3iv(this.addr,t)}function S_(c,t){c.uniform4iv(this.addr,t)}function E_(c,t){c.uniform1uiv(this.addr,t)}function C_(c,t){c.uniform2uiv(this.addr,t)}function P_(c,t){c.uniform3uiv(this.addr,t)}function T_(c,t){c.uniform4uiv(this.addr,t)}function A_(c,t,e){const i=this.cache,o=t.length,a=rs(e,o);ge(i,a)||(c.uniform1iv(this.addr,a),_e(i,a));for(let h=0;h!==o;++h)e.setTexture2D(t[h]||Mc,a[h])}function L_(c,t,e){const i=this.cache,o=t.length,a=rs(e,o);ge(i,a)||(c.uniform1iv(this.addr,a),_e(i,a));for(let h=0;h!==o;++h)e.setTexture3D(t[h]||Ec,a[h])}function D_(c,t,e){const i=this.cache,o=t.length,a=rs(e,o);ge(i,a)||(c.uniform1iv(this.addr,a),_e(i,a));for(let h=0;h!==o;++h)e.setTextureCube(t[h]||Cc,a[h])}function R_(c,t,e){const i=this.cache,o=t.length,a=rs(e,o);ge(i,a)||(c.uniform1iv(this.addr,a),_e(i,a));for(let h=0;h!==o;++h)e.setTexture2DArray(t[h]||Sc,a[h])}function I_(c){switch(c){case 5126:return f_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return b_;case 35676:return x_;case 5124:case 35670:return w_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return E_;case 36294:return C_;case 36295:return P_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return R_}}class N_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=p_(e.type)}}class k_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=I_(e.type)}}class F_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let a=0,h=o.length;a!==h;++a){const u=o[a];u.setValue(t,e[u.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Gl(c,t){c.seq.push(t),c.map[t.id]=t}function O_(c,t,e){const i=c.name,o=i.length;for(uo.lastIndex=0;;){const a=uo.exec(i),h=uo.lastIndex;let u=a[1];const p=a[2]==="]",d=a[3];if(p&&(u=u|0),d===void 0||d==="["&&h+2===o){Gl(e,d===void 0?new N_(u,c,t):new k_(u,c,t));break}else{let m=e.map[u];m===void 0&&(m=new F_(u),Gl(e,m)),e=m}}}class es{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);O_(a,h,this)}}setValue(t,e,i,o){const a=this.map[e];a!==void 0&&a.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let a=0,h=e.length;a!==h;++a){const u=e[a],p=i[u.id];p.needsUpdate!==!1&&u.setValue(t,p.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,a=t.length;o!==a;++o){const h=t[o];h.id in e&&i.push(h)}return i}}function Hl(c,t,e){const i=c.createShader(t);return c.shaderSource(i,e),c.compileShader(i),i}let U_=0;function V_(c,t){const e=c.split(`
`),i=[],o=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let h=o;h<a;h++){const u=h+1;i.push(`${u===t?">":" "} ${u}: ${e[h]}`)}return i.join(`
`)}function z_(c){switch(c){case Jn:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Wl(c,t,e){const i=c.getShaderParameter(t,35713),o=c.getShaderInfoLog(t).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const h=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+V_(c.getShaderSource(t),h)}else return o}function B_(c,t){const e=z_(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function G_(c,t){let e;switch(t){case ip:e="Linear";break;case rp:e="Reinhard";break;case sp:e="OptimizedCineon";break;case op:e="ACESFilmic";break;case ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function H_(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function W_(c){const t=[];for(const e in c){const i=c[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function j_(c,t){const e={},i=c.getProgramParameter(t,35721);for(let o=0;o<i;o++){const a=c.getActiveAttrib(t,o),h=a.name;let u=1;a.type===35674&&(u=2),a.type===35675&&(u=3),a.type===35676&&(u=4),e[h]={type:a.type,location:c.getAttribLocation(t,h),locationSize:u}}return e}function hr(c){return c!==""}function jl(c,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(c){return c.replace(q_,X_)}function X_(c,t){const e=Vt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Mo(e)}const K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(c){return c.replace(K_,Y_)}function Y_(c,t,e,i){let o="";for(let a=parseInt(t);a<parseInt(e);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Kl(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $_(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===kd?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===ur&&(t="SHADOWMAP_TYPE_VSM"),t}function Z_(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Ni:case ki:t="ENVMAP_TYPE_CUBE";break;case ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J_(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case ki:t="ENVMAP_MODE_REFRACTION";break}return t}function Q_(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case lc:t="ENVMAP_BLENDING_MULTIPLY";break;case ep:t="ENVMAP_BLENDING_MIX";break;case np:t="ENVMAP_BLENDING_ADD";break}return t}function tv(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ev(c,t,e,i){const o=c.getContext(),a=e.defines;let h=e.vertexShader,u=e.fragmentShader;const p=$_(e),d=Z_(e),f=J_(e),m=Q_(e),v=tv(e),x=e.isWebGL2?"":H_(e),E=W_(a),g=o.createProgram();let _,M,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=[E].filter(hr).join(`
`),_.length>0&&(_+=`
`),M=[x,E].filter(hr).join(`
`),M.length>0&&(M+=`
`)):(_=[Kl(e),"#define SHADER_NAME "+e.shaderName,E,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),M=[x,Kl(e),"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Vt.tonemapping_pars_fragment:"",e.toneMapping!==_n?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.encodings_pars_fragment,B_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),h=Mo(h),h=jl(h,e),h=ql(h,e),u=Mo(u),u=jl(u,e),u=ql(u,e),h=Xl(h),u=Xl(u),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,M=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=A+_+h,T=A+M+u,C=Hl(o,35633,P),k=Hl(o,35632,T);if(o.attachShader(g,C),o.attachShader(g,k),e.index0AttributeName!==void 0?o.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g),c.debug.checkShaderErrors){const I=o.getProgramInfoLog(g).trim(),G=o.getShaderInfoLog(C).trim(),et=o.getShaderInfoLog(k).trim();let ot=!0,j=!0;if(o.getProgramParameter(g,35714)===!1){ot=!1;const B=Wl(o,C,"vertex"),J=Wl(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,35715)+`

Program Info Log: `+I+`
`+B+`
`+J)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(G===""||et==="")&&(j=!1);j&&(this.diagnostics={runnable:ot,programLog:I,vertexShader:{log:G,prefix:_},fragmentShader:{log:et,prefix:M}})}o.deleteShader(C),o.deleteShader(k);let z;this.getUniforms=function(){return z===void 0&&(z=new es(o,g)),z};let y;return this.getAttributes=function(){return y===void 0&&(y=j_(o,g)),y},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=k,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),a=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rv(t),e.set(t,i)),i}}class rv{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}}function sv(c,t,e,i,o,a,h){const u=new _c,p=new iv,d=[],f=o.isWebGL2,m=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y,I,G,et,ot){const j=et.fog,B=ot.geometry,J=y.isMeshStandardMaterial?et.environment:null,at=(y.isMeshStandardMaterial?e:t).get(y.envMap||J),tt=at&&at.mapping===ns?at.image.height:null,H=E[y.type];y.precision!==null&&(x=o.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=ut!==void 0?ut.length:0;let xt=0;B.morphAttributes.position!==void 0&&(xt=1),B.morphAttributes.normal!==void 0&&(xt=2),B.morphAttributes.color!==void 0&&(xt=3);let q,Q,nt,it;if(H){const Ot=nn[H];q=Ot.vertexShader,Q=Ot.fragmentShader}else q=y.vertexShader,Q=y.fragmentShader,p.update(y),nt=p.getVertexShaderID(y),it=p.getFragmentShaderID(y);const X=c.getRenderTarget(),Dt=y.alphaTest>0,wt=y.clearcoat>0,yt=y.iridescence>0;return{isWebGL2:f,shaderID:H,shaderName:y.type,vertexShader:q,fragmentShader:Q,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,instancing:ot.isInstancedMesh===!0,instancingColor:ot.isInstancedMesh===!0&&ot.instanceColor!==null,supportsVertexTextures:v,outputEncoding:X===null?c.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Jn,map:!!y.map,matcap:!!y.matcap,envMap:!!at,envMapMode:at&&at.mapping,envMapCubeUVHeight:tt,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Cp,tangentSpaceNormalMap:y.normalMapType===hc,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Qt,clearcoat:wt,clearcoatMap:wt&&!!y.clearcoatMap,clearcoatRoughnessMap:wt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:wt&&!!y.clearcoatNormalMap,iridescence:yt,iridescenceMap:yt&&!!y.iridescenceMap,iridescenceThicknessMap:yt&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ri,alphaMap:!!y.alphaMap,alphaTest:Dt,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!B.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!j,useFog:y.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:m,skinning:ot.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:xt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:y.dithering,shadowMapEnabled:c.shadowMap.enabled&&G.length>0,shadowMapType:c.shadowMap.type,toneMapping:y.toneMapped?c.toneMapping:_n,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===Be,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function _(y){const I=[];if(y.shaderID?I.push(y.shaderID):(I.push(y.customVertexShaderID),I.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)I.push(G),I.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(M(I,y),A(I,y),I.push(c.outputEncoding)),I.push(y.customProgramCacheKey),I.join()}function M(y,I){y.push(I.precision),y.push(I.outputEncoding),y.push(I.envMapMode),y.push(I.envMapCubeUVHeight),y.push(I.combine),y.push(I.vertexUvs),y.push(I.fogExp2),y.push(I.sizeAttenuation),y.push(I.morphTargetsCount),y.push(I.morphAttributeCount),y.push(I.numDirLights),y.push(I.numPointLights),y.push(I.numSpotLights),y.push(I.numSpotLightMaps),y.push(I.numHemiLights),y.push(I.numRectAreaLights),y.push(I.numDirLightShadows),y.push(I.numPointLightShadows),y.push(I.numSpotLightShadows),y.push(I.numSpotLightShadowsWithMaps),y.push(I.shadowMapType),y.push(I.toneMapping),y.push(I.numClippingPlanes),y.push(I.numClipIntersection),y.push(I.depthPacking)}function A(y,I){u.disableAll(),I.isWebGL2&&u.enable(0),I.supportsVertexTextures&&u.enable(1),I.instancing&&u.enable(2),I.instancingColor&&u.enable(3),I.map&&u.enable(4),I.matcap&&u.enable(5),I.envMap&&u.enable(6),I.lightMap&&u.enable(7),I.aoMap&&u.enable(8),I.emissiveMap&&u.enable(9),I.bumpMap&&u.enable(10),I.normalMap&&u.enable(11),I.objectSpaceNormalMap&&u.enable(12),I.tangentSpaceNormalMap&&u.enable(13),I.clearcoat&&u.enable(14),I.clearcoatMap&&u.enable(15),I.clearcoatRoughnessMap&&u.enable(16),I.clearcoatNormalMap&&u.enable(17),I.iridescence&&u.enable(18),I.iridescenceMap&&u.enable(19),I.iridescenceThicknessMap&&u.enable(20),I.displacementMap&&u.enable(21),I.specularMap&&u.enable(22),I.roughnessMap&&u.enable(23),I.metalnessMap&&u.enable(24),I.gradientMap&&u.enable(25),I.alphaMap&&u.enable(26),I.alphaTest&&u.enable(27),I.vertexColors&&u.enable(28),I.vertexAlphas&&u.enable(29),I.vertexUvs&&u.enable(30),I.vertexTangents&&u.enable(31),I.uvsVertexOnly&&u.enable(32),y.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.skinning&&u.enable(4),I.morphTargets&&u.enable(5),I.morphNormals&&u.enable(6),I.morphColors&&u.enable(7),I.premultipliedAlpha&&u.enable(8),I.shadowMapEnabled&&u.enable(9),I.physicallyCorrectLights&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.specularIntensityMap&&u.enable(15),I.specularColorMap&&u.enable(16),I.transmission&&u.enable(17),I.transmissionMap&&u.enable(18),I.thicknessMap&&u.enable(19),I.sheen&&u.enable(20),I.sheenColorMap&&u.enable(21),I.sheenRoughnessMap&&u.enable(22),I.decodeVideoTexture&&u.enable(23),I.opaque&&u.enable(24),y.push(u.mask)}function P(y){const I=E[y.type];let G;if(I){const et=nn[I];G=Hp.clone(et.uniforms)}else G=y.uniforms;return G}function T(y,I){let G;for(let et=0,ot=d.length;et<ot;et++){const j=d[et];if(j.cacheKey===I){G=j,++G.usedTimes;break}}return G===void 0&&(G=new ev(c,I,y,a),d.push(G)),G}function C(y){if(--y.usedTimes===0){const I=d.indexOf(y);d[I]=d[d.length-1],d.pop(),y.destroy()}}function k(y){p.remove(y)}function z(){p.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:P,acquireProgram:T,releaseProgram:C,releaseShaderCache:k,programs:d,dispose:z}}function ov(){let c=new WeakMap;function t(a){let h=c.get(a);return h===void 0&&(h={},c.set(a,h)),h}function e(a){c.delete(a)}function i(a,h,u){c.get(a)[h]=u}function o(){c=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function av(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function Yl(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function $l(){const c=[];let t=0;const e=[],i=[],o=[];function a(){t=0,e.length=0,i.length=0,o.length=0}function h(m,v,x,E,g,_){let M=c[t];return M===void 0?(M={id:m.id,object:m,geometry:v,material:x,groupOrder:E,renderOrder:m.renderOrder,z:g,group:_},c[t]=M):(M.id=m.id,M.object=m,M.geometry=v,M.material=x,M.groupOrder=E,M.renderOrder=m.renderOrder,M.z=g,M.group=_),t++,M}function u(m,v,x,E,g,_){const M=h(m,v,x,E,g,_);x.transmission>0?i.push(M):x.transparent===!0?o.push(M):e.push(M)}function p(m,v,x,E,g,_){const M=h(m,v,x,E,g,_);x.transmission>0?i.unshift(M):x.transparent===!0?o.unshift(M):e.unshift(M)}function d(m,v){e.length>1&&e.sort(m||av),i.length>1&&i.sort(v||Yl),o.length>1&&o.sort(v||Yl)}function f(){for(let m=t,v=c.length;m<v;m++){const x=c[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:o,init:a,push:u,unshift:p,finish:f,sort:d}}function lv(){let c=new WeakMap;function t(i,o){const a=c.get(i);let h;return a===void 0?(h=new $l,c.set(i,[h])):o>=a.length?(h=new $l,a.push(h)):h=a[o],h}function e(){c=new WeakMap}return{get:t,dispose:e}}function cv(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Jt};break;case"SpotLight":e={position:new V,direction:new V,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new V,halfWidth:new V,halfHeight:new V};break}return c[t.id]=e,e}}}function uv(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}let hv=0;function dv(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function pv(c,t){const e=new cv,i=uv(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)o.probe.push(new V);const a=new V,h=new pe,u=new pe;function p(f,m){let v=0,x=0,E=0;for(let et=0;et<9;et++)o.probe[et].set(0,0,0);let g=0,_=0,M=0,A=0,P=0,T=0,C=0,k=0,z=0,y=0;f.sort(dv);const I=m!==!0?Math.PI:1;for(let et=0,ot=f.length;et<ot;et++){const j=f[et],B=j.color,J=j.intensity,at=j.distance,tt=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)v+=B.r*J*I,x+=B.g*J*I,E+=B.b*J*I;else if(j.isLightProbe)for(let H=0;H<9;H++)o.probe[H].addScaledVector(j.sh.coefficients[H],J);else if(j.isDirectionalLight){const H=e.get(j);if(H.color.copy(j.color).multiplyScalar(j.intensity*I),j.castShadow){const ut=j.shadow,ct=i.get(j);ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,o.directionalShadow[g]=ct,o.directionalShadowMap[g]=tt,o.directionalShadowMatrix[g]=j.shadow.matrix,T++}o.directional[g]=H,g++}else if(j.isSpotLight){const H=e.get(j);H.position.setFromMatrixPosition(j.matrixWorld),H.color.copy(B).multiplyScalar(J*I),H.distance=at,H.coneCos=Math.cos(j.angle),H.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),H.decay=j.decay,o.spot[M]=H;const ut=j.shadow;if(j.map&&(o.spotLightMap[z]=j.map,z++,ut.updateMatrices(j),j.castShadow&&y++),o.spotLightMatrix[M]=ut.matrix,j.castShadow){const ct=i.get(j);ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,o.spotShadow[M]=ct,o.spotShadowMap[M]=tt,k++}M++}else if(j.isRectAreaLight){const H=e.get(j);H.color.copy(B).multiplyScalar(J),H.halfWidth.set(j.width*.5,0,0),H.halfHeight.set(0,j.height*.5,0),o.rectArea[A]=H,A++}else if(j.isPointLight){const H=e.get(j);if(H.color.copy(j.color).multiplyScalar(j.intensity*I),H.distance=j.distance,H.decay=j.decay,j.castShadow){const ut=j.shadow,ct=i.get(j);ct.shadowBias=ut.bias,ct.shadowNormalBias=ut.normalBias,ct.shadowRadius=ut.radius,ct.shadowMapSize=ut.mapSize,ct.shadowCameraNear=ut.camera.near,ct.shadowCameraFar=ut.camera.far,o.pointShadow[_]=ct,o.pointShadowMap[_]=tt,o.pointShadowMatrix[_]=j.shadow.matrix,C++}o.point[_]=H,_++}else if(j.isHemisphereLight){const H=e.get(j);H.skyColor.copy(j.color).multiplyScalar(J*I),H.groundColor.copy(j.groundColor).multiplyScalar(J*I),o.hemi[P]=H,P++}}A>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=dt.LTC_FLOAT_1,o.rectAreaLTC2=dt.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=dt.LTC_HALF_1,o.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=E;const G=o.hash;(G.directionalLength!==g||G.pointLength!==_||G.spotLength!==M||G.rectAreaLength!==A||G.hemiLength!==P||G.numDirectionalShadows!==T||G.numPointShadows!==C||G.numSpotShadows!==k||G.numSpotMaps!==z)&&(o.directional.length=g,o.spot.length=M,o.rectArea.length=A,o.point.length=_,o.hemi.length=P,o.directionalShadow.length=T,o.directionalShadowMap.length=T,o.pointShadow.length=C,o.pointShadowMap.length=C,o.spotShadow.length=k,o.spotShadowMap.length=k,o.directionalShadowMatrix.length=T,o.pointShadowMatrix.length=C,o.spotLightMatrix.length=k+z-y,o.spotLightMap.length=z,o.numSpotLightShadowsWithMaps=y,G.directionalLength=g,G.pointLength=_,G.spotLength=M,G.rectAreaLength=A,G.hemiLength=P,G.numDirectionalShadows=T,G.numPointShadows=C,G.numSpotShadows=k,G.numSpotMaps=z,o.version=hv++)}function d(f,m){let v=0,x=0,E=0,g=0,_=0;const M=m.matrixWorldInverse;for(let A=0,P=f.length;A<P;A++){const T=f[A];if(T.isDirectionalLight){const C=o.directional[v];C.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(M),v++}else if(T.isSpotLight){const C=o.spot[E];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(M),E++}else if(T.isRectAreaLight){const C=o.rectArea[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(M),u.identity(),h.copy(T.matrixWorld),h.premultiply(M),u.extractRotation(h),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),g++}else if(T.isPointLight){const C=o.point[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(M),x++}else if(T.isHemisphereLight){const C=o.hemi[_];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(M),_++}}}return{setup:p,setupView:d,state:o}}function Zl(c,t){const e=new pv(c,t),i=[],o=[];function a(){i.length=0,o.length=0}function h(m){i.push(m)}function u(m){o.push(m)}function p(m){e.setup(i,m)}function d(m){e.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:e},setupLights:p,setupLightsView:d,pushLight:h,pushShadow:u}}function fv(c,t){let e=new WeakMap;function i(a,h=0){const u=e.get(a);let p;return u===void 0?(p=new Zl(c,t),e.set(a,[p])):h>=u.length?(p=new Zl(c,t),u.push(p)):p=u[h],p}function o(){e=new WeakMap}return{get:i,dispose:o}}class mv extends vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gv extends vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bv(c,t,e){let i=new Ao;const o=new Ft,a=new Ft,h=new ne,u=new mv({depthPacking:Ep}),p=new gv,d={},f=e.maxTextureSize,m={[Ln]:Be,[Be]:Ln,[Tn]:Tn},v=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:_v,fragmentShader:vv}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Dn;E.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Je(E,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc,this.render=function(T,C,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const z=c.getRenderTarget(),y=c.getActiveCubeFace(),I=c.getActiveMipmapLevel(),G=c.state;G.setBlending(An),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let et=0,ot=T.length;et<ot;et++){const j=T[et],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const J=B.getFrameExtents();if(o.multiply(J),a.copy(B.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(a.x=Math.floor(f/J.x),o.x=a.x*J.x,B.mapSize.x=a.x),o.y>f&&(a.y=Math.floor(f/J.y),o.y=a.y*J.y,B.mapSize.y=a.y)),B.map===null){const tt=this.type!==ur?{minFilter:Te,magFilter:Te}:{};B.map=new Qn(o.x,o.y,tt),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}c.setRenderTarget(B.map),c.clear();const at=B.getViewportCount();for(let tt=0;tt<at;tt++){const H=B.getViewport(tt);h.set(a.x*H.x,a.y*H.y,a.x*H.z,a.y*H.w),G.viewport(h),B.updateMatrices(j,tt),i=B.getFrustum(),P(C,k,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===ur&&M(B,k),B.needsUpdate=!1}_.needsUpdate=!1,c.setRenderTarget(z,y,I)};function M(T,C){const k=t.update(g);v.defines.VSM_SAMPLES!==T.blurSamples&&(v.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qn(o.x,o.y)),v.uniforms.shadow_pass.value=T.map.texture,v.uniforms.resolution.value=T.mapSize,v.uniforms.radius.value=T.radius,c.setRenderTarget(T.mapPass),c.clear(),c.renderBufferDirect(C,null,k,v,g,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value=T.mapSize,x.uniforms.radius.value=T.radius,c.setRenderTarget(T.map),c.clear(),c.renderBufferDirect(C,null,k,x,g,null)}function A(T,C,k,z,y,I){let G=null;const et=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(et!==void 0)G=et;else if(G=k.isPointLight===!0?p:u,c.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const ot=G.uuid,j=C.uuid;let B=d[ot];B===void 0&&(B={},d[ot]=B);let J=B[j];J===void 0&&(J=G.clone(),B[j]=J),G=J}return G.visible=C.visible,G.wireframe=C.wireframe,I===ur?G.side=C.shadowSide!==null?C.shadowSide:C.side:G.side=C.shadowSide!==null?C.shadowSide:m[C.side],G.alphaMap=C.alphaMap,G.alphaTest=C.alphaTest,G.map=C.map,G.clipShadows=C.clipShadows,G.clippingPlanes=C.clippingPlanes,G.clipIntersection=C.clipIntersection,G.displacementMap=C.displacementMap,G.displacementScale=C.displacementScale,G.displacementBias=C.displacementBias,G.wireframeLinewidth=C.wireframeLinewidth,G.linewidth=C.linewidth,k.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(k.matrixWorld),G.nearDistance=z,G.farDistance=y),G}function P(T,C,k,z,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ur)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);const et=t.update(T),ot=T.material;if(Array.isArray(ot)){const j=et.groups;for(let B=0,J=j.length;B<J;B++){const at=j[B],tt=ot[at.materialIndex];if(tt&&tt.visible){const H=A(T,tt,z,k.near,k.far,y);c.renderBufferDirect(k,null,et,H,T,at)}}}else if(ot.visible){const j=A(T,ot,z,k.near,k.far,y);c.renderBufferDirect(k,null,et,j,T,null)}}const G=T.children;for(let et=0,ot=G.length;et<ot;et++)P(G[et],C,k,z,y)}}function xv(c,t,e){const i=e.isWebGL2;function o(){let N=!1;const Y=new ne;let rt=null;const vt=new ne(0,0,0,0);return{setMask:function(St){rt!==St&&!N&&(c.colorMask(St,St,St,St),rt=St)},setLocked:function(St){N=St},setClear:function(St,Xt,ce,ue,qe){qe===!0&&(St*=ue,Xt*=ue,ce*=ue),Y.set(St,Xt,ce,ue),vt.equals(Y)===!1&&(c.clearColor(St,Xt,ce,ue),vt.copy(Y))},reset:function(){N=!1,rt=null,vt.set(-1,0,0,0)}}}function a(){let N=!1,Y=null,rt=null,vt=null;return{setTest:function(St){St?Dt(2929):wt(2929)},setMask:function(St){Y!==St&&!N&&(c.depthMask(St),Y=St)},setFunc:function(St){if(rt!==St){switch(St){case Kd:c.depthFunc(512);break;case Yd:c.depthFunc(519);break;case $d:c.depthFunc(513);break;case go:c.depthFunc(515);break;case Zd:c.depthFunc(514);break;case Jd:c.depthFunc(518);break;case Qd:c.depthFunc(516);break;case tp:c.depthFunc(517);break;default:c.depthFunc(515)}rt=St}},setLocked:function(St){N=St},setClear:function(St){vt!==St&&(c.clearDepth(St),vt=St)},reset:function(){N=!1,Y=null,rt=null,vt=null}}}function h(){let N=!1,Y=null,rt=null,vt=null,St=null,Xt=null,ce=null,ue=null,qe=null;return{setTest:function(qt){N||(qt?Dt(2960):wt(2960))},setMask:function(qt){Y!==qt&&!N&&(c.stencilMask(qt),Y=qt)},setFunc:function(qt,Ne,ae){(rt!==qt||vt!==Ne||St!==ae)&&(c.stencilFunc(qt,Ne,ae),rt=qt,vt=Ne,St=ae)},setOp:function(qt,Ne,ae){(Xt!==qt||ce!==Ne||ue!==ae)&&(c.stencilOp(qt,Ne,ae),Xt=qt,ce=Ne,ue=ae)},setLocked:function(qt){N=qt},setClear:function(qt){qe!==qt&&(c.clearStencil(qt),qe=qt)},reset:function(){N=!1,Y=null,rt=null,vt=null,St=null,Xt=null,ce=null,ue=null,qe=null}}}const u=new o,p=new a,d=new h,f=new WeakMap,m=new WeakMap;let v={},x={},E=new WeakMap,g=[],_=null,M=!1,A=null,P=null,T=null,C=null,k=null,z=null,y=null,I=!1,G=null,et=null,ot=null,j=null,B=null;const J=c.getParameter(35661);let at=!1,tt=0;const H=c.getParameter(7938);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),at=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),at=tt>=2);let ut=null,ct={};const xt=c.getParameter(3088),q=c.getParameter(2978),Q=new ne().fromArray(xt),nt=new ne().fromArray(q);function it(N,Y,rt){const vt=new Uint8Array(4),St=c.createTexture();c.bindTexture(N,St),c.texParameteri(N,10241,9728),c.texParameteri(N,10240,9728);for(let Xt=0;Xt<rt;Xt++)c.texImage2D(Y+Xt,0,6408,1,1,0,6408,5121,vt);return St}const X={};X[3553]=it(3553,3553,1),X[34067]=it(34067,34069,6),u.setClear(0,0,0,1),p.setClear(1),d.setClear(0),Dt(2929),p.setFunc(go),Yt(!1),le(za),Dt(2884),oe(An);function Dt(N){v[N]!==!0&&(c.enable(N),v[N]=!0)}function wt(N){v[N]!==!1&&(c.disable(N),v[N]=!1)}function yt(N,Y){return x[N]!==Y?(c.bindFramebuffer(N,Y),x[N]=Y,i&&(N===36009&&(x[36160]=Y),N===36160&&(x[36009]=Y)),!0):!1}function mt(N,Y){let rt=g,vt=!1;if(N)if(rt=E.get(Y),rt===void 0&&(rt=[],E.set(Y,rt)),N.isWebGLMultipleRenderTargets){const St=N.texture;if(rt.length!==St.length||rt[0]!==36064){for(let Xt=0,ce=St.length;Xt<ce;Xt++)rt[Xt]=36064+Xt;rt.length=St.length,vt=!0}}else rt[0]!==36064&&(rt[0]=36064,vt=!0);else rt[0]!==1029&&(rt[0]=1029,vt=!0);vt&&(e.isWebGL2?c.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Ot(N){return _!==N?(c.useProgram(N),_=N,!0):!1}const Rt={[Li]:32774,[Od]:32778,[Ud]:32779};if(i)Rt[Wa]=32775,Rt[ja]=32776;else{const N=t.get("EXT_blend_minmax");N!==null&&(Rt[Wa]=N.MIN_EXT,Rt[ja]=N.MAX_EXT)}const Ct={[Vd]:0,[zd]:1,[Bd]:768,[oc]:770,[Xd]:776,[jd]:774,[Hd]:772,[Gd]:769,[ac]:771,[qd]:775,[Wd]:773};function oe(N,Y,rt,vt,St,Xt,ce,ue){if(N===An){M===!0&&(wt(3042),M=!1);return}if(M===!1&&(Dt(3042),M=!0),N!==Fd){if(N!==A||ue!==I){if((P!==Li||k!==Li)&&(c.blendEquation(32774),P=Li,k=Li),ue)switch(N){case Ri:c.blendFuncSeparate(1,771,1,771);break;case Ba:c.blendFunc(1,1);break;case Ga:c.blendFuncSeparate(0,769,0,1);break;case Ha:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ri:c.blendFuncSeparate(770,771,1,771);break;case Ba:c.blendFunc(770,1);break;case Ga:c.blendFuncSeparate(0,769,0,1);break;case Ha:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,C=null,z=null,y=null,A=N,I=ue}return}St=St||Y,Xt=Xt||rt,ce=ce||vt,(Y!==P||St!==k)&&(c.blendEquationSeparate(Rt[Y],Rt[St]),P=Y,k=St),(rt!==T||vt!==C||Xt!==z||ce!==y)&&(c.blendFuncSeparate(Ct[rt],Ct[vt],Ct[Xt],Ct[ce]),T=rt,C=vt,z=Xt,y=ce),A=N,I=!1}function se(N,Y){N.side===Tn?wt(2884):Dt(2884);let rt=N.side===Be;Y&&(rt=!rt),Yt(rt),N.blending===Ri&&N.transparent===!1?oe(An):oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),p.setFunc(N.depthFunc),p.setTest(N.depthTest),p.setMask(N.depthWrite),u.setMask(N.colorWrite);const vt=N.stencilWrite;d.setTest(vt),vt&&(d.setMask(N.stencilWriteMask),d.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),d.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Dt(32926):wt(32926)}function Yt(N){G!==N&&(N?c.frontFace(2304):c.frontFace(2305),G=N)}function le(N){N!==Id?(Dt(2884),N!==et&&(N===za?c.cullFace(1029):N===Nd?c.cullFace(1028):c.cullFace(1032))):wt(2884),et=N}function ie(N){N!==ot&&(at&&c.lineWidth(N),ot=N)}function jt(N,Y,rt){N?(Dt(32823),(j!==Y||B!==rt)&&(c.polygonOffset(Y,rt),j=Y,B=rt)):wt(32823)}function Ae(N){N?Dt(3089):wt(3089)}function we(N){N===void 0&&(N=33984+J-1),ut!==N&&(c.activeTexture(N),ut=N)}function L(N,Y,rt){rt===void 0&&(ut===null?rt=33984+J-1:rt=ut);let vt=ct[rt];vt===void 0&&(vt={type:void 0,texture:void 0},ct[rt]=vt),(vt.type!==N||vt.texture!==Y)&&(ut!==rt&&(c.activeTexture(rt),ut=rt),c.bindTexture(N,Y||X[N]),vt.type=N,vt.texture=Y)}function w(){const N=ct[ut];N!==void 0&&N.type!==void 0&&(c.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{c.compressedTexImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{c.compressedTexImage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{c.texSubImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{c.texSubImage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function R(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{c.texStorage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{c.texStorage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{c.texImage2D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{c.texImage3D.apply(c,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(N){Q.equals(N)===!1&&(c.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function bt(N){nt.equals(N)===!1&&(c.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}function It(N,Y){let rt=m.get(Y);rt===void 0&&(rt=new WeakMap,m.set(Y,rt));let vt=rt.get(N);vt===void 0&&(vt=c.getUniformBlockIndex(Y,N.name),rt.set(N,vt))}function Nt(N,Y){const vt=m.get(Y).get(N);f.get(Y)!==vt&&(c.uniformBlockBinding(Y,vt,N.__bindingPointIndex),f.set(Y,vt))}function Zt(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),i===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),v={},ut=null,ct={},x={},E=new WeakMap,g=[],_=null,M=!1,A=null,P=null,T=null,C=null,k=null,z=null,y=null,I=!1,G=null,et=null,ot=null,j=null,B=null,Q.set(0,0,c.canvas.width,c.canvas.height),nt.set(0,0,c.canvas.width,c.canvas.height),u.reset(),p.reset(),d.reset()}return{buffers:{color:u,depth:p,stencil:d},enable:Dt,disable:wt,bindFramebuffer:yt,drawBuffers:mt,useProgram:Ot,setBlending:oe,setMaterial:se,setFlipSided:Yt,setCullFace:le,setLineWidth:ie,setPolygonOffset:jt,setScissorTest:Ae,activeTexture:we,bindTexture:L,unbindTexture:w,compressedTexImage2D:K,compressedTexImage3D:lt,texImage2D:_t,texImage3D:pt,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:O,texStorage3D:gt,texSubImage2D:ht,texSubImage3D:ft,compressedTexSubImage2D:Tt,compressedTexSubImage3D:R,scissor:Mt,viewport:bt,reset:Zt}}function wv(c,t,e,i,o,a,h){const u=o.isWebGL2,p=o.maxTextures,d=o.maxCubemapSize,f=o.maxTextureSize,m=o.maxSamples,v=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,w){return M?new OffscreenCanvas(L,w):mr("canvas")}function P(L,w,K,lt){let ht=1;if((L.width>lt||L.height>lt)&&(ht=lt/Math.max(L.width,L.height)),ht<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ft=w?yo:Math.floor,Tt=ft(ht*L.width),R=ft(ht*L.height);g===void 0&&(g=A(Tt,R));const O=K?A(Tt,R):g;return O.width=Tt,O.height=R,O.getContext("2d").drawImage(L,0,0,Tt,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Tt+"x"+R+")."),O}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function T(L){return bl(L.width)&&bl(L.height)}function C(L){return u?!1:L.wrapS!==$e||L.wrapT!==$e||L.minFilter!==Te&&L.minFilter!==je}function k(L,w){return L.generateMipmaps&&w&&L.minFilter!==Te&&L.minFilter!==je}function z(L){c.generateMipmap(L)}function y(L,w,K,lt,ht=!1){if(u===!1)return w;if(L!==null){if(c[L]!==void 0)return c[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=w;return w===6403&&(K===5126&&(ft=33326),K===5131&&(ft=33325),K===5121&&(ft=33321)),w===33319&&(K===5126&&(ft=33328),K===5131&&(ft=33327),K===5121&&(ft=33323)),w===6408&&(K===5126&&(ft=34836),K===5131&&(ft=34842),K===5121&&(ft=lt===Qt&&ht===!1?35907:32856),K===32819&&(ft=32854),K===32820&&(ft=32855)),(ft===33325||ft===33326||ft===33327||ft===33328||ft===34842||ft===34836)&&t.get("EXT_color_buffer_float"),ft}function I(L,w,K){return k(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==Te&&L.minFilter!==je?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function G(L){return L===Te||L===qa||L===Is?9728:9729}function et(L){const w=L.target;w.removeEventListener("dispose",et),j(w),w.isVideoTexture&&E.delete(w)}function ot(L){const w=L.target;w.removeEventListener("dispose",ot),J(w)}function j(L){const w=i.get(L);if(w.__webglInit===void 0)return;const K=L.source,lt=_.get(K);if(lt){const ht=lt[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&B(L),Object.keys(lt).length===0&&_.delete(K)}i.remove(L)}function B(L){const w=i.get(L);c.deleteTexture(w.__webglTexture);const K=L.source,lt=_.get(K);delete lt[w.__cacheKey],h.memory.textures--}function J(L){const w=L.texture,K=i.get(L),lt=i.get(w);if(lt.__webglTexture!==void 0&&(c.deleteTexture(lt.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++)c.deleteFramebuffer(K.__webglFramebuffer[ht]),K.__webglDepthbuffer&&c.deleteRenderbuffer(K.__webglDepthbuffer[ht]);else{if(c.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&c.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&c.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ht=0;ht<K.__webglColorRenderbuffer.length;ht++)K.__webglColorRenderbuffer[ht]&&c.deleteRenderbuffer(K.__webglColorRenderbuffer[ht]);K.__webglDepthRenderbuffer&&c.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ht=0,ft=w.length;ht<ft;ht++){const Tt=i.get(w[ht]);Tt.__webglTexture&&(c.deleteTexture(Tt.__webglTexture),h.memory.textures--),i.remove(w[ht])}i.remove(w),i.remove(L)}let at=0;function tt(){at=0}function H(){const L=at;return L>=p&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+p),at+=1,L}function ut(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.encoding),w.join()}function ct(L,w){const K=i.get(L);if(L.isVideoTexture&&Ae(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const lt=L.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(K,L,w);return}}e.bindTexture(3553,K.__webglTexture,33984+w)}function xt(L,w){const K=i.get(L);if(L.version>0&&K.__version!==L.version){wt(K,L,w);return}e.bindTexture(35866,K.__webglTexture,33984+w)}function q(L,w){const K=i.get(L);if(L.version>0&&K.__version!==L.version){wt(K,L,w);return}e.bindTexture(32879,K.__webglTexture,33984+w)}function Q(L,w){const K=i.get(L);if(L.version>0&&K.__version!==L.version){yt(K,L,w);return}e.bindTexture(34067,K.__webglTexture,33984+w)}const nt={[bo]:10497,[$e]:33071,[xo]:33648},it={[Te]:9728,[qa]:9984,[Is]:9986,[je]:9729,[lp]:9985,[dr]:9987};function X(L,w,K){if(K?(c.texParameteri(L,10242,nt[w.wrapS]),c.texParameteri(L,10243,nt[w.wrapT]),(L===32879||L===35866)&&c.texParameteri(L,32882,nt[w.wrapR]),c.texParameteri(L,10240,it[w.magFilter]),c.texParameteri(L,10241,it[w.minFilter])):(c.texParameteri(L,10242,33071),c.texParameteri(L,10243,33071),(L===32879||L===35866)&&c.texParameteri(L,32882,33071),(w.wrapS!==$e||w.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(L,10240,G(w.magFilter)),c.texParameteri(L,10241,G(w.minFilter)),w.minFilter!==Te&&w.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const lt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Te||w.minFilter!==Is&&w.minFilter!==dr||w.type===Kn&&t.has("OES_texture_float_linear")===!1||u===!1&&w.type===pr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(c.texParameterf(L,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Dt(L,w){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",et));const lt=w.source;let ht=_.get(lt);ht===void 0&&(ht={},_.set(lt,ht));const ft=ut(w);if(ft!==L.__cacheKey){ht[ft]===void 0&&(ht[ft]={texture:c.createTexture(),usedTimes:0},h.memory.textures++,K=!0),ht[ft].usedTimes++;const Tt=ht[L.__cacheKey];Tt!==void 0&&(ht[L.__cacheKey].usedTimes--,Tt.usedTimes===0&&B(w)),L.__cacheKey=ft,L.__webglTexture=ht[ft].texture}return K}function wt(L,w,K){let lt=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(lt=35866),w.isData3DTexture&&(lt=32879);const ht=Dt(L,w),ft=w.source;e.bindTexture(lt,L.__webglTexture,33984+K);const Tt=i.get(ft);if(ft.version!==Tt.__version||ht===!0){e.activeTexture(33984+K),c.pixelStorei(37440,w.flipY),c.pixelStorei(37441,w.premultiplyAlpha),c.pixelStorei(3317,w.unpackAlignment),c.pixelStorei(37443,0);const R=C(w)&&T(w.image)===!1;let O=P(w.image,R,!1,f);O=we(w,O);const gt=T(O)||u,_t=a.convert(w.format,w.encoding);let pt=a.convert(w.type),Mt=y(w.internalFormat,_t,pt,w.encoding,w.isVideoTexture);X(lt,w,gt);let bt;const It=w.mipmaps,Nt=u&&w.isVideoTexture!==!0,Zt=Tt.__version===void 0||ht===!0,N=I(w,O,gt);if(w.isDepthTexture)Mt=6402,u?w.type===Kn?Mt=36012:w.type===Xn?Mt=33190:w.type===Ii?Mt=35056:Mt=33189:w.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Yn&&Mt===6402&&w.type!==uc&&w.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Xn,pt=a.convert(w.type)),w.format===Fi&&Mt===6402&&(Mt=34041,w.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ii,pt=a.convert(w.type))),Zt&&(Nt?e.texStorage2D(3553,1,Mt,O.width,O.height):e.texImage2D(3553,0,Mt,O.width,O.height,0,_t,pt,null));else if(w.isDataTexture)if(It.length>0&&gt){Nt&&Zt&&e.texStorage2D(3553,N,Mt,It[0].width,It[0].height);for(let Y=0,rt=It.length;Y<rt;Y++)bt=It[Y],Nt?e.texSubImage2D(3553,Y,0,0,bt.width,bt.height,_t,pt,bt.data):e.texImage2D(3553,Y,Mt,bt.width,bt.height,0,_t,pt,bt.data);w.generateMipmaps=!1}else Nt?(Zt&&e.texStorage2D(3553,N,Mt,O.width,O.height),e.texSubImage2D(3553,0,0,0,O.width,O.height,_t,pt,O.data)):e.texImage2D(3553,0,Mt,O.width,O.height,0,_t,pt,O.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&Zt&&e.texStorage3D(35866,N,Mt,It[0].width,It[0].height,O.depth);for(let Y=0,rt=It.length;Y<rt;Y++)bt=It[Y],w.format!==Ze?_t!==null?Nt?e.compressedTexSubImage3D(35866,Y,0,0,0,bt.width,bt.height,O.depth,_t,bt.data,0,0):e.compressedTexImage3D(35866,Y,Mt,bt.width,bt.height,O.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage3D(35866,Y,0,0,0,bt.width,bt.height,O.depth,_t,pt,bt.data):e.texImage3D(35866,Y,Mt,bt.width,bt.height,O.depth,0,_t,pt,bt.data)}else{Nt&&Zt&&e.texStorage2D(3553,N,Mt,It[0].width,It[0].height);for(let Y=0,rt=It.length;Y<rt;Y++)bt=It[Y],w.format!==Ze?_t!==null?Nt?e.compressedTexSubImage2D(3553,Y,0,0,bt.width,bt.height,_t,bt.data):e.compressedTexImage2D(3553,Y,Mt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage2D(3553,Y,0,0,bt.width,bt.height,_t,pt,bt.data):e.texImage2D(3553,Y,Mt,bt.width,bt.height,0,_t,pt,bt.data)}else if(w.isDataArrayTexture)Nt?(Zt&&e.texStorage3D(35866,N,Mt,O.width,O.height,O.depth),e.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,_t,pt,O.data)):e.texImage3D(35866,0,Mt,O.width,O.height,O.depth,0,_t,pt,O.data);else if(w.isData3DTexture)Nt?(Zt&&e.texStorage3D(32879,N,Mt,O.width,O.height,O.depth),e.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,_t,pt,O.data)):e.texImage3D(32879,0,Mt,O.width,O.height,O.depth,0,_t,pt,O.data);else if(w.isFramebufferTexture){if(Zt)if(Nt)e.texStorage2D(3553,N,Mt,O.width,O.height);else{let Y=O.width,rt=O.height;for(let vt=0;vt<N;vt++)e.texImage2D(3553,vt,Mt,Y,rt,0,_t,pt,null),Y>>=1,rt>>=1}}else if(It.length>0&&gt){Nt&&Zt&&e.texStorage2D(3553,N,Mt,It[0].width,It[0].height);for(let Y=0,rt=It.length;Y<rt;Y++)bt=It[Y],Nt?e.texSubImage2D(3553,Y,0,0,_t,pt,bt):e.texImage2D(3553,Y,Mt,_t,pt,bt);w.generateMipmaps=!1}else Nt?(Zt&&e.texStorage2D(3553,N,Mt,O.width,O.height),e.texSubImage2D(3553,0,0,0,_t,pt,O)):e.texImage2D(3553,0,Mt,_t,pt,O);k(w,gt)&&z(lt),Tt.__version=ft.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function yt(L,w,K){if(w.image.length!==6)return;const lt=Dt(L,w),ht=w.source;e.bindTexture(34067,L.__webglTexture,33984+K);const ft=i.get(ht);if(ht.version!==ft.__version||lt===!0){e.activeTexture(33984+K),c.pixelStorei(37440,w.flipY),c.pixelStorei(37441,w.premultiplyAlpha),c.pixelStorei(3317,w.unpackAlignment),c.pixelStorei(37443,0);const Tt=w.isCompressedTexture||w.image[0].isCompressedTexture,R=w.image[0]&&w.image[0].isDataTexture,O=[];for(let Y=0;Y<6;Y++)!Tt&&!R?O[Y]=P(w.image[Y],!1,!0,d):O[Y]=R?w.image[Y].image:w.image[Y],O[Y]=we(w,O[Y]);const gt=O[0],_t=T(gt)||u,pt=a.convert(w.format,w.encoding),Mt=a.convert(w.type),bt=y(w.internalFormat,pt,Mt,w.encoding),It=u&&w.isVideoTexture!==!0,Nt=ft.__version===void 0||lt===!0;let Zt=I(w,gt,_t);X(34067,w,_t);let N;if(Tt){It&&Nt&&e.texStorage2D(34067,Zt,bt,gt.width,gt.height);for(let Y=0;Y<6;Y++){N=O[Y].mipmaps;for(let rt=0;rt<N.length;rt++){const vt=N[rt];w.format!==Ze?pt!==null?It?e.compressedTexSubImage2D(34069+Y,rt,0,0,vt.width,vt.height,pt,vt.data):e.compressedTexImage2D(34069+Y,rt,bt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(34069+Y,rt,0,0,vt.width,vt.height,pt,Mt,vt.data):e.texImage2D(34069+Y,rt,bt,vt.width,vt.height,0,pt,Mt,vt.data)}}}else{N=w.mipmaps,It&&Nt&&(N.length>0&&Zt++,e.texStorage2D(34067,Zt,bt,O[0].width,O[0].height));for(let Y=0;Y<6;Y++)if(R){It?e.texSubImage2D(34069+Y,0,0,0,O[Y].width,O[Y].height,pt,Mt,O[Y].data):e.texImage2D(34069+Y,0,bt,O[Y].width,O[Y].height,0,pt,Mt,O[Y].data);for(let rt=0;rt<N.length;rt++){const St=N[rt].image[Y].image;It?e.texSubImage2D(34069+Y,rt+1,0,0,St.width,St.height,pt,Mt,St.data):e.texImage2D(34069+Y,rt+1,bt,St.width,St.height,0,pt,Mt,St.data)}}else{It?e.texSubImage2D(34069+Y,0,0,0,pt,Mt,O[Y]):e.texImage2D(34069+Y,0,bt,pt,Mt,O[Y]);for(let rt=0;rt<N.length;rt++){const vt=N[rt];It?e.texSubImage2D(34069+Y,rt+1,0,0,pt,Mt,vt.image[Y]):e.texImage2D(34069+Y,rt+1,bt,pt,Mt,vt.image[Y])}}}k(w,_t)&&z(34067),ft.__version=ht.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function mt(L,w,K,lt,ht){const ft=a.convert(K.format,K.encoding),Tt=a.convert(K.type),R=y(K.internalFormat,ft,Tt,K.encoding);i.get(w).__hasExternalTextures||(ht===32879||ht===35866?e.texImage3D(ht,0,R,w.width,w.height,w.depth,0,ft,Tt,null):e.texImage2D(ht,0,R,w.width,w.height,0,ft,Tt,null)),e.bindFramebuffer(36160,L),jt(w)?v.framebufferTexture2DMultisampleEXT(36160,lt,ht,i.get(K).__webglTexture,0,ie(w)):(ht===3553||ht>=34069&&ht<=34074)&&c.framebufferTexture2D(36160,lt,ht,i.get(K).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ot(L,w,K){if(c.bindRenderbuffer(36161,L),w.depthBuffer&&!w.stencilBuffer){let lt=33189;if(K||jt(w)){const ht=w.depthTexture;ht&&ht.isDepthTexture&&(ht.type===Kn?lt=36012:ht.type===Xn&&(lt=33190));const ft=ie(w);jt(w)?v.renderbufferStorageMultisampleEXT(36161,ft,lt,w.width,w.height):c.renderbufferStorageMultisample(36161,ft,lt,w.width,w.height)}else c.renderbufferStorage(36161,lt,w.width,w.height);c.framebufferRenderbuffer(36160,36096,36161,L)}else if(w.depthBuffer&&w.stencilBuffer){const lt=ie(w);K&&jt(w)===!1?c.renderbufferStorageMultisample(36161,lt,35056,w.width,w.height):jt(w)?v.renderbufferStorageMultisampleEXT(36161,lt,35056,w.width,w.height):c.renderbufferStorage(36161,34041,w.width,w.height),c.framebufferRenderbuffer(36160,33306,36161,L)}else{const lt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ht=0;ht<lt.length;ht++){const ft=lt[ht],Tt=a.convert(ft.format,ft.encoding),R=a.convert(ft.type),O=y(ft.internalFormat,Tt,R,ft.encoding),gt=ie(w);K&&jt(w)===!1?c.renderbufferStorageMultisample(36161,gt,O,w.width,w.height):jt(w)?v.renderbufferStorageMultisampleEXT(36161,gt,O,w.width,w.height):c.renderbufferStorage(36161,O,w.width,w.height)}}c.bindRenderbuffer(36161,null)}function Rt(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ct(w.depthTexture,0);const lt=i.get(w.depthTexture).__webglTexture,ht=ie(w);if(w.depthTexture.format===Yn)jt(w)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,lt,0,ht):c.framebufferTexture2D(36160,36096,3553,lt,0);else if(w.depthTexture.format===Fi)jt(w)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,lt,0,ht):c.framebufferTexture2D(36160,33306,3553,lt,0);else throw new Error("Unknown depthTexture format")}function Ct(L){const w=i.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Rt(w.__webglFramebuffer,L)}else if(K){w.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(36160,w.__webglFramebuffer[lt]),w.__webglDepthbuffer[lt]=c.createRenderbuffer(),Ot(w.__webglDepthbuffer[lt],L,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=c.createRenderbuffer(),Ot(w.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function oe(L,w,K){const lt=i.get(L);w!==void 0&&mt(lt.__webglFramebuffer,L,L.texture,36064,3553),K!==void 0&&Ct(L)}function se(L){const w=L.texture,K=i.get(L),lt=i.get(w);L.addEventListener("dispose",ot),L.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=c.createTexture()),lt.__version=w.version,h.memory.textures++);const ht=L.isWebGLCubeRenderTarget===!0,ft=L.isWebGLMultipleRenderTargets===!0,Tt=T(L)||u;if(ht){K.__webglFramebuffer=[];for(let R=0;R<6;R++)K.__webglFramebuffer[R]=c.createFramebuffer()}else{if(K.__webglFramebuffer=c.createFramebuffer(),ft)if(o.drawBuffers){const R=L.texture;for(let O=0,gt=R.length;O<gt;O++){const _t=i.get(R[O]);_t.__webglTexture===void 0&&(_t.__webglTexture=c.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&L.samples>0&&jt(L)===!1){const R=ft?w:[w];K.__webglMultisampledFramebuffer=c.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,K.__webglMultisampledFramebuffer);for(let O=0;O<R.length;O++){const gt=R[O];K.__webglColorRenderbuffer[O]=c.createRenderbuffer(),c.bindRenderbuffer(36161,K.__webglColorRenderbuffer[O]);const _t=a.convert(gt.format,gt.encoding),pt=a.convert(gt.type),Mt=y(gt.internalFormat,_t,pt,gt.encoding,L.isXRRenderTarget===!0),bt=ie(L);c.renderbufferStorageMultisample(36161,bt,Mt,L.width,L.height),c.framebufferRenderbuffer(36160,36064+O,36161,K.__webglColorRenderbuffer[O])}c.bindRenderbuffer(36161,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=c.createRenderbuffer(),Ot(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(ht){e.bindTexture(34067,lt.__webglTexture),X(34067,w,Tt);for(let R=0;R<6;R++)mt(K.__webglFramebuffer[R],L,w,36064,34069+R);k(w,Tt)&&z(34067),e.unbindTexture()}else if(ft){const R=L.texture;for(let O=0,gt=R.length;O<gt;O++){const _t=R[O],pt=i.get(_t);e.bindTexture(3553,pt.__webglTexture),X(3553,_t,Tt),mt(K.__webglFramebuffer,L,_t,36064+O,3553),k(_t,Tt)&&z(3553)}e.unbindTexture()}else{let R=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(u?R=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(R,lt.__webglTexture),X(R,w,Tt),mt(K.__webglFramebuffer,L,w,36064,R),k(w,Tt)&&z(R),e.unbindTexture()}L.depthBuffer&&Ct(L)}function Yt(L){const w=T(L)||u,K=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let lt=0,ht=K.length;lt<ht;lt++){const ft=K[lt];if(k(ft,w)){const Tt=L.isWebGLCubeRenderTarget?34067:3553,R=i.get(ft).__webglTexture;e.bindTexture(Tt,R),z(Tt),e.unbindTexture()}}}function le(L){if(u&&L.samples>0&&jt(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],K=L.width,lt=L.height;let ht=16384;const ft=[],Tt=L.stencilBuffer?33306:36096,R=i.get(L),O=L.isWebGLMultipleRenderTargets===!0;if(O)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+gt,36161,null),e.bindFramebuffer(36160,R.__webglFramebuffer),c.framebufferTexture2D(36009,36064+gt,3553,null,0);e.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,R.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){ft.push(36064+gt),L.depthBuffer&&ft.push(Tt);const _t=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(_t===!1&&(L.depthBuffer&&(ht|=256),L.stencilBuffer&&(ht|=1024)),O&&c.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[gt]),_t===!0&&(c.invalidateFramebuffer(36008,[Tt]),c.invalidateFramebuffer(36009,[Tt])),O){const pt=i.get(w[gt]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,pt,0)}c.blitFramebuffer(0,0,K,lt,0,0,K,lt,ht,9728),x&&c.invalidateFramebuffer(36008,ft)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),O)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+gt,36161,R.__webglColorRenderbuffer[gt]);const _t=i.get(w[gt]).__webglTexture;e.bindFramebuffer(36160,R.__webglFramebuffer),c.framebufferTexture2D(36009,36064+gt,3553,_t,0)}e.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function ie(L){return Math.min(m,L.samples)}function jt(L){const w=i.get(L);return u&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ae(L){const w=h.render.frame;E.get(L)!==w&&(E.set(L,w),L.update())}function we(L,w){const K=L.encoding,lt=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===wo||K!==Jn&&(K===Qt?u===!1?t.has("EXT_sRGB")===!0&&lt===Ze?(L.format=wo,L.minFilter=je,L.generateMipmaps=!1):w=fc.sRGBToLinear(w):(lt!==Ze||ht!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",K)),w}this.allocateTextureUnit=H,this.resetTextureUnits=tt,this.setTexture2D=ct,this.setTexture2DArray=xt,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=oe,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=jt}function yv(c,t,e){const i=e.isWebGL2;function o(a,h=null){let u;if(a===Zn)return 5121;if(a===dp)return 32819;if(a===pp)return 32820;if(a===cp)return 5120;if(a===up)return 5122;if(a===uc)return 5123;if(a===hp)return 5124;if(a===Xn)return 5125;if(a===Kn)return 5126;if(a===pr)return i?5131:(u=t.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===fp)return 6406;if(a===Ze)return 6408;if(a===mp)return 6409;if(a===gp)return 6410;if(a===Yn)return 6402;if(a===Fi)return 34041;if(a===wo)return u=t.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===_p)return 6403;if(a===vp)return 36244;if(a===bp)return 33319;if(a===xp)return 33320;if(a===wp)return 36249;if(a===Ns||a===ks||a===Fs||a===Os)if(h===Qt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Ns)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ks)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fs)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Os)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Ns)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ks)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fs)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Os)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Xa||a===Ka||a===Ya||a===$a)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Xa)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ka)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ya)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$a)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===yp)return u=t.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Za||a===Ja)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Za)return h===Qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Ja)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Qa||a===tl||a===el||a===nl||a===il||a===rl||a===sl||a===ol||a===al||a===ll||a===cl||a===ul||a===hl||a===dl)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Qa)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===tl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===el)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===il)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===rl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===sl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ol)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===al)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ll)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ul)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===hl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===dl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Us)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Us)return h===Qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Mp||a===pl||a===fl||a===ml)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Us)return u.COMPRESSED_RED_RGTC1_EXT;if(a===pl)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===fl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ml)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ii?i?34042:(u=t.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):c[a]!==void 0?c[a]:null}return{convert:o}}class Mv extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qr extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,a=null,h=null;const u=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,i),M=this._getHandJoint(d,g);_!==null&&(M.matrix.fromArray(_.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.jointRadius=_.radius),M.visible=_!==null}const f=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=f.position.distanceTo(m.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));u!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return u!==null&&(u.visible=o!==null),p!==null&&(p.visible=a!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ev extends Re{constructor(t,e,i,o,a,h,u,p,d,f){if(f=f!==void 0?f:Yn,f!==Yn&&f!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Yn&&(i=Xn),i===void 0&&f===Fi&&(i=Ii),super(null,o,a,h,u,p,f,i,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:Te,this.minFilter=p!==void 0?p:Te,this.flipY=!1,this.generateMipmaps=!1}}class Cv extends ni{constructor(t,e){super();const i=this;let o=null,a=1,h=null,u="local-floor",p=1,d=null,f=null,m=null,v=null,x=null,E=null;const g=e.getContextAttributes();let _=null,M=null;const A=[],P=[],T=new Set,C=new Map,k=new Ve;k.layers.enable(1),k.viewport=new ne;const z=new Ve;z.layers.enable(2),z.viewport=new ne;const y=[k,z],I=new Mv;I.layers.enable(1),I.layers.enable(2);let G=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=A[q];return Q===void 0&&(Q=new ho,A[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=A[q];return Q===void 0&&(Q=new ho,A[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=A[q];return Q===void 0&&(Q=new ho,A[q]=Q),Q.getHandSpace()};function ot(q){const Q=P.indexOf(q.inputSource);if(Q===-1)return;const nt=A[Q];nt!==void 0&&nt.dispatchEvent({type:q.type,data:q.inputSource})}function j(){o.removeEventListener("select",ot),o.removeEventListener("selectstart",ot),o.removeEventListener("selectend",ot),o.removeEventListener("squeeze",ot),o.removeEventListener("squeezestart",ot),o.removeEventListener("squeezeend",ot),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",B);for(let q=0;q<A.length;q++){const Q=P[q];Q!==null&&(P[q]=null,A[q].disconnect(Q))}G=null,et=null,t.setRenderTarget(_),x=null,v=null,m=null,o=null,M=null,xt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(_=t.getRenderTarget(),o.addEventListener("select",ot),o.addEventListener("selectstart",ot),o.addEventListener("selectend",ot),o.addEventListener("squeeze",ot),o.addEventListener("squeezestart",ot),o.addEventListener("squeezeend",ot),o.addEventListener("end",j),o.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:o.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,e,Q),o.updateRenderState({baseLayer:x}),M=new Qn(x.framebufferWidth,x.framebufferHeight,{format:Ze,type:Zn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let Q=null,nt=null,it=null;g.depth&&(it=g.stencil?35056:33190,Q=g.stencil?Fi:Yn,nt=g.stencil?Ii:Xn);const X={colorFormat:32856,depthFormat:it,scaleFactor:a};m=new XRWebGLBinding(o,e),v=m.createProjectionLayer(X),o.updateRenderState({layers:[v]}),M=new Qn(v.textureWidth,v.textureHeight,{format:Ze,type:Zn,depthTexture:new Ev(v.textureWidth,v.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const Dt=t.properties.get(M);Dt.__ignoreDepthValues=v.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(p),d=null,h=await o.requestReferenceSpace(u),xt.setContext(o),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(q){for(let Q=0;Q<q.removed.length;Q++){const nt=q.removed[Q],it=P.indexOf(nt);it>=0&&(P[it]=null,A[it].disconnect(nt))}for(let Q=0;Q<q.added.length;Q++){const nt=q.added[Q];let it=P.indexOf(nt);if(it===-1){for(let Dt=0;Dt<A.length;Dt++)if(Dt>=P.length){P.push(nt),it=Dt;break}else if(P[Dt]===null){P[Dt]=nt,it=Dt;break}if(it===-1)break}const X=A[it];X&&X.connect(nt)}}const J=new V,at=new V;function tt(q,Q,nt){J.setFromMatrixPosition(Q.matrixWorld),at.setFromMatrixPosition(nt.matrixWorld);const it=J.distanceTo(at),X=Q.projectionMatrix.elements,Dt=nt.projectionMatrix.elements,wt=X[14]/(X[10]-1),yt=X[14]/(X[10]+1),mt=(X[9]+1)/X[5],Ot=(X[9]-1)/X[5],Rt=(X[8]-1)/X[0],Ct=(Dt[8]+1)/Dt[0],oe=wt*Rt,se=wt*Ct,Yt=it/(-Rt+Ct),le=Yt*-Rt;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const ie=wt+Yt,jt=yt+Yt,Ae=oe-le,we=se+(it-le),L=mt*yt/jt*ie,w=Ot*yt/jt*ie;q.projectionMatrix.makePerspective(Ae,we,L,w,ie,jt)}function H(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;I.near=z.near=k.near=q.near,I.far=z.far=k.far=q.far,(G!==I.near||et!==I.far)&&(o.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,et=I.far);const Q=q.parent,nt=I.cameras;H(I,Q);for(let X=0;X<nt.length;X++)H(nt[X],Q);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),q.matrix.copy(I.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale);const it=q.children;for(let X=0,Dt=it.length;X<Dt;X++)it[X].updateMatrixWorld(!0);nt.length===2?tt(I,k,z):I.projectionMatrix.copy(k.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(q){p=q,v!==null&&(v.fixedFoveation=q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=q)},this.getPlanes=function(){return T};let ut=null;function ct(q,Q){if(f=Q.getViewerPose(d||h),E=Q,f!==null){const nt=f.views;x!==null&&(t.setRenderTargetFramebuffer(M,x.framebuffer),t.setRenderTarget(M));let it=!1;nt.length!==I.cameras.length&&(I.cameras.length=0,it=!0);for(let X=0;X<nt.length;X++){const Dt=nt[X];let wt=null;if(x!==null)wt=x.getViewport(Dt);else{const mt=m.getViewSubImage(v,Dt);wt=mt.viewport,X===0&&(t.setRenderTargetTextures(M,mt.colorTexture,v.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(M))}let yt=y[X];yt===void 0&&(yt=new Ve,yt.layers.enable(X),yt.viewport=new ne,y[X]=yt),yt.matrix.fromArray(Dt.transform.matrix),yt.projectionMatrix.fromArray(Dt.projectionMatrix),yt.viewport.set(wt.x,wt.y,wt.width,wt.height),X===0&&I.matrix.copy(yt.matrix),it===!0&&I.cameras.push(yt)}}for(let nt=0;nt<A.length;nt++){const it=P[nt],X=A[nt];it!==null&&X!==void 0&&X.update(it,Q,d||h)}if(ut&&ut(q,Q),Q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let nt=null;for(const it of T)Q.detectedPlanes.has(it)||(nt===null&&(nt=[]),nt.push(it));if(nt!==null)for(const it of nt)T.delete(it),C.delete(it),i.dispatchEvent({type:"planeremoved",data:it});for(const it of Q.detectedPlanes)if(!T.has(it))T.add(it),C.set(it,Q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:it});else{const X=C.get(it);it.lastChangedTime>X&&(C.set(it,it.lastChangedTime),i.dispatchEvent({type:"planechanged",data:it}))}}E=null}const xt=new yc;xt.setAnimationLoop(ct),this.setAnimationLoop=function(q){ut=q},this.dispose=function(){}}}function Pv(c,t){function e(g,_){_.color.getRGB(g.fogColor.value,xc(c)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function i(g,_,M,A,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(g,_):_.isMeshToonMaterial?(o(g,_),f(g,_)):_.isMeshPhongMaterial?(o(g,_),d(g,_)):_.isMeshStandardMaterial?(o(g,_),m(g,_),_.isMeshPhysicalMaterial&&v(g,_,P)):_.isMeshMatcapMaterial?(o(g,_),x(g,_)):_.isMeshDepthMaterial?o(g,_):_.isMeshDistanceMaterial?(o(g,_),E(g,_)):_.isMeshNormalMaterial?o(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&h(g,_)):_.isPointsMaterial?u(g,_,M,A):_.isSpriteMaterial?p(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.bumpMap&&(g.bumpMap.value=_.bumpMap,g.bumpScale.value=_.bumpScale,_.side===Be&&(g.bumpScale.value*=-1)),_.displacementMap&&(g.displacementMap.value=_.displacementMap,g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap),_.normalMap&&(g.normalMap.value=_.normalMap,g.normalScale.value.copy(_.normalScale),_.side===Be&&g.normalScale.value.negate()),_.specularMap&&(g.specularMap.value=_.specularMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const M=t.get(_).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const T=c.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*T}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity);let A;_.map?A=_.map:_.specularMap?A=_.specularMap:_.displacementMap?A=_.displacementMap:_.normalMap?A=_.normalMap:_.bumpMap?A=_.bumpMap:_.roughnessMap?A=_.roughnessMap:_.metalnessMap?A=_.metalnessMap:_.alphaMap?A=_.alphaMap:_.emissiveMap?A=_.emissiveMap:_.clearcoatMap?A=_.clearcoatMap:_.clearcoatNormalMap?A=_.clearcoatNormalMap:_.clearcoatRoughnessMap?A=_.clearcoatRoughnessMap:_.iridescenceMap?A=_.iridescenceMap:_.iridescenceThicknessMap?A=_.iridescenceThicknessMap:_.specularIntensityMap?A=_.specularIntensityMap:_.specularColorMap?A=_.specularColorMap:_.transmissionMap?A=_.transmissionMap:_.thicknessMap?A=_.thicknessMap:_.sheenColorMap?A=_.sheenColorMap:_.sheenRoughnessMap&&(A=_.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix));let P;_.aoMap?P=_.aoMap:_.lightMap&&(P=_.lightMap),P!==void 0&&(P.isWebGLRenderTarget&&(P=P.texture),P.matrixAutoUpdate===!0&&P.updateMatrix(),g.uv2Transform.value.copy(P.matrix))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity}function h(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function u(g,_,M,A){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*M,g.scale.value=A*.5,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let P;_.map?P=_.map:_.alphaMap&&(P=_.alphaMap),P!==void 0&&(P.matrixAutoUpdate===!0&&P.updateMatrix(),g.uvTransform.value.copy(P.matrix))}function p(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let M;_.map?M=_.map:_.alphaMap&&(M=_.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function d(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function m(g,_){g.roughness.value=_.roughness,g.metalness.value=_.metalness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap),t.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function v(g,_,M){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),g.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===Be&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap)}function x(g,_){_.matcap&&(g.matcap.value=_.matcap)}function E(g,_){g.referencePosition.value.copy(_.referencePosition),g.nearDistance.value=_.nearDistance,g.farDistance.value=_.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function Tv(c,t,e,i){let o={},a={},h=[];const u=e.isWebGL2?c.getParameter(35375):0;function p(A,P){const T=P.program;i.uniformBlockBinding(A,T)}function d(A,P){let T=o[A.id];T===void 0&&(E(A),T=f(A),o[A.id]=T,A.addEventListener("dispose",_));const C=P.program;i.updateUBOMapping(A,C);const k=t.render.frame;a[A.id]!==k&&(v(A),a[A.id]=k)}function f(A){const P=m();A.__bindingPointIndex=P;const T=c.createBuffer(),C=A.__size,k=A.usage;return c.bindBuffer(35345,T),c.bufferData(35345,C,k),c.bindBuffer(35345,null),c.bindBufferBase(35345,P,T),T}function m(){for(let A=0;A<u;A++)if(h.indexOf(A)===-1)return h.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const P=o[A.id],T=A.uniforms,C=A.__cache;c.bindBuffer(35345,P);for(let k=0,z=T.length;k<z;k++){const y=T[k];if(x(y,k,C)===!0){const I=y.__offset,G=Array.isArray(y.value)?y.value:[y.value];let et=0;for(let ot=0;ot<G.length;ot++){const j=G[ot],B=g(j);typeof j=="number"?(y.__data[0]=j,c.bufferSubData(35345,I+et,y.__data)):j.isMatrix3?(y.__data[0]=j.elements[0],y.__data[1]=j.elements[1],y.__data[2]=j.elements[2],y.__data[3]=j.elements[0],y.__data[4]=j.elements[3],y.__data[5]=j.elements[4],y.__data[6]=j.elements[5],y.__data[7]=j.elements[0],y.__data[8]=j.elements[6],y.__data[9]=j.elements[7],y.__data[10]=j.elements[8],y.__data[11]=j.elements[0]):(j.toArray(y.__data,et),et+=B.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,I,y.__data)}}c.bindBuffer(35345,null)}function x(A,P,T){const C=A.value;if(T[P]===void 0){if(typeof C=="number")T[P]=C;else{const k=Array.isArray(C)?C:[C],z=[];for(let y=0;y<k.length;y++)z.push(k[y].clone());T[P]=z}return!0}else if(typeof C=="number"){if(T[P]!==C)return T[P]=C,!0}else{const k=Array.isArray(T[P])?T[P]:[T[P]],z=Array.isArray(C)?C:[C];for(let y=0;y<k.length;y++){const I=k[y];if(I.equals(z[y])===!1)return I.copy(z[y]),!0}}return!1}function E(A){const P=A.uniforms;let T=0;const C=16;let k=0;for(let z=0,y=P.length;z<y;z++){const I=P[z],G={boundary:0,storage:0},et=Array.isArray(I.value)?I.value:[I.value];for(let ot=0,j=et.length;ot<j;ot++){const B=et[ot],J=g(B);G.boundary+=J.boundary,G.storage+=J.storage}if(I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,z>0){k=T%C;const ot=C-k;k!==0&&ot-G.boundary<0&&(T+=C-k,I.__offset=T)}T+=G.storage}return k=T%C,k>0&&(T+=C-k),A.__size=T,A.__cache={},this}function g(A){const P={boundary:0,storage:0};return typeof A=="number"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),P}function _(A){const P=A.target;P.removeEventListener("dispose",_);const T=h.indexOf(P.__bindingPointIndex);h.splice(T,1),c.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function M(){for(const A in o)c.deleteBuffer(o[A]);h=[],o={},a={}}return{bind:p,update:d,dispose:M}}function Av(){const c=mr("canvas");return c.style.display="block",c}function Pc(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:Av(),e=c.context!==void 0?c.context:null,i=c.depth!==void 0?c.depth:!0,o=c.stencil!==void 0?c.stencil:!0,a=c.antialias!==void 0?c.antialias:!1,h=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,u=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,p=c.powerPreference!==void 0?c.powerPreference:"default",d=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let f;e!==null?f=e.getContextAttributes().alpha:f=c.alpha!==void 0?c.alpha:!1;let m=null,v=null;const x=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jn,this.physicallyCorrectLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const g=this;let _=!1,M=0,A=0,P=null,T=-1,C=null;const k=new ne,z=new ne;let y=null,I=t.width,G=t.height,et=1,ot=null,j=null;const B=new ne(0,0,I,G),J=new ne(0,0,I,G);let at=!1;const tt=new Ao;let H=!1,ut=!1,ct=null;const xt=new pe,q=new Ft,Q=new V,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return P===null?et:1}let X=e;function Dt(S,W){for(let $=0;$<S.length;$++){const U=S[$],Z=t.getContext(U,W);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",It,!1),X===null){const W=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&W.shift(),X=Dt(W,S),X===null)throw Dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let wt,yt,mt,Ot,Rt,Ct,oe,se,Yt,le,ie,jt,Ae,we,L,w,K,lt,ht,ft,Tt,R,O,gt;function _t(){wt=new zg(X),yt=new Ig(X,wt,c),wt.init(yt),R=new yv(X,wt,yt),mt=new xv(X,wt,yt),Ot=new Hg,Rt=new ov,Ct=new wv(X,wt,mt,Rt,yt,R,Ot),oe=new kg(g),se=new Vg(g),Yt=new $p(X,yt),O=new Dg(X,wt,Yt,yt),le=new Bg(X,Yt,Ot,O),ie=new Xg(X,le,Yt,Ot),ht=new qg(X,yt,Ct),w=new Ng(Rt),jt=new sv(g,oe,se,wt,yt,O,w),Ae=new Pv(g,Rt),we=new lv,L=new fv(wt,yt),lt=new Lg(g,oe,se,mt,ie,f,h),K=new bv(g,ie,yt),gt=new Tv(X,Ot,yt,mt),ft=new Rg(X,wt,Ot,yt),Tt=new Gg(X,wt,Ot,yt),Ot.programs=jt.programs,g.capabilities=yt,g.extensions=wt,g.properties=Rt,g.renderLists=we,g.shadowMap=K,g.state=mt,g.info=Ot}_t();const pt=new Cv(g,X);this.xr=pt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const S=wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(I,G,!1))},this.getSize=function(S){return S.set(I,G)},this.setSize=function(S,W,$){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=S,G=W,t.width=Math.floor(S*et),t.height=Math.floor(W*et),$!==!1&&(t.style.width=S+"px",t.style.height=W+"px"),this.setViewport(0,0,S,W)},this.getDrawingBufferSize=function(S){return S.set(I*et,G*et).floor()},this.setDrawingBufferSize=function(S,W,$){I=S,G=W,et=$,t.width=Math.floor(S*$),t.height=Math.floor(W*$),this.setViewport(0,0,S,W)},this.getCurrentViewport=function(S){return S.copy(k)},this.getViewport=function(S){return S.copy(B)},this.setViewport=function(S,W,$,U){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,W,$,U),mt.viewport(k.copy(B).multiplyScalar(et).floor())},this.getScissor=function(S){return S.copy(J)},this.setScissor=function(S,W,$,U){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,W,$,U),mt.scissor(z.copy(J).multiplyScalar(et).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(S){mt.setScissorTest(at=S)},this.setOpaqueSort=function(S){ot=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(S=!0,W=!0,$=!0){let U=0;S&&(U|=16384),W&&(U|=256),$&&(U|=1024),X.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",It,!1),we.dispose(),L.dispose(),Rt.dispose(),oe.dispose(),se.dispose(),ie.dispose(),O.dispose(),gt.dispose(),jt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",vt),pt.removeEventListener("sessionend",St),ct&&(ct.dispose(),ct=null),Xt.stop()};function Mt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const S=Ot.autoReset,W=K.enabled,$=K.autoUpdate,U=K.needsUpdate,Z=K.type;_t(),Ot.autoReset=S,K.enabled=W,K.autoUpdate=$,K.needsUpdate=U,K.type=Z}function It(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){const W=S.target;W.removeEventListener("dispose",Nt),Zt(W)}function Zt(S){N(S),Rt.remove(S)}function N(S){const W=Rt.get(S).programs;W!==void 0&&(W.forEach(function($){jt.releaseProgram($)}),S.isShaderMaterial&&jt.releaseShaderCache(S))}this.renderBufferDirect=function(S,W,$,U,Z,Et){W===null&&(W=nt);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,kt=Rn(S,W,$,U,Z);mt.setMaterial(U,Lt);let Ut=$.index,zt=1;U.wireframe===!0&&(Ut=le.getWireframeAttribute($),zt=2);const Bt=$.drawRange,Ht=$.attributes.position;let te=Bt.start*zt,Se=(Bt.start+Bt.count)*zt;Et!==null&&(te=Math.max(te,Et.start*zt),Se=Math.min(Se,(Et.start+Et.count)*zt)),Ut!==null?(te=Math.max(te,0),Se=Math.min(Se,Ut.count)):Ht!=null&&(te=Math.max(te,0),Se=Math.min(Se,Ht.count));const ye=Se-te;if(ye<0||ye===1/0)return;O.setup(Z,U,kt,$,Ut);let Qe,re=ft;if(Ut!==null&&(Qe=Yt.get(Ut),re=Tt,re.setIndex(Qe)),Z.isMesh)U.wireframe===!0?(mt.setLineWidth(U.wireframeLinewidth*it()),re.setMode(1)):re.setMode(4);else if(Z.isLine){let Wt=U.linewidth;Wt===void 0&&(Wt=1),mt.setLineWidth(Wt*it()),Z.isLineSegments?re.setMode(1):Z.isLineLoop?re.setMode(2):re.setMode(3)}else Z.isPoints?re.setMode(0):Z.isSprite&&re.setMode(4);if(Z.isInstancedMesh)re.renderInstances(te,ye,Z.count);else if($.isInstancedBufferGeometry){const Wt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ri=Math.min($.instanceCount,Wt);re.renderInstances(te,ye,ri)}else re.render(te,ye)},this.compile=function(S,W){function $(U,Z,Et){U.transparent===!0&&U.side===Tn&&U.forceSinglePass===!1?(U.side=Be,U.needsUpdate=!0,ae(U,Z,Et),U.side=Ln,U.needsUpdate=!0,ae(U,Z,Et),U.side=Tn):ae(U,Z,Et)}v=L.get(S),v.init(),E.push(v),S.traverseVisible(function(U){U.isLight&&U.layers.test(W.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights(g.physicallyCorrectLights),S.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let Et=0;Et<Z.length;Et++){const Lt=Z[Et];$(Lt,S,U)}else $(Z,S,U)}),E.pop(),v=null};let Y=null;function rt(S){Y&&Y(S)}function vt(){Xt.stop()}function St(){Xt.start()}const Xt=new yc;Xt.setAnimationLoop(rt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(S){Y=S,pt.setAnimationLoop(S),S===null?Xt.stop():Xt.start()},pt.addEventListener("sessionstart",vt),pt.addEventListener("sessionend",St),this.render=function(S,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,W,P),v=L.get(S,E.length),v.init(),E.push(v),xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(xt),ut=this.localClippingEnabled,H=w.init(this.clippingPlanes,ut),m=we.get(S,x.length),m.init(),x.push(m),ce(S,W,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ot,j),H===!0&&w.beginShadows();const $=v.state.shadowsArray;if(K.render($,S,W),H===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(m,S),v.setupLights(g.physicallyCorrectLights),W.isArrayCamera){const U=W.cameras;for(let Z=0,Et=U.length;Z<Et;Z++){const Lt=U[Z];ue(m,S,Lt,Lt.viewport)}}else ue(m,S,W);P!==null&&(Ct.updateMultisampleRenderTarget(P),Ct.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(g,S,W),O.resetDefaultState(),T=-1,C=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ce(S,W,$,U){if(S.visible===!1)return;if(S.layers.test(W.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(W);else if(S.isLight)v.pushLight(S),S.castShadow&&v.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||tt.intersectsSprite(S)){U&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xt);const Lt=ie.update(S),kt=S.material;kt.visible&&m.push(S,Lt,kt,$,Q.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ot.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ot.render.frame),!S.frustumCulled||tt.intersectsObject(S))){U&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xt);const Lt=ie.update(S),kt=S.material;if(Array.isArray(kt)){const Ut=Lt.groups;for(let zt=0,Bt=Ut.length;zt<Bt;zt++){const Ht=Ut[zt],te=kt[Ht.materialIndex];te&&te.visible&&m.push(S,Lt,te,$,Q.z,Ht)}}else kt.visible&&m.push(S,Lt,kt,$,Q.z,null)}}const Et=S.children;for(let Lt=0,kt=Et.length;Lt<kt;Lt++)ce(Et[Lt],W,$,U)}function ue(S,W,$,U){const Z=S.opaque,Et=S.transmissive,Lt=S.transparent;v.setupLightsView($),H===!0&&w.setGlobalState(g.clippingPlanes,$),Et.length>0&&qe(Z,W,$),U&&mt.viewport(k.copy(U)),Z.length>0&&qt(Z,W,$),Et.length>0&&qt(Et,W,$),Lt.length>0&&qt(Lt,W,$),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function qe(S,W,$){const U=yt.isWebGL2;ct===null&&(ct=new Qn(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?pr:Zn,minFilter:dr,samples:U&&a===!0?4:0})),g.getDrawingBufferSize(q),U?ct.setSize(q.x,q.y):ct.setSize(yo(q.x),yo(q.y));const Z=g.getRenderTarget();g.setRenderTarget(ct),g.clear();const Et=g.toneMapping;g.toneMapping=_n,qt(S,W,$),g.toneMapping=Et,Ct.updateMultisampleRenderTarget(ct),Ct.updateRenderTargetMipmap(ct),g.setRenderTarget(Z)}function qt(S,W,$){const U=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Et=S.length;Z<Et;Z++){const Lt=S[Z],kt=Lt.object,Ut=Lt.geometry,zt=U===null?Lt.material:U,Bt=Lt.group;kt.layers.test($.layers)&&Ne(kt,W,$,Ut,zt,Bt)}}function Ne(S,W,$,U,Z,Et){S.onBeforeRender(g,W,$,U,Z,Et),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(g,W,$,U,S,Et),Z.transparent===!0&&Z.side===Tn&&Z.forceSinglePass===!1?(Z.side=Be,Z.needsUpdate=!0,g.renderBufferDirect($,W,U,Z,S,Et),Z.side=Ln,Z.needsUpdate=!0,g.renderBufferDirect($,W,U,Z,S,Et),Z.side=Tn):g.renderBufferDirect($,W,U,Z,S,Et),S.onAfterRender(g,W,$,U,Z,Et)}function ae(S,W,$){W.isScene!==!0&&(W=nt);const U=Rt.get(S),Z=v.state.lights,Et=v.state.shadowsArray,Lt=Z.state.version,kt=jt.getParameters(S,Z.state,Et,W,$),Ut=jt.getProgramCacheKey(kt);let zt=U.programs;U.environment=S.isMeshStandardMaterial?W.environment:null,U.fog=W.fog,U.envMap=(S.isMeshStandardMaterial?se:oe).get(S.envMap||U.environment),zt===void 0&&(S.addEventListener("dispose",Nt),zt=new Map,U.programs=zt);let Bt=zt.get(Ut);if(Bt!==void 0){if(U.currentProgram===Bt&&U.lightsStateVersion===Lt)return wr(S,kt),Bt}else kt.uniforms=jt.getUniforms(S),S.onBuild($,kt,g),S.onBeforeCompile(kt,g),Bt=jt.acquireProgram(kt,Ut),zt.set(Ut,Bt),U.uniforms=kt.uniforms;const Ht=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ht.clippingPlanes=w.uniform),wr(S,kt),U.needsLights=ii(S),U.lightsStateVersion=Lt,U.needsLights&&(Ht.ambientLightColor.value=Z.state.ambient,Ht.lightProbe.value=Z.state.probe,Ht.directionalLights.value=Z.state.directional,Ht.directionalLightShadows.value=Z.state.directionalShadow,Ht.spotLights.value=Z.state.spot,Ht.spotLightShadows.value=Z.state.spotShadow,Ht.rectAreaLights.value=Z.state.rectArea,Ht.ltc_1.value=Z.state.rectAreaLTC1,Ht.ltc_2.value=Z.state.rectAreaLTC2,Ht.pointLights.value=Z.state.point,Ht.pointLightShadows.value=Z.state.pointShadow,Ht.hemisphereLights.value=Z.state.hemi,Ht.directionalShadowMap.value=Z.state.directionalShadowMap,Ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ht.spotShadowMap.value=Z.state.spotShadowMap,Ht.spotLightMatrix.value=Z.state.spotLightMatrix,Ht.spotLightMap.value=Z.state.spotLightMap,Ht.pointShadowMap.value=Z.state.pointShadowMap,Ht.pointShadowMatrix.value=Z.state.pointShadowMatrix);const te=Bt.getUniforms(),Se=es.seqWithValue(te.seq,Ht);return U.currentProgram=Bt,U.uniformsList=Se,Bt}function wr(S,W){const $=Rt.get(S);$.outputEncoding=W.outputEncoding,$.instancing=W.instancing,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Rn(S,W,$,U,Z){W.isScene!==!0&&(W=nt),Ct.resetTextureUnits();const Et=W.fog,Lt=U.isMeshStandardMaterial?W.environment:null,kt=P===null?g.outputEncoding:P.isXRRenderTarget===!0?P.texture.encoding:Jn,Ut=(U.isMeshStandardMaterial?se:oe).get(U.envMap||Lt),zt=U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Bt=!!U.normalMap&&!!$.attributes.tangent,Ht=!!$.morphAttributes.position,te=!!$.morphAttributes.normal,Se=!!$.morphAttributes.color,ye=U.toneMapped?g.toneMapping:_n,Qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=Qe!==void 0?Qe.length:0,Wt=Rt.get(U),ri=v.state.lights;if(H===!0&&(ut===!0||S!==C)){const Ee=S===C&&U.id===T;w.setState(U,S,Ee)}let he=!1;U.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ri.state.version||Wt.outputEncoding!==kt||Z.isInstancedMesh&&Wt.instancing===!1||!Z.isInstancedMesh&&Wt.instancing===!0||Z.isSkinnedMesh&&Wt.skinning===!1||!Z.isSkinnedMesh&&Wt.skinning===!0||Wt.envMap!==Ut||U.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==w.numPlanes||Wt.numIntersection!==w.numIntersection)||Wt.vertexAlphas!==zt||Wt.vertexTangents!==Bt||Wt.morphTargets!==Ht||Wt.morphNormals!==te||Wt.morphColors!==Se||Wt.toneMapping!==ye||yt.isWebGL2===!0&&Wt.morphTargetsCount!==re)&&(he=!0):(he=!0,Wt.__version=U.version);let ke=Wt.currentProgram;he===!0&&(ke=ae(U,W,Z));let Mr=!1,In=!1,si=!1;const ve=ke.getUniforms(),tn=Wt.uniforms;if(mt.useProgram(ke.program)&&(Mr=!0,In=!0,si=!0),U.id!==T&&(T=U.id,In=!0),Mr||C!==S){if(ve.setValue(X,"projectionMatrix",S.projectionMatrix),yt.logarithmicDepthBuffer&&ve.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),C!==S&&(C=S,In=!0,si=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ee=ve.map.cameraPosition;Ee!==void 0&&Ee.setValue(X,Q.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ve.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&ve.setValue(X,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){ve.setOptional(X,Z,"bindMatrix"),ve.setOptional(X,Z,"bindMatrixInverse");const Ee=Z.skeleton;Ee&&(yt.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),ve.setValue(X,"boneTexture",Ee.boneTexture,Ct),ve.setValue(X,"boneTextureSize",Ee.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oi=$.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0&&yt.isWebGL2===!0)&&ht.update(Z,$,U,ke),(In||Wt.receiveShadow!==Z.receiveShadow)&&(Wt.receiveShadow=Z.receiveShadow,ve.setValue(X,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(tn.envMap.value=Ut,tn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),In&&(ve.setValue(X,"toneMappingExposure",g.toneMappingExposure),Wt.needsLights&&yr(tn,si),Et&&U.fog===!0&&Ae.refreshFogUniforms(tn,Et),Ae.refreshMaterialUniforms(tn,U,et,G,ct),es.upload(X,Wt.uniformsList,tn,Ct)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(es.upload(X,Wt.uniformsList,tn,Ct),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ve.setValue(X,"center",Z.center),ve.setValue(X,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(X,"normalMatrix",Z.normalMatrix),ve.setValue(X,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ee=U.uniformsGroups;for(let on=0,as=Ee.length;on<as;on++)if(yt.isWebGL2){const Gi=Ee[on];gt.update(Gi,ke),gt.bind(Gi,ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ke}function yr(S,W){S.ambientLightColor.needsUpdate=W,S.lightProbe.needsUpdate=W,S.directionalLights.needsUpdate=W,S.directionalLightShadows.needsUpdate=W,S.pointLights.needsUpdate=W,S.pointLightShadows.needsUpdate=W,S.spotLights.needsUpdate=W,S.spotLightShadows.needsUpdate=W,S.rectAreaLights.needsUpdate=W,S.hemisphereLights.needsUpdate=W}function ii(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,W,$){Rt.get(S.texture).__webglTexture=W,Rt.get(S.depthTexture).__webglTexture=$;const U=Rt.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=$===void 0,U.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,W){const $=Rt.get(S);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(S,W=0,$=0){P=S,M=W,A=$;let U=!0,Z=null,Et=!1,Lt=!1;if(S){const Ut=Rt.get(S);Ut.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(36160,null),U=!1):Ut.__webglFramebuffer===void 0?Ct.setupRenderTarget(S):Ut.__hasExternalTextures&&Ct.rebindTextures(S,Rt.get(S.texture).__webglTexture,Rt.get(S.depthTexture).__webglTexture);const zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Lt=!0);const Bt=Rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Bt[W],Et=!0):yt.isWebGL2&&S.samples>0&&Ct.useMultisampledRTT(S)===!1?Z=Rt.get(S).__webglMultisampledFramebuffer:Z=Bt,k.copy(S.viewport),z.copy(S.scissor),y=S.scissorTest}else k.copy(B).multiplyScalar(et).floor(),z.copy(J).multiplyScalar(et).floor(),y=at;if(mt.bindFramebuffer(36160,Z)&&yt.drawBuffers&&U&&mt.drawBuffers(S,Z),mt.viewport(k),mt.scissor(z),mt.setScissorTest(y),Et){const Ut=Rt.get(S.texture);X.framebufferTexture2D(36160,36064,34069+W,Ut.__webglTexture,$)}else if(Lt){const Ut=Rt.get(S.texture),zt=W||0;X.framebufferTextureLayer(36160,36064,Ut.__webglTexture,$||0,zt)}T=-1},this.readRenderTargetPixels=function(S,W,$,U,Z,Et,Lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Lt!==void 0&&(kt=kt[Lt]),kt){mt.bindFramebuffer(36160,kt);try{const Ut=S.texture,zt=Ut.format,Bt=Ut.type;if(zt!==Ze&&R.convert(zt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Bt===pr&&(wt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Bt!==Zn&&R.convert(Bt)!==X.getParameter(35738)&&!(Bt===Kn&&(yt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=S.width-U&&$>=0&&$<=S.height-Z&&X.readPixels(W,$,U,Z,R.convert(zt),R.convert(Bt),Et)}finally{const Ut=P!==null?Rt.get(P).__webglFramebuffer:null;mt.bindFramebuffer(36160,Ut)}}},this.copyFramebufferToTexture=function(S,W,$=0){const U=Math.pow(2,-$),Z=Math.floor(W.image.width*U),Et=Math.floor(W.image.height*U);Ct.setTexture2D(W,0),X.copyTexSubImage2D(3553,$,0,0,S.x,S.y,Z,Et),mt.unbindTexture()},this.copyTextureToTexture=function(S,W,$,U=0){const Z=W.image.width,Et=W.image.height,Lt=R.convert($.format),kt=R.convert($.type);Ct.setTexture2D($,0),X.pixelStorei(37440,$.flipY),X.pixelStorei(37441,$.premultiplyAlpha),X.pixelStorei(3317,$.unpackAlignment),W.isDataTexture?X.texSubImage2D(3553,U,S.x,S.y,Z,Et,Lt,kt,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(3553,U,S.x,S.y,W.mipmaps[0].width,W.mipmaps[0].height,Lt,W.mipmaps[0].data):X.texSubImage2D(3553,U,S.x,S.y,Lt,kt,W.image),U===0&&$.generateMipmaps&&X.generateMipmap(3553),mt.unbindTexture()},this.copyTextureToTexture3D=function(S,W,$,U,Z=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=S.max.x-S.min.x+1,Lt=S.max.y-S.min.y+1,kt=S.max.z-S.min.z+1,Ut=R.convert(U.format),zt=R.convert(U.type);let Bt;if(U.isData3DTexture)Ct.setTexture3D(U,0),Bt=32879;else if(U.isDataArrayTexture)Ct.setTexture2DArray(U,0),Bt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,U.flipY),X.pixelStorei(37441,U.premultiplyAlpha),X.pixelStorei(3317,U.unpackAlignment);const Ht=X.getParameter(3314),te=X.getParameter(32878),Se=X.getParameter(3316),ye=X.getParameter(3315),Qe=X.getParameter(32877),re=$.isCompressedTexture?$.mipmaps[0]:$.image;X.pixelStorei(3314,re.width),X.pixelStorei(32878,re.height),X.pixelStorei(3316,S.min.x),X.pixelStorei(3315,S.min.y),X.pixelStorei(32877,S.min.z),$.isDataTexture||$.isData3DTexture?X.texSubImage3D(Bt,Z,W.x,W.y,W.z,Et,Lt,kt,Ut,zt,re.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Bt,Z,W.x,W.y,W.z,Et,Lt,kt,Ut,re.data)):X.texSubImage3D(Bt,Z,W.x,W.y,W.z,Et,Lt,kt,Ut,zt,re),X.pixelStorei(3314,Ht),X.pixelStorei(32878,te),X.pixelStorei(3316,Se),X.pixelStorei(3315,ye),X.pixelStorei(32877,Qe),Z===0&&U.generateMipmaps&&X.generateMipmap(Bt),mt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ct.setTextureCube(S,0):S.isData3DTexture?Ct.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ct.setTexture2DArray(S,0):Ct.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){M=0,A=0,P=null,mt.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lv extends Pc{}Lv.prototype.isWebGL1Renderer=!0;class Dv extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Ro extends Dn{constructor(t=1,e=32,i=16,o=0,a=Math.PI*2,h=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:a,thetaStart:h,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const p=Math.min(h+u,Math.PI);let d=0;const f=[],m=new V,v=new V,x=[],E=[],g=[],_=[];for(let M=0;M<=i;M++){const A=[],P=M/i;let T=0;M==0&&h==0?T=.5/e:M==i&&p==Math.PI&&(T=-.5/e);for(let C=0;C<=e;C++){const k=C/e;m.x=-t*Math.cos(o+k*a)*Math.sin(h+P*u),m.y=t*Math.cos(h+P*u),m.z=t*Math.sin(o+k*a)*Math.sin(h+P*u),E.push(m.x,m.y,m.z),v.copy(m).normalize(),g.push(v.x,v.y,v.z),_.push(k+T,1-P),A.push(d++)}f.push(A)}for(let M=0;M<i;M++)for(let A=0;A<e;A++){const P=f[M][A+1],T=f[M][A],C=f[M+1][A],k=f[M+1][A+1];(M!==0||h>0)&&x.push(P,T,k),(M!==i-1||p<Math.PI)&&x.push(T,C,k)}this.setIndex(x),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(_,2))}static fromJSON(t){return new Ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xr extends vr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Jl={enabled:!1,files:{},add:function(c,t){this.enabled!==!1&&(this.files[c]=t)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class Rv{constructor(t,e,i){const o=this;let a=!1,h=0,u=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){u++,a===!1&&o.onStart!==void 0&&o.onStart(f,h,u),a=!0},this.itemEnd=function(f){h++,o.onProgress!==void 0&&o.onProgress(f,h,u),h===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return p?p(f):f},this.setURLModifier=function(f){return p=f,this},this.addHandler=function(f,m){return d.push(f,m),this},this.removeHandler=function(f){const m=d.indexOf(f);return m!==-1&&d.splice(m,2),this},this.getHandler=function(f){for(let m=0,v=d.length;m<v;m+=2){const x=d[m],E=d[m+1];if(x.global&&(x.lastIndex=0),x.test(f))return E}return null}}}const Iv=new Rv;class Io{constructor(t){this.manager=t!==void 0?t:Iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(o,a){i.load(t,o,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Tc extends Io{constructor(t){super(t)}load(t,e,i,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,h=Jl.get(t);if(h!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(h),a.manager.itemEnd(t)},0),h;const u=mr("img");function p(){f(),Jl.add(t,this),e&&e(this),a.manager.itemEnd(t)}function d(m){f(),o&&o(m),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){u.removeEventListener("load",p,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",p,!1),u.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(t),u.src=t,u}}class Nv extends Io{constructor(t){super(t)}load(t,e,i,o){const a=new To,h=new Tc(this.manager);h.setCrossOrigin(this.crossOrigin),h.setPath(this.path);let u=0;function p(d){h.load(t[d],function(f){a.images[d]=f,u++,u===6&&(a.needsUpdate=!0,e&&e(a))},void 0,o)}for(let d=0;d<t.length;++d)p(d);return a}}class kv extends Io{constructor(t){super(t)}load(t,e,i,o){const a=new Re,h=new Tc(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(u){a.image=u,a.needsUpdate=!0,e!==void 0&&e(a)},i,o),a}}class Ac extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const po=new pe,Ql=new V,tc=new V;class Fv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tc),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ec=new pe,cr=new V,fo=new V;class Ov extends Fv{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),i.position.copy(cr),fo.copy(i.position),fo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(fo),i.updateMatrixWorld(),o.makeTranslation(-cr.x,-cr.y,-cr.z),ec.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}class Uv extends Ac{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new Ov}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vv extends Ac{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const ic={type:"change"},mo={type:"start"},rc={type:"end"};class zv extends ni{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",we),this._domElementKeyEvents=R},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ic),i.update(),a=o.NONE},this.update=function(){const R=new V,O=new ti().setFromUnitVectors(t.up,new V(0,1,0)),gt=O.clone().invert(),_t=new V,pt=new ti,Mt=2*Math.PI;return function(){const It=i.object.position;R.copy(It).sub(i.target),R.applyQuaternion(O),u.setFromVector3(R),i.autoRotate&&a===o.NONE&&I(z()),i.enableDamping?(u.theta+=p.theta*i.dampingFactor,u.phi+=p.phi*i.dampingFactor):(u.theta+=p.theta,u.phi+=p.phi);let Nt=i.minAzimuthAngle,Zt=i.maxAzimuthAngle;return isFinite(Nt)&&isFinite(Zt)&&(Nt<-Math.PI?Nt+=Mt:Nt>Math.PI&&(Nt-=Mt),Zt<-Math.PI?Zt+=Mt:Zt>Math.PI&&(Zt-=Mt),Nt<=Zt?u.theta=Math.max(Nt,Math.min(Zt,u.theta)):u.theta=u.theta>(Nt+Zt)/2?Math.max(Nt,u.theta):Math.min(Zt,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=d,u.radius=Math.max(i.minDistance,Math.min(i.maxDistance,u.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),R.setFromSpherical(u),R.applyQuaternion(gt),It.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(p.theta*=1-i.dampingFactor,p.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(p.set(0,0,0),f.set(0,0,0)),d=1,m||_t.distanceToSquared(i.object.position)>h||8*(1-pt.dot(i.object.quaternion))>h?(i.dispatchEvent(ic),_t.copy(i.object.position),pt.copy(i.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",K),i.domElement.removeEventListener("pointerdown",oe),i.domElement.removeEventListener("pointercancel",le),i.domElement.removeEventListener("wheel",Ae),i.domElement.removeEventListener("pointermove",se),i.domElement.removeEventListener("pointerup",Yt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",we)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const h=1e-6,u=new nc,p=new nc;let d=1;const f=new V;let m=!1;const v=new Ft,x=new Ft,E=new Ft,g=new Ft,_=new Ft,M=new Ft,A=new Ft,P=new Ft,T=new Ft,C=[],k={};function z(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function I(R){p.theta-=R}function G(R){p.phi-=R}const et=function(){const R=new V;return function(gt,_t){R.setFromMatrixColumn(_t,0),R.multiplyScalar(-gt),f.add(R)}}(),ot=function(){const R=new V;return function(gt,_t){i.screenSpacePanning===!0?R.setFromMatrixColumn(_t,1):(R.setFromMatrixColumn(_t,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(gt),f.add(R)}}(),j=function(){const R=new V;return function(gt,_t){const pt=i.domElement;if(i.object.isPerspectiveCamera){const Mt=i.object.position;R.copy(Mt).sub(i.target);let bt=R.length();bt*=Math.tan(i.object.fov/2*Math.PI/180),et(2*gt*bt/pt.clientHeight,i.object.matrix),ot(2*_t*bt/pt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(et(gt*(i.object.right-i.object.left)/i.object.zoom/pt.clientWidth,i.object.matrix),ot(_t*(i.object.top-i.object.bottom)/i.object.zoom/pt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(R){i.object.isPerspectiveCamera?d/=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*R)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(R){i.object.isPerspectiveCamera?d*=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/R)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function at(R){v.set(R.clientX,R.clientY)}function tt(R){A.set(R.clientX,R.clientY)}function H(R){g.set(R.clientX,R.clientY)}function ut(R){x.set(R.clientX,R.clientY),E.subVectors(x,v).multiplyScalar(i.rotateSpeed);const O=i.domElement;I(2*Math.PI*E.x/O.clientHeight),G(2*Math.PI*E.y/O.clientHeight),v.copy(x),i.update()}function ct(R){P.set(R.clientX,R.clientY),T.subVectors(P,A),T.y>0?B(y()):T.y<0&&J(y()),A.copy(P),i.update()}function xt(R){_.set(R.clientX,R.clientY),M.subVectors(_,g).multiplyScalar(i.panSpeed),j(M.x,M.y),g.copy(_),i.update()}function q(R){R.deltaY<0?J(y()):R.deltaY>0&&B(y()),i.update()}function Q(R){let O=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,i.keyPanSpeed),O=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,-i.keyPanSpeed),O=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(i.keyPanSpeed,0),O=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(-i.keyPanSpeed,0),O=!0;break}O&&(R.preventDefault(),i.update())}function nt(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const R=.5*(C[0].pageX+C[1].pageX),O=.5*(C[0].pageY+C[1].pageY);v.set(R,O)}}function it(){if(C.length===1)g.set(C[0].pageX,C[0].pageY);else{const R=.5*(C[0].pageX+C[1].pageX),O=.5*(C[0].pageY+C[1].pageY);g.set(R,O)}}function X(){const R=C[0].pageX-C[1].pageX,O=C[0].pageY-C[1].pageY,gt=Math.sqrt(R*R+O*O);A.set(0,gt)}function Dt(){i.enableZoom&&X(),i.enablePan&&it()}function wt(){i.enableZoom&&X(),i.enableRotate&&nt()}function yt(R){if(C.length==1)x.set(R.pageX,R.pageY);else{const gt=Tt(R),_t=.5*(R.pageX+gt.x),pt=.5*(R.pageY+gt.y);x.set(_t,pt)}E.subVectors(x,v).multiplyScalar(i.rotateSpeed);const O=i.domElement;I(2*Math.PI*E.x/O.clientHeight),G(2*Math.PI*E.y/O.clientHeight),v.copy(x)}function mt(R){if(C.length===1)_.set(R.pageX,R.pageY);else{const O=Tt(R),gt=.5*(R.pageX+O.x),_t=.5*(R.pageY+O.y);_.set(gt,_t)}M.subVectors(_,g).multiplyScalar(i.panSpeed),j(M.x,M.y),g.copy(_)}function Ot(R){const O=Tt(R),gt=R.pageX-O.x,_t=R.pageY-O.y,pt=Math.sqrt(gt*gt+_t*_t);P.set(0,pt),T.set(0,Math.pow(P.y/A.y,i.zoomSpeed)),B(T.y),A.copy(P)}function Rt(R){i.enableZoom&&Ot(R),i.enablePan&&mt(R)}function Ct(R){i.enableZoom&&Ot(R),i.enableRotate&&yt(R)}function oe(R){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",se),i.domElement.addEventListener("pointerup",Yt)),lt(R),R.pointerType==="touch"?L(R):ie(R))}function se(R){i.enabled!==!1&&(R.pointerType==="touch"?w(R):jt(R))}function Yt(R){ht(R),C.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",se),i.domElement.removeEventListener("pointerup",Yt)),i.dispatchEvent(rc),a=o.NONE}function le(R){ht(R)}function ie(R){let O;switch(R.button){case 0:O=i.mouseButtons.LEFT;break;case 1:O=i.mouseButtons.MIDDLE;break;case 2:O=i.mouseButtons.RIGHT;break;default:O=-1}switch(O){case fi.DOLLY:if(i.enableZoom===!1)return;tt(R),a=o.DOLLY;break;case fi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;H(R),a=o.PAN}else{if(i.enableRotate===!1)return;at(R),a=o.ROTATE}break;case fi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;at(R),a=o.ROTATE}else{if(i.enablePan===!1)return;H(R),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(mo)}function jt(R){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;ut(R);break;case o.DOLLY:if(i.enableZoom===!1)return;ct(R);break;case o.PAN:if(i.enablePan===!1)return;xt(R);break}}function Ae(R){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(R.preventDefault(),i.dispatchEvent(mo),q(R),i.dispatchEvent(rc))}function we(R){i.enabled===!1||i.enablePan===!1||Q(R)}function L(R){switch(ft(R),C.length){case 1:switch(i.touches.ONE){case mi.ROTATE:if(i.enableRotate===!1)return;nt(),a=o.TOUCH_ROTATE;break;case mi.PAN:if(i.enablePan===!1)return;it(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case mi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Dt(),a=o.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;wt(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(mo)}function w(R){switch(ft(R),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;yt(R),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;mt(R),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Rt(R),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ct(R),i.update();break;default:a=o.NONE}}function K(R){i.enabled!==!1&&R.preventDefault()}function lt(R){C.push(R)}function ht(R){delete k[R.pointerId];for(let O=0;O<C.length;O++)if(C[O].pointerId==R.pointerId){C.splice(O,1);return}}function ft(R){let O=k[R.pointerId];O===void 0&&(O=new Ft,k[R.pointerId]=O),O.set(R.pageX,R.pageY)}function Tt(R){const O=R.pointerId===C[0].pointerId?C[1]:C[0];return k[O.pointerId]}i.domElement.addEventListener("contextmenu",K),i.domElement.addEventListener("pointerdown",oe),i.domElement.addEventListener("pointercancel",le),i.domElement.addEventListener("wheel",Ae,{passive:!1}),this.update()}}var Bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},So={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(c,t){(function(e,i){i(t)})(Bv,function(e){class i{constructor(n){const[r,l]=n.split("-"),b=r.split(".");this.major=parseInt(b[0],10),this.minor=parseInt(b[1],10),this.patch=parseInt(b[2],10),this.prerelease=l??null}toString(){const n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class o{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class a{constructor(n){this.target=n}}class h extends a{constructor(n,r,l,b){super(n),this.value=r,this.presetKey=l,this.last=b??!0}}class u extends a{constructor(n,r,l){super(n),this.value=r,this.presetKey=l}}class p extends a{constructor(n,r){super(n),this.expanded=r}}class d extends a{constructor(n,r){super(n),this.index=r}}function f(s){return s}function m(s){return s==null}function v(s,n){if(s.length!==n.length)return!1;for(let r=0;r<s.length;r++)if(s[r]!==n[r])return!1;return!0}function x(s,n){let r=s;do{const l=Object.getOwnPropertyDescriptor(r,n);if(l&&(l.set!==void 0||l.writable===!0))return!0;r=Object.getPrototypeOf(r)}while(r!==null);return!1}const E={alreadydisposed:()=>"View has been already disposed",invalidparams:s=>`Invalid parameters for '${s.name}'`,nomatchingcontroller:s=>`No matching controller for '${s.key}'`,nomatchingview:s=>`No matching view for '${JSON.stringify(s.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:s=>`Property '${s.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class g{static alreadyDisposed(){return new g({type:"alreadydisposed"})}static notBindable(){return new g({type:"notbindable"})}static propertyNotFound(n){return new g({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new g({type:"shouldneverhappen"})}constructor(n){var r;this.message=(r=E[n.type](n.context))!==null&&r!==void 0?r:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}}class _{constructor(n,r,l){this.obj_=n,this.key_=r,this.presetKey_=l??r}static isBindable(n){return!(n===null||typeof n!="object"&&typeof n!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,r){const l=this.read();if(!_.isBindable(l))throw g.notBindable();if(!(n in l))throw g.propertyNotFound(n);l[n]=r}}class M extends o{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,r){const l=r.bind(this);return this.controller_.valueController.emitter.on(n,()=>{l(new a(this))}),this}}class A{constructor(){this.observers_={}}on(n,r){let l=this.observers_[n];return l||(l=this.observers_[n]=[]),l.push({handler:r}),this}off(n,r){const l=this.observers_[n];return l&&(this.observers_[n]=l.filter(b=>b.handler!==r)),this}emit(n,r){const l=this.observers_[n];l&&l.forEach(b=>{b.handler(r)})}}const P="tp";function T(s){return(r,l)=>[P,"-",s,"v",r?`_${r}`:"",l?`-${l}`:""].join("")}function C(s,n){return r=>n(s(r))}function k(s){return s.rawValue}function z(s,n){s.emitter.on("change",C(k,n)),n(s.rawValue)}function y(s,n,r){z(s.value(n),r)}function I(s,n,r){r?s.classList.add(n):s.classList.remove(n)}function G(s,n){return r=>{I(s,n,r)}}function et(s,n){z(s,r=>{n.textContent=r??""})}const ot=T("btn");class j{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ot()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("button");l.classList.add(ot("b")),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const b=n.createElement("div");b.classList.add(ot("t")),et(r.props.value("title"),b),this.buttonElement.appendChild(b)}}class B{constructor(n,r){this.emitter=new A,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new j(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class J{constructor(n,r){var l;this.constraint_=r==null?void 0:r.constraint,this.equals_=(l=r==null?void 0:r.equals)!==null&&l!==void 0?l:(b,D)=>b===D,this.emitter=new A,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const l=r??{forceEmit:!1,last:!0},b=this.constraint_?this.constraint_.constrain(n):n,D=this.rawValue_;this.equals_(D,b)&&!l.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=b,this.emitter.emit("change",{options:l,previousRawValue:D,rawValue:b,sender:this}))}}class at{constructor(n){this.emitter=new A,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const l=r??{forceEmit:!1,last:!0},b=this.value_;b===n&&!l.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:l,previousRawValue:b,rawValue:this.value_,sender:this}))}}function tt(s,n){const r=n==null?void 0:n.constraint,l=n==null?void 0:n.equals;return!r&&!l?new at(s):new J(s,n)}class H{constructor(n){this.emitter=new A,this.valMap_=n;for(const r in this.valMap_)this.valMap_[r].emitter.on("change",()=>{this.emitter.emit("change",{key:r,sender:this})})}static createCore(n){return Object.keys(n).reduce((l,b)=>Object.assign(l,{[b]:tt(n[b])}),{})}static fromObject(n){const r=this.createCore(n);return new H(r)}get(n){return this.valMap_[n].rawValue}set(n,r){this.valMap_[n].rawValue=r}value(n){return this.valMap_[n]}}function ut(s,n){const l=Object.keys(n).reduce((b,D)=>{if(b===void 0)return;const F=n[D],st=F(s[D]);return st.succeeded?Object.assign(Object.assign({},b),{[D]:st.value}):void 0},{});return l}function ct(s,n){return s.reduce((r,l)=>{if(r===void 0)return;const b=n(l);if(!(!b.succeeded||b.value===void 0))return[...r,b.value]},[])}function xt(s){return s===null?!1:typeof s=="object"}function q(s){return n=>r=>{if(!n&&r===void 0)return{succeeded:!1,value:void 0};if(n&&r===void 0)return{succeeded:!0,value:void 0};const l=s(r);return l!==void 0?{succeeded:!0,value:l}:{succeeded:!1,value:void 0}}}function Q(s){return{custom:n=>q(n)(s),boolean:q(n=>typeof n=="boolean"?n:void 0)(s),number:q(n=>typeof n=="number"?n:void 0)(s),string:q(n=>typeof n=="string"?n:void 0)(s),function:q(n=>typeof n=="function"?n:void 0)(s),constant:n=>q(r=>r===n?n:void 0)(s),raw:q(n=>n)(s),object:n=>q(r=>{if(xt(r))return ut(r,n)})(s),array:n=>q(r=>{if(Array.isArray(r))return ct(r,n)})(s)}}const nt={optional:Q(!0),required:Q(!1)};function it(s,n){const r=nt.required.object(n)(s);return r.succeeded?r.value:void 0}function X(s){console.warn([`Missing '${s.key}' of ${s.target} in ${s.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function Dt(s){return s&&s.parentElement&&s.parentElement.removeChild(s),null}class wt{constructor(n){this.value_=n}static create(n){return[new wt(n),(r,l)=>{n.setRawValue(r,l)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const yt=T("");function mt(s,n){return G(s,yt(void 0,n))}class Ot extends H{constructor(n){var r;super(n),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=wt.create(tt(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(r=this.get("parent"))===null||r===void 0||r.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(n){var r,l,b;const D=n??{};return new Ot(H.createCore({disabled:(r=D.disabled)!==null&&r!==void 0?r:!1,disposed:!1,hidden:(l=D.hidden)!==null&&l!==void 0?l:!1,parent:(b=D.parent)!==null&&b!==void 0?b:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(n){z(this.globalDisabled_,mt(n,"disabled")),y(this,"hidden",mt(n,"hidden"))}bindDisabled(n){z(this.globalDisabled_,r=>{n.disabled=r})}bindTabIndex(n){z(this.globalDisabled_,r=>{n.tabIndex=r?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",r=>{r&&n()})}getGlobalDisabled_(){const n=this.get("parent");return(n?n.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(n){var r;const l=n.previousRawValue;l==null||l.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(r=this.get("parent"))===null||r===void 0||r.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function Rt(){return["veryfirst","first","last","verylast"]}const Ct=T(""),oe={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class se{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;const r=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Rt().forEach(l=>{r.classList.remove(Ct(void 0,oe[l]))}),this.blade.get("positions").forEach(l=>{r.classList.add(Ct(void 0,oe[l]))})}),this.viewProps.handleDispose(()=>{Dt(r)})}get parent(){return this.parent_}set parent(n){if(this.parent_=n,!("parent"in this.viewProps.valMap_)){X({key:"parent",target:Ot.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const Yt="http://www.w3.org/2000/svg";function le(s){s.offsetHeight}function ie(s,n){const r=s.style.transition;s.style.transition="none",n(),s.style.transition=r}function jt(s){return s.ontouchstart!==void 0}function Ae(){return globalThis}function we(){return Ae().document}function L(s){const n=s.ownerDocument.defaultView;return n&&"document"in n?s.getContext("2d",{willReadFrequently:!0}):null}const w={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function K(s,n){const r=s.createElementNS(Yt,"svg");return r.innerHTML=w[n],r}function lt(s,n,r){s.insertBefore(n,s.children[r])}function ht(s){s.parentElement&&s.parentElement.removeChild(s)}function ft(s){for(;s.children.length>0;)s.removeChild(s.children[0])}function Tt(s){for(;s.childNodes.length>0;)s.removeChild(s.childNodes[0])}function R(s){return s.relatedTarget?s.relatedTarget:"explicitOriginalTarget"in s?s.explicitOriginalTarget:null}const O=T("lbl");function gt(s,n){const r=s.createDocumentFragment();return n.split(`
`).map(b=>s.createTextNode(b)).forEach((b,D)=>{D>0&&r.appendChild(s.createElement("br")),r.appendChild(b)}),r}class _t{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(O()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(O("l")),y(r.props,"label",D=>{m(D)?this.element.classList.add(O(void 0,"nol")):(this.element.classList.remove(O(void 0,"nol")),Tt(l),l.appendChild(gt(n,D)))}),this.element.appendChild(l),this.labelElement=l;const b=n.createElement("div");b.classList.add(O("v")),this.element.appendChild(b),this.valueElement=b}}class pt extends se{constructor(n,r){const l=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{view:new _t(n,{props:r.props,viewProps:l}),viewProps:l})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Mt={id:"button",type:"blade",accept(s){const n=nt,r=it(s,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return r?{params:r}:null},controller(s){return new pt(s.document,{blade:s.blade,props:H.fromObject({label:s.params.label}),valueController:new B(s.document,{props:H.fromObject({title:s.params.title}),viewProps:s.viewProps})})},api(s){return!(s.controller instanceof pt)||!(s.controller.valueController instanceof B)?null:new M(s.controller)}};class bt extends se{constructor(n){super(n),this.value=n.value}}function It(){return new H({positions:tt([],{equals:v})})}class Nt extends H{constructor(n){super(n)}static create(n){const r={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},l=H.createCore(r);return new Nt(l)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(n)?`${n}px`:"auto"}bindExpandedClass(n,r){const l=()=>{this.styleExpanded?n.classList.add(r):n.classList.remove(r)};y(this,"expanded",l),y(this,"temporaryExpanded",l)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Zt(s,n){let r=0;return ie(n,()=>{s.set("expandedHeight",null),s.set("temporaryExpanded",!0),le(n),r=n.clientHeight,s.set("temporaryExpanded",null),le(n)}),r}function N(s,n){n.style.height=s.styleHeight}function Y(s,n){s.value("expanded").emitter.on("beforechange",()=>{if(s.set("completed",!1),m(s.get("expandedHeight"))){const r=Zt(s,n);r>0&&s.set("expandedHeight",r)}s.set("shouldFixHeight",!0),le(n)}),s.emitter.on("change",()=>{N(s,n)}),N(s,n),n.addEventListener("transitionend",r=>{r.propertyName==="height"&&s.cleanUpTransition()})}class rt extends o{constructor(n,r){super(n),this.rackApi_=r}}function vt(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function St(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function Xt(s,n){const r=n??{};return s.addBlade(Object.assign(Object.assign({},r),{view:"separator"}))}function ce(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class ue{constructor(n){this.emitter=new A,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(const r of this.allItems())if(n(r))return r;return null}includes(n){return this.cache_.has(n)}add(n,r){if(this.includes(n))throw g.shouldNeverHappen();const l=r!==void 0?r:this.items_.length;this.items_.splice(l,0,n),this.cache_.add(n);const b=this.extract_(n);b&&(b.emitter.on("add",this.onSubListAdd_),b.emitter.on("remove",this.onSubListRemove_),b.allItems().forEach(D=>{this.cache_.add(D)})),this.emitter.emit("add",{index:l,item:n,root:this,target:this})}remove(n){const r=this.items_.indexOf(n);if(r<0)return;this.items_.splice(r,1),this.cache_.delete(n);const l=this.extract_(n);l&&(l.emitter.off("add",this.onSubListAdd_),l.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:r,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class qe extends o{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new A,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){const r=n.sender.target.read();this.emitter_.emit("change",{event:new h(this,r,this.controller_.binding.target.presetKey,n.options.last)})}}class qt extends pt{constructor(n,r){super(n,r),this.binding=r.binding}}class Ne extends o{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new A,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){const r=n.sender.target.read();this.emitter_.emit("update",{event:new u(this,r,this.controller_.binding.target.presetKey)})}}class ae extends pt{constructor(n,r){super(n,r),this.binding=r.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function wr(s){return s instanceof ii?s.apiSet_:s instanceof rt?s.rackApi_.apiSet_:null}function Rn(s,n){const r=s.find(l=>l.controller_===n);if(!r)throw g.shouldNeverHappen();return r}function yr(s,n,r){if(!_.isBindable(s))throw g.notBindable();return new _(s,n,r)}class ii extends o{constructor(n,r){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new A,this.apiSet_=new ue(wr),this.pool_=r;const l=this.controller_.rack;l.emitter.on("add",this.onRackAdd_),l.emitter.on("remove",this.onRackRemove_),l.emitter.on("inputchange",this.onRackInputChange_),l.emitter.on("monitorupdate",this.onRackMonitorUpdate_),l.children.forEach(b=>{this.setUpApi_(b)})}get children(){return this.controller_.rack.children.map(n=>Rn(this.apiSet_,n))}addInput(n,r,l){const b=l??{},D=this.controller_.view.element.ownerDocument,F=this.pool_.createInput(D,yr(n,r,b.presetKey),b),st=new qe(F);return this.add(st,b.index)}addMonitor(n,r,l){const b=l??{},D=this.controller_.view.element.ownerDocument,F=this.pool_.createMonitor(D,yr(n,r),b),st=new Ne(F);return this.add(st,b.index)}addFolder(n){return St(this,n)}addButton(n){return vt(this,n)}addSeparator(n){return Xt(this,n)}addTab(n){return ce(this,n)}add(n,r){this.controller_.rack.add(n.controller_,r);const l=this.apiSet_.find(b=>b.controller_===n.controller_);return l&&this.apiSet_.remove(l),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){const r=this.controller_.view.element.ownerDocument,l=this.pool_.createBlade(r,n),b=this.pool_.createBladeApi(l);return this.add(b,n.index)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}setUpApi_(n){this.apiSet_.find(l=>l.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){const r=Rn(this.apiSet_,n.bladeController);this.apiSet_.remove(r)}}onRackInputChange_(n){const r=n.bladeController;if(r instanceof qt){const l=Rn(this.apiSet_,r),b=r.binding;this.emitter_.emit("change",{event:new h(l,b.target.read(),b.target.presetKey,n.options.last)})}else if(r instanceof bt){const l=Rn(this.apiSet_,r);this.emitter_.emit("change",{event:new h(l,r.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof ae))throw g.shouldNeverHappen();const r=Rn(this.apiSet_,n.bladeController),l=n.bladeController.binding;this.emitter_.emit("update",{event:new u(r,l.target.read(),l.target.presetKey)})}}class S extends rt{constructor(n,r){super(n,new ii(n.rackController,r)),this.emitter_=new A,this.controller_.foldable.value("expanded").emitter.on("change",l=>{this.emitter_.emit("fold",{event:new p(this,l.sender.rawValue)})}),this.rackApi_.on("change",l=>{this.emitter_.emit("change",{event:l})}),this.rackApi_.on("update",l=>{this.emitter_.emit("update",{event:l})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,r,l){return this.rackApi_.addInput(n,r,l)}addMonitor(n,r,l){return this.rackApi_.addMonitor(n,r,l)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){return this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}}class W extends se{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class ${constructor(n,r){const l=T(r.viewName);this.element=n.createElement("div"),this.element.classList.add(l()),r.viewProps.bindClassModifiers(this.element)}}function U(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof qt&&l.binding===n)return l}return null}function Z(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof ae&&l.binding===n)return l}return null}function Et(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof bt&&l.value===n)return l}return null}function Lt(s){return s instanceof zt?s.rack:s instanceof W?s.rackController.rack:null}function kt(s){const n=Lt(s);return n?n.bcSet_:null}class Ut{constructor(n){var r,l;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new A,this.blade_=(r=n.blade)!==null&&r!==void 0?r:null,(l=this.blade_)===null||l===void 0||l.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=n.viewProps,this.bcSet_=new ue(kt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,r){var l;(l=n.parent)===null||l===void 0||l.remove(n),x(n,"parent")?n.parent=this:(n.parent_=this,X({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(n,r)}remove(n){x(n,"parent")?n.parent=null:(n.parent_=null,X({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(r=>r instanceof n)}onSetAdd_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:r,sender:this}),!r)return;const l=n.item;if(l.viewProps.emitter.on("change",this.onChildViewPropsChange_),l.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),l.viewProps.handleDispose(this.onChildDispose_),l instanceof qt)l.binding.emitter.on("change",this.onChildInputChange_);else if(l instanceof ae)l.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(l instanceof bt)l.value.emitter.on("change",this.onChildValueChange_);else{const b=Lt(l);if(b){const D=b.emitter;D.on("layout",this.onDescendantLayout_),D.on("inputchange",this.onDescendantInputChange_),D.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:r,sender:this}),!r)return;const l=n.item;if(l instanceof qt)l.binding.emitter.off("change",this.onChildInputChange_);else if(l instanceof ae)l.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(l instanceof bt)l.value.emitter.off("change",this.onChildValueChange_);else{const b=Lt(l);if(b){const D=b.emitter;D.off("layout",this.onDescendantLayout_),D.off("inputchange",this.onDescendantInputChange_),D.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const n=this.bcSet_.items.filter(b=>!b.viewProps.get("hidden")),r=n[0],l=n[n.length-1];this.bcSet_.items.forEach(b=>{const D=[];b===r&&(D.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&D.push("veryfirst")),b===l&&(D.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&D.push("verylast")),b.blade.set("positions",D)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(r=>r.viewProps.get("disposed")).forEach(r=>{this.bcSet_.remove(r)})}onChildInputChange_(n){const r=U(this.find(qt),n.sender);if(!r)throw g.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onChildMonitorUpdate_(n){const r=Z(this.find(ae),n.sender);if(!r)throw g.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:r,sender:this})}onChildValueChange_(n){const r=Et(this.find(bt),n.sender);if(!r)throw g.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class zt extends se{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new $(n,{viewName:"brk",viewProps:r.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const l=new Ut({blade:r.root?void 0:r.blade,viewProps:r.viewProps});l.emitter.on("add",this.onRackAdd_),l.emitter.on("remove",this.onRackRemove_),this.rack=l,this.viewProps.handleDispose(()=>{for(let b=this.rack.children.length-1;b>=0;b--)this.rack.children[b].viewProps.set("disposed",!0)})}onRackAdd_(n){n.isRoot&&lt(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){n.isRoot&&ht(n.bladeController.view.element)}}const Bt=T("cnt");class Ht{constructor(n,r){var l;this.className_=T((l=r.viewName)!==null&&l!==void 0?l:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),Bt()),r.viewProps.bindClassModifiers(this.element),this.foldable_=r.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),y(this.foldable_,"completed",G(this.element,this.className_(void 0,"cpl")));const b=n.createElement("button");b.classList.add(this.className_("b")),y(r.props,"title",At=>{m(At)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),r.viewProps.bindDisabled(b),this.element.appendChild(b),this.buttonElement=b;const D=n.createElement("div");D.classList.add(this.className_("i")),this.element.appendChild(D);const F=n.createElement("div");F.classList.add(this.className_("t")),et(r.props.value("title"),F),this.buttonElement.appendChild(F),this.titleElement=F;const st=n.createElement("div");st.classList.add(this.className_("m")),this.buttonElement.appendChild(st);const Pt=r.containerElement;Pt.classList.add(this.className_("c")),this.element.appendChild(Pt),this.containerElement=Pt}}class te extends W{constructor(n,r){var l;const b=Nt.create((l=r.expanded)!==null&&l!==void 0?l:!0),D=new zt(n,{blade:r.blade,root:r.root,viewProps:r.viewProps});super(Object.assign(Object.assign({},r),{rackController:D,view:new Ht(n,{containerElement:D.view.element,foldable:b,props:r.props,viewName:r.root?"rot":void 0,viewProps:r.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=r.props,this.foldable=b,Y(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Se={id:"folder",type:"blade",accept(s){const n=nt,r=it(s,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return r?{params:r}:null},controller(s){return new te(s.document,{blade:s.blade,expanded:s.params.expanded,props:H.fromObject({title:s.params.title}),viewProps:s.viewProps})},api(s){return s.controller instanceof te?new S(s.controller,s.pool):null}};class ye extends bt{constructor(n,r){const l=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{value:r.valueController.value,view:new _t(n,{props:r.props,viewProps:l}),viewProps:l})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Qe extends o{}const re=T("spr");class Wt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(re()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("hr");l.classList.add(re("r")),this.element.appendChild(l)}}class ri extends se{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new Wt(n,{viewProps:r.viewProps})}))}}const he={id:"separator",type:"blade",accept(s){const r=it(s,{view:nt.required.constant("separator")});return r?{params:r}:null},controller(s){return new ri(s.document,{blade:s.blade,viewProps:s.viewProps})},api(s){return s.controller instanceof ri?new Qe(s.controller):null}},ke=T("tbi");class Mr{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ke()),r.viewProps.bindClassModifiers(this.element),y(r.props,"selected",D=>{D?this.element.classList.add(ke(void 0,"sel")):this.element.classList.remove(ke(void 0,"sel"))});const l=n.createElement("button");l.classList.add(ke("b")),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const b=n.createElement("div");b.classList.add(ke("t")),et(r.props.value("title"),b),this.buttonElement.appendChild(b),this.titleElement=b}}class In{constructor(n,r){this.emitter=new A,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new Mr(n,{props:r.props,viewProps:r.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class si{constructor(n,r){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new In(n,{props:r.itemProps,viewProps:Ot.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new zt(n,{blade:It(),viewProps:Ot.create()}),this.props=r.props,y(this.props,"selected",l=>{this.itemController.props.set("selected",l),this.contentController.viewProps.set("hidden",!l)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class ve{constructor(n,r){this.controller_=n,this.rackApi_=r}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addInput(n,r,l){return this.rackApi_.addInput(n,r,l)}addMonitor(n,r,l){return this.rackApi_.addMonitor(n,r,l)}addBlade(n){return this.rackApi_.addBlade(n)}}class tn extends rt{constructor(n,r){super(n,new ii(n.rackController,r)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new A,this.pageApiMap_=new Map,this.rackApi_.on("change",l=>{this.emitter_.emit("change",{event:l})}),this.rackApi_.on("update",l=>{this.emitter_.emit("update",{event:l})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(l=>{this.setUpPageApi_(l)})}get pages(){return this.controller_.pageSet.items.map(n=>{const r=this.pageApiMap_.get(n);if(!r)throw g.shouldNeverHappen();return r})}addPage(n){const r=this.controller_.view.element.ownerDocument,l=new si(r,{itemProps:H.fromObject({selected:!1,title:n.title}),props:H.fromObject({selected:!1})});this.controller_.add(l,n.index);const b=this.pageApiMap_.get(l);if(!b)throw g.shouldNeverHappen();return b}removePage(n){this.controller_.remove(n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}setUpPageApi_(n){const r=this.rackApi_.apiSet_.find(b=>b.controller_===n.contentController);if(!r)throw g.shouldNeverHappen();const l=new ve(n,r);this.pageApiMap_.set(n,l)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw g.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new d(this,n.rawValue)})}}const oi=-1;class Ee{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=tt(!0),this.selectedIndex=tt(oi),this.items_=[]}add(n,r){const l=r??this.items_.length;this.items_.splice(l,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){const r=this.items_.indexOf(n);r<0||(this.items_.splice(r,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=oi,this.empty.rawValue=!0;return}const n=this.items_.findIndex(r=>r.rawValue);n<0?(this.items_.forEach((r,l)=>{r.rawValue=l===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((r,l)=>{r.rawValue=l===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){const r=this.items_.findIndex(l=>l===n.sender);this.items_.forEach((l,b)=>{l.rawValue=b===r}),this.selectedIndex.rawValue=r}else this.keepSelection_()}}const on=T("tab");class as{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(on(),Bt()),r.viewProps.bindClassModifiers(this.element),z(r.empty,G(this.element,on(void 0,"nop")));const l=n.createElement("div");l.classList.add(on("t")),this.element.appendChild(l),this.itemsElement=l;const b=n.createElement("div");b.classList.add(on("i")),this.element.appendChild(b);const D=r.contentsElement;D.classList.add(on("c")),this.element.appendChild(D),this.contentsElement=D}}class Gi extends W{constructor(n,r){const l=new zt(n,{blade:r.blade,viewProps:r.viewProps}),b=new Ee;super({blade:r.blade,rackController:l,view:new as(n,{contentsElement:l.view.element,empty:b.empty,viewProps:r.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new ue(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=b}get pageSet(){return this.pageSet_}add(n,r){this.pageSet_.add(n,r)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){const r=n.item;lt(this.view.itemsElement,r.itemController.view.element,n.index),r.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(r.contentController,n.index),this.tab.add(r.props.value("selected"))}onPageRemove_(n){const r=n.item;ht(r.itemController.view.element),r.itemController.viewProps.set("parent",null),this.rackController.rack.remove(r.contentController),this.tab.remove(r.props.value("selected"))}}const ko={id:"tab",type:"blade",accept(s){const n=nt,r=it(s,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!r||r.pages.length===0?null:{params:r}},controller(s){const n=new Gi(s.document,{blade:s.blade,viewProps:s.viewProps});return s.params.pages.forEach(r=>{const l=new si(s.document,{itemProps:H.fromObject({selected:!1,title:r.title}),props:H.fromObject({selected:!1})});n.add(l)}),n},api(s){return s.controller instanceof Gi?new tn(s.controller,s.pool):null}};function kc(s,n){const r=s.accept(n.params);if(!r)return null;const l=nt.optional.boolean(n.params.disabled).value,b=nt.optional.boolean(n.params.hidden).value;return s.controller({blade:It(),document:n.document,params:Object.assign(Object.assign({},r.params),{disabled:l,hidden:b}),viewProps:Ot.create({disabled:l,hidden:b})})}class Fc{constructor(){this.disabled=!1,this.emitter=new A}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Oc{constructor(n,r){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new A,this.interval_=r,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Uc{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new A,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){const n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function Fo(s,n){for(;s.length<n;)s.push(void 0)}function Vc(s){const n=[];return Fo(n,s),tt(n)}function zc(s){const n=s.indexOf(void 0);return n<0?s:s.slice(0,n)}function Bc(s,n){const r=[...zc(s),n];return r.length>s.length?r.splice(0,r.length-s.length):Fo(r,s.length),r}class Gc{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new A,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const n=this.target.read();if(n===void 0)return;const r=this.value.rawValue,l=this.reader_(n);this.value.rawValue=Bc(r,l),this.emitter.emit("update",{rawValue:l,sender:this})}onTick_(n){this.read()}}class Hi{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((r,l)=>l.constrain(r),n)}}function an(s,n){if(s instanceof n)return s;if(s instanceof Hi){const r=s.constraints.reduce((l,b)=>l||(b instanceof n?b:null),null);if(r)return r}return null}class ai{constructor(n){this.values=H.fromObject({max:n.max,min:n.min})}constrain(n){const r=this.values.get("max"),l=this.values.get("min");return Math.min(Math.max(n,l),r)}}class Wi{constructor(n){this.values=H.fromObject({options:n})}get options(){return this.values.get("options")}constrain(n){const r=this.values.get("options");return r.length===0||r.filter(b=>b.value===n).length>0?n:r[0].value}}class Oo{constructor(n){this.values=H.fromObject({max:n.max,min:n.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(n){const r=this.values.get("max"),l=this.values.get("min");let b=n;return m(l)||(b=Math.max(b,l)),m(r)||(b=Math.min(b,r)),b}}class Sr{constructor(n,r=0){this.step=n,this.origin=r}constrain(n){const r=this.origin%this.step,l=Math.round((n-r)/this.step);return r+l*this.step}}const ls=T("lst");class Hc{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.props_=r.props,this.element=n.createElement("div"),this.element.classList.add(ls()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("select");l.classList.add(ls("s")),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.selectElement=l;const b=n.createElement("div");b.classList.add(ls("m")),b.appendChild(K(n,"dropdown")),this.element.appendChild(b),r.value.emitter.on("change",this.onValueChange_),this.value_=r.value,y(this.props_,"options",D=>{ft(this.selectElement),D.forEach(F=>{const st=n.createElement("option");st.textContent=F.text,this.selectElement.appendChild(st)}),this.update_()})}update_(){const n=this.props_.get("options").map(r=>r.value);this.selectElement.selectedIndex=n.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class ji{constructor(n,r){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new Hc(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){const r=n.currentTarget;this.value.rawValue=this.props.get("options")[r.selectedIndex].value}}const Uo=T("pop");class Wc{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Uo()),r.viewProps.bindClassModifiers(this.element),z(r.shows,G(this.element,Uo(void 0,"v")))}}class Vo{constructor(n,r){this.shows=tt(!1),this.viewProps=r.viewProps,this.view=new Wc(n,{shows:this.shows,viewProps:this.viewProps})}}const zo=T("txt");class jc{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(zo()),r.viewProps.bindClassModifiers(this.element),this.props_=r.props,this.props_.emitter.on("change",this.onChange_);const l=n.createElement("input");l.classList.add(zo("i")),l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,r.value.emitter.on("change",this.onChange_),this.value_=r.value,this.refresh()}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class Er{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=r.parser,this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new jc(n,{props:r.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const l=n.currentTarget.value,b=this.parser_(l);m(b)||(this.value.rawValue=b),this.view.refresh()}}function qc(s){return String(s)}function Bo(s){return s==="false"?!1:!!s}function Go(s){return qc(s)}class Xc{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}const Kc={"**":(s,n)=>Math.pow(s,n),"*":(s,n)=>s*n,"/":(s,n)=>s/n,"%":(s,n)=>s%n,"+":(s,n)=>s+n,"-":(s,n)=>s-n,"<<":(s,n)=>s<<n,">>":(s,n)=>s>>n,">>>":(s,n)=>s>>>n,"&":(s,n)=>s&n,"^":(s,n)=>s^n,"|":(s,n)=>s|n};class Yc{constructor(n,r,l){this.left=r,this.operator=n,this.right=l}evaluate(){const n=Kc[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const $c={"+":s=>s,"-":s=>-s,"~":s=>~s};class Zc{constructor(n,r){this.operator=n,this.expression=r}evaluate(){const n=$c[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function cs(s){return(n,r)=>{for(let l=0;l<s.length;l++){const b=s[l](n,r);if(b!=="")return b}return""}}function qi(s,n){var r;const l=s.substr(n).match(/^\s+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Jc(s,n){const r=s.substr(n,1);return r.match(/^[1-9]$/)?r:""}function Xi(s,n){var r;const l=s.substr(n).match(/^[0-9]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Qc(s,n){const r=Xi(s,n);if(r!=="")return r;const l=s.substr(n,1);if(n+=1,l!=="-"&&l!=="+")return"";const b=Xi(s,n);return b===""?"":l+b}function us(s,n){const r=s.substr(n,1);if(n+=1,r.toLowerCase()!=="e")return"";const l=Qc(s,n);return l===""?"":r+l}function Ho(s,n){const r=s.substr(n,1);if(r==="0")return r;const l=Jc(s,n);return n+=l.length,l===""?"":l+Xi(s,n)}function tu(s,n){const r=Ho(s,n);if(n+=r.length,r==="")return"";const l=s.substr(n,1);if(n+=l.length,l!==".")return"";const b=Xi(s,n);return n+=b.length,r+l+b+us(s,n)}function eu(s,n){const r=s.substr(n,1);if(n+=r.length,r!==".")return"";const l=Xi(s,n);return n+=l.length,l===""?"":r+l+us(s,n)}function nu(s,n){const r=Ho(s,n);return n+=r.length,r===""?"":r+us(s,n)}const iu=cs([tu,eu,nu]);function ru(s,n){var r;const l=s.substr(n).match(/^[01]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function su(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0b")return"";const l=ru(s,n);return l===""?"":r+l}function ou(s,n){var r;const l=s.substr(n).match(/^[0-7]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function au(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0o")return"";const l=ou(s,n);return l===""?"":r+l}function lu(s,n){var r;const l=s.substr(n).match(/^[0-9a-f]+/i);return(r=l&&l[0])!==null&&r!==void 0?r:""}function cu(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0x")return"";const l=lu(s,n);return l===""?"":r+l}const uu=cs([su,au,cu]),hu=cs([uu,iu]);function du(s,n){const r=hu(s,n);return n+=r.length,r===""?null:{evaluable:new Xc(r),cursor:n}}function pu(s,n){const r=s.substr(n,1);if(n+=r.length,r!=="(")return null;const l=jo(s,n);if(!l)return null;n=l.cursor,n+=qi(s,n).length;const b=s.substr(n,1);return n+=b.length,b!==")"?null:{evaluable:l.evaluable,cursor:n}}function fu(s,n){var r;return(r=du(s,n))!==null&&r!==void 0?r:pu(s,n)}function Wo(s,n){const r=fu(s,n);if(r)return r;const l=s.substr(n,1);if(n+=l.length,l!=="+"&&l!=="-"&&l!=="~")return null;const b=Wo(s,n);return b?(n=b.cursor,{cursor:n,evaluable:new Zc(l,b.evaluable)}):null}function mu(s,n,r){r+=qi(n,r).length;const l=s.filter(b=>n.startsWith(b,r))[0];return l?(r+=l.length,r+=qi(n,r).length,{cursor:r,operator:l}):null}function gu(s,n){return(r,l)=>{const b=s(r,l);if(!b)return null;l=b.cursor;let D=b.evaluable;for(;;){const F=mu(n,r,l);if(!F)break;l=F.cursor;const st=s(r,l);if(!st)return null;l=st.cursor,D=new Yc(F.operator,D,st.evaluable)}return D?{cursor:l,evaluable:D}:null}}const _u=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((s,n)=>gu(s,n),Wo);function jo(s,n){return n+=qi(s,n).length,_u(s,n)}function vu(s){const n=jo(s,0);return!n||n.cursor+qi(s,n.cursor).length!==s.length?null:n.evaluable}function ln(s){var n;const r=vu(s);return(n=r==null?void 0:r.evaluate())!==null&&n!==void 0?n:null}function qo(s){if(typeof s=="number")return s;if(typeof s=="string"){const n=ln(s);if(!m(n))return n}return 0}function bu(s){return String(s)}function xe(s){return n=>n.toFixed(Math.max(Math.min(s,20),0))}const xu=xe(0);function Cr(s){return xu(s)+"%"}function Xo(s){return String(s)}function hs(s){return s}function Ki({primary:s,secondary:n,forward:r,backward:l}){let b=!1;function D(F){b||(b=!0,F(),b=!1)}s.emitter.on("change",F=>{D(()=>{n.setRawValue(r(s,n),F.options)})}),n.emitter.on("change",F=>{D(()=>{s.setRawValue(l(s,n),F.options)}),D(()=>{n.setRawValue(r(s,n),F.options)})}),D(()=>{n.setRawValue(r(s,n),{forceEmit:!1,last:!0})})}function Le(s,n){const r=s*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+r:n.downKey?-r:0}function Yi(s){return{altKey:s.altKey,downKey:s.key==="ArrowDown",shiftKey:s.shiftKey,upKey:s.key==="ArrowUp"}}function cn(s){return{altKey:s.altKey,downKey:s.key==="ArrowLeft",shiftKey:s.shiftKey,upKey:s.key==="ArrowRight"}}function wu(s){return s==="ArrowUp"||s==="ArrowDown"}function Ko(s){return wu(s)||s==="ArrowLeft"||s==="ArrowRight"}function ds(s,n){var r,l;const b=n.ownerDocument.defaultView,D=n.getBoundingClientRect();return{x:s.pageX-(((r=b&&b.scrollX)!==null&&r!==void 0?r:0)+D.left),y:s.pageY-(((l=b&&b.scrollY)!==null&&l!==void 0?l:0)+D.top)}}class Nn{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new A,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){const r=this.elem_.getBoundingClientRect();return{bounds:{width:r.width,height:r.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var r;n.preventDefault(),(r=n.currentTarget)===null||r===void 0||r.focus();const l=this.elem_.ownerDocument;l.addEventListener("mousemove",this.onDocumentMouseMove_),l.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(ds(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(ds(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){const r=this.elem_.ownerDocument;r.removeEventListener("mousemove",this.onDocumentMouseMove_),r.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(ds(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();const r=n.targetTouches.item(0),l=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-l.left,y:r.clientY-l.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchMove_(n){const r=n.targetTouches.item(0),l=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-l.left,y:r.clientY-l.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchEnd_(n){var r;const l=(r=n.targetTouches.item(0))!==null&&r!==void 0?r:this.lastTouch_,b=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(l?{x:l.clientX-b.left,y:l.clientY-b.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function ee(s,n,r,l,b){const D=(s-n)/(r-n);return l+D*(b-l)}function Yo(s){return String(s.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function fe(s,n,r){return Math.min(Math.max(s,n),r)}function $o(s,n){return(s%n+n)%n}const Ge=T("txt");class yu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(Ge(),Ge(void 0,"num")),r.arrayPosition&&this.element.classList.add(Ge(void 0,r.arrayPosition)),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("input");l.classList.add(Ge("i")),l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=r.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ge()),this.inputElement.classList.add(Ge("i"));const b=n.createElement("div");b.classList.add(Ge("k")),this.element.appendChild(b),this.knobElement=b;const D=n.createElementNS(Yt,"svg");D.classList.add(Ge("g")),this.knobElement.appendChild(D);const F=n.createElementNS(Yt,"path");F.classList.add(Ge("gb")),D.appendChild(F),this.guideBodyElem_=F;const st=n.createElementNS(Yt,"path");st.classList.add(Ge("gh")),D.appendChild(st),this.guideHeadElem_=st;const Pt=n.createElement("div");Pt.classList.add(T("tt")()),this.knobElement.appendChild(Pt),this.tooltipElem_=Pt,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove(Ge(void 0,"drg"));return}this.element.classList.add(Ge(void 0,"drg"));const r=n.rawValue/this.props_.get("draggingScale"),l=r+(r>0?-1:r<0?1:0),b=fe(-l,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${l+b},0 L${l},4 L${l+b},8`,`M ${r},-1 L${r},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${r},4`);const D=this.props_.get("formatter");this.tooltipElem_.textContent=D(this.value.rawValue),this.tooltipElem_.style.left=`${r}px`}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class $i{constructor(n,r){var l;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.parser_=r.parser,this.props=r.props,this.sliderProps_=(l=r.sliderProps)!==null&&l!==void 0?l:null,this.value=r.value,this.viewProps=r.viewProps,this.dragging_=tt(null),this.view=new yu(n,{arrayPosition:r.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const b=new Nn(this.view.knobElement);b.emitter.on("down",this.onPointerDown_),b.emitter.on("move",this.onPointerMove_),b.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var r,l;const b=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("minValue"),D=(l=this.sliderProps_)===null||l===void 0?void 0:l.get("maxValue");let F=n;return b!==void 0&&(F=Math.max(F,b)),D!==void 0&&(F=Math.min(F,D)),F}onInputChange_(n){const l=n.currentTarget.value,b=this.parser_(l);m(b)||(this.value.rawValue=this.constrainValue_(b)),this.view.refresh()}onInputKeyDown_(n){const r=Le(this.baseStep_,Yi(n));r!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+r),{forceEmit:!1,last:!1})}onInputKeyUp_(n){Le(this.baseStep_,Yi(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;const r=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+r*this.props.get("draggingScale"))}onPointerMove_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ps=T("sld");class Mu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(ps()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(ps("t")),r.viewProps.bindTabIndex(l),this.element.appendChild(l),this.trackElement=l;const b=n.createElement("div");b.classList.add(ps("k")),this.trackElement.appendChild(b),this.knobElement=b,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.update_()}update_(){const n=fe(ee(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class Su{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.value=r.value,this.viewProps=r.viewProps,this.props=r.props,this.view=new Mu(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Nn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){n.point&&this.value.setRawValue(ee(fe(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),r)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Le(this.baseStep_,cn(n));r!==0&&this.value.setRawValue(this.value.rawValue+r,{forceEmit:!1,last:!1})}onKeyUp_(n){Le(this.baseStep_,cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fs=T("sldtxt");class Eu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(fs());const l=n.createElement("div");l.classList.add(fs("s")),this.sliderView_=r.sliderView,l.appendChild(this.sliderView_.element),this.element.appendChild(l);const b=n.createElement("div");b.classList.add(fs("t")),this.textView_=r.textView,b.appendChild(this.textView_.element),this.element.appendChild(b)}}class ms{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.sliderC_=new Su(n,{baseStep:r.baseStep,props:r.sliderProps,value:r.value,viewProps:this.viewProps}),this.textC_=new $i(n,{baseStep:r.baseStep,parser:r.parser,props:r.textProps,sliderProps:r.sliderProps,value:r.value,viewProps:r.viewProps}),this.view=new Eu(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Zi(s,n){s.write(n)}function Pr(s){const n=nt;if(Array.isArray(s))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(s).value;if(typeof s=="object")return n.required.raw(s).value}function Zo(s){if(s==="inline"||s==="popup")return s}function vn(s){const n=nt;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(s).value}function Jo(s){if(Array.isArray(s))return s;const n=[];return Object.keys(s).forEach(r=>{n.push({text:r,value:s[r]})}),n}function gs(s){return m(s)?null:new Wi(Jo(s))}function Cu(s){const n=s?an(s,Sr):null;return n?n.step:null}function Tr(s,n){const r=s&&an(s,Sr);return r?Yo(r.step):Math.max(Yo(n),2)}function li(s){const n=Cu(s);return n??1}function ci(s,n){var r;const l=s&&an(s,Sr),b=Math.abs((r=l==null?void 0:l.step)!==null&&r!==void 0?r:n);return b===0?.1:Math.pow(10,Math.floor(Math.log10(b))-1)}const Ar=T("ckb");class Pu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Ar()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("label");l.classList.add(Ar("l")),this.element.appendChild(l);const b=n.createElement("input");b.classList.add(Ar("i")),b.type="checkbox",l.appendChild(b),this.inputElement=b,r.viewProps.bindDisabled(this.inputElement);const D=n.createElement("div");D.classList.add(Ar("w")),l.appendChild(D);const F=K(n,"check");D.appendChild(F),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Tu{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Pu(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const r=n.currentTarget;this.value.rawValue=r.checked}}function Au(s){const n=[],r=gs(s.options);return r&&n.push(r),new Hi(n)}const Lu={id:"input-bool",type:"input",accept:(s,n)=>{if(typeof s!="boolean")return null;const l=it(n,{options:nt.optional.custom(Pr)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Bo,constraint:s=>Au(s.params),writer:s=>Zi},controller:s=>{const n=s.document,r=s.value,l=s.constraint,b=l&&an(l,Wi);return b?new ji(n,{props:new H({options:b.values.value("options")}),value:r,viewProps:s.viewProps}):new Tu(n,{value:r,viewProps:s.viewProps})}},kn=T("col");class Du{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(kn()),r.foldable.bindExpandedClass(this.element,kn(void 0,"expanded")),y(r.foldable,"completed",G(this.element,kn(void 0,"cpl")));const l=n.createElement("div");l.classList.add(kn("h")),this.element.appendChild(l);const b=n.createElement("div");b.classList.add(kn("s")),l.appendChild(b),this.swatchElement=b;const D=n.createElement("div");if(D.classList.add(kn("t")),l.appendChild(D),this.textElement=D,r.pickerLayout==="inline"){const F=n.createElement("div");F.classList.add(kn("p")),this.element.appendChild(F),this.pickerElement=F}else this.pickerElement=null}}function Ru(s,n,r){const l=fe(s/255,0,1),b=fe(n/255,0,1),D=fe(r/255,0,1),F=Math.max(l,b,D),st=Math.min(l,b,D),Pt=F-st;let At=0,Kt=0;const $t=(st+F)/2;return Pt!==0&&(Kt=Pt/(1-Math.abs(F+st-1)),l===F?At=(b-D)/Pt:b===F?At=2+(D-l)/Pt:At=4+(l-b)/Pt,At=At/6+(At<0?1:0)),[At*360,Kt*100,$t*100]}function Iu(s,n,r){const l=(s%360+360)%360,b=fe(n/100,0,1),D=fe(r/100,0,1),F=(1-Math.abs(2*D-1))*b,st=F*(1-Math.abs(l/60%2-1)),Pt=D-F/2;let At,Kt,$t;return l>=0&&l<60?[At,Kt,$t]=[F,st,0]:l>=60&&l<120?[At,Kt,$t]=[st,F,0]:l>=120&&l<180?[At,Kt,$t]=[0,F,st]:l>=180&&l<240?[At,Kt,$t]=[0,st,F]:l>=240&&l<300?[At,Kt,$t]=[st,0,F]:[At,Kt,$t]=[F,0,st],[(At+Pt)*255,(Kt+Pt)*255,($t+Pt)*255]}function Nu(s,n,r){const l=fe(s/255,0,1),b=fe(n/255,0,1),D=fe(r/255,0,1),F=Math.max(l,b,D),st=Math.min(l,b,D),Pt=F-st;let At;Pt===0?At=0:F===l?At=60*(((b-D)/Pt%6+6)%6):F===b?At=60*((D-l)/Pt+2):At=60*((l-b)/Pt+4);const Kt=F===0?0:Pt/F,$t=F;return[At,Kt*100,$t*100]}function Qo(s,n,r){const l=$o(s,360),b=fe(n/100,0,1),D=fe(r/100,0,1),F=D*b,st=F*(1-Math.abs(l/60%2-1)),Pt=D-F;let At,Kt,$t;return l>=0&&l<60?[At,Kt,$t]=[F,st,0]:l>=60&&l<120?[At,Kt,$t]=[st,F,0]:l>=120&&l<180?[At,Kt,$t]=[0,F,st]:l>=180&&l<240?[At,Kt,$t]=[0,st,F]:l>=240&&l<300?[At,Kt,$t]=[st,0,F]:[At,Kt,$t]=[F,0,st],[(At+Pt)*255,(Kt+Pt)*255,($t+Pt)*255]}function ku(s,n,r){const l=r+n*(100-Math.abs(2*r-100))/200;return[s,l!==0?n*(100-Math.abs(2*r-100))/l:0,r+n*(100-Math.abs(2*r-100))/(2*100)]}function Fu(s,n,r){const l=100-Math.abs(r*(200-n)/100-100);return[s,l!==0?n*r/l:0,r*(200-n)/(2*100)]}function Fn(s){return[s[0],s[1],s[2]]}function ta(s,n){return[s[0],s[1],s[2],n]}const Ou={hsl:{hsl:(s,n,r)=>[s,n,r],hsv:ku,rgb:Iu},hsv:{hsl:Fu,hsv:(s,n,r)=>[s,n,r],rgb:Qo},rgb:{hsl:Ru,hsv:Nu,rgb:(s,n,r)=>[s,n,r]}};function Lr(s,n){return[n==="float"?1:s==="rgb"?255:360,n==="float"?1:s==="rgb"?255:100,n==="float"?1:s==="rgb"?255:100]}function Uu(s,n){return s===n?n:$o(s,n)}function Vu(s,n,r){var l;const b=Lr(n,r);return[n==="rgb"?fe(s[0],0,b[0]):Uu(s[0],b[0]),fe(s[1],0,b[1]),fe(s[2],0,b[2]),fe((l=s[3])!==null&&l!==void 0?l:1,0,1)]}function ea(s,n,r,l){const b=Lr(n,r),D=Lr(n,l);return s.map((F,st)=>F/b[st]*D[st])}function zu(s,n,r){const l=ea(s,n.mode,n.type,"int"),b=Ou[n.mode][r.mode](...l);return ea(b,r.mode,"int",r.type)}function Dr(s,n){return typeof s!="object"||m(s)?!1:n in s&&typeof s[n]=="number"}class Gt{static black(n="int"){return new Gt([0,0,0],"rgb",n)}static fromObject(n,r="int"){const l="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new Gt(l,"rgb",r)}static toRgbaObject(n,r="int"){return n.toRgbaObject(r)}static isRgbColorObject(n){return Dr(n,"r")&&Dr(n,"g")&&Dr(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&Dr(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,r){if(n.mode!==r.mode)return!1;const l=n.comps_,b=r.comps_;for(let D=0;D<l.length;D++)if(l[D]!==b[D])return!1;return!0}constructor(n,r,l="int"){this.mode=r,this.type=l,this.comps_=Vu(n,r,l)}getComponents(n,r="int"){return ta(zu(Fn(this.comps_),{mode:this.mode,type:this.type},{mode:n??this.mode,type:r}),this.comps_[3])}toRgbaObject(n="int"){const r=this.getComponents("rgb",n);return{r:r[0],g:r[1],b:r[2],a:r[3]}}}const bn=T("colp");class Bu{constructor(n,r){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(bn()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(bn("hsv"));const b=n.createElement("div");b.classList.add(bn("sv")),this.svPaletteView_=r.svPaletteView,b.appendChild(this.svPaletteView_.element),l.appendChild(b);const D=n.createElement("div");D.classList.add(bn("h")),this.hPaletteView_=r.hPaletteView,D.appendChild(this.hPaletteView_.element),l.appendChild(D),this.element.appendChild(l);const F=n.createElement("div");if(F.classList.add(bn("rgb")),this.textView_=r.textView,F.appendChild(this.textView_.element),this.element.appendChild(F),r.alphaViews){this.alphaViews_={palette:r.alphaViews.palette,text:r.alphaViews.text};const st=n.createElement("div");st.classList.add(bn("a"));const Pt=n.createElement("div");Pt.classList.add(bn("ap")),Pt.appendChild(this.alphaViews_.palette.element),st.appendChild(Pt);const At=n.createElement("div");At.classList.add(bn("at")),At.appendChild(this.alphaViews_.text.element),st.appendChild(At),this.element.appendChild(st)}}get allFocusableElements(){const n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(r=>r.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function Gu(s){return s==="int"?"int":s==="float"?"float":void 0}function _s(s){const n=nt;return it(s,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(Gu)}),expanded:n.optional.boolean,picker:n.optional.custom(Zo)})}function On(s){return s?.1:1}function Un(s){var n;return(n=s.color)===null||n===void 0?void 0:n.type}function Hu(s,n){return s.alpha===n.alpha&&s.mode===n.mode&&s.notation===n.notation&&s.type===n.type}function He(s,n){const r=s.match(/^(.+)%$/);return Math.min(r?parseFloat(r[1])*.01*n:parseFloat(s),n)}const Wu={deg:s=>s,grad:s=>s*360/400,rad:s=>s*360/(2*Math.PI),turn:s=>s*360};function na(s){const n=s.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(s);const r=parseFloat(n[1]),l=n[2];return Wu[l](r)}function ia(s){const n=s.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[He(n[1],255),He(n[2],255),He(n[3],255)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ra(s){return n=>{const r=ia(n);return r?new Gt(r,"rgb",s):null}}function sa(s){const n=s.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[He(n[1],255),He(n[2],255),He(n[3],255),He(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function oa(s){return n=>{const r=sa(n);return r?new Gt(r,"rgb",s):null}}function aa(s){const n=s.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[na(n[1]),He(n[2],100),He(n[3],100)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function la(s){return n=>{const r=aa(n);return r?new Gt(r,"hsl",s):null}}function ca(s){const n=s.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[na(n[1]),He(n[2],100),He(n[3],100),He(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function ua(s){return n=>{const r=ca(n);return r?new Gt(r,"hsl",s):null}}function ha(s){const n=s.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];const r=s.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}function ju(s){const n=ha(s);return n?new Gt(n,"rgb","int"):null}function da(s){const n=s.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),ee(parseInt(n[4]+n[4],16),0,255,0,1)];const r=s.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),ee(parseInt(r[4],16),0,255,0,1)]:null}function qu(s){const n=da(s);return n?new Gt(n,"rgb","int"):null}function pa(s){const n=s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function fa(s){return n=>{const r=pa(n);return r?new Gt(r,"rgb",s):null}}function ma(s){const n=s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function ga(s){return n=>{const r=ma(n);return r?new Gt(r,"rgb",s):null}}const Xu=[{parser:ha,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:da,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ia,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:sa,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:aa,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ca,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:pa,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ma,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ku(s){return Xu.reduce((n,{parser:r,result:l})=>n||(r(s)?l:null),null)}function vs(s,n="int"){const r=Ku(s);return r?r.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},r),{type:"int"}):r.notation==="func"?Object.assign(Object.assign({},r),{type:n}):null:null}const _a={int:[ju,qu,ra("int"),oa("int"),la("int"),ua("int"),fa("int"),ga("int")],float:[ra("float"),oa("float"),la("float"),ua("float"),fa("float"),ga("float")]};function Yu(s){const n=_a[s];return r=>{if(typeof r!="string")return Gt.black(s);const l=n.reduce((b,D)=>b||D(r),null);return l??Gt.black(s)}}function bs(s){const n=_a[s];return r=>n.reduce((l,b)=>l||b(r),null)}function va(s){const n=fe(Math.floor(s),0,255).toString(16);return n.length===1?`0${n}`:n}function ba(s,n="#"){const r=Fn(s.getComponents("rgb")).map(va).join("");return`${n}${r}`}function xs(s,n="#"){const r=s.getComponents("rgb"),l=[r[0],r[1],r[2],r[3]*255].map(va).join("");return`${n}${l}`}function xa(s,n){const r=xe(n==="float"?2:0);return`rgb(${Fn(s.getComponents("rgb",n)).map(b=>r(b)).join(", ")})`}function $u(s){return n=>xa(n,s)}function Rr(s,n){const r=xe(2),l=xe(n==="float"?2:0);return`rgba(${s.getComponents("rgb",n).map((D,F)=>(F===3?r:l)(D)).join(", ")})`}function Zu(s){return n=>Rr(n,s)}function Ju(s){const n=[xe(0),Cr,Cr];return`hsl(${Fn(s.getComponents("hsl")).map((l,b)=>n[b](l)).join(", ")})`}function Qu(s){const n=[xe(0),Cr,Cr,xe(2)];return`hsla(${s.getComponents("hsl").map((l,b)=>n[b](l)).join(", ")})`}function wa(s,n){const r=xe(n==="float"?2:0),l=["r","g","b"];return`{${Fn(s.getComponents("rgb",n)).map((D,F)=>`${l[F]}: ${r(D)}`).join(", ")}}`}function th(s){return n=>wa(n,s)}function ya(s,n){const r=xe(2),l=xe(n==="float"?2:0),b=["r","g","b","a"];return`{${s.getComponents("rgb",n).map((F,st)=>{const Pt=st===3?r:l;return`${b[st]}: ${Pt(F)}`}).join(", ")}}`}function eh(s){return n=>ya(n,s)}const nh=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ba},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:xs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ju},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Qu},...["int","float"].reduce((s,n)=>[...s,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:$u(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:Zu(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:th(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:eh(n)}],[])];function ws(s){return nh.reduce((n,r)=>n||(Hu(r.format,s)?r.stringifier:null),null)}const Ji=T("apl");class ih{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ji()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const l=n.createElement("div");l.classList.add(Ji("b")),this.element.appendChild(l);const b=n.createElement("div");b.classList.add(Ji("c")),l.appendChild(b),this.colorElem_=b;const D=n.createElement("div");D.classList.add(Ji("m")),this.element.appendChild(D),this.markerElem_=D;const F=n.createElement("div");F.classList.add(Ji("p")),this.markerElem_.appendChild(F),this.previewElem_=F,this.update_()}update_(){const n=this.value.rawValue,r=n.getComponents("rgb"),l=new Gt([r[0],r[1],r[2],0],"rgb"),b=new Gt([r[0],r[1],r[2],255],"rgb"),D=["to right",Rr(l),Rr(b)];this.colorElem_.style.background=`linear-gradient(${D.join(",")})`,this.previewElem_.style.backgroundColor=Rr(n);const F=ee(r[3],0,1,0,100);this.markerElem_.style.left=`${F}%`}onValueChange_(){this.update_()}}class rh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new ih(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=n.point.x/n.bounds.width,b=this.value.rawValue,[D,F,st]=b.getComponents("hsv");this.value.setRawValue(new Gt([D,F,st,l],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Le(On(!0),cn(n));if(r===0)return;const l=this.value.rawValue,[b,D,F,st]=l.getComponents("hsv");this.value.setRawValue(new Gt([b,D,F,st+r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Le(On(!0),cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ui=T("coltxt");function sh(s){const n=s.createElement("select"),r=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(r.reduce((l,b)=>{const D=s.createElement("option");return D.textContent=b.text,D.value=b.value,l.appendChild(D),l},s.createDocumentFragment())),n}class oh{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ui()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(ui("m")),this.modeElem_=sh(n),this.modeElem_.classList.add(ui("ms")),l.appendChild(this.modeSelectElement),r.viewProps.bindDisabled(this.modeElem_);const b=n.createElement("div");b.classList.add(ui("mm")),b.appendChild(K(n,"dropdown")),l.appendChild(b),this.element.appendChild(l);const D=n.createElement("div");D.classList.add(ui("w")),this.element.appendChild(D),this.textsElem_=D,this.textViews_=r.textViews,this.applyTextViews_(),z(r.colorMode,F=>{this.modeElem_.value=F})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){ft(this.textsElem_);const n=this.element.ownerDocument;this.textViews_.forEach(r=>{const l=n.createElement("div");l.classList.add(ui("c")),l.appendChild(r.element),this.textsElem_.appendChild(l)})}}function ah(s){return xe(s==="float"?2:0)}function lh(s,n,r){const l=Lr(s,n)[r];return new ai({min:0,max:l})}function ys(s,n,r){return new $i(s,{arrayPosition:r===0?"fst":r===3-1?"lst":"mid",baseStep:On(!1),parser:n.parser,props:H.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:ah(n.colorType)}),value:tt(0,{constraint:lh(n.colorMode,n.colorType,r)}),viewProps:n.viewProps})}class ch{constructor(n,r){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=r.colorType,this.parser_=r.parser,this.value=r.value,this.viewProps=r.viewProps,this.colorMode=tt(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new oh(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){const r={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},l=[ys(n,r,0),ys(n,r,1),ys(n,r,2)];return l.forEach((b,D)=>{Ki({primary:this.value,secondary:b.value,forward:F=>F.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[D],backward:(F,st)=>{const Pt=this.colorMode.rawValue,At=F.rawValue.getComponents(Pt,this.colorType_);return At[D]=st.rawValue,new Gt(ta(Fn(At),At[3]),Pt,this.colorType_)}})}),l}onModeSelectChange_(n){const r=n.currentTarget;this.colorMode.rawValue=r.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ms=T("hpl");class uh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ms()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const l=n.createElement("div");l.classList.add(Ms("c")),this.element.appendChild(l);const b=n.createElement("div");b.classList.add(Ms("m")),this.element.appendChild(b),this.markerElem_=b,this.update_()}update_(){const n=this.value.rawValue,[r]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=xa(new Gt([r,100,100],"hsv"));const l=ee(r,0,360,0,100);this.markerElem_.style.left=`${l}%`}onValueChange_(){this.update_()}}class hh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new uh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=ee(fe(n.point.x,0,n.bounds.width),0,n.bounds.width,0,360),b=this.value.rawValue,[,D,F,st]=b.getComponents("hsv");this.value.setRawValue(new Gt([l,D,F,st],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Le(On(!1),cn(n));if(r===0)return;const l=this.value.rawValue,[b,D,F,st]=l.getComponents("hsv");this.value.setRawValue(new Gt([b+r,D,F,st],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Le(On(!1),cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ss=T("svp"),Ma=64;class dh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ss()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const l=n.createElement("canvas");l.height=Ma,l.width=Ma,l.classList.add(Ss("c")),this.element.appendChild(l),this.canvasElement=l;const b=n.createElement("div");b.classList.add(Ss("m")),this.element.appendChild(b),this.markerElem_=b,this.update_()}update_(){const n=L(this.canvasElement);if(!n)return;const l=this.value.rawValue.getComponents("hsv"),b=this.canvasElement.width,D=this.canvasElement.height,F=n.getImageData(0,0,b,D),st=F.data;for(let Kt=0;Kt<D;Kt++)for(let $t=0;$t<b;$t++){const Vn=ee($t,0,b,0,100),tr=ee(Kt,0,D,100,0),er=Qo(l[0],Vn,tr),Ir=(Kt*b+$t)*4;st[Ir]=er[0],st[Ir+1]=er[1],st[Ir+2]=er[2],st[Ir+3]=255}n.putImageData(F,0,0);const Pt=ee(l[1],0,100,0,100);this.markerElem_.style.left=`${Pt}%`;const At=ee(l[2],0,100,100,0);this.markerElem_.style.top=`${At}%`}onValueChange_(){this.update_()}}class ph{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new dh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=ee(n.point.x,0,n.bounds.width,0,100),b=ee(n.point.y,0,n.bounds.height,100,0),[D,,,F]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Gt([D,l,b,F],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){Ko(n.key)&&n.preventDefault();const[r,l,b,D]=this.value.rawValue.getComponents("hsv"),F=On(!1),st=Le(F,cn(n)),Pt=Le(F,Yi(n));st===0&&Pt===0||this.value.setRawValue(new Gt([r,l+st,b+Pt,D],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){const r=On(!1),l=Le(r,cn(n)),b=Le(r,Yi(n));l===0&&b===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class fh{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.hPaletteC_=new hh(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ph(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=r.supportsAlpha?{palette:new rh(n,{value:this.value,viewProps:this.viewProps}),text:new $i(n,{parser:ln,baseStep:.1,props:H.fromObject({draggingScale:.01,formatter:xe(2)}),value:tt(0,{constraint:new ai({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Ki({primary:this.value,secondary:this.alphaIcs_.text.value,forward:l=>l.rawValue.getComponents()[3],backward:(l,b)=>{const D=l.rawValue.getComponents();return D[3]=b.rawValue,new Gt(D,l.rawValue.mode)}}),this.textC_=new ch(n,{colorType:r.colorType,parser:ln,value:this.value,viewProps:this.viewProps}),this.view=new Bu(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:r.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Es=T("colsw");class mh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.element=n.createElement("div"),this.element.classList.add(Es()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(Es("sw")),this.element.appendChild(l),this.swatchElem_=l;const b=n.createElement("button");b.classList.add(Es("b")),r.viewProps.bindDisabled(b),this.element.appendChild(b),this.buttonElement=b,this.update_()}update_(){const n=this.value.rawValue;this.swatchElem_.style.backgroundColor=xs(n)}onValueChange_(){this.update_()}}class gh{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new mh(n,{value:this.value,viewProps:this.viewProps})}}class Cs{constructor(n,r){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=Nt.create(r.expanded),this.swatchC_=new gh(n,{value:this.value,viewProps:this.viewProps});const l=this.swatchC_.view.buttonElement;l.addEventListener("blur",this.onButtonBlur_),l.addEventListener("click",this.onButtonClick_),this.textC_=new Er(n,{parser:r.parser,props:H.fromObject({formatter:r.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Du(n,{foldable:this.foldable_,pickerLayout:r.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=r.pickerLayout==="popup"?new Vo(n,{viewProps:this.viewProps}):null;const b=new fh(n,{colorType:r.colorType,supportsAlpha:r.supportsAlpha,value:this.value,viewProps:this.viewProps});b.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=b,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(b.view.element),Ki({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,F)=>F.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Y(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,l=n.relatedTarget;(!l||!r.contains(l))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,l=R(n);l&&r.contains(l)||l&&l===this.swatchC_.view.buttonElement&&!jt(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function _h(s,n){return Gt.isColorObject(s)?Gt.fromObject(s,n):Gt.black(n)}function vh(s){return Fn(s.getComponents("rgb")).reduce((n,r)=>n<<8|Math.floor(r)&255,0)}function bh(s){return s.getComponents("rgb").reduce((n,r,l)=>{const b=Math.floor(l===3?r*255:r)&255;return n<<8|b},0)>>>0}function xh(s){return new Gt([s>>16&255,s>>8&255,s&255],"rgb")}function wh(s){return new Gt([s>>24&255,s>>16&255,s>>8&255,ee(s&255,0,255,0,1)],"rgb")}function yh(s){return typeof s!="number"?Gt.black():xh(s)}function Mh(s){return typeof s!="number"?Gt.black():wh(s)}function Sh(s){const n=ws(s);return n?(r,l)=>{Zi(r,n(l))}:null}function Eh(s){const n=s?bh:vh;return(r,l)=>{Zi(r,n(l))}}function Ch(s,n,r){const l=n.toRgbaObject(r);s.writeProperty("r",l.r),s.writeProperty("g",l.g),s.writeProperty("b",l.b),s.writeProperty("a",l.a)}function Ph(s,n,r){const l=n.toRgbaObject(r);s.writeProperty("r",l.r),s.writeProperty("g",l.g),s.writeProperty("b",l.b)}function Th(s,n){return(r,l)=>{s?Ch(r,l,n):Ph(r,l,n)}}function Ps(s){var n;return!!(s!=null&&s.alpha||!((n=s==null?void 0:s.color)===null||n===void 0)&&n.alpha)}function Ah(s){return s?n=>xs(n,"0x"):n=>ba(n,"0x")}function Lh(s){return"color"in s||"view"in s&&s.view==="color"}const Dh={id:"input-color-number",type:"input",accept:(s,n)=>{if(typeof s!="number"||!Lh(n))return null;const r=_s(n);return r?{initialValue:s,params:r}:null},binding:{reader:s=>Ps(s.params)?Mh:yh,equals:Gt.equals,writer:s=>Eh(Ps(s.params))},controller:s=>{const n=Ps(s.params),r="expanded"in s.params?s.params.expanded:void 0,l="picker"in s.params?s.params.picker:void 0;return new Cs(s.document,{colorType:"int",expanded:r??!1,formatter:Ah(n),parser:bs("int"),pickerLayout:l??"popup",supportsAlpha:n,value:s.value,viewProps:s.viewProps})}};function Rh(s){return Gt.isRgbaColorObject(s)}function Ih(s){return n=>_h(n,s)}function Nh(s,n){return r=>s?ya(r,n):wa(r,n)}const kh={id:"input-color-object",type:"input",accept:(s,n)=>{if(!Gt.isColorObject(s))return null;const r=_s(n);return r?{initialValue:s,params:r}:null},binding:{reader:s=>Ih(Un(s.params)),equals:Gt.equals,writer:s=>Th(Rh(s.initialValue),Un(s.params))},controller:s=>{var n;const r=Gt.isRgbaColorObject(s.initialValue),l="expanded"in s.params?s.params.expanded:void 0,b="picker"in s.params?s.params.picker:void 0,D=(n=Un(s.params))!==null&&n!==void 0?n:"int";return new Cs(s.document,{colorType:D,expanded:l??!1,formatter:Nh(r,D),parser:bs(D),pickerLayout:b??"popup",supportsAlpha:r,value:s.value,viewProps:s.viewProps})}},Fh={id:"input-color-string",type:"input",accept:(s,n)=>{if(typeof s!="string"||"view"in n&&n.view==="text")return null;const r=vs(s,Un(n));if(!r||!ws(r))return null;const b=_s(n);return b?{initialValue:s,params:b}:null},binding:{reader:s=>{var n;return Yu((n=Un(s.params))!==null&&n!==void 0?n:"int")},equals:Gt.equals,writer:s=>{const n=vs(s.initialValue,Un(s.params));if(!n)throw g.shouldNeverHappen();const r=Sh(n);if(!r)throw g.notBindable();return r}},controller:s=>{const n=vs(s.initialValue,Un(s.params));if(!n)throw g.shouldNeverHappen();const r=ws(n);if(!r)throw g.shouldNeverHappen();const l="expanded"in s.params?s.params.expanded:void 0,b="picker"in s.params?s.params.picker:void 0;return new Cs(s.document,{colorType:n.type,expanded:l??!1,formatter:r,parser:bs(n.type),pickerLayout:b??"popup",supportsAlpha:n.alpha,value:s.value,viewProps:s.viewProps})}};class xn{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){const r=this.asm_.toComponents(n).map((l,b)=>{var D,F;return(F=(D=this.components[b])===null||D===void 0?void 0:D.constrain(l))!==null&&F!==void 0?F:l});return this.asm_.fromComponents(r)}}const Sa=T("pndtxt");class Oh{constructor(n,r){this.textViews=r.textViews,this.element=n.createElement("div"),this.element.classList.add(Sa()),this.textViews.forEach(l=>{const b=n.createElement("div");b.classList.add(Sa("a")),b.appendChild(l.element),this.element.appendChild(b)})}}function Uh(s,n,r){return new $i(s,{arrayPosition:r===0?"fst":r===n.axes.length-1?"lst":"mid",baseStep:n.axes[r].baseStep,parser:n.parser,props:n.axes[r].textProps,value:tt(0,{constraint:n.axes[r].constraint}),viewProps:n.viewProps})}class Ts{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.acs_=r.axes.map((l,b)=>Uh(n,r,b)),this.acs_.forEach((l,b)=>{Ki({primary:this.value,secondary:l.value,forward:D=>r.assembly.toComponents(D.rawValue)[b],backward:(D,F)=>{const st=r.assembly.toComponents(D.rawValue);return st[b]=F.rawValue,r.assembly.fromComponents(st)}})}),this.view=new Oh(n,{textViews:this.acs_.map(l=>l.view)})}}function Ea(s,n){return"step"in s&&!m(s.step)?new Sr(s.step,n):null}function Ca(s){return!m(s.max)&&!m(s.min)?new ai({max:s.max,min:s.min}):!m(s.max)||!m(s.min)?new Oo({max:s.max,min:s.min}):null}function Vh(s){const n=an(s,ai);if(n)return[n.values.get("min"),n.values.get("max")];const r=an(s,Oo);return r?[r.minValue,r.maxValue]:[void 0,void 0]}function zh(s,n){const r=[],l=Ea(s,n);l&&r.push(l);const b=Ca(s);b&&r.push(b);const D=gs(s.options);return D&&r.push(D),new Hi(r)}const Bh={id:"input-number",type:"input",accept:(s,n)=>{if(typeof s!="number")return null;const r=nt,l=it(n,{format:r.optional.function,max:r.optional.number,min:r.optional.number,options:r.optional.custom(Pr),step:r.optional.number});return l?{initialValue:s,params:l}:null},binding:{reader:s=>qo,constraint:s=>zh(s.params,s.initialValue),writer:s=>Zi},controller:s=>{var n;const r=s.value,l=s.constraint,b=l&&an(l,Wi);if(b)return new ji(s.document,{props:new H({options:b.values.value("options")}),value:r,viewProps:s.viewProps});const D=(n="format"in s.params?s.params.format:void 0)!==null&&n!==void 0?n:xe(Tr(l,r.rawValue)),F=l&&an(l,ai);return F?new ms(s.document,{baseStep:li(l),parser:ln,sliderProps:new H({maxValue:F.values.value("max"),minValue:F.values.value("min")}),textProps:H.fromObject({draggingScale:ci(l,r.rawValue),formatter:D}),value:r,viewProps:s.viewProps}):new $i(s.document,{baseStep:li(l),parser:ln,props:H.fromObject({draggingScale:ci(l,r.rawValue),formatter:D}),value:r,viewProps:s.viewProps})}};class wn{constructor(n=0,r=0){this.x=n,this.y=r}getComponents(){return[this.x,this.y]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y;return!(typeof r!="number"||typeof l!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y}toObject(){return{x:this.x,y:this.y}}}const Pa={toComponents:s=>s.getComponents(),fromComponents:s=>new wn(...s)},hi=T("p2d");class Gh{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(hi()),r.viewProps.bindClassModifiers(this.element),z(r.expanded,G(this.element,hi(void 0,"expanded")));const l=n.createElement("div");l.classList.add(hi("h")),this.element.appendChild(l);const b=n.createElement("button");b.classList.add(hi("b")),b.appendChild(K(n,"p2dpad")),r.viewProps.bindDisabled(b),l.appendChild(b),this.buttonElement=b;const D=n.createElement("div");if(D.classList.add(hi("t")),l.appendChild(D),this.textElement=D,r.pickerLayout==="inline"){const F=n.createElement("div");F.classList.add(hi("p")),this.element.appendChild(F),this.pickerElement=F}else this.pickerElement=null}}const yn=T("p2dp");class Hh{constructor(n,r){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=r.invertsY,this.maxValue_=r.maxValue,this.element=n.createElement("div"),this.element.classList.add(yn()),r.layout==="popup"&&this.element.classList.add(yn(void 0,"p")),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(yn("p")),r.viewProps.bindTabIndex(l),this.element.appendChild(l),this.padElement=l;const b=n.createElementNS(Yt,"svg");b.classList.add(yn("g")),this.padElement.appendChild(b),this.svgElem_=b;const D=n.createElementNS(Yt,"line");D.classList.add(yn("ax")),D.setAttributeNS(null,"x1","0"),D.setAttributeNS(null,"y1","50%"),D.setAttributeNS(null,"x2","100%"),D.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(D);const F=n.createElementNS(Yt,"line");F.classList.add(yn("ax")),F.setAttributeNS(null,"x1","50%"),F.setAttributeNS(null,"y1","0"),F.setAttributeNS(null,"x2","50%"),F.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(F);const st=n.createElementNS(Yt,"line");st.classList.add(yn("l")),st.setAttributeNS(null,"x1","50%"),st.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(st),this.lineElem_=st;const Pt=n.createElement("div");Pt.classList.add(yn("m")),this.padElement.appendChild(Pt),this.markerElem_=Pt,r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[n,r]=this.value.rawValue.getComponents(),l=this.maxValue_,b=ee(n,-l,+l,0,100),D=ee(r,-l,+l,0,100),F=this.invertsY_?100-D:D;this.lineElem_.setAttributeNS(null,"x2",`${b}%`),this.lineElem_.setAttributeNS(null,"y2",`${F}%`),this.markerElem_.style.left=`${b}%`,this.markerElem_.style.top=`${F}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Ta(s,n,r){return[Le(n[0],cn(s)),Le(n[1],Yi(s))*(r?1:-1)]}class Wh{constructor(n,r){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.baseSteps_=r.baseSteps,this.maxValue_=r.maxValue,this.invertsY_=r.invertsY,this.view=new Hh(n,{invertsY:this.invertsY_,layout:r.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Nn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=this.maxValue_,b=ee(n.point.x,0,n.bounds.width,-l,+l),D=ee(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-l,+l);this.value.setRawValue(new wn(b,D),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){Ko(n.key)&&n.preventDefault();const[r,l]=Ta(n,this.baseSteps_,this.invertsY_);r===0&&l===0||this.value.setRawValue(new wn(this.value.rawValue.x+r,this.value.rawValue.y+l),{forceEmit:!1,last:!1})}onPadKeyUp_(n){const[r,l]=Ta(n,this.baseSteps_,this.invertsY_);r===0&&l===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class jh{constructor(n,r){var l,b;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=Nt.create(r.expanded),this.popC_=r.pickerLayout==="popup"?new Vo(n,{viewProps:this.viewProps}):null;const D=new Wh(n,{baseSteps:[r.axes[0].baseStep,r.axes[1].baseStep],invertsY:r.invertsY,layout:r.pickerLayout,maxValue:r.maxValue,value:this.value,viewProps:this.viewProps});D.view.allFocusableElements.forEach(F=>{F.addEventListener("blur",this.onPopupChildBlur_),F.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=D,this.textC_=new Ts(n,{assembly:Pa,axes:r.axes,parser:r.parser,value:this.value,viewProps:this.viewProps}),this.view=new Gh(n,{expanded:this.foldable_.value("expanded"),pickerLayout:r.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(l=this.view.buttonElement)===null||l===void 0||l.addEventListener("blur",this.onPadButtonBlur_),(b=this.view.buttonElement)===null||b===void 0||b.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Ki({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:F=>F.rawValue,backward:(F,st)=>st.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Y(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,l=n.relatedTarget;(!l||!r.contains(l))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,l=R(n);l&&r.contains(l)||l&&l===this.view.buttonElement&&!jt(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}class di{constructor(n=0,r=0,l=0){this.x=n,this.y=r,this.z=l}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y,b=n.z;return!(typeof r!="number"||typeof l!="number"||typeof b!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Aa={toComponents:s=>s.getComponents(),fromComponents:s=>new di(...s)};function qh(s){return di.isObject(s)?new di(s.x,s.y,s.z):new di}function Xh(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y),s.writeProperty("z",n.z)}function Kh(s,n){return new xn({assembly:Aa,components:[un("x"in s?s.x:void 0,n.x),un("y"in s?s.y:void 0,n.y),un("z"in s?s.z:void 0,n.z)]})}function As(s,n){return{baseStep:li(n),constraint:n,textProps:H.fromObject({draggingScale:ci(n,s),formatter:xe(Tr(n,s))})}}const Yh={id:"input-point3d",type:"input",accept:(s,n)=>{if(!di.isObject(s))return null;const r=nt,l=it(n,{x:r.optional.custom(vn),y:r.optional.custom(vn),z:r.optional.custom(vn)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>qh,constraint:s=>Kh(s.params,s.initialValue),equals:di.equals,writer:s=>Xh},controller:s=>{const n=s.value,r=s.constraint;if(!(r instanceof xn))throw g.shouldNeverHappen();return new Ts(s.document,{assembly:Aa,axes:[As(n.rawValue.x,r.components[0]),As(n.rawValue.y,r.components[1]),As(n.rawValue.z,r.components[2])],parser:ln,value:n,viewProps:s.viewProps})}};class pi{constructor(n=0,r=0,l=0,b=0){this.x=n,this.y=r,this.z=l,this.w=b}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y,b=n.z,D=n.w;return!(typeof r!="number"||typeof l!="number"||typeof b!="number"||typeof D!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z&&n.w===r.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const La={toComponents:s=>s.getComponents(),fromComponents:s=>new pi(...s)};function $h(s){return pi.isObject(s)?new pi(s.x,s.y,s.z,s.w):new pi}function Zh(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y),s.writeProperty("z",n.z),s.writeProperty("w",n.w)}function Jh(s,n){return new xn({assembly:La,components:[un("x"in s?s.x:void 0,n.x),un("y"in s?s.y:void 0,n.y),un("z"in s?s.z:void 0,n.z),un("w"in s?s.w:void 0,n.w)]})}function Qh(s,n){return{baseStep:li(n),constraint:n,textProps:H.fromObject({draggingScale:ci(n,s),formatter:xe(Tr(n,s))})}}const td={id:"input-point4d",type:"input",accept:(s,n)=>{if(!pi.isObject(s))return null;const r=nt,l=it(n,{x:r.optional.custom(vn),y:r.optional.custom(vn),z:r.optional.custom(vn),w:r.optional.custom(vn)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>$h,constraint:s=>Jh(s.params,s.initialValue),equals:pi.equals,writer:s=>Zh},controller:s=>{const n=s.value,r=s.constraint;if(!(r instanceof xn))throw g.shouldNeverHappen();return new Ts(s.document,{assembly:La,axes:n.rawValue.getComponents().map((l,b)=>Qh(l,r.components[b])),parser:ln,value:n,viewProps:s.viewProps})}};function ed(s){const n=[],r=gs(s.options);return r&&n.push(r),new Hi(n)}const nd={id:"input-string",type:"input",accept:(s,n)=>{if(typeof s!="string")return null;const l=it(n,{options:nt.optional.custom(Pr)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Xo,constraint:s=>ed(s.params),writer:s=>Zi},controller:s=>{const n=s.document,r=s.value,l=s.constraint,b=l&&an(l,Wi);return b?new ji(n,{props:new H({options:b.values.value("options")}),value:r,viewProps:s.viewProps}):new Er(n,{parser:D=>D,props:H.fromObject({formatter:hs}),value:r,viewProps:s.viewProps})}},Qi={monitor:{defaultInterval:200,defaultLineCount:3}},Da=T("mll");class id{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Da()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("textarea");l.classList.add(Da("i")),l.style.height=`calc(var(--bld-us) * ${r.lineCount})`,l.readOnly=!0,r.viewProps.bindDisabled(l),this.element.appendChild(l),this.textareaElem_=l,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.textareaElem_,r=n.scrollTop===n.scrollHeight-n.clientHeight,l=[];this.value.rawValue.forEach(b=>{b!==void 0&&l.push(this.formatter_(b))}),n.textContent=l.join(`
`),r&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class Ls{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new id(n,{formatter:r.formatter,lineCount:r.lineCount,value:this.value,viewProps:this.viewProps})}}const Ra=T("sgl");class rd{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Ra()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("input");l.classList.add(Ra("i")),l.readOnly=!0,l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.value.rawValue,r=n[n.length-1];this.inputElement.value=r!==void 0?this.formatter_(r):""}onValueUpdate_(){this.update_()}}class Ds{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new rd(n,{formatter:r.formatter,value:this.value,viewProps:this.viewProps})}}const sd={id:"monitor-bool",type:"monitor",accept:(s,n)=>{if(typeof s!="boolean")return null;const l=it(n,{lineCount:nt.optional.number});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Bo},controller:s=>{var n;return s.value.rawValue.length===1?new Ds(s.document,{formatter:Go,value:s.value,viewProps:s.viewProps}):new Ls(s.document,{formatter:Go,lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:Qi.monitor.defaultLineCount,value:s.value,viewProps:s.viewProps})}},Mn=T("grl");class od{constructor(n,r){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Mn()),r.viewProps.bindClassModifiers(this.element),this.formatter_=r.formatter,this.props_=r.props,this.cursor_=r.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const l=n.createElementNS(Yt,"svg");l.classList.add(Mn("g")),l.style.height=`calc(var(--bld-us) * ${r.lineCount})`,this.element.appendChild(l),this.svgElem_=l;const b=n.createElementNS(Yt,"polyline");this.svgElem_.appendChild(b),this.lineElem_=b;const D=n.createElement("div");D.classList.add(Mn("t"),T("tt")()),this.element.appendChild(D),this.tooltipElem_=D,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const n=this.svgElem_.getBoundingClientRect(),r=this.value.rawValue.length-1,l=this.props_.get("minValue"),b=this.props_.get("maxValue"),D=[];this.value.rawValue.forEach((Kt,$t)=>{if(Kt===void 0)return;const Vn=ee($t,0,r,0,n.width),tr=ee(Kt,l,b,n.height,0);D.push([Vn,tr].join(","))}),this.lineElem_.setAttributeNS(null,"points",D.join(" "));const F=this.tooltipElem_,st=this.value.rawValue[this.cursor_.rawValue];if(st===void 0){F.classList.remove(Mn("t","a"));return}const Pt=ee(this.cursor_.rawValue,0,r,0,n.width),At=ee(st,l,b,n.height,0);F.style.left=`${Pt}px`,F.style.top=`${At}px`,F.textContent=`${this.formatter_(st)}`,F.classList.contains(Mn("t","a"))||(F.classList.add(Mn("t","a"),Mn("t","in")),le(F),F.classList.remove(Mn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class ad{constructor(n,r){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=r.props,this.value=r.value,this.viewProps=r.viewProps,this.cursor_=tt(-1),this.view=new od(n,{cursor:this.cursor_,formatter:r.formatter,lineCount:r.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!jt(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const l=new Nn(this.view.element);l.emitter.on("down",this.onGraphPointerDown_),l.emitter.on("move",this.onGraphPointerMove_),l.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){const r=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ee(n.offsetX,0,r.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ee(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Rs(s){return"format"in s&&!m(s.format)?s.format:xe(2)}function ld(s){var n;return s.value.rawValue.length===1?new Ds(s.document,{formatter:Rs(s.params),value:s.value,viewProps:s.viewProps}):new Ls(s.document,{formatter:Rs(s.params),lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:Qi.monitor.defaultLineCount,value:s.value,viewProps:s.viewProps})}function cd(s){var n,r,l;return new ad(s.document,{formatter:Rs(s.params),lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:Qi.monitor.defaultLineCount,props:H.fromObject({maxValue:(r="max"in s.params?s.params.max:null)!==null&&r!==void 0?r:100,minValue:(l="min"in s.params?s.params.min:null)!==null&&l!==void 0?l:0}),value:s.value,viewProps:s.viewProps})}function Ia(s){return"view"in s&&s.view==="graph"}const ud={id:"monitor-number",type:"monitor",accept:(s,n)=>{if(typeof s!="number")return null;const r=nt,l=it(n,{format:r.optional.function,lineCount:r.optional.number,max:r.optional.number,min:r.optional.number,view:r.optional.string});return l?{initialValue:s,params:l}:null},binding:{defaultBufferSize:s=>Ia(s)?64:1,reader:s=>qo},controller:s=>Ia(s.params)?cd(s):ld(s)},hd={id:"monitor-string",type:"monitor",accept:(s,n)=>{if(typeof s!="string")return null;const r=nt,l=it(n,{lineCount:r.optional.number,multiline:r.optional.boolean});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Xo},controller:s=>{var n;const r=s.value;return r.rawValue.length>1||"multiline"in s.params&&s.params.multiline?new Ls(s.document,{formatter:hs,lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:Qi.monitor.defaultLineCount,value:r,viewProps:s.viewProps}):new Ds(s.document,{formatter:hs,value:r,viewProps:s.viewProps})}};function dd(s,n){var r;const l=s.accept(n.target.read(),n.params);if(m(l))return null;const b=nt,D={target:n.target,initialValue:l.initialValue,params:l.params},F=s.binding.reader(D),st=s.binding.constraint?s.binding.constraint(D):void 0,Pt=tt(F(l.initialValue),{constraint:st,equals:s.binding.equals}),At=new Uc({reader:F,target:n.target,value:Pt,writer:s.binding.writer(D)}),Kt=b.optional.boolean(n.params.disabled).value,$t=b.optional.boolean(n.params.hidden).value,Vn=s.controller({constraint:st,document:n.document,initialValue:l.initialValue,params:l.params,value:At.value,viewProps:Ot.create({disabled:Kt,hidden:$t})});return new qt(n.document,{binding:At,blade:It(),props:H.fromObject({label:"label"in n.params?(r=b.optional.string(n.params.label).value)!==null&&r!==void 0?r:null:n.target.key}),valueController:Vn})}function pd(s,n){return n===0?new Fc:new Oc(s,n??Qi.monitor.defaultInterval)}function fd(s,n){var r,l,b;const D=nt,F=s.accept(n.target.read(),n.params);if(m(F))return null;const st={target:n.target,initialValue:F.initialValue,params:F.params},Pt=s.binding.reader(st),At=(l=(r=D.optional.number(n.params.bufferSize).value)!==null&&r!==void 0?r:s.binding.defaultBufferSize&&s.binding.defaultBufferSize(F.params))!==null&&l!==void 0?l:1,Kt=D.optional.number(n.params.interval).value,$t=new Gc({reader:Pt,target:n.target,ticker:pd(n.document,Kt),value:Vc(At)}),Vn=D.optional.boolean(n.params.disabled).value,tr=D.optional.boolean(n.params.hidden).value,er=s.controller({document:n.document,params:F.params,value:$t.value,viewProps:Ot.create({disabled:Vn,hidden:tr})});return new ae(n.document,{binding:$t,blade:It(),props:H.fromObject({label:"label"in n.params?(b=D.optional.string(n.params.label).value)!==null&&b!==void 0?b:null:n.target.key}),valueController:er})}class md{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,r,l){const b=r.read();if(m(b))throw new g({context:{key:r.key},type:"nomatchingcontroller"});const D=this.pluginsMap_.inputs.reduce((F,st)=>F??dd(st,{document:n,target:r,params:l}),null);if(D)return D;throw new g({context:{key:r.key},type:"nomatchingcontroller"})}createMonitor(n,r,l){const b=this.pluginsMap_.monitors.reduce((D,F)=>D??fd(F,{document:n,params:l,target:r}),null);if(b)return b;throw new g({context:{key:r.key},type:"nomatchingcontroller"})}createBlade(n,r){const l=this.pluginsMap_.blades.reduce((b,D)=>b??kc(D,{document:n,params:r}),null);if(!l)throw new g({type:"nomatchingview",context:{params:r}});return l}createBladeApi(n){if(n instanceof qt)return new qe(n);if(n instanceof ae)return new Ne(n);if(n instanceof zt)return new ii(n,this);const r=this.pluginsMap_.blades.reduce((l,b)=>l??b.api({controller:n,pool:this}),null);if(!r)throw g.shouldNeverHappen();return r}}function gd(){const s=new md;return[yd,Yh,td,nd,Bh,Fh,kh,Dh,Lu,sd,hd,ud,Mt,Se,he,ko].forEach(n=>{s.register(n)}),s}function _d(s){return wn.isObject(s)?new wn(s.x,s.y):new wn}function vd(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y)}function un(s,n){if(!s)return;const r=[],l=Ea(s,n);l&&r.push(l);const b=Ca(s);return b&&r.push(b),new Hi(r)}function bd(s,n){return new xn({assembly:Pa,components:[un("x"in s?s.x:void 0,n.x),un("y"in s?s.y:void 0,n.y)]})}function Na(s,n){const[r,l]=s?Vh(s):[];if(!m(r)||!m(l))return Math.max(Math.abs(r??0),Math.abs(l??0));const b=li(s);return Math.max(Math.abs(b)*10,Math.abs(n)*10)}function xd(s,n){const r=n instanceof xn?n.components[0]:void 0,l=n instanceof xn?n.components[1]:void 0,b=Na(r,s.x),D=Na(l,s.y);return Math.max(b,D)}function ka(s,n){return{baseStep:li(n),constraint:n,textProps:H.fromObject({draggingScale:ci(n,s),formatter:xe(Tr(n,s))})}}function wd(s){if(!("y"in s))return!1;const n=s.y;return n&&"inverted"in n?!!n.inverted:!1}const yd={id:"input-point2d",type:"input",accept:(s,n)=>{if(!wn.isObject(s))return null;const r=nt,l=it(n,{expanded:r.optional.boolean,picker:r.optional.custom(Zo),x:r.optional.custom(vn),y:r.optional.object({inverted:r.optional.boolean,max:r.optional.number,min:r.optional.number,step:r.optional.number})});return l?{initialValue:s,params:l}:null},binding:{reader:s=>_d,constraint:s=>bd(s.params,s.initialValue),equals:wn.equals,writer:s=>vd},controller:s=>{const n=s.document,r=s.value,l=s.constraint;if(!(l instanceof xn))throw g.shouldNeverHappen();const b="expanded"in s.params?s.params.expanded:void 0,D="picker"in s.params?s.params.picker:void 0;return new jh(n,{axes:[ka(r.rawValue.x,l.components[0]),ka(r.rawValue.y,l.components[1])],expanded:b??!1,invertsY:wd(s.params),maxValue:xd(r.rawValue,l),parser:ln,pickerLayout:D??"popup",value:r,viewProps:s.viewProps})}};class Fa extends o{constructor(n){super(n),this.emitter_=new A,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}}class Oa extends o{constructor(n){super(n),this.emitter_=new A,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}}class Ua extends o{constructor(n){super(n),this.emitter_=new A,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,b=>{l(b.event)}),this}}const Md=function(){return{id:"list",type:"blade",accept(s){const n=nt,r=it(s,{options:n.required.custom(Pr),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return r?{params:r}:null},controller(s){const n=new Wi(Jo(s.params.options)),r=tt(s.params.value,{constraint:n}),l=new ji(s.document,{props:new H({options:n.values.value("options")}),value:r,viewProps:s.viewProps});return new ye(s.document,{blade:s.blade,props:H.fromObject({label:s.params.label}),valueController:l})},api(s){return!(s.controller instanceof ye)||!(s.controller.valueController instanceof ji)?null:new Fa(s.controller)}}}();function Sd(s){return s.reduce((n,r)=>Object.assign(n,{[r.presetKey]:r.read()}),{})}function Ed(s,n){s.forEach(r=>{const l=n[r.target.presetKey];l!==void 0&&r.writer(r.target,r.reader(l))})}class Cd extends S{constructor(n,r){super(n,r)}get element(){return this.controller_.view.element}importPreset(n){const r=this.controller_.rackController.rack.find(qt).map(l=>l.binding);Ed(r,n),this.refresh()}exportPreset(){const n=this.controller_.rackController.rack.find(qt).map(r=>r.binding.target);return Sd(n)}refresh(){this.controller_.rackController.rack.find(qt).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(ae).forEach(n=>{n.binding.read()})}}class Pd extends te{constructor(n,r){super(n,{expanded:r.expanded,blade:r.blade,props:r.props,root:!0,viewProps:r.viewProps})}}const Td={id:"slider",type:"blade",accept(s){const n=nt,r=it(s,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return r?{params:r}:null},controller(s){var n,r;const l=(n=s.params.value)!==null&&n!==void 0?n:0,b=new ai({max:s.params.max,min:s.params.min}),D=new ms(s.document,{baseStep:1,parser:ln,sliderProps:new H({maxValue:b.values.value("max"),minValue:b.values.value("min")}),textProps:H.fromObject({draggingScale:ci(void 0,l),formatter:(r=s.params.format)!==null&&r!==void 0?r:bu}),value:tt(l,{constraint:b}),viewProps:s.viewProps});return new ye(s.document,{blade:s.blade,props:H.fromObject({label:s.params.label}),valueController:D})},api(s){return!(s.controller instanceof ye)||!(s.controller.valueController instanceof ms)?null:new Oa(s.controller)}},Ad=function(){return{id:"text",type:"blade",accept(s){const n=nt,r=it(s,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return r?{params:r}:null},controller(s){var n;const r=new Er(s.document,{parser:s.params.parse,props:H.fromObject({formatter:(n=s.params.format)!==null&&n!==void 0?n:l=>String(l)}),value:tt(s.params.value),viewProps:s.viewProps});return new ye(s.document,{blade:s.blade,props:H.fromObject({label:s.params.label}),valueController:r})},api(s){return!(s.controller instanceof ye)||!(s.controller.valueController instanceof Er)?null:new Ua(s.controller)}}}();function Ld(s){const n=s.createElement("div");return n.classList.add(T("dfw")()),s.body&&s.body.appendChild(n),n}function Va(s,n,r){if(s.querySelector(`style[data-tp-style=${n}]`))return;const l=s.createElement("style");l.dataset.tpStyle=n,l.textContent=r,s.head.appendChild(l)}class Dd extends Cd{constructor(n){var r,l;const b=n??{},D=(r=b.document)!==null&&r!==void 0?r:we(),F=gd(),st=new Pd(D,{expanded:b.expanded,blade:It(),props:H.fromObject({title:b.title}),viewProps:Ot.create()});super(st,F),this.pool_=F,this.containerElem_=(l=b.container)!==null&&l!==void 0?l:Ld(D),this.containerElem_.appendChild(this.element),this.doc_=D,this.usesDefaultWrapper_=!b.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw g.alreadyDisposed();return this.doc_}dispose(){const n=this.containerElem_;if(!n)throw g.alreadyDisposed();if(this.usesDefaultWrapper_){const r=n.parentElement;r&&r.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(l=>{this.pool_.register(l),this.embedPluginStyle_(l)})}embedPluginStyle_(n){n.css&&Va(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){Va(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[Td,Md,ko,Ad]})}}const Rd=new i("3.1.10");e.BladeApi=o,e.ButtonApi=M,e.FolderApi=S,e.InputBindingApi=qe,e.ListApi=Fa,e.MonitorBindingApi=Ne,e.Pane=Dd,e.SeparatorApi=Qe,e.SliderApi=Oa,e.TabApi=tn,e.TabPageApi=ve,e.TextApi=Ua,e.TpChangeEvent=h,e.VERSION=Rd,Object.defineProperty(e,"__esModule",{value:!0})})})(So,So.exports);var Gv=So.exports;new Gv.Pane;const zi=new Dv,Bi=new kv,Lc=new Nv;Lc.setPath("/textures/cubeMap/");const Hv=Bi.load("/textures/2k_sun.jpg"),Wv=Bi.load("/textures/2k_mercury.jpg"),jv=Bi.load("/textures/2k_venus_surface.jpg"),qv=Bi.load("/textures/2k_earth_daymap.jpg"),Xv=Bi.load("/textures/2k_mars.jpg"),Kv=Bi.load("/textures/2k_moon.jpg"),Yv=Lc.setPath("/textures/cubeMap/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);zi.background=Yv;const $v=new xr({map:Wv}),Zv=new xr({map:jv}),Jv=new xr({map:qv}),Qv=new xr({map:Xv}),t0=new xr({map:Kv}),No=new Ro(1,32,32),e0=new Po({map:Hv}),Dc=new Je(No,e0);Dc.scale.setScalar(5);zi.add(Dc);const jn=[{name:"Mercury",radius:.5,distance:10,speed:.01,material:$v,moons:[]},{name:"Venus",radius:.8,distance:15,speed:.007,material:Zv,moons:[]},{name:"Earth",radius:1,distance:20,speed:.005,material:Jv,moons:[{name:"Moon",radius:.3,distance:3,speed:.015}]},{name:"Mars",radius:.7,distance:25,speed:.003,material:Qv,moons:[{name:"Phobos",radius:.1,distance:2,speed:.02},{name:"Deimos",radius:.2,distance:3,speed:.015,color:16777215}]}],n0=c=>{const t=new Je(No,c.material);return t.scale.setScalar(c.radius),t.position.x=c.distance,t},i0=c=>{const t=new Je(No,t0);return t.scale.setScalar(c.radius),t.position.x=c.distance,t},Rc=jn.map(c=>{const t=n0(c);return zi.add(t),c.moons.forEach(e=>{const i=i0(e);t.add(i)}),t});console.log(Rc);const r0=new Vv(16777215,.2);zi.add(r0);const s0=new Uv(16777215,2);zi.add(s0);const Ui=new Ve(35,window.innerWidth/window.innerHeight,.1,400);Ui.position.z=100;Ui.position.y=5;const Ic=document.querySelector("canvas.threejs"),ss=new Pc({canvas:Ic,antialias:!0});ss.setSize(window.innerWidth,window.innerHeight);ss.setPixelRatio(Math.min(window.devicePixelRatio,2));const os=new zv(Ui,Ic);os.enableDamping=!0;os.maxDistance=200;os.minDistance=20;window.addEventListener("resize",()=>{Ui.aspect=window.innerWidth/window.innerHeight,Ui.updateProjectionMatrix(),ss.setSize(window.innerWidth,window.innerHeight)});const Nc=()=>{Rc.forEach((c,t)=>{c.rotation.y+=jn[t].speed,c.position.x=Math.sin(c.rotation.y)*jn[t].distance,c.position.z=Math.cos(c.rotation.y)*jn[t].distance,c.children.forEach((e,i)=>{e.rotation.y+=jn[t].moons[i].speed,e.position.x=Math.sin(e.rotation.y)*jn[t].moons[i].distance,e.position.z=Math.cos(e.rotation.y)*jn[t].moons[i].distance})}),os.update(),ss.render(zi,Ui),window.requestAnimationFrame(Nc)};Nc();
