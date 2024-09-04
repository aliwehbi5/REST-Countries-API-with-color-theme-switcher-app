import{_ as r,g as c,c as u,a as s,h as g,w as p,t as n,o as h,p as _,d as m}from"./index-DnO3B_7N.js";const d={name:"countryView",data(){return{flag:String,capital:[String,Array],region:String,subregion:String,nativeName:String,domain:String,currencies:String,languages:String,continents:String,status:String,population:Number}},mounted(){fetch("https://restcountries.com/v3.1/all").then(t=>t.json()).then(t=>{t.forEach(e=>{e.name.official.toLowerCase()==this.$route.params.countryName&&(this.region=e.region,Array.isArray(e.capital)&&(e.capital=e.capital.join(", ")),this.capital=e.capital,this.subregion=e.subregion,this.population=e.population,this.flag=e.flags.png,this.nativeName=Object.values(e.name.nativeName)[0].common,this.domain=e.flag,this.currencies=Object.values(e.currencies)[0].name+" ("+Object.values(e.currencies)[0].symbol+")",this.languages=Object.values(e.languages).join(", "),this.continents=e.continents[0],this.status=e.status)})}).catch(t=>{console.error("Error fetching data:",t)})},methods:{formatNumber(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},a=t=>(_("data-v-d15ba143"),t=t(),m(),t),f={class:"container"},v={class:"back-btn"},b=a(()=>s("i",{class:"fa-solid fa-arrow-left"},null,-1)),S=a(()=>s("span",null,"Back",-1)),N={class:"row"},w={class:"flag"},j=["src"],k={class:"content"},C={class:"lists"},B={class:"first-list"},I={class:"second-list"};function O(t,e,V,x,i,o){const l=c("router-link");return h(),u("main",f,[s("div",v,[g(l,{to:"/"},{default:p(()=>[b,S]),_:1})]),s("div",N,[s("div",w,[s("img",{src:i.flag,alt:""},null,8,j)]),s("div",k,[s("h1",null,n(t.$route.params.countryName),1),s("div",C,[s("ul",B,[s("li",null,"Native Name: "+n(i.nativeName),1),s("li",null,"Population: "+n(o.formatNumber(i.population)),1),s("li",null,"Region: "+n(i.region),1),s("li",null,"Sub Region: "+n(i.subregion),1),s("li",null,"Capital: "+n(i.capital),1)]),s("ul",I,[s("li",null,"Top Level Domain: "+n(i.domain),1),s("li",null,"Currencies: "+n(i.currencies),1),s("li",null,"Languages: "+n(i.languages),1),s("li",null,"Continents: "+n(i.continents),1),s("li",null,"Status: "+n(i.status),1)])])])])])}const E=r(d,[["render",O],["__scopeId","data-v-d15ba143"]]);export{E as default};