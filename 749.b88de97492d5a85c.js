"use strict";(self.webpackChunkBinimoy_ang_self_made=self.webpackChunkBinimoy_ang_self_made||[]).push([[749],{749:(fe,S,r)=>{r.r(S),r.d(S,{DashboardModule:()=>he});var y=r(9808),h=r(2680),u=r(2382),I=r(8306),j=r(727),w=r(4408);let g,O=1;const f={};function x(s){return s in f&&(delete f[s],!0)}const N={setImmediate(s){const i=O++;return f[i]=!0,g||(g=Promise.resolve()),g.then(()=>x(i)&&s()),i},clearImmediate(s){x(s)}},{setImmediate:z,clearImmediate:F}=N,m={setImmediate(...s){const{delegate:i}=m;return((null==i?void 0:i.setImmediate)||z)(...s)},clearImmediate(s){const{delegate:i}=m;return((null==i?void 0:i.clearImmediate)||F)(s)},delegate:void 0};var Y=r(7565);const L=new class B extends Y.v{flush(i){this._active=!0;const t=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let o;i=i||n.shift();do{if(o=i.execute(i.state,i.delay))break}while((i=n[0])&&i.id===t&&n.shift());if(this._active=!1,o){for(;(i=n[0])&&i.id===t&&n.shift();)i.unsubscribe();throw o}}}(class J extends w.o{constructor(i,t){super(i,t),this.scheduler=i,this.work=t}requestAsyncId(i,t,n=0){return null!==n&&n>0?super.requestAsyncId(i,t,n):(i.actions.push(this),i._scheduled||(i._scheduled=m.setImmediate(i.flush.bind(i,void 0))))}recycleAsyncId(i,t,n=0){var o;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(i,t,n);const{actions:a}=i;null!=t&&(null===(o=a[a.length-1])||void 0===o?void 0:o.id)!==t&&(m.clearImmediate(t),i._scheduled=void 0)}});var U=r(7579),Q=r(6063);class v extends U.x{constructor(i=1/0,t=1/0,n=Q.l){super(),this._bufferSize=i,this._windowTime=t,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,t)}next(i){const{isStopped:t,_buffer:n,_infiniteTimeWindow:o,_timestampProvider:a,_windowTime:d}=this;t||(n.push(i),!o&&n.push(a.now()+d)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(i),{_infiniteTimeWindow:n,_buffer:o}=this,a=o.slice();for(let d=0;d<a.length&&!i.closed;d+=n?1:2)i.next(a[d]);return this._checkFinalizedStatuses(i),t}_trimBuffer(){const{_bufferSize:i,_timestampProvider:t,_buffer:n,_infiniteTimeWindow:o}=this,a=(o?1:2)*i;if(i<1/0&&a<n.length&&n.splice(0,n.length-a),!o){const d=t.now();let l=0;for(let c=1;c<n.length&&n[c]<=d;c+=2)l=c;l&&n.splice(0,l+1)}}}var Z=r(576);function T(s){return!!s&&(s instanceof I.y||(0,Z.m)(s.lift)&&(0,Z.m)(s.subscribe))}var A=r(9646),E=r(7159),$=r(233),R=r(2843),W=r(9841),G=r(4351),X=r(1365),H=r(4482),q=r(5403),K=r(8421),V=r(5032);function p(s){return(0,H.e)((i,t)=>{(0,K.Xf)(s).subscribe((0,q.x)(t,()=>t.complete(),V.Z)),!t.closed&&i.subscribe(t)})}var k=r(5698),C=r(4004),_=r(1884),ee=r(3099),e=r(7587);function D(){return s=>new I.y(i=>{let t,n;const o=new j.w0;return o.add(s.subscribe({complete:()=>{t&&i.next(n),i.complete()},error:a=>{i.error(a)},next:a=>{n=a,t||(t=L.schedule(()=>{i.next(n),t=void 0}),o.add(t))}})),o})}const se=new e.OlP("@ngrx/component-store Initial State");let ie=(()=>{class s{constructor(t){this.destroySubject$=new v(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new v(1),this.isInitialized=!1,this.notInitializedErrorMessage=`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`,this.state$=this.select(n=>n),t&&this.initState(t)}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(t){return n=>{let o;const d=(T(n)?n:(0,A.of)(n)).pipe((0,G.b)(l=>this.isInitialized?(0,E.x)([l],$.N).pipe((0,X.M)(this.stateSubject$)):(0,R._)(()=>new Error(this.notInitializedErrorMessage))),p(this.destroy$)).subscribe({next:([l,c])=>{this.stateSubject$.next(t(c,l))},error:l=>{o=l,this.stateSubject$.error(l)}});if(o)throw o;return d}}initState(t){(0,E.x)([t],$.N).subscribe(n=>{this.isInitialized=!0,this.stateSubject$.next(n)})}setState(t){"function"!=typeof t?this.initState(t):this.updater(t)()}patchState(t){const n="function"==typeof t?t(this.get()):t;this.updater((o,a)=>Object.assign(Object.assign({},o),a))(n)}get(t){if(!this.isInitialized)throw new Error(this.notInitializedErrorMessage);let n;return this.stateSubject$.pipe((0,k.q)(1)).subscribe(o=>{n=t?t(o):o}),n}select(...t){const{observables:n,projector:o,config:a}=function ne(s){const i=Array.from(s);let n,t={debounce:!1};const o=i.pop();return"function"!=typeof o?(t=Object.assign(Object.assign({},t),o),n=i.pop()):n=o,{observables:i,projector:n,config:t}}(t);let d;return d=0===n.length?this.stateSubject$.pipe(a.debounce?D():l=>l,(0,C.U)(l=>o(l))):(0,W.a)(n).pipe(a.debounce?D():l=>l,(0,C.U)(l=>o(...l))),d.pipe((0,_.x)(),function te(s,i,t){let n,o=!1;return s&&"object"==typeof s?({bufferSize:n=1/0,windowTime:i=1/0,refCount:o=!1,scheduler:t}=s):n=null!=s?s:1/0,(0,ee.B)({connector:()=>new v(n,i,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}({refCount:!0,bufferSize:1}),p(this.destroy$))}effect(t){const n=new U.x;return t(n).pipe(p(this.destroy$)).subscribe(),o=>(T(o)?o:(0,A.of)(o)).pipe(p(this.destroy$)).subscribe(d=>{n.next(d)})}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(se,8))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})();var M=r(1135),b=r(520);let P=(()=>{class s extends ie{constructor(t){super({users:[{username:"zahoidul",email:"asdasd",phone:12121,coin:1231,Id:"121",address:"sads",Password:"asda"},{username:"zahoidul",email:"asdasd",phone:12121,coin:1231,Id:"121",address:"sads",Password:"asda"}]}),this.http=t,this.userslist$=new M.X([]),this.users$=this.select(n=>n.users)}init(){this.http.get("https://localhost:44339/api/users/").subscribe(t=>{this.userslist$.next(t),this.temp=11},t=>{console.log(t),this.temp=1})}getUsers(){return this.userslist$}tempuser(){return this.temp}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(b.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})();var oe=r(1074),re=r(8241);let ae=(()=>{class s{constructor(t){this.http=t,this.usersser$=new M.X([])}init(){this.http.get("https://localhost:44339/api/users.json").subscribe(t=>this.usersser$.next(t))}getusersfromstore(){return this.usersser$}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(b.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function le(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",14)(1,"form",15),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().OnSubmit()}),e.TgZ(2,"div",16)(3,"div",17)(4,"label",18),e._uU(5,"Username"),e.qZA(),e._UZ(6,"input",19),e.qZA(),e.TgZ(7,"div",17)(8,"label",18),e._uU(9,"Email address"),e.qZA(),e._UZ(10,"input",20),e.qZA(),e.TgZ(11,"div",17)(12,"label",18),e._uU(13,"Phone"),e.qZA(),e._UZ(14,"input",21),e.qZA(),e.TgZ(15,"div",17)(16,"label",18),e._uU(17,"Address"),e.qZA(),e._UZ(18,"input",22),e.qZA()(),e.TgZ(19,"div",23)(20,"button",24),e._uU(21," Submit"),e.qZA()()()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.userEditedForm),e.xp6(5),e.Q6J("ngModel",t.userinfo.username),e.xp6(4),e.Q6J("ngModel",t.userinfo.email),e.xp6(4),e.Q6J("ngModel",t.userinfo.phone),e.xp6(4),e.Q6J("ngModel",t.userinfo.address)}}function de(s,i){if(1&s&&(e.TgZ(0,"div",14)(1,"div",2)(2,"div",14)(3,"label"),e._uU(4,"Username"),e.qZA()(),e.TgZ(5,"div",14)(6,"p"),e._uU(7),e.qZA()()(),e.TgZ(8,"div",2)(9,"div",14)(10,"label"),e._uU(11,"Email address"),e.qZA()(),e.TgZ(12,"div",14)(13,"p"),e._uU(14),e.qZA()()(),e.TgZ(15,"div",2)(16,"div",14)(17,"label"),e._uU(18,"Phone"),e.qZA()(),e.TgZ(19,"div",14)(20,"p"),e._uU(21),e.qZA()()(),e.TgZ(22,"div",2)(23,"div",14)(24,"label"),e._uU(25,"Address"),e.qZA()(),e.TgZ(26,"div",14)(27,"p"),e._uU(28),e.qZA()()()()),2&s){const t=e.oxw();e.xp6(7),e.Oqu(t.userinfo.username),e.xp6(7),e.Oqu(t.userinfo.email),e.xp6(7),e.Oqu(t.userinfo.phone),e.xp6(7),e.Oqu(t.userinfo.address)}}const ue=[{path:"",redirectTo:"MainDashboard",pathMatch:"full"},{path:"MainDashboard",component:(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-dashboard"]],decls:3,vars:0,consts:[["align","center"]],template:function(t,n){1&t&&(e.TgZ(0,"h3",0),e._uU(1," Welcome To binimoy"),e.qZA(),e._UZ(2,"router-outlet"))},directives:[h.lC],styles:[""]}),s})(),children:[{path:"userProfile",component:(()=>{class s{constructor(t,n,o,a,d,l){this.auther=t,this.router=n,this.userStr=o,this.storeSer=a,this.http=d,this.newStoreSer=l,this.usersstore$=this.userStr.users$,this.toggleText="Edit",this.toggleUserDetailOrEditStatus=!0}ngOnInit(){this.userinfo=JSON.parse(sessionStorage.getItem("SigninData")),this.userinfo.coin=this.userinfo.coin.toFixed(2),this.userEditedForm=new u.cw({username:new u.NI(null),email:new u.NI(null),phone:new u.NI(null),address:new u.NI(null)}),this.newusers$=this.newStoreSer.getusersfromstore(),console.log(this.newusers$),this.newusers$.subscribe(n=>console.log(n))}toggleUserDetailOrEdit(){this.toggleUserDetailOrEditStatus=!this.toggleUserDetailOrEditStatus,this.toggleText=this.toggleUserDetailOrEditStatus?"Edit":"Details"}OnSubmit(){var t;(t=this.userEditedForm.value).Id=this.userinfo.Id,t.Password=this.userinfo.Password,t.coin=this.userinfo.coin,console.log(t),sessionStorage.setItem("EditedData",JSON.stringify(t)),console.log(sessionStorage.getItem("EditedData")),this.userinfo=t,sessionStorage.setItem("editedUsersInfo",JSON.stringify(t)),this.storeSer.SessionStorageSet(t),this.auther.UserEdit(this.userinfo.Id,t).subscribe(n=>{alert("Account Updated successfully!"),this.toggleUserDetailOrEdit()},n=>{console.log(n),alert("Can not Update! Server Issue!")})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(oe.e),e.Y36(h.F0),e.Y36(P),e.Y36(re.g),e.Y36(b.eN),e.Y36(ae))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-user-profile"]],features:[e._Bn([P])],decls:24,vars:5,consts:[[1,"content"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"invoice","p-3","mb-3"],[1,"container","emp-profile"],["method","post"],[1,"col-md-10"],[1,"profile-head"],["id","myTab","role","tablist",1,"nav","nav-tabs"],[1,"nav-item"],["id","bt",1,"nav-link","active",3,"click"],[1,"col-md-2"],["class","col-md-6",4,"ngIf"],[1,"col-md-6"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","email","formControlName","username","id","exampleInputEmail1","placeholder","Enter Username",1,"form-control",3,"ngModel"],["type","text","formControlName","email","id","exampleInputEmail1","placeholder","Enter email",1,"form-control",3,"ngModel"],["type","text","formControlName","phone","id","exampleInputEmail1","placeholder","Enter Phone",1,"form-control",3,"ngModel"],["type","text","formControlName","address","id","exampleInputEmail1","placeholder","Enter Address",1,"form-control",3,"ngModel"],[1,"card-footer"],["type","submit",1,"btn","btn-primary"]],template:function(t,n){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"form",6)(7,"div",2)(8,"div",7)(9,"div",8)(10,"h4")(11,"b"),e._uU(12),e.qZA()(),e.TgZ(13,"h5"),e._uU(14),e.qZA(),e.TgZ(15,"ul",9)(16,"li",10)(17,"button",11),e.NdJ("click",function(){return n.toggleUserDetailOrEdit()}),e._uU(18),e.qZA()()()()(),e._UZ(19,"div",12),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"div",2),e.YNc(22,le,22,5,"div",13),e.YNc(23,de,29,4,"div",13),e.qZA()()()()()()()()),2&t&&(e.xp6(12),e.Oqu(n.userinfo.username),e.xp6(2),e.hij(" BP- ",n.userinfo.coin," "),e.xp6(4),e.hij(" ",n.toggleText," "),e.xp6(4),e.Q6J("ngIf",!n.toggleUserDetailOrEditStatus),e.xp6(1),e.Q6J("ngIf",n.toggleUserDetailOrEditStatus))},directives:[u._Y,u.JL,u.F,y.O5,u.sg,u.Fj,u.JJ,u.u],styles:[""]}),s})()}]}];let ce=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[h.Bz.forChild(ue)],h.Bz]}),s})(),he=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[y.ez,ce]]}),s})()}}]);