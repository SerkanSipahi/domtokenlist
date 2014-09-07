!function(a){"use strict";if(!("DOMTokenList"in a)){var b=function(a,b){var c;for(c=0;c<a.length;c++)if(a[c]===b)return c;return-1},c=function(a){return[].slice.call(a)},d=function(a){var b=/[\u0009\u000A\u000C\u000D\u0020]/;if(""===a||b.test(a))throw new Error("Token must not be empty or contain whitespace.")},e=function(a,b){var c,d=[];if(a&&b)for(this.element=a,this.attribute=b,d=this.element.getAttribute(this.attribute).replace(/^\s+|\s+$/g,"").split(/\s+/),c=0;c<d.length;c++)this[c]=d[c];this.length=d.length};e.prototype.add=function(){var a,b=c(arguments);for(a=0;a<b.length;a++)d(b[a]),this.contains(b[a])||([].push.call(this,b[a]),this.length=c(this).length);this.element&&this.element.setAttribute(this.attribute,this.toString())},e.prototype.contains=function(a){return d(a),-1!==b(this,a)},e.prototype.item=function(a){return this[a]||null},e.prototype.remove=function(){var a,e,f=c(arguments);for(a=0;a<f.length;a++)d(f[a]),e=b(this,f[a]),-1!==e&&([].splice.call(this,e,1),this.length=c(this).length);this.element&&this.element.setAttribute(this.attribute,this.toString())},e.prototype.toggle=function(a,b){return d(a),this.contains(a)||b!==!1?this.contains(a)?b?!0:(this.remove(a),!1):(this.add(a),!0):!1},e.prototype.toString=function(){return[].join.call(this," ")},a.DOMTokenList=e}}(window),function(){"use strict";"classList"in document.createElement("a")||Object.defineProperty(Element.prototype,"classList",{get:function(){return new DOMTokenList(this,"class")}})}(),function(){"use strict";"relList"in document.createElement("a")||Object.defineProperty(Element.prototype,"relList",{get:function(){return new DOMTokenList(this,"rel")}})}();