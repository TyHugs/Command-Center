/* Michigan Urology – App Logic */
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const homepage=$('#homepage'),pageView=$('#page-view'),footer=$('#site-footer'),header=$('#site-header');
const overlay=$('#modal-overlay'),modalH=$('#modal-header'),modalB=$('#modal-body');
$('#yr').textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>10)},{passive:true});
const toggle=$('#nav-toggle'),mnav=$('#main-nav');
toggle.addEventListener('click',()=>{const o=mnav.classList.toggle('open');toggle.classList.toggle('active',o);toggle.setAttribute('aria-expanded',o)});
mnav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mnav.classList.remove('open');toggle.classList.remove('active')}));
const btt=$('#btt');
window.addEventListener('scroll',()=>{btt.classList.toggle('visible',scrollY>500)},{passive:true});
btt.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
$$('.reveal').forEach(el=>{new IntersectionObserver((en,obs)=>{en.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'}).observe(el)});
$('#logo-home').addEventListener('click',()=>navigateHome());

function showPage(id){homepage.style.display='none';footer.style.display='none';pageView.classList.add('active');scrollTo({top:0});renderPage(id);history.pushState({page:id},'','#'+id)}
function navigateHome(){pageView.classList.remove('active');pageView.innerHTML='';homepage.style.display='';footer.style.display='';history.pushState({},'','#')}
function showSubPage(type,id){homepage.style.display='none';footer.style.display='none';pageView.classList.add('active');scrollTo({top:0});if(type==='specialty')renderSpecialtyDetail(id);else if(type==='location')renderLocationDetail(id);else if(type==='provider')renderProviderPage(id);history.pushState({type,id},'','#'+type+'/'+id)}

$$('.gateway-card').forEach(c=>{c.addEventListener('click',()=>showPage(c.dataset.page))});

// ═══ TESTIMONIAL CAROUSEL ═══
(function(){
  const stories=[
    {quote:"He explained things on my level, not using medical terminology. After my robotic prostatectomy, I was back to my normal routine in three weeks.",name:"Prostate Cancer Patient",doctor:"Dr. Todd Morgan",division:"Urologic Oncology"},
    {quote:"She laid out every option, walked us through the trade-offs, and I left feeling greatly encouraged about my treatment plan.",name:"Bladder Cancer Patient",doctor:"Dr. Alice Semerjian",division:"Urologic Oncology"},
    {quote:"I\u2019d been dealing with incontinence for years and was too embarrassed to bring it up. Dr. Cameron made me feel completely comfortable. After surgery, I finally feel like myself again.",name:"Neurourology Patient",doctor:"Dr. Anne Pelletier Cameron",division:"Neurourology"},
    {quote:"She removed my kidney tumor laparoscopically and I was home the next day. Knowledgeable, understanding, and kind beyond measure.",name:"Kidney Cancer Patient",doctor:"Dr. Lindsey Herrel",division:"Urologic Oncology"},
    {quote:"Dr. Ellimoottil recommended Rez\u016Bm and I had the procedure on a Friday. By Monday I was already noticing a difference. Life-changing.",name:"BPH Patient",doctor:"Dr. Chandy Ellimoottil",division:"Men\u2019s Health"},
    {quote:"Dr. Kraft explained everything to both us and our son in a way that put everyone at ease. The care at Mott\u2019s was exceptional.",name:"Parent of Pediatric Patient",doctor:"Dr. Kate Kraft",division:"Pediatric Urology"},
    {quote:"Dr. Ambani didn\u2019t just treat the stone \u2014 he did a full metabolic workup and put me on a prevention plan. I\u2019ve been stone-free for over a year.",name:"Kidney Stone Patient",doctor:"Dr. Sapan Ambani",division:"Endourology"},
  ];
  const quoteEl=$('#testimonial-quote'),attrEl=$('#testimonial-attr'),dotsEl=$('#testimonial-dots');
  if(!quoteEl)return;
  let current=0,autoTimer=null;

  function render(idx,animate){
    const s=stories[idx];
    if(animate){
      quoteEl.classList.add('fade-out');attrEl.classList.add('fade-out');
      setTimeout(()=>{setContent(s);quoteEl.classList.remove('fade-out');attrEl.classList.remove('fade-out')},300);
    } else { setContent(s); }
    dotsEl.querySelectorAll('.testimonial-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  }

  function setContent(s){
    quoteEl.textContent='\u201C'+s.quote+'\u201D';
    attrEl.innerHTML='<span class="testimonial-attr-name">'+s.name+'</span><span class="testimonial-attr-detail">\u00A0\u00B7\u00A0'+s.doctor+', '+s.division+'</span>';
  }

  function goTo(idx){current=idx;render(current,true);resetAuto()}
  function next(){goTo((current+1)%stories.length)}
  function resetAuto(){clearInterval(autoTimer);autoTimer=setInterval(next,5000)}

  stories.forEach((_,i)=>{const d=document.createElement('button');d.className='testimonial-dot'+(i===0?' active':'');d.addEventListener('click',()=>goTo(i));dotsEl.appendChild(d)});

  render(0,false);
  resetAuto();

  const stage=$('#testimonial-stage');
  stage.addEventListener('mouseenter',()=>clearInterval(autoTimer));
  stage.addEventListener('mouseleave',resetAuto);
})();
$$('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){
  const hash=this.getAttribute('href').replace('#','');if(!hash)return;
  const pages=['specialties','symptoms','prepare','locations','team','about'];
  if(pages.includes(hash)){e.preventDefault();showPage(hash)}
  else if(hash==='appointment'){e.preventDefault();if(homepage.style.display!=='none'){const el=$('#appointment');if(el)el.scrollIntoView({behavior:'smooth'})}else{navigateHome();setTimeout(()=>{const el=$('#appointment');if(el)el.scrollIntoView({behavior:'smooth'})},120)}}
  else if(hash.startsWith('specialty/')||hash.startsWith('location/')||hash.startsWith('provider/')){e.preventDefault();const p=hash.split('/');showSubPage(p[0],p[1])}
})});
window.addEventListener('popstate',e=>{if(e.state&&e.state.page)showPage(e.state.page);else if(e.state&&e.state.type)showSubPage(e.state.type,e.state.id);else navigateHome()});
(function(){const h=location.hash.replace('#','');if(!h||h==='appointment')return;const pages=['specialties','symptoms','prepare','locations','team','about'];if(pages.includes(h))showPage(h);else if(h.startsWith('specialty/'))showSubPage('specialty',h.split('/')[1]);else if(h.startsWith('location/'))showSubPage('location',h.split('/')[1]);else if(h.startsWith('provider/'))showSubPage('provider',h.split('/')[1])})();

function renderPage(id){const r={specialties:renderSpecialties,symptoms:renderSymptoms,prepare:renderPrepare,locations:renderLocations,team:renderTeam,about:renderAbout};if(r[id])r[id]()}
function pageShell(title,tagline,body,bl,bt,crumbs){bl=bl||'Home';const onclick=bt?`showPage('${bt}')`:'navigateHome()';const bc=crumbs?breadcrumb(crumbs):'';return `<div class="page-hero"><div class="container">${bc}<button class="page-back" onclick="${onclick}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> ${bl}</button><h1>${title}</h1><p class="page-tagline">${tagline}</p></div></div><div class="page-body"><div class="container">${body}</div></div>`}
function sidebarCTA(ph){ph=ph||'(734) 936-7030';return `<div class="sidebar-cta"><h3>Schedule an Appointment</h3><p>New and existing patients welcome.</p><a href="tel:${ph.replace(/[^0-9]/g,'')}" class="btn btn-primary" style="width:100%;justify-content:center;font-size:13px;padding:10px 18px">${ph}</a></div>`}

function renderSpecialties(){
  const cards=specialtyPages.map(sp=>`<div class="content-card" onclick="showSubPage('specialty','${sp.id}')"><div class="content-card-icon" style="background:linear-gradient(135deg,var(--blue),var(--blue-70));color:var(--maize)">${sp.icon}</div><h3>${sp.title}</h3><p>${sp.tagline}</p></div>`).join('');
  pageView.innerHTML=pageShell('Our Specialties','Six clinical divisions spanning the full spectrum of urological care.',`<div class="content-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">${cards}</div>`,null,null,[{label:'Home',action:'navigateHome()'},{label:'Specialties'}])
}

function renderSymptoms(){
  const btns=[
    {key:'frequency',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',label:'Frequent or urgent urination'},
    {key:'blood',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',label:'Blood in urine (hematuria)'},
    {key:'difficulty',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V2M5 15l7 7 7-7"/></svg>',label:'Weak stream / difficulty starting'},
    {key:'pain',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',label:'Pelvic or lower back pain'},
    {key:'psa',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',label:'Elevated PSA result'},
    {key:'incontinence',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',label:'Leaking urine / incontinence'},
    {key:'kidney',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',label:'Kidney stones / flank pain'},
    {key:'sexual',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',label:'Erectile dysfunction / sexual health'},
    {key:'fertility',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',label:'Fertility concerns'}
  ];
  const grid=btns.map(b=>`<button class="symptom-btn" data-symptom="${b.key}"><span class="sym-icon">${b.icon}</span>${b.label}</button>`).join('');
  pageView.innerHTML=pageShell("I'm Experiencing…","Select a symptom and we'll guide you to the right specialist.",`<div class="symptom-grid">${grid}</div><div class="symptom-result" id="symptom-result"></div>`,null,null,[{label:'Home',action:'navigateHome()'},{label:'Symptom Finder'}]);
  pageView.querySelectorAll('.symptom-btn').forEach(btn=>{btn.addEventListener('click',()=>{
    const d=symptomData[btn.dataset.symptom];if(!d)return;
    pageView.querySelectorAll('.symptom-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    const r=pageView.querySelector('#symptom-result');
    const triageClass=d.triage==='urgent'?'triage-urgent':d.triage==='soon'?'triage-soon':'triage-routine';
    const triageIcon=d.triage==='urgent'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>':d.triage==='soon'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
    const actionClass=d.triage==='urgent'?'urgent':d.triage==='soon'?'soon':'routine';
    r.innerHTML=`<div class="symptom-result-header"><div class="triage-badge ${triageClass}">${triageIcon} ${d.triageLabel}</div><h3>${d.title}</h3><p>${d.subtitle}</p></div><div class="symptom-result-body">${d.body}<div class="triage-action ${actionClass}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.3 1.6.57 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.27 1.56.45 2.36.57A2 2 0 0 1 22 16.92z"/></svg> ${d.triageAction}</div><div class="symptom-result-links">${d.links.map(l=>`<a href="${l.hash}" class="symptom-result-link">${l.label} &rarr;</a>`).join('')}</div></div>`;
    r.classList.add('active');setTimeout(()=>r.scrollIntoView({behavior:'smooth',block:'nearest'}),100);
  })});
}

function renderPrepare(){
  const steps=[
    {n:1,t:'Schedule Your Appointment',d:'Call (734) 936-7030 or request online. Our scheduling team verifies your insurance, collects referral information, and matches you with the right specialist based on your condition.',tip:'Have your insurance card and referring physician\u2019s name ready when you call.'},
    {n:2,t:'Prepare for Your Visit',d:"You'll receive a MyChart activation email with pre-visit questionnaires. Gather your medical records, imaging discs, pathology reports, and a current medication list including supplements.",tip:'Write down your top 3–5 questions so nothing gets forgotten in the moment.'},
    {n:3,t:'Your First Visit',d:'Arrive 15 minutes early to complete registration. You\u2019ll meet your care team, review your medical history, undergo a focused physical exam, and discuss diagnostic next steps together.',tip:'Bring a family member or advocate — two sets of ears are better than one for processing complex information.'},
    {n:4,t:'Your Personalized Care Plan',d:'Your provider explains the diagnosis, walks through all treatment options with pros and cons, and answers every question. For complex cases, our multidisciplinary tumor board reviews your case.',tip:'Ask about clinical trials — Michigan patients access therapies not available elsewhere.'},
    {n:5,t:'Treatment & Recovery',d:'We coordinate everything — pre-operative preparation, anesthesia consultation, the procedure itself, and post-operative recovery. Our team calls you the day after surgery to check in.',tip:'Download MyChart for secure messaging with your care team between visits.'},
    {n:6,t:'Follow-Up & Survivorship',d:'Your next appointment is scheduled before you leave. Follow-up includes labs, imaging, and survivorship resources. Many follow-up visits are available via telehealth for your convenience.',tip:'Telehealth follow-up visits save you a trip — ask if yours qualifies.'}
  ];
  const timeline=steps.map(s=>`<div class="journey-step"><div class="journey-dot">${s.n}</div><div class="journey-content"><h3>${s.t}</h3><p>${s.d}</p><div class="journey-tip">${s.tip}</div></div></div>`).join('');

  const quickRef=`<div class="prepare-quick-ref">
    <div class="prepare-quick-card"><div class="prepare-quick-icon" style="background:linear-gradient(135deg,#1565C0,#0D47A1);color:#fff"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.3 1.6.57 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.27 1.56.45 2.36.57A2 2 0 0 1 22 16.92z"/></svg></div><div><strong>Main Line</strong><span>(734) 936-7030</span></div></div>
    <div class="prepare-quick-card"><div class="prepare-quick-icon" style="background:linear-gradient(135deg,var(--teal),#15696D);color:#fff"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><strong>Hours</strong><span>Mon–Fri, 8 AM – 5 PM</span></div></div>
    <div class="prepare-quick-card"><div class="prepare-quick-icon" style="background:linear-gradient(135deg,#4527A0,#311B92);color:#fff"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><div><strong>MyChart</strong><span>Activate before your visit</span></div></div>
    <div class="prepare-quick-card"><div class="prepare-quick-icon" style="background:linear-gradient(135deg,#C62828,#B71C1C);color:#fff"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><strong>Bring to Visit</strong><span>Records, imaging, med list</span></div></div>
  </div>`;

  const eduCards=eduData.map(d=>`<div class="content-card edu-trigger" data-edu="${d.id}"><div class="content-card-icon" style="background:${d.bg};color:${d.color}">${d.icon}</div><h3>${d.title}</h3><p>${d.desc}</p></div>`).join('');

  const body=`<div class="tab-bar"><button class="tab-btn active" data-tab="journey">What to Expect</button><button class="tab-btn" data-tab="education">Patient Education</button></div><div class="tab-panel active" id="tab-journey">${quickRef}<div class="journey-timeline">${timeline}</div></div><div class="tab-panel" id="tab-education"><p style="font-size:14px;color:var(--gray-600);margin-bottom:20px">Select a condition below for personalized preparation tips, questions to ask your doctor, and links to trusted resources.</p><div class="content-grid">${eduCards}</div></div>`;
  pageView.innerHTML=pageShell('Prepare for Your Visit','Everything you need — from understanding the process to condition-specific guides.',body,null,null,[{label:'Home',action:'navigateHome()'},{label:'Your Visit'}]);
  pageView.querySelectorAll('.tab-btn').forEach(btn=>{btn.addEventListener('click',()=>{pageView.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');pageView.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));const panel=pageView.querySelector('#tab-'+btn.dataset.tab);if(panel)panel.classList.add('active')})});
  pageView.querySelectorAll('.edu-trigger').forEach(c=>{c.addEventListener('click',()=>{const d=eduData.find(e=>e.id===c.dataset.edu);if(d)openEduModal(d)})});
}

function renderLocations(){
  const cards=locationPages.map(loc=>{
    const isTroy=loc.id==='troy';
    const badge=isTroy?'<span class="loc-badge-coming">Coming 2027</span>':'';
    const flagship=loc.id==='taubman'?'<span class="loc-badge-flagship">Flagship</span>':'';
    const serviceCount=loc.services?loc.services.length:0;
    return `<div class="loc-card${isTroy?' loc-card--coming':''}" data-loc="${loc.id}">
      <div class="loc-card-header">
        <div class="loc-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></div>
        <div class="loc-card-title"><h3>${loc.title}${badge}${flagship}</h3><p class="loc-card-tagline">${loc.tagline}</p></div>
      </div>
      <div class="loc-card-details">
        <div class="loc-card-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>${loc.address.split(',').slice(0,2).join(',')}</span></div>
        <div class="loc-card-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span>${loc.phone}</span></div>
        <div class="loc-card-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>${loc.hours}</span></div>
      </div>
      <div class="loc-card-services">${serviceCount} service${serviceCount!==1?'s':''} available</div>
      <div class="loc-card-arrow">View details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
    </div>`}).join('');
  pageView.innerHTML=pageShell('Our Locations','Seven clinics across Michigan — world-class urology close to home.',`<div class="loc-grid">${cards}</div>`,null,null,[{label:'Home',action:'navigateHome()'},{label:'Locations'}]);
  pageView.querySelectorAll('.loc-card').forEach(c=>{c.addEventListener('click',()=>showSubPage('location',c.dataset.loc))})
}

function renderTeam(){
  const body=`<div class="faculty-controls"><button class="filter-btn active" data-filter="all">All Providers</button><button class="filter-btn" data-filter="ONC">Oncology</button><button class="filter-btn" data-filter="MHR">Men's Health</button><button class="filter-btn" data-filter="NEURO">Neurourology</button><button class="filter-btn" data-filter="ENDO">Endourology</button><button class="filter-btn" data-filter="COMM">Community</button><button class="filter-btn" data-filter="PED">Pediatric</button></div><div class="faculty-grid" id="fac-grid"></div>`;
  pageView.innerHTML=pageShell('Meet Your Care Team','55 faculty experts dedicated to your urological health.',body,null,null,[{label:'Home',action:'navigateHome()'},{label:'Our Team'}]);
  const grid=pageView.querySelector('#fac-grid');
  function render(filter){grid.innerHTML='';const list=filter==='all'?faculty:faculty.filter(f=>f.division===filter);
    list.forEach(f=>{const ini=f.name.split(' ').map(n=>n[0]).join('');
      const tags=[`<span class="faculty-tag ${f.division==='ONC'?'onc':''}">${f.divisionFull}</span>`];
      if(f.research)tags.push(`<span class="faculty-tag ${f.research.includes('Health')?'hsr':'lab'}">${f.research}</span>`);
      const card=document.createElement('div');card.className='faculty-card';card.tabIndex=0;
      card.innerHTML=`<div class="faculty-card-top"><div class="faculty-avatar">${ini}</div><div class="faculty-card-info"><h3>${f.name}, ${f.title}</h3><div class="faculty-role">${f.role}</div></div></div><div class="faculty-card-body"><p>${f.bio.substring(0,130)}\u2026</p><div class="faculty-tags">${tags.join('')}</div></div><div class="faculty-card-footer"><span class="view-profile-btn">View Profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div>`;
      card.addEventListener('click',()=>showSubPage('provider',f.id));grid.appendChild(card)})
  }
  render('all');
  pageView.querySelectorAll('.filter-btn').forEach(btn=>{btn.addEventListener('click',()=>{pageView.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)})})
}

function renderAbout(){
  const h=[
    {icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',t:'Nationally Ranked Expertise',d:'Our physicians earn national recognition year after year for clinical excellence.'},
    {icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.18V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6h.09a2 2 0 0 1 0 4h-1.51z"/></svg>',t:'Minimally Invasive Innovation',d:'Pioneering robotic and minimally invasive approaches for faster recovery.'},
    {icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',t:'Personalized Treatment Plans',d:'Your care team designs a plan around your unique needs, lifestyle, and goals.'},
    {icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',t:'Research That Shapes the Future',d:'Home to the largest urologic health services research group in the world.'},
    {icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',t:'Multidisciplinary Team',d:'Surgeons, nurses, therapists, and APPs collaborate at every step.'},
    {icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',t:'Access Across Michigan',d:'Seven clinics from Ann Arbor to Muskegon — world-class care near home.'}
  ];
  const cards=h.map(x=>`<div class="highlight-card"><div class="highlight-icon">${x.icon}</div><h3>${x.t}</h3><p>${x.d}</p></div>`).join('');
  pageView.innerHTML=pageShell('Why Michigan Urology','A tradition of care that puts you first — since 1920.',`<div class="highlight-grid">${cards}</div><div class="numbers-row"><div class="num-item"><div class="num-val">#5</div><div class="num-label">Nationally Ranked</div></div><div class="num-item"><div class="num-val">450+</div><div class="num-label">Robotic Surgeries / Yr</div></div><div class="num-item"><div class="num-val">100+</div><div class="num-label">Years of Excellence</div></div><div class="num-item"><div class="num-val">7</div><div class="num-label">Clinic Locations</div></div></div>`,null,null,[{label:'Home',action:'navigateHome()'},{label:'About'}])
}

function renderSpecialtyDetail(id){
  const sp=specialtyPages.find(s=>s.id===id);if(!sp){navigateHome();return}
  const rf=sp.facultyIds.map(fid=>faculty.find(f=>f.id===fid)).filter(Boolean);
  const chips=rf.length?rf.map(f=>{const i=f.name.split(' ').map(n=>n[0]).join('');return `<div class="subpage-faculty-chip" data-fid="${f.id}"><div class="chip-avatar">${i}</div>${f.name}, ${f.title}</div>`}).join(''):'';
  const links=sp.links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:6px;padding:6px 0;font-size:13px;color:var(--teal);font-weight:500">${l.title}</a>`).join('');
  const body=`<div class="page-grid"><div class="page-main"><h2>Overview</h2><p>${sp.overview}</p><h2>Why Michigan Medicine</h2><ul class="subpage-highlights" style="list-style:none;padding:0;margin:0 0 20px">${sp.highlights.map(h=>`<li>${h}</li>`).join('')}</ul><h2>Conditions We Treat</h2><div class="subpage-conditions">${sp.conditions.map(c=>`<span class="subpage-condition-tag">${c}</span>`).join('')}</div><h2>Research & Innovation</h2><p>${sp.research}</p>${rf.length?`<h2>Our Team</h2><div class="subpage-faculty-grid">${chips}</div>`:''}</div><div class="page-sidebar">${sidebarCTA()}<div class="sidebar-card"><h3>Resources</h3>${links}</div></div></div>`;
  pageView.innerHTML=pageShell(sp.title,sp.tagline,body,'All Specialties','specialties',[{label:'Home',action:'navigateHome()'},{label:'Specialties',action:"showPage('specialties')"},{label:sp.title}]);
  pageView.querySelectorAll('.subpage-faculty-chip').forEach(c=>{c.addEventListener('click',()=>{showSubPage('provider',c.dataset.fid)})})
}

function renderLocationDetail(id){
  const loc=locationPages.find(l=>l.id===id);if(!loc){navigateHome();return}
  const servicesHtml=loc.services.map(s=>`<li>${s}</li>`).join('');
  const body=`<div class="page-grid"><div class="page-main">
    <h2>About This Location</h2><p>${loc.overview}</p>
    <div class="loc-detail-grid">
      <div class="loc-detail-card"><div class="loc-detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div class="loc-detail-content"><strong>Address</strong><span>${loc.address}</span></div></div>
      <div class="loc-detail-card"><div class="loc-detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.3 1.6.57 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.27 1.56.45 2.36.57A2 2 0 0 1 22 16.92z"/></svg></div><div class="loc-detail-content"><strong>Phone</strong><a href="tel:${loc.phone.replace(/[^0-9]/g,'')}">${loc.phone}</a></div></div>
      <div class="loc-detail-card"><div class="loc-detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="loc-detail-content"><strong>Hours</strong><span>${loc.hours}</span></div></div>
      <div class="loc-detail-card"><div class="loc-detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div><div class="loc-detail-content"><strong>Parking</strong><span>Free patient parking</span></div></div>
    </div>
    <h2>Services Available</h2><ul class="subpage-services">${servicesHtml}</ul>
    <h2>Directions</h2><p>${loc.directions}</p>
  </div><div class="page-sidebar">${sidebarCTA(loc.phone)}
    <div class="sidebar-card"><h3>Get Directions</h3><a href="${loc.mapUrl}" target="_blank" rel="noopener" class="loc-map-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg> Open in Google Maps</a></div>
  </div></div>`;
  pageView.innerHTML=pageShell(loc.title,loc.tagline,body,'All Locations','locations',[{label:'Home',action:'navigateHome()'},{label:'Locations',action:"showPage('locations')"},{label:loc.title}])
}

function openModal(f){
  const ini=f.name.split(' ').map(n=>n[0]).join('');
  modalH.innerHTML=`<button class="modal-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button><div class="modal-avatar">${ini}</div><h2>${f.name}, ${f.title}</h2><div class="modal-subtitle">${f.role} \u00B7 ${f.type}</div><div class="modal-division">${f.divisionFull}</div>`;
  let res='';
  if(f.resources&&f.resources.length){res=`<div class="modal-section"><h3>Resources</h3><div class="modal-resources">${f.resources.map(r=>`<a href="${r.url}" target="_blank" rel="noopener" class="modal-resource-link">${r.title}<span class="modal-resource-badge ${r.type}">${r.type}</span></a>`).join('')}</div></div>`}
  let prof=f.profileUrl?`<a href="${f.profileUrl}" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:13px;padding:10px 20px;border-color:var(--teal);color:var(--teal)">Full Profile on Michigan Medicine</a>`:'';
  modalB.innerHTML=`<div class="modal-section"><h3>About</h3><p>${f.bio}</p></div><div class="modal-section"><h3>Conditions</h3><div class="modal-conditions">${f.conditions.map(c=>`<span class="modal-condition">${c}</span>`).join('')}</div></div><div class="modal-section"><h3>Preparing for Your Visit</h3>${f.education.map(e=>`<div class="modal-edu-item">${e}</div>`).join('')}</div>${res}<div class="modal-cta-bar"><a href="tel:7349367030" class="btn btn-primary" style="font-size:13px;padding:10px 20px">(734) 936-7030</a>${prof}</div>`;
  overlay.classList.add('active');document.body.style.overflow='hidden';
  modalH.querySelector('.modal-close').addEventListener('click',closeModal)
}
function closeModal(){overlay.classList.remove('active');document.body.style.overflow=''}
overlay.addEventListener('click',e=>{if(e.target===overlay)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeSearch()}});

// ── SEARCH ENGINE ──
const searchOverlay=$('#search-overlay'),searchInput=$('#search-input'),searchResults=$('#search-results');
$('#search-toggle').addEventListener('click',openSearch);
$('#search-close').addEventListener('click',closeSearch);
searchOverlay.addEventListener('click',e=>{if(e.target===searchOverlay)closeSearch()});

function openSearch(){searchOverlay.classList.add('active');searchInput.value='';searchResults.innerHTML='';setTimeout(()=>searchInput.focus(),100)}
function closeSearch(){searchOverlay.classList.remove('active');searchInput.value=''}

function fuzzyMatch(text,query){
  text=text.toLowerCase();query=query.toLowerCase();
  if(text.includes(query))return true;
  // token match - all query words must appear
  const tokens=query.split(/\s+/).filter(Boolean);
  return tokens.every(t=>text.includes(t));
}

searchInput.addEventListener('input',()=>{
  const q=searchInput.value.trim();
  if(q.length<2){searchResults.innerHTML='';return}
  const results=[];

  // Search faculty
  faculty.forEach(f=>{
    const haystack=[f.name,f.role,f.divisionFull,f.bio,...f.conditions].join(' ');
    if(fuzzyMatch(haystack,q)){
      const ini=f.name.split(' ').map(n=>n[0]).join('');
      results.push({type:'faculty',title:f.name+', '+f.title,meta:f.divisionFull,color:'var(--blue)',icon:ini,action:()=>{closeSearch();showSubPage('provider',f.id)}});
    }
  });

  // Search specialties
  specialtyPages.forEach(sp=>{
    const haystack=[sp.title,sp.tagline,sp.overview,...sp.conditions].join(' ');
    if(fuzzyMatch(haystack,q)){
      results.push({type:'specialty',title:sp.title,meta:'Clinical Specialty',color:'var(--teal)',icon:'◆',action:()=>{closeSearch();showSubPage('specialty',sp.id)}});
    }
  });

  // Search locations
  locationPages.forEach(loc=>{
    const haystack=[loc.title,loc.address,loc.overview,...loc.services].join(' ');
    if(fuzzyMatch(haystack,q)){
      results.push({type:'location',title:loc.title,meta:loc.address,color:'#E65100',icon:'⦿',action:()=>{closeSearch();showSubPage('location',loc.id)}});
    }
  });

  // Search symptoms
  Object.entries(symptomData).forEach(([key,d])=>{
    const haystack=[d.title,d.subtitle,d.body].join(' ');
    if(fuzzyMatch(haystack,q)){
      results.push({type:'symptom',title:d.title,meta:'Symptom Guide',color:'#C62828',icon:'♥',action:()=>{closeSearch();showPage('symptoms')}});
    }
  });

  // Search education
  eduData.forEach(d=>{
    const haystack=[d.title,d.desc,d.summary].join(' ');
    if(fuzzyMatch(haystack,q)){
      results.push({type:'education',title:d.title,meta:'Patient Education Guide',color:'#4527A0',icon:'📋',action:()=>{closeSearch();showPage('prepare');setTimeout(()=>{const trigger=pageView.querySelector(`[data-edu="${d.id}"]`);if(trigger)trigger.click()},200)}});
    }
  });

  if(results.length===0){
    searchResults.innerHTML='<div class="search-empty">No results found for "'+q+'".<br>Try a different term, or call <a href="tel:7349367030" style="color:var(--teal);font-weight:600">(734) 936-7030</a> for help.</div>';
    return;
  }

  searchResults.innerHTML=results.slice(0,12).map(r=>`<div class="search-result" data-idx="${results.indexOf(r)}"><div class="search-result-icon" style="background:${r.color}">${r.icon}</div><div class="search-result-text"><div class="search-result-title">${r.title}</div><div class="search-result-meta">${r.meta}</div></div></div>`).join('');
  searchResults.querySelectorAll('.search-result').forEach((el,i)=>{el.addEventListener('click',()=>results[i].action())});
});

// Keyboard shortcut: Cmd/Ctrl+K opens search
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch()}});

// ── BREADCRUMB SYSTEM ──
function breadcrumb(crumbs){
  // crumbs: [{label,action},...,{label}] — last item is current (no action)
  return '<nav class="breadcrumb" aria-label="Breadcrumb">'+crumbs.map((c,i)=>{
    if(i===crumbs.length-1)return '<span class="current">'+c.label+'</span>';
    return '<a onclick="'+c.action+'">'+c.label+'</a><span class="sep">›</span>';
  }).join('')+'</nav>';
}

function renderResearch(){
  const programs = [
    {
      section: "Quality Collaboratives",
      items: [
        {
          title: "MUSIC — Michigan Urological Surgery Improvement Collaborative",
          subtitle: "Michigan's statewide quality collaborative improving urological care for over 1 million patients annually",
          icon: "🏥", iconBg: "#E3F2FD",
          desc: "MUSIC is a Blue Cross Blue Shield of Michigan–funded collaborative of over 100 urology practices across the state. By collecting and benchmarking real-world outcomes data, MUSIC has driven measurable improvements in prostate cancer detection, reduced unnecessary biopsies, lowered surgical complication rates, and improved stone treatment outcomes. MUSIC is led by Michigan Medicine faculty and represents one of the most successful quality collaboratives in any surgical specialty.",
          highlights: [
            "Over 100 participating urology practices across Michigan",
            "Demonstrated reduction in unnecessary prostate biopsies through risk-stratified MRI pathways",
            "MUSIC ROCKS program benchmarking kidney stone treatment outcomes statewide",
            "Prostatectomy outcomes tracking with continuous quality improvement cycles",
            "Patient-reported outcomes integrated into clinical decision-making"
          ],
          facultyIds: ["hollenbeck","morgan","ghani","dauw","ellimoottil","miller","herrel"],
          links: [
            {title:"MUSIC Collaborative Website",url:"https://musicurology.com/"},
            {title:"MUSIC Patient Resources",url:"https://musicurology.com/resources/patient-educational-materials/"},
            {title:"MUSIC ROCKS — Stone Quality Program",url:"https://musicurology.com/programs/stones/"}
          ]
        },
      ]
    },
    {
      section: "Laboratory & Translational Research",
      items: [
        {
          title: "Liquid Biopsy & Prostate Cancer Precision Oncology",
          subtitle: "Blood-based molecular profiling to guide personalized cancer treatment",
          icon: "🧬", iconBg: "#EDE7F6",
          desc: "The Morgan Laboratory at Michigan Medicine is pioneering liquid biopsy approaches for prostate cancer — using circulating tumor DNA (ctDNA) and other blood-based biomarkers to monitor disease progression, predict treatment response, and guide precision therapy. This work, funded by the NCI, Department of Defense, and Prostate Cancer Foundation, has the potential to replace invasive biopsies with a simple blood draw and to personalize treatment plans based on each patient's unique molecular profile.",
          highlights: [
            "NCI, Department of Defense, and Prostate Cancer Foundation funding",
            "Circulating tumor DNA (ctDNA) profiling for treatment monitoring",
            "Genomic biomarker–guided active surveillance protocols",
            "MRI-fusion biopsy research improving cancer detection accuracy",
            "Multiple active clinical trials for advanced prostate cancer"
          ],
          facultyIds: ["morgan","palapattu","salami","singhal"],
          links: [
            {title:"Michigan Prostate Cancer Research",url:"https://medicine.umich.edu/dept/urology/research/divisional-research/clinical-divisions/urologic-oncology/prostate-cancer-research"},
            {title:"Rogel Cancer Center — Prostate",url:"https://www.rogelcancercenter.org/prostate-cancer"}
          ]
        },
        {
          title: "Bladder Cancer Immunotherapy & Intracorporeal Diversion",
          subtitle: "Advancing surgical technique and immunologic approaches for bladder cancer",
          icon: "🔬", iconBg: "#FFF3E0",
          desc: "Michigan's bladder cancer program is at the forefront of two parallel revolutions: the integration of immune checkpoint inhibitors into neoadjuvant and adjuvant treatment protocols, and the development of fully intracorporeal robotic urinary diversion — a technique that keeps the entire surgery inside the body, reducing recovery time and complications. Our surgeons are among the highest-volume robotic cystectomy programs in the nation.",
          highlights: [
            "Fully intracorporeal robotic urinary diversion — minimizing recovery time",
            "Neoadjuvant immunotherapy clinical trials for muscle-invasive disease",
            "Enhanced recovery protocols reducing hospital stay after radical cystectomy",
            "Multidisciplinary tumor board review for every bladder cancer patient"
          ],
          facultyIds: ["montgomery","semerjian","kaffenberger","palapattu"],
          links: [
            {title:"Rogel Cancer Center — Bladder Cancer",url:"https://www.rogelcancercenter.org/bladder-cancer"}
          ]
        }
      ]
    },
    {
      section: "Health Services Research",
      items: [
        {
          title: "Telehealth & Virtual Care Innovation",
          subtitle: "Reshaping how urological care is delivered across Michigan and beyond",
          icon: "💻", iconBg: "#E0F2F1",
          desc: "Led by Dr. Chandy Ellimoottil, Michigan's telehealth research program studies how virtual visits can maintain care quality while improving access and reducing costs. This work, which accelerated during the pandemic, has produced key findings on telehealth utilization patterns, patient satisfaction, and clinical outcomes that are shaping national policy on virtual care reimbursement and adoption.",
          highlights: [
            "Landmark studies on telehealth utilization and patient outcomes in urology",
            "Policy-relevant research influencing CMS telehealth reimbursement decisions",
            "Virtual visit integration for post-operative follow-up and chronic disease management",
            "Patient-centered research on telehealth satisfaction and accessibility"
          ],
          facultyIds: ["ellimoottil","borza","herrel"],
          links: [
            {title:"Michigan Medicine Virtual Visits",url:"https://www.uofmhealth.org/patient/virtual-visits"}
          ]
        },
        {
          title: "Health Equity & Disparities in Urological Care",
          subtitle: "Ensuring every patient receives equitable access to high-quality urological care",
          icon: "⚖️", iconBg: "#F3E5F5",
          desc: "Multiple Michigan faculty study disparities in cancer outcomes, surgical access, and treatment quality across race, socioeconomic status, and geography. This work has identified significant inequities in prostate cancer screening, surgical referral patterns, and post-treatment surveillance — and is producing interventions to close these gaps.",
          highlights: [
            "Research documenting racial disparities in prostate cancer outcomes and treatment",
            "Studies on insurance coverage and access to fertility preservation",
            "Geographic disparities in surgical access for complex urological conditions",
            "Community-engaged research to improve care delivery in underserved populations"
          ],
          facultyIds: ["stensland","dupree","herrel","faris","hollenbeck"],
          links: [
            {title:"U-M Urology Research",url:"https://medicine.umich.edu/dept/urology/research"}
          ]
        },
        {
          title: "Value-Based Care & Outcomes Research",
          subtitle: "Measuring what matters to improve care quality and reduce costs",
          icon: "📊", iconBg: "#E8F5E9",
          desc: "Michigan's health services research group — one of the largest in urology nationally — studies how to deliver the highest-quality urological care at the best value. This includes patient-reported outcomes research, comparative effectiveness studies, and cost-quality analyses that inform clinical practice guidelines and health policy.",
          highlights: [
            "Largest urologic health services research group in the world",
            "Patient-reported outcomes integrated into clinical trial design",
            "Comparative effectiveness research guiding treatment selection for BPH and prostate cancer",
            "National leadership in surgical quality measurement and improvement"
          ],
          facultyIds: ["hollenbeck","miller","borza","dupree","wei","ghani","sui","clemens","streur"],
          links: [
            {title:"U-M Urology Health Services Research",url:"https://medicine.umich.edu/dept/urology/research/divisional-research/health-services-research"}
          ]
        }
      ]
    },
    {
      section: "Specialty Research Programs",
      items: [
        {
          title: "Neurourology & Pelvic Floor Research",
          subtitle: "Advancing treatment for IC/BPS, neurogenic bladder, and pelvic floor disorders",
          icon: "🧠", iconBg: "#FCE4EC",
          desc: "The Neurourology division conducts groundbreaking research into interstitial cystitis/bladder pain syndrome (IC/BPS), neurogenic bladder management, and advanced neuromodulation therapies. Dr. Clemens has contributed to the AUA guidelines for IC/BPS, and the division leads clinical trials on sacral neuromodulation, Botox for overactive bladder, and novel pelvic floor therapies.",
          highlights: [
            "AUA guideline authorship for interstitial cystitis / bladder pain syndrome",
            "Clinical trials for sacral neuromodulation and tibial nerve stimulation",
            "Neurogenic bladder management research for spinal cord injury patients",
            "Pelvic floor biomechanics and surgical outcomes research"
          ],
          facultyIds: ["clemens","stoffel","cameron","gupta","kielb"],
          links: [
            {title:"AUA IC/BPS Guidelines",url:"https://www.auanet.org/guidelines-and-quality/guidelines/diagnosis-and-treatment-of-interstitial-cystitis"}
          ]
        },
        {
          title: "Endourology & Kidney Stone Prevention Science",
          subtitle: "From MUSIC ROCKS benchmarking to metabolic stone prevention",
          icon: "💎", iconBg: "#FFFDE7",
          desc: "Michigan's endourology research spans surgical innovation and prevention science. Through the MUSIC ROCKS collaborative, our faculty benchmark stone treatment outcomes across the state. Simultaneously, our metabolic stone clinic conducts research on dietary interventions, pharmacologic prevention, and personalized risk assessment to reduce stone recurrence — a critical gap in urological care.",
          highlights: [
            "MUSIC ROCKS — statewide stone treatment quality benchmarking",
            "Metabolic stone clinic research on dietary and pharmacologic prevention",
            "Miniaturized PCNL and advanced laser lithotripsy technique development",
            "Patient-centered research on stone passage and pain management"
          ],
          facultyIds: ["ghani","ambani","dauw","roberts","sui"],
          links: [
            {title:"MUSIC ROCKS Program",url:"https://musicurology.com/programs/stones/"}
          ]
        },
        {
          title: "Pediatric Urology & Differences of Sex Development",
          subtitle: "Specialized research for the youngest and most complex patients",
          icon: "👶", iconBg: "#E1F5FE",
          desc: "The pediatric urology research program focuses on congenital urological conditions, minimally invasive surgical techniques for children, and the long-term outcomes of pediatric reconstructive surgery. Dr. Streur's research on differences of sex development (DSD) is helping shape national guidelines for the care of children and adolescents with these conditions.",
          highlights: [
            "Differences of sex development (DSD) care pathway research and guideline development",
            "Robotic surgery outcomes in pediatric urological reconstruction",
            "Long-term follow-up studies for hypospadias and vesicoureteral reflux repair",
            "Family-centered outcomes research in pediatric urology"
          ],
          facultyIds: ["streur","kraft","bloom","wan"],
          links: [
            {title:"C.S. Mott Children's Hospital — Urology",url:"https://www.mottchildren.org/conditions-treatments/ped-urology"}
          ]
        }
      ]
    }
  ];

  // Build HTML
  let programsHtml = '';
  programs.forEach(section => {
    programsHtml += `<div class="research-section-label">${section.section}</div>`;
    section.items.forEach(p => {
      const facChips = p.facultyIds.map(fid => {
        const f = faculty.find(x => x.id === fid);
        return f ? `<span class="research-faculty-tag" data-fid="${fid}">${f.name}</span>` : '';
      }).join('');
      const linkHtml = p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="research-link">${l.title} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`).join('');
      const highlightHtml = p.highlights.map(h => `<div class="research-highlight">${h}</div>`).join('');
      programsHtml += `
        <div class="research-program">
          <div class="research-program-header">
            <div class="research-program-icon" style="background:${p.iconBg}">${p.icon}</div>
            <div><div class="research-program-title">${p.title}</div><div class="research-program-subtitle">${p.subtitle}</div></div>
          </div>
          <div class="research-program-body">
            <p>${p.desc}</p>
            <div class="research-program-highlights">${highlightHtml}</div>
            ${linkHtml}
          </div>
          <div class="research-program-footer">${facChips}</div>
        </div>`;
    });
  });

  // Clinical trials CTA
  const trialsCta = `<div class="research-trials-cta">
    <h3>Clinical Trials</h3>
    <p>Michigan Medicine patients have access to clinical trials not available at most institutions — including investigational therapies for prostate cancer, bladder cancer, kidney stones, and pelvic floor disorders. Ask your provider about trials that may be right for you.</p>
    <a href="https://www.rogelcancercenter.org/clinical-trials" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:13px;padding:10px 22px">Search Clinical Trials</a>
  </div>`;

  const body = `<div class="page-grid"><div class="page-main"><div class="research-grid">${programsHtml}${trialsCta}</div></div><div class="page-sidebar">${sidebarCTA()}<div class="sidebar-card"><h3>Research Faculty</h3><p style="font-size:13px;color:var(--gray-600);margin-bottom:10px">15 faculty with active research programs across laboratory science, health services, and quality improvement.</p><a href="#team" class="research-link" onclick="event.preventDefault();showPage('team')">View All Faculty <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div><div class="sidebar-card"><h3>Department Links</h3><a href="https://medicine.umich.edu/dept/urology/research" target="_blank" rel="noopener" class="research-link" style="display:block;margin-bottom:8px">U-M Urology Research <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a><a href="https://www.rogelcancercenter.org/" target="_blank" rel="noopener" class="research-link" style="display:block;margin-bottom:8px">Rogel Cancer Center <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a><a href="https://musicurology.com/" target="_blank" rel="noopener" class="research-link" style="display:block">MUSIC Collaborative <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></div></div></div>`;

  pageView.innerHTML = pageShell('Research & Innovation','Federally funded programs, quality collaboratives, and clinical trials shaping the future of urological care.', body, null, null, [{label:'Home',action:'navigateHome()'},{label:'Research'}]);

  // Make faculty tags clickable
  pageView.querySelectorAll('.research-faculty-tag').forEach(tag => {
    tag.addEventListener('click', () => showSubPage('provider', tag.dataset.fid));
  });
}

function renderProviderPage(id){
  const f=faculty.find(x=>x.id===id);if(!f){navigateHome();return}
  const ini=f.name.split(' ').map(n=>n[0]).join('');
  const avatarContent=f.imageUrl?`<img src="${f.imageUrl}" alt="${f.name}">`:ini;
  
  // Hero tags
  let tags=`<span class="provider-hero-tag">${f.divisionFull}</span>`;
  if(f.research) tags+=`<span class="provider-hero-tag research">${f.research}</span>`;
  if(f.type==='Fellow') tags+=`<span class="provider-hero-tag">Fellow</span>`;
  if(f.title.includes('NP')||f.title.includes('PA')) tags+=`<span class="provider-hero-tag">Advanced Practice Provider</span>`;

  // Video embed or placeholder
  let videoHtml='';
  if(f.videoUrl){
    let embedUrl=f.videoUrl;
    const ytMatch=f.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
    if(ytMatch) embedUrl=`https://www.youtube.com/embed/${ytMatch[1]}`;
    const vimeoMatch=f.videoUrl.match(/vimeo\.com\/(\d+)/);
    if(vimeoMatch) embedUrl=`https://player.vimeo.com/video/${vimeoMatch[1]}`;
    videoHtml=`<h2>Meet ${f.name.split(' ')[0]}</h2><div class="provider-video"><iframe src="${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" title="Introduction video for ${f.name}"></iframe></div>`;
  } else {
    videoHtml=`<h2>Meet ${f.name.split(' ')[0]}</h2><div class="provider-video-placeholder"><div class="provider-video-placeholder-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div><div class="provider-video-placeholder-text"><span class="provider-video-placeholder-title">Video Introduction Coming Soon</span><span class="provider-video-placeholder-sub">Learn more about ${f.name.split(' ')[0]}'s approach to patient care</span></div></div>`;
  }

  // Social links
  const socialLinks=[];
  if(f.social?.twitter) socialLinks.push({icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',url:f.social.twitter,label:'X / Twitter'});
  if(f.social?.linkedin) socialLinks.push({icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>',url:f.social.linkedin,label:'LinkedIn'});
  if(f.social?.scholar) socialLinks.push({icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>',url:f.social.scholar,label:'Google Scholar'});
  if(f.social?.researchgate) socialLinks.push({icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-1.104 0-2 .897-2 2s.896 2 2 2 2-.897 2-2-.896-2-2-2zM3.586 4.414c-2.2 0-3.586 1.663-3.586 3.586 0 1.918 1.386 3.586 3.586 3.586h5.414v2.828H3.586C1.608 14.414 0 16.022 0 18c0 1.978 1.608 3.586 3.586 3.586h7.828V24h4v-2.414h4.172c1.978 0 3.586-1.608 3.586-3.586V18c0-1.978-1.608-3.586-3.586-3.586H15.414v-2.828h4.172c2.2 0 3.586-1.668 3.586-3.586C23.172 6.077 21.786 4.414 19.586 4.414z"/></svg>',url:f.social.researchgate,label:'ResearchGate'});
  // Always add Michigan Medicine profile
  if(f.profileUrl) socialLinks.push({icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18V6l4.5 7L12 6l4.5 7L21 6v12"/></svg>',url:f.profileUrl,label:'Michigan Medicine'});

  let socialHtml='';
  if(socialLinks.length){
    socialHtml=`<div class="provider-social">${socialLinks.map(s=>`<a href="${s.url}" target="_blank" rel="noopener" class="provider-social-link" title="${s.label}">${s.icon}<span>${s.label}</span></a>`).join('')}</div>`;
  }

  // Personal message
  let messageHtml='';
  if(f.message) messageHtml=`<h2>A Message for My Patients</h2><div class="provider-message">${f.message}<div class="sig">— ${f.name}, ${f.title}</div></div>`;

  // Materials library
  let materialsHtml='';
  const materials=f.materials||f.resources||[];
  if(materials.length){
    const iconMap={pdf:'📄',video:'▶',link:'🔗',article:'📰',resource:'📋',handout:'📝'};
    const items=materials.map(m=>{
      const mtype=m.type||'link';
      const iconClass=mtype==='pdf'?'pdf':mtype==='video'?'video':mtype==='article'?'link':'resource';
      return `<a href="${m.url}" target="_blank" rel="noopener" class="provider-material"><div class="provider-material-icon ${iconClass}">${iconMap[mtype]||'🔗'}</div><div class="provider-material-text"><div class="provider-material-title">${m.title}</div><div class="provider-material-type">${mtype}</div></div><svg viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" stroke-width="2" style="width:16px;height:16px;flex-shrink:0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`;
    }).join('');
    materialsHtml=`<h2>Patient Resources & Materials</h2><div class="provider-materials">${items}</div>`;
  }

  // Conditions
  const conditionsHtml=`<h2>Conditions Treated</h2><div class="provider-conditions">${f.conditions.map(c=>`<span class="provider-condition">${c}</span>`).join('')}</div>`;

  // Preparing for your visit
  const eduHtml=`<h2>Preparing for Your Visit</h2><div class="provider-edu-list">${f.education.map(e=>`<div class="provider-edu-item">${e}</div>`).join('')}</div>`;

  // Sidebar: appointment CTA
  const apptCard=`<div class="provider-sidebar-card" style="background:linear-gradient(135deg,var(--blue),var(--blue-70));color:var(--white);border:none"><h3 style="color:var(--maize)">Schedule with ${f.name.split(' ')[0]}</h3><p style="font-size:13px;color:rgba(255,255,255,.7);margin-bottom:14px">New and existing patients welcome.</p><a href="tel:7349367030" class="btn btn-primary" style="width:100%;justify-content:center;font-size:14px;padding:12px 20px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.3 1.6.57 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.27 1.56.45 2.36.57A2 2 0 0 1 22 16.92z"/></svg> (734) 936-7030</a></div>`;

  // Sidebar: QR Code
  const siteBase=location.origin+location.pathname;
  const providerUrl=siteBase+'#provider/'+f.id;
  const qrCard=`<div class="provider-sidebar-card"><h3>Share This Profile</h3><div class="provider-qr"><div id="provider-qr-code"></div><div class="provider-qr-label">Scan to view this profile on any device</div><div class="provider-qr-url">${providerUrl}</div><div class="provider-qr-actions"><button class="provider-qr-btn" id="qr-copy-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Link</button><button class="provider-qr-btn" id="qr-print-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> Print</button></div></div></div>`;

  // Sidebar: quick links
  let linksHtml='';
  const quickLinks=[];
  if(f.profileUrl) quickLinks.push({label:'Michigan Medicine Profile',url:f.profileUrl});
  const sp=specialtyPages.find(s=>s.facultyIds&&s.facultyIds.includes(f.id));
  if(sp) quickLinks.push({label:sp.title+' Division',url:'#specialty/'+sp.id,internal:true});
  if(quickLinks.length){
    linksHtml=`<div class="provider-sidebar-card"><h3>Quick Links</h3>${quickLinks.map(l=>{
      const target=l.internal?'':'target="_blank" rel="noopener"';
      return `<a href="${l.url}" ${target} class="provider-profile-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> ${l.label}</a>`;
    }).join('')}</div>`;
  }

  // Breadcrumb
  const bc=breadcrumb([{label:'Home',action:'navigateHome()'},{label:'Our Team',action:"showPage('team')"},{label:f.name}]);

  // Assemble page
  homepage.style.display='none';footer.style.display='none';
  pageView.innerHTML=`
    <div class="provider-hero"><div class="container">
      ${bc}
      <button class="page-back" onclick="showPage('team')" style="margin-bottom:16px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> Our Team</button>
      <div class="provider-header">
        <div class="provider-avatar-lg">${avatarContent}</div>
        <div class="provider-hero-info">
          <h1>${f.name}, ${f.title}</h1>
          <div class="role">${f.role} · ${f.type}</div>
          <div class="provider-hero-tags">${tags}</div>
          ${socialHtml}
        </div>
      </div>
    </div></div>
    <div class="provider-body"><div class="container"><div class="provider-grid">
      <div class="provider-main">
        <h2>About</h2>
        <p>${f.bio}</p>
        ${videoHtml}
        ${messageHtml}
        ${conditionsHtml}
        ${materialsHtml}
        ${eduHtml}
      </div>
      <div class="provider-sidebar">
        ${apptCard}
        ${qrCard}
        ${linksHtml}
      </div>
    </div></div></div>
    <footer class="site-footer" style="margin-top:0"><div class="container"><div class="footer-bottom">&copy; <span>${new Date().getFullYear()}</span> Regents of the University of Michigan &middot; <a href="https://www.michiganmedicine.org" target="_blank" rel="noopener" style="color:rgba(255,255,255,.6)">Michigan Medicine</a></div></div></footer>`;

  // Generate QR code
  const qrEl=pageView.querySelector('#provider-qr-code');
  if(qrEl && typeof QRCode!=='undefined'){
    new QRCode(qrEl,{text:providerUrl,width:160,height:160,colorDark:'#00274C',colorLight:'#FFFFFF',correctLevel:QRCode.CorrectLevel.M});
  }

  // Copy link button
  const copyBtn=pageView.querySelector('#qr-copy-btn');
  if(copyBtn){copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(providerUrl).then(()=>{copyBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><polyline points="20 6 9 17 4 12"/></svg> Copied!';setTimeout(()=>{copyBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Link'},2000)})
  })}

  // Print QR button
  const printBtn=pageView.querySelector('#qr-print-btn');
  if(printBtn){printBtn.addEventListener('click',()=>{
    const canvas=qrEl.querySelector('canvas');if(!canvas)return;
    const win=window.open('','_blank','width=400,height=500');
    win.document.write(`<html><head><title>QR Code - ${f.name}</title><style>body{font-family:Arial,sans-serif;text-align:center;padding:40px}h2{color:#00274C;margin-bottom:4px}p{color:#666;font-size:14px}img{margin:20px auto;display:block}.url{font-size:11px;color:#1C7C8A;word-break:break-all;margin-top:20px}</style></head><body><h2>${f.name}, ${f.title}</h2><p>${f.divisionFull} · Michigan Medicine</p><img src="${canvas.toDataURL()}" width="200" height="200"><p>Scan to view provider profile</p><div class="url">${providerUrl}</div></body></html>`);
    win.document.close();win.focus();setTimeout(()=>win.print(),300);
  })}
}

function openEduModal(d){
  modalH.innerHTML=`<button class="modal-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button><div class="modal-avatar" style="background:${d.bg};color:${d.color};border-color:${d.bg}">${d.icon}</div><h2>${d.title}</h2><div class="modal-subtitle">Patient Education Guide</div>`;
  let linksH=d.links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener" class="edu-link-item">${l.title}</a>`).join('');
  modalB.innerHTML=`<div class="edu-modal-body"><p>${d.summary}</p><div class="edu-subsection"><h4>How to Prepare</h4>${d.prep.map(p=>`<div class="edu-item">${p}</div>`).join('')}</div><div class="edu-subsection"><h4>Questions to Bring</h4>${d.questions.map(q=>`<div class="edu-item">${q}</div>`).join('')}</div><div class="edu-subsection"><h4>Resources</h4>${linksH}</div></div><div class="modal-cta-bar"><a href="tel:7349367030" class="btn btn-primary" style="font-size:13px;padding:10px 20px">(734) 936-7030</a></div>`;
  overlay.classList.add('active');document.body.style.overflow='hidden';
  modalH.querySelector('.modal-close').addEventListener('click',closeModal)
}
