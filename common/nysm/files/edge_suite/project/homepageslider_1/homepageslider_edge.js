
(function($,Edge,compId){var _=null,y=true,n=false,x49='375px',x46='rgb(255,255,255)',x15='100%',x43='button',x42='22px',a='Base State',x30='btnBase',x11='hidden',x9='rgba(255,255,255,1.00)',xw='max-width',i='none',lf='left',x51='panel2',x36='rgba(69,69,69,1.00)',x18='0px 0px',x16='392px',x26='panel1',bg='background-color',x41='31px',x17='auto',rbr='border-bottom-right-radius',x5='rgba(255,255,255,1)',tp='top',x21='128px',ta='text-align',ov='overflow',e10='${_Stage}',x6='stage',e27='${_Background}',x4='rgba(255,255,255,0.00)',c='color',e47='${_btnBase}',x31='rgba(0,0,0,0.39)',po='center',x55='panel3',rtl='border-top-left-radius',x53='118px',x28='@@0@@px @@1@@px',e52='${_myTextCopy2}',x='text',bc='border-color',e8='${_navigation}',x45='rgba(69,69,69,1)',m='rect',x14='0px',x32='pointer',h='height',x40='28.6%',x22='rgba(10,10,10,1.00)',x38='btnLabel',x37='600',e7='${_myText}',x35='rgba(229,233,233,0.00)',p='px',o='opacity',x34='custom-button',x48='rgba(0, 0, 0, 0.386719)',e44='${_btnLabel}',rbl='border-bottom-left-radius',qoc='easeOutCubic',e29='${symbolSelector}',x19='Background',e13='${_base}',e12='${_panel1}',s='style',l='normal',x3='2.0.0.250',fs='font-size',x33='33px',x23='200',x20='rgba(223,226,226,1.00)',rtr='border-top-right-radius',w='width',x1='source-sans-pro, sans-serif',x24='myText',mw='min-width',ql='linear',dt='Default Timeline',ff='font-family',x2='2.0.0',xc='rgba(0,0,0,1)';var im='images/';var s50="Second Panel<br>(more stuff goes here)",s39="1",s25="First Panel<br>(more stuff goes here)",s54="Third Panel<br>(more stuff goes here)";var fonts={};fonts[x1]='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'navigation',t:m,r:['0.2%','368px','95.3%','42px','auto','auto'],f:[x4],s:[1,"rgba(0, 0, 0, 0.386719)",i]},{id:'base',t:m,r:['2.3%','74px','95.3%','320px','auto','auto'],f:[x5],s:[0,"rgb(0, 0, 0)",i],c:[{id:'panel1',t:m,r:['0px','0px','117.2%','375px','auto','auto']}]}],sI:[{id:'panel1',sN:'panel1'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1497,a:y,tt:[]}}},"panel1":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:y,cn:{dom:[{r:[x14,x14,x15,x16,x17,x17],br:[x18,x18,x18,x18],id:x19,s:[0,xc,i],t:m,f:[x20]},{r:[x14,x21,x15,x17,x17,x17],n:[x1,30,x22,x23,i,l],align:po,id:x24,o:0.5,text:s25,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1600,a:y,tt:[]}}},"button":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,br:[x18,x18,x18,x18],id:x30,s:[1,x31,i],cu:[x32],r:[x14,x14,x33,x33,x17,x17],uc:x34,f:[x35],c:[{n:[x1,14,x36,x37,i,l],t:x,align:po,id:x38,text:s39,textShadow:[x9,0,1,0],r:[x14,x40,x41,x42,x17,x17]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"panel2":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:y,cn:{dom:[{r:[x14,x14,x15,x49,x17,x17],br:[x18,x18,x18,x18],id:x19,s:[0,xc,i],t:m,f:[x20]},{r:[x14,x21,x15,x17,x17,x17],n:[x1,30,x22,x23,i,l],align:po,id:x24,o:0.5,text:s50,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1600,a:y,tt:[]}}},"panel3":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:y,cn:{dom:[{r:[x14,x14,x15,x49,x17,x17],br:[x18,x18,x18,x18],id:x19,s:[0,xc,i],t:m,f:[x20]},{r:[x14,x53,x15,x17,x17,x17],n:[x1,30,x22,x23,i,l],align:po,id:x24,o:0.5,text:s54,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1600,a:y,tt:[]}}}};var S1=symbols[x6];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e7).P(ta,'');A1.A(e8).P(bg,x4,c).P(tp,368).P(h,42).P("border-style",i).P(lf,0.16,_,_,"%").P(w,95.31);A1.A(e10).P(bg,x9,c).P(mw,0).P(ov,x11).P(h,410).P(xw,1000).P(w,100,_,_,"%");A1.A(e12).P(tp,0).P(lf,0).P(h,375).T(1.08,375).P(w,100,_,_,"%").T(1.08,100);A1.A(e13).P(tp,0).T(0.824,0).P(h,336).T(0.824,336).P(o,0,_,_,"").T(0.497,1,1,ql).P(lf,0.09,_,_,"%").T(0.824,0.09).P(w,100).T(0.824,100);var S2=symbols[x26];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e27).P(bg,x20,c).P(rtl,[0,0],_,x28).P(rbr,[0,0],_,x28).P(lf,0).P(w,100,_,_,"%").P(tp,0,_,_,p).P(rbl,[0,0],_,x28).P(h,392).P(rtr,[0,0],_,x28);A2.A(e29).P(h,375).P(ov,x11).P(w,100,_,_,"%").P(xw,i);A2.A(e7).P(c,x22,c).P(lf,0).P(fs,30).P(tp,118).P(ta,po).P(ff,x1).P(w,100,_,_,"%").P("font-weight",200,_,_,"").P(o,0).T(0,1,1.6,qoc);var S3=symbols[x43];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e44).P("textShadow.blur",0,"subproperty").P("textShadow.offsetH",0,"subproperty").P(c,x45,c).P("textShadow.offsetV",1,"subproperty").P(lf,0).P(fs,14).P(tp,28.64,_,_,"%").P("textShadow.color",x46,"subproperty").P(h,22,_,_,p).P(ff,x1).P(w,31).P("font-weight",600,_,_,"");A3.A(e47).P(bg,x35,c).P(rtl,[0,0],_,x28).P(rbr,[0,0],_,x28).P("border-style",i).P("cursor",x32).P(w,33).P(tp,0).P(rbl,[0,0],_,x28).P("border-width",1).P(h,33).P(bc,x48,c).P(lf,0).P(rtr,[0,0],_,x28);A3.A(e29).P(h,33).P(w,33);var S4=symbols[x51];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e29).P(h,375).P(xw,i).P(w,100,_,_,"%").P(ov,x11);A4.A(e52).P(tp,128).P(fs,30).P("font-weight",200,_,_,"").P(o,0).P(c,x22,c).P(ff,x1).P(lf,0,_,_,p).P(w,100,_,_,"%");A4.A(e27).P(bg,x20,c).P(rtl,[0,0],_,x28).P(rbr,[0,0],_,x28).P(lf,0).P(w,100,_,_,"%").P(tp,0,_,_,p).P(rbl,[0,0],_,x28).P(h,375).P(rtr,[0,0],_,x28);A4.A(e7).P(c,x22,c).P(lf,0).P(fs,30).P(tp,118).P(ta,po).P(ff,x1).P("font-weight",200,_,_,"").P(w,100,_,_,"%").P(o,0,_,_,"").T(0,1,1.6,qoc);var S5=symbols[x55];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e27).P(bg,x20,c).P(rtl,[0,0],_,x28).P(rbr,[0,0],_,x28).P(lf,0).P(w,100,_,_,"%").P(tp,0,_,_,p).P(rbl,[0,0],_,x28).P(h,375).P(rtr,[0,0],_,x28);A5.A(e29).P(h,375).P(ov,x11).P(w,100,_,_,"%").P(xw,i);A5.A(e7).P(c,x22,c).P(lf,0).P(fs,30).P(tp,118).P(ta,po).P(ff,x1).P("font-weight",200,_,_,"").P(w,100,_,_,"%").P(o,0,_,_,"").T(0,1,1.6,qoc);AdobeEdge.alterRegisterCompositionDefn(compId, symbols, fonts, resources, Edge.registerCompositionDefn);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-260752881");