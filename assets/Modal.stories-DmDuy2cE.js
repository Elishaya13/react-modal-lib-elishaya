import{R as e}from"./index-CDs2tPxN.js";const V="_modal_jv9eh_1",A="_modalShow_jv9eh_14",L="_modalContent_jv9eh_18",$="_btnClose_jv9eh_35",D="_icon_jv9eh_54",s={modal:V,modalShow:A,modalContent:L,btnClose:$,icon:D},q=({styleIcon:t,iconColor:r})=>{switch(t){case"error":return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:r,width:"64",height:"64",className:s.icon,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet"},e.createElement("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36-1.41 1.42z"}));case"check":return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:r,width:"64",height:"64",className:s.icon,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet"},e.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5.56 7.74-6.39 6.4a1 1 0 0 1-1.42-.01l-3.3-3.34-.01-.01a.993.993 0 0 1 .01-1.4.996.996 0 0 1 1.41 0l2.6 2.62 5.68-5.69a.996.996 0 0 1 1.41 0v.02h.01c.39.39.39 1.02 0 1.41"}));case"none":return null}};q.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{styleIcon:{required:!0,tsType:{name:"union",raw:"'check' | 'error' | 'none'",elements:[{name:"literal",value:"'check'"},{name:"literal",value:"'error'"},{name:"literal",value:"'none'"}]},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""}}};const B=({isOpen:t,onClose:r,children:n,modalBorderRadius:o,gapContent:a})=>{const p=l=>{l.target===l.currentTarget&&r()},m=a?`${a}px`:void 0;return e.createElement("div",{className:`${s.modal} ${t?s.modalShow:""}`,onClick:p},e.createElement("div",{className:s.modalContent,style:{borderRadius:o,gap:m}},n))},E=({title:t})=>e.createElement("h3",null,t),I=({message:t})=>e.createElement("p",null,t),R=({onClose:t,buttonMsg:r,btnTextColor:n,btnBgColor:o,borderRadius:a})=>e.createElement("button",{className:s.btnClose,onClick:t,style:{color:n,backgroundColor:o,borderRadius:a}},r);B.__docgenInfo={description:"",methods:[],displayName:"ModalWrapper",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},modalBorderRadius:{required:!1,tsType:{name:"string"},description:""},gapContent:{required:!1,tsType:{name:"number"},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{message:{required:!0,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},buttonMsg:{required:!0,tsType:{name:"string"},description:""},btnTextColor:{required:!1,tsType:{name:"string"},description:""},btnBgColor:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""}}};const S=({isOpen:t=!1,styleIcon:r,onClose:n=()=>{},title:o,message:a,buttonMsg:p,iconColor:m,btnBgColor:l,btnTextColor:k,btnBorderRadius:O="10px",modalBorderRadius:N="15px",gapContent:j=0})=>e.createElement(B,{isOpen:t,onClose:n,modalBorderRadius:N,gapContent:j},r&&e.createElement(q,{styleIcon:r,iconColor:m}),o&&e.createElement(E,{title:o}),e.createElement(I,{message:a}),e.createElement(R,{onClose:n,buttonMsg:p,btnTextColor:k,btnBgColor:l,borderRadius:O}));S.__docgenInfo={description:"UI component for user interaction",methods:[],displayName:"Modal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:`Should the modal be shown?
@default false`,defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional close handler",defaultValue:{value:"() => {}",computed:!1}},styleIcon:{required:!1,tsType:{name:"union",raw:"'check' | 'error' | 'none'",elements:[{name:"literal",value:"'check'"},{name:"literal",value:"'error'"},{name:"literal",value:"'none'"}]},description:"Style of the icon"},title:{required:!1,tsType:{name:"string"},description:"Modal title"},message:{required:!0,tsType:{name:"string"},description:"Modal message"},buttonMsg:{required:!0,tsType:{name:"string"},description:"Modal button message"},iconColor:{required:!1,tsType:{name:"string"},description:"Icon color"},btnTextColor:{required:!1,tsType:{name:"string"},description:"Button text color"},btnBgColor:{required:!1,tsType:{name:"string"},description:"Button background color"},btnBorderRadius:{required:!1,tsType:{name:"union",raw:'"0px" | "5px" | "10px" | "15px" | "50px"',elements:[{name:"literal",value:'"0px"'},{name:"literal",value:'"5px"'},{name:"literal",value:'"10px"'},{name:"literal",value:'"15px"'},{name:"literal",value:'"50px"'}]},description:"Bouton Border radius",defaultValue:{value:'"10px"',computed:!1}},modalBorderRadius:{required:!1,tsType:{name:"union",raw:'"0px" | "5px" | "10px" | "15px" | "50px"',elements:[{name:"literal",value:'"0px"'},{name:"literal",value:'"5px"'},{name:"literal",value:'"10px"'},{name:"literal",value:'"15px"'},{name:"literal",value:'"50px"'}]},description:"Modal border radius",defaultValue:{value:'"15px"',computed:!1}},gapContent:{required:!1,tsType:{name:"number"},description:"Gap between content",defaultValue:{value:"0",computed:!1}}}};const H={title:"Modal",component:S,parameters:{layout:"fullscreen"},tags:["autodocs"]},i={args:{isOpen:!0,styleIcon:"check",onClose:()=>{},title:"Modal Title",message:"Modal message here !",buttonMsg:"Button",gapContent:0}},d={args:{isOpen:!0,styleIcon:"none",onClose:()=>{},message:"Simple modal !",buttonMsg:"Close",btnBgColor:"blue",btnTextColor:"white",btnBorderRadius:"0px",modalBorderRadius:"0px"}},c={args:{isOpen:!0,styleIcon:"check",onClose:()=>{},title:"Success!",message:"Element has been added successfully!",buttonMsg:"Close",iconColor:"green",btnTextColor:"white",btnBgColor:"#5c469b"}},u={args:{isOpen:!0,styleIcon:"error",iconColor:"red",onClose:()=>{},title:"Error",message:"An error has occurred !",buttonMsg:"OK",btnBgColor:"red",btnTextColor:"white"}};var g,h,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    styleIcon: 'check',
    onClose: () => {},
    title: 'Modal Title',
    message: 'Modal message here !',
    buttonMsg: 'Button',
    gapContent: 0
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,C,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    styleIcon: 'none',
    onClose: () => {},
    message: 'Simple modal !',
    buttonMsg: 'Close',
    btnBgColor: 'blue',
    btnTextColor: 'white',
    btnBorderRadius: '0px',
    modalBorderRadius: '0px'
  }
}`,...(f=(C=d.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,v,M;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    styleIcon: 'check',
    onClose: () => {},
    title: 'Success!',
    message: 'Element has been added successfully!',
    buttonMsg: 'Close',
    iconColor: 'green',
    btnTextColor: 'white',
    btnBgColor: '#5c469b'
  }
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var T,w,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    styleIcon: 'error',
    iconColor: 'red',
    onClose: () => {},
    title: 'Error',
    message: 'An error has occurred !',
    buttonMsg: 'OK',
    btnBgColor: 'red',
    btnTextColor: 'white'
  }
}`,...(_=(w=u.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const K=["Default","Simple","Custom","ErrorModal"];export{c as Custom,i as Default,u as ErrorModal,d as Simple,K as __namedExportsOrder,H as default};
