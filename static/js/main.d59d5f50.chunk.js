(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},144:function(e,t,a){e.exports=a(157)},151:function(e,t,a){},152:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(112),r=a(0),o=a.n(r),l=a(113),i=a.n(l),c=(a(151),a(114)),s=a.n(c);a(152);var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"wtfisthis","Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,246)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),o(e),l(e)})},p=a(18),f=a(29),d=a(14),g=a(218),h=a(228),y=a(238),E=a(240),b=a(236),v=a(239),x=a(229),w=a(234),j=a(235);var O=function(e){e.id,e.name,e.spells,e.flasks,e.food,e.weaponBuffs,e.scrolls,e.potions,e.runes,e.trinkets,e.items,e.playerClass,e.auras},I=a(17);var C=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],l=Object(I.f)();return o.a.createElement(j.a,{maxWidth:"95%"},o.a.createElement(v.a,{display:"flex",justifyContent:"center",paddingY:2},o.a.createElement(g.a,{spacing:2,alignItems:"center"},o.a.createElement(E.a,{variant:"h5"},"Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted."),o.a.createElement(h.a,{id:"filled-basic",onChange:function(e){n(e.target.value),console.log("Input code is: "+e.target.value)},variant:"filled",hiddenLabel:!0,size:"small",sx:{width:.5}}),o.a.createElement(b.a,{variant:"contained",onClick:function(){return l("/logpage",{replace:!0,state:{code:a}})}},o.a.createElement(E.a,null,"Analyze")),o.a.createElement(y.a,{container:!0,spacing:2}))))},D=a(47),k=a(241),M=a(242),T=a(243),N=a(122),A=a(119),z=a.n(A),W=a(237),F=a(227),Z=a(233),Y=a(92),G=a.n(Y),J=["App"],L=["Profile","Account","Dashboard","Logout"],S=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(!1),l=Object(d.a)(o,2),i=l[0],c=l[1],s=function(){c(null)};return r.createElement(k.a,{position:"static"},r.createElement(j.a,{maxWidth:"xl"},r.createElement(M.a,{disableGutters:!0},r.createElement(G.a,{sx:{display:{xs:"none",md:"flex"},mr:1}}),r.createElement(E.a,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"PogLogs"),r.createElement(v.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.createElement(T.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit"},r.createElement(z.a,null)),r.createElement(N.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(a),onClose:function(){n(null)},sx:{display:{xs:"block",md:"none"}}},J.map(function(e){return r.createElement(Z.a,{key:e,component:D.b,to:e},r.createElement(E.a,{textAlign:"center"},e))}))),r.createElement(G.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),r.createElement(E.a,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"PogLogs"),r.createElement(v.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},J.map(function(e){return r.createElement(b.a,{key:e,component:D.b,to:e,sx:{my:2,color:"white",display:"block"}},e)})),r.createElement(v.a,{sx:{flexGrow:0}},r.createElement(F.a,{title:"Open settings"},r.createElement(T.a,{onClick:function(e){console.log(e),c(e.currentTarget)},sx:{p:0}},r.createElement(W.a,null,"T"))),r.createElement(N.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(i),onClose:s},L.map(function(e){return r.createElement(Z.a,{key:e,onClick:s},r.createElement(E.a,{textAlign:"center"},e))}))))))},B=a(124),U=a(230),V=a(231),P=a(226),Q=a(120);var X,H,R,q,_=function(e){var t=e.player,a=function(e,t){var a=[];return e.forEach(function(e){if(t.includes(e.abilityID)){var n=o.a.createElement(g.a,{alignItems:"center",maxWidth:"35px",paddingX:1},o.a.createElement(y.a,{item:!0,display:"flex",justifyContent:"center",key:"auraName"+e.name},o.a.createElement(b.a,{variant:"text",style:{minWidth:"10px",padding:0},href:"https://tbc.wowhead.com/spell="+e.abilityID},o.a.createElement("img",{width:"100%",src:"https://wow.zamimg.com/images/wow/icons/large/"+e.icon,alt:e.icon}))),o.a.createElement(y.a,{item:!0,key:"auraNameCount"+e.name},e.count));a.push(n)}}),a}(function(e,t){var a=new Map;return t.forEach(function(e){e.forEach(function(e){a.has(e.ability)?a.get(e.ability).count++:a.set(e.ability,{abilityID:e.ability,icon:e.icon,name:e.name,count:1})})}),a}(0,e.auras),[33263,33261,33268,39625,17538,17627,28540,41605,28519,11406,28509,28520,11371,28497,28521,46840,39627,28491,41606,46838,33256]);return o.a.createElement(y.a,{item:!0,container:!0,padding:1},o.a.createElement(y.a,{item:!0,xs:2,key:t.get("name"),color:(n=t.get("playerClass"),new Map([["Druid","#FF7C0A"],["Hunter","#AAD372"],["Mage","#3FC7EB"],["Paladin","#F48CBA"],["Priest","#FFFFFF"],["Rogue","#FFF468"],["Shaman","#0070DD"],["Warlock","#8788EE"],["Warrior","#C69B6D"]]).get(n))}," ",t.get("name")," "),o.a.createElement(y.a,{container:!0,item:!0,xs:10},a));var n};function K(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return $(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw o}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var ee=function(){var e=Object(I.e)().state.code,t=function(e){var t=Object(x.a)(q||(q=Object(f.a)(['\n    {\n\treportData{\n\t\treport(code:"','"){\n\t\t\tfights{\n\t\t\t\tname\n\t\t\t\tbossPercentage\n\t\t\t\tencounterID\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n}'])),e),a=Object(w.a)(t),n=a.loading,r=a.error,o=a.data;if(n||r)return!1;var l=o.reportData.report.fights,i=[];return l.forEach(function(e){0!==e.encounterID&&i.push(e.id)}),i}(e),a=function(e){var t=Object(x.a)(X||(X=Object(f.a)(['\n    {\n\treportData{\n\t\treport(code:"','"){\n\t\t\tplayerDetails(startTime:386982, endTime:13327785)\n\t\t}\n\t}\n}'])),e),a=Object(w.a)(t),n=a.loading,r=a.error,o=a.data;if(n||r)return!1;var l=o.reportData.report.playerDetails.data.playerDetails,i=new Map,c=new Map;for(var s in l)l[s].forEach(function(e){var t={id:e.id,name:e.name,playerClass:e.type,auras:[]},a=new Map(Object.entries(t));c.set(e.id,a),i.has(e.type)?i.get(e.type).has(e.id)||i.get(e.type).set(e.name,a):(i.set(e.type,new Map),i.get(e.type).set(e.name,a))});var m,u=K(i.keys());try{for(u.s();!(m=u.n()).done;){var d=m.value;i.set(d,new Map(Object(p.a)(i.get(d)).sort()))}}catch(g){u.e(g)}finally{u.f()}return c}(e),n=function(e,t,a){a=Array.isArray(a)?a:[];var n=Object(x.a)(H||(H=Object(f.a)(['\n    {\n\treportData{\n\t\treport(code:"','"){\n\t\t\tevents(startTime:0, endTime:99999999, fightIDs:[',"], dataType: CombatantInfo){\n\t\t\t\tdata\n\t\t\t}\n\t\t}\n\t}\n}"])),e,a),r=(Object(x.a)(R||(R=Object(f.a)(['\n    {\n\treportData{\n\t\treport(code:"','"){\n\t\t\tevents(startTime:0, endTime:99999999, fightIDs:[',"], dataType: Casts){\n\t\t\t\tdata\n\t\t\t}\n\t\t}\n\t}\n}"])),e,a),Object(w.a)(n)),o=r.loading,l=r.error,i=r.data;if(o||l)return console.log(l),!1;var c=i.reportData.report.events.data;return c.forEach(function(e){e.type}),c}(e,0,t);if(!n||!a)return o.a.createElement(E.a,{variant:"h2"},"HOLD UP");var r=function(e,t){var a=new Map;return t.forEach(function(t){e.get(t.sourceID).get("auras").push(t.auras),a.has(t.sourceID)?a.get(t.sourceID).push(t.auras):a.set(t.sourceID,[t.auras])}),a}(a,n),l=function(e){var t=new Map,a=new Map;e.forEach(function(e){a.set(e.get("name"),e)}),new Map(Object(p.a)(a).sort()).forEach(function(e){t.has(e.get("playerClass"))||t.set(e.get("playerClass"),new Map),t.get(e.get("playerClass")).set(e.get("name"),e)});var n=new Map(Object(p.a)(t).sort()),r=new Map;return n.forEach(function(e){e.forEach(function(e){console.log(e),r.set(e.get("name"),e)})}),console.log(r),r}(a);console.log(l),Array.from(a,function(e){var t=Object(d.a)(e,2),a=(t[0],t[1]);return o.a.createElement(O,{id:a.get("id"),name:a.get("name"),playerClass:a.get("playerClass"),auras:a.get("auras")})});var i=[];return l.forEach(function(e){var t=o.a.createElement(_,{player:e,auras:r.get(e.get("id"))});i.push(t)}),o.a.createElement(j.a,{maxWidth:"95%"},o.a.createElement(v.a,{display:"flex",justifyContent:"center",paddingY:2},o.a.createElement(g.a,{spacing:2,alignItems:"center"},o.a.createElement(E.a,{variant:"h5"},"Insert link to warcraftlogs report in the field below. Currently only TBC logs are accepted."),o.a.createElement(h.a,{id:"filled-basic",variant:"filled",hiddenLabel:!0,size:"small",sx:{width:.5}}),o.a.createElement(b.a,{variant:"contained"},o.a.createElement(E.a,null,"Analyze")),o.a.createElement(y.a,{key:"GridContainer",container:!0,style:{backgroundColor:"gray",color:"white"}},o.a.createElement(y.a,{item:!0,container:!0,key:"GridHeaderName",style:{backgroundColor:"darkslategray"},padding:1},o.a.createElement(y.a,{item:!0,xs:2,key:"GridHeaderName"},o.a.createElement(E.a,{variant:"h5"},"Player")),o.a.createElement(y.a,{item:!0,xs:10,key:"GridHeaderAuras"},o.a.createElement(E.a,{variant:"h5"},"Auras"))),i))))},te=i.a.createRoot(document.getElementById("root")),ae=Object(B.a)({uri:"https://classic.warcraftlogs.com/api/v2/client"}),ne=Object(Q.a)(function(e,t){var a=t.headers;return{headers:Object(n.a)({},a,{authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Njg2NWQ1ZC0yODQ4LTRkZGQtODgzZS02MjkxMzMwODViYzIiLCJqdGkiOiJmY2ZiMWU0NWRjMGJhMjc0ZjI4NTNlYmFmNjFmZTAxYTliOGU1NDJjZmYxZThjNzViOGQ1NjIxZDA3Mjg2N2IyZjNiMmE3OGFkOThmZjY1NiIsImlhdCI6MTY1NTAzODYwNi42NzM1MjMsIm5iZiI6MTY1NTAzODYwNi42NzM1MjUsImV4cCI6MTY4NjE0MjYwNi42Njg3NzIsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.a4kNOOopzoCV71WtdvjjcBGYpQvb6fEawTCBIgbhTvsorbU_FKjiYaxDOrHk2CXF__Qch6wH1NzIOk4fj4U23D289NMoiKxsU2X_z-dTmi2-l1thkWaAfUmObGfsPDxSzsQEh-G3Q5UjA8xeoTuXJZ2GQJTpGdwmvr_yJVW5UTk9VOKucYsiqIwpLiMr9CChI7CEWB85Wvb_OBTcTdQZEeqxsqM4b1esn1zNbHa7jTNsW7VxB5EvwAD64dpNxLariZds-Gy1dCLiYH9891tTNeAPwSizYaT0CIo3n2IOO3dAVKfsulTmDeToRJgTrPW3LzoSTQuO_U63jRsnvjcxfMB-OTHyVbehLH2UMManzb7XEEvZ8VMSQ0Tf8FmMJb9wdvLabTo-CBDb3gUG8rgcl1w-8hdK6QXIarYuMWoo-axxY5otTd4f2M7uVJ1y_kct6NCVah1LFTbW2iUuab-pX3CDQ0lMkctC9DlK7XwnUDDU_f6tGMCsLqh1Wqf3_PvL0jENUZ-VoEcVPbmqd11NPBzwAJTtc9H4cOYAxMxmP7T7i5xJ99-R1bZthb41ZIkmGckoRPS6RQiItqWlNIu1cD1k1klXw4TaYX8NLRyE2gmIoHcmRfhfLxtoDq4yqNZfMqxlrWKJ7k1rCUXSRgEV_6Y5lyJqnaaCVKDykYgluvM"})}}),re=new U.a({link:ne.concat(ae),cache:new V.a});te.render(o.a.createElement("div",null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),o.a.createElement(P.a,{client:re},o.a.createElement(D.a,null,o.a.createElement(S,null),o.a.createElement(I.c,null,o.a.createElement(I.a,{path:"/",element:o.a.createElement(C,{client:re})}),o.a.createElement(I.a,{path:"/app",element:o.a.createElement(m,null)}),o.a.createElement(I.a,{path:"/logpage",element:o.a.createElement(ee,null)})))))),u()}},[[144,1,2]]]);
//# sourceMappingURL=main.d59d5f50.chunk.js.map