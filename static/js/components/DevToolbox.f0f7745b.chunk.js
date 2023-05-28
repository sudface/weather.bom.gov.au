(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{672:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),r=a(4),o=a.n(r),l=a(5),s=a.n(l),d=a(6),c=a.n(d),h=a(7),u=a.n(h),m=a(0),g=a.n(m),b=a(646),w=a.n(b),f=a(1),p=a(2),v=f.b.div.withConfig({displayName:"GridOverlay__OverlayStyled"})(["position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:",";min-height:100vh;"],f.f.overlay),y=Object(f.b)(v).withConfig({displayName:"GridOverlay__BoxStyled"})(["position:fixed;height:100vh;width:100%;max-width:100%;--max_width:100%;--media-query:'base';--container_width:calc(100% - (2 * var(--offset)));--color:hsla(204,80%,72%,0.25);--color-text:hsla(204,80%,72%,1);--baseline-shift:0;--baseline:0.25rem;--columns:4;--offset:0.5rem;--gutter:1rem;@media ","{--media-query:'mobileSmall';--color:hsla(286,51%,44%,0.25);--color-text:hsla(286,51%,44%,1);}@media ","{--media-query:'tabletPortrait';--container_width:",";--columns:12;--color:hsla(204,80%,72%,0.25);--color-text:hsla(204,80%,72%,1);}@media ","{--media-query:'tabletLandscape';--container_width:",";--columns:12;--color:hsla(204,80%,72%,0.25);--color-text:hsla(204,80%,72%,1);}@media ","{--media-query:'desktopSmall';--container_width:",";--offset:9.25rem;--color:hsla(286,51%,44%,0.25);--color-text:hsla(286,51%,44%,1);}@media ","{--media-query:'desktopLarge';--container_width:",";--offset:11rem;--color:hsla(446,51%,44%,0.25);--color-text:hsla(446,51%,44%,1);}--repeating-width:calc(100% / var(--columns));--column-width:calc((100% / var(--columns)) - var(--gutter));--background-width:calc(100% + var(--gutter));--background-columns:repeating-linear-gradient( to right,var(--color),var(--color) var(--column-width),transparent var(--column-width),transparent var(--repeating-width) );--background-baseline:repeating-linear-gradient( to bottom,var(--color),var(--color) 1px,transparent 1px,transparent var(--baseline) );"],p.g.mobileSmall,p.g.tabletPortrait,p.h.tabletPortrait,p.g.tabletLandscape,p.h.tabletLandscape,p.g.desktopSmall,p.h.desktopSmall,p.g.desktopLarge,p.h.desktopLarge),k=Object(f.b)(v).withConfig({displayName:"GridOverlay__GridStyled"})(["content:'';margin-right:auto;margin-left:auto;width:var(--container_width);background-image:var(--background-columns);background-size:var(--background-width) 100%;background-position:0 var(--baseline-shift);position:relative;::after{content:\"Breakpoint: \" var(--media-query);background:var(--color-text);width:12rem;position:fixed;top:0;left:calc(50% - 6rem);font-weight:bold;color:#fff;text-align:center;font-size:0.7rem;}"]),x=Object(f.b)(v).withConfig({displayName:"GridOverlay__BaselineStyled"})(["content:'';background-image:var(--background-baseline);background-position:0 var(--baseline-shift);"]),S=function e(){i()(this,e)};S.OverlayStyled=v,S.BoxStyled=y,S.GridStyled=k,S.BaselineStyled=x;var E=f.b.div.withConfig({displayName:"DevToolbox__ToolboxContainer"})(["position:fixed;z-index:",";bottom:0;left:50%;margin-left:-","rem;background:#ccc;padding:",";height:",";transition:height 100ms ease-out;overflow:hidden;width:","rem;display:flex;justify-content:center;flex-direction:column;border-radius:0.5rem 0.5rem 0 0;h3{margin-top:0;text-align:center;}"],f.f.overlay,6,function(e){return e.show?"0.6rem":0},function(e){return e.show?"14rem":0},12),B=function(e){var t=e.active,a=e.onToggle,n=e.children;return g.a.createElement("button",{onClick:a},t?"Hide ":"Show ",n)},G=function(e){function t(e){var n;return i()(this,t),(n=s()(this,c()(t).call(this,e))).handleKeydown=function(e){"`"===e.key&&n.toggleVisibility()},n.toggleVisibility=function(){n.setState({isVisible:!n.state.isVisible})},n.toggleGrid=function(){n.setState({showGrid:!n.state.showGrid})},n.toggleBaseline=function(){n.setState({showBaseline:!n.state.showBaseline})},n.renderGrid=function(){var e=n.state,t=e.showGrid,a=e.isVisible;return t&&a?g.a.createElement(S.BoxStyled,null,g.a.createElement(S.GridStyled,null)):null},n.renderBaseline=function(){var e=n.state,t=e.showBaseline,a=e.isVisible;return t&&a?g.a.createElement(S.BoxStyled,null,g.a.createElement(S.BaselineStyled,null)):null},n.state={isVisible:!1,showGrid:!1,showBaseline:!1},n}return u()(t,e),o()(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.state.isVisible,t=g.a.createElement("span",{role:"img","aria-label":"hammer"},"🔨");return g.a.createElement(g.a.Fragment,null,this.renderGrid(),this.renderBaseline(),g.a.createElement(w.a,{noPanel:!0}),g.a.createElement(E,{show:e,"aria-hidden":!0},g.a.createElement("h3",null,t," Toolbox ",t),g.a.createElement("button",{onClick:this.toggleGrid},this.state.showGrid?"Hide":"Show"," grid"),g.a.createElement("button",{onClick:this.toggleBaseline},this.state.showBaseline?"Hide":"Show"," baseline"),g.a.createElement("br",null),g.a.createElement("small",null,"Mobx:"),g.a.createElement(b.GraphControl,null,g.a.createElement(B,null,"graph")),g.a.createElement(b.LogControl,null,g.a.createElement(B,null,"logs")),g.a.createElement(b.UpdatesControl,null,g.a.createElement(B,null,"updates"))))}}]),t}(g.a.Component);a.d(t,"default",function(){return G})}}]);