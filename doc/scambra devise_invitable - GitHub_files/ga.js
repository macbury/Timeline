(function(){var g=void 0,h=!0,i=null,j=!1,aa=encodeURIComponent,ba=Infinity,ca=setTimeout,da=decodeURIComponent,k=Math;function ea(a,b){return a.onload=b}function fa(a,b){return a.name=b}
var m="push",ga="slice",ha="replace",ia="load",ja="floor",ka="cookie",n="charAt",la="value",p="indexOf",ma="match",q="name",na="host",t="toString",u="length",v="prototype",pa="clientWidth",w="split",qa="stopPropagation",ra="scope",x="location",y="getString",sa="random",ta="clientHeight",ua="href",z="substring",va="navigator",A="join",C="toLowerCase",D;function wa(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function E(a,b){return g==a||"-"==a&&!b||""==a}function xa(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t"[p](a[n](0));)a=a[z](1);for(;a&&-1<" \n\r\t"[p](a[n](a[u]-1));)a=a[z](0,a[u]-1);return a}function ya(a){var b=1,c=0,d;if(!E(a)){b=0;for(d=a[u]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b}return b}
function za(){return k.round(2147483647*k[sa]())}function Aa(){}function Ba(a,b){if(aa instanceof Function)return b?encodeURI(a):aa(a);F(68);return escape(a)}function G(a){a=a[w]("+")[A](" ");if(da instanceof Function)try{return da(a)}catch(b){F(17)}else F(68);return unescape(a)}
var Ca=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Da=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};function H(a){return a&&0<a[u]?a[0]:""}function Ea(a){var b=a?a[u]:0;return 0<b?a[b-1]:""}var Fa=function(){this.prefix="ga.";this.I={}};Fa[v].set=function(a,b){this.I[this.prefix+a]=b};Fa[v].get=function(a){return this.I[this.prefix+a]};
Fa[v].contains=function(a){return this.get(a)!==g};function Ga(a){0==a[p]("www.")&&(a=a[z](4));return a[C]()}function Ha(a,b){var c,d={url:a,protocol:"http",host:"",path:"",d:new Fa,anchor:""};if(!a)return d;c=a[p]("://");0<=c&&(d.protocol=a[z](0,c),a=a[z](c+3));c=a.search("/|\\?|#");if(0<=c)d.host=a[z](0,c)[C](),a=a[z](c);else return d.host=a[C](),d;c=a[p]("#");0<=c&&(d.anchor=a[z](c+1),a=a[z](0,c));c=a[p]("?");0<=c&&(Ia(d.d,a[z](c+1)),a=a[z](0,c));d.anchor&&b&&Ia(d.d,d.anchor);a&&"/"==a[n](0)&&(a=a[z](1));d.path=a;return d}
function Ia(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[m](c)}for(var d=xa(b)[w]("&"),e=0;e<d[u];e++)if(d[e]){var f=d[e][p]("=");0>f?c(d[e],"1"):c(d[e][z](0,f),d[e][z](f+1))}}function Ja(a,b){if(E(a)||"["==a[n](0)&&"]"==a[n](a[u]-1))return"-";var c=I.domain;return a[p](c+(b&&"/"!=b?b:""))==(0==a[p]("http://")?7:0==a[p]("https://")?8:0)?"0":a};function Ka(a,b,c){1<=100*k[sa]()||(a=["utmt=error","utmerr="+a,"utmwv=5.2.4","utmn="+za(),"utmsp=1"],b&&a[m]("api="+b),c&&a[m]("msg="+Ba(c[z](0,100))),J.q&&a[m]("aip=1"),La(a[A]("&")))};var Ma=0,Na={};function K(a){return Oa("x"+Ma++,a)}function Oa(a,b){Na[a]=!!b;return a}
var Pa=K(),Qa=K(),Ra=K(),Sa=K(),Ta=K(),L=K(),M=K(),Ua=K(),Va=K(),Wa=K(),Xa=K(),Ya=K(),Za=K(),$a=K(),ab=K(),bb=K(),cb=K(),db=K(),eb=K(),fb=K(),gb=K(),hb=K(),ib=K(),jb=K(),kb=K(),lb=K(),mb=K(),nb=K(),ob=K(),pb=K(),qb=K(),rb=K(),sb=K(),tb=K(),ub=K(),N=K(h),vb=Oa("page"),wb=Oa("title"),xb=K(),yb=K(),zb=K(),Ab=K(),Bb=K(),Cb=K(),Db=K(),Eb=K(),O=K(h),Fb=K(h),Gb=K(h),Ib=K(h),Jb=K(h),Kb=K(h),Lb=K(h),Mb=K(h),Nb=K(h),Ob=K(h),Pb=K(h),P=K(h),Qb=K(h),Rb=K(h),Sb=K(h),Tb=K(h),Ub=K(h),Vb=K(h),Wb=K(h),Xb=K(h),Yb=K(h),
Zb=K(h),$b=K(h),ac=K(h),bc=K(h),cc=Oa("campaignParams"),dc=K(),ec=Oa("hitCallback"),fc=K();K();var gc=K(),hc=K(),ic=K(),jc=K(),kc=K(),lc=K(),mc=K(),nc=K(),oc=K(),sc=K();K();var tc=K(),uc=K(),vc=K();var wc=function(){function a(a,c,d){Q(R[v],a,c,d)}S("_getName",Ra,58);S("_getAccount",Pa,64);S("_visitCode",O,54);S("_getClientInfo",$a,53,1);S("_getDetectTitle",cb,56,1);S("_getDetectFlash",ab,65,1);S("_getLocalGifPath",mb,57);S("_getServiceMode",nb,59);T("_setClientInfo",$a,66,2);T("_setAccount",Pa,3);T("_setNamespace",Qa,48);T("_setAllowLinker",Xa,11,2);T("_setDetectFlash",ab,61,2);T("_setDetectTitle",cb,62,2);T("_setLocalGifPath",mb,46,0);T("_setLocalServerMode",nb,92,g,0);T("_setRemoteServerMode",
nb,63,g,1);T("_setLocalRemoteServerMode",nb,47,g,2);T("_setSampleRate",lb,45,1);T("_setCampaignTrack",bb,36,2);T("_setAllowAnchor",Ya,7,2);T("_setCampNameKey",eb,41);T("_setCampContentKey",jb,38);T("_setCampIdKey",db,39);T("_setCampMediumKey",hb,40);T("_setCampNOKey",kb,42);T("_setCampSourceKey",gb,43);T("_setCampTermKey",ib,44);T("_setCampCIdKey",fb,37);T("_setCookiePath",M,9,0);T("_setMaxCustomVariables",ob,0,1);T("_setVisitorCookieTimeout",Ua,28,1);T("_setSessionCookieTimeout",Va,26,1);T("_setCampaignCookieTimeout",
Wa,29,1);T("_setReferrerOverride",xb,49);T("_setSiteSpeedSampleRate",oc,132);a("_trackPageview",R[v].na,1);a("_trackEvent",R[v].v,4);a("_trackPageLoadTime",R[v].ma,100);a("_trackSocial",R[v].oa,104);a("_trackTrans",R[v].pa,18);a("_sendXEvent",R[v].u,78);a("_createEventTracker",R[v].V,74);a("_getVersion",R[v].$,60);a("_setDomainName",R[v].t,6);a("_setAllowHash",R[v].ea,8);a("_getLinkerUrl",R[v].Z,52);a("_link",R[v].link,101);a("_linkByPost",R[v].da,102);a("_setTrans",R[v].ha,20);a("_addTrans",R[v].O,
21);a("_addItem",R[v].M,19);a("_setTransactionDelim",R[v].ia,82);a("_setCustomVar",R[v].fa,10);a("_deleteCustomVar",R[v].X,35);a("_getVisitorCustomVar",R[v].aa,50);a("_setXKey",R[v].ka,83);a("_setXValue",R[v].la,84);a("_getXKey",R[v].ba,76);a("_getXValue",R[v].ca,77);a("_clearXKey",R[v].S,72);a("_clearXValue",R[v].T,73);a("_createXObj",R[v].W,75);a("_addIgnoredOrganic",R[v].K,15);a("_clearIgnoredOrganic",R[v].P,97);a("_addIgnoredRef",R[v].L,31);a("_clearIgnoredRef",R[v].Q,32);a("_addOrganic",R[v].N,
14);a("_clearOrganic",R[v].R,70);a("_cookiePathCopy",R[v].U,30);a("_get",R[v].Y,106);a("_set",R[v].ga,107);a("_addEventListener",R[v].addEventListener,108);a("_removeEventListener",R[v].removeEventListener,109);a("_initData",R[v].m,2);a("_setVar",R[v].ja,22);T("_setSessionTimeout",Va,27,3);T("_setCookieTimeout",Wa,25,3);T("_setCookiePersistence",Ua,24,1);a("_setAutoTrackOutbound",Aa,79);a("_setTrackOutboundSubdomains",Aa,81);a("_setHrefExamineLimit",Aa,80)},Q=function(a,b,c,d){a[b]=function(){try{return F(d),
c.apply(this,arguments)}catch(a){throw Ka("exc",b,a&&a[q]),a;}}},S=function(a,b,c,d){R[v][a]=function(){try{return F(c),wa(this.a.get(b),d)}catch(e){throw Ka("exc",a,e&&e[q]),e;}}},T=function(a,b,c,d,e){R[v][a]=function(f){try{F(c),e==g?this.a.set(b,wa(f,d)):this.a.set(b,e)}catch(l){throw Ka("exc",a,l&&l[q]),l;}}},xc=function(a,b){return{type:b,target:a,stopPropagation:function(){throw"aborted";}}};var yc=function(a,b){return"/"!==b?j:(0==a[p]("www.google.")||0==a[p](".google.")||0==a[p]("google."))&&!(-1<a[p]("google.org"))?h:j},zc=function(a){var b=a.get(Ta),c=a[y](M,"/");yc(b,c)&&a[qa]()};var Ec=function(){var a={},b={},c=new Ac;this.g=function(a,b){c.add(a,b)};var d=new Ac;this.c=function(a,b){d.add(a,b)};var e=j,f=j,l=h;this.J=function(){e=h};this.f=function(a){this[ia]();this.set(dc,a,h);a=new Bc(this);e=j;d.execute(this);e=h;b={};this.i();a.qa()};this.load=function(){e&&(e=j,this.sa(),Cc(this),f||(f=h,c.execute(this),Dc(this),Cc(this)),e=h)};this.i=function(){if(e)if(f)e=j,Dc(this),e=h;else this[ia]()};this.get=function(c){Na[c]&&this[ia]();return b[c]!==g?b[c]:a[c]};this.set=
function(c,d,e){Na[c]&&this[ia]();e?b[c]=d:a[c]=d;Na[c]&&this.i()};this.n=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||""===c?b:1*c};this.getString=function(a,b){var c=this.get(a);return c==g?b:c+""};this.sa=function(){if(l){var b=this[y](Ta,""),c=this[y](M,"/");yc(b,c)||(a[L]=a[Za]&&""!=b?ya(b):1,l=j)}}};Ec[v].stopPropagation=function(){throw"aborted";};
var Bc=function(a){var b=this;this.j=0;var c=a.get(ec);this.Aa=function(){0<b.j&&c&&(b.j--,b.j||c())};this.qa=function(){!b.j&&c&&ca(c,10)};a.set(fc,b,h)};function Fc(a,b){for(var b=b||[],c=0;c<b[u];c++){var d=b[c];if(""+a==d||0==d[p](a+"."))return d}return"-"}
var Hc=function(a,b,c){c=c?"":a[y](L,"1");b=b[w](".");if(6!==b[u]||Gc(b[0],c))return j;var c=1*b[1],d=1*b[2],e=1*b[3],f=1*b[4],b=1*b[5];if(!(0<=c&&0<d&&0<e&&0<f&&0<=b))return F(110),j;a.set(O,c);a.set(Jb,d);a.set(Kb,e);a.set(Lb,f);a.set(Mb,b);return h},Ic=function(a){var b=a.get(O),c=a.get(Jb),d=a.get(Kb),e=a.get(Lb),f=a.b(Mb,1);b==g?F(113):NaN==b&&F(114);0<=b&&0<c&&0<d&&0<e&&0<=f||F(115);return[a.b(L,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][A](".")},Jc=function(a){return[a.b(L,1),a.b(Pb,0),a.b(P,1),
a.b(Qb,0)][A](".")},Kc=function(a,b,c){var c=c?"":a[y](L,"1"),d=b[w](".");if(4!==d[u]||Gc(d[0],c))d=i;a.set(Pb,d?1*d[1]:0);a.set(P,d?1*d[2]:10);a.set(Qb,d?1*d[3]:a.get(Sa));return d!=i||!Gc(b,c)},Lc=function(a,b){var c=Ba(a[y](Gb,"")),d=[],e=a.get(N);if(!b&&e){for(var f=0;f<e[u];f++){var l=e[f];l&&1==l[ra]&&d[m](f+"="+Ba(l[q])+"="+Ba(l[la])+"=1")}0<d[u]&&(c+="|"+d[A]("^"))}return c?a.b(L,1)+"."+c:i},Mc=function(a,b,c){c=c?"":a[y](L,"1");b=b[w](".");if(2>b[u]||Gc(b[0],c))return j;b=b[ga](1)[A](".")[w]("|");
0<b[u]&&a.set(Gb,G(b[0]));if(1>=b[u])return h;for(var c=b[1][w](-1==b[1][p](",")?"^":","),d=0;d<c[u];d++){var e=c[d][w]("=");if(4==e[u]){var f={};fa(f,G(e[1]));f.value=G(e[2]);f.scope=1;a.get(N)[e[0]]=f}}0<=b[1][p]("^")&&F(125);return h},Oc=function(a,b){var c=Nc(a,b);return c?[a.b(L,1),a.b(Rb,0),a.b(Sb,1),a.b(Tb,1),c][A]("."):""},Nc=function(a){function b(b,e){if(!E(a.get(b))){var f=a[y](b,""),f=f[w](" ")[A]("%20"),f=f[w]("+")[A]("%20");c[m](e+"="+f)}}var c=[];b(Vb,"utmcid");b(Zb,"utmcsr");b(Xb,
"utmgclid");b(Yb,"utmdclid");b(Wb,"utmccn");b($b,"utmcmd");b(ac,"utmctr");b(bc,"utmcct");return c[A]("|")},Qc=function(a,b,c){c=c?"":a[y](L,"1");b=b[w](".");if(5>b[u]||Gc(b[0],c))return a.set(Rb,g),a.set(Sb,g),a.set(Tb,g),a.set(Vb,g),a.set(Wb,g),a.set(Zb,g),a.set($b,g),a.set(ac,g),a.set(bc,g),a.set(Xb,g),a.set(Yb,g),j;a.set(Rb,1*b[1]);a.set(Sb,1*b[2]);a.set(Tb,1*b[3]);Pc(a,b[ga](4)[A]("."));return h},Pc=function(a,b){function c(a){return(a=b[ma](a+"=(.*?)(?:\\|utm|$)"))&&2==a[u]?a[1]:g}function d(b,
c){c&&(c=e?G(c):c[w]("%20")[A](" "),a.set(b,c))}-1==b[p]("=")&&(b=G(b));var e="2"==c("utmcvr");d(Vb,c("utmcid"));d(Wb,c("utmccn"));d(Zb,c("utmcsr"));d($b,c("utmcmd"));d(ac,c("utmctr"));d(bc,c("utmcct"));d(Xb,c("utmgclid"));d(Yb,c("utmdclid"))},Gc=function(a,b){return b?a!=b:!/^\d+$/.test(a)};var Ac=function(){this.s=[]};Ac[v].add=function(a,b){this.s[m]({name:a,Ea:b})};Ac[v].execute=function(a){try{for(var b=0;b<this.s[u];b++)this.s[b].Ea.call(U,a)}catch(c){}};function Rc(a){100!=a.get(lb)&&a.get(O)%1E4>=100*a.get(lb)&&a[qa]()}function Sc(a){Tc()&&a[qa]()}function Uc(a){"file:"==I[x].protocol&&a[qa]()}function Vc(a){a.get(wb)||a.set(wb,I.title,h);a.get(vb)||a.set(vb,I[x].pathname+I[x].search,h)};var Wc=new function(){var a=[];this.set=function(b){a[b]=h};this.Fa=function(){for(var b=[],c=0;c<a[u];c++)a[c]&&(b[k[ja](c/6)]=b[k[ja](c/6)]^1<<c%6);for(c=0;c<b[u];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[n](b[c]||0);return b[A]("")+"~"}};function F(a){Wc.set(a)};var U=window,I=document,Tc=function(){var a=U._gaUserPrefs;return a&&a.ioo&&a.ioo()},Xc=function(a,b){ca(a,b)},V=function(a){for(var b=[],c=I[ka][w](";"),a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),d=0;d<c[u];d++){var e=c[d][ma](a);e&&b[m](e[1])}return b},W=function(a,b,c,d,e){var f;f=Tc()?j:yc(d,c)?j:h;if(f){if(b&&0<=U[va].userAgent[p]("Firefox")){b=b[ha](/\n|\r/g," ");f=0;for(var l=b[u];f<l;++f){var o=b.charCodeAt(f)&255;if(10==o||13==o)b=b[z](0,f)+"?"+b[z](f+1)}}b&&2E3<b[u]&&(b=b[z](0,2E3),F(69));a=
a+"="+b+"; path="+c+"; ";e&&(a+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");d&&(a+="domain="+d+";");I.cookie=a}};var Yc,Zc,$c=function(){if(!Yc){var a={},b=U[va],c=U.screen;a.H=c?c.width+"x"+c.height:"-";a.G=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[C]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=I.characterSet||I.charset||"-";try{var d=I.documentElement,e=I.body,f=e&&e[pa]&&e[ta],b=[];d&&d[pa]&&d[ta]&&("CSS1Compat"===I.compatMode||!f)?b=[d[pa],d[ta]]:f&&(b=[e[pa],e[ta]]);a.Ba=b[A]("x")}catch(l){F(135)}Yc=a}},ad=function(){$c();for(var a=Yc,b=U[va],a=b.appName+b.version+
a.language+b.platform+b.userAgent+a.javaEnabled+a.H+a.G+(I[ka]?I[ka]:"")+(I.referrer?I.referrer:""),b=a[u],c=U.history[u];0<c;)a+=c--^b++;return ya(a)},bd=function(a){$c();var b=Yc;a.set(zb,b.H);a.set(Ab,b.G);a.set(Db,b.language);a.set(Eb,b.characterSet);a.set(Bb,b.javaEnabled);a.set(vc,b.Ba);if(a.get($a)&&a.get(ab)){if(!(b=Zc)){var c,d,e;d="ShockwaveFlash";if((b=(b=U[va])?b.plugins:g)&&0<b[u])for(c=0;c<b[u]&&!e;c++)d=b[c],-1<d[q][p]("Shockwave Flash")&&(e=d.description[w]("Shockwave Flash ")[1]);
else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(l){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(o){}e&&(e=e[w](" ")[1][w](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}Zc=b;a.set(Cb,Zc)}else a.set(Cb,"-")};var X=function(){Q(X[v],"push",X[v][m],5);Q(X[v],"_createAsyncTracker",X[v].Ca,33);Q(X[v],"_getAsyncTracker",X[v].Da,34);this.r=0};X[v].Ca=function(a,b){return J.l(a,b||"")};X[v].Da=function(a){return J.p(a)};X[v].push=function(a){0<this.r&&F(105);this.r++;for(var b=arguments,c=0,d=0;d<b[u];d++)try{if("function"===typeof b[d])b[d]();else{var e="",f=b[d][0],l=f.lastIndexOf(".");0<l&&(e=f[z](0,l),f=f[z](l+1));var o="_gat"==e?J:"_gaq"==e?cd:J.p(e);o[f].apply(o,b[d][ga](1))}}catch(r){c++}this.r--;return c};var gd=function(){function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){f[a][b]=g;var c=h,d;for(d=0;d<l[u];d++)if(g!=f[a][l[d]]){c=j;break}c&&(f[a]=g)}}function d(a){var b="",c=j,d,e;for(d=0;d<l[u];d++)if(e=a[l[d]],g!=e){c&&(b+=l[d]);for(var c=[],f=g,Y=g,Y=0;Y<e[u];Y++)if(g!=e[Y]){f="";Y!=Z&&g==e[Y-1]&&(f+=Y[t]()+oa);for(var ed=e[Y],pc="",Hb=g,qc=g,rc=g,Hb=0;Hb<ed[u];Hb++)qc=ed[n](Hb),
rc=B[qc],pc+=g!=rc?rc:qc;f+=pc;c[m](f)}b+=o+c[A](s)+r;c=j}else c=h;return b}var e=this,f=[],l=["k","v"],o="(",r=")",s="*",oa="!",B={"'":"'0"};B[r]="'1";B[s]="'2";B[oa]="'3";var Z=1;e.va=function(a){return g!=f[a]};e.o=function(){for(var a="",b=0;b<f[u];b++)g!=f[b]&&(a+=b[t]()+d(f[b]));return a};e.ua=function(a){if(a==g)return e.o();for(var b=a.o(),c=0;c<f[u];c++)g!=f[c]&&!a.va(c)&&(b+=c[t]()+d(f[c]));return b};e.e=function(b,c,d){if(!dd(d))return j;a(b,"k",c,d);return h};e.k=function(b,c,d){if(!fd(d))return j;
a(b,"v",c,d[t]());return h};e.getKey=function(a,c){return b(a,"k",c)};e.C=function(a,c){return b(a,"v",c)};e.A=function(a){c(a,"k")};e.B=function(a){c(a,"v")};Q(e,"_setKey",e.e,89);Q(e,"_setValue",e.k,90);Q(e,"_getKey",e.getKey,87);Q(e,"_getValue",e.C,88);Q(e,"_clearKey",e.A,85);Q(e,"_clearValue",e.B,86)};function dd(a){return"string"==typeof a}function fd(a){return"number"!=typeof a&&(g==Number||!(a instanceof Number))||k.round(a)!=a||NaN==a||a==ba?j:h};var hd=function(a){var b=U.gaGlobal;a&&!b&&(U.gaGlobal=b={});return b},id=function(){var a=hd(h).hid;a==i&&(a=za(),hd(h).hid=a);return a},jd=function(a){a.set(yb,id());var b=hd();if(b&&b.dh==a.get(L)){var c=b.sid;c&&("0"==c&&F(112),a.set(Lb,c),a.get(Fb)&&a.set(Kb,c));b=b.vid;a.get(Fb)&&b&&(b=b[w]("."),1*b[1]||F(112),a.set(O,1*b[0]),a.set(Jb,1*b[1]))}};var kd,ld=function(a,b,c){var d=a[y](Ta,""),e=a[y](M,"/"),a=a.b(Ua,0);W(b,c,e,d,a)},Dc=function(a){var b=a[y](Ta,"");a.b(L,1);var c=a[y](M,"/");W("__utma",Ic(a),c,b,a.get(Ua));W("__utmb",Jc(a),c,b,a.get(Va));W("__utmc",""+a.b(L,1),c,b);var d=Oc(a,h);d?W("__utmz",d,c,b,a.get(Wa)):W("__utmz","",c,b,-1);(d=Lc(a,j))?W("__utmv",d,c,b,a.get(Ua)):W("__utmv","",c,b,-1)},Cc=function(a){var b=a.b(L,1);if(!Hc(a,Fc(b,V("__utma"))))return a.set(Ib,h),j;var c=!Kc(a,Fc(b,V("__utmb")));a.set(Ob,c);Qc(a,Fc(b,V("__utmz")));
Mc(a,Fc(b,V("__utmv")));kd=!c;return h},md=function(a){kd||0<V("__utmb")[u]||(W("__utmd","1",a[y](M,"/"),a[y](Ta,""),1E4),0==V("__utmd")[u]&&a[qa]())};var pd=function(a){a.get(O)==g?nd(a):a.get(Ib)&&!a.get(tc)?nd(a):a.get(Ob)&&od(a)},qd=function(a){a.get(Ub)&&!a.get(Nb)&&(od(a),a.set(Sb,a.get(Mb)))},nd=function(a){var b=a.get(Sa);a.set(Fb,h);a.set(O,za()^ad(a)&2147483647);a.set(Gb,"");a.set(Jb,b);a.set(Kb,b);a.set(Lb,b);a.set(Mb,1);a.set(Nb,h);a.set(Pb,0);a.set(P,10);a.set(Qb,b);a.set(N,[]);a.set(Ib,j);a.set(Ob,j)},od=function(a){a.set(Kb,a.get(Lb));a.set(Lb,a.get(Sa));a.n(Mb);a.set(Nb,h);a.set(Pb,0);a.set(P,10);a.set(Qb,a.get(Sa));a.set(Ob,j)};var rd="daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:q,lycos:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,seznam:q,rakuten:qt,biglobe:q,goo.ne:MT,wp:szukaj,onet:qt,yam:k,kvasir:q,ozu:q,terra:query,rambler:query,conduit:q,babylon:q,search-results:q,avg:q,comcast:q,incredimail:q,startsiden:q".split(","),xd=function(a){if(a.get(bb)&&!a.get(tc)){for(var b=
!E(a.get(Vb))||!E(a.get(Zb))||!E(a.get(Xb))||!E(a.get(Yb)),c={},d=0;d<sd[u];d++){var e=sd[d];c[e]=a.get(e)}(d=a.get(cc))?(e=new Fa,Ia(e,d),d=e):d=Ha(I[x][ua],a.get(Ya)).d;if(!("1"==Ea(d.get(a.get(kb)))&&b)&&(d=td(a,d)||ud(a),!d&&!b&&a.get(Nb)&&(vd(a,g,"(direct)",g,g,"(direct)","(none)",g,g),d=h),d&&(a.set(Ub,wd(a,c)),b="(direct)"==a.get(Zb)&&"(direct)"==a.get(Wb)&&"(none)"==a.get($b),a.get(Ub)||a.get(Nb)&&!b)))a.set(Rb,a.get(Sa)),a.set(Sb,a.get(Mb)),a.n(Tb)}},td=function(a,b){function c(c,d){var d=
d||"-",e=Ea(b.get(a.get(c)));return e&&"-"!=e?G(e):d}var d=Ea(b.get(a.get(db)))||"-",e=Ea(b.get(a.get(gb)))||"-",f=Ea(b.get(a.get(fb)))||"-",l=Ea(b.get("dclid"))||"-",o=c(eb,"(not set)"),r=c(hb,"(not set)"),s=c(ib),oa=c(jb);if(E(d)&&E(f)&&E(l)&&E(e))return j;if(E(s)){var B=Ja(a.get(xb),a.get(M)),B=Ha(B,h);(B=yd(a,B))&&!E(B[1]&&!B[2])&&(s=B[1])}vd(a,d,e,f,l,o,r,s,oa);return h},ud=function(a){var b=Ja(a.get(xb),a.get(M)),c=Ha(b,h);if(!(b!=g&&b!=i&&""!=b&&"0"!=b&&"-"!=b&&0<=b[p]("://"))||c&&-1<c[na][p]("google")&&
c.d.contains("q")&&"cse"==c.path)return j;if((b=yd(a,c))&&!b[2])return vd(a,g,b[0],g,g,"(organic)","organic",b[1],g),h;if(b)return j;if(a.get(Nb))a:{for(var b=a.get(rb),d=Ga(c[na]),e=0;e<b[u];++e)if(-1<d[p](b[e])){a=j;break a}vd(a,g,d,g,g,"(referral)","referral",g,"/"+c.path);a=h}else a=j;return a},yd=function(a,b){for(var c=a.get(pb),d=0;d<c[u];++d){var e=c[d][w](":");if(-1<b[na][p](e[0][C]())){var f=b.d.get(e[1]);if(f&&(f=H(f),!f&&-1<b[na][p]("google.")&&(f="(not provided)"),!e[3]||-1<b.url[p](e[3]))){a:{for(var c=
f,d=a.get(qb),c=G(c)[C](),l=0;l<d[u];++l)if(c==d[l]){c=h;break a}c=j}return[e[2]||e[0],f,c]}}}return i},vd=function(a,b,c,d,e,f,l,o,r){a.set(Vb,b);a.set(Zb,c);a.set(Xb,d);a.set(Yb,e);a.set(Wb,f);a.set($b,l);a.set(ac,o);a.set(bc,r)},sd=[Wb,Vb,Xb,Yb,Zb,$b,ac,bc],wd=function(a,b){function c(a){a=(""+a)[w]("+")[A]("%20");return a=a[w](" ")[A]("%20")}function d(c){var d=""+(a.get(c)||""),c=""+(b[c]||"");return 0<d[u]&&d==c}if(d(Xb)||d(Yb))return F(131),j;for(var e=0;e<sd[u];e++){var f=sd[e],l=b[f]||"-",
f=a.get(f)||"-";if(c(l)!=c(f))return h}return j};var Ad=function(a){zd(a,I[x][ua])?(a.set(tc,h),F(12)):a.set(tc,j)},zd=function(a,b){if(!a.get(Xa))return j;var c=Ha(b,a.get(Ya)),d=H(c.d.get("__utma")),e=H(c.d.get("__utmb")),f=H(c.d.get("__utmc")),l=H(c.d.get("__utmx")),o=H(c.d.get("__utmz")),r=H(c.d.get("__utmv")),c=H(c.d.get("__utmk"));if(ya(""+d+e+f+l+o+r)!=c){d=G(d);e=G(e);f=G(f);l=G(l);a:{for(var f=d+e+f+l,s=0;3>s;s++){for(var oa=0;3>oa;oa++){if(c==ya(f+o+r)){F(127);c=[o,r];break a}var B=o[ha](/ /g,"%20"),Z=r[ha](/ /g,"%20");if(c==ya(f+B+Z)){F(128);
c=[B,Z];break a}B=B[ha](/\+/g,"%20");Z=Z[ha](/\+/g,"%20");if(c==ya(f+B+Z)){F(129);c=[B,Z];break a}o=G(o)}r=G(r)}c=g}if(!c)return j;o=c[0];r=c[1]}if(!Hc(a,d,h))return j;Kc(a,e,h);Qc(a,o,h);Mc(a,r,h);Bd(a,l,h);return h},Dd=function(a,b,c){var d;d=Ic(a)||"-";var e=Jc(a)||"-",f=""+a.b(L,1)||"-",l=Cd(a)||"-",o=Oc(a,j)||"-",a=Lc(a,j)||"-",r=ya(""+d+e+f+l+o+a),s=[];s[m]("__utma="+d);s[m]("__utmb="+e);s[m]("__utmc="+f);s[m]("__utmx="+l);s[m]("__utmz="+o);s[m]("__utmv="+a);s[m]("__utmk="+r);d=s[A]("&");if(!d)return b;
e=b[p]("#");if(c)return 0>e?b+"#"+d:b+"&"+d;c="";f=b[p]("?");0<e&&(c=b[z](e),b=b[z](0,e));return 0>f?b+"?"+d+c:b+"&"+d+c};var Ed="|",Gd=function(a,b,c,d,e,f,l,o,r){var s=Fd(a,b);s||(s={},a.get(sb)[m](s));s.id_=b;s.affiliation_=c;s.total_=d;s.tax_=e;s.shipping_=f;s.city_=l;s.state_=o;s.country_=r;s.items_=s.items_||[];return s},Hd=function(a,b,c,d,e,f,l){var a=Fd(a,b)||Gd(a,b,"",0,0,0,"","",""),o;a:{if(a&&a.items_){o=a.items_;for(var r=0;r<o[u];r++)if(o[r].sku_==c){o=o[r];break a}}o=i}r=o||{};r.transId_=b;r.sku_=c;r.name_=d;r.category_=e;r.price_=f;r.quantity_=l;o||a.items_[m](r);return r},Fd=function(a,b){for(var c=
a.get(sb),d=0;d<c[u];d++)if(c[d].id_==b)return c[d];return i};var Id,Jd=function(a){if(!Id){var b,c=I[x].hash;b=U[q];var d=/^#?gaso=([^&]*)/;if(c=(b=(c=c&&c[ma](d)||b&&b[ma](d))?c[1]:H(V("GASO")))&&b[ma](/^(?:\|([-0-9a-z.]{1,40})\|)?([-.\w]{10,1200})$/i))if(ld(a,"GASO",""+b),J._gasoDomain=a.get(Ta),J._gasoCPath=a.get(M),b=a=c[1],"adwords"!=b&&(b="www"),c="https://"+(b+".google.com")+"/analytics/reporting/overlay_js?gaso="+c[2]+(a?"&prefix="+a:"")+"&"+za())a=I.createElement("script"),a.type="text/javascript",a.async=h,a.src=c,a.id="_gasojs",ea(a,g),c=I.getElementsByTagName("script")[0],
c.parentNode.insertBefore(a,c);Id=h}};var Bd=function(a,b,c){c&&(b=G(b));c=a.b(L,1);b=b[w](".");!(2>b[u])&&/^\d+$/.test(b[0])&&(b[0]=""+c,ld(a,"__utmx",b[A](".")))},Cd=function(a,b){var c=Fc(a.get(L),V("__utmx"));"-"==c&&(c="");return b?Ba(c):c};var Od=function(a,b){var c=k.min(a.b(oc,0),10);if(a.b(O,0)%100>=c)return j;c=Kd()||Ld();if(c==g)return j;var d=c[0];if(d==g||d==ba||isNaN(d))return j;0<d?Md(c)?b(Nd(c)):b(Nd(c[ga](0,1))):(1>1E3*k[sa]()&&F(124),Ca(U,"load",function(){Od(a,b)},j));return h},Md=function(a){for(var b=1;b<a[u];b++)if(isNaN(a[b])||a[b]==ba||0>a[b])return j;return h},Nd=function(a){for(var b=new gd,c=0;c<a[u];c++)b.e(14,c+1,(isNaN(a[c])||0>a[c]?0:5E3>a[c]?10*k[ja](a[c]/10):45E4>a[c]?100*k[ja](a[c]/100):45E4)+""),b.k(14,
c+1,a[c]);return b},Kd=function(){var a=U.performance||U.webkitPerformance;if(a=a&&a.timing){var b=a.navigationStart;if(0==b)F(133);else return[a.loadEventStart-b,a.domainLookupEnd-a.domainLookupStart,a.connectEnd-a.connectStart,a.responseStart-a.requestStart,a.responseEnd-a.responseStart,a.fetchStart-b]}},Ld=function(){if(U.top==U){var a=U.external,b=a&&a.onloadT;a&&!a.isValidLoadTime&&(b=g);2147483648<b&&(b=g);0<b&&a.setPageReadyTime();return b==g?g:[b]}};var R=function(a,b,c){function d(a){return function(b){if((b=b.get(uc)[a])&&b[u])for(var c=xc(e,a),d=0;d<b[u];d++)b[d].call(e,c)}}var e=this;this.a=new Ec;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(Pa,b||"UA-XXXXX-X");this.set(Ra,a||"");this.set(Qa,c||"");this.set(Sa,k.round((new Date).getTime()/1E3));this.set(M,"/");this.set(Ua,63072E6);this.set(Wa,15768E6);this.set(Va,18E5);this.set(Xa,j);this.set(ob,50);this.set(Ya,j);this.set(Za,h);this.set($a,
h);this.set(ab,h);this.set(bb,h);this.set(cb,h);this.set(eb,"utm_campaign");this.set(db,"utm_id");this.set(fb,"gclid");this.set(gb,"utm_source");this.set(hb,"utm_medium");this.set(ib,"utm_term");this.set(jb,"utm_content");this.set(kb,"utm_nooverride");this.set(lb,100);this.set(oc,1);this.set(sc,j);this.set(mb,"/__utm.gif");this.set(nb,1);this.set(sb,[]);this.set(N,[]);this.set(pb,rd[ga](0));this.set(qb,[]);this.set(rb,[]);this.t("auto");this.set(xb,this.ra());this.set(uc,{hit:[],load:[]});this.a.g("0",
Ad);this.a.g("1",pd);this.a.g("2",xd);this.a.g("3",qd);this.a.g("4",d("load"));this.a.g("5",Jd);this.a.c("A",Sc);this.a.c("B",Uc);this.a.c("C",pd);this.a.c("D",Rc);this.a.c("E",zc);this.a.c("F",Pd);this.a.c("G",md);this.a.c("H",Vc);this.a.c("I",bd);this.a.c("J",jd);this.a.c("K",d("hit"));this.a.c("L",Qd);this.a.c("M",Rd);0===this.get(Sa)&&F(111);this.a.J();this.w=g};D=R[v];D.h=function(){var a=this.get(tb);a||(a=new gd,this.set(tb,a));return a};
D.ta=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,h)}};D.z=function(a){if(this.get(sc))return j;var b=this,c=Od(this.a,function(c){b.set(vb,a,h);b.u(c)});this.set(sc,c);return c};D.na=function(a){a&&a!=g&&-1<(a.constructor+"")[p]("String")?(F(13),this.set(vb,a,h)):"object"===typeof a&&a!==i&&this.ta(a);this.w=a=this.get(vb);1>=1E3*k[sa]()&&Sd();this.a.f("page");this.z(a)};
D.v=function(a,b,c,d,e){if(""==a||!dd(a)||""==b||!dd(b)||c!=g&&!dd(c)||d!=g&&!fd(d))return j;this.set(hc,a,h);this.set(ic,b,h);this.set(jc,c,h);this.set(kc,d,h);this.set(gc,!!e,h);this.a.f("event");return h};D.oa=function(a,b,c,d){if(!a||!b)return j;this.set(lc,a,h);this.set(mc,b,h);this.set(nc,c||I[x][ua],h);d&&this.set(vb,d,h);this.a.f("social");return h};D.ma=function(){this.set(oc,10);this.z(this.w)};D.pa=function(){this.a.f("trans")};D.u=function(a){this.set(ub,a,h);this.a.f("event")};
D.V=function(a){this.m();var b=this;return{_trackEvent:function(c,d,e){F(91);b.v(a,c,d,e)}}};D.Y=function(a){return this.get(a)};D.ga=function(a,b){if(a)if(a!=g&&-1<(a.constructor+"")[p]("String"))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};D.addEventListener=function(a,b){var c=this.get(uc)[a];c&&c[m](b)};D.removeEventListener=function(a,b){for(var c=this.get(uc)[a],d=0;c&&d<c[u];d++)if(c[d]==b){c.splice(d,1);break}};D.$=function(){return"5.2.4"};
D.t=function(a){this.get(Za);a="auto"==a?Ga(I.domain):!a||"-"==a||"none"==a?"":a[C]();this.set(Ta,a)};D.ea=function(a){this.set(Za,!!a)};D.Z=function(a,b){return Dd(this.a,a,b)};D.link=function(a,b){if(this.a.get(Xa)&&a){var c=Dd(this.a,a,b);I[x].href=c}};D.da=function(a,b){this.a.get(Xa)&&a&&a.action&&(a.action=Dd(this.a,a.action,b))};
D.ha=function(){this.m();var a=this.a,b=I.getElementById?I.getElementById("utmtrans"):I.utmform&&I.utmform.utmtrans?I.utmform.utmtrans:i;if(b&&b[la]){a.set(sb,[]);for(var b=b[la][w]("UTM:"),c=0;c<b[u];c++){b[c]=xa(b[c]);for(var d=b[c][w](Ed),e=0;e<d[u];e++)d[e]=xa(d[e]);"T"==d[0]?Gd(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&Hd(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};D.O=function(a,b,c,d,e,f,l,o){return Gd(this.a,a,b,c,d,e,f,l,o)};D.M=function(a,b,c,d,e,f){return Hd(this.a,a,b,c,d,e,f)};
D.ia=function(a){Ed=a||"|"};D.fa=function(a,b,c,d){var e=this.a;if(0>=a||a>e.get(ob)||!b||!c||128<b[u]+c[u])a=j;else{1!=d&&2!=d&&(d=3);var f={};fa(f,b);f.value=c;f.scope=d;e.get(N)[a]=f;a=h}a&&this.a.i();return a};D.X=function(a){this.a.get(N)[a]=g;this.a.i()};D.aa=function(a){return(a=this.a.get(N)[a])&&1==a[ra]?a[la]:g};D.ka=function(a,b,c){this.h().e(a,b,c)};D.la=function(a,b,c){this.h().k(a,b,c)};D.ba=function(a,b){return this.h().getKey(a,b)};D.ca=function(a,b){return this.h().C(a,b)};D.S=function(a){this.h().A(a)};
D.T=function(a){this.h().B(a)};D.W=function(){return new gd};D.K=function(a){a&&this.get(qb)[m](a[C]())};D.P=function(){this.set(qb,[])};D.L=function(a){a&&this.get(rb)[m](a[C]())};D.Q=function(){this.set(rb,[])};D.N=function(a,b,c,d,e){if(a&&b){a=[a,b[C]()][A](":");if(d||e)a=[a,d,e][A](":");d=this.get(pb);d.splice(c?0:d[u],0,a)}};D.R=function(){this.set(pb,[])};D.U=function(a){this.a[ia]();var b=this.get(M),c=Cd(this.a);this.set(M,a);this.a.i();Bd(this.a,c);this.set(M,b)};
D.ra=function(){var a="";try{var b=Ha(I[x][ua],j),a=da(Ea(b.d.get("utm_referrer")))||""}catch(c){F(146)}return a||I.referrer};D.m=function(){this.a[ia]()};D.ja=function(a){a&&""!=a&&(this.set(Gb,a),this.a.f("var"))};var Sd=function(){function a(a,b){(0==c[p](a)||-1<c[p]("; "+a))&&F(b)}function b(a,b){U[a]!==g&&F(b)}F(137);var c=I[ka];a("ga=",138);a("_ga=",139);a("ga2=",140);a("_a=",141);b("ga",142);b("_ga",143);b("ga2",144);b("_a",145)};var Pd=function(a){"trans"!==a.get(dc)&&500<=a.b(Pb,0)&&a[qa]();if("event"===a.get(dc)){var b=(new Date).getTime(),c=a.b(Qb,0),d=a.b(Lb,0),c=k[ja](1*((b-(c!=d?c:1E3*c))/1E3));0<c&&(a.set(Qb,b),a.set(P,k.min(10,a.b(P,0)+c)));0>=a.b(P,0)&&a[qa]()}},Rd=function(a){"event"===a.get(dc)&&a.set(P,k.max(0,a.b(P,10)-1))};var Td=function(){var a=[];this.add=function(b,c,d){d&&(c=Ba(""+c));a[m](b+"="+c)};this.toString=function(){return a[A]("&")}},Ud=function(a,b){(b||2!=a.get(nb))&&a.n(Pb)},Vd=function(a,b){b.add("utmwv","5.2.4");b.add("utms",a.get(Pb));b.add("utmn",za());var c=I[x].hostname;E(c)||b.add("utmhn",c,h);c=a.get(lb);100!=c&&b.add("utmsp",c,h)},Xd=function(a,b){b.add("utmac",a.get(Pa));a.get(gc)&&b.add("utmni",1);Wd(a,b);J.q&&b.add("aip",1);b.add("utmu",Wc.Fa())},Wd=function(a,b){function c(a,b){b&&d[m](a+
"="+b+";")}var d=[];c("__utma",Ic(a));c("__utmz",Oc(a,j));c("__utmv",Lc(a,h));c("__utmx",Cd(a));b.add("utmcc",d[A]("+"),h)},Yd=function(a,b){a.get($a)&&(b.add("utmcs",a.get(Eb),h),b.add("utmsr",a.get(zb)),a.get(vc)&&b.add("utmvp",a.get(vc)),b.add("utmsc",a.get(Ab)),b.add("utmul",a.get(Db)),b.add("utmje",a.get(Bb)),b.add("utmfl",a.get(Cb),h))},Zd=function(a,b){a.get(cb)&&a.get(wb)&&b.add("utmdt",a.get(wb),h);b.add("utmhid",a.get(yb));b.add("utmr",Ja(a.get(xb),a.get(M)),h);b.add("utmp",Ba(a.get(vb),
h),h)},$d=function(a,b){for(var c=a.get(tb),d=a.get(ub),e=a.get(N)||[],f=0;f<e[u];f++){var l=e[f];l&&(c||(c=new gd),c.e(8,f,l[q]),c.e(9,f,l[la]),3!=l[ra]&&c.e(11,f,""+l[ra]))}!E(a.get(hc))&&!E(a.get(ic),h)&&(c||(c=new gd),c.e(5,1,a.get(hc)),c.e(5,2,a.get(ic)),e=a.get(jc),e!=g&&c.e(5,3,e),e=a.get(kc),e!=g&&c.k(5,1,e));c?b.add("utme",c.ua(d),h):d&&b.add("utme",d.o(),h)},ae=function(a,b,c){var d=new Td;Ud(a,c);Vd(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,h);d.add("utmtst",b.affiliation_,h);d.add("utmtto",
b.total_,h);d.add("utmttx",b.tax_,h);d.add("utmtsp",b.shipping_,h);d.add("utmtci",b.city_,h);d.add("utmtrg",b.state_,h);d.add("utmtco",b.country_,h);!c&&Xd(a,d);return d[t]()},be=function(a,b,c){var d=new Td;Ud(a,c);Vd(a,d);d.add("utmt","item");d.add("utmtid",b.transId_,h);d.add("utmipc",b.sku_,h);d.add("utmipn",b.name_,h);d.add("utmiva",b.category_,h);d.add("utmipr",b.price_,h);d.add("utmiqt",b.quantity_,h);!c&&Xd(a,d);return d[t]()},ce=function(a,b){var c=a.get(dc);if("page"==c)c=new Td,Ud(a,b),
Vd(a,c),$d(a,c),Yd(a,c),Zd(a,c),b||Xd(a,c),c=[c[t]()];else if("event"==c)c=new Td,Ud(a,b),Vd(a,c),c.add("utmt","event"),$d(a,c),Yd(a,c),Zd(a,c),!b&&Xd(a,c),c=[c[t]()];else if("var"==c)c=new Td,Ud(a,b),Vd(a,c),c.add("utmt","var"),!b&&Xd(a,c),c=[c[t]()];else if("trans"==c)for(var c=[],d=a.get(sb),e=0;e<d[u];++e){c[m](ae(a,d[e],b));for(var f=d[e].items_,l=0;l<f[u];++l)c[m](be(a,f[l],b))}else"social"==c?b?c=[]:(c=new Td,Ud(a,b),Vd(a,c),c.add("utmt","social"),c.add("utmsn",a.get(lc),h),c.add("utmsa",a.get(mc),
h),c.add("utmsid",a.get(nc),h),$d(a,c),Yd(a,c),Zd(a,c),Xd(a,c),c=[c[t]()]):c=[];return c},Qd=function(a){var b,c=a.get(nb),d=a.get(fc),e=d&&d.Aa,f=0;if(0==c||2==c){var l=a.get(mb)+"?";b=ce(a,h);for(var o=0,r=b[u];o<r;o++)La(b[o],e,l,h),f++}if(1==c||2==c){b=ce(a);o=0;for(r=b[u];o<r;o++)try{La(b[o],e),f++}catch(s){s&&Ka(s[q],g,s.message)}}d&&(d.j=f)};var de="https:"==I[x].protocol?"https://ssl.google-analytics.com":"http://www.google-analytics.com",ee=function(a){fa(this,"len");this.message=a+"-8192"},fe=function(a){fa(this,"ff2post");this.message=a+"-2036"},La=function(a,b,c,d){b=b||Aa;if(d||2036>=a[u])ge(a,b,c);else if(8192>=a[u]){if(0<=U[va].userAgent[p]("Firefox")&&![].reduce)throw new fe(a[u]);he(a,b)||ie(a,b)}else throw new ee(a[u]);},ge=function(a,b,c){var c=c||de+"/__utm.gif?",d=new Image(1,1);d.src=c+a;ea(d,function(){ea(d,i);d.onerror=
i;b()});d.onerror=function(){ea(d,i);d.onerror=i;b()}},he=function(a,b){var c,d=de+"/p/__utm.gif",e=U.XDomainRequest;if(e)c=new e,c.open("POST",d);else if(e=U.XMLHttpRequest)e=new e,"withCredentials"in e&&(c=e,c.open("POST",d,h),c.setRequestHeader("Content-Type","text/plain"));if(c)return c.onreadystatechange=function(){4==c.readyState&&(b(),c=i)},c.send(a),h},ie=function(a,b){if(I.body){a=aa(a);try{var c=I.createElement('<iframe name="'+a+'"></iframe>')}catch(d){c=I.createElement("iframe"),fa(c,
a)}c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var e=I[x],e=de+"/u/post_iframe.html#"+aa(e.protocol+"//"+e[na]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};Ca(U,"beforeunload",f);var l=j,o=0,r=function(){if(!l){try{if(9<o||c.contentWindow[x][na]==I[x][na]){l=h;f();Da(U,"beforeunload",f);b();return}}catch(a){}o++;ca(r,200)}};Ca(c,"load",r);I.body.appendChild(c);c.src=e}else Xc(function(){ie(a,b)},100)};var $=function(){this.q=j;this.D={};this.F=[];this.wa=0;this._gasoCPath=this._gasoDomain=g;Q($[v],"_createTracker",$[v].l,55);Q($[v],"_getTracker",$[v].ya,0);Q($[v],"_getTrackerByName",$[v].p,51);Q($[v],"_getTrackers",$[v].za,130);Q($[v],"_anonymizeIp",$[v].xa,16);wc()};D=$[v];D.ya=function(a,b){return this.l(a,g,b)};D.l=function(a,b,c){b&&F(23);c&&F(67);b==g&&(b="~"+J.wa++);a=new R(b,a,c);J.D[b]=a;J.F[m](a);return a};D.p=function(a){a=a||"";return J.D[a]||J.l(g,a)};D.za=function(){return J.F[ga](0)};
D.xa=function(){this.q=h};var je=function(a){if("prerender"==I.webkitVisibilityState)return j;a();return h};var J=new $;var ke=U._gat;ke&&"function"==typeof ke._getTracker?J=ke:U._gat=J;var cd=new X;(function(a){if(!je(a)){F(123);var b=j,c=function(){!b&&je(a)&&(b=h,Da(I,"webkitvisibilitychange",c))};Ca(I,"webkitvisibilitychange",c)}})(function(){var a=U._gaq,b=j;if(a&&"function"==typeof a[m]&&(b="[object Array]"==Object[v][t].call(Object(a)),!b)){cd=a;return}U._gaq=cd;b&&cd[m].apply(cd,a)});})();
