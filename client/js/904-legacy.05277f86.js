"use strict";(self["webpackChunkvuetify_material_dashboard"]=self["webpackChunkvuetify_material_dashboard"]||[]).push([[904],{5904:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var a=i(3381),s=i(7024),r=i(6530),n=i(3240),l=i(7894),o=i(3890),d=i(9007),u=function(){var t=this,e=t._self._c;return e(r.Z,{attrs:{id:"user-profile",fluid:"",tag:"section"}},[e(l.Z,{attrs:{justify:"center"}},[e(s.Z,{attrs:{cols:"12",md:"8"}},[e("base-material-card",{scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v(" "+t._s(t.getFormTitle)+" ")])]},proxy:!0}])},[t.itemLoader?e(o.Z,{attrs:{type:"list-item@2, actions"}}):e(n.Z,{model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[e(r.Z,{staticClass:"py-0"},[e(l.Z,[e(s.Z,{attrs:{cols:"12"}},[e(d.Z,{staticClass:"purple-input",attrs:{label:"Nombre del Item",rules:t.stringRule,disabled:t.shouldDisableForm},model:{value:t.itemForm.name,callback:function(e){t.$set(t.itemForm,"name",e)},expression:"itemForm.name"}})],1),e(s.Z,{attrs:{cols:"12"}},[e(d.Z,{staticClass:"purple-input",attrs:{label:"Cantidad",type:"number",rules:t.numberRule},model:{value:t.itemForm.quantity,callback:function(e){t.$set(t.itemForm,"quantity",t._n(e))},expression:"itemForm.quantity"}})],1),e(s.Z,{staticClass:"text-right",attrs:{cols:"12"}},[e(a.Z,{attrs:{depressed:"",color:"warning"},on:{click:function(e){return t.$router.push("/inventario")}}},[t._v(" Regresar ")]),e(a.Z,{staticClass:"mr-0",attrs:{color:"success",disabled:!t.validForm},on:{click:t.handleSubmitItem}},[t._v(" "+t._s(t.getFormTitle)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)},h=[],c=i(629),m={name:"InventarioForm",data(){return{itemForm:{name:"",quantity:0},stringRule:[t=>!!t||"Campo requerido",t=>t&&t.length>=3||"Valor debe ser superior a 3"],numberRule:[t=>""!==t||"Campo requerido",t=>t>=0||"Valor debe ser igual o superior a 0"],validForm:null}},async created(){this.isEditForm?await this.fetchItem({vm:this,payload:{id:this.getFormId}}):this.resetItem(),this.itemForm={...this.item}},computed:{...(0,c.Se)("auth",["isAdminUser"]),...(0,c.rn)("items",["item","itemLoader"]),getFormTitle(){return this.isEditForm?"Editar Item":"Crear Item"},isEditForm(){return!!this.getFormId},getFormId(){return this.$route.params.id},shouldDisableForm(){return!this.isAdminUser}},methods:{...(0,c.nv)("items",["createItem","fetchItem","resetItem","updateItem","fetchItems"]),async handleSubmitItem(){const{id:t,...e}=this.itemForm;try{this.isEditForm?(await this.updateItem({vm:this,payload:{id:this.getFormId,data:e}}),this.itemForm={...this.item}):await this.createItem({vm:this,payload:e})}catch(i){console.error(i)}this.fetchItems({vm:this})}}},p=m,g=i(1001),f=(0,g.Z)(p,u,h,!1,null,null,null),y=f.exports},3240:function(t,e,i){var a=i(5530),s=i(6141),r=i(950);e["Z"]=(0,a.Z)(s.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},7894:function(t,e,i){i(1884);var a=i(144),s=i(7559),r=i(8131);const n=["sm","md","lg","xl"],l=["start","end","center"];function o(t,e){return n.reduce(((i,a)=>(i[t+(0,r.jC)(a)]=e(),i)),{})}const d=t=>[...l,"baseline","stretch"].includes(t),u=o("align",(()=>({type:String,default:null,validator:d}))),h=t=>[...l,"space-between","space-around"].includes(t),c=o("justify",(()=>({type:String,default:null,validator:h}))),m=t=>[...l,"space-between","space-around","stretch"].includes(t),p=o("alignContent",(()=>({type:String,default:null,validator:m}))),g={align:Object.keys(u),justify:Object.keys(c),alignContent:Object.keys(p)},f={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){let a=f[t];if(null!=i){if(e){const i=e.replace(t,"");a+=`-${i}`}return a+=`-${i}`,a.toLowerCase()}}const v=new Map;e["Z"]=a.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...u,justify:{type:String,default:null,validator:h},...c,alignContent:{type:String,default:null,validator:m},...p},render(t,{props:e,data:i,children:a}){let r="";for(const s in e)r+=String(e[s]);let n=v.get(r);if(!n){let t;for(t in n=[],g)g[t].forEach((i=>{const a=e[i],s=y(t,i,a);s&&n.push(s)}));n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),v.set(r,n)}return t(e.tag,(0,s.ZP)(i,{staticClass:"row",class:n}),a)}})},3890:function(t,e,i){i.d(e,{Z:function(){return o}});var a=i(8427),s=i(9548),r=i(2066),n=i(5530),l=i(8131),o=(0,n.Z)(a.Z,s.Z,r.Z).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,i]=t.split("@"),a=()=>this.genStructure(e);return Array.from({length:i}).map(a)},genStructure(t){let e=[];t=t||this.type||"";const i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push((0,l.z9)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})}}]);
//# sourceMappingURL=904-legacy.05277f86.js.map