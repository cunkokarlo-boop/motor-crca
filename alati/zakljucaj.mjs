// Zaključavanje stranice: šifrira izvor/index.html u index.html (AES-256-GCM, ključ iz lozinke PBKDF2-SHA256).
// Bez lozinke se sadržaj ne može pročitati ni iz izvornog koda ni iz repozitorija.
// Upotreba (lozinka se ne upisuje u naredbu, nego u varijablu okoline):
//   PowerShell:  $env:CRCA_LOZINKA = '...'; node alati/zakljucaj.mjs
// Izvor (izvor/index.html) se NE stavlja u javni repo (.gitignore).
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto as wc } from 'node:crypto';

const ITER = 600000;
const pass = process.env.CRCA_LOZINKA || '';
if (pass.length < 10) { console.error('Lozinka mora imati barem 10 znakova (CRCA_LOZINKA).'); process.exit(1); }
const src = readFileSync(new URL('../izvor/index.html', import.meta.url), 'utf8');
const enc = new TextEncoder();
const salt = wc.getRandomValues(new Uint8Array(16));
const iv = wc.getRandomValues(new Uint8Array(12));
const base = await wc.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey']);
const key = await wc.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITER }, base,
  { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
const ct = new Uint8Array(await wc.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(src)));
const b64 = u => Buffer.from(u).toString('base64');
const head = src.slice(0, src.indexOf('<style>')); // naslov, opis i pregled poveznice ostaju vidljivi
const page = `${head.replace(/<link rel="preconnect"[\s\S]*$/, '')}<style>
html,body{margin:0}body{min-height:100vh;display:grid;place-items:center;padding:24px 16px;box-sizing:border-box;font:16px/1.5 Barlow,"Segoe UI",Arial,sans-serif;color:#f2f4f6;background-color:#15181c;background-image:repeating-linear-gradient(0deg,transparent 0 31px,rgba(255,255,255,.05) 31px 32px),repeating-linear-gradient(90deg,transparent 0 31px,rgba(255,255,255,.05) 31px 32px);border-bottom:2px solid #e31e28}
form{background:#1d2126;border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:28px 24px;display:grid;gap:12px;width:min(100%,360px);box-sizing:border-box}
h1{font-size:24px;margin:0}p{margin:0;color:#a9b0b8;font-size:15px}
input{font:inherit;font-size:18px;min-height:52px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:#111418;color:#fff;padding:0 12px}
button{font:inherit;font-size:17px;font-weight:600;min-height:50px;border-radius:10px;border:0;background:#e31e28;color:#fff;cursor:pointer}
button:disabled{opacity:.6}.err{color:#ff8a8a;font-size:14px;min-height:20px}.pw{font-size:12px;color:#a9b0b8;text-align:center}.pw b{color:#f2f4f6}
</style>
</head>
<body>
<form id="lf" autocomplete="off"><h1>Motor 3.0 TDI CRCA</h1><p>Pregled tržišta, rabljeni i remontirani motori te dijelovi. Upiši lozinku za pristup.</p>
<input id="pw" type="password" aria-label="Lozinka" autocomplete="current-password" autofocus><button id="go" type="submit">Otvori pregled</button><p class="err" id="pe" role="alert"></p><p class="pw">Powered by <b>Komadar</b></p></form>
<script>
(()=>{const S='${b64(salt)}',I='${b64(iv)}',C='${b64(ct)}',N=${ITER};
const u=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function open(raw){const k=await crypto.subtle.importKey('raw',raw,'AES-GCM',false,['decrypt']);
const t=new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:u(I)},k,u(C)));
if(document.readyState!=='complete')await new Promise(r=>addEventListener('load',r,{once:true}));
document.open();document.write(t.replace('<body class="locked">','<body>'));document.close();}
try{const r=sessionStorage.getItem('crca-k');if(r)open(u(r)).catch(()=>sessionStorage.removeItem('crca-k'))}catch(e){}
const f=document.getElementById('lf'),pw=document.getElementById('pw'),pe=document.getElementById('pe'),go=document.getElementById('go');
f.addEventListener('submit',async e=>{e.preventDefault();go.disabled=true;pe.textContent='Otključavam…';
try{const b=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw.value),'PBKDF2',false,['deriveKey']);
const k=await crypto.subtle.deriveKey({name:'PBKDF2',hash:'SHA-256',salt:u(S),iterations:N},b,{name:'AES-GCM',length:256},true,['decrypt']);
const raw=new Uint8Array(await crypto.subtle.exportKey('raw',k));await open(raw);
try{sessionStorage.setItem('crca-k',btoa(String.fromCharCode(...raw)))}catch(x){}}
catch(x){pe.textContent='Pogrešna lozinka.';go.disabled=false;pw.select()}});
pw.addEventListener('input',()=>{pe.textContent=''});})();
</script>
</body>
</html>
`;
writeFileSync(new URL('../index.html', import.meta.url), page);
console.log('Gotovo: index.html zaključan (' + page.length + ' znakova).');
