import{r as l,R as p,j as e,a as f,b as o,i as u,c as w,P as y,d as v,e as k}from"../chunks/chunk-BtIZ1B4I.js";import{j}from"../chunks/chunk--gu_G_9t.js";import{g as n}from"../chunks/chunk-CigVMrxD.js";import{d as m}from"../chunks/chunk-CJQPO_5X.js";/* empty css                      */const h=l.forwardRef(({value:t,defaultValue:a,checked:r,defaultChecked:s,...i},d)=>{const{renderer:c}=l.useContext(p),g=c==="canvas"?String(t??a)+String(r??s):void 0;return l.createElement("input",{...i,key:g,defaultValue:t??a,defaultChecked:r??s,ref:d})});h.displayName="Input";const x=void 0,S=[{id:"zmzABjaS8z179iPw3tdn3"},{id:"GxvgHGmOaGGWIs0uQlK_x",maxWidth:991},{id:"labN6Yph4ioaaik65wTc7",maxWidth:767},{id:"LtIejDo96krI0PmqyFABE",maxWidth:479}],T=void 0,N=[],A=[],b=t=>e.jsxs("body",{className:"w-element w-element-7",children:[e.jsxs("div",{className:"w-element w-element-24",children:[e.jsx(n,{href:"/trainers",className:"w-element w-trainers",children:"Trainers"}),e.jsx(n,{href:"/mods",className:"w-element w-mods",children:"Mods"}),e.jsx(n,{href:"/merch",className:"w-element w-merch",children:"Merch"}),e.jsx(n,{className:"w-element w-element-49",children:"Suggestions"}),e.jsx(n,{href:"/about-me",className:"w-element w-about-me",children:"About Me"})]}),e.jsxs("div",{className:"w-element w-element-22",children:[e.jsx(m,{src:"/assets/Designer_(5)_f7Vo7vkFrrc-c4KZdkP5N.png",width:1080,height:1080,alt:"",className:"w-image w-image-6"}),e.jsx("h1",{className:"w-element w-h1",children:" GAME TRAINERS AND MODS "}),e.jsxs("div",{className:"w-element",children:[e.jsx("p",{className:"w-element w-element-21",children:e.jsx("span",{className:"w-element w-element-23",children:"BECAUSE WE'RE IN OUR 30'S NOW"})}),e.jsx("search",{className:"w-element w-element-46",children:e.jsx(h,{placeholder:"search for games",className:"w-element w-element-47"})})]})]}),e.jsx("h1",{className:"w-element w-element-25",children:"Recently Added"}),e.jsxs("div",{className:"w-element w-element-43",children:[e.jsxs(n,{href:"/darksiders-warmasterd-edition",className:"w-element w-element-41",children:[e.jsx(m,{src:"/assets/Darksiders_Warmastered_Edition_Coverart_qO2BPrXjnLdupkZiMz0DK.jpg",className:"w-image w-image-10"}),e.jsx("p",{className:"w-element w-element-42",children:"Darksiders Warmastered Edition"})]}),e.jsxs(n,{href:"/schedule-i",className:"w-element w-element-44",children:[e.jsx(m,{src:"/assets/Schedule_I_C__bmxLl5xXb8tmaFDGi_.jpg",className:"w-image w-image-11"}),e.jsx("p",{className:"w-element w-element-45",children:"Schedule I"})]})]}),e.jsx("div",{className:"w-element w-element-48"}),e.jsx(j,{code:`<script>
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('input[placeholder="search for games"]');

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        // Clean up any old notification if it exists from a previous search
        const existingAlert = document.getElementById('code-no-results');
        if (existingAlert) existingAlert.remove();

        // 1. DYNAMIC MATCHING: Look through all links (<a> tags) on your homepage
        const allLinks = Array.from(document.querySelectorAll('a'));
        let targetLink = null;

        // Look for a link on your page whose text or web address matches what was typed
        for (const link of allLinks) {
          const linkText = link.innerText.toLowerCase();
          const linkHref = link.getAttribute('href') ? link.getAttribute('href').toLowerCase() : '';
          
          if ((linkText.includes(query) || linkHref.includes(query)) && !linkHref.includes('#') && linkHref !== '/' && linkHref !== '') {
            targetLink = link.getAttribute('href');
            break;
          }
        }

        // 2. Routing logic using the exact link that already works on your homepage
        if (targetLink) {
          // Safety Check: If inside the Webstudio builder environment, show the popup alert
          if (window.location.hostname.includes("webstudio")) {
            alert("Success! This matches a link on your page. Live site will go to: " + targetLink);
          } else {
            // Live Site: Go to the exact link that works when clicked
            window.location.href = targetLink;
          }
        } else {
          // Game NOT found in your homepage cards! Build and position the text directly under the search bar
          const alertText = document.createElement('div');
          alertText.id = 'code-no-results';
          
          // Custom Typography settings matching your branding style
          alertText.style.color = 'rgb(33, 171, 214)';
          alertText.style.fontFamily = '"Comic Sans MS", "Caveat", "Permanent Marker", cursive, sans-serif'; 
          alertText.style.fontWeight = '600';
          alertText.style.fontStyle = 'italic';
          alertText.style.fontSize = '22px';
          alertText.style.textAlign = 'center';
          alertText.innerText = 'No Content Found';
          
          // Positioning Fix: Absolute layout prevents shifting surrounding page elements
          const parentSearchContainer = searchInput.closest('div');
          if (parentSearchContainer) {
            parentSearchContainer.style.position = 'relative'; 
            alertText.style.position = 'absolute';
            alertText.style.top = '100%'; 
            alertText.style.left = '50%';
            alertText.style.transform = 'translateX(-50%)'; 
            alertText.style.marginTop = '12px';
            alertText.style.whiteSpace = 'nowrap'; 
            
            parentSearchContainer.appendChild(alertText);
          }
        }
      }
    });
  }
});
<\/script>
`,className:"w-html-embed w-content-embed-1"})]}),C=t=>{const{origin:a,pathname:r,search:s}=new URL(t);return`${a}${r}${s}`},P=l.memo(({pageKey:t,system:a})=>e.jsx(b,{system:a},t),(t,a)=>t.pageKey===a.pageKey),E=({data:t})=>{const{system:a,resources:r,url:s,pageMeta:i}=t,d=C(s),c=l.useMemo(()=>({imageLoader:u,assetBaseUrl:o,assetUrlsByPath:f,resources:r,breakpoints:S,onError:console.error}),[r]);return e.jsxs(p.Provider,{value:c,children:[e.jsx(w.Provider,{value:s,children:e.jsx(P,{pageKey:d,system:a})}),e.jsx(y,{url:s,pageMeta:i,siteName:x,imageLoader:u,assetBaseUrl:o}),e.jsx(v,{children:i.title})]})},L=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),z=({})=>e.jsxs(e.Fragment,{children:[x,T,N.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),A.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]}),_=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),B={hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},guardEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{B as configValuesSerialized};
