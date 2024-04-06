"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[604],{1897:(wt,I,h)=>{h.d(I,{H:()=>m});var r=h(5592),w=h(7394);class P extends w.w0{constructor(a,u){super()}schedule(a,u=0){return this}}const b={setInterval(d,a,...u){const{delegate:c}=b;return c?.setInterval?c.setInterval(d,a,...u):setInterval(d,a,...u)},clearInterval(d){const{delegate:a}=b;return(a?.clearInterval||clearInterval)(d)},delegate:void 0};var k=h(9039);const V={now:()=>(V.delegate||Date).now(),delegate:void 0};class v{constructor(a,u=v.now){this.schedulerActionCtor=a,this.now=u}schedule(a,u=0,c){return new this.schedulerActionCtor(this,a).schedule(c,u)}}v.now=V.now;const H=new class G extends v{constructor(a,u=v.now){super(a,u),this.actions=[],this._active=!1}flush(a){const{actions:u}=this;if(this._active)return void u.push(a);let c;this._active=!0;do{if(c=a.execute(a.state,a.delay))break}while(a=u.shift());if(this._active=!1,c){for(;a=u.shift();)a.unsubscribe();throw c}}}(class T extends P{constructor(a,u){super(a,u),this.scheduler=a,this.work=u,this.pending=!1}schedule(a,u=0){var c;if(this.closed)return this;this.state=a;const g=this.id,_=this.scheduler;return null!=g&&(this.id=this.recycleAsyncId(_,g,u)),this.pending=!0,this.delay=u,this.id=null!==(c=this.id)&&void 0!==c?c:this.requestAsyncId(_,this.id,u),this}requestAsyncId(a,u,c=0){return b.setInterval(a.flush.bind(a,this),c)}recycleAsyncId(a,u,c=0){if(null!=c&&this.delay===c&&!1===this.pending)return u;null!=u&&b.clearInterval(u)}execute(a,u){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const c=this._execute(a,u);if(c)return c;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(a,u){let g,c=!1;try{this.work(a)}catch(_){c=!0,g=_||new Error("Scheduled action threw falsy error")}if(c)return this.unsubscribe(),g}unsubscribe(){if(!this.closed){const{id:a,scheduler:u}=this,{actions:c}=u;this.work=this.state=this.scheduler=null,this.pending=!1,(0,k.P)(c,this),null!=a&&(this.id=this.recycleAsyncId(u,a,null)),this.delay=null,super.unsubscribe()}}});var U=h(671);function m(d=0,a,u=H){let c=-1;return null!=a&&((0,U.K)(a)?u=a:c=a),new r.y(g=>{let _=function C(d){return d instanceof Date&&!isNaN(d)}(d)?+d-u.now():d;_<0&&(_=0);let A=0;return u.schedule(function(){g.closed||(g.next(A++),0<=c?this.schedule(void 0,c):g.complete())},_)})}},7921:(wt,I,h)=>{h.d(I,{X:()=>T});var r=h(9360),w=h(8251),P=h(2737),b=h(1897),k=h(4829);function T(V=1/0){let v;v=V&&"object"==typeof V?V:{count:V};const{count:G=1/0,delay:F,resetOnSuccess:H=!1}=v;return G<=0?P.y:(0,r.e)((U,C)=>{let d,m=0;const a=()=>{let u=!1;d=U.subscribe((0,w.x)(C,c=>{H&&(m=0),C.next(c)},void 0,c=>{if(m++<G){const g=()=>{d?(d.unsubscribe(),d=null,a()):u=!0};if(null!=F){const _="number"==typeof F?(0,b.H)(F):(0,k.Xf)(F(c,m)),A=(0,w.x)(C,()=>{A.unsubscribe(),g()},()=>{C.complete()});_.subscribe(A)}else g()}else C.error(c)})),u&&(d.unsubscribe(),d=null,a())};a()})}},95:(wt,I,h)=>{h.d(I,{Fj:()=>A,qu:()=>An,u:()=>At,sg:()=>rt,u5:()=>Dn,JU:()=>d,a5:()=>D,JJ:()=>Xt,JL:()=>Zt,On:()=>yt,UX:()=>bn,kI:()=>xe,_Y:()=>de});var r=h(4946),w=h(6814),P=h(7715),b=h(5592),k=h(7453),T=h(4829),V=h(9940),v=h(8251),G=h(7400),F=h(2714),U=h(7398);let C=(()=>{class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq))};static#e=this.\u0275dir=r.lG2({type:e})}return e})(),m=(()=>{class e extends C{static#t=this.\u0275fac=function(){let t;return function(s){return(t||(t=r.n5z(e)))(s||e)}}();static#e=this.\u0275dir=r.lG2({type:e,features:[r.qOj]})}return e})();const d=new r.OlP("NgValueAccessor"),c={provide:d,useExisting:(0,r.Gpc)(()=>A),multi:!0},_=new r.OlP("CompositionEventMode");let A=(()=>{class e extends C{constructor(t,i,s){super(t,i),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function g(){const e=(0,w.q)()?(0,w.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(_,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,s){1&i&&r.NdJ("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[r._Bn([c]),r.qOj]})}return e})();function M(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function Ft(e){return null!=e&&"number"==typeof e.length}const f=new r.OlP("NgValidators"),E=new r.OlP("NgAsyncValidators"),Ge=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class xe{static min(n){return function Ot(e){return n=>{if(M(n.value)||M(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function St(e){return n=>{if(M(n.value)||M(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function Nt(e){return M(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function Gt(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function xt(e){return M(e.value)||Ge.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function Bt(e){return n=>M(n.value)||!Ft(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function It(e){return n=>Ft(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function Pt(e){if(!e)return z;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(M(i.value))return null;const s=i.value;return n.test(s)?null:{pattern:{requiredPattern:t,actualValue:s}}}}(n)}static nullValidator(n){return null}static compose(n){return jt(n)}static composeAsync(n){return Lt(n)}}function z(e){return null}function kt(e){return null!=e}function Tt(e){return(0,r.QGY)(e)?(0,P.D)(e):e}function Ht(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Ut(e,n){return n.map(t=>t(e))}function Rt(e){return e.map(n=>function Be(e){return!e.validate}(n)?n:t=>n.validate(t))}function jt(e){if(!e)return null;const n=e.filter(kt);return 0==n.length?null:function(t){return Ht(Ut(t,n))}}function ot(e){return null!=e?jt(Rt(e)):null}function Lt(e){if(!e)return null;const n=e.filter(kt);return 0==n.length?null:function(t){return function H(...e){const n=(0,V.jO)(e),{args:t,keys:i}=(0,k.D)(e),s=new b.y(o=>{const{length:l}=t;if(!l)return void o.complete();const y=new Array(l);let N=l,B=l;for(let st=0;st<l;st++){let Et=!1;(0,T.Xf)(t[st]).subscribe((0,v.x)(o,Mn=>{Et||(Et=!0,B--),y[st]=Mn},()=>N--,void 0,()=>{(!N||!Et)&&(B||o.next(i?(0,F.n)(i,y):y),o.complete())}))}});return n?s.pipe((0,G.Z)(n)):s}(Ut(t,n).map(Tt)).pipe((0,U.U)(Ht))}}function at(e){return null!=e?Lt(Rt(e)):null}function Yt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Wt(e){return e._rawValidators}function qt(e){return e._rawAsyncValidators}function lt(e){return e?Array.isArray(e)?e:[e]:[]}function J(e,n){return Array.isArray(e)?e.includes(n):e===n}function $t(e,n){const t=lt(n);return lt(e).forEach(s=>{J(t,s)||t.push(s)}),t}function zt(e,n){return lt(n).filter(t=>!J(e,t))}class Jt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ot(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class p extends Jt{get formDirective(){return null}get path(){return null}}class D extends Jt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Kt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Xt=(()=>{class e extends Kt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(D,2))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,s){2&i&&r.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[r.qOj]})}return e})(),Zt=(()=>{class e extends Kt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(p,10))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,s){2&i&&r.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[r.qOj]})}return e})();const R="VALID",X="INVALID",x="PENDING",j="DISABLED";function dt(e){return(Z(e)?e.validators:e)||null}function ht(e,n){return(Z(n)?n.asyncValidators:e)||null}function Z(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function te(e,n,t){const i=e.controls;if(!(n?Object.keys(i):i).length)throw new r.vHH(1e3,"");if(!i[t])throw new r.vHH(1001,"")}function ee(e,n,t){e._forEachChild((i,s)=>{if(void 0===t[s])throw new r.vHH(1002,"")})}class Q{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===R}get invalid(){return this.status===X}get pending(){return this.status==x}get disabled(){return this.status===j}get enabled(){return this.status!==j}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators($t(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators($t(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(zt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(zt(n,this._rawAsyncValidators))}hasValidator(n){return J(this._rawValidators,n)}hasAsyncValidator(n){return J(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=x,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=j,this.errors=null,this._forEachChild(i=>{i.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=R,this._forEachChild(i=>{i.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===R||this.status===x)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:R}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator=!0;const t=Tt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((i,s)=>i&&i._find(s),this)}getError(n,t){const i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?X:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(X)?X:R}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Z(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Te(e){return Array.isArray(e)?ot(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function He(e){return Array.isArray(e)?at(e):e||null}(this._rawAsyncValidators)}}class L extends Q{constructor(n,t,i){super(dt(t),ht(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){ee(this,0,n),Object.keys(n).forEach(i=>{te(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(i=>{const s=this.controls[i];s&&s.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,s)=>{i.reset(n?n[s]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>!!i._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,s)=>((i.enabled||this.disabled)&&(t[s]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((s,o)=>{i=t(i,s,o)}),i}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}class ne extends L{}const O=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>Y}),Y="always";function tt(e,n){return[...n.path,e]}function W(e,n,t=Y){ft(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Re(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&ie(e,n)})}(e,n),function Le(e,n){const t=(i,s)=>{n.valueAccessor.writeValue(i),s&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function je(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&ie(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Ue(e,n){if(n.valueAccessor.setDisabledState){const t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function et(e,n,t=!0){const i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),it(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function nt(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function ft(e,n){const t=Wt(e);null!==n.validator?e.setValidators(Yt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const i=qt(e);null!==n.asyncValidator?e.setAsyncValidators(Yt(i,n.asyncValidator)):"function"==typeof i&&e.setAsyncValidators([i]);const s=()=>e.updateValueAndValidity();nt(n._rawValidators,s),nt(n._rawAsyncValidators,s)}function it(e,n){let t=!1;if(null!==e){if(null!==n.validator){const s=Wt(e);if(Array.isArray(s)&&s.length>0){const o=s.filter(l=>l!==n.validator);o.length!==s.length&&(t=!0,e.setValidators(o))}}if(null!==n.asyncValidator){const s=qt(e);if(Array.isArray(s)&&s.length>0){const o=s.filter(l=>l!==n.asyncValidator);o.length!==s.length&&(t=!0,e.setAsyncValidators(o))}}}const i=()=>{};return nt(n._rawValidators,i),nt(n._rawAsyncValidators,i),t}function ie(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function gt(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}function mt(e,n){if(!n)return null;let t,i,s;return Array.isArray(n),n.forEach(o=>{o.constructor===A?t=o:function qe(e){return Object.getPrototypeOf(e.constructor)===m}(o)?i=o:s=o}),s||i||t||null}function oe(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function ae(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const $=class extends Q{constructor(n=null,t,i){super(dt(t),ht(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=ae(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){oe(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){oe(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){ae(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},Xe={provide:D,useExisting:(0,r.Gpc)(()=>yt)},ce=(()=>Promise.resolve())();let yt=(()=>{class e extends D{constructor(t,i,s,o,l,y){super(),this._changeDetectorRef=l,this.callSetDisabledState=y,this.control=new $,this._registered=!1,this.name="",this.update=new r.vpe,this._parent=t,this._setValidators(i),this._setAsyncValidators(s),this.valueAccessor=mt(0,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),gt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){W(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ce.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const i=t.isDisabled.currentValue,s=0!==i&&(0,r.VuI)(i);ce.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?tt(t,this._parent):[t]}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(p,9),r.Y36(f,10),r.Y36(E,10),r.Y36(d,10),r.Y36(r.sBO,8),r.Y36(O,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r._Bn([Xe]),r.qOj,r.TTD]})}return e})(),de=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})(),fe=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({})}return e})();const vt=new r.OlP("NgModelWithFormControlWarning"),rn={provide:p,useExisting:(0,r.Gpc)(()=>rt)};let rt=(()=>{class e extends p{constructor(t,i,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(it(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const i=this.form.get(t.path);return W(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){et(t.control||null,t,!1),function $e(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this.submitted=!0,function se(e,n){e._syncPendingControls(),n.forEach(t=>{const i=t.control;"submit"===i.updateOn&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const i=t.control,s=this.form.get(t.path);i!==s&&(et(i||null,t),(e=>e instanceof $)(s)&&(W(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const i=this.form.get(t.path);(function re(e,n){ft(e,n)})(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const i=this.form.get(t.path);i&&function Ye(e,n){return it(e,n)}(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ft(this.form,this),this._oldForm&&it(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(f,10),r.Y36(E,10),r.Y36(O,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,s){1&i&&r.NdJ("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([rn]),r.qOj,r.TTD]})}return e})();const an={provide:D,useExisting:(0,r.Gpc)(()=>At)};let At=(()=>{class e extends D{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,i,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new r.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(i),this._setAsyncValidators(s),this.valueAccessor=mt(0,o)}ngOnChanges(t){this._added||this._setUpControl(),gt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return tt(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(i){return new(i||e)(r.Y36(p,13),r.Y36(f,10),r.Y36(E,10),r.Y36(d,10),r.Y36(vt,8))};static#n=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r._Bn([an]),r.qOj,r.TTD]})}return e})(),Oe=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[fe]})}return e})();class Se extends Q{constructor(n,t,i){super(dt(t),ht(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let s=this._adjustIndex(n);s<0&&(s=0),this.controls[s]&&this.controls[s]._registerOnCollectionChange(()=>{}),this.controls.splice(s,1),t&&(this.controls.splice(s,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){ee(this,0,n),n.forEach((i,s)=>{te(this,!1,s),this.at(s).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(n.forEach((i,s)=>{this.at(s)&&this.at(s).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,s)=>{i.reset(n[s],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>!!i._syncPendingControls()||t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}}function Ne(e){return!!e&&(void 0!==e.asyncValidators||void 0!==e.validators||void 0!==e.updateOn)}let An=(()=>{class e{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new e;return t.useNonNullable=!0,t}group(t,i=null){const s=this._reduceControls(t);let o={};return Ne(i)?o=i:null!==i&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new L(s,o)}record(t,i=null){const s=this._reduceControls(t);return new ne(s,i)}control(t,i,s){let o={};return this.useNonNullable?(Ne(i)?o=i:(o.validators=i,o.asyncValidators=s),new $(t,{...o,nonNullable:!0})):new $(t,i,s)}array(t,i,s){const o=t.map(l=>this._createControl(l));return new Se(o,i,s)}_reduceControls(t){const i={};return Object.keys(t).forEach(s=>{i[s]=this._createControl(t[s])}),i}_createControl(t){return t instanceof $||t instanceof Q?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Dn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:O,useValue:t.callSetDisabledState??Y}]}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[Oe]})}return e})(),bn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:vt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:O,useValue:t.callSetDisabledState??Y}]}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[Oe]})}return e})()}}]);