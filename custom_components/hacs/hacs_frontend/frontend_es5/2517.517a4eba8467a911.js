"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([["2517"],{59848:function(e,t,n){n.d(t,{q:()=>d});n("71695"),n("61893"),n("39527"),n("99790"),n("13334"),n("47021");var r=n("98637");n("52247"),n("92745"),n("11740");let i=function(e){return e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.LineFeed=10]="LineFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.DoubleQuote=34]="DoubleQuote",e[e.Hash=35]="Hash",e[e.DollarSign=36]="DollarSign",e[e.PercentSign=37]="PercentSign",e[e.Ampersand=38]="Ampersand",e[e.SingleQuote=39]="SingleQuote",e[e.OpenParen=40]="OpenParen",e[e.CloseParen=41]="CloseParen",e[e.Asterisk=42]="Asterisk",e[e.Plus=43]="Plus",e[e.Comma=44]="Comma",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Colon=58]="Colon",e[e.Semicolon=59]="Semicolon",e[e.LessThan=60]="LessThan",e[e.Equals=61]="Equals",e[e.GreaterThan=62]="GreaterThan",e[e.QuestionMark=63]="QuestionMark",e[e.AtSign=64]="AtSign",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OpenSquareBracket=91]="OpenSquareBracket",e[e.Backslash=92]="Backslash",e[e.CloseSquareBracket=93]="CloseSquareBracket",e[e.Caret=94]="Caret",e[e.Underline=95]="Underline",e[e.BackTick=96]="BackTick",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.OpenCurlyBrace=123]="OpenCurlyBrace",e[e.Pipe=124]="Pipe",e[e.CloseCurlyBrace=125]="CloseCurlyBrace",e[e.Tilde=126]="Tilde",e}({});const a=128;function o(){const e=[],t=[];for(let n=0;n<=a;n++)t[n]=0;for(let n=0;n<=a;n++)e.push(t.slice(0));return e}function s(e,t){if(t<0||t>=e.length)return!1;const n=e.codePointAt(t);switch(n){case i.Underline:case i.Dash:case i.Period:case i.Space:case i.Slash:case i.Backslash:case i.SingleQuote:case i.DoubleQuote:case i.Colon:case i.DollarSign:case i.LessThan:case i.OpenParen:case i.OpenSquareBracket:return!0;case void 0:return!1;default:return(r=n)>=127462&&r<=127487||8986===r||8987===r||9200===r||9203===r||r>=9728&&r<=10175||11088===r||11093===r||r>=127744&&r<=128591||r>=128640&&r<=128764||r>=128992&&r<=129003||r>=129280&&r<=129535||r>=129648&&r<=129750?!0:!1}var r}function c(e,t){if(t<0||t>=e.length)return!1;switch(e.charCodeAt(t)){case i.Space:case i.Tab:return!0;default:return!1}}function l(e,t,n){return t[e]!==n[e]}var u=function(e){return e[e.Diag=1]="Diag",e[e.Left=2]="Left",e[e.LeftLeft=3]="LeftLeft",e}(u||{});function f(e,t,n,r,i,o,s){const c=e.length>a?a:e.length,f=r.length>a?a:r.length;if(n>=c||o>=f||c-n>f-o)return;if(!function(e,t,n,r,i,a,o=!1){for(;t<n&&i<a;)e[t]===r[i]&&(o&&(h[t]=i),t+=1),i+=1;return t===n}(t,n,c,i,o,f,!0))return;let C;!function(e,t,n,r,i,a){let o=e-1,s=t-1;for(;o>=n&&s>=r;)i[o]===a[s]&&(D[o]=s,o--),s--}(c,f,n,o,t,i);let d,L,N=1;const T=[!1];for(C=1,d=n;d<c;C++,d++){const a=h[d],s=D[d],l=d+1<c?D[d+1]:f;for(N=a-o+1,L=a;L<l;N++,L++){let c=Number.MIN_SAFE_INTEGER,l=!1;L<=s&&(c=g(e,t,d,n,r,i,L,f,o,0===S[C-1][N-1],T));let h=0;c!==Number.MAX_SAFE_INTEGER&&(l=!0,h=c+p[C-1][N-1]);const D=L>a,E=D?p[C][N-1]+(S[C][N-1]>0?-5:0):0,m=L>a+1&&S[C][N-1]>0,B=m?p[C][N-2]+(S[C][N-2]>0?-5:0):0;if(m&&(!D||B>=E)&&(!l||B>=h))p[C][N]=B,k[C][N]=u.LeftLeft,S[C][N]=0;else if(D&&(!l||E>=h))p[C][N]=E,k[C][N]=u.Left,S[C][N]=0;else{if(!l)throw new Error("not possible");p[C][N]=h,k[C][N]=u.Diag,S[C][N]=S[C-1][N-1]+1}}}if(!T[0]&&!s)return;C--,N--;const E=[p[C][N],o];let m=0,B=0;for(;C>=1;){let e=N;do{const t=k[C][e];if(t===u.LeftLeft)e-=2;else{if(t!==u.Left)break;e-=1}}while(e>=1);m>1&&t[n+C-1]===i[o+N-1]&&!l(e+o-1,r,i)&&m+1>S[C][e]&&(e=N),e===N?m++:m=1,B||(B=e),C--,N=e-1,E.push(N)}f===c&&(E[0]+=2);const b=B-c;return E[0]-=b,E}function g(e,t,n,r,i,a,o,u,f,g,h){if(t[n]!==a[o])return Number.MIN_SAFE_INTEGER;let D=1,S=!1;return o===n-r?D=e[n]===i[o]?7:5:!l(o,i,a)||0!==o&&l(o-1,i,a)?!s(a,o)||0!==o&&s(a,o-1)?(s(a,o-1)||c(a,o-1))&&(D=5,S=!0):D=5:(D=e[n]===i[o]?7:5,S=!0),D>1&&n===r&&(h[0]=!0),S||(S=l(o,i,a)||s(a,o-1)||c(a,o-1)),n===r?o>f&&(D-=S?3:5):D+=g?S?2:0:S?0:1,o+1===u&&(D-=S?3:5),D}const h=C(256),D=C(256),S=o(),p=o(),k=o();function C(e){const t=[];for(let n=0;n<=e;n++)t[n]=0;return t}const d=(e,t)=>t.map((t=>(t.score=((e,t)=>{let n=Number.NEGATIVE_INFINITY;for(const i of t.strings){const t=f(e,(0,r._)(e.toLowerCase()),0,i,(0,r._)(i.toLowerCase()),0,!0);if(!t)continue;const a=0===t[0]?1:t[0];a>n&&(n=a)}if(n!==Number.NEGATIVE_INFINITY)return n})(e,t),t))).filter((e=>void 0!==e.score)).sort((({score:e=0},{score:t=0})=>e>t?-1:e<t?1:0))},98637:function(e,t,n){n.d(t,{_:function(){return r}});n(19134),n(97003);const r=e=>e.normalize("NFD").replace(/[\u0300-\u036F]/g,"")}}]);
//# sourceMappingURL=2517.517a4eba8467a911.js.map