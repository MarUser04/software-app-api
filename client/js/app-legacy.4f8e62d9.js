(function(){var t={5078:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return c}});var a,o,s=r(8296),n={name:"Card",extends:s.Z},i=n,l=r(1001),u=(0,l.Z)(i,a,o,!1,null,null,null),c=u.exports},215:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var a=r(9088),o=r(1667),s=r(3738),n=r(3560),i=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{href:t.href,rel:t.href&&"#"!==t.href?"noopener":void 0,target:t.href&&"#"!==t.href?"_blank":void 0,to:t.item.to,"active-class":`primary ${t.isDark?"white":"black"}--text`}},[t.text?e(n.Z,{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.icon?e(n.Z,[e(a.Z,{staticClass:"menu-icons",domProps:{textContent:t._s(t.item.icon)}})],1):t._e(),t.item.title||t.item.subtitle?e(s.km,[e(s.V9,{domProps:{textContent:t._s(t.item.title)}}),e(s.oZ,{domProps:{textContent:t._s(t.item.subtitle)}})],1):t._e()],1)},l=[],u=r(2066),c={name:"Item",mixins:[u.Z],props:{item:{type:Object,default:()=>({href:void 0,icon:void 0,subtitle:void 0,title:void 0,to:void 0})},text:{type:Boolean,default:!1}},computed:{computedText(){if(!this.item||!this.item.title)return"";let t="";return this.item.title.split(" ").forEach((e=>{t+=e.substring(0,1)})),t},href(){return this.item.href||(this.item.to?void 0:"#")}}},d=c,m=r(1001),p=(0,m.Z)(d,i,l,!1,null,"2b650bfa",null),f=p.exports},5012:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});var a=r(1584),o=r(5384),s=r(8208),n=r(3738),i=r(3560),l=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{group:t.group,"prepend-icon":t.item.icon,"sub-group":t.subGroup,"append-icon":"mdi-menu-down",color:"rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)"!==t.barColor?"white":"grey darken-1"},scopedSlots:t._u([{key:"activator",fn:function(){return[t.text?e(i.Z,{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.avatar?e(s.Z,{staticClass:"align-self-center",attrs:{color:"white",contain:""}},[e(a.Z,{attrs:{src:"https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"}})],1):t._e(),e(n.km,[e(n.V9,{domProps:{textContent:t._s(t.item.title)}})],1)]},proxy:!0}])},[t._l(t.children,(function(t,r){return[t.children?e("base-item-sub-group",{key:`sub-group-${r}`,attrs:{item:t}}):e("base-item",{key:`item-${r}`,attrs:{item:t,text:""}})]}))],2)},u=[],c=r(1804),d=r.n(c),m=r(629),p={name:"ItemGroup",inheritAttrs:!1,props:{item:{type:Object,default:()=>({avatar:void 0,group:void 0,title:void 0,children:[]})},subGroup:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},computed:{...(0,m.rn)(["barColor"]),children(){return this.item.children.map((t=>({...t,to:t.to?`${this.item.group}/${t.to}`:void 0})))},computedText(){if(!this.item||!this.item.title)return"";let t="";return this.item.title.split(" ").forEach((e=>{t+=e.substring(0,1)})),t},group(){return this.genGroup(this.item.children)}},methods:{genGroup(t){return t.filter((t=>t.to)).map((t=>{const e=t.group||this.item.group;let r=`${e}/${d()(t.to)}`;return t.children&&(r=`${r}|${this.genGroup(t.children)}`),r})).join("|")}}},f=p,h=r(1001),g=(0,h.Z)(f,l,u,!1,null,null,null),v=g.exports},5216:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("base-item-group",{attrs:{item:t.item,text:"","sub-group":""}})},o=[],s={name:"ItemSubGroup",props:{item:{type:Object,default:()=>({avatar:void 0,group:void 0,title:void 0,children:[]})}}},n=s,i=r(1001),l=(0,i.Z)(n,a,o,!1,null,null,null),u=l.exports},4528:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var a=r(4057),o=r(3381),s=r(9088),n=function(){var t=this,e=t._self._c;return e(a.Z,t._g(t._b({staticClass:"v-alert--material",attrs:{dark:""},scopedSlots:t._u([t.$attrs.icon?{key:"prepend",fn:function(){return[e(s.Z,{staticClass:"v-alert__icon elevation-6 white",attrs:{light:"",color:t.$attrs.color}},[t._v(" "+t._s(t.$attrs.icon)+" ")])]},proxy:!0}:null,t.$attrs.dismissible?{key:"close",fn:function({toggle:r}){return[e(o.Z,{attrs:{"aria-label":t.$vuetify.lang.t("$vuetify.close"),color:"",icon:"",small:""},on:{click:r}},[e(s.Z,[t._v(" $vuetify.icons.cancel ")])],1)]}}:null],null,!0)},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},i=[],l={name:"MaterialAlert"},u=l,c=r(1001),d=(0,c.Z)(u,n,i,!1,null,null,null),m=d.exports},3992:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var a=r(9396),o=r(8296),s=r(5255),n=r(7690),i=r(9088),l=r(1584),u=r(5439),c=function(){var t=this,e=t._self._c;return e(o.Z,t._b({staticClass:"v-card--material pa-3",class:t.classes},"v-card",t.$attrs,!1),[e("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?e(a.Z,{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[e(l.Z,{attrs:{src:t.avatar}})],1):e(u.Z,{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?e("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:t._s(t.title)}}):t.icon?e(i.Z,{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?e("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?e("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t.icon&&t.title?e("div",{staticClass:"ml-4"},[e("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[e(n.Z,{staticClass:"mt-2"}),e(s.h7,{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)},d=[],m={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},p=m,f=r(1001),h=(0,f.Z)(p,c,d,!1,null,null,null),g=h.exports},9530:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("base-material-card",t._g(t._b({staticClass:"v-card--material-chart",scopedSlots:t._u([{key:"heading",fn:function(){return[e("chartist",{staticStyle:{"max-height":"150px"},attrs:{data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type}})]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[t._t("reveal-actions",null,{slot:"reveal-actions"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},o=[],s={name:"MaterialChartCard",inheritAttrs:!1,props:{data:{type:Object,default:()=>({})},eventHandlers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:()=>[]},type:{type:String,required:!0,validator:t=>["Bar","Line","Pie"].includes(t)}}},n=s,i=r(1001),l=(0,i.Z)(n,a,o,!1,null,null,null),u=l.exports},937:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var a=r(4057),o=r(8741),s=function(){var t=this,e=t._self._c;return e(o.Z,t._b({staticClass:"v-snackbar--material",attrs:{top:"",right:"",timeout:t.timer},model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},"v-snackbar",{...t.$attrs,color:"transparent"},!1),[e(a.Z,{staticClass:"ma-0",attrs:{color:t.$attrs.color,dismissible:t.dismissible,type:t.type,dark:""},model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},[t._v(" "+t._s(t.message)+" ")])],1)},n=[],i={name:"BaseMaterialSnackbar",data(){return{dismissible:!0,internalValue:this.value,showSnackbar:!1,message:"",type:"success",timer:2500}},mounted(){this.$root.$on("showToastMessage",this.show)},methods:{show(t){this.message=t.message||'missing "message".',this.type=t.type||"success",this.timer=t.timer||2500,this.showSnackbar=!0}}},l=i,u=r(1001),c=(0,u.Z)(l,s,n,!1,null,null,null),d=c.exports},5086:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var a=r(7024),o=r(7690),s=r(9088),n=function(){var t=this,e=t._self._c;return e("base-material-card",t._g(t._b({staticClass:"v-card--material-stats",attrs:{icon:t.icon},scopedSlots:t._u([{key:"after-heading",fn:function(){return[e("div",{staticClass:"ml-auto text-right"},[e("div",{staticClass:"body-3 grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),e("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v(" "+t._s(t.value)+" "),e("small",[t._v(t._s(t.smallValue))])])])]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[e(a.Z,{staticClass:"px-0",attrs:{cols:"12"}},[e(o.Z)],1),e(s.Z,{staticClass:"ml-2 mr-1",attrs:{color:t.subIconColor,size:"16"}},[t._v(" "+t._s(t.subIcon)+" ")]),e("span",{staticClass:"caption grey--text font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)},i=[],l=r(5078),u={name:"MaterialStatsCard",inheritAttrs:!1,props:{...l["default"].props,icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}}},c=u,d=r(1001),m=(0,d.Z)(c,n,i,!1,null,null,null),p=m.exports},1568:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var a=r(6899),o=function(){var t=this,e=t._self._c;return e(a.Z,t._b({staticClass:"v-tabs--pill",attrs:{"active-class":`${t.color} ${t.$vuetify.theme.dark?"black":"white"}--text`,"hide-slider":""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-tabs",t.$attrs,!1),[t._t("default"),t._t("items")],2)},s=[],n=r(7779),i={name:"MaterialTabs",mixins:[n.Z],props:{color:{type:String,default:"primary"}}},l=i,u=r(1001),c=(0,u.Z)(l,o,s,!1,null,null,null),d=c.exports},480:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var a=r(9396),o=r(8296),s=r(5255),n=r(9088),i=r(1584),l=function(){var t=this,e=t._self._c;return e(o.Z,{staticClass:"text-center v-card--testimony"},[e("div",{staticClass:"pt-6"},[e(n.Z,{attrs:{color:"black","x-large":""}},[t._v(" mdi-format-quote-close ")])],1),e(s.ZB,{staticClass:"display-1 font-weight-light font-italic mb-3",domProps:{textContent:t._s(t.blurb)}}),e("div",{staticClass:"display-2 font-weight-light mb-2",domProps:{textContent:t._s(t.author)}}),e("div",{staticClass:"body-2 text-uppercase grey--text",domProps:{textContent:t._s(t.handle)}}),e(a.Z,{staticClass:"elevation-12",attrs:{color:"grey",size:"100"}},[e(i.Z,{attrs:{alt:`${t.author} Testimonial`,src:t.avatar}})],1),e("div")],1)},u=[],c={name:"BaseMaterialTestimony",props:{author:{type:String,default:""},avatar:{type:String,default:"https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg"},blurb:{type:String,default:""},handle:{type:String,default:""}}},d=c,m=r(1001),p=(0,m.Z)(d,l,u,!1,null,null,null),f=p.exports},6210:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"display-2 font-weight-light col col-12 text-left text--primary pa-0 mb-8"},[e("h5",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.subheading)+" "),t.text?[e("span",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.text)}})]:t._e()],2),e("div",{staticClass:"pt-2"},[t._t("default")],2)])},o=[],s={name:"Subheading",props:{subheading:{type:String,default:""},text:{type:String,default:""}}},n=s,i=r(1001),l=(0,i.Z)(n,a,o,!1,null,null,null),u=l.exports},802:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"mb-12 text-center"},[e("h1",{staticClass:"font-weight-light mb-2 headline",domProps:{textContent:t._s(`Vuetify ${t.heading}`)}}),e("span",{staticClass:"font-weight-light subtitle-1"},[t._v(" Please checkout the "),e("a",{staticClass:"secondary--text",staticStyle:{"text-decoration":"none"},attrs:{href:`https://vuetifyjs.com/${t.link}`,rel:"noopener",target:"_blank"}},[t._v(" full documentation ")])])])},o=[],s={name:"VComponent",props:{heading:{type:String,default:""},link:{type:String,default:""}}},n=s,i=r(1001),l=(0,i.Z)(n,a,o,!1,null,null,null),u=l.exports},8873:function(t,e,r){var a={"./Card.vue":5078,"./Item.vue":215,"./ItemGroup.vue":5012,"./ItemSubGroup.vue":5216,"./MaterialAlert.vue":4528,"./MaterialCard.vue":3992,"./MaterialChartCard.vue":9530,"./MaterialSnackbar.vue":937,"./MaterialStatsCard.vue":5086,"./MaterialTabs.vue":1568,"./MaterialTestimony.vue":480,"./Subheading.vue":6210,"./VComponent.vue":802};function o(t){var e=s(t);return r(e)}function s(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id=8873},941:function(t,e,r){"use strict";var a=r(144),o=r(3726),s=function(){var t=this,e=t._self._c;return e(o.Z,[e("base-material-snackbar"),e("router-view",{key:t.$route.path})],1)},n=[],i={name:"App",components:{BaseMaterialSnackbar:()=>Promise.resolve().then(r.bind(r,937))}},l=i,u=r(1001),c=(0,u.Z)(l,s,n,!1,null,null,null),d=c.exports,m=r(8345),p=r(629),f={itemsLoader:!1,items:[],itemsTotal:0,itemLoader:!1,item:{id:null,name:"",quantity:0}},h={SET_ITEMS(t,{data:e=[],count:r=0}){t.items=e,t.itemsTotal=r},SET_ITEMS_LOADER(t,e){t.itemsLoader=e},SET_ITEM(t,{id:e,name:r,quantity:a}){t.item={id:e,name:r,quantity:a}},SET_ITEM_LOADER(t,e){t.itemLoader=e}},g=r(8945);const v=g.Z.create({baseURL:"/api",withCredentials:!0}),_=1e4;v.defaults.timeout=_,v.interceptors.response.use((t=>t),(t=>{if(t.response.status){switch(t.response.status){case 401:G.push("/login").catch((()=>{}));break;case 403:G.push("/").catch((()=>{}));break}return Promise.reject(t)}}));var b=v;const y="item";var E={fetchItems({commit:t},{vm:e,payload:r}){return t("SET_ITEMS_LOADER",!0),b.get(`/${y}`,{params:r}).then((e=>{t("SET_ITEMS",e.data)})).catch((()=>{e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al listar el Inventario"})})).finally((()=>{t("SET_ITEMS_LOADER",!1)}))},fetchItem({commit:t,dispatch:e},{vm:r,payload:a}){return t("SET_ITEM_LOADER",!1),b.get(`/${y}/${a.id}`).then((e=>{t("SET_ITEM",e.data)})).catch((()=>{e("resetItem"),r.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al consultar el Item"})})).finally((()=>{t("SET_ITEM_LOADER",!1)}))},resetItem({commit:t}){t("SET_ITEM",{id:null,name:"",quantity:0})},createItem({commit:t},{vm:e,payload:r}){return t("SET_ITEM_LOADER",!0),b.post(`/${y}`,r).then((t=>{t.data.id&&(e.$router.push(`/inventario/form/${t.data.id}`),e.$root.$emit("showToastMessage",{type:"success",message:"Item creado exitosamente"}))})).catch((t=>{throw e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al crear el Item"}),new Error(t)})).finally((()=>{t("SET_ITEM_LOADER",!1)}))},updateItem({commit:t},{vm:e,payload:r}){return t("SET_ITEM_LOADER",!0),b.patch(`/${y}/${r.id}`,r.data).then((r=>{r.data.id&&(t("SET_ITEM",r.data),e.$root.$emit("showToastMessage",{type:"success",message:"Item actualizado exitosamente"}))})).catch((t=>{throw e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al actualizar el Item"}),new Error(t)})).finally((()=>{t("SET_ITEM_LOADER",!1)}))},deleteItem({commit:t},{vm:e,payload:r}){return t("SET_ITEM_LOADER",!0),b["delete"](`/${y}/${r.id}`).then((()=>{e.$root.$emit("showToastMessage",{type:"success",message:"Item borrado exitosamente"})})).catch((()=>{e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al borrar el Item"})})).finally((()=>{t("SET_ITEM_LOADER",!1)}))}},T={getMappedItems(t){return t.items.map((({name:t,id:e})=>({text:t,value:e})))},getMappedExtraItems(t){return t.items.filter((t=>t.isExtra)).map((({name:t,id:e})=>({text:t,value:e})))}},S={namespaced:!0,state:f,mutations:h,actions:E,getters:T},$={productsLoader:!1,products:[],productsTotal:0,productLoader:!1,product:{id:null,name:"",price:0,items:[]}},C={SET_PRODUCTS(t,{data:e=[],count:r=0}){t.products=e,t.productsTotal=r},SET_PRODUCTS_LOADER(t,e){t.productsLoader=e},SET_PRODUCT(t,{id:e,name:r,price:a,items:o}){t.product={id:e,name:r,price:a,items:o}},SET_PRODUCT_LOADER(t,e){t.productLoader=e}};const O="product";var R={fetchProducts({commit:t},{vm:e,payload:r}){return t("SET_PRODUCTS_LOADER",!0),b.get(`/${O}`,{params:r}).then((e=>{t("SET_PRODUCTS",e.data)})).catch((()=>{e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al listar los Productos"})})).finally((()=>{t("SET_PRODUCTS_LOADER",!1)}))},fetchProduct({commit:t,dispatch:e},{vm:r,payload:a}){return t("SET_PRODUCT_LOADER",!1),b.get(`/${O}/${a.id}`).then((e=>{t("SET_PRODUCT",e.data)})).catch((()=>{e("resetProduct"),r.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al consultar el Producto"})})).finally((()=>{t("SET_PRODUCT_LOADER",!1)}))},resetProduct({commit:t}){t("SET_PRODUCT",{id:null,name:"",price:0,items:[{id:0,quantity:0}]})},createProduct({commit:t},{vm:e,payload:r}){return t("SET_PRODUCT_LOADER",!0),b.post(`/${O}`,r).then((t=>{t.data.id&&(e.$router.push(`/product/form/${t.data.id}`),e.$root.$emit("showToastMessage",{type:"success",message:"Producto creado exitosamente"}))})).catch((t=>{throw e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al crear el Producto"}),new Error(t)})).finally((()=>{t("SET_PRODUCT_LOADER",!1)}))},updateProduct({commit:t},{vm:e,payload:r}){return t("SET_PRODUCT_LOADER",!0),b.patch(`/${O}/${r.id}`,r.data).then((r=>{r.data.id&&(t("SET_PRODUCT",r.data),e.$root.$emit("showToastMessage",{type:"success",message:"Producto actualizado exitosamente"}))})).catch((t=>{throw e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al actualizar el Producto"}),new Error(t)})).finally((()=>{t("SET_PRODUCT_LOADER",!1)}))},deleteProduct({commit:t},{vm:e,payload:r}){return t("SET_PRODUCT_LOADER",!0),b["delete"](`/${O}/${r.id}`).then((()=>{e.$root.$emit("showToastMessage",{type:"success",message:"Producto borrado exitosamente"})})).catch((()=>{e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al borrar el Producto"})})).finally((()=>{t("SET_PRODUCT_LOADER",!1)}))}},x={getMappedProduct(t){return t.products.map((({name:t,id:e})=>({text:t,value:e})))}},P={namespaced:!0,state:$,mutations:C,actions:R,getters:x},w={ordersLoader:!1,orders:[],ordersTotal:0,orderLoader:!1,order:{id:null,clientName:"",status:1,orderDetails:[],originalAmount:null,paidAmount:0}},D={SET_ORDERS(t,{data:e=[],count:r=0}){t.orders=e,t.ordersTotal=r},SET_ORDERS_LOADER(t,e){t.ordersLoader=e},SET_ORDER(t,{id:e,originalAmount:r,clientName:a="",status:o,orderDetails:s=[],paidAmount:n=0}){t.order={id:e,clientName:a,status:o,orderDetails:s,originalAmount:r,paidAmount:n}},SET_ORDER_LOADER(t,e){t.ordersLoader=e}};const A="order";var M={fetchOrders({commit:t},{vm:e,payload:r}){return t("SET_ORDERS_LOADER",!0),b.get(`/${A}`,{params:r}).then((e=>{t("SET_ORDERS",e.data)})).catch((()=>{e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al listar las Ordenes"})})).finally((()=>{t("SET_ORDERS_LOADER",!1)}))},fetchOrder({commit:t,dispatch:e},{vm:r,payload:a}){return t("SET_ORDER_LOADER",!1),b.get(`/${A}/${a.id}`).then((e=>{t("SET_ORDER",e.data)})).catch((()=>{e("resetOrder"),r.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al consultar la Orden"})})).finally((()=>{t("SET_ORDER_LOADER",!1)}))},newOrder({commit:t}){t("SET_ORDER",{})},createOrder({commit:t},{vm:e,payload:r}){return t("SET_ORDER_LOADER",!0),b.post(`/${A}`,r).then((t=>{t.data.id&&(e.$router.push(`/ordenes/form/${t.data.id}`),e.$root.$emit("showToastMessage",{type:"success",message:"Orden creada exitosamente"}))})).catch((t=>{throw e.$root.$emit("showToastMessage",{type:"error",message:t.response.data.message}),new Error(t)})).finally((()=>{t("SET_ORDER_LOADER",!1)}))},updateOrder({commit:t},{vm:e,payload:r}){return t("SET_ORDER_LOADER",!0),b.patch(`/${A}/${r.id}`,r.data).then((r=>{r.data.id&&(t("SET_ORDER",r.data),e.$root.$emit("showToastMessage",{type:"success",message:"Orden actualizada exitosamente"}))})).catch((t=>{throw e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al actualizar la Orden"}),new Error(t)})).finally((()=>{t("SET_ORDER_LOADER",!1)}))},resetOrder({commit:t}){t("SET_ORDER",{id:null,client_name:"",status:0,products:[{id:0,quantity:0}]})},deleteOrder({commit:t},{vm:e,payload:r}){return t("SET_ORDER_LOADER",!0),b["delete"](`/${A}/${r.id}`).then((()=>{e.$root.$emit("showToastMessage",{type:"success",message:"Order borrada exitosamente"})})).catch((()=>{e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al borrar la Orden"})})).finally((()=>{t("SET_ORDER_LOADER",!1)}))},submitPayment({commit:t},{vm:e,payload:r}){return t("SET_ORDER_LOADER",!0),b.patch(`/${A}/${r.id}/pay`,r.data).then((t=>{t.data.id&&e.$root.$emit("showToastMessage",{type:"success",message:"Se realizo el pago correctamente."})})).catch((()=>{e.$root.$emit("showToastMessage",{type:"error",message:"Ha ocurrido un error al realizar el pago"})})).finally((()=>{t("SET_ORDER_LOADER",!1)}))}},Z={},k={namespaced:!0,state:w,mutations:D,actions:M,getters:Z},L={user:{id:0,username:"",firstName:"",lastName:"",role:""}},I={SET_USER(t,{id:e=0,username:r="",firstName:a="",lastName:o="",role:s=""}){t.user={id:e,username:r,firstName:a,lastName:o,role:s}}};const U="auth";var N={login({commit:t},e){return b.post(`/${U}/login`,{},{auth:e}).then((e=>{t("SET_USER",e.data)}))},logout({commit:t},e){return b["delete"](`/${U}/logout`).then((e=>{t("SET_USER",{})}))},fetchUserProfile({commit:t},e){return b.get(`/${U}/active`).then((e=>{t("SET_USER",e.data)})).catch((e=>{t("SET_USER",{})}))}},j={getUserProfile(t){return t.user},isAdminUser(t){return"admin"===t.user?.role},getUserFullName(t){const e=t.user.firstName??"",r=t.user.lastName??"";return`${e} ${r}`}},q={namespaced:!0,state:L,mutations:I,actions:N,getters:j};a.ZP.use(p.ZP);var H=new p.ZP.Store({state:{barColor:"rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",barImage:"",drawer:null},mutations:{SET_BAR_IMAGE(t,e){t.barImage=e},SET_DRAWER(t,e){t.drawer=e}},actions:{},modules:{items:S,products:P,orders:k,auth:q}});const B=async(t,e,r)=>{if(!t.meta.notRequiresAuth){await H.dispatch("auth/fetchUserProfile");const e=H.getters["auth/getUserProfile"];if(0===e.id)return r({path:"/login"});if(t.meta.requireAdmin){const t=H.getters["auth/isAdminUser"];return t?r():r({path:"/"})}return r()}return r()};var F=B;a.ZP.use(m.ZP);const V=[{path:"/",component:()=>r.e(716).then(r.bind(r,1716)),children:[{name:"Inicio",path:"",component:()=>Promise.all([r.e(462),r.e(608)]).then(r.bind(r,608))},{name:"Ordenes",path:"ordenes",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(963),r.e(272)]).then(r.bind(r,6272))},{name:"Orden Form",path:"ordenes/form",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(79)]).then(r.bind(r,5333)),meta:{requireAdmin:!0}},{name:"Orden Form",path:"ordenes/form/:id",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(79)]).then(r.bind(r,5333))},{name:"Productos",path:"productos",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(963),r.e(165)]).then(r.bind(r,8165))},{name:"Productos Form",path:"productos/form",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(847)]).then(r.bind(r,298)),meta:{requireAdmin:!0}},{name:"Editar Producto",path:"product/form/:id",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(847)]).then(r.bind(r,298))},{name:"Inventario",path:"inventario",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(963),r.e(8)]).then(r.bind(r,1008))},{name:"Crear Item",path:"inventario/form",component:()=>Promise.all([r.e(462),r.e(830),r.e(904)]).then(r.bind(r,5904)),meta:{requireAdmin:!0}},{name:"Editar Item",path:"inventario/form/:id",component:()=>Promise.all([r.e(462),r.e(830),r.e(904)]).then(r.bind(r,5904))},{name:"Pagos",path:"pagos",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(963),r.e(28)]).then(r.bind(r,9028)),meta:{requireAdmin:!0}},{name:"Pagos Form",path:"pagos/form/:id",component:()=>Promise.all([r.e(462),r.e(830),r.e(968),r.e(685)]).then(r.bind(r,973)),meta:{requireAdmin:!0}}]},{name:"Login",path:"/login",component:()=>Promise.all([r.e(462),r.e(830),r.e(594)]).then(r.bind(r,3594)),meta:{notRequiresAuth:!0}}],z=new m.ZP({mode:"hash",base:"/",routes:V});z.beforeEach(F);var G=z,W=r(1700),J=r.n(W),K=r(8929),Q=r.n(K);const X=r(8873);X.keys().forEach((t=>{const e=X(t),r=J()(Q()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));a.ZP.component(`Base${r}`,e.default||e)})),a.ZP.use(r(872));var Y=r(2954),tt=r(4479);(0,Y.l7)("email",tt.Do),(0,Y.l7)("max",tt.Fp),(0,Y.l7)("min",tt.VV),(0,Y.l7)("numeric",tt.uR),(0,Y.l7)("required",tt.C1),a.ZP.component("validation-provider",Y.d_),a.ZP.component("validation-observer",Y._j);var et=r(9249),rt=r(7152),at=r(3505);a.ZP.use(rt.Z);const ot={en:{...r(790),$vuetify:at.Z}};var st=new rt.Z({locale:"en",fallbackLocale:"en",messages:ot});a.ZP.use(et.Z);const nt={lighten:"#aaf255",primary:"#4CAF50",secondary:"#9C27b0",accent:"#9C27b0",info:"#00CAE3"};var it=new et.Z({lang:{t:(t,...e)=>st.t(t,e)},theme:{themes:{dark:nt,light:nt}}});a.ZP.config.productionTip=!1,new a.ZP({router:G,store:H,vuetify:it,i18n:st,render:t=>t(d)}).$mount("#app")},790:function(t){"use strict";t.exports=JSON.parse('{"avatar":"Vuetify MD","buttons":"Buttons","calendar":"Calendar","charts":"Charts","components":"Components","ct":"CT","dashboard":"Dashboard","dtables":"Data Tables","eforms":"Extended Forms","error":"Error Page","etables":"Extended Tables","example":"Example","forms":"Forms","fullscreen":"Full Screen Map","google":"Google Maps","grid":"Grid System","icons":"Icons","lock":"Lock Screen Page","login":"Login Page","maps":"Maps","multi":"Multi Level Collapse","notifications":"Notifications","pages":"Pages","plan":"Choose Plan","pricing":"Pricing","my-profile":"My Profile","edit-profile":"Edit Profile","register":"Register Page","rforms":"Regular Forms","rtables":"Regular Tables","rtl":"RTL Support","search":"Search","settings":"Settings","tables":"Tables","tabs":"Tabs","tim":"Creative Tim","timeline":"Timeline","typography":"Typography","upgrade":"Upgrade To PRO","user":"User Profile","vforms":"Validation Forms","widgets":"Widgets","wizard":"Wizard"}')}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,s){if(!a){var n=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],s=t[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(i=!1,s<n&&(n=s));if(i){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[a,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"-legacy."+{8:"3b71773e",28:"999fba47",33:"fabc2060",79:"08be37de",165:"90fe0cef",272:"83c568bd",462:"b7d50222",594:"30207f9d",608:"5792a455",655:"9db1da02",685:"36a5db63",716:"0b04c03b",830:"2864ff5a",847:"ba0e512a",904:"05277f86",963:"068535e1",968:"2359bba5"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{8:"b3405308",28:"3df73e19",33:"4b183b25",79:"71bf2139",165:"b3405308",272:"b3405308",462:"198213d6",594:"61367c4e",655:"272824fd",685:"7929da18",830:"004a69c4",847:"87d3b6ec",904:"b7312ecf",963:"47841789"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vuetify-material-dashboard:";r.l=function(a,o,s,n){if(t[a])t[a].push(o);else{var i,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+s),i.src=a),t[a]=[o];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,a,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(r){if(s.onerror=s.onload=null,"load"===r.type)a();else{var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,s.parentNode.removeChild(s),o(l)}};return s.onerror=s.onload=n,s.href=e,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){o=n[a],s=o.getAttribute("data-href");if(s===t||s===e)return o}},a=function(a){return new Promise((function(o,s){var n=r.miniCssF(a),i=r.p+n;if(e(n,i))return o();t(a,i,null,o,s)}))},o={143:0};r.f.miniCss=function(t,e){var r={8:1,28:1,33:1,79:1,165:1,272:1,462:1,594:1,655:1,685:1,830:1,847:1,904:1,963:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};r.f.j=function(e,a){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else if(462!=e){var s=new Promise((function(r,a){o=t[e]=[r,a]}));a.push(o[2]=s);var n=r.p+r.u(e),i=new Error,l=function(a){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};r.l(n,l,"chunk-"+e,e)}else t[e]=0},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,n=a[0],i=a[1],l=a[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var c=l(r)}for(e&&e(a);u<n.length;u++)s=n[u],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(c)},a=self["webpackChunkvuetify_material_dashboard"]=self["webpackChunkvuetify_material_dashboard"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(941)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.4f8e62d9.js.map