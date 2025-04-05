import{u as S,_ as C}from"./index-B-NbR9U9.js";import{h as F,i as a,j as d,k as e,l as v,m as R,K as Z,L as T,r as g,u,t as y,p as k,M as I,c as D,N as b,O as U,P as A,F as z,Q as B,n as L,R as V,S as P,T as E,U as K}from"./vue-D5XXXFaU.js";import{u as O,r as W,a as M,b as q}from"./vueuse-ByBRqCiC.js";const X={class:"px-4 md:px-16"},Q={class:"max-w-7xl mx-auto px-5 flex flex-wrap gap-8 justify-between pt-16 pb-8"},G={class:"hidden md:block w-2/12 mb-5"},H={class:"list-none p-0"},J={__name:"theFooter",setup(m){return S(),(t,s)=>{const r=F("router-link");return a(),d("footer",X,[e("div",Q,[s[5]||(s[5]=e("div",{class:"md:w-7/12 mb-5"},[e("h3",{class:"text-lg font-bold mb-2"},"About Zetanium"),e("p",{class:"text-sm"}," Zetanium stands as a premier partner in IT services and staffing solutions, dedicated to bridging exceptional talent with transformative opportunities. We empower professionals to reach their full potential while driving businesses toward a future of optimized performance and innovation. ")],-1)),e("div",G,[s[4]||(s[4]=e("h3",{class:"text-lg font-bold mb-2"},"Quick Links",-1)),e("ul",H,[e("li",null,[v(r,{to:"#about_us",class:"no-underline hover:underline"},{default:R(()=>s[0]||(s[0]=[T("Home")])),_:1})]),s[1]||(s[1]=e("li",null,[e("a",{href:"#",class:"no-underline hover:underline"},"Services")],-1)),s[2]||(s[2]=e("li",null,[e("a",{href:"#",class:"no-underline hover:underline"},"Careers")],-1)),s[3]||(s[3]=e("li",null,[e("a",{href:"#",class:"no-underline hover:underline"},"Contact Us")],-1))])]),s[6]||(s[6]=Z('<div class="flex-1 mb-5"><h3 class="text-lg font-bold mb-2">Contact Us</h3><div class="text-sm"><div class="font-medium">Zetanium Global</div> 2588 Vicksburg Ln<br> Aurora, IL 60503<br><br><span class="font-medium">Phone:</span> 9296301231<br><span class="font-medium">Email:</span><a href="mailto:zetaniumglobal@gmail.com" class="no-underline hover:underline">zetaniumglobal@gmail.com</a></div></div>',1))]),s[7]||(s[7]=Z('<div class="text-center mt-3 pb-16"><h3 class="text-lg font-bold mb-2">Follow Us</h3><a href="#" class="mx-2 no-underline hover:underline">Facebook</a> | <a href="#" class="mx-2 no-underline hover:underline">Twitter</a> | <a href="https://www.linkedin.com/company/zetanium" class="mx-2 no-underline hover:underline" target="_blank">LinkedIn</a> | <a href="#" class="mx-2 no-underline hover:underline">Instagram</a></div><div class="text-center mt-5 pt-5 border-t border-[#555] pb-4"><p class="font-bold">&quot;Organize. Optimize. Synergize.&quot;</p><p class="text-sm">© 2025 Zetanium. All Rights Reserved.</p></div>',2))])}}},Y={key:0,class:"text-red-500 text-sm mt-2"},ee={key:1,class:"mt-4 text-sm text-green-600"},te={__name:"fileUpload",setup(m,{expose:t}){const s=g(null),r=g(null),l=g(""),n=g(null),c=["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],o=f=>(l.value="",c.includes(f.type)?f.size>500*1024?(l.value="File size must be less than 500KB.",!1):!0:(l.value="Only PDF or Word (.doc, .docx) files are allowed.",!1)),p=f=>{const _=f.target.files[0];_&&o(_)?r.value=_:(r.value=null,f.target.value="")},$=f=>{if(f&&f.length>0){const _=f[0];o(_)?r.value=_:r.value=null}},{isOverDropZone:j}=O(n,{onDrop:$,dataTypes:["application/pdf"],multiple:!1,preventDefaultForUnhandled:!0});return t({file:r}),(f,_)=>(a(),d("div",{ref_key:"dropZoneRef",ref:n,onClick:_[0]||(_[0]=x=>u(s).click()),class:I(["border border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all",u(j)?"border-blue-500 bg-blue-50":"border-zinc-700"])},[e("input",{ref_key:"fileInput",ref:s,type:"file",class:"hidden",accept:".pdf,.doc,.docx",onChange:p},null,544),_[1]||(_[1]=e("div",{class:"text-center"},[e("p",{class:"text-gray-500"},[T(" Drag and drop PDF here or "),e("span",{class:"text-blue-600 underline"},"browse")]),e("p",{class:"text-xs text-gray-400 mt-2"},"(Max size: 500KB)")],-1)),u(l)?(a(),d("div",Y,y(u(l)),1)):k("",!0),u(r)?(a(),d("div",ee," Selected File: "+y(u(r).name)+" ("+y((u(r).size/1024).toFixed(2))+" KB) ",1)):k("",!0)],2))}},se={class:"px-4 md:px-16 py-24 flex flex-wrap md:flex-nowrap gap-6",id:"contact_us"},ne={class:"md:w-1/2"},oe={class:"flex gap-4"},le={class:"w-1/2"},re={class:"w-1/2"},ie={class:"my-4"},ae={key:0,class:"text-red-500 text-sm mt-1"},ue={class:"my-4"},de={class:"my-4"},ce=["disabled","title"],pe={key:0,class:"fixed inset-0 bg-black opacity-75 flex items-center justify-center z-50"},me={class:"text-center opacity-100 text-white flex flex-col items-center"},fe={__name:"contactus",setup(m){S();const t=g(!1),s=async x=>{t.value=!0;try{await x()}finally{t.value=!1}},r=g(""),l=g(""),n=g(""),c=g(""),o=g(null),p=W(n,300),$=D(()=>/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(p.value)),j=D(()=>r.value+" "+l.value),f=D(()=>{var x;return r.value&&l.value&&$.value&&c.value&&((x=o.value)==null?void 0:x.file)}),_=async()=>{var i;if(!((i=o.value)!=null&&i.file)){alert("Please upload a PDF file.");return}const x=new FileReader;x.onloadend=async function(){const w=new URLSearchParams,N=x.result.split(",")[1];w.append("name",j.value),w.append("email",n.value),w.append("role",c.value),w.append("filename",o.value.file.name),w.append("contentType",o.value.file.type),w.append("resumeFile",N);try{await s(async()=>{(await fetch("https://script.google.com/macros/s/AKfycbyAnS1LTl-jNXb-M6UplN7JKGA04TD7fdT5vKQ7KvHQTEpzoX5ctXuFRKdW62zXq-tA/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:w})).ok?alert("Resume submitted successfully!"):alert("Resume submission failed. Please try again.")})}catch(h){console.error("Submission error:",h)}},x.readAsDataURL(o.value.file)};return(x,i)=>{const w=te,N=F("Icon");return a(),d(z,null,[e("div",se,[i[9]||(i[9]=e("div",{class:"md:w-1/2"},[e("div",{class:"font-medium text-center md:text-left text-4xl pb-4"},"Contact Us"),e("div",{class:"mb-8"}," Interested in working together? Fill out basic info and upload your resume, we will be in touch shortly. We can't wait to hear from you! ")],-1)),e("div",ne,[e("div",oe,[e("div",le,[i[4]||(i[4]=e("label",null,"First Name",-1)),b(e("input",{"onUpdate:modelValue":i[0]||(i[0]=h=>A(r)?r.value=h:null),class:"border border-zinc-700 rounded-lg h-10 px-2 w-full bg-transparent"},null,512),[[U,u(r)]])]),e("div",re,[i[5]||(i[5]=e("label",null,"Last Name",-1)),b(e("input",{"onUpdate:modelValue":i[1]||(i[1]=h=>A(l)?l.value=h:null),class:"border border-zinc-700 rounded-lg h-10 px-2 w-full bg-transparent"},null,512),[[U,u(l)]])])]),e("div",ie,[i[6]||(i[6]=e("label",null,"Email",-1)),b(e("input",{"onUpdate:modelValue":i[2]||(i[2]=h=>A(n)?n.value=h:null),type:"email",class:I(["rounded-lg h-10 px-2 w-full bg-transparent border",u(n)&&!u($)?"border-red-500":"border-zinc-700"])},null,2),[[U,u(n)]]),u(n)&&!u($)?(a(),d("p",ae," Please enter a valid email address. ")):k("",!0)]),e("div",ue,[i[7]||(i[7]=e("label",null,"Desired Role",-1)),b(e("input",{"onUpdate:modelValue":i[3]||(i[3]=h=>A(c)?c.value=h:null),type:"text",class:"border border-zinc-700 rounded-lg h-10 px-2 w-full bg-transparent"},null,512),[[U,u(c)]])]),e("div",de,[i[8]||(i[8]=e("label",null,"Resume",-1)),v(w,{ref_key:"fileUploadRef",ref:o},null,512)]),e("button",{onClick:_,class:I(["bg-purple-700 text-white w-[108px] py-2 rounded-lg hover:bg-purple-800 transition duration-200",{"bg-purple-700 cursor-pointer":u(f),"bg-gray-400 cursor-not-allowed":!u(f)}]),disabled:!u(f),title:u(f)?"":"Fill in all details and select resume to upload"}," Upload ",10,ce)])]),u(t)?(a(),d("div",pe,[e("div",me,[v(N,{icon:"line-md:loading-twotone-loop",width:"48",height:"48",class:"mb-4"}),i[10]||(i[10]=e("p",{class:"text-center"},"Uploading...",-1))])])):k("",!0)],64)}}},_e=C(fe,[["__scopeId","data-v-6c12bf6a"]]),ve={class:"px-4 md:px-16 py-12",id:"what_we_do"},xe={class:"grid gap-4 grid-cols-1 lg:grid-cols-3 justify-items-center"},be={class:"service-card p-8"},he={class:"text-xl font-medium my-4"},ge={class:"my-8"},we={__name:"principles",setup(m){const t=S();return(s,r)=>{const l=F("Icon"),n=B("motion-slide-visible-once-right");return a(),d("div",ve,[r[0]||(r[0]=e("div",{class:"font-medium text-4xl pb-12 text-center md:text-left"},"What We Do",-1)),e("div",xe,[(a(!0),d(z,null,L(u(t).principles,(c,o)=>b((a(),d("div",be,[e("div",he,[v(l,{icon:c.icon,width:32,height:32,class:"inline"},null,8,["icon"]),T(" "+y(c.name),1)]),e("div",ge,y(c.description),1)])),[[n]])),256))])])}}},ye=C(we,[["__scopeId","data-v-face2cd7"]]),Ie={},$e={class:"card"},ke={class:"content"};function Ce(m,t){return a(),d("div",$e,[t[0]||(t[0]=e("div",{class:"bg"},null,-1)),t[1]||(t[1]=e("div",{class:"blob"},null,-1)),e("div",ke,[V(m.$slots,"default",{},void 0,!0)])])}const Se=C(Ie,[["render",Ce],["__scopeId","data-v-cf460af8"]]),Fe={class:"bg-opacity-75 px-4 md:px-16 py-12",id:"what_we_are"},ze={class:"flex flex-wrap gap-8 justify-center"},Ue={class:"w-full flex justify-center items-center h-[120px]"},Ae={class:"text-sm"},De={__name:"services",setup(m){const t=S(),s=M(q);return D(()=>s.greaterOrEqual("md").value?32:s.greaterOrEqual("sm").value?24:16),(r,l)=>{const n=F("Icon"),c=Se,o=B("motion-slide-visible-once-left");return a(),d("div",Fe,[l[0]||(l[0]=e("div",{class:"font-medium text-4xl pb-16 text-center md:text-left"},"What we are",-1)),e("div",ze,[(a(!0),d(z,null,L(u(t).services,(p,$)=>b((a(),P(c,{key:$,class:"flex justify-center flex-col p-4"},{default:R(()=>[e("div",Ue,[p.icon?(a(),P(n,{key:0,icon:p.icon,class:I(`w-[64px] h-[64px] ${p.color}`)},null,8,["icon","class"])):k("",!0)]),e("div",{class:I(["font-medium text-lg p-4 flex items-center justify-center",`${p.color}`])},y(p.name),3),e("div",Ae,y(p.description),1)]),_:2},1024)),[[o]])),128))])])}}},Re={data(){return{currentIndex:0,autoScrollInterval:null,itemCount:0,showBottons:!1}},provide(){return{registerCarouselItem:this.registerCarouselItem}},mounted(){this.startAutoScroll()},beforeUnmount(){this.stopAutoScroll()},methods:{startAutoScroll(){this.autoScrollInterval=setInterval(()=>{this.nextItem()},3e3)},stopAutoScroll(){this.autoScrollInterval&&(clearInterval(this.autoScrollInterval),this.autoScrollInterval=null)},pauseAutoScroll(){this.showBottons=!0,this.stopAutoScroll()},resumeAutoScroll(){this.showBottons=!1,this.startAutoScroll()},nextItem(){this.itemCount!==0&&(this.currentIndex=(this.currentIndex+1)%this.itemCount)},prevItem(){this.itemCount!==0&&(this.currentIndex=(this.currentIndex-1+this.itemCount)%this.itemCount)},goToItem(m){m>=0&&m<this.itemCount&&(this.currentIndex=m)},registerCarouselItem(){this.itemCount++}}},Te={class:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"},Be=["onClick"];function Le(m,t,s,r,l,n){const c=F("Icon");return a(),d("div",{class:"relative w-full max-w-4xl mx-auto overflow-hidden",onMouseenter:t[2]||(t[2]=(...o)=>n.pauseAutoScroll&&n.pauseAutoScroll(...o)),onMouseleave:t[3]||(t[3]=(...o)=>n.resumeAutoScroll&&n.resumeAutoScroll(...o))},[e("div",{class:"flex transition-transform duration-500 ease-in-out",style:E({transform:`translateX(-${l.currentIndex*100}%)`})},[V(m.$slots,"default")],4),e("button",{class:I(["absolute cursor-pointer top-1/2 left-4 transform -translate-y-1/2 bg-zinc-700 text-white p-2 rounded-full transition-opacity duration-300",{"opacity-0":!l.showBottons}]),onClick:t[0]||(t[0]=(...o)=>n.prevItem&&n.prevItem(...o))},[v(c,{icon:"mdi:chevron-left"})],2),e("button",{class:I(["absolute top-1/2 cursor-pointer right-4 transform -translate-y-1/2 bg-zinc-700 text-white p-2 rounded-full transition-opacity duration-300",{"opacity-0":!l.showBottons}]),onClick:t[1]||(t[1]=(...o)=>n.nextItem&&n.nextItem(...o))},[v(c,{icon:"mdi:chevron-right"})],2),e("div",Te,[(a(!0),d(z,null,L(l.itemCount,o=>(a(),d("button",{key:o,class:I(["w-3 h-3 rounded-full bg-zinc-700 opacity-50 hover:opacity-75 transition-all cursor-pointer",{"opacity-100 scale-125":o-1===l.currentIndex}]),onClick:p=>n.goToItem(o-1)},null,10,Be))),128))])],32)}const je=C(Re,[["render",Le]]),Ne={name:"CarouselItem",inject:["registerCarouselItem"],mounted(){this.registerCarouselItem()}},Pe={class:"w-full flex-shrink-0"};function Ve(m,t,s,r,l,n){return a(),d("div",Pe,[V(m.$slots,"default")])}const Ze=C(Ne,[["render",Ve]]),Ee={class:"p-4 md:px-16 py-12",id:"about_us"},Ke={class:"flex w-full max-w-4xl mx-auto"},Oe={class:"md:flex"},We={class:"md:w-4/6 mb-4 relative overflow-hidden"},Me=["src"],qe={class:"flex-1 px-2 flex items-center"},Xe={key:0,class:"font-medium block text-2xl pb-8 text-purple-700 mb-2"},Qe={__name:"jumbotron",setup(m){const t=S();return(s,r)=>{const l=Ze,n=je,c=B("motion-pop-visible-once");return a(),d("div",Ee,[b((a(),d("div",Ke,[v(n,null,{default:R(()=>[(a(!0),d(z,null,L(u(t).aboutUs,(o,p)=>(a(),P(l,{key:p},{default:R(()=>[e("div",Oe,[e("div",We,[e("img",{src:o.img,class:"w-full h-[65vh] object-cover opacity-75 md:[clip-path:polygon(0_0,100%_0,70%_100%,0_100%)]"},null,8,Me)]),e("div",qe,[e("p",null,[p==0?(a(),d("span",Xe," Zooming into Potential, Zestfully Driving Excellence ")):k("",!0),T(" "+y(o.description),1)])])])]),_:2},1024))),128))]),_:1})])),[[c]])])}}},Ge={class:"animated-gradient-background h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden"},He={__name:"index",setup(m){return K(t=>{console.log("Called",t)}),(t,s)=>{const r=Qe,l=De,n=ye,c=_e,o=J,p=B("motion-fade-visible-once");return a(),d("div",Ge,[v(r),b(v(l,null,null,512),[[p]]),b(v(n,null,null,512),[[p]]),b(v(c,null,null,512),[[p]]),b(v(o,null,null,512),[[p]])])}}},tt=C(He,[["__scopeId","data-v-d9733650"]]);export{tt as default};
