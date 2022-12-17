DISQUS.addBlocks("theme")(function(e){e.blocks.discoveryMain=function(l,i){var b=new e.Builder,h=DISQUS.extend({},l,i);with(h)return b.put('<div id="'),b.put((b.esc||function(b){return b})(id)),b.put('" class="discovery-main">    <div id="discovery-note" style="display:none;">        <div class="alert">        <a href="#" class="close" data-action="discovery-help-close" title="'),b.put(gettext("Close this box")),b.put('">\u00d7</a>        '),b.put(e.interpolate(gettext("Disqus helps you find new and interesting content, discussions and products. Some sponsors and ecommerce sites may pay us for these recommendations and links. %(learnMore)s or %(feedback)s."),
{learnMore:e.renderBlock("learnMore"),feedback:e.renderBlock("feedback")})),b.put("        </div>    </div>    "),e.each(sections,function(a){b.put('    <section id="');b.put((b.esc||function(b){return b})(a.id));b.put('" class="');b.put((b.esc||function(b){return b})(a.className));b.put('">        <header class="discovery-col-header">            ');a===sections[sections.length-1]&&(b.put("            "),b.put('            <div class="discovery-options">                <span class="publisher-anchor-color"><a href="#" class="discovery-help" data-action="discovery-help">'),
b.put(gettext("What's this?")),b.put("</a></span>            </div>            "));b.put("            ");a.type==="organic"?(b.put("            <h2>"),b.put(e.interpolate(gettext("Also on %(forumName)s"),{forumName:e.renderBlock("forumName",forum)})),b.put("</h2>            ")):a.type==="promoted"&&(b.put("            <h2>"),b.put(gettext("Around The Web")),b.put("</h2>            "));b.put('        </header>        <ul class="discovery-posts">        </ul>    </section>    ')}),b.put("</div>"),b.compile()};
e.blocks.discoveryCollection=function(l,i){var b=new e.Builder,h=DISQUS.extend({},l,i);with(h)return b.put("    "),e.each(collection,function(a,k){var f={thread:a,index:k};b.put('    <li class="discovery-post" id="discovery-link-');a.id?(b.put("o"),b.put((b.esc||function(b){return b})(a.id))):(b.put("p"),b.put((b.esc||function(b){return b})(a.body_id)));b.put('">        <header class="discovery-post-header">            <h3 title="');b.put((b.esc||function(b){return b})(a.title));b.put('">                <a ');
(function(){var a={};e.extend(a,f);e.extend(a,{});b.put(e.renderBlock("linkAttributes",a))})();b.put(' data-role="discovery-thread-title" class="title publisher-anchor-color line-truncate" data-line-truncate="2">                    ');b.put(a.title);b.put("                </a>                ");variant.inlineMeta&&(b.put("                    "),a.posts>0?(b.put('                    <span class="inline-meta">                        '),function(){var d={};e.extend(d,f);e.extend(d,{thread:a});b.put(e.renderBlock("discoveryPostCount",
d))}(),b.put("                    </span>                    ")):a.createdAgo&&(b.put('                    <span class="inline-meta">'),b.put((b.esc||function(b){return b})(a.createdAgo)),b.put("</span>                    ")),b.put("                    "),a.brand&&(b.put('                    <span class="inline-meta">                        '),b.put((b.esc||function(b){return b})(a.brand)),b.put("                    </span>                    ")),b.put("                "));b.put("            </h3>            ");
variant.inlineMeta||(b.put('            <ul class="meta">                '),a.posts>0&&(b.put('                <li class="comments">                    '),function(){var d={};e.extend(d,f);e.extend(d,{thread:a});b.put(e.renderBlock("discoveryPostCount",d))}(),b.put("                </li>                ")),b.put("                "),a.createdAgo&&(b.put('                <li class="time">'),b.put((b.esc||function(b){return b})(a.createdAgo)),b.put("</li>                ")),b.put("            </ul>            "));
b.put("        </header>        ");variant.contentPreviews&&a.preview&&(b.put("            "),function(){var d={};e.extend(d,f);e.extend(d,{post:a.preview});b.put(e.renderBlock("discoveryContentPreview",d))}(),b.put("        "));b.put("    </li>    ")}),b.compile()};e.blocks.discoveryPostCount=function(l,i){var b=new e.Builder,h=DISQUS.extend({},l,i);with(h)return b.put("    "),thread.posts===1?(b.put("        "),b.put(gettext("1 comment"))):(b.put("        "),b.put(e.interpolate(gettext("%(numPosts)s comments"),
{numPosts:thread.posts}))),b.put("    "),b.compile()};e.blocks.linkAttributes=function(l,i){var b=new e.Builder,h=DISQUS.extend({},l,i);with(h)return b.put('href="'),b.put((b.esc||function(b){return b})(thread.redirectUrl)),b.put('" '),thread.hasOwnProperty("brand")&&b.put('target="_blank" rel="nofollow"'),b.compile()};e.blocks.learnMore=function(l,i){var b=new e.Builder,h=DISQUS.extend({},l,i);with(h)return b.put('<a href="http://help.disqus.com/customer/portal/articles/666278-introducing-promoted-discovery-and-f-a-q-"   target="_blank">'),
b.put(gettext("Learn more")),b.put("</a>"),b.compile()};e.blocks.discoveryContentPreview=function(l,i){var b=new e.Builder,h=DISQUS.extend({},l,i);with(h)return b.put("<a "),function(){var a={};e.extend(a,i);e.extend(a,{});b.put(e.renderBlock("linkAttributes",a))}(),b.put(' class="top-comment" data-role="discovery-top-comment">    <img src="'),b.put((b.esc||function(b){return b})(post.author.avatar.cache)),b.put('" alt="'),b.put(gettext("Avatar")),b.put('" data-role="discovery-avatar">    <p><span class="user" data-role="discovery-top-comment-author">'),
b.put((b.esc||function(b){return b})(post.author.name)),b.put('</span> &#8212; <span data-role="discovery-top-comment-snippet" class="line-truncate" data-line-truncate="3">'),b.put((b.esc||function(b){return b})(post.plaintext)),b.put("</span></p></a>"),b.compile()};e.blocks.forumName=function(l,i){var b=new e.Builder,h=DISQUS.extend({},l,i);with(h)return b.put("<strong>"),b.put((b.esc||function(b){return b})(name)),b.put("</strong>"),b.compile()};e.blocks.feedback=function(l,i){var b=new e.Builder,
h=DISQUS.extend({},l,i);with(h)return b.put('<a href="https://www.surveymonkey.com/s/GHK872T" target="_blank">    '),b.put(gettext("give us feedback")),b.put("</a>"),b.compile()}});
(function(){var e=Handlebars.template;(Handlebars.discovery=Handlebars.discovery||{}).templates=e(function(e,i,b,h,a){function k(a,k,x){var c="",g;c+='\n        <section id="';(g=b.id)?g=g.call(a,{hash:{},data:k}):(g=a.id,g=typeof g===q?g.apply(a):g);c+=o(g)+'" class="';(g=b.className)?g=g.call(a,{hash:{},data:k}):(g=a.className,g=typeof g===q?g.apply(a):g);c+=o(g)+'">\n            <header class="discovery-col-header">\n\n                ';if((g=b["if"].call(a,k.index===k.length-1,{hash:{},inverse:j.noop,
fn:j.program(3,f,k),data:k}))||g===0)c+=g;c+="\n\n                ";if((g=b["if"].call(a,a.type==="organic",{hash:{},inverse:j.noop,fn:j.programWithDepth(d,k,x),data:k}))||g===0)c+=g;c+="\n                ";if((g=b["if"].call(a,a.type==="promoted",{hash:{},inverse:j.noop,fn:j.program(7,v,k),data:k}))||g===0)c+=g;c+='\n\n            </header>\n            <ul class="discovery-posts">\n            </ul>\n        </section>\n    ';return c}function f(a,f){var g="";g+='\n                    \n                    <div class="discovery-options">\n                        <span class="publisher-anchor-color"><a href="#" class="discovery-help" data-action="discovery-help">'+
o(b.t.call(a,gettext("What's this?"),{hash:{},data:f}))+"</a></span>\n                    </div>\n                ";return g}function d(a,f,g){var c="";c+="\n                    <h2>"+o(b.t.call(a,gettext("Also on %(forumName)s"),{hash:{forumName:{partial:"forumName",context:g.forum,executePartial:!0}},data:f}))+"</h2>\n                ";return c}function v(a,f){var g="";g+="\n                    <h2>"+o(b.t.call(a,gettext("Around The Web"),{hash:{},data:f}))+"</h2>\n                ";return g}function g(a,
f,g){var c="",d,k;c+='\n        <li class="discovery-post" id="discovery-link-';if((d=b["if"].call(a,a.id,{hash:{},inverse:j.program(19,y,f),fn:j.program(17,m,f),data:f}))||d===0)c+=d;c+='">\n            <header class="discovery-post-header">\n                <h3 title="';(d=b.title)?d=d.call(a,{hash:{},data:f}):(d=a.title,d=typeof d===q?d.apply(a):d);c+=o(d)+'">\n                    <a ';if((d=j.invokePartial(h.linkAttributes,"linkAttributes",a,b,h,f))||d===0)c+=d;c+=' data-role="discovery-thread-title" class="title publisher-anchor-color line-truncate" data-line-truncate="2">\n                        '+
o(b.html.call(a,a.title,{hash:{},data:f}))+"\n                    </a>\n\n                    ";if((k=b["if"].call(a,(d=g.variant,d==null||d===!1?d:d.inlineMeta),{hash:{},inverse:j.noop,fn:j.program(21,z,f),data:f}))||k===0)c+=k;c+="\n\n                </h3>\n\n                ";if((k=b.unless.call(a,(d=g.variant,d==null||d===!1?d:d.inlineMeta),{hash:{},inverse:j.noop,fn:j.program(29,t,f),data:f}))||k===0)c+=k;c+="\n\n            </header>\n\n            ";if((k=b["if"].call(a,(d=g.variant,d==null||
d===!1?d:d.contentPreviews)&&a.preview,{hash:{},inverse:j.noop,fn:j.program(34,A,f),data:f}))||k===0)c+=k;c+="\n\n        </li>\n    ";return c}function m(a,f){var d="",c;d+="o";(c=b.id)?c=c.call(a,{hash:{},data:f}):(c=a.id,c=typeof c===q?c.apply(a):c);d+=o(c);return d}function y(a,f){var d="",c;d+="p";(c=b.body_id)?c=c.call(a,{hash:{},data:f}):(c=a.body_id,c=typeof c===q?c.apply(a):c);d+=o(c);return d}function z(a,f){var d="",c;d+="\n                        ";if((c=b["if"].call(a,a.posts>0,{hash:{},
inverse:j.program(24,n,f),fn:j.program(22,u,f),data:f}))||c===0)d+=c;d+="\n                        ";if((c=b["if"].call(a,a.brand,{hash:{},inverse:j.noop,fn:j.program(27,s,f),data:f}))||c===0)d+=c;d+="\n                    ";return d}function u(a,f){var d="",c;d+='\n                            <span class="inline-meta">\n                                ';if((c=j.invokePartial(h.discoveryPostCount,"discoveryPostCount",a,b,h,f))||c===0)d+=c;d+="\n                            </span>\n                        ";
return d}function n(a,f){var d="",c;d+="\n                            ";if((c=b["if"].call(a,a.createdAgo,{hash:{},inverse:j.noop,fn:j.program(25,r,f),data:f}))||c===0)d+=c;d+="\n                        ";return d}function r(a,f){var d="",c;d+='\n                                <span class="inline-meta">';(c=b.createdAgo)?c=c.call(a,{hash:{},data:f}):(c=a.createdAgo,c=typeof c===q?c.apply(a):c);d+=o(c)+"</span>\n                            ";return d}function s(a,f){var d="",c;d+='\n                            <span class="inline-meta">\n                                ';
(c=b.brand)?c=c.call(a,{hash:{},data:f}):(c=a.brand,c=typeof c===q?c.apply(a):c);d+=o(c)+"\n                            </span>\n                        ";return d}function t(a,f){var d="",c;d+='\n                    <ul class="meta">\n                        ';if((c=b["if"].call(a,a.posts>0,{hash:{},inverse:j.noop,fn:j.program(30,w,f),data:f}))||c===0)d+=c;d+="\n                        ";if((c=b["if"].call(a,a.createdAgo,{hash:{},inverse:j.noop,fn:j.program(32,B,f),data:f}))||c===0)d+=c;d+="\n                    </ul>\n                ";
return d}function w(a,f){var d="",c;d+='\n                            <li class="comments">\n                                ';if((c=j.invokePartial(h.discoveryPostCount,"discoveryPostCount",a,b,h,f))||c===0)d+=c;d+="\n                            </li>\n                        ";return d}function B(a,d){var f="",c;f+='\n                            <li class="time">';(c=b.createdAgo)?c=c.call(a,{hash:{},data:d}):(c=a.createdAgo,c=typeof c===q?c.apply(a):c);f+=o(c)+"</li>\n                        ";
return f}function A(a,d){var f="",c;f+="\n                ";if((c=j.invokePartial(h.discoveryContentPreview,"discoveryContentPreview",a,b,h,d))||c===0)f+=c;f+="\n            ";return f}function C(){return'target="_blank" rel="nofollow"'}function D(a,f){var d="";d+="\n        "+o(b.t.call(a,gettext("1 comment"),{hash:{},data:f}))+"\n    ";return d}function E(a,f){var d="";d+="\n        "+o(b.t.call(a,gettext("%(numPosts)s comments"),{hash:{numPosts:a.posts},data:f}))+"\n    ";return d}this.compilerInfo=
[2,">= 1.0.0-rc.3"];var b=b||e.helpers,h=h||e.partials,a=a||{},e="",p,o=this.escapeExpression,q="function",j=this;if((p=b.partial.call(i,"discoveryMain",{hash:{},inverse:j.noop,fn:j.programWithDepth(function(a,f,d){var c="",g;c+='\n<div id="';(g=b.id)?g=g.call(a,{hash:{},data:f}):(g=a.id,g=typeof g===q?g.apply(a):g);c+=o(g)+'" class="discovery-main">\n    <div id="discovery-note" style="display:none;">\n        <div class="alert">\n        <a href="#" class="close" data-action="discovery-help-close" title="'+
o(b.t.call(a,gettext("Close this box"),{hash:{},data:f}))+'">\u00d7</a>\n        '+o(b.t.call(a,gettext("Disqus helps you find new and interesting content, discussions and products. Some sponsors and ecommerce sites may pay us for these recommendations and links. %(learnMore)s or %(feedback)s."),{hash:{learnMore:{partial:"learnMore",context:d,executePartial:!0},feedback:{partial:"feedback",context:d,executePartial:!0}},data:f}))+"\n        </div>\n    </div>\n\n    ";if((g=b.each.call(a,a.sections,
{hash:{},inverse:j.noop,fn:j.programWithDepth(k,f,a),data:f}))||g===0)c+=g;c+="\n\n</div>\n";return c},a,i),data:a}))||p===0)e+=p;e+="\n\n";if((p=b.partial.call(i,"learnMore",{hash:{},inverse:j.noop,fn:j.program(9,function(a,f){var d="";d+='\n    <a href="http://help.disqus.com/customer/portal/articles/666278-introducing-promoted-discovery-and-f-a-q-"\n        target="_blank">'+o(b.t.call(a,gettext("Learn more"),{hash:{},data:f}))+"</a>\n";return d},a),data:a}))||p===0)e+=p;e+="\n\n";if((p=b.partial.call(i,
"feedback",{hash:{},inverse:j.noop,fn:j.program(11,function(a,f){var d="";d+='\n    <a href="https://www.surveymonkey.com/s/GHK872T" target="_blank">\n        '+o(b.t.call(a,gettext("give us feedback"),{hash:{},data:f}))+"</a>\n";return d},a),data:a}))||p===0)e+=p;e+="\n\n";if((p=b.partial.call(i,"forumName",{hash:{},inverse:j.noop,fn:j.program(13,function(a,f){var d="",c;d+="\n    <strong>";(c=b.name)?c=c.call(a,{hash:{},data:f}):(c=a.name,c=typeof c===q?c.apply(a):c);d+=o(c)+"</strong>\n";return d},
a),data:a}))||p===0)e+=p;e+="\n\n";if((p=b.partial.call(i,"discoveryCollection",{hash:{},inverse:j.noop,fn:j.program(15,function(a,d){var f="",c;f+="\n    ";if((c=b.each.call(a,a.collection,{hash:{},inverse:j.noop,fn:j.programWithDepth(g,d,a),data:d}))||c===0)f+=c;f+="\n";return f},a),data:a}))||p===0)e+=p;e+="\n\n";if((p=b.partial.call(i,"linkAttributes",{hash:{},inverse:j.noop,fn:j.program(36,function(a,f){var d="",c;d+='\n    href="';(c=b.redirectUrl)?c=c.call(a,{hash:{},data:f}):(c=a.redirectUrl,
c=typeof c===q?c.apply(a):c);d+=o(c)+'" ';if((c=b["if"].call(a,a.brand,{hash:{},inverse:j.noop,fn:j.program(37,C,f),data:f}))||c===0)d+=c;d+="\n";return d},a),data:a}))||p===0)e+=p;e+="\n\n";if((p=b.partial.call(i,"discoveryContentPreview",{hash:{},inverse:j.noop,fn:j.program(39,function(a,d){var F;var x;var l;var f="",c;f+="\n    <a ";if((c=j.invokePartial(h.linkAttributes,"linkAttributes",a,b,h,d))||c===0)f+=c;f+=' class="top-comment" data-role="discovery-top-comment">\n        <img src="'+o((x=
(l=(c=(c=a.preview,c==null||c===!1?c:c.author),c==null||c===!1?c:c.avatar),c=l,c==null||c===!1?c:c.cache),c=x,typeof c===q?c.apply(a):c))+'" alt="'+o(b.t.call(a,gettext("Avatar"),{hash:{},data:d}))+'" data-role="discovery-avatar">\n        <p><span class="user" data-role="discovery-top-comment-author">'+o((F=(c=(c=a.preview,c==null||c===!1?c:c.author),c==null||c===!1?c:c.name),c=F,typeof c===q?c.apply(a):c))+'</span> &#8212; <span data-role="discovery-top-comment-snippet" class="line-truncate" data-line-truncate="3">'+
o((c=(c=a.preview,c==null||c===!1?c:c.plaintext),typeof c===q?c.apply(a):c))+"</span></p>\n    </a>\n";return f},a),data:a}))||p===0)e+=p;e+="\n\n";if((p=b.partial.call(i,"discoveryPostCount",{hash:{},inverse:j.noop,fn:j.program(41,function(a,f){var d="",c;d+="\n    ";if((c=b["if"].call(a,a.posts===1,{hash:{},inverse:j.program(44,E,f),fn:j.program(42,D,f),data:f}))||c===0)d+=c;d+="\n";return d},a),data:a}))||p===0)e+=p;e+="\n";return e})})();
DISQUS.define("discovery.collections",function(){var e={},l=DISQUS.testing,i=DISQUS.JSON,b=_.strip,h=DISQUS.use("discovery.helpers"),a=DISQUS.use("discovery.models"),k=Backbone.Collection.extend({url:function(a){return DISQUS.api.getURL(a)},fetch:function(a){a=a||{};a.reset=!0;return Backbone.Collection.prototype.fetch.call(this,a)},parse:function(a){return a.response}});e.PostCollection=function(a){var f=a.prototype;return a.extend({url:function(){return f.url.call(this,"discovery/listTopPost.json")},
parse:function(a){for(var a=f.parse.call(this,a),d=0,k=a.length;d<k;d++)a[d].plaintext=b(a[d].message);return a}})}(k);var f=function(f){var b=f.prototype;return f.extend({initialize:function(f,b){this.model=a[this.modelName];this.sourceThread=b.sourceThread;this.modelAttributes=b.modelAttributes;this.getBanditJSON=_.memoize(this.getBanditJSON)},fetch:function(a){a=a||{};a.data=a.data||{};a.data.thread=this.sourceThread.id;return b.fetch.call(this,a)},parse:function(a){a=b.parse.call(this,a);if("bandit"in
a)this.bandit=a.bandit,a=a.results;if(!_.isArray(a))return[];for(var f=0,d=a.length;f<d;f++)_.extend(a[f],this.modelAttributes);return a},getBanditJSON:function(){return i.stringify(this.bandit)}})}(k);e.RelatedThreadCollection=function(a){var f=a.prototype;return a.extend({modelName:"RelatedThread",url:function(){return f.url.call(this,"discovery/listRelated.json")},parse:function(a){return this.rejectInvalid(f.parse.call(this,a))},rejectInvalid:function(a){var f=[],b,d=this.sourceThread;if(DISQUS.debug)return a.slice();
for(var k=0,e=a.length;k<e;k++)b=a[k],b.id==d.id||b.link==d.link?this.reportInvalid(b,"Link or id of related thread points back to thread on this page (circular reference)"):b.title.search(/^https?:\/\//)===0?this.reportInvalid(b,"Title looks like a url (begins with http:// or https://)"):f.push(b);return f},reportInvalid:function(a,f){var b=h.log;b("An organic link failed validation:",a.title,a.link,"(id =",a.id+")");b("Reason:",f)}})}(f);e.AdvertisementCollection=function(a){var f=a.prototype;return a.extend({modelName:"Advertisement",
url:function(){return f.url.call(this,"discovery/listPromoted.json")}})}(f);if(l)e.BaseCollection=k,e.BaseContentCollection=f;return e});
DISQUS.define("discovery.helpers",function(e,l){var i={},b=!1,h=!1;i.config=function(a){b=!!a.lineTruncationEnabled;h=!!a.consoleLoggingEnabled};i.isMobile=function(){return DISQUS.browser.mobile};var a=function(){};e.console&&(a=function(){if(h){var a=_.toArray(arguments);a.unshift("[Discovery]");e.console.log.apply?e.console.log.apply(e.console,a):e.console.log(a.join(" "))}});i.log=a;i.allowLog=function(a){if(a===l)return h;h=!!a};i.allowLineTruncate=function(a){if(a===l)return b;b=!!a};i.lineTruncate=
function(a,f){function d(){return h.scrollHeight-h.offsetHeight>0.2*i}function v(){m.lastChild&&!_.contains(["...","\u2026"],m.lastChild.nodeValue)&&(n=m.appendChild(e.document.createTextNode(" "+u)),d()&&(m.removeChild(n),m.removeChild(m.lastChild),v()))}if(b){var g=DISQUS.logError||function(){};if(!a.closest("body").length)return void g("lineTruncate called on el not on DOM");if(a.text().length<1)return void g("lineTruncated called on empty el");if(_.any(a.children(),function(a){return a.nodeType!==
3}))return void g("lineTruncate called on non-flat el");var m=a[0],h=m;if(a.css("display")!=="block")for(;h.parentNode;)if(h=h.parentNode,$(h).css("display")==="block")break;var i=parseFloat(a.css("font-size"),10);if(d()){var f=f||{},g=f.lines||1,u=f.ellipsis,n,l=a.text();if(l.length){var s=a.width()/i,g=parseInt(s*g,10),l=l.split(/\s/),s=0;a.empty();for(var t=0,w=l.length;t<w;t++){s+=l[t].length+1;if(s>=g)break;m.appendChild(document.createTextNode(" "+l[t]))}if(d()){do n=m.removeChild(m.lastChild);
while(d())}else{do n=m.appendChild(document.createTextNode(" "+l[t++]));while(!d()&&t<w);m.removeChild(n)}u&&(_.isString(u)||(u="\u2026"),v())}}}};i.balancedPartition=function(a){var f=_.keys(a),b=Math.floor(_.reduce(a,function(a,b){return a+b},0)/2),e=f.length+1;b+=1;var g=Array(e),m,h;for(m=0;m<e;m++)g[m]=Array(b),g[m][0]={};for(h=1;h<b;h++)g[0][h]=!1;var i,l,n,r={};for(h=1;h<b;h++)for(m=1;m<e;m++){i=f[m-1];l=a[i];n=_.clone(g[m-1][h]);if(!n&&l<=h&&(n=_.clone(g[m-1][h-l])))n[i]=l,r=n;g[m][h]=n}return[r,
_.omit(a,_.keys(r))]};return i});
DISQUS.define("discovery.models",function(){var e={},l=DISQUS.ISO_8601,i=function(b){var e=b.prototype;return b.extend({defaults:{redirectUrl:null,signedUrl:null,userId:null,sourceThreadId:null,forumId:null,forum:null,majorVersion:null,variant:null,isExperiment:!1},redirectPayload:function(){var a={url:this.get("signedUrl"),imp:DISQUS.juggler.impId,forum_id:this.get("forumId"),forum:this.get("forum"),thread_id:this.get("sourceThreadId"),major_version:this.get("majorVersion")};if(this.get("isExperiment"))a.variant=
this.get("variant");if(this.has("userId"))a.user_id=this.get("userId");if(this.collection&&this.collection.bandit)a.bandit=this.collection.getBanditJSON();return a},redirectUrl:function(){var a=this.get("redirectUrl"),b=this.redirectPayload();return DISQUS.serialize(a,b)},toJSON:function(){var a=e.toJSON.call(this);a.redirectUrl=this.redirectUrl();return a},toString:function(){return this.get("title")+" "+this.get("link")+" (id = "+this.id+")"}})}(Backbone.Model);e.RelatedThread=function(b){var e=
b.prototype;return b.extend({defaults:_.defaults({createdAgo:!1},e.defaults),initialize:function(){if(this.get("createdAgo")){var a;a=this.get("createdAt");a=a.indexOf("+")>=0?a:a+"+00:00";a=moment(a,l);this.set("createdAgo",a.fromNow())}},redirectPayload:function(){var a=e.redirectPayload.call(this);_.extend(a,{thread:this.id,zone:"internal_discovery"});return a},toJSON:function(){var a=e.toJSON.call(this);if(a.preview)a.preview=a.preview.toJSON();return a},toString:function(){return"organic link: "+
e.toString.call(this)}})}(i);e.Advertisement=function(b){var e=b.prototype;return b.extend({idAttribute:"body_id",defaults:_.defaults({brand:"",headline:"",text:"",url:"",advertisement_id:0,body_id:0,mobile:!0},e.defaults),get:function(a){if(a==="title")return this.attributes.headline;if(a==="link")return this.attributes.url;return e.get.call(this,a)},redirectPayload:function(){var a=e.redirectPayload.call(this);_.extend(a,{zone:"promoted_discovery",advertisement_id:this.get("advertisement_id"),body_id:this.get("body_id")});
return a},toJSON:function(){var a=e.toJSON.call(this);a.title=a.headline;a.link=a.url;return a},toString:function(){return"promoted link: "+e.toString.call(this)}})}(i);if(DISQUS.testing)e.BaseContentModel=i;return e});
DISQUS.define("discovery",function(){var e={},l=DISQUS.use("discovery.collections"),i=DISQUS.use("discovery.views"),b=DISQUS.use("discovery.helpers");e.init=function(a){var e=_.object(_.map(["lineTruncationEnabled","consoleLoggingEnabled"],function(b){return b in a?[b,a[b]]:[b,h.prototype.defaults[b]]}));b.config(e);return new h(a)};var h=e.DiscoveryApp=Backbone.Model.extend({defaults:{name:"default",inlineMeta:!1,contentPreviews:!0,promotedEnabled:!1,topPlacementEnabled:!1,isExperiment:!1,redirectUrl:"//redirect.disqus.com/url",
listRelatedLimit:null,listPromotedLimit:null,httpTimeout:1E4,sourceThread:null,sourceForum:null,help:!1,display:!1,columnEveningEnabled:!0,numColumns:2,minPerColumn:1,maxPerColumn:2,toleranceCoefficient:1.2,minWidthForColumnLayout:440,containerId:"discovery",topPlacementContainerId:"discovery-top",innerContainerName:"discovery-main",sectionNames:["col-organic","col-promoted"],collectionTagName:"ul",collectionClassName:"discovery-posts",consoleLoggingEnabled:DISQUS.debug,lineTruncationEnabled:!0,session:null,
js:null,css:null},initialize:function(){var a=this;a.createDataReferences();a.set("innerContainerId",a.get("innerContainerName")+"-"+a.cid);a.set("sectionIds",_.map(a.get("sectionNames"),function(b){return b+"-"+a.cid}));var b=a.get("session");a.get("topPlacementEnabled")&&b.isAnonymous()&&a.set("containerId",a.get("topPlacementContainerId"));a.on("change:display",function d(){a.off("change:display",d);a.onComplete()});_.bindAll(a,"getContentPreviews","validateData","showData");a.run()},commonClickMetadata:function(){var a=
this.get("sourceThread"),b=this.get("sourceForum"),a={redirectUrl:this.get("redirectUrl"),sourceThreadId:a.id,forumId:b.pk,forum:b.id,majorVersion:this.majorVersion(),variant:this.get("name"),isExperiment:this.get("isExperiment")};if((b=this.get("session"))&&b.isRegistered())a.userId=b.user.id;return a},createDataReferences:function(){function a(){return{sourceThread:b.get("sourceThread"),modelAttributes:b.commonClickMetadata()}}var b=this;b.collections=[];var f=a();f.modelAttributes.createdAgo=!0;
this.threads=new l.RelatedThreadCollection(null,f);this.collections.push(this.threads);if(this.get("promotedEnabled"))this.ads=new l.AdvertisementCollection(null,a()),this.collections.push(this.ads)},run:function(){var a=_.bind(this.onComplete,this);this.getData().then(this.validateData).then(this.showData).otherwise(a)},getData:function(){function a(){return{timeout:b.get("httpTimeout"),data:{limit:f/b.collections.length*b.get("maxPerColumn")}}}var b=this,f=b.get("numColumns"),d=a();if(b.has("listRelatedLimit"))d.data.limit=
b.get("listRelatedLimit");var e=b.listRelatedRequest=when(b.threads.fetch(d));b.get("contentPreviews")&&(e=e.then(b.getContentPreviews));if(!b.get("promotedEnabled"))return e;d=a();b.has("listPromotedLimit")?d.data.limit=b.get("listPromotedLimit"):d.data.limit*=2;d=b.listPromotedRequest=when(b.ads.fetch(d));return when.join(e,d)},getContentPreviews:function(){var a=this.threads.filter(function(a){return!a.get("posts")});DISQUS.debug||_.each(a,function(a){b.log("Rejecting "+a);b.log("Reason: Thread at that link has no comments");
this.threads.remove(a)},this);var a=this.threads.pluck("id"),e=this.collections.length,f=this.get("numColumns"),d=this.get("minPerColumn");if(a.length<f/e*d)return when.resolve();this.previews=new l.PostCollection;return(this.listTopPostRequest=when(this.previews.fetch({data:{thread:a},timeout:this.get("httpTimeout")}))).then(_.bind(this.attachPreviews,this))},attachPreviews:function(){var a=this;a.previews.each(function(b){var f=b.get("thread");(f=a.threads.get(f.id||f))&&f.set("preview",b)})},validateCollections:function(){for(var a=
this.collections,b=a.length,f=this.get("numColumns"),d=this.get("minPerColumn"),e,g;b>0;)if(g=f/a.length*d,e=a[--b],e.length<g)a.splice(b,1),b=a.length;b=a.length;if(b>0){f=f/b*this.get("maxPerColumn");for(d=0;d<b;d++)e=a[d],e.length>f&&e.reset(e.slice(0,f))}},validateData:function(){b.isMobile()&&this.ads&&this.ads.length>0&&this.ads.remove(this.ads.where({mobile:!1}));this.validateCollections();if(this.collections.length===0)throw"Not enough data";},showData:function(){i.BaseView.variant=this.toJSON();
var a=document.getElementById(this.get("containerId"));if(!a)throw"No container on the DOM";a=this.mainView=new i.MainView({el:a,model:this});a.render();var b=this.get("sectionIds"),f=this.get("collectionTagName"),d=this.get("collectionClassName");this.views=_.map(this.collections,function(a,e){return new i.BaseCollectionView({collection:a,el:$("#"+b[e]+" "+f+"."+d)})});this.views.length===2&&a.$el.find("#"+this.get("innerContainerId")).addClass("doublesection");_.invoke(this.views,"render");if(this.get("columnEveningEnabled")&&
a.$el.width()>this.get("minWidthForColumnLayout"))(new i.TwoColumn({views:this.views,fudge:this.get("toleranceCoefficient")})).render();else{var e=_.min(_.pluck(this.collections,"length"));_.each(this.views,function(a){for(;a.collection.length>e;)a.collection.pop()})}this.set("display",!0)},onComplete:function(a){var e=b.log;if(this.onCompleteCalled)return e("Error: Final reporting function called more than once");this.onCompleteCalled=!0;a&&e("It looks like there was a problem:",a);this.report()},
report:function(){var a=b.log,e=this.snapshot(),f=DISQUS.juggler.client("juggler");if(!f)return void a("Cannot report app state, no client found");a("Sending analytics data about this Discovery impression:");a("init_discovery: ",e);f.emit("init_discovery",e);this.get("darkJester")&&DISQUS.juggler.client("jester",!0).emit("init_discovery",e)},majorVersion:function(){return this.get("promotedEnabled")?"midway":"metadata"},snapshot:function(){var a=this.collections,b=this.threads,b={major_version:this.majorVersion(),
internal_organic:b.length,external_organic:0,promoted:0,display:this.get("display"),placement:this.get("containerId")===this.get("topPlacementContainerId")?"top":"bottom"};if(this.get("promotedEnabled")){var f=this.ads;_.extend(b,{promoted:f.length,promoted_ids:DISQUS.JSON.stringify(f.pluck("advertisement_id"))})}a=_.extend.apply(_,[{}].concat(_.pluck(a,"bandit")));if(!_.isEmpty(a))b.bandit=DISQUS.JSON.stringify(a);if(this.get("isExperiment"))b.variant=this.get("name");return b}});return e});
DISQUS.define("discovery.views",function(){var e={},l=DISQUS.use("discovery.helpers"),i=e.BaseView=Backbone.View.extend({template:function(a,b){if(i.variant)a.variant=i.variant;b=b||this.templateName;return DISQUS.renderBlock(b,a)}});e.BaseCollectionView=i.extend({events:{"click [data-redirect]":"handleClick"},handleClick:function(a){this.swapHref(a.currentTarget)},swapHref:function(a){a.setAttribute("data-href",a.getAttribute("href"));a.setAttribute("href",a.getAttribute("data-redirect"));_.delay(function(){a.setAttribute("href",
a.getAttribute("data-href"))},100)},templateName:"discoveryCollection",initialize:function(){this.elementsSelector="li.discovery-post";this.$elements=this.$el.find(this.elementsSelector);this.collectionName="collection";var a=this.collection;a.on("remove",this.remove,this);a.on("reset",this.render,this)},truncate:function(){this.$el.find(".line-truncate").each(function(a){a=$(a);l.lineTruncate(a,{lines:a.attr("data-line-truncate"),ellipsis:!0})})},render:function(){var a={};a[this.collectionName]=
this.collection.toJSON();this.$el.html(this.template(a));this.$elements=this.$el.find(this.elementsSelector);this.truncate();return this},remove:function(a,b,e){if(arguments.length===0)return i.prototype.remove.call(this);var g=_.toArray(this.$elements),m=g.splice(e.index,1)[0];$(m).remove();this.$elements=$(g);return this}});var b=function(a,b){this.modelIds=a||[];this.$elements=$(b||[])};_.extend(b.prototype,{height:function(){var a=this;a.heights=[];var b=$(a.$elements),e=b.first().offset().top,
e=function(){var a=b.last().offset();return a.top+a.height}()-e,g=0;_.each(b,function(b){b=$(b).height();a.heights.push(b);g+=b});this.interstice=(e-g)/(b.length-1);return e}});var h=function(){this.divideIntoColumns=function(){var a=this,d=a.subviews[0];a.left=new b;a.right=new b;var e=0;d.collection.each(function(b,i){var h=e++%2===0?"left":"right";a[h].modelIds.push(b.id);Array.prototype.push.call(a[h].$elements,d.$elements[i])})};this.removeOneFromColumn=function(a,b){var e=_.chain(a.modelIds).map(function(b,
d){return[b,a.heights[d]]}).sortBy(function(a){return-1*a[1]}).find(function(a){return a[1]<=b}).value()[0],g=this.subviews[0].collection,h=g.models,i=g.get(e),l=h.indexOf(i),e=[[],[]],k,n=h.length;for(k=0;k<n;k++)e[k%2].push(h[k]);h=e[l%2];h.splice(_.indexOf(h,i),1);h=[];i=(l+1)%2;for(k=0;k<n-1;k++)h.push(e[(k+i)%2].shift());g.reset(h)};this.balanceColumns=function(){var a=this.subviews[0],b=a.collection,e={};b.each(function(b,d){e[d]=a.$elements[d]});var g=l.balancedPartition(e),g=_.sortBy(g,"length"),
h=g[0],i=b.models,k=Array(i.length);_.each(g[1],function(a,b){k[2*b]=i[b]});_.each(h,function(a,b){k[2*b+1]=i[b]});b.reset(i)};this.shortenColumn=function(a,b){this.subviews[0].collection.length%2!==0&&a===this.left?this.removeOneFromColumn(a,this.fudge*b):this.balanceColumns()}},a=function(){this.divideIntoColumns=function(){var a=this.subviews,d=a[0],a=a[1];this.left=new b(d.collection.pluck(d.collection.model.prototype.idAttribute),d.$elements);this.right=new b(a.collection.pluck(a.collection.model.prototype.idAttribute),
a.$elements)};this.shortenColumn=function(a,b){for(var e=a===this.left?this.right:this.left,g=b/e.$elements.length,h=(a===this.left?this.subviews[0]:this.subviews[1]).collection,i=_.chain(a.modelIds).map(function(b,d){return[b,a.heights[d]]}).sortBy(function(a){return a[1]}).value(),k=[],l=0,n=b,n=g;i.length;){var r=i.pop(),s=r[0],r=r[1]+a.interstice;l+r>b&&(e=a);n=Math.abs(b-(l+r));n/=e.$elements.length;n>=g||(g=n,n=a.modelIds.indexOf(s),a.modelIds.splice(n,1),Array.prototype.splice.call(a.$elements,
n,1),l+=r,k.push(s))}h.remove(k)}},k=e.TwoColumn=function(b){this.fudge=b.fudge;this.subviews=b.views.slice(0,2);this.subviews.length===1?h.call(this):a.call(this)};_.extend(k.prototype,{ascendingByHeight:function(){var a=this.left,b=this.right,a=[[a,a.height()],[b,b.height()]];return _.sortBy(a,function(a){return a[1]})},evenColumns:function(a){var b=this.ascendingByHeight(),e=b[0][0],g=b[0][1],h=b[1][0],b=b[1][1];if(g!==b){var g=b-g,i=this.fudge*g,b=_.find(h.heights,function(a){return a+h.interstice<
i});if(!a&&b)return this.shortenColumn(h,g),this.divideIntoColumns(),this.evenColumns("do not recurse again");this.increaseMargins(e,g)}},increaseMargins:function(a,b){var e=b/a.$elements.length;_.each(a.$elements,function(a){var a=$(a),b=parseInt(a.css("margin-bottom"),10)+e;a.css("margin-bottom",b+"px")});(a===this.left?this.right:this.left).$elements.css("clear",a===this.right?"left":"right")},render:function(){this.divideIntoColumns();this.evenColumns();return this}});e.MainView=i.extend({templateName:"discoveryMain",
events:{"click [data-action=discovery-help]":function(a){a.preventDefault();this.model.set("help",!0)},"click [data-action=discovery-help-close]":function(a){a.preventDefault();this.model.set("help",!1)}},toggleHelp:function(a){this.$el.find("#discovery-note").toggle();a.trigger("resize")},initialize:function(){this.model.on("change:display",this.show,this);this.model.on("change:help",this.toggleHelp,this);this.$el.css({position:"absolute",visibility:"hidden",display:"block"})},createSections:function(){var a=
this.model,b=DISQUS.discovery.collections,e=b.RelatedThreadCollection,g=b.AdvertisementCollection,h=a.get("sectionNames"),i=a.get("sectionIds");return _.map(a.collections,function(a,b){var d;a instanceof e?d="organic":a instanceof g&&(d="promoted");return{id:i[b],className:h[b],type:d}})},render:function(){var a=this.model,b=this.createSections();this.$el.html(this.template({id:a.get("innerContainerId"),sections:b,forum:a.get("sourceForum"),session:a.get("session").toJSON()}))},show:function(a){a.get("display")&&
(this.$el.css({position:"static",visibility:"visible"}),a.trigger("resize"))}});return e});