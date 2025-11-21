const kelimeler = [
  { "kelime":"كَتَبَ", "baba":"فَعَلَ" },
  { "kelime":"قَرَأَ", "baba":"فَعَلَ" }
];

document.getElementById("searchInput").addEventListener("input", function() {
    const val = this.value.trim();
    const wordBox = document.getElementById("wordBox");
    if(val===""){ wordBox.innerText=""; return; }
    const res = kelimeler.find(k=>k.kelime===val);
    wordBox.innerText = res ? `Bu kelime şu babdandır: ${res.baba}` : "Kelime bulunamadı.";
});

window.addEventListener("load", ()=>{
    const splash=document.getElementById("splash");
    const sarf=document.getElementById("sarf");
    const bina=document.getElementById("bina");
    setTimeout(()=>{ sarf.style.transform="translateX(-50px)"; },500);
    setTimeout(()=>{ bina.style.opacity=1; },1500);
    setTimeout(()=>{ splash.style.display="none"; },3500);
});
