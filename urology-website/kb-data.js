const KB=[
// ═══ PROSTATE ═══
{id:"prostate",title:"Prostate",color:"#1565C0",
icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>',
desc:"Prostate cancer screening and treatment, enlarged prostate (BPH), and prostatitis.",
conditions:[
{id:"prostate-cancer",title:"Prostate Cancer",keywords:["psa","biopsy","gleason","robotic","prostatectomy","radiation","active surveillance"],
tagline:"The most common non-skin cancer in men \u2014 and one of the most treatable when caught early.",
content:`<h3>What Is Prostate Cancer?</h3>
<p>Prostate cancer develops when cells in the prostate gland grow abnormally. Most prostate cancers grow slowly and may never cause harm, but some are aggressive and need prompt treatment. Roughly 1 in 8 men will be diagnosed during their lifetime.</p>

<h3>Signs & Symptoms</h3>
<p>Early prostate cancer usually causes no symptoms \u2014 that is why screening matters. As it progresses, you may notice difficulty urinating, weak stream, blood in urine or semen, pelvic discomfort, or bone pain in advanced cases. Many of these overlap with BPH, which is benign. Only testing can tell the difference.</p>

<h3>Screening & Diagnosis</h3>
<p>Screening begins with a PSA blood test and digital rectal exam. If PSA is elevated, your doctor may recommend a prostate MRI followed by MRI-fusion biopsy \u2014 a technique Michigan Medicine helped pioneer \u2014 which targets suspicious areas more precisely than standard biopsy. Results are graded on the Gleason scale (Grade Group 1\u20135).</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>Our urologic oncologists review every case in a multidisciplinary tumor board. We are a national leader in MRI-fusion biopsy, robotic prostatectomy (450+ per year), and genomic biomarker testing for precision treatment decisions.</p></div>

<h3>Treatment Options</h3>
<p><strong>Active surveillance</strong> \u2014 for low-risk cancers, we monitor with regular PSA tests, MRIs, and periodic biopsies. Many men on surveillance never need treatment.</p>
<p><strong>Robotic prostatectomy</strong> \u2014 surgical removal using the da Vinci system. Michigan performs 450+ per year with outcomes ranking among the best nationally for cancer control, continence, and sexual function preservation.</p>
<p><strong>Radiation therapy</strong> \u2014 external beam (IMRT/SBRT) or brachytherapy. Often combined with hormone therapy for higher-risk disease.</p>
<p><strong>Hormone therapy (ADT)</strong> \u2014 reduces testosterone to slow cancer growth. Used with radiation or for advanced disease.</p>
<p><strong>Clinical trials</strong> \u2014 Michigan offers access to focal ablation, PSMA-targeted imaging, and novel systemic therapies.</p>

<h3>What to Expect After Surgery</h3>
<p>After robotic prostatectomy, most patients go home the same day or next morning. A catheter remains for 7\u201310 days. Most return to light activity within 2 weeks and full activity by 6 weeks. Continence and erectile function typically improve over 6\u201318 months.</p>

<div class="kb-alert"><div class="kb-alert-title">When to Seek Urgent Care</div><div class="kb-alert-text">Blood in urine that does not resolve, sudden inability to urinate, severe bone pain, or unexplained weight loss.</div></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What is my Gleason score / Grade Group, and what does it mean?</li>
<li>Am I a candidate for active surveillance?</li>
<li>What are the side effects of each treatment option?</li>
<li>How many robotic prostatectomies do you perform per year?</li>
<li>Are there clinical trials I should consider?</li>
<li>What does my genomic testing tell us about aggressiveness?</li>
</ol></div>`},

{id:"bph",title:"Enlarged Prostate (BPH)",keywords:["frequent urination","nocturia","weak stream","rezum","urolift","holep","turp","tamsulosin","finasteride"],
tagline:"The most common prostate condition in men over 50 \u2014 and one with many effective treatments.",
content:`<h3>What Is BPH?</h3>
<p>Benign prostatic hyperplasia (BPH) is a non-cancerous enlargement of the prostate. By age 60, more than half of men have some degree of BPH. As the prostate grows, it squeezes the urethra and makes urination difficult. BPH is not cancer and does not increase cancer risk, but it can significantly affect quality of life.</p>

<h3>Signs & Symptoms</h3>
<p>Frequent urination (especially at night), weak or intermittent stream, difficulty starting, feeling of incomplete emptying, urgency, and in severe cases, inability to urinate (retention).</p>

<h3>Diagnosis</h3>
<p>Symptom questionnaire (AUA score), physical exam, PSA blood test, urinalysis, and often a uroflow study. In some cases, ultrasound or cystoscopy may be needed.</p>

<h3>Treatment Options</h3>
<p><strong>Lifestyle changes</strong> \u2014 reducing fluid before bed, limiting caffeine and alcohol, double-voiding, and timed voiding for mild symptoms.</p>
<p><strong>Medications</strong> \u2014 alpha-blockers (tamsulosin) for fast relief; 5-alpha-reductase inhibitors (finasteride) to shrink the prostate over months. Combination therapy for moderate-to-severe BPH.</p>
<p><strong>Rez\u016Bm water vapor therapy</strong> \u2014 minimally invasive office procedure using steam to shrink tissue. Most men improve within 2\u20134 weeks and can stop medications. Preserves sexual function.</p>
<p><strong>UroLift</strong> \u2014 mechanical implants that hold the prostate open. Quick recovery, minimal sexual side effects. Suitable for smaller prostates.</p>
<p><strong>HoLEP</strong> \u2014 gold standard for large prostates. Laser energy removes obstructing tissue with durable, long-lasting results.</p>
<p><strong>TURP</strong> \u2014 traditional surgical approach through a scope. Well-established, typically a 1-night stay.</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>We offer the full spectrum \u2014 Rez\u016Bm and UroLift in the office, HoLEP and robotic simple prostatectomy for the largest glands. Our approach is personalized to your anatomy, symptoms, and priorities around sexual function and recovery.</p></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>How large is my prostate, and which treatments am I a candidate for?</li>
<li>Can I try medications first?</li>
<li>What are the effects of each option on sexual function?</li>
<li>How soon will I notice improvement?</li>
<li>Will I be able to stop my BPH medications after treatment?</li>
</ol></div>`},

{id:"prostatitis",title:"Prostatitis",keywords:["pelvic pain","burning urination","chronic pain"],
tagline:"Prostate inflammation that can cause pelvic pain, urinary symptoms, and significant discomfort.",
content:`<h3>What Is Prostatitis?</h3>
<p>Prostatitis is inflammation of the prostate gland and the most common urological diagnosis in men under 50. Types include acute bacterial (sudden infection), chronic bacterial (recurring infections), and chronic pelvic pain syndrome (CPPS) \u2014 the most common form, involving pain without a clear infection.</p>

<h3>Signs & Symptoms</h3>
<p>Pain or burning with urination, difficulty urinating, frequent or urgent urination, pain in the groin, pelvis, lower back, or perineum, painful ejaculation, and flu-like symptoms in acute cases.</p>

<h3>Treatment</h3>
<p>Acute bacterial prostatitis requires 4\u20136 weeks of antibiotics. CPPS is managed with a multimodal approach: alpha-blockers, anti-inflammatories, pelvic floor physical therapy, stress management, and sometimes nerve-targeting medications.</p>

<div class="kb-alert"><div class="kb-alert-title">When to Seek Urgent Care</div><div class="kb-alert-text">High fever with difficulty urinating, severe pelvic pain, or inability to urinate. Acute bacterial prostatitis can become serious.</div></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Is my prostatitis bacterial or non-bacterial?</li>
<li>Would pelvic floor physical therapy help?</li>
<li>Are there lifestyle changes that could manage chronic symptoms?</li>
<li>How long before I see improvement?</li>
</ol></div>`}
]},

// ═══ BLADDER ═══
{id:"bladder",title:"Bladder",color:"#00796B",
icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
desc:"Bladder cancer, overactive bladder, urinary incontinence, and interstitial cystitis.",
conditions:[
{id:"bladder-cancer",title:"Bladder Cancer",keywords:["blood in urine","hematuria","bcg","cystectomy","neobladder","turbt"],
tagline:"The fourth most common cancer in men \u2014 highly treatable when detected early through prompt evaluation of blood in urine.",
content:`<h3>What Is Bladder Cancer?</h3>
<p>Bladder cancer begins in the cells lining the bladder. Smoking is the greatest risk factor, accounting for roughly half of cases. Most are diagnosed at an early, non-muscle-invasive stage with good prognosis but requiring ongoing surveillance.</p>

<h3>Signs & Symptoms</h3>
<p>Blood in urine is the most common sign \u2014 even once, even without pain, it should always be evaluated. Other symptoms include frequent urination, pain during urination, or pelvic pain.</p>

<h3>Diagnosis</h3>
<p>Cystoscopy (camera into the bladder), urine cytology, CT urogram, and TURBT (resection of tumor) to stage the cancer and determine muscle invasion.</p>

<h3>Treatment</h3>
<p><strong>Non-muscle-invasive</strong> \u2014 TURBT followed by BCG immunotherapy or intravesical chemotherapy. Surveillance cystoscopies every 3\u201312 months.</p>
<p><strong>Muscle-invasive</strong> \u2014 radical cystectomy with urinary diversion, often preceded by chemotherapy. Michigan performs robotic intracorporeal neobladder reconstruction.</p>
<p><strong>Immunotherapy</strong> \u2014 checkpoint inhibitors for advanced or BCG-unresponsive disease.</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>One of the nation's largest bladder cancer programs. We perform robotic intracorporeal neobladder reconstruction, offer enhanced recovery protocols, and run clinical trials for BCG-unresponsive and advanced disease.</p></div>

<div class="kb-alert"><div class="kb-alert-title">Important</div><div class="kb-alert-text">Any episode of blood in urine should be evaluated with cystoscopy and imaging. Do not wait for a second episode.</div></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Is my cancer non-muscle-invasive or muscle-invasive?</li>
<li>Will BCG be part of my treatment?</li>
<li>If I need bladder removal, what are my diversion options?</li>
<li>Am I a candidate for a neobladder?</li>
<li>Are there clinical trials available?</li>
</ol></div>`},

{id:"oab",title:"Overactive Bladder (OAB)",keywords:["urgency","frequent urination","nocturia","leaking","botox","interstim"],
tagline:"Sudden, frequent urges to urinate that are hard to control \u2014 affecting up to 30% of adults.",
content:`<h3>What Is OAB?</h3>
<p>OAB occurs when the bladder muscle contracts involuntarily, causing sudden, strong urges before the bladder is full. It may or may not involve leaking. OAB is common, underreported, and very treatable. It is not a normal part of aging.</p>

<h3>Signs & Symptoms</h3>
<p>Sudden intense urge to urinate, frequent urination (8+ times/day), nocturia (waking 2+ times at night), and urge incontinence (leaking on the way to the bathroom).</p>

<h3>Treatment Options</h3>
<p><strong>Behavioral therapy (first line)</strong> \u2014 bladder training, timed voiding, fluid management, pelvic floor exercises. No side effects.</p>
<p><strong>Medications</strong> \u2014 anticholinergics or mirabegron (Myrbetriq). Reduce urgency and frequency.</p>
<p><strong>Botox injections</strong> \u2014 into the bladder wall during cystoscopy. Effective for 6\u20139 months.</p>
<p><strong>Sacral neuromodulation (InterStim)</strong> \u2014 implanted device modulating bladder-brain nerve signals. Staged trial then permanent implant.</p>
<p><strong>PTNS</strong> \u2014 in-office nerve stimulation via the ankle. Non-invasive alternative.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Should I start with behavioral changes or medication?</li>
<li>Which medication has the fewest side effects for me?</li>
<li>Am I a candidate for Botox if medications aren't enough?</li>
<li>What is the success rate of sacral neuromodulation?</li>
</ol></div>`},

{id:"incontinence",title:"Urinary Incontinence",keywords:["leaking","stress incontinence","urge incontinence","sling","pelvic floor"],
tagline:"Involuntary urine leakage affects millions of adults \u2014 effective treatments exist for every type.",
content:`<h3>What Is Incontinence?</h3>
<p>Urinary incontinence is involuntary loss of urine. The two main types are stress incontinence (leaking with coughing, sneezing, lifting) and urge incontinence (leaking with a sudden strong urge). Many people have mixed incontinence.</p>

<h3>Evaluation</h3>
<p>Detailed history, physical exam, bladder diary, and sometimes urodynamics testing to determine the exact type and severity.</p>

<h3>Treatment</h3>
<p><strong>Pelvic floor therapy</strong> \u2014 first-line for both types. Effective in up to 80% of stress incontinence cases.</p>
<p><strong>For stress incontinence</strong> \u2014 midurethral sling is the most common and effective surgical option. 20\u201330 minute outpatient procedure with excellent long-term results.</p>
<p><strong>For urge incontinence</strong> \u2014 behavioral therapy, medications, Botox, or neuromodulation.</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>Our Neurourology division is one of the most experienced nationally. We manage the full spectrum from pelvic floor therapy to complex reconstruction, artificial sphincters, and sacral neuromodulation. Our team authored the AUA guidelines for several of these conditions.</p></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Do I have stress, urge, or mixed incontinence?</li>
<li>Should I start with pelvic floor therapy?</li>
<li>What are the risks and success rates of sling surgery?</li>
<li>Do I need urodynamics testing?</li>
</ol></div>`},

{id:"ic-bps",title:"Interstitial Cystitis / Painful Bladder",keywords:["bladder pain","pelvic pain","ic","bps","painful bladder"],
tagline:"Chronic bladder pain and pressure that can significantly impact daily life \u2014 effective management is possible.",
content:`<h3>What Is IC/BPS?</h3>
<p>Interstitial cystitis (IC), also called bladder pain syndrome, is a chronic condition causing bladder pressure, pain, and sometimes pelvic pain. Severity ranges from mild to debilitating. It is a diagnosis of exclusion and affects women more than men.</p>

<h3>Signs & Symptoms</h3>
<p>Chronic pelvic or bladder pain, frequent urination (sometimes 40\u201360 times/day in severe cases), urgency, pain that worsens as the bladder fills and improves after voiding, pain during intercourse, and flares triggered by certain foods or stress.</p>

<h3>Treatment Approach</h3>
<p><strong>First-line:</strong> dietary modification (eliminate citrus, caffeine, alcohol, spicy foods), stress management, pelvic floor physical therapy.</p>
<p><strong>Second-line:</strong> oral medications (amitriptyline, hydroxyzine) and bladder instillations.</p>
<p><strong>Third-line:</strong> cystoscopy with hydrodistention, Botox, or neuromodulation for refractory cases.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>How was my IC/BPS diagnosis confirmed?</li>
<li>What dietary changes are most likely to help?</li>
<li>Would pelvic floor therapy benefit me?</li>
<li>What if first-line treatments aren't enough?</li>
</ol></div>`}
]},

// ═══ KIDNEY ═══
{id:"kidney",title:"Kidney",color:"#C62828",
icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>',
desc:"Kidney cancer, kidney stones, and stone prevention.",
conditions:[
{id:"kidney-cancer",title:"Kidney Cancer",keywords:["renal cell carcinoma","nephrectomy","renal mass","partial nephrectomy"],
tagline:"Often found incidentally on imaging \u2014 and highly curable when caught early.",
content:`<h3>What Is Kidney Cancer?</h3>
<p>Kidney cancer (renal cell carcinoma) develops in the kidney lining. It is increasingly discovered incidentally on imaging done for other reasons, meaning more cases are caught at an early, curable stage. Risk factors include smoking, obesity, high blood pressure, and family history.</p>

<h3>Signs & Symptoms</h3>
<p>Early kidney cancer often has no symptoms. When they occur: blood in urine, flank pain, palpable mass, unexplained weight loss, fatigue, or fever.</p>

<h3>Treatment Options</h3>
<p><strong>Active surveillance</strong> \u2014 for very small masses, especially in older patients.</p>
<p><strong>Partial nephrectomy</strong> \u2014 removing the tumor while preserving the kidney. Preferred for most small-to-moderate tumors. Done robotically at Michigan.</p>
<p><strong>Radical nephrectomy</strong> \u2014 complete kidney removal for very large tumors.</p>
<p><strong>Ablation</strong> \u2014 cryoablation or radiofrequency for small tumors in non-surgical candidates.</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>We prioritize kidney preservation. Our surgeons perform robotic partial nephrectomy for complex tumors using 3D imaging. For advanced disease, we offer the latest immunotherapy combinations through the Rogel Cancer Center.</p></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Can my tumor be removed while saving the kidney?</li>
<li>Is surveillance appropriate for my situation?</li>
<li>What is the recurrence risk?</li>
<li>What is recovery like after robotic partial nephrectomy?</li>
</ol></div>`},

{id:"kidney-stones",title:"Kidney Stones",keywords:["stone","calculi","lithotripsy","ureteroscopy","pcnl","flank pain","renal colic"],
tagline:"Intensely painful but treatable \u2014 and with the right plan, often preventable.",
content:`<h3>What Are Kidney Stones?</h3>
<p>Kidney stones are hard mineral deposits that form when urine becomes concentrated. They cause pain when moving from the kidney into the ureter. About 1 in 10 people will develop a stone, and recurrence is common \u2014 up to 50% within 5\u201310 years without prevention.</p>

<h3>Signs & Symptoms</h3>
<p>Severe, sharp pain in the side and back that may radiate to the lower abdomen and groin. Pain comes in waves. Other symptoms: blood in urine, nausea, frequent urination, and fever/chills if infection is present.</p>

<h3>Treatment</h3>
<p><strong>Observation</strong> \u2014 small stones (under 5\u20136 mm) often pass on their own. Alpha-blockers can help.</p>
<p><strong>Shock wave lithotripsy (ESWL)</strong> \u2014 external shock waves break stones. Non-invasive.</p>
<p><strong>Ureteroscopy with laser</strong> \u2014 most common surgical treatment. Same-day procedure.</p>
<p><strong>PCNL</strong> \u2014 for large or complex stones (over 2 cm). Direct access through a small back incision.</p>

<h3>Prevention</h3>
<p>A 24-hour urine collection identifies your specific risk factors. Interventions include increased fluid intake (goal: 2.5L urine/day), reduced sodium, moderate protein, and targeted medications based on stone type.</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>Our endourology team manages 1,000+ stone cases per year. We lead the MUSIC ROCKS collaborative across 100+ Michigan practices and our metabolic stone clinic provides personalized prevention plans.</p></div>

<div class="kb-alert"><div class="kb-alert-title">When to Seek Emergency Care</div><div class="kb-alert-text">Fever with a suspected stone (may indicate infection behind a blockage \u2014 a urological emergency), inability to keep fluids down, or uncontrolled pain.</div></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What type of stone do I have?</li>
<li>Will this pass on its own, or do I need a procedure?</li>
<li>Should I have a metabolic workup?</li>
<li>What dietary changes are most effective?</li>
<li>How much water should I drink daily?</li>
</ol></div>`}
]},
// ═══ MEN'S HEALTH ═══
{id:"mens-health",title:"Men\u2019s Health",color:"#E65100",
icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
desc:"Erectile dysfunction, male infertility, low testosterone, vasectomy, and Peyronie\u2019s disease.",
conditions:[
{id:"ed",title:"Erectile Dysfunction",keywords:["impotence","viagra","cialis","penile implant","prosthesis","sexual function"],
tagline:"Affects over half of men over 40 \u2014 and is often a treatable symptom of an underlying condition.",
content:`<h3>What Is ED?</h3>
<p>Erectile dysfunction is the persistent inability to achieve or maintain an erection sufficient for sexual performance. It affects an estimated 30 million men in the U.S. ED is often an early warning sign of cardiovascular disease, diabetes, or other systemic conditions.</p>

<h3>Causes</h3>
<p>Most often caused by reduced blood flow (vascular disease), nerve damage, hormonal imbalances, medications, psychological factors, or a combination. Lifestyle factors \u2014 smoking, obesity, sedentary behavior \u2014 contribute significantly.</p>

<h3>Treatment Options</h3>
<p><strong>Lifestyle modifications</strong> \u2014 exercise, weight loss, smoking cessation can significantly improve function.</p>
<p><strong>PDE5 inhibitors</strong> \u2014 sildenafil (Viagra), tadalafil (Cialis). Effective in 60\u201370% of men.</p>
<p><strong>Penile injection therapy</strong> \u2014 effective in 85%+ of men, including many who don\u2019t respond to pills.</p>
<p><strong>Vacuum devices</strong> \u2014 non-invasive option using negative pressure.</p>
<p><strong>Penile prosthesis</strong> \u2014 for men who haven\u2019t responded to other treatments. Highest satisfaction rates of any ED treatment (over 90%).</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>Our Men\u2019s Health program offers comprehensive evaluation including vascular and hormonal testing. We are a high-volume center for penile prosthesis with some of the lowest complication rates nationally, and specialize in ED rehabilitation after prostate cancer treatment.</p></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What is likely causing my ED? Should I be screened for cardiovascular disease?</li>
<li>What treatment options fit my other health conditions?</li>
<li>Daily tadalafil vs. on-demand \u2014 which is better for me?</li>
<li>If medications aren\u2019t working, what\u2019s next?</li>
<li>What does penile prosthesis surgery involve?</li>
</ol></div>`},

{id:"male-infertility",title:"Male Infertility",keywords:["sperm","semen analysis","varicocele","ivf","fertility","azoospermia"],
tagline:"Male factors contribute to roughly half of all infertility cases \u2014 and many are treatable.",
content:`<h3>What Is Male Infertility?</h3>
<p>Male infertility refers to a man\u2019s inability to cause pregnancy in a fertile partner. Male factors are involved in approximately 40\u201350% of all infertility cases. Causes include abnormal sperm production, impaired delivery, hormonal imbalances, and genetic conditions.</p>

<h3>Evaluation</h3>
<p>Detailed history, physical exam, at least two semen analyses. Additional testing may include hormones, genetic testing, scrotal ultrasound. Varicocele (enlarged scrotal veins) is the most common correctable cause.</p>

<h3>Treatment</h3>
<p><strong>Varicocele repair</strong> \u2014 microsurgical repair improves semen in 60\u201370% of men.</p>
<p><strong>Hormonal optimization</strong> \u2014 clomiphene or hCG to improve sperm production.</p>
<p><strong>Surgical sperm retrieval (micro-TESE)</strong> \u2014 for men with no sperm in the ejaculate, enabling IVF/ICSI.</p>
<p><strong>Lifestyle optimization</strong> \u2014 eliminating tobacco, maintaining healthy weight, avoiding heat exposure.</p>

<div class="kb-um"><div class="kb-um-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> At Michigan Medicine</div><p>Our andrology team performs microsurgical varicocelectomy, vasectomy reversal, and micro-TESE, coordinating closely with Michigan\u2019s reproductive endocrinology program for couples pursuing assisted reproduction.</p></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What is the most likely cause of my infertility?</li>
<li>Do I have a varicocele, and would repair help?</li>
<li>Should I be tested for genetic causes?</li>
<li>What medications should I avoid?</li>
<li>Do we need IVF, or are there treatments to try first?</li>
</ol></div>`},

{id:"low-t",title:"Low Testosterone",keywords:["hypogonadism","testosterone replacement","trt","fatigue","low libido"],
tagline:"Testosterone naturally declines with age \u2014 but true deficiency causes real symptoms and is safely treatable.",
content:`<h3>What Is Low Testosterone?</h3>
<p>Low testosterone (hypogonadism) occurs when the testes produce insufficient testosterone. Levels decline about 1% per year after age 30. Clinically significant deficiency \u2014 below 300 ng/dL with symptoms \u2014 affects 2\u20136% of men. Diagnosis requires both low lab values and symptoms.</p>

<h3>Signs & Symptoms</h3>
<p>Decreased sex drive, erectile dysfunction, fatigue, loss of muscle mass, increased body fat, depressed mood, reduced bone density, and difficulty concentrating.</p>

<h3>Treatment</h3>
<p>Testosterone replacement (injections, gels, patches, or pellets) improves energy, libido, body composition, and mood. However, TRT suppresses sperm production \u2014 men wanting future fertility should discuss alternatives like clomiphene. Monitoring includes periodic blood tests.</p>

<div class="kb-alert"><div class="kb-alert-title">Important</div><div class="kb-alert-text">TRT suppresses sperm production and may cause infertility. Discuss fertility-preserving alternatives before starting.</div></div>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Are my levels truly low, or could something else explain my symptoms?</li>
<li>Which form of replacement is best for me?</li>
<li>How will TRT affect my fertility?</li>
<li>What monitoring will I need?</li>
<li>Can lifestyle changes improve my levels naturally?</li>
</ol></div>`},

{id:"vasectomy",title:"Vasectomy & Reversal",keywords:["contraception","sterilization","vas deferens","vasovasostomy"],
tagline:"The most reliable form of male contraception \u2014 and reversal is possible if circumstances change.",
content:`<h3>Vasectomy</h3>
<p>A vasectomy cuts or blocks the vas deferens \u2014 the tubes carrying sperm. Over 99.9% effective. Takes 15\u201320 minutes under local anesthesia. Most men return to desk work in 2\u20133 days.</p>

<h3>Vasectomy Reversal</h3>
<p>Microsurgical reconnection of the vas deferens. Patency rates are 90%+ when reversed within 10 years, declining to 70\u201380% after 15+ years. Pregnancy rates depend on partner factors. The procedure takes 2\u20133 hours; recovery is 1\u20132 weeks.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What should I expect during and after the procedure?</li>
<li>When can I resume sexual activity?</li>
<li>How is sterility confirmed after vasectomy?</li>
<li>If considering reversal: what are my success rates given time elapsed?</li>
<li>Should we consider sperm retrieval with IVF instead?</li>
</ol></div>`},

{id:"peyronies",title:"Peyronie\u2019s Disease",keywords:["curved penis","plaque","penile curvature","xiaflex"],
tagline:"Scar tissue causing penile curvature \u2014 treatable when it interferes with function or causes distress.",
content:`<h3>What Is Peyronie\u2019s Disease?</h3>
<p>Peyronie\u2019s disease is the formation of fibrous scar tissue (plaque) inside the penis, causing curved or painful erections. It affects an estimated 6\u201310% of men and typically develops after age 40. The condition has two phases: an active phase with pain and changing curvature (6\u201318 months) and a stable phase where curvature is fixed.</p>

<h3>Treatment</h3>
<p><strong>Observation</strong> \u2014 during the active phase, treatment is usually conservative. Mild curvature without functional impairment may not require treatment.</p>
<p><strong>Xiaflex (collagenase)</strong> \u2014 injectable enzyme that breaks down plaque. FDA-approved for curvatures over 30 degrees in the stable phase.</p>
<p><strong>Surgical correction</strong> \u2014 plication (shortening the longer side), grafting (for severe curvature), or penile prosthesis (if ED is also present). Surgery is reserved for the stable phase.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Am I in the active or stable phase?</li>
<li>Is my curvature severe enough to require treatment?</li>
<li>Am I a candidate for Xiaflex injections?</li>
<li>What surgical options are available if needed?</li>
</ol></div>`}
]},

// ═══ WOMEN'S UROLOGY ═══
{id:"womens-urology",title:"Women\u2019s Urology",color:"#6A1B9A",
icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
desc:"Pelvic organ prolapse, female incontinence, and recurrent UTIs.",
conditions:[
{id:"prolapse",title:"Pelvic Organ Prolapse",keywords:["bulge","pessary","cystocele","rectocele","sacrocolpopexy"],
tagline:"When the pelvic floor weakens and organs descend \u2014 common, treatable, and nothing to be embarrassed about.",
content:`<h3>What Is Pelvic Organ Prolapse?</h3>
<p>Pelvic organ prolapse occurs when muscles and tissues supporting the bladder, uterus, or rectum weaken, allowing organs to drop toward or through the vaginal opening. Up to 50% of women who have had children have some degree. Risk factors include vaginal childbirth, aging, heavy lifting, obesity, and genetics.</p>

<h3>Signs & Symptoms</h3>
<p>Pressure or fullness in the pelvis, a visible or palpable bulge at the vaginal opening, difficulty with urination or bowel movements, discomfort during intercourse, and symptoms worsening with prolonged standing.</p>

<h3>Treatment</h3>
<p><strong>Observation & pelvic floor exercises</strong> \u2014 mild prolapse may not need treatment.</p>
<p><strong>Pessary</strong> \u2014 removable silicone device placed in the vagina for support. Non-surgical, effective long-term.</p>
<p><strong>Surgical repair</strong> \u2014 native tissue repair, mesh-augmented repair, or robotic sacrocolpopexy depending on type and severity.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What type and severity of prolapse do I have?</li>
<li>Would a pessary work for me?</li>
<li>If I need surgery, what approach do you recommend?</li>
<li>What is the recurrence risk after repair?</li>
</ol></div>`},

{id:"recurrent-utis",title:"Recurrent UTIs",keywords:["urinary tract infection","uti","antibiotics","vaginal estrogen"],
tagline:"Three or more UTIs per year is considered recurrent \u2014 effective prevention strategies exist.",
content:`<h3>What Are Recurrent UTIs?</h3>
<p>Defined as 2+ infections in six months, or 3+ in a year. Common in women due to shorter urethra and postmenopausal hormonal changes. Evaluation rules out anatomical or functional causes.</p>

<h3>Prevention Strategies</h3>
<p><strong>Behavioral:</strong> adequate hydration, voiding after intercourse, avoiding spermicides.</p>
<p><strong>Vaginal estrogen</strong> \u2014 topical cream or suppository restores protective flora in postmenopausal women. One of the most effective strategies.</p>
<p><strong>Prophylactic antibiotics</strong> \u2014 low-dose daily or post-intercourse for 3\u20136 months.</p>
<p><strong>D-mannose and cranberry</strong> \u2014 some evidence supports these, though more limited than the above.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What is causing my recurrent infections?</li>
<li>Would vaginal estrogen be appropriate for me?</li>
<li>Should I take prophylactic antibiotics?</li>
<li>Do I need additional testing?</li>
</ol></div>`}
]},

// ═══ PEDIATRIC ═══
{id:"pediatric",title:"Pediatric Urology",color:"#4527A0",
icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
desc:"Undescended testicles, hypospadias, vesicoureteral reflux, and bedwetting.",
conditions:[
{id:"undescended-testicle",title:"Undescended Testicle",keywords:["cryptorchidism","orchiopexy"],
tagline:"The most common genital condition in newborn boys \u2014 usually corrected with a simple surgery.",
content:`<h3>What Is an Undescended Testicle?</h3>
<p>Cryptorchidism occurs when one or both testicles fail to descend into the scrotum before birth. It affects about 3% of full-term boys and up to 30% of premature boys. Some resolve spontaneously by 6 months, but those that don\u2019t typically require surgery.</p>

<h3>Treatment</h3>
<p><strong>Orchiopexy</strong> \u2014 surgical placement of the testicle into the scrotum. Recommended by age 6\u201312 months. Typically a short outpatient procedure with excellent outcomes. Early treatment preserves fertility potential and allows for future cancer screening.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Will the testicle descend on its own, or does my child need surgery?</li>
<li>What is the ideal age for surgery?</li>
<li>What does recovery look like for a baby/toddler?</li>
<li>Does this affect future fertility?</li>
</ol></div>`},

{id:"hypospadias",title:"Hypospadias",keywords:["urethral opening","penile surgery"],
tagline:"A common birth condition where the urethral opening is on the underside of the penis.",
content:`<h3>What Is Hypospadias?</h3>
<p>Hypospadias is a condition present at birth where the opening of the urethra is on the underside of the penis rather than at the tip. It affects about 1 in 200 boys. Severity ranges from mild (opening near the tip) to severe (opening near the base or scrotum). It may be associated with penile curvature (chordee).</p>

<h3>Treatment</h3>
<p>Most cases require surgical repair, typically performed between 6\u201318 months of age. The surgery repositions the urethral opening and corrects any curvature. The goal is normal urinary and future sexual function with good cosmetic appearance.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>How severe is my child\u2019s hypospadias?</li>
<li>What does the surgical repair involve?</li>
<li>What is the expected recovery and complication rate?</li>
<li>Will my child have normal function after repair?</li>
</ol></div>`},

{id:"vur",title:"Vesicoureteral Reflux (VUR)",keywords:["reflux","urine backup","uti children"],
tagline:"When urine flows backward from the bladder to the kidneys \u2014 a common cause of UTIs in children.",
content:`<h3>What Is VUR?</h3>
<p>VUR occurs when urine flows backward from the bladder into the ureters and potentially the kidneys. It is the most common urological condition in children, often diagnosed after a UTI. VUR is graded I\u2013V based on severity. Lower grades often resolve spontaneously as the child grows.</p>

<h3>Treatment</h3>
<p><strong>Observation with antibiotic prophylaxis</strong> \u2014 for low-grade VUR, daily low-dose antibiotics prevent UTIs while waiting for spontaneous resolution.</p>
<p><strong>Endoscopic injection (Deflux)</strong> \u2014 a minimally invasive procedure injecting a bulking agent at the ureteral opening. Outpatient, done under brief anesthesia.</p>
<p><strong>Surgical reimplantation</strong> \u2014 for high-grade or persistent VUR. Creates a new, longer tunnel for the ureter through the bladder wall. Very high success rates.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>What grade of VUR does my child have?</li>
<li>Is this likely to resolve on its own?</li>
<li>Should my child be on preventive antibiotics?</li>
<li>When would surgery be recommended?</li>
</ol></div>`},

{id:"bedwetting",title:"Bedwetting (Nocturnal Enuresis)",keywords:["enuresis","nighttime wetting","desmopressin","bed alarm"],
tagline:"Very common in children and almost always outgrown \u2014 but treatments can help while you wait.",
content:`<h3>What Is Bedwetting?</h3>
<p>Nocturnal enuresis is involuntary urination during sleep in children age 5 and older. It affects 15\u201320% of 5-year-olds and 1\u20132% of 15-year-olds. It is almost always developmental \u2014 the child\u2019s bladder, brain-bladder signaling, or overnight urine production hasn\u2019t fully matured. There is a strong genetic component.</p>

<h3>When to Seek Evaluation</h3>
<p>Bedwetting alone in children under 7 is common and usually needs no treatment beyond reassurance. Evaluation is appropriate when the child is 7+ and wants to stop, when daytime symptoms are also present, or when bedwetting begins after 6+ months of dryness (secondary enuresis).</p>

<h3>Treatment</h3>
<p><strong>Bedwetting alarm</strong> \u2014 the most effective long-term treatment. Trains the brain to recognize a full bladder during sleep. Requires 2\u20133 months of consistent use.</p>
<p><strong>Desmopressin (DDAVP)</strong> \u2014 reduces overnight urine production. Works quickly for sleepovers or camps but doesn\u2019t provide a permanent cure.</p>
<p><strong>Behavioral strategies</strong> \u2014 limiting fluids before bed, timed voiding, and positive reinforcement.</p>

<div class="kb-q"><div class="kb-q-t">Questions to Bring to Your Appointment</div><ol>
<li>Is my child\u2019s bedwetting likely to resolve on its own?</li>
<li>Should we try an alarm or medication first?</li>
<li>Are there any underlying conditions we should rule out?</li>
<li>How can we best support our child emotionally?</li>
</ol></div>`}
]},

// ═══ PROCEDURES ═══
{id:"procedures",title:"Procedures & What to Expect",color:"#37474F",
icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
desc:"Robotic surgery, cystoscopy, prostate biopsy, urodynamics, and lithotripsy.",
conditions:[
{id:"robotic-surgery",title:"Robotic Surgery at Michigan",keywords:["da vinci","minimally invasive","robot"],
tagline:"Michigan Medicine is one of the highest-volume robotic surgery centers in the nation.",
content:`<h3>What Is Robotic Surgery?</h3>
<p>Robotic-assisted surgery uses the da Vinci surgical system \u2014 a surgeon controls miniaturized instruments through small incisions using a console with 3D magnified vision and enhanced dexterity. It is not autonomous; the robot is an extension of the surgeon\u2019s hands.</p>

<h3>Advantages</h3>
<p>Smaller incisions, less blood loss, reduced pain, shorter hospital stays, and faster recovery compared to open surgery. For urological procedures, robotic surgery also allows more precise nerve preservation and tissue reconstruction.</p>

<h3>Robotic Procedures at Michigan</h3>
<p>Prostatectomy (450+/year), partial nephrectomy, radical cystectomy with neobladder, pyeloplasty, ureteral reimplantation, and sacrocolpopexy. Michigan\u2019s surgeons have performed thousands of robotic procedures and train the next generation of robotic surgeons.</p>

<h3>What to Expect</h3>
<p>Most robotic procedures use general anesthesia. Patients typically go home the same day or next morning. Recovery is significantly faster than open surgery \u2014 most return to normal activities within 2\u20144 weeks depending on the procedure.</p>`},

{id:"cystoscopy",title:"Cystoscopy",keywords:["scope","bladder camera","bladder exam"],
tagline:"A quick, common procedure to look inside the bladder \u2014 usually done in the office in minutes.",
content:`<h3>What Is Cystoscopy?</h3>
<p>Cystoscopy is a procedure where a thin, flexible camera (cystoscope) is inserted through the urethra to examine the inside of the bladder. It is one of the most common procedures in urology.</p>

<h3>Why It\u2019s Done</h3>
<p>To evaluate blood in urine, recurrent UTIs, urinary symptoms, suspected bladder cancer, or to follow up after bladder cancer treatment. Also used for stent placement and minor procedures.</p>

<h3>What to Expect</h3>
<p>Office cystoscopy takes 3\u20135 minutes. A local anesthetic gel is applied to the urethra. Most patients describe mild discomfort or pressure, not pain. You can drive yourself home and return to normal activities immediately. Mild burning with urination for 24\u201348 hours is normal.</p>`},

{id:"prostate-biopsy",title:"Prostate Biopsy (MRI-Fusion)",keywords:["mri fusion","transperineal","psa elevated"],
tagline:"The most accurate way to diagnose prostate cancer \u2014 and Michigan helped pioneer the MRI-fusion technique.",
content:`<h3>What Is MRI-Fusion Biopsy?</h3>
<p>MRI-fusion biopsy combines a previously obtained prostate MRI with real-time ultrasound to precisely target suspicious areas for tissue sampling. It is significantly more accurate than traditional random biopsy at detecting clinically significant cancers while reducing detection of low-risk cancers that don\u2019t need treatment.</p>

<h3>What to Expect</h3>
<p>The procedure takes about 20\u201330 minutes. It is performed either transperineally (through the skin between scrotum and rectum, which has lower infection risk) or transrectally. Typically done under local anesthesia with mild sedation. Most patients take the day off work but return to normal activities the next day. Mild blood in urine, semen, or stool for several days is normal.</p>

<h3>Preparation</h3>
<p>Your doctor will provide instructions about medications (especially blood thinners), antibiotics, and any bowel prep needed. A prostate MRI must be completed before the procedure.</p>`},

{id:"urodynamics",title:"Urodynamics Testing",keywords:["bladder pressure","uroflow","bladder function test"],
tagline:"Specialized testing that shows exactly how your bladder fills, stores, and empties.",
content:`<h3>What Is Urodynamics?</h3>
<p>Urodynamics is a group of tests that evaluate bladder and urethral function. It measures bladder pressure during filling and emptying, urine flow rate, bladder capacity, and the coordination between the bladder muscle and sphincter.</p>

<h3>Why It\u2019s Done</h3>
<p>To diagnose the exact type and cause of urinary symptoms \u2014 especially helpful when symptoms are complex, treatments haven\u2019t worked, or before surgery. Essential for evaluating neurogenic bladder, complex incontinence, and voiding dysfunction.</p>

<h3>What to Expect</h3>
<p>The test takes 30\u201345 minutes. A small catheter is placed in the bladder and sometimes the rectum to measure pressures while the bladder is slowly filled with saline. You\u2019ll be asked to describe sensations and to urinate when full. It is not painful but may be uncomfortable. Mild irritation for 24 hours after is normal.</p>`},

{id:"lithotripsy",title:"Lithotripsy (ESWL)",keywords:["shock wave","stone breaking","extracorporeal"],
tagline:"Non-invasive shock waves that break kidney stones into fragments small enough to pass naturally.",
content:`<h3>What Is ESWL?</h3>
<p>Extracorporeal shock wave lithotripsy (ESWL) uses focused sound waves generated outside the body to break kidney stones into small fragments. It is the least invasive surgical option for kidney stones.</p>

<h3>Good Candidates</h3>
<p>ESWL works best for stones under 2 cm in the kidney or upper ureter. It is less effective for very hard stones (calcium oxalate monohydrate, cystine), lower ureteral stones, or in patients with obesity. Your urologist will recommend the best approach based on stone size, location, and composition.</p>

<h3>What to Expect</h3>
<p>The procedure takes 45\u201360 minutes under sedation or light anesthesia. You lie on a cushioned table while shock waves are focused on the stone using X-ray or ultrasound guidance. You go home the same day. Stone fragments pass over the following days to weeks. Straining urine to catch fragments for analysis is recommended. Blood in urine and mild flank soreness for 1\u20132 days are normal.</p>`}
]}
];
