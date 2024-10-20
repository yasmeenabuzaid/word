import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{o as onFirstVisible}from"./lazy.js";import{d as defineCustomElement$i}from"./sc-alert2.js";import{d as defineCustomElement$h}from"./sc-block-ui2.js";import{d as defineCustomElement$g}from"./sc-button2.js";import{d as defineCustomElement$f}from"./sc-card2.js";import{d as defineCustomElement$e}from"./sc-dashboard-module2.js";import{d as defineCustomElement$d}from"./sc-flex2.js";import{d as defineCustomElement$c}from"./sc-format-date2.js";import{d as defineCustomElement$b}from"./sc-format-number2.js";import{d as defineCustomElement$a}from"./sc-icon2.js";import{d as defineCustomElement$9}from"./sc-pagination2.js";import{d as defineCustomElement$8}from"./sc-skeleton2.js";import{d as defineCustomElement$7}from"./sc-spinner2.js";import{d as defineCustomElement$6}from"./sc-stacked-list2.js";import{d as defineCustomElement$5}from"./sc-stacked-list-row2.js";import{d as defineCustomElement$4}from"./sc-tag2.js";import{d as defineCustomElement$3}from"./sc-text2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs}from"./add-query-args.js";const scChargesListCss=":host{display:block;position:relative}.charges-list{display:grid;gap:1em}",ScChargesList$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.query={page:1,per_page:10},this.heading=void 0,this.showPagination=!0,this.allLink=void 0,this.charges=[],this.loading=void 0,this.loaded=void 0,this.error=void 0,this.pagination={total:0,total_pages:0}}componentWillLoad(){onFirstVisible(this.el,(()=>{this.getItems()}))}async getItems(){try{this.loading=!0;const e=await apiFetch({path:addQueryArgs("surecart/v1/charges/",{expand:["checkout","checkout.order"],...this.query}),parse:!1});this.pagination={total:parseInt(e.headers.get("X-WP-Total")),total_pages:parseInt(e.headers.get("X-WP-TotalPages"))},this.charges=await e.json()}catch(e){(null==e?void 0:e.message)?this.error=e.message:this.error=wp.i18n.__("Something went wrong","surecart"),console.error(this.error)}finally{this.loading=!1,this.loaded=!0}}renderRefundStatus(e){return(null==e?void 0:e.fully_refunded)?h("sc-tag",{type:"danger"},wp.i18n.__("Refunded","surecart")):(null==e?void 0:e.refunded_amount)?h("sc-tag",{type:"warning"},wp.i18n.__("Partially Refunded","surecart")):h("sc-tag",{type:"success"},wp.i18n.__("Paid","surecart"))}renderEmpty(){return h("sc-stacked-list-row",{"mobile-size":0},h("slot",{name:"empty"},wp.i18n.__("You have no saved payment methods.","surecart")))}renderLoading(){return h("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},h("div",{style:{padding:"0.5em"}},h("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"40%"}})))}renderContent(){var e;return this.loading&&!this.loaded?this.renderLoading():0===(null===(e=this.charges)||void 0===e?void 0:e.length)?this.renderEmpty():this.charges.map((e=>{var t;const{currency:s,amount:n,created_at:a}=e;return h("sc-stacked-list-row",{style:{"--columns":"4"},"mobile-size":600,href:addQueryArgs(window.location.href,{action:"show",model:"order",id:null===(t=e.checkout.order)||void 0===t?void 0:t.id})},h("strong",null,h("sc-format-date",{date:a,type:"timestamp",month:"short",day:"numeric",year:"numeric"})),h("sc-text",{style:{"--color":"var(--sc-color-gray-500)"}},wp.i18n.sprintf(wp.i18n.__("#%s","surecart"),e.checkout.order.number)),h("div",null,this.renderRefundStatus(e)),h("strong",null,h("sc-format-number",{type:"currency",value:n,currency:s})))}))}nextPage(){this.query.page=this.query.page+1,this.getItems()}prevPage(){this.query.page=this.query.page-1,this.getItems()}render(){var e;return h("sc-dashboard-module",{class:"charges-list",error:this.error},h("span",{slot:"heading"},h("slot",{name:"heading"},this.heading||wp.i18n.__("Payment History","surecart"))),!!this.allLink&&h("sc-button",{type:"link",href:this.allLink,slot:"end"},wp.i18n.__("View all","surecart"),h("sc-icon",{name:"chevron-right",slot:"suffix"})),h("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},h("sc-stacked-list",null,this.renderContent())),this.showPagination&&h("sc-pagination",{page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:null===(e=null==this?void 0:this.charges)||void 0===e?void 0:e.length,onScNextPage:()=>this.nextPage(),onScPrevPage:()=>this.prevPage()}),this.loading&&this.loaded&&h("sc-block-ui",{spinner:!0}))}get el(){return this}static get style(){return scChargesListCss}},[1,"sc-charges-list",{query:[1040],heading:[1],showPagination:[4,"show-pagination"],allLink:[1,"all-link"],charges:[32],loading:[32],loaded:[32],error:[32],pagination:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-charges-list","sc-alert","sc-block-ui","sc-button","sc-card","sc-dashboard-module","sc-flex","sc-format-date","sc-format-number","sc-icon","sc-pagination","sc-skeleton","sc-spinner","sc-stacked-list","sc-stacked-list-row","sc-tag","sc-text","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-charges-list":customElements.get(e)||customElements.define(e,ScChargesList$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$i();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$h();break;case"sc-button":customElements.get(e)||defineCustomElement$g();break;case"sc-card":customElements.get(e)||defineCustomElement$f();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$e();break;case"sc-flex":customElements.get(e)||defineCustomElement$d();break;case"sc-format-date":customElements.get(e)||defineCustomElement$c();break;case"sc-format-number":customElements.get(e)||defineCustomElement$b();break;case"sc-icon":customElements.get(e)||defineCustomElement$a();break;case"sc-pagination":customElements.get(e)||defineCustomElement$9();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$8();break;case"sc-spinner":customElements.get(e)||defineCustomElement$7();break;case"sc-stacked-list":customElements.get(e)||defineCustomElement$6();break;case"sc-stacked-list-row":customElements.get(e)||defineCustomElement$5();break;case"sc-tag":customElements.get(e)||defineCustomElement$4();break;case"sc-text":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScChargesList=ScChargesList$1,defineCustomElement=defineCustomElement$1;export{ScChargesList,defineCustomElement};