(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{667:function(t,e,n){"use strict";function r(t,e){return"action"===t.type&&t.parentId,e(t)}function o(t,e){"action"===t.type&&0!==t.parentId||"flow_resume"===t.type||t.type;e(t)}function p(n,r){function t(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,a&&(c=a[2&e[0]?"return":e[0]?"throw":"next"])&&!(c=c.call(a,e[1])).done)return c;switch(a=0,c&&(e=[0,c.value]),e[0]){case 0:case 1:c=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,a=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(c=0<(c=i.trys).length&&c[c.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!c||e[1]>c[0]&&e[1]<c[3])){i.label=e[1];break}if(6===e[0]&&i.label<c[1]){i.label=c[1],c=e;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(e);break}c[2]&&i.ops.pop(),i.trys.pop();continue}e=r.call(n,i)}catch(t){e=[6,t],a=0}finally{o=c=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}var o,a,c,e,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e}n.r(e),n.d(e,"atomic",function(){return a}),n.d(e,"simpleActionLogger",function(){return r}),n.d(e,"actionLogger",function(){return o}),n.d(e,"TimeTraveller",function(){return u}),n.d(e,"UndoManager",function(){return d}),n.d(e,"asReduxStore",function(){return c}),n.d(e,"connectReduxDevtools",function(){return i});var l=n(11),a=Object(l.createActionTrackingMiddleware)({filter:function(t){return 0===t.parentId},onStart:function(t){return Object(l.recordPatches)(t.tree)},onResume:function(t,e){return e.resume()},onSuspend:function(t,e){return e.stop()},onSuccess:function(t,e){},onFail:function(t,e){return e.undo()}}),c=function(a){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(!Object(l.isStateTreeNode)(a))throw new Error("Expected model object");var n={getState:function(){return Object(l.getSnapshot)(a)},dispatch:function(t){var e,r,o;e=t,r=c.slice(),o=function(t){return Object(l.applyAction)(a,(e=t,delete(n=Object.assign({},e)).type,{name:e.type,args:[n]}));var e,n},function t(e){var n=r.shift();n?n(t)(e):o(e)}(e)},subscribe:function(t){return Object(l.onSnapshot)(a,t)}},c=t.map(function(t){return t(n)});return n},i=function(a,e){function c(t,e){o=!0,Object(l.applySnapshot)(t,e),o=!1}var r=a.connectViaExtension({name:Object(l.getType)(e).name}),o=!1;r.subscribe(function(t){"DISPATCH"===t.type&&function(t,e,n){switch(n.payload.type){case"RESET":return c(e,i),t.init(i);case"COMMIT":return t.init(Object(l.getSnapshot)(e));case"ROLLBACK":return t.init(a.extractState(n));case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return c(e,a.extractState(n));case"IMPORT_STATE":var r=n.payload.nextLiftedState,o=r.computedStates;c(e,o[o.length-1].state),t.send(null,r)}}(r,e,t)});var i=Object(l.getSnapshot)(e);r.init(i),Object(l.onAction)(e,function(t){if(!o){var n={};n.type=t.name,t.args&&t.args.forEach(function(t,e){return n[e]=t}),r.send(n,Object(l.getSnapshot)(e))}},!0)},u=l.types.model("TimeTraveller",{history:l.types.optional(l.types.array(l.types.frozen),[]),undoIdx:-1,targetPath:""}).views(function(t){return{get canUndo(){return 0<t.undoIdx},get canRedo(){return t.undoIdx<t.history.length-1}}}).actions(function(e){var t,n,r=!1;return{addUndoState:function(t){r?r=!1:(e.history.splice(e.undoIdx+1),e.history.push(t),e.undoIdx=e.history.length-1)},afterCreate:function(){if(!(t=e.targetPath?Object(l.resolvePath)(e,e.targetPath):Object(l.getEnv)(e).targetStore))throw new Error("Failed to find target store for TimeTraveller. Please provide `targetPath`  property, or a `targetStore` in the environment");n=Object(l.onSnapshot)(t,function(t){return e.addUndoState(t)}),0===e.history.length&&e.addUndoState(Object(l.getSnapshot)(t))},beforeDestroy:function(){n()},undo:function(){e.undoIdx--,r=!0,Object(l.applySnapshot)(t,e.history[e.undoIdx])},redo:function(){e.undoIdx++,r=!0,Object(l.applySnapshot)(t,e.history[e.undoIdx])}}}),s=l.types.model("UndoManagerEntry",{patches:l.types.frozen,inversePatches:l.types.frozen}),d=l.types.model("UndoManager",{history:l.types.optional(l.types.array(s),[]),undoIdx:0}).views(function(t){return{get canUndo(){return 0<t.undoIdx},get canRedo(){return t.undoIdx<t.history.length}}}).actions(function(a){var t,e,c=!1,i=!1,n=!1,u=!1,r={patches:[],inversePatches:[]},s=null,o=0,d=function(t){r={patches:r.patches.concat(t.patches),inversePatches:r.inversePatches.concat(t.inversePatches)}},f=Object(l.createActionTrackingMiddleware)({filter:function(t){return!1===i&&t.context!==a},onStart:function(t){if(!s)return function(t){c=i,o++;var e=t.name+o;return s=e,{recorder:Object(l.recordPatches)(t.tree),actionId:e}}(t)},onResume:function(t,e){var n=(void 0===e?{recorder:void 0,actionId:void 0}:e).recorder;return n&&n.resume()},onSuspend:function(t,e){var n=(void 0===e?{recorder:void 0,actionId:void 0}:e).recorder;return n&&n.stop()},onSuccess:function(t,e){var n=void 0===e?{recorder:void 0,actionId:void 0}:e,r=n.recorder,o=n.actionId;s===o&&function(t){if(s=null,!c){if(u)return d(t);a.addUndoState(t)}c=i}(r)},onFail:function(t,e){var n=(void 0===e?{recorder:void 0,actionId:void 0}:e).recorder;return n&&n.undo()}});return{addUndoState:function(t){n||t.patches&&0===t.patches.length||(a.history.splice(a.undoIdx),a.history.push({patches:t.patches,inversePatches:t.inversePatches}),a.undoIdx=a.history.length)},afterCreate:function(){if(!(t=Object(l.getEnv)(a).targetStore?Object(l.getEnv)(a).targetStore:Object(l.getRoot)(a))||t===a)throw new Error("UndoManager should be created as part of a tree, or with `targetStore` in it's environment");e=Object(l.addMiddleware)(t,f,!1)},beforeDestroy:function(){e()},undo:function(){n=!0,a.undoIdx--,Object(l.applyPatch)(Object(l.getRoot)(t),a.history[a.undoIdx].inversePatches.slice().reverse()),n=!1},redo:function(){n=!0,Object(l.applyPatch)(Object(l.getRoot)(t),a.history[a.undoIdx].patches),a.undoIdx++,n=!1},withoutUndo:function(t){try{return i=c=!0,t()}finally{i=!1}},withoutUndoFlow:function(a){return Object(l.flow)(function(){var o;return p(this,function(t){switch(t.label){case 0:return i=c=!0,[5,(e=a(),n="function"==typeof Symbol&&e[Symbol.iterator],r=0,n?n.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}})];case 1:return o=t.sent(),i=!1,[2,o]}var e,n,r})})},startGroup:function(t){return u=!0,t()},stopGroup:function(t){t&&t(),u=!1,a.addUndoState(r),r={patches:[],inversePatches:[]}}}})}}]);