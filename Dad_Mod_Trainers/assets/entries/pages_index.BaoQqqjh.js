import{r as i,R as p,j as e,d as m,a as y,b as o,i as u,c as w,P as f,e as v,f as j}from"../chunks/chunk-Cr7mJoMM.js";import{j as S}from"../chunks/chunk-Buh9zk-E.js";import{g as n}from"../chunks/chunk-AAFBr2Tz.js";/* empty css                      */const h=i.forwardRef(({value:t,defaultValue:a,checked:s,defaultChecked:r,...l},d)=>{const{renderer:c}=i.useContext(p),g=c==="canvas"?String(t??a)+String(s??r):void 0;return i.createElement("input",{...l,key:g,defaultValue:t??a,defaultChecked:s??r,ref:d})});h.displayName="Input";const x=void 0,T=[{id:"zmzABjaS8z179iPw3tdn3"},{id:"GxvgHGmOaGGWIs0uQlK_x",maxWidth:991},{id:"labN6Yph4ioaaik65wTc7",maxWidth:767},{id:"LtIejDo96krI0PmqyFABE",maxWidth:479}],N=void 0,k=[],P=[],b=t=>e.jsxs("body",{className:"w-element w-element-7",children:[e.jsxs("div",{className:"w-element w-element-24",children:[e.jsx(n,{href:"/trainers",className:"w-element w-trainers",children:"Trainers"}),e.jsx(n,{href:"/mods",className:"w-element w-mods",children:"Mods"}),e.jsx(n,{href:"/merch",className:"w-element w-merch",children:"Merch"}),e.jsx(n,{href:"/donations",className:"w-element w-about-me",children:"About Me"})]}),e.jsxs("div",{className:"w-element w-element-22",children:[e.jsx(m,{src:"/assets/Designer_(5)_f7Vo7vkFrrc-c4KZdkP5N.png",width:1080,height:1080,alt:"",className:"w-image w-image-6"}),e.jsx("h1",{className:"w-element w-h1",children:" GAME TRAINERS AND MODS "}),e.jsxs("div",{className:"w-element",children:[e.jsx("p",{className:"w-element w-element-21",children:e.jsx("span",{className:"w-element w-element-23",children:"BECAUSE WE'RE IN OUR 30'S NOW"})}),e.jsx("search",{className:"w-element w-element-46",children:e.jsx(h,{placeholder:"search for games",className:"w-element w-element-47"})})]})]}),e.jsx("h1",{className:"w-element w-element-25",children:"Recently Added"}),e.jsxs("div",{className:"w-element w-element-43",children:[e.jsxs(n,{href:"/darksiders-warmasterd-edition",className:"w-element w-element-41",children:[e.jsx(m,{src:"/assets/Darksiders_Warmastered_Edition_Coverart_qO2BPrXjnLdupkZiMz0DK.jpg",className:"w-image w-image-10"}),e.jsx("p",{className:"w-element w-element-42",children:"Darksiders Warmastered Edition"})]}),e.jsxs(n,{href:"/schedule-i",className:"w-element w-element-44",children:[e.jsx(m,{src:"/assets/Schedule_I_C__bmxLl5xXb8tmaFDGi_.jpg",className:"w-image w-image-11"}),e.jsx("p",{className:"w-element w-element-45",children:"Schedule I"})]})]}),e.jsx("div",{className:"w-element w-element-48"}),e.jsx(S,{code:`<script>
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('input[placeholder="search for games"]');

  // 1. Watertight directory mapping matching your exact live URLs
  const trainerDirectory = {
    "darksiders": "/darksiders-warmastered-edition/",
    "darksiders warmastered": "/darksiders-warmastered-edition/",
    "schedule 1": "/schedule-1/",
    "schedule": "/schedule-1/"
  };

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        // Clean up any old notification if it exists from a previous search
        const existingAlert = document.getElementById('code-no-results');
        if (existingAlert) existingAlert.remove();

        // 2. Match the search term against your directory
        let targetPath = null;
        for (const key in trainerDirectory) {
          if (query.includes(key) || key.includes(query)) {
            targetPath = trainerDirectory[key];
            break;
          }
        }

        // 3. Routing or Injection logic
        if (targetPath) {
          // Safety Check: If inside the Webstudio builder/preview environment, show the popup alert
          if (window.location.hostname.includes("webstudio")) {
            alert("Success! Live site will instantly redirect to: " + targetPath);
          } else {
            // Live Site Fix: Force an absolute URL path using the domain origin to prevent Netlify routing issues
            window.location.href = window.location.origin + targetPath;
          }
        } else {
          // Game NOT found! Build and position the text directly under the search bar
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
`,className:"w-html-embed w-content-embed-1"})]}),C=t=>{const{origin:a,pathname:s,search:r}=new URL(t);return`${a}${s}${r}`},A=i.memo(({pageKey:t,system:a})=>e.jsx(b,{system:a},t),(t,a)=>t.pageKey===a.pageKey),E=({data:t})=>{const{system:a,resources:s,url:r,pageMeta:l}=t,d=C(r),c=i.useMemo(()=>({imageLoader:u,assetBaseUrl:o,assetUrlsByPath:y,resources:s,breakpoints:T,onError:console.error}),[s]);return e.jsxs(p.Provider,{value:c,children:[e.jsx(w.Provider,{value:r,children:e.jsx(A,{pageKey:d,system:a})}),e.jsx(f,{url:r,pageMeta:l,siteName:x,imageLoader:u,assetBaseUrl:o}),e.jsx(v,{children:l.title})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),D=({})=>e.jsxs(e.Fragment,{children:[x,N,k.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"font",crossOrigin:"anonymous"},t)),P.map(t=>e.jsx("link",{rel:"preload",href:`${o}${t}`,as:"image"},t))]}),_=Object.freeze(Object.defineProperty({__proto__:null,Head:D},Symbol.toStringTag,{value:"Module"})),O={hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},guardEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{O as configValuesSerialized};
