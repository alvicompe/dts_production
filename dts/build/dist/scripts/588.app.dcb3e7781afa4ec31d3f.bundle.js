"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[588],{96837:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(87462),r=n(45987),i=n(67294),a=n(86010),l=n(52543),u=n(93871),c=i.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.color,p=void 0===c?"default":c,s=e.component,d=void 0===s?"li":s,f=e.disableGutters,g=void 0!==f&&f,v=e.disableSticky,h=void 0!==v&&v,m=e.inset,b=void 0!==m&&m,x=(0,r.Z)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return i.createElement(d,(0,o.Z)({className:(0,a.Z)(n.root,l,"default"!==p&&n["color".concat((0,u.Z)(p))],b&&n.inset,!h&&n.sticky,!g&&n.gutters),ref:t},x))}));const p=(0,l.Z)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(c)},96588:(e,t,n)=>{n.d(t,{ZP:()=>E});var o=n(45987),r=n(4942),i=n(87462),a=n(67294),l=n(86010),u=n(52543),c=n(96617),p=n(96837),s=n(79895),d=n(17812),f=n(71267),g=n(17694);const v=(0,n(63786).Z)(a.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");var h=n(29439),m=n(95001),b=n(22775),x=n(55192),y=n(34236);function I(e){return void 0!==e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function C(e,t){for(var n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreAccents,n=void 0===t||t,o=e.ignoreCase,r=void 0===o||o,i=e.limit,a=e.matchFrom,l=void 0===a?"any":a,u=e.stringify,c=e.trim,p=void 0!==c&&c;return function(e,t){var o=t.inputValue,a=t.getOptionLabel,c=p?o.trim():o;r&&(c=c.toLowerCase()),n&&(c=I(c));var s=e.filter((function(e){var t=(u||a)(e);return r&&(t=t.toLowerCase()),n&&(t=I(t)),"start"===l?0===t.indexOf(c):t.indexOf(c)>-1}));return"number"==typeof i?s.slice(0,i):s}}();function S(e){e.anchorEl,e.open;var t=(0,o.Z)(e,["anchorEl","open"]);return a.createElement("div",t)}var Z=a.createElement(g.Z,{fontSize:"small"}),k=a.createElement(v,null),P=a.forwardRef((function(e,t){e.autoComplete,e.autoHighlight,e.autoSelect,e.blurOnSelect;var n,r=e.ChipProps,u=e.classes,g=e.className,v=(void 0===e.clearOnBlur&&e.freeSolo,e.clearOnEscape,e.clearText),I=void 0===v?"Clear":v,P=e.closeIcon,E=void 0===P?Z:P,L=e.closeText,T=void 0===L?"Close":L,w=(void 0===(e.debug,e.defaultValue)&&e.multiple,e.disableClearable),D=void 0!==w&&w,A=(e.disableCloseOnSelect,e.disabled),$=void 0!==A&&A,N=(e.disabledItemsFocusable,e.disableListWrap,e.disablePortal),R=void 0!==N&&N,H=(e.filterOptions,e.filterSelectedOptions,e.forcePopupIcon),F=void 0===H?"auto":H,M=e.freeSolo,z=void 0!==M&&M,W=e.fullWidth,V=void 0!==W&&W,B=e.getLimitTagsText,q=void 0===B?function(e){return"+".concat(e)}:B,K=(e.getOptionDisabled,e.getOptionLabel),G=void 0===K?function(e){return e}:K,U=(e.getOptionSelected,e.groupBy),_=(void 0===e.handleHomeEndKeys&&e.freeSolo,e.id,e.includeInputInList,e.inputValue,e.limitTags),j=void 0===_?-1:_,J=e.ListboxComponent,Q=void 0===J?"ul":J,X=e.ListboxProps,Y=e.loading,ee=void 0!==Y&&Y,te=e.loadingText,ne=void 0===te?"Loading…":te,oe=e.multiple,re=void 0!==oe&&oe,ie=e.noOptionsText,ae=void 0===ie?"No options":ie,le=(e.onChange,e.onClose,e.onHighlightChange,e.onInputChange,e.onOpen,e.open,e.openOnFocus,e.openText),ue=void 0===le?"Open":le,ce=(e.options,e.PaperComponent),pe=void 0===ce?s.Z:ce,se=e.PopperComponent,de=void 0===se?c.Z:se,fe=e.popupIcon,ge=void 0===fe?k:fe,ve=e.renderGroup,he=e.renderInput,me=e.renderOption,be=e.renderTags,xe=(void 0===e.selectOnFocus&&e.freeSolo,e.size),ye=void 0===xe?"medium":xe,Ie=(e.value,(0,o.Z)(e,["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","classes","className","clearOnBlur","clearOnEscape","clearText","closeIcon","closeText","debug","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","getOptionSelected","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"])),Ce=R?S:de,Oe=function(e){var t=e.autoComplete,n=void 0!==t&&t,o=e.autoHighlight,r=void 0!==o&&o,l=e.autoSelect,u=void 0!==l&&l,c=e.blurOnSelect,p=void 0!==c&&c,s=e.clearOnBlur,d=void 0===s?!e.freeSolo:s,f=e.clearOnEscape,g=void 0!==f&&f,v=e.componentName,I=void 0===v?"useAutocomplete":v,S=e.debug,Z=void 0!==S&&S,k=e.defaultValue,P=void 0===k?e.multiple?[]:null:k,E=e.disableClearable,L=void 0!==E&&E,T=e.disableCloseOnSelect,w=void 0!==T&&T,D=e.disabledItemsFocusable,A=void 0!==D&&D,$=e.disableListWrap,N=void 0!==$&&$,R=e.filterOptions,H=void 0===R?O:R,F=e.filterSelectedOptions,M=void 0!==F&&F,z=e.freeSolo,W=void 0!==z&&z,V=e.getOptionDisabled,B=e.getOptionLabel,q=void 0===B?function(e){return e}:B,K=e.getOptionSelected,G=void 0===K?function(e,t){return e===t}:K,U=e.groupBy,_=e.handleHomeEndKeys,j=void 0===_?!e.freeSolo:_,J=e.id,Q=e.includeInputInList,X=void 0!==Q&&Q,Y=e.inputValue,ee=e.multiple,te=void 0!==ee&&ee,ne=e.onChange,oe=e.onClose,re=e.onHighlightChange,ie=e.onInputChange,ae=e.onOpen,le=e.open,ue=e.openOnFocus,ce=void 0!==ue&&ue,pe=e.options,se=e.selectOnFocus,de=void 0===se?!e.freeSolo:se,fe=e.value,ge=(0,m.Z)(J),ve=q,he=a.useRef(!1),me=a.useRef(!0),be=a.useRef(null),xe=a.useRef(null),ye=a.useState(null),Ie=ye[0],Ce=ye[1],Oe=a.useState(-1),Se=Oe[0],Ze=Oe[1],ke=r?0:-1,Pe=a.useRef(ke),Ee=(0,b.Z)({controlled:fe,default:P,name:I}),Le=(0,h.Z)(Ee,2),Te=Le[0],we=Le[1],De=(0,b.Z)({controlled:Y,default:"",name:I,state:"inputValue"}),Ae=(0,h.Z)(De,2),$e=Ae[0],Ne=Ae[1],Re=a.useState(!1),He=Re[0],Fe=Re[1],Me=(0,x.Z)((function(e,t){var n;if(te)n="";else if(null==t)n="";else{var o=ve(t);n="string"==typeof o?o:""}$e!==n&&(Ne(n),ie&&ie(e,n,"reset"))}));a.useEffect((function(){Me(null,Te)}),[Te,Me]);var ze=(0,b.Z)({controlled:le,default:!1,name:I,state:"open"}),We=(0,h.Z)(ze,2),Ve=We[0],Be=We[1],qe=!te&&null!=Te&&$e===ve(Te),Ke=Ve,Ge=Ke?H(pe.filter((function(e){return!M||!(te?Te:[Te]).some((function(t){return null!==t&&G(e,t)}))})),{inputValue:qe?"":$e,getOptionLabel:ve}):[],Ue=(0,x.Z)((function(e){-1===e?be.current.focus():Ie.querySelector('[data-tag-index="'.concat(e,'"]')).focus()}));a.useEffect((function(){te&&Se>Te.length-1&&(Ze(-1),Ue(-1))}),[Te,te,Se,Ue]);var _e=(0,x.Z)((function(e){var t=e.event,n=e.index,o=e.reason,r=void 0===o?"auto":o;if(Pe.current=n,-1===n?be.current.removeAttribute("aria-activedescendant"):be.current.setAttribute("aria-activedescendant","".concat(ge,"-option-").concat(n)),re&&re(t,-1===n?null:Ge[n],r),xe.current){var i=xe.current.querySelector("[data-focus]");i&&i.removeAttribute("data-focus");var a=xe.current.parentElement.querySelector('[role="listbox"]');if(a)if(-1!==n){var l=xe.current.querySelector('[data-option-index="'.concat(n,'"]'));if(l&&(l.setAttribute("data-focus","true"),a.scrollHeight>a.clientHeight&&"mouse"!==r)){var u=l,c=a.clientHeight+a.scrollTop,p=u.offsetTop+u.offsetHeight;p>c?a.scrollTop=p-a.clientHeight:u.offsetTop-u.offsetHeight*(U?1.3:0)<a.scrollTop&&(a.scrollTop=u.offsetTop-u.offsetHeight*(U?1.3:0))}}else a.scrollTop=0}})),je=(0,x.Z)((function(e){var t=e.event,o=e.diff,r=e.direction,i=void 0===r?"next":r,a=e.reason,l=void 0===a?"auto":a;if(Ke){var u=function(e,t){if(!xe.current||-1===e)return-1;for(var n=e;;){if("next"===t&&n===Ge.length||"previous"===t&&-1===n)return-1;var o=xe.current.querySelector('[data-option-index="'.concat(n,'"]')),r=!A&&o&&(o.disabled||"true"===o.getAttribute("aria-disabled"));if(!(o&&!o.hasAttribute("tabindex")||r))return n;n+="next"===t?1:-1}}(function(){var e=Ge.length-1;if("reset"===o)return ke;if("start"===o)return 0;if("end"===o)return e;var t=Pe.current+o;return t<0?-1===t&&X?-1:N&&-1!==Pe.current||Math.abs(o)>1?0:e:t>e?t===e+1&&X?-1:N||Math.abs(o)>1?e:0:t}(),i);if(_e({index:u,reason:l,event:t}),n&&"reset"!==o)if(-1===u)be.current.value=$e;else{var c=ve(Ge[u]);be.current.value=c,0===c.toLowerCase().indexOf($e.toLowerCase())&&$e.length>0&&be.current.setSelectionRange($e.length,c.length)}}})),Je=a.useCallback((function(){if(Ke){var e=te?Te[0]:Te;if(0!==Ge.length&&null!=e){if(xe.current)if(M||null==e)Pe.current>=Ge.length-1?_e({index:Ge.length-1}):_e({index:Pe.current});else{var t=Ge[Pe.current];if(te&&t&&-1!==C(Te,(function(e){return G(t,e)})))return;var n=C(Ge,(function(t){return G(t,e)}));-1===n?je({diff:"reset"}):_e({index:n})}}else je({diff:"reset"})}}),[0===Ge.length,!te&&Te,M,je,_e,Ke,$e,te]),Qe=(0,x.Z)((function(e){(0,y.Z)(xe,e),e&&Je()}));a.useEffect((function(){Je()}),[Je]);var Xe=function(e){Ve||(Be(!0),ae&&ae(e))},Ye=function(e,t){Ve&&(Be(!1),oe&&oe(e,t))},et=function(e,t,n,o){Te!==t&&(ne&&ne(e,t,n,o),we(t))},tt=a.useRef(!1),nt=function(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"options",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"select-option",r=t;if(te){var i=C(r=Array.isArray(Te)?Te.slice():[],(function(e){return G(t,e)}));-1===i?r.push(t):"freeSolo"!==n&&(r.splice(i,1),o="remove-option")}Me(e,r),et(e,r,o,{option:t}),w||Ye(e,o),(!0===p||"touch"===p&&tt.current||"mouse"===p&&!tt.current)&&be.current.blur()},ot=function(e,t){if(te){Ye(e,"toggleInput");var n=Se;-1===Se?""===$e&&"previous"===t&&(n=Te.length-1):((n+="next"===t?1:-1)<0&&(n=0),n===Te.length&&(n=-1)),n=function(e,t){if(-1===e)return-1;for(var n=e;;){if("next"===t&&n===Te.length||"previous"===t&&-1===n)return-1;var o=Ie.querySelector('[data-tag-index="'.concat(n,'"]'));if(!o||o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t),Ze(n),Ue(n)}},rt=function(e){he.current=!0,Ne(""),ie&&ie(e,"","clear"),et(e,te?[]:null,"clear")},it=function(e){return function(t){switch(-1!==Se&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(Ze(-1),Ue(-1)),t.key){case"Home":Ke&&j&&(t.preventDefault(),je({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":Ke&&j&&(t.preventDefault(),je({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),je({diff:-5,direction:"previous",reason:"keyboard",event:t}),Xe(t);break;case"PageDown":t.preventDefault(),je({diff:5,direction:"next",reason:"keyboard",event:t}),Xe(t);break;case"ArrowDown":t.preventDefault(),je({diff:1,direction:"next",reason:"keyboard",event:t}),Xe(t);break;case"ArrowUp":t.preventDefault(),je({diff:-1,direction:"previous",reason:"keyboard",event:t}),Xe(t);break;case"ArrowLeft":ot(t,"previous");break;case"ArrowRight":ot(t,"next");break;case"Enter":if(229===t.which)break;if(-1!==Pe.current&&Ke){var o=Ge[Pe.current],r=!!V&&V(o);if(t.preventDefault(),r)return;nt(t,o,"select-option"),n&&be.current.setSelectionRange(be.current.value.length,be.current.value.length)}else W&&""!==$e&&!1===qe&&(te&&t.preventDefault(),nt(t,$e,"create-option","freeSolo"));break;case"Escape":Ke?(t.preventDefault(),t.stopPropagation(),Ye(t,"escape")):g&&(""!==$e||te&&Te.length>0)&&(t.preventDefault(),t.stopPropagation(),rt(t));break;case"Backspace":if(te&&""===$e&&Te.length>0){var i=-1===Se?Te.length-1:Se,a=Te.slice();a.splice(i,1),et(t,a,"remove-option",{option:Te[i]})}}e.onKeyDown&&e.onKeyDown(t)}},at=function(e){Fe(!0),ce&&!he.current&&Xe(e)},lt=function(e){null===xe.current||document.activeElement!==xe.current.parentElement?(Fe(!1),me.current=!0,he.current=!1,Z&&""!==$e||(u&&-1!==Pe.current&&Ke?nt(e,Ge[Pe.current],"blur"):u&&W&&""!==$e?nt(e,$e,"blur","freeSolo"):d&&Me(e,Te),Ye(e,"blur"))):be.current.focus()},ut=function(e){var t=e.target.value;$e!==t&&(Ne(t),ie&&ie(e,t,"input")),""===t?L||te||et(e,null,"clear"):Xe(e)},ct=function(e){_e({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},pt=function(){tt.current=!0},st=function(e){var t=Number(e.currentTarget.getAttribute("data-option-index"));nt(e,Ge[t],"select-option"),tt.current=!1},dt=function(e){return function(t){var n=Te.slice();n.splice(e,1),et(t,n,"remove-option",{option:Te[e]})}},ft=function(e){Ve?Ye(e,"toggleInput"):Xe(e)},gt=function(e){e.target.getAttribute("id")!==ge&&e.preventDefault()},vt=function(){be.current.focus(),de&&me.current&&be.current.selectionEnd-be.current.selectionStart==0&&be.current.select(),me.current=!1},ht=function(e){""!==$e&&Ve||ft(e)},mt=W&&$e.length>0;mt=mt||(te?Te.length>0:null!==Te);var bt=Ge;return U&&(new Map,bt=Ge.reduce((function(e,t,n){var o=U(t);return e.length>0&&e[e.length-1].group===o?e[e.length-1].options.push(t):e.push({key:n,index:n,group:o,options:[t]}),e}),[])),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)({"aria-owns":Ke?"".concat(ge,"-popup"):null,role:"combobox","aria-expanded":Ke},e,{onKeyDown:it(e),onMouseDown:gt,onClick:vt})},getInputLabelProps:function(){return{id:"".concat(ge,"-label"),htmlFor:ge}},getInputProps:function(){return{id:ge,value:$e,onBlur:lt,onFocus:at,onChange:ut,onMouseDown:ht,"aria-activedescendant":Ke?"":null,"aria-autocomplete":n?"both":"list","aria-controls":Ke?"".concat(ge,"-popup"):null,autoComplete:"off",ref:be,autoCapitalize:"none",spellCheck:"false"}},getClearProps:function(){return{tabIndex:-1,onClick:rt}},getPopupIndicatorProps:function(){return{tabIndex:-1,onClick:ft}},getTagProps:function(e){var t=e.index;return{key:t,"data-tag-index":t,tabIndex:-1,onDelete:dt(t)}},getListboxProps:function(){return{role:"listbox",id:"".concat(ge,"-popup"),"aria-labelledby":"".concat(ge,"-label"),ref:Qe,onMouseDown:function(e){e.preventDefault()}}},getOptionProps:function(e){var t=e.index,n=e.option,o=(te?Te:[Te]).some((function(e){return null!=e&&G(n,e)})),r=!!V&&V(n);return{key:t,tabIndex:-1,role:"option",id:"".concat(ge,"-option-").concat(t),onMouseOver:ct,onClick:st,onTouchStart:pt,"data-option-index":t,"aria-disabled":r,"aria-selected":o}},id:ge,inputValue:$e,value:Te,dirty:mt,popupOpen:Ke,focused:He||-1!==Se,anchorEl:Ie,setAnchorEl:Ce,focusedTag:Se,groupedOptions:bt}}((0,i.Z)({},e,{componentName:"Autocomplete"})),Se=Oe.getRootProps,Ze=Oe.getInputProps,ke=Oe.getInputLabelProps,Pe=Oe.getPopupIndicatorProps,Ee=Oe.getClearProps,Le=Oe.getTagProps,Te=Oe.getListboxProps,we=Oe.getOptionProps,De=Oe.value,Ae=Oe.dirty,$e=Oe.id,Ne=Oe.popupOpen,Re=Oe.focused,He=Oe.focusedTag,Fe=Oe.anchorEl,Me=Oe.setAnchorEl,ze=Oe.inputValue,We=Oe.groupedOptions;if(re&&De.length>0){var Ve=function(e){return(0,i.Z)({className:(0,l.Z)(u.tag,"small"===ye&&u.tagSizeSmall),disabled:$},Le(e))};n=be?be(De,Ve):De.map((function(e,t){return a.createElement(f.Z,(0,i.Z)({label:G(e),size:ye},Ve({index:t}),r))}))}if(j>-1&&Array.isArray(n)){var Be=n.length-j;!Re&&Be>0&&(n=n.splice(0,j)).push(a.createElement("span",{className:u.tag,key:n.length},q(Be)))}var qe=ve||function(e){return a.createElement("li",{key:e.key},a.createElement(p.Z,{className:u.groupLabel,component:"div"},e.group),a.createElement("ul",{className:u.groupUl},e.children))},Ke=me||G,Ge=function(e,t){var n=we({option:e,index:t});return a.createElement("li",(0,i.Z)({},n,{className:u.option}),Ke(e,{selected:n["aria-selected"],inputValue:ze}))},Ue=!D&&!$,_e=(!z||!0===F)&&!1!==F;return a.createElement(a.Fragment,null,a.createElement("div",(0,i.Z)({ref:t,className:(0,l.Z)(u.root,g,Re&&u.focused,V&&u.fullWidth,Ue&&u.hasClearIcon,_e&&u.hasPopupIcon)},Se(Ie)),he({id:$e,disabled:$,fullWidth:!0,size:"small"===ye?"small":void 0,InputLabelProps:ke(),InputProps:{ref:Me,className:u.inputRoot,startAdornment:n,endAdornment:a.createElement("div",{className:u.endAdornment},Ue?a.createElement(d.Z,(0,i.Z)({},Ee(),{"aria-label":I,title:I,className:(0,l.Z)(u.clearIndicator,Ae&&u.clearIndicatorDirty)}),E):null,_e?a.createElement(d.Z,(0,i.Z)({},Pe(),{disabled:$,"aria-label":Ne?T:ue,title:Ne?T:ue,className:(0,l.Z)(u.popupIndicator,Ne&&u.popupIndicatorOpen)}),ge):null)},inputProps:(0,i.Z)({className:(0,l.Z)(u.input,-1===He&&u.inputFocused),disabled:$},Ze())})),Ne&&Fe?a.createElement(Ce,{className:(0,l.Z)(u.popper,R&&u.popperDisablePortal),style:{width:Fe?Fe.clientWidth:null},role:"presentation",anchorEl:Fe,open:!0},a.createElement(pe,{className:u.paper},ee&&0===We.length?a.createElement("div",{className:u.loading},ne):null,0!==We.length||z||ee?null:a.createElement("div",{className:u.noOptions},ae),We.length>0?a.createElement(Q,(0,i.Z)({className:u.listbox},Te(),X),We.map((function(e,t){return U?qe({key:e.key,group:e.group,children:e.options.map((function(t,n){return Ge(t,e.index+n)}))}):Ge(e,t)}))):null)):null)}));const E=(0,u.Z)((function(e){var t;return{root:{"&$focused $clearIndicatorDirty":{visibility:"visible"},"@media (pointer: fine)":{"&:hover $clearIndicatorDirty":{visibility:"visible"}}},fullWidth:{width:"100%"},focused:{},tag:{margin:3,maxWidth:"calc(100% - 6px)"},tagSizeSmall:{margin:2,maxWidth:"calc(100% - 4px)"},hasPopupIcon:{},hasClearIcon:{},inputRoot:{flexWrap:"wrap","$hasPopupIcon &, $hasClearIcon &":{paddingRight:30},"$hasPopupIcon$hasClearIcon &":{paddingRight:56},"& $input":{width:0,minWidth:30},'&[class*="MuiInput-root"]':{paddingBottom:1,"& $input":{padding:4},"& $input:first-child":{padding:"6px 0"}},'&[class*="MuiInput-root"][class*="MuiInput-marginDense"]':{"& $input":{padding:"4px 4px 5px"},"& $input:first-child":{padding:"3px 0 6px"}},'&[class*="MuiOutlinedInput-root"]':{padding:9,"$hasPopupIcon &, $hasClearIcon &":{paddingRight:39},"$hasPopupIcon$hasClearIcon &":{paddingRight:65},"& $input":{padding:"9.5px 4px"},"& $input:first-child":{paddingLeft:6},"& $endAdornment":{right:9}},'&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]':{padding:6,"& $input":{padding:"4.5px 4px"}},'&[class*="MuiFilledInput-root"]':{paddingTop:19,paddingLeft:8,"$hasPopupIcon &, $hasClearIcon &":{paddingRight:39},"$hasPopupIcon$hasClearIcon &":{paddingRight:65},"& $input":{padding:"9px 4px"},"& $endAdornment":{right:9}},'&[class*="MuiFilledInput-root"][class*="MuiFilledInput-marginDense"]':{paddingBottom:1,"& $input":{padding:"4.5px 4px"}}},input:{flexGrow:1,textOverflow:"ellipsis",opacity:0},inputFocused:{opacity:1},endAdornment:{position:"absolute",right:0,top:"calc(50% - 14px)"},clearIndicator:{marginRight:-2,padding:4,visibility:"hidden"},clearIndicatorDirty:{},popupIndicator:{padding:2,marginRight:-2},popupIndicatorOpen:{transform:"rotate(180deg)"},popper:{zIndex:e.zIndex.modal},popperDisablePortal:{position:"absolute"},paper:(0,i.Z)({},e.typography.body1,{overflow:"hidden",margin:"4px 0"}),listbox:{listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto"},loading:{color:e.palette.text.secondary,padding:"14px 16px"},noOptions:{color:e.palette.text.secondary,padding:"14px 16px"},option:(t={minHeight:48,display:"flex",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16},(0,r.Z)(t,e.breakpoints.up("sm"),{minHeight:"auto"}),(0,r.Z)(t,'&[aria-selected="true"]',{backgroundColor:e.palette.action.selected}),(0,r.Z)(t,'&[data-focus="true"]',{backgroundColor:e.palette.action.hover}),(0,r.Z)(t,"&:active",{backgroundColor:e.palette.action.selected}),(0,r.Z)(t,'&[aria-disabled="true"]',{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"}),t),groupLabel:{backgroundColor:e.palette.background.paper,top:-8},groupUl:{padding:0,"& $option":{paddingLeft:24}}}}),{name:"MuiAutocomplete"})(P)}}]);