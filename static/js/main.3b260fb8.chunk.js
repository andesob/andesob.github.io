(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},144:function(e,t,a){e.exports=a(157)},151:function(e,t,a){},152:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(110),r=a(0),o=a.n(r),l=a(111),i=a.n(l),c=(a(151),a(112)),s=a.n(c);a(152);var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"wtfisthis","Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,246)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),o(e),l(e)})},p=a(221),f=a(239),d=a(235),g=a(15),h=a(227),y=a(238),E=a(234),b=a(17);var x=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),a=t[0],n=t[1],l=Object(b.f)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{variant:"h5"},"Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted."),o.a.createElement(h.a,{id:"filled-basic",onChange:function(e){n(e.target.value)},variant:"filled",hiddenLabel:!0,size:"small",sx:{width:.5}}),o.a.createElement(E.a,{variant:"contained",onClick:function(){return l("/logpage",{replace:!0,state:{code:a}})}},o.a.createElement(y.a,null,"Analyze")))};var v=function(){return o.a.createElement(d.a,{maxWidth:"95%"},o.a.createElement(f.a,{display:"flex",justifyContent:"center",paddingY:2},o.a.createElement(p.a,{spacing:2,alignItems:"center"},o.a.createElement(x,null))))},w=a(73),j=a(240),I=a(241),O=a(242),k=a(120),C=a(116),M=a.n(C),D=a(236),N=a(226),T=a(232),A=a(92),z=a.n(A),W=[["Vetle","http://localhost:3000"],["Marius","http://10.14.80.66:3000/"]],G=["Profile","Account","Dashboard","Logout"],F=function(){var e=Object(r.useState)(null),t=Object(g.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(!1),l=Object(g.a)(o,2),i=l[0],c=l[1],s=function(){c(null)};return r.createElement(j.a,{position:"static"},r.createElement(d.a,{maxWidth:"xl"},r.createElement(I.a,{disableGutters:!0},r.createElement(z.a,{sx:{display:{xs:"none",md:"flex"},mr:1}}),r.createElement(y.a,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"PogLogs"),r.createElement(f.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.createElement(O.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit"},r.createElement(M.a,null)),r.createElement(k.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(a),onClose:function(){n(null)},sx:{display:{xs:"block",md:"none"}}},W.map(function(e){return r.createElement(T.a,{key:e[0],component:E.a,href:e[1]},r.createElement(y.a,{textAlign:"center"},e[0]))}))),r.createElement(z.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),r.createElement(y.a,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"PogLogs"),r.createElement(f.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},W.map(function(e){return r.createElement(E.a,{key:e[0],href:e[1],sx:{my:2,color:"white",display:"block"}},e[0])})),r.createElement(f.a,{sx:{flexGrow:0}},r.createElement(N.a,{title:"Open settings"},r.createElement(O.a,{onClick:function(e){c(e.currentTarget)},sx:{p:0}},r.createElement(D.a,null,"T"))),r.createElement(k.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(i),onClose:s},G.map(function(e){return r.createElement(T.a,{key:e,onClick:s},r.createElement(y.a,{textAlign:"center"},e))}))))))},Y=a(122),Z=a(229),J=a(230),L=a(225),S=a(118),B=a(30),V=a(18),U=a(245),P=a(237),Q=a(228),R=a(233);var X,H,q,_=function(e){var t=e.player,a=e.auras,n=e.encounters,r=function(e,t,a){var n=[];return e.forEach(function(e){if(t.includes(e.abilityID)){var r=o.a.createElement(p.a,{key:"stack"+a.get("id")+e.name,alignItems:"center",maxWidth:"35px",paddingX:1},o.a.createElement(P.a,{item:!0,display:"flex",justifyContent:"center",key:"auraName"+e.name+a.get("id")},o.a.createElement(E.a,{key:"button"+a.get("id")+e.name,variant:"text",style:{minWidth:"10px",padding:0},href:"https://tbc.wowhead.com/spell="+e.abilityID},o.a.createElement("img",{width:"100%",src:"https://wow.zamimg.com/images/wow/icons/large/"+e.icon,alt:e.icon}))),o.a.createElement(P.a,{item:!0,key:"auraNameCount"+e.name+a.get("name")},e.count));n.push(r)}}),n}(function(e,t){var a=new Map;return t.forEach(function(e){e.forEach(function(e){a.has(e.ability)?a.get(e.ability).count++:a.set(e.ability,{abilityID:e.ability,icon:e.icon,name:e.name,count:1})})}),a}(0,a),[33263,33261,33268,39625,17538,17627,28540,41605,28519,11406,28509,28520,11371,28497,28521,46840,39627,28491,41606,46838,33256],t);return o.a.createElement(P.a,{sx:{borderBottom:1},key:"logGridRowContainer"+t.get("id"),item:!0,container:!0,padding:1},o.a.createElement(P.a,{item:!0,xs:2,style:{display:"flex",alignItems:"center"},key:"rowPlayerName"+t.get("name"),color:(l=t.get("playerClass"),new Map([["Druid","#FF7C0A"],["Hunter","#AAD372"],["Mage","#3FC7EB"],["Paladin","#F48CBA"],["Priest","#FFFFFF"],["Rogue","#FFF468"],["Shaman","#0070DD"],["Warlock","#8788EE"],["Warrior","#C69B6D"]]).get(l))},o.a.createElement(y.a,null,t.get("name"))),o.a.createElement(P.a,{item:!0,xs:2,style:{display:"flex",alignItems:"center"}},o.a.createElement(y.a,null,t.get("auras").length,"/",n.length)),o.a.createElement(P.a,{container:!0,item:!0,xs:8,key:"GridAuraContainer"+t.get("id")},r));var l};function K(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return $(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw o}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var ee=function(){var e=Object(b.e)().state.code,t=function(e){var t=Object(Q.a)(q||(q=Object(B.a)(['\n    {\n\treportData{\n\t\treport(code:"','"){\n\t\t\tfights{\n\t\t\t\tname\n\t\t\t\tbossPercentage\n\t\t\t\tencounterID\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n}'])),e),a=Object(R.a)(t),n=a.loading,r=a.error,o=a.data;if(n||r)return!1;var l=o.reportData.report.fights,i=[];return l.forEach(function(e){0!==e.encounterID&&i.push(e.id)}),i}(e),a=function(e){var t=Object(Q.a)(X||(X=Object(B.a)(['\n    {\n\treportData{\n\t\treport(code:"','"){\n\t\t\tplayerDetails(startTime:386982, endTime:13327785)\n\t\t}\n\t}\n}'])),e),a=Object(R.a)(t),n=a.loading,r=a.error,o=a.data;if(n||r)return!1;var l=o.reportData.report.playerDetails.data.playerDetails,i=new Map,c=new Map;for(var s in l)l[s].forEach(function(e){var t={id:e.id,name:e.name,playerClass:e.type,auras:[]},a=new Map(Object.entries(t));c.set(e.id,a),i.has(e.type)?i.get(e.type).has(e.id)||i.get(e.type).set(e.name,a):(i.set(e.type,new Map),i.get(e.type).set(e.name,a))});var m,u=K(i.keys());try{for(u.s();!(m=u.n()).done;){var p=m.value;i.set(p,new Map(Object(V.a)(i.get(p)).sort()))}}catch(f){u.e(f)}finally{u.f()}return c}(e),n=function(e,t,a){a=Array.isArray(a)?a:[];var n=Object(Q.a)(H||(H=Object(B.a)(['\n    {\n\treportData{\n\t\treport(code:"','"){\n\t\t\tevents(startTime:0, endTime:99999999, fightIDs:[',"], dataType: CombatantInfo){\n\t\t\t\tdata\n\t\t\t}\n\t\t}\n\t}\n}"])),e,a),r=Object(R.a)(n),o=r.loading,l=r.error,i=r.data;if(o||l)return!1;var c=i.reportData.report.events.data;return c.forEach(function(e){e.type}),c}(e,0,t);if(!n||!a)return o.a.createElement(d.a,{maxWidth:"95%"},o.a.createElement(f.a,{display:"flex",justifyContent:"center",paddingY:2},o.a.createElement(p.a,{spacing:2,alignItems:"center"},o.a.createElement(x,null),o.a.createElement(U.a,null))));var r=function(e,t){var a=new Map;return t.forEach(function(t){e.get(t.sourceID).get("auras").push(t.auras),a.has(t.sourceID)?a.get(t.sourceID).push(t.auras):a.set(t.sourceID,[t.auras])}),a}(a,n),l=function(e){var t=new Map,a=new Map;e.forEach(function(e){a.set(e.get("name"),e)}),new Map(Object(V.a)(a).sort()).forEach(function(e){t.has(e.get("playerClass"))||t.set(e.get("playerClass"),new Map),t.get(e.get("playerClass")).set(e.get("name"),e)});var n=new Map(Object(V.a)(t).sort()),r=new Map;return n.forEach(function(e){e.forEach(function(e){r.set(e.get("name"),e)})}),r}(a),i=[];return l.forEach(function(e){var a=o.a.createElement(_,{key:"logGridRow"+e.get("id"),player:e,auras:r.get(e.get("id")),encounters:t});i.push(a)}),o.a.createElement(d.a,{maxWidth:"95%"},o.a.createElement(f.a,{display:"flex",justifyContent:"center",paddingY:2},o.a.createElement(p.a,{spacing:2,alignItems:"center"},o.a.createElement(x,null),o.a.createElement(P.a,{key:"GridContainer",container:!0,style:{backgroundColor:"black",color:"white"}},o.a.createElement(P.a,{item:!0,container:!0,key:"GridHeaderName",style:{backgroundColor:"darkslategray"},padding:1},o.a.createElement(P.a,{item:!0,xs:2,key:"GridHeaderName"},o.a.createElement(y.a,{variant:"h5"},"Player")),o.a.createElement(P.a,{item:!0,xs:2,key:"GridHeaderEncounters"},o.a.createElement(y.a,{variant:"h5"},"Encounters")),o.a.createElement(P.a,{item:!0,xs:8,paddingLeft:2,key:"GridHeaderAuras"},o.a.createElement(y.a,{variant:"h5"},"Auras"))),i))))},te=i.a.createRoot(document.getElementById("root")),ae=Object(Y.a)({uri:"https://classic.warcraftlogs.com/api/v2/client"}),ne=Object(S.a)(function(e,t){var a=t.headers;return{headers:Object(n.a)({},a,{authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Njg2NWQ1ZC0yODQ4LTRkZGQtODgzZS02MjkxMzMwODViYzIiLCJqdGkiOiJmY2ZiMWU0NWRjMGJhMjc0ZjI4NTNlYmFmNjFmZTAxYTliOGU1NDJjZmYxZThjNzViOGQ1NjIxZDA3Mjg2N2IyZjNiMmE3OGFkOThmZjY1NiIsImlhdCI6MTY1NTAzODYwNi42NzM1MjMsIm5iZiI6MTY1NTAzODYwNi42NzM1MjUsImV4cCI6MTY4NjE0MjYwNi42Njg3NzIsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.a4kNOOopzoCV71WtdvjjcBGYpQvb6fEawTCBIgbhTvsorbU_FKjiYaxDOrHk2CXF__Qch6wH1NzIOk4fj4U23D289NMoiKxsU2X_z-dTmi2-l1thkWaAfUmObGfsPDxSzsQEh-G3Q5UjA8xeoTuXJZ2GQJTpGdwmvr_yJVW5UTk9VOKucYsiqIwpLiMr9CChI7CEWB85Wvb_OBTcTdQZEeqxsqM4b1esn1zNbHa7jTNsW7VxB5EvwAD64dpNxLariZds-Gy1dCLiYH9891tTNeAPwSizYaT0CIo3n2IOO3dAVKfsulTmDeToRJgTrPW3LzoSTQuO_U63jRsnvjcxfMB-OTHyVbehLH2UMManzb7XEEvZ8VMSQ0Tf8FmMJb9wdvLabTo-CBDb3gUG8rgcl1w-8hdK6QXIarYuMWoo-axxY5otTd4f2M7uVJ1y_kct6NCVah1LFTbW2iUuab-pX3CDQ0lMkctC9DlK7XwnUDDU_f6tGMCsLqh1Wqf3_PvL0jENUZ-VoEcVPbmqd11NPBzwAJTtc9H4cOYAxMxmP7T7i5xJ99-R1bZthb41ZIkmGckoRPS6RQiItqWlNIu1cD1k1klXw4TaYX8NLRyE2gmIoHcmRfhfLxtoDq4yqNZfMqxlrWKJ7k1rCUXSRgEV_6Y5lyJqnaaCVKDykYgluvM"})}}),re=new Z.a({link:ne.concat(ae),cache:new J.a});te.render(o.a.createElement("div",null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),o.a.createElement(L.a,{client:re},o.a.createElement(w.a,null,o.a.createElement(F,null),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/",element:o.a.createElement(v,null)}),o.a.createElement(b.a,{path:"/app",element:o.a.createElement(m,null)}),o.a.createElement(b.a,{path:"/logpage",element:o.a.createElement(ee,null)})))))),u()}},[[144,1,2]]]);
//# sourceMappingURL=main.3b260fb8.chunk.js.map