"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3278],{3278:(T,c,s)=>{s.r(c),s.d(c,{ViewPageModule:()=>_});var l=s(6814),u=s(95),o=s(7852),r=s(504),i=s(9468),p=s(4525);function g(e,n){if(1&e&&(i.TgZ(0,"ion-item",6)(1,"ion-label"),i._uU(2),i.qZA()()),2&e){const t=n.$implicit;i.xp6(2),i.Oqu(t.type.name)}}function m(e,n){if(1&e&&(i.TgZ(0,"ion-item",6)(1,"ion-label"),i._uU(2),i.qZA()()),2&e){const t=n.$implicit;i.xp6(2),i.Oqu(t.ability.name)}}function d(e,n){if(1&e&&(i.TgZ(0,"ion-item",6)(1,"ion-label"),i._uU(2),i.qZA()()),2&e){const t=n.$implicit;i.xp6(2),i.AsE("",t.stat.name,": ",t.base_stat,"")}}function Z(e,n){if(1&e){const t=i.EpF();i.TgZ(0,"ion-card",6),i._UZ(1,"img",7),i.TgZ(2,"ion-card-header")(3,"ion-card-title"),i._uU(4),i.qZA()(),i.TgZ(5,"ion-card-content")(6,"p"),i._uU(7),i.qZA(),i.TgZ(8,"p"),i._uU(9),i.qZA(),i.TgZ(10,"p"),i._uU(11),i.qZA(),i.TgZ(12,"p",8),i._uU(13,"Tipo do pok\xe9mon"),i.qZA(),i.TgZ(14,"ion-list",9),i.YNc(15,g,3,1,"ion-item",5),i.qZA(),i.TgZ(16,"p",8),i._uU(17,"Habilidades do pok\xe9mon"),i.qZA(),i.TgZ(18,"ion-list",9),i.YNc(19,m,3,1,"ion-item",5),i.qZA(),i.TgZ(20,"p",8),i._uU(21,"Status do pok\xe9mon"),i.qZA(),i.TgZ(22,"ion-list",9),i.YNc(23,d,3,2,"ion-item",5),i.qZA(),i._UZ(24,"br"),i.TgZ(25,"ion-button",10),i.NdJ("click",function(){const A=i.CHM(t).$implicit,x=i.oxw();return i.KtG(x.listing(A.id+1))}),i._uU(26,"Pr\xf3ximo"),i.qZA(),i.TgZ(27,"ion-button",11),i._uU(28,"\xcdnicio"),i.qZA()()()}if(2&e){const t=n.$implicit;i.xp6(1),i.MGl("alt","Imagem do Pok\xe9mon ",t.name,""),i.s9C("src",t.sprites.front_default,i.LSH),i.xp6(3),i.Oqu(t.name),i.xp6(3),i.hij("Experi\xeancia: ",t.base_experience,""),i.xp6(2),i.hij("Altura: ",(t.height/10).toFixed(1)," m"),i.xp6(2),i.hij("Peso: ",(t.weight/10).toFixed(1)," kg"),i.xp6(4),i.Q6J("ngForOf",t.types),i.xp6(4),i.Q6J("ngForOf",t.abilities),i.xp6(4),i.Q6J("ngForOf",t.stats)}}const f=[{path:"",component:(()=>{class e{constructor(t,a){this.service=t,this.router=a,this.pokemonArray=new Array}ngOnInit(){this.index=history.state.index,null==this.index&&this.router.navigate(["home"]),this.listing(this.index)}listing(t){this.service.listingPokemon(t).subscribe(a=>{this.pokemonArray=this.pokemonArray.slice(0,-1),this.pokemonArray.push(a)})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(p.M),i.Y36(r.F0))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-view"]],decls:12,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["color","primary",4,"ngFor","ngForOf"],["color","primary"],[3,"alt","src"],[2,"font-size","1.25rem","margin","8px 0"],["lines","full",2,"padding","0"],["color","success",3,"click"],["color","success","routerLink","/home"]],template:function(t,a){1&t&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),i._UZ(3,"ion-menu-button"),i.qZA(),i.TgZ(4,"ion-title"),i._uU(5,"Visualizar"),i.qZA()()(),i.TgZ(6,"ion-content",2)(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),i._uU(10,"Visualizar"),i.qZA()()(),i.YNc(11,Z,29,9,"ion-card",5),i.qZA()),2&t&&(i.Q6J("translucent",!0),i.xp6(6),i.Q6J("fullscreen",!0),i.xp6(5),i.Q6J("ngForOf",a.pokemonArray))},dependencies:[l.sg,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.fG,o.wd,o.sr,o.YI,r.rH]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[r.Bz.forChild(f),r.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[l.ez,u.u5,o.Pc,h]}),e})()}}]);