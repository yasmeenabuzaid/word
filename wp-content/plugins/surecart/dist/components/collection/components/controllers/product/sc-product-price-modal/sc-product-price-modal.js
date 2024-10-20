import{h}from"@stencil/core";import{onChange,state}from"@store/product";import{__}from"@wordpress/i18n";import{getProductBuyLink,submitCartForm}from"@store/product/mutations";import{setProduct}from"@store/product/setters";import{getAdditionalErrorMessages,getTopLevelError}from"../../../../functions/error";export class ScProductPriceModal{constructor(){this.buttonText=void 0,this.addToCart=void 0,this.productId=void 0,this.error=void 0}async submit(){var t,o;if(!this.addToCart){const r=null===(o=null===(t=null===window||void 0===window?void 0:window.scData)||void 0===t?void 0:t.pages)||void 0===o?void 0:o.checkout;if(!r)return;return window.location.assign(getProductBuyLink(this.productId,r))}try{await submitCartForm(this.productId)}catch(t){console.error(t),this.error=t}}componentWillLoad(){onChange(this.productId,(()=>{setTimeout((()=>{var t;null===(t=this.priceInput)||void 0===t||t.triggerFocus()}),50)}))}render(){var t,o,r,e,i,d,s,a,l,c,n,u,p,v,m,g,_,b,I;return(null===(o=null===(t=state[this.productId])||void 0===t?void 0:t.selectedPrice)||void 0===o?void 0:o.ad_hoc)?h("sc-dialog",{open:(null===(r=state[this.productId])||void 0===r?void 0:r.dialog)===((null==this?void 0:this.addToCart)?"ad_hoc_cart":"ad_hoc_buy"),onScRequestClose:()=>setProduct(this.productId,{dialog:null})},h("span",{class:"dialog__header",slot:"label"},!!(null===(i=null===(e=state[this.productId])||void 0===e?void 0:e.product)||void 0===i?void 0:i.image_url)&&h("div",{class:"dialog__image"},h("img",{src:null===(s=null===(d=state[this.productId])||void 0===d?void 0:d.product)||void 0===s?void 0:s.image_url})),h("div",{class:"dialog__header-text"},h("div",{class:"dialog__action"},__("Enter An Amount","surecart")),h("div",{class:"dialog__product-name"},null===(l=null===(a=state[this.productId])||void 0===a?void 0:a.product)||void 0===l?void 0:l.name))),h("sc-form",{onScSubmit:t=>{t.stopImmediatePropagation(),this.submit()},onScFormSubmit:t=>t.stopImmediatePropagation()},!!this.error&&h("sc-alert",{type:"danger",scrollOnOpen:!0,open:!!this.error,closable:!1},!!getTopLevelError(this.error)&&h("span",{slot:"title",innerHTML:getTopLevelError(this.error)}),(getAdditionalErrorMessages(this.error)||[]).map(((t,o)=>h("div",{innerHTML:t,key:o})))),h("sc-price-input",{ref:t=>this.priceInput=t,value:null===(u=null===(n=null===(c=state[this.productId])||void 0===c?void 0:c.adHocAmount)||void 0===n?void 0:n.toString)||void 0===u?void 0:u.call(n),"currency-code":null===(v=null===(p=state[this.productId])||void 0===p?void 0:p.selectedPrice)||void 0===v?void 0:v.currency,min:null===(g=null===(m=state[this.productId])||void 0===m?void 0:m.selectedPrice)||void 0===g?void 0:g.ad_hoc_min_amount,max:null===(b=null===(_=state[this.productId])||void 0===_?void 0:_.selectedPrice)||void 0===b?void 0:b.ad_hoc_max_amount,onScInput:t=>setProduct(this.productId,{adHocAmount:parseInt(t.target.value)}),required:!0}),h("sc-button",{type:"primary",full:!0,submit:!0,busy:null===(I=state[this.productId])||void 0===I?void 0:I.busy},h("slot",null,this.buttonText||__("Add To Cart","surecart"))))):null}static get is(){return"sc-product-price-modal"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-product-price-modal.scss"]}}static get styleUrls(){return{$:["sc-product-price-modal.css"]}}static get properties(){return{buttonText:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The button text"},attribute:"button-text",reflect:!1},addToCart:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether to add to cart"},attribute:"add-to-cart",reflect:!1},productId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The product id"},attribute:"product-id",reflect:!1}}}static get states(){return{error:{}}}static get elementRef(){return"el"}}