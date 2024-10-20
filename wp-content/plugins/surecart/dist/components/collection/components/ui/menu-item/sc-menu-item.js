import{h}from"@stencil/core";import{isRtl}from"../../../functions/page-align";export class ScMenuItem{constructor(){this.hasFocus=!1,this.href=void 0,this.target=void 0,this.checked=!1,this.value="",this.disabled=!1}async setFocus(e){this.menuItem.focus(e)}async setBlur(){this.menuItem.blur()}handleBlur(){this.hasFocus=!1}handleFocus(){this.hasFocus=!0}render(){const e=this.href?"a":"div";return h(e,{ref:e=>this.menuItem=e,part:"base",class:{"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--focused":this.hasFocus,"menu-item--is-rtl":isRtl()},href:this.href,role:"menuitem","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false",tabindex:this.disabled?void 0:"0",onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur(),onMouseEnter:()=>this.handleFocus(),onMouseLeave:()=>this.handleBlur(),onKeyDown:e=>{" "!==e.key&&"Spacebar"!==e.key&&"Enter"!==e.key||this.menuItem.click()},"aria-label":this.el.innerText,target:this.target},h("span",{part:"checked-icon",class:"menu-item__check"},h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check",viewBox:"0 0 16 16"},h("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"}))),h("span",{part:"prefix",class:"menu-item__prefix"},h("slot",{name:"prefix"})),h("span",{part:"label",class:"menu-item__label"},h("slot",null)),h("span",{part:"suffix",class:"menu-item__suffix"},h("slot",{name:"suffix"})))}static get is(){return"sc-menu-item"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-menu-item.scss"]}}static get styleUrls(){return{$:["sc-menu-item.css"]}}static get properties(){return{href:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Optional link to follow."},attribute:"href",reflect:!1},target:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The target of the link."},attribute:"target",reflect:!1},checked:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Draws the item in a checked state."},attribute:"checked",reflect:!0,defaultValue:"false"},value:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"A unique value to store in the menu item. This can be used as a way to identify menu items when selected."},attribute:"value",reflect:!0,defaultValue:"''"},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Draws the menu item in a disabled state."},attribute:"disabled",reflect:!0,defaultValue:"false"}}}static get states(){return{hasFocus:{}}}static get methods(){return{setFocus:{complexType:{signature:"(options?: FocusOptions) => Promise<void>",parameters:[{tags:[],text:""}],references:{Promise:{location:"global"},FocusOptions:{location:"global"}},return:"Promise<void>"},docs:{text:"Sets focus on the button.",tags:[]}},setBlur:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<void>"},docs:{text:"Removes focus from the button.",tags:[]}}}}static get elementRef(){return"el"}}