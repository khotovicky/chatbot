(function(){"use strict";var e={362:function(e,n,t){var i=t(9242),o=t(3396);const r={class:"chat-window"};function l(e,n,t,i,l,a){const s=(0,o.up)("chatWindow");return(0,o.wg)(),(0,o.iD)(o.HY,null,["user"===i.mode?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:n[0]||(n[0]=()=>i.mode="admin")}," Войти как администратор ")):((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:n[1]||(n[1]=()=>i.mode="user")},"Войти как пользователь")),(0,o._)("div",r,[(0,o.Wm)(s,{mode:i.mode},null,8,["mode"])])],64)}var a=t(4870);const s={key:0,class:"flex"},c={key:1,class:"flex"};function d(e,n,t,i,r,l){const a=(0,o.up)("theDialog"),d=(0,o.up)("UserAnswerOptions"),u=(0,o.up)("BotReplica");return"user"===i.props.mode?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(a,{dialog:i.dialog},null,8,["dialog"]),(0,o.Wm)(d,{options:i.currentDialogPiece.userAnswerOptions,onHandleSelect:n[0]||(n[0]=e=>{i.handleOptionSelection(e),i.addReplicaToDialog()}),needBackButton:i.needBackButton,onGoBack:n[1]||(n[1]=()=>{i.goBack(),i.updateDialogBeginning(!1)})},null,8,["options","needBackButton"])])):((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(u,{botReplica:i.currentDialogPiece.botReplica,onChange:n[2]||(n[2]=e=>{i.currentDialogPiece.botReplica=e,i.updateDialogBeginning(!0)})},null,8,["botReplica"]),(0,o.Wm)(d,{options:i.currentDialogPiece.userAnswerOptions,onHandleSelect:i.handleOptionSelection,needBackButton:i.needBackButton,onGoBack:n[3]||(n[3]=()=>{i.goBack(),i.updateDialogBeginning(!0)}),redactor:!0,onDelete:i.deleteAnswerOption,onAdd:i.addUserAnswerOption},null,8,["options","onHandleSelect","needBackButton","onDelete","onAdd"])]))}t(560);function u(e){let n="";if("0"===e.idForNextChild.slice(-2,-1)){let n=Number(e.idForNextChild.slice(-1));return n++,10===n?e.idForNextChild.slice(0,-2)+n:e.idForNextChild.slice(0,-1)+n}let t=Number(e.idForNextChild.slice(-2));return t++,n=e.idForNextChild.slice(0,-2)+t,n}function p(e,n){const t=[];return n.forEach((function(n){n.id.startsWith(e)||t.push(n)})),n=t,n}const v=[{id:"01",botReplica:"Привет, студент! Чем могу служить?",userAnswerOptions:[{id:"0101",text:"Открой учебник по истории южных и западных славян"},{id:"0102",text:"Напомни время работы столовой на 1 этаже Шуваловского корпуса"},{id:"0103",text:"Дай ссылку на большой словарь польского языка"}],idForNextChild:"0104"},{id:"0101",userReplica:"Открой учебник по истории южных и западных славян",botReplica:"Открываю",userAnswerOptions:[],idForNextChild:"010101"},{id:"0102",userReplica:"Напомни время работы столовой на 1 этаже Шуваловского корпуса",botReplica:"9.00 - 18.00",userAnswerOptions:[],idForNextChild:"010201"},{id:"0103",userReplica:"Дай ссылку на большой словарь польского языка",botReplica:"wsjp.pl",userAnswerOptions:[],idForNextChild:"010301"}];var g=t(7139);function w(e,n,t,i,r,l){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.props.dialog,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,g.C_)(["replica",e.class]),key:n},(0,g.zw)(e.text),3)))),128)}var f={name:"theDialog",props:["dialog"],setup(e){return{props:e}}},b=t(89);const h=(0,b.Z)(f,[["render",w],["__scopeId","data-v-86c6df0c"]]);var m=h;const k={class:"user-answer-options"},x={key:0,class:"left"};function O(e,n,t,i,r,l){const a=(0,o.up)("AnswerOption"),s=(0,o.up)("AddingNewDialogPieceForm");return(0,o.wg)(),(0,o.iD)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.props.options,((n,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o.Wm)(a,{class:"answer",answerOption:n,index:t,redactor:i.props.redactor,onHandleSelect:t=>e.$emit("handle-select",n),onDelete:n=>e.$emit("delete",t)},null,8,["answerOption","index","redactor","onHandleSelect","onDelete"])])))),128)),i.props.redactor?((0,o.wg)(),(0,o.iD)("div",x,[(0,o.Wm)(s,{onAdd:n[0]||(n[0]=(n,t)=>e.$emit("add",n,t)),class:"add-form"})])):(0,o.kq)("",!0),i.props.needBackButton?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:n[1]||(n[1]=n=>e.$emit("go-back"))},"Назад")):(0,o.kq)("",!0)])}const D={key:0,class:"flex"},R={key:0,class:"redactor"},_={key:1};function C(e,n,t,r,l,a){return!1===r.isEditing?((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("button",{onClick:n[0]||(n[0]=n=>e.$emit("handle-select",r.props.answerOption)),class:"button"},(0,g.zw)(r.props.answerOption.text),1),r.props.redactor?((0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("button",{onClick:n[1]||(n[1]=e=>r.isEditing=!0),class:"redactor-item blue"}," Изменить "),(0,o._)("button",{onClick:n[2]||(n[2]=n=>e.$emit("delete",r.props.index)),class:"redactor-item red"}," Удалить ")])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",_,[(0,o.wy)((0,o._)("textarea",{class:"redactor-input","onUpdate:modelValue":n[3]||(n[3]=e=>r.props.answerOption.text=e)},null,512),[[i.nr,r.props.answerOption.text]]),(0,o._)("button",{class:"redactor",onClick:n[4]||(n[4]=e=>r.isEditing=!1)},"Сохранить")]))}var A={name:"answerOption",props:["answerOption","index","redactor"],emits:["handle-select","delete"],setup(e){const n=(0,a.iH)(!1);return{props:e,isEditing:n}}};const B=(0,b.Z)(A,[["render",C]]);var y=B;const F=e=>((0,o.dD)("data-v-fd1971bc"),e=e(),(0,o.Cn)(),e),N={key:1,class:"flex"},H=F((()=>(0,o._)("div",null,"Введите реплику пользователя:",-1))),P=F((()=>(0,o._)("div",null,"Введите реплику бота:",-1))),W={class:"width30"};function E(e,n,t,r,l,a){return!1===r.isAdding?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:n[0]||(n[0]=()=>{r.isAdding=!0,r.userReplica="",r.botReplica=""}),class:"italic"}," Добавить ответ пользователя ")):((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",null,[H,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.userReplica=e)},null,512),[[i.nr,r.userReplica]]),P,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>r.botReplica=e)},null,512),[[i.nr,r.botReplica]])]),(0,o._)("div",W,[(0,o._)("button",{onClick:n[3]||(n[3]=()=>{r.isAdding=!1,e.$emit("add",r.userReplica,r.botReplica)}),class:"green max-width"}," Сохранить "),(0,o._)("button",{onClick:n[4]||(n[4]=e=>r.isAdding=!1),class:"red max-width"},"Отменить")])]))}var S={name:"addingNewDialogPieceForm",emits:["add"],setup(){const e=(0,a.iH)(!1),n=(0,a.iH)(""),t=(0,a.iH)("");return{isAdding:e,userReplica:n,botReplica:t}}};const U=(0,b.Z)(S,[["render",E],["__scopeId","data-v-fd1971bc"]]);var $=U,j={name:"userAnswerOptions",props:["options","needBackButton","redactor"],emits:["handle-select","go-back","delete","add"],components:{AnswerOption:y,AddingNewDialogPieceForm:$},setup(e){return{props:e}}};const Z=(0,b.Z)(j,[["render",O],["__scopeId","data-v-3909fa34"]]);var I=Z;const T=e=>((0,o.dD)("data-v-08382232"),e=e(),(0,o.Cn)(),e),V={key:0,class:"replica"},Y={key:1,class:"row"},q=T((()=>(0,o._)("div",null,"Реплика бота:",-1)));function z(e,n,t,r,l,a){return!1===r.isEditing?((0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("p",null,(0,g.zw)(r.props.botReplica),1),(0,o._)("button",{onClick:n[0]||(n[0]=()=>{r.isEditing=!0,r.text=r.props.botReplica}),class:"right-self blue"}," Изменить ")])):((0,o.wg)(),(0,o.iD)("div",Y,[(0,o._)("div",null,[q,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.text=e)},null,512),[[i.nr,r.text]])]),(0,o._)("div",null,[(0,o._)("button",{onClick:n[2]||(n[2]=()=>{e.$emit("change",r.text),r.isEditing=!1}),class:"green margin3"}," Сохранить ")])]))}var G={name:"botReplica",props:["botReplica"],emits:["change"],setup(e){const n=(0,a.iH)(!1),t=(0,a.iH)(""),i=(0,o.Fl)((()=>e.botReplica));return(0,o.YP)(i,(()=>{n.value=!1})),{props:e,isEditing:n,text:t}}};const K=(0,b.Z)(G,[["render",z],["__scopeId","data-v-08382232"]]);var M=K;const J=(0,a.iH)(v),L=(0,a.iH)(J.value[0].id),Q=(0,o.Fl)((()=>{const e=J.value.find((({id:e})=>e===L.value));return e})),X=(0,a.iH)([{text:Q.value.botReplica,class:"botReplica"}]),ee=(0,o.Fl)((()=>"01"!==Q.value.id));function ne(){X.value.push({text:Q.value.userReplica,class:"userReplica"},{text:Q.value.botReplica,class:"botReplica"})}function te(e){console.log(Q.value),L.value=e.id,console.log(Q.value)}function ie(){const e=String(L.value).slice(0,L.value.length-2);L.value=e}function oe(e){const n={text:Q.value.botReplica,class:"botReplica"};e?X.value=[n]:X.value.push(n)}function re(e){Q.value.userAnswerOptions[e].id<Q.value.idForNextChild&&(Q.value.idForNextChild=Q.value.userAnswerOptions[e].id),J.value=p(Q.value.userAnswerOptions[e].id,J.value),Q.value.userAnswerOptions.splice(e,1)}function le(e,n){const t={id:Q.value.idForNextChild,text:e};Q.value.userAnswerOptions.push(t),Q.value.idForNextChild=u(Q.value),J.value.push({id:t.id,userReplica:e,botReplica:n,userAnswerOptions:[],idForNextChild:t.id+"01"})}var ae={name:"chatWindow",props:["mode"],components:{theDialog:m,UserAnswerOptions:I,BotReplica:M},setup(e){return{props:e,dialog:X,currentDialogPiece:Q,goBack:ie,updateDialogBeginning:oe,deleteAnswerOption:re,addUserAnswerOption:le,handleOptionSelection:te,needBackButton:ee,addReplicaToDialog:ne}}};const se=(0,b.Z)(ae,[["render",d],["__scopeId","data-v-11236a82"]]);var ce=se;const de=(0,a.iH)("user");var ue={name:"App",components:{chatWindow:ce},setup(){return{mode:de}}};const pe=(0,b.Z)(ue,[["render",l]]);var ve=pe;(0,i.ri)(ve).mount("#app")}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,r){if(!i){var l=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],r=e[d][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[s])}))?i.splice(s--,1):(a=!1,r<l&&(l=r));if(a){e.splice(d--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,r,l=i[0],a=i[1],s=i[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var d=s(t)}for(n&&n(i);c<l.length;c++)r=l[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},i=self["webpackChunkchatbot"]=self["webpackChunkchatbot"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(362)}));i=t.O(i)})();
//# sourceMappingURL=app.685dc6b7.js.map