(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[394],{578:function(e,n){!function(e){function n(e,n,t){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:n,alias:t}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(t){var a=e.languages[t],i="language-"+t;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:n("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:n("=",a,i),"class-feature":n("\\+",a,i),standard:n("",a,i)}}}}})}(Prism)}}]);
//# sourceMappingURL=394.0ec9afc6.chunk.js.map