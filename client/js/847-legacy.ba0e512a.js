"use strict";(self["webpackChunkvuetify_material_dashboard"]=self["webpackChunkvuetify_material_dashboard"]||[]).push([[847],{298:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=i(3381),r=i(7024),a=i(6530),n=i(3240),o=i(9088),l=i(7894),d=i(7968),u=i(3890),c=i(9007),h=function(){var t=this,e=t._self._c;return e(a.Z,{attrs:{id:"user-profile",fluid:"",tag:"section"}},[e(l.Z,{attrs:{justify:"center"}},[e(r.Z,{attrs:{cols:"12",md:"8"}},[e("base-material-card",{scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v(" "+t._s(t.getFormTitle)+" ")])]},proxy:!0}])},[t.productLoader?e(u.Z,{attrs:{type:"list-item@2, actions"}}):e(n.Z,[e(a.Z,{staticClass:"py-0"},[e(l.Z,[e(r.Z,{attrs:{cols:"12"}},[e(c.Z,{staticClass:"purple-input",attrs:{label:"Nombre del Producto",rules:t.stringRule,disabled:t.shouldDisableForm},model:{value:t.productForm.name,callback:function(e){t.$set(t.productForm,"name",e)},expression:"productForm.name"}})],1),e(r.Z,{attrs:{cols:"12"}},[e(c.Z,{staticClass:"purple-input",attrs:{label:"Precio",type:"number",rules:t.numberRule,disabled:t.shouldDisableForm},model:{value:t.productForm.price,callback:function(e){t.$set(t.productForm,"price",t._n(e))},expression:"productForm.price"}})],1),e(r.Z,{attrs:{cols:"12"}},[t._l(t.productForm.items,(function(i,s){return e(l.Z,{key:s,attrs:{align:"center"}},[e(r.Z,{attrs:{cols:"5"}},[e(d.Z,{attrs:{items:t.getMappedItems,"menu-props":{maxHeight:"400"},label:"Agrega item al producto","item-text":"text",hint:"Items disponibles en el inventario","persistent-hint":"",disabled:t.shouldDisableForm},model:{value:t.productForm.items[s].id,callback:function(e){t.$set(t.productForm.items[s],"id",e)},expression:"productForm.items[idx].id"}})],1),e(r.Z,{attrs:{cols:"5"}},[e(c.Z,{staticClass:"purple-input",attrs:{label:"Cantidad del Item",type:"number",rules:t.numberRule,disabled:t.shouldDisableForm},model:{value:t.productForm.items[s].quantity,callback:function(e){t.$set(t.productForm.items[s],"quantity",t._n(e))},expression:"productForm.items[idx].quantity"}})],1),e(r.Z,{attrs:{cols:"2"}},[t.isAdminUser?e(o.Z,{staticClass:"ml-2 mr-1",attrs:{size:"16"},on:{click:function(e){return t.deleteItem(s)}}},[t._v(" mdi-delete ")]):t._e()],1)],1)})),t.isAdminUser?e(s.Z,{staticClass:"mt-4",attrs:{depressed:"",small:"",color:"success"},on:{click:t.addNewItem}},[t._v(" Agregar más items ")]):t._e()],2),e(r.Z,{staticClass:"text-right",attrs:{cols:"12"}},[e(s.Z,{attrs:{depressed:"",color:"warning"},on:{click:function(e){return t.$router.push("/productos")}}},[t._v(" Regresar ")]),t.isAdminUser?e(s.Z,{staticClass:"mr-0",attrs:{color:"success",disabled:t.disableSubmit},on:{click:t.handleSubmitProduct}},[t._v(" "+t._s(t.getFormTitle)+" ")]):t._e()],1)],1)],1)],1)],1)],1)],1)],1)},p=[],m=i(629),g={name:"ProductoForm",data(){return{productForm:{name:"",price:0,items:[{id:0,quantity:0}]},stringRule:[t=>!!t||"Campo requerido",t=>t&&t.length>5||"Valor debe ser superior a 5"],numberRule:[t=>!!t||"Campo requerido",t=>t&&t>0||"Valor debe ser superior a 0"]}},async created(){this.isEditForm?await this.fetchProduct({vm:this,payload:{id:this.getFormId}}):this.resetProduct(),this.populateProduct(),this.items.length||this.fetchItems({vm:this})},computed:{...(0,m.rn)("products",["product","productLoader"]),...(0,m.rn)("items",["items"]),...(0,m.Se)("items",["getMappedItems"]),...(0,m.Se)("auth",["isAdminUser"]),getFormTitle(){return this.isAdminUser?this.isEditForm?"Editar Producto":"Crear Producto":"Producto"},isEditForm(){return!!this.getFormId},getFormId(){return this.$route.params.id},disableSubmit(){return this.productForm.name.length<5||this.productForm.precio<1||this.productForm.items.filter((t=>0===t.id||t.quantity<1||!t.quantity)).length>0||0===this.productForm.items.length},shouldDisableForm(){return!this.isAdminUser}},methods:{...(0,m.nv)("products",["createProduct","fetchProduct","resetProduct","updateProduct"]),...(0,m.nv)("items",["fetchItems"]),async handleSubmitProduct(){const{id:t,...e}=this.productForm;try{this.isEditForm?(await this.updateProduct({vm:this,payload:{id:this.getFormId,data:e}}),this.populateProduct()):await this.createProduct({vm:this,payload:e})}catch(i){console.error(i)}},addNewItem(){this.productForm.items.push({id:0,quantity:0})},deleteItem(t){this.productForm.items.splice(t,1)},populateProduct(){this.productForm=JSON.parse(JSON.stringify(this.product))}}},f=g,y=i(1001),b=(0,y.Z)(f,h,p,!1,null,null,null),v=b.exports},3240:function(t,e,i){var s=i(5530),r=i(6141),a=i(950);e["Z"]=(0,s.Z)(r.Z,(0,a.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},7894:function(t,e,i){i(1884);var s=i(144),r=i(7559),a=i(8131);const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return n.reduce(((i,s)=>(i[t+(0,a.jC)(s)]=e(),i)),{})}const d=t=>[...o,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:d}))),c=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",(()=>({type:String,default:null,validator:c}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const b=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...u,justify:{type:String,default:null,validator:c},...h,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:i,children:s}){let a="";for(const r in e)a+=String(e[r]);let n=b.get(a);if(!n){let t;for(t in n=[],g)g[t].forEach((i=>{const s=e[i],r=y(t,i,s);r&&n.push(r)}));n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(a,n)}return t(e.tag,(0,r.ZP)(i,{staticClass:"row",class:n}),s)}})},3890:function(t,e,i){i.d(e,{Z:function(){return l}});var s=i(8427),r=i(9548),a=i(2066),n=i(5530),o=i(8131),l=(0,n.Z)(s.Z,r.Z,a.Z).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,i]=t.split("@"),s=()=>this.genStructure(e);return Array.from({length:i}).map(s)},genStructure(t){let e=[];t=t||this.type||"";const i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push((0,o.z9)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})}}]);
//# sourceMappingURL=847-legacy.ba0e512a.js.map