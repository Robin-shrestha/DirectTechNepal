(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[367],{551:function(n,a){!function(n){var a=["([\"'])(?:\\\\[^]|\\$\\([^)]+\\)|`[^`]+`|(?!\\1)[^\\\\])*\\1","<<-?\\s*(\\w+?)[ \t]*(?!.)[^]*?[\r\n]\\2","<<-?\\s*([\"'])(\\w+)\\3[ \t]*(?!.)[^]*?[\r\n]\\4"].join("|");n.languages["shell-session"]={info:{pattern:/^[^\r\n$#*!]+(?=[$#])/m,alias:"punctuation",inside:{path:{pattern:/(:)[\s\S]+/,lookbehind:!0},user:/^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?=:|$)/,punctuation:/:/}},command:{pattern:RegExp("[$#](?:[^\\\\\r\n'\"<]|\\\\.|<<str>>)+".replace(/<<str>>/g,(function(){return a}))),greedy:!0,inside:{bash:{pattern:/(^[$#]\s*)[\s\S]+/,lookbehind:!0,alias:"language-bash",inside:n.languages.bash},"shell-symbol":{pattern:/^[$#]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/}}(Prism)}}]);
//# sourceMappingURL=367.1ebeb403.chunk.js.map