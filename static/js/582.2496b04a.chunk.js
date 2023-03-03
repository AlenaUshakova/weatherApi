"use strict";(self.webpackChunkweatherapi=self.webpackChunkweatherapi||[]).push([[582],{4582:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,s,d,i,c,a,l=t(9439),o=t(2791),x=t(9993),h=t(6447),u=t(168),p=t(4313),f=p.ZP.div(r||(r=(0,u.Z)(["\n  border: 1px solid #96b4f5;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 20px;\n  font-size: smaller;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  p {\n    margin: 0;\n  }\n  h1 {\n    margin: 0;\n    font-size: 20px;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n"]))),j=(p.ZP.div(s||(s=(0,u.Z)(["\n  display: flex;\n  font-size: xx-small;\n  flex-direction: column;\n  width: 100%;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  p {\n    text-align: left;\n  }\n"]))),p.ZP.div(d||(d=(0,u.Z)(["\n  flex-basis: calc((100% - 110px) / 12);\n  text-align: center;\n  /* border: 1px solid red; */\n  font-size: xx-small;\n\n  background-color: ",";\n  p {\n    text-align: center;\n  }\n  :nth-child(2n) {\n    display: none;\n  }\n"])),(function(n){return 1===n.day?"yellow":"gray"})),p.ZP.div(i||(i=(0,u.Z)(["\n  background-color: #ece7e7c0;\n  padding: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  max-width: 700px;\n  gap: 50px;\n  border-radius: 20px;\n  width: 100%;\n  h2 {\n    margin: 0;\n    text-align: center;\n    font-size: 32px;\n    margin-bottom: 20px;\n  }\n  p {\n    margin: 0;\n    text-align: left;\n    font-size: x-large;\n  }\n"])))),m=p.ZP.div(c||(c=(0,u.Z)(["\n  margin-top: 30px;\n  table {\n    background-color: #ece7e7c0;\n    border-collapse: collapse;\n    border-radius: 20px;\n    font-size: small;\n  }\n\n  table th,\n  table td {\n    padding: 10px;\n    /* border: 1px solid #2a2a2a; */\n    text-align: center;\n  }\n"]))),y=p.ZP.div(a||(a=(0,u.Z)(["\n  table {\n    border-collapse: collapse;\n    font-size: small;\n  }\n\n  table th,\n  table td {\n    padding: 10px;\n    /* border: 1px solid #2a2a2a; */\n    text-align: left;\n    border-radius: 5px;\n  }\n\n  table tr td:nth-child(2n) {\n    background-color: #96b4f5;\n    border: 5px solid #ece7e7c0;\n    text-align: center;\n  }\n"]))),b=t(9846),g=t(1528),_=t(184),v=function(){var n=(0,o.useState)(null),e=(0,l.Z)(n,2),t=e[0],r=e[1],s=(0,o.useContext)(x.S).query;function d(n){var e=n.split(/:|\s/),t=(0,l.Z)(e,3),r=t[0],s=t[1],d=t[2],i=parseInt(r);"PM"===d&&12!==i&&(i+=12),"AM"===d&&12===i&&(i=0);var c=i.toString().padStart(2,"0"),a=s.padStart(2,"0");return"".concat(c,":").concat(a)}if((0,o.useEffect)((function(){""!==s&&(0,h.w)(s,1).then((function(n){console.log(n),r(n)}))}),[s]),t){var i=(0,b.Z)(new Date(t.forecast.forecastday[0].date),"EEEE d MMMM",{locale:g.Z});return(0,_.jsx)(_.Fragment,{children:s&&(0,_.jsxs)(f,{children:[(0,_.jsxs)("h1",{children:["\u041f\u043e\u0433\u043e\u0434\u0430 ",t.location.name," \u0441\u0435\u0433\u043e\u0434\u043d\u044f"]}),(0,_.jsxs)(j,{children:[(0,_.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[" ",(0,_.jsxs)("h2",{children:[" ",i]}),(0,_.jsx)("div",{children:(0,_.jsx)("img",{src:t.current.condition.icon,alt:t.current.condition.text,width:120})})]}),(0,_.jsx)(y,{children:(0,_.jsx)("table",{children:(0,_.jsxs)("tbody",{children:[(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),(0,_.jsxs)("td",{children:[t.current.temp_c," C"]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a"}),(0,_.jsxs)("td",{children:[t.current.feelslike_c," C"]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c"}),(0,_.jsxs)("td",{children:[t.current.cloud,"%"]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),(0,_.jsxs)("td",{children:[t.current.humidity,"%"]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),(0,_.jsxs)("td",{children:[(.75006*t.current.pressure_mb).toFixed(0)," ","\u043c\u043c \u0440\u0442. \u0441\u0442."]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:" \u041c\u0430\u043a\u0441 t"}),(0,_.jsxs)("td",{children:[t.forecast.forecastday[0].day.maxtemp_c," C"]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:" \u041c\u0438\u043d t"}),(0,_.jsxs)("td",{children:[t.forecast.forecastday[0].day.mintemp_c," C"]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:" \u0418\u043d\u0434\u0435\u043a\u0441 \u0423\u0424"}),(0,_.jsx)("td",{children:t.forecast.forecastday[0].day.uv})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:" \u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430"}),(0,_.jsxs)("td",{children:[t.current.wind_kph," \u043a\u043c/\u0447"]})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:" \u0412\u043e\u0441\u0445\u043e\u0434 "}),(0,_.jsx)("td",{children:d(t.forecast.forecastday[0].astro.sunrise)})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:" \u0417\u0430\u043a\u0430\u0442 "}),(0,_.jsx)("td",{children:d(t.forecast.forecastday[0].astro.sunset)})]})]})})})]}),(0,_.jsxs)(m,{children:[" ",(0,_.jsxs)("table",{children:[(0,_.jsxs)("thead",{children:[(0,_.jsx)("tr",{children:(0,_.jsx)("th",{rowSpan:"2"})}),(0,_.jsx)("tr",{children:t.forecast.forecastday[0].hour.map((function(n,e){return e%2!==0?(0,_.jsxs)("th",{day:n.is_day,children:[n.time.substring(11,16),(0,_.jsx)("img",{src:n.condition.icon,alt:n.condition.text,width:35})]},n.time_epoch):null}))})]}),(0,_.jsxs)("tbody",{children:[(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),t.forecast.forecastday[0].hour.map((function(n,e){return e%2!==0?(0,_.jsxs)("td",{day:n.is_day,children:[n.humidity," %"]},n.time_epoch):null}))]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),t.forecast.forecastday[0].hour.map((function(n,e){return e%2!==0?(0,_.jsxs)("td",{day:n.is_day,children:[Math.round(n.temp_c)," C"]},n.time_epoch):null}))]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c"}),t.forecast.forecastday[0].hour.map((function(n,e){return e%2!==0?(0,_.jsxs)("td",{day:n.is_day,children:[n.vis_km," \u043a\u043c"]},n.time_epoch):null}))]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u0441\u0430\u0434\u043a\u043e\u0432"}),t.forecast.forecastday[0].hour.map((function(n,e){return e%2!==0?(0,_.jsxs)("td",{day:n.is_day,children:[n.chance_of_rain," %"]},n.time_epoch):null}))]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430"}),t.forecast.forecastday[0].hour.map((function(n,e){return e%2!==0?(0,_.jsxs)("td",{day:n.is_day,children:[n.wind_kph," \u043a\u043c/\u0447"]},n.time_epoch):null}))]})]})]})]})]})})}}},6447:function(n,e,t){t.d(e,{w:function(){return c}});var r=t(5861),s=t(4687),d=t.n(s),i=t(1243),c=function(){var n=(0,r.Z)(d().mark((function n(e,t){var r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.Z.defaults.baseURL="http://api.weatherapi.com/v1/","e8751ca91012454b968145713232702",n.next=4,i.Z.get("forecast.json?key=".concat("e8751ca91012454b968145713232702","&q=").concat(e,"&days=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=582.2496b04a.chunk.js.map