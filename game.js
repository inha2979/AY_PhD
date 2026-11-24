(function(){
"use strict";
var ASSETS={
 "aud0": "assets/aud0.webp",
 "aud1": "assets/aud1.webp",
 "aud2": "assets/aud2.webp",
 "aud3": "assets/aud3.webp",
 "ay_bow": "assets/ay_bow.webp",
 "ay_bow2": "assets/ay_bow2.webp",
 "ay_calm": "assets/ay_calm.webp",
 "ay_n0": "assets/ay_n0.webp",
 "ay_n1": "assets/ay_n1.webp",
 "ay_n2": "assets/ay_n2.webp",
 "ay_n3": "assets/ay_n3.webp",
 "ay_smile": "assets/ay_smile.webp",
 "ay_thanks": "assets/ay_thanks.webp",
 "b_bakery": "assets/b_bakery.webp",
 "b_cafe": "assets/b_cafe.webp",
 "b_conf": "assets/b_conf.webp",
 "b_hall": "assets/b_hall.webp",
 "b_home": "assets/b_home.webp",
 "b_lib": "assets/b_lib.webp",
 "cat_loaf": "assets/cat_loaf.webp",
 "cat_purr": "assets/cat_purr.webp",
 "cat_sit": "assets/cat_sit.webp",
 "cat_sleep": "assets/cat_sleep.webp",
 "cat_walk0": "assets/cat_walk0.webp",
 "cat_walk1": "assets/cat_walk1.webp",
 "cat_walk2": "assets/cat_walk2.webp",
 "cheer0": "assets/cheer0.webp",
 "cheer1": "assets/cheer1.webp",
 "cheer10": "assets/cheer10.webp",
 "cheer2": "assets/cheer2.webp",
 "cheer3": "assets/cheer3.webp",
 "cheer4": "assets/cheer4.webp",
 "cheer5": "assets/cheer5.webp",
 "cheer6": "assets/cheer6.webp",
 "cheer7": "assets/cheer7.webp",
 "cheer8": "assets/cheer8.webp",
 "cheer9": "assets/cheer9.webp",
 "f_focus": "assets/f_focus.webp",
 "f_happy": "assets/f_happy.webp",
 "f_sleepy": "assets/f_sleepy.webp",
 "f_smile": "assets/f_smile.webp",
 "f_surprise": "assets/f_surprise.webp",
 "f_think": "assets/f_think.webp",
 "f_tired": "assets/f_tired.webp",
 "hall": "assets/hall.jpg",
 "o_bench": "assets/o_bench.webp",
 "o_flower": "assets/o_flower.webp",
 "o_lamp": "assets/o_lamp.webp",
 "p_bake": "assets/p_bake.webp",
 "p_cat": "assets/p_cat.webp",
 "p_coffee": "assets/p_coffee.webp",
 "p_done": "assets/p_done.webp",
 "p_night": "assets/p_night.webp",
 "p_paper": "assets/p_paper.webp",
 "p_tea": "assets/p_tea.webp",
 "p_travel": "assets/p_travel.webp",
 "prof0": "assets/prof0.webp",
 "prof1": "assets/prof1.webp",
 "prof2": "assets/prof2.webp",
 "robe_jump": "assets/robe_jump.webp",
 "robe_stand": "assets/robe_stand.webp",
 "robe_toss": "assets/robe_toss.webp",
 "t_pine": "assets/t_pine.webp",
 "t_pink": "assets/t_pink.webp",
 "t_tree": "assets/t_tree.webp",
 "tile_dirt": "assets/tile_dirt.webp",
 "tile_stone": "assets/tile_stone.webp",
 "walk_down0": "assets/walk_down0.webp",
 "walk_down1": "assets/walk_down1.webp",
 "walk_down2": "assets/walk_down2.webp",
 "walk_left0": "assets/walk_left0.webp",
 "walk_left1": "assets/walk_left1.webp",
 "walk_left2": "assets/walk_left2.webp",
 "walk_up0": "assets/walk_up0.webp",
 "walk_up1": "assets/walk_up1.webp",
 "walk_up2": "assets/walk_up2.webp"
};

/* ---------- image loading ---------- */
var IMG={}, pending=0, ready=false;
Object.keys(ASSETS).forEach(function(k){
  pending++;
  var im=new Image();
  im.onload=im.onerror=function(){pending--;if(pending===0)onReady();};
  im.src=ASSETS[k];IMG[k]=im;
});
function onReady(){
  ready=true;
  var b=document.getElementById("startBtn");b.disabled=false;b.textContent="Start";
}
document.getElementById("titleImg").src=ASSETS.p_travel;
document.getElementById("face").src=ASSETS.f_smile;

var T=32, COLS=20, ROWS=14, AS=3, W=640, H=448, K=1;
var cv=document.getElementById("cv"), ctx=cv.getContext("2d");
function setupCanvas(){
  var dpr=window.devicePixelRatio||1;
  var cssW=cv.getBoundingClientRect().width||(Math.min(720,window.innerWidth)-26);
  var nk=Math.max(1,Math.min(3,cssW*dpr/W));
  if(Math.abs(nk-K)<0.05&&cv.width===Math.round(W*K))return;
  K=nk;
  cv.width=Math.round(W*K);cv.height=Math.round(H*K);
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";
}
window.__setupCanvas=setupCanvas;
window.addEventListener("resize",function(){setTimeout(setupCanvas,60);});
window.addEventListener("orientationchange",function(){setTimeout(setupCanvas,250);});
if(window.ResizeObserver)new ResizeObserver(function(){setupCanvas();}).observe(cv);
setupCanvas();

/* ---------- state ---------- */
var S=null, name="Ayoub";
function newState(){return {day:1,energy:100,stress:10,money:30,know:0,bake:0,cat:0,cookies:0,baked:0,studied:0,worked:0,burn:0,ended:false,unlocked:false,slot:0,boost:0,cheerDay:0,cheers:0,petKey:-1,teaKey:-1,meetings:0,hw:0,profDay:-9,confDone:0,confNotice:false,confWins:0,confs:0};}
function save(){try{localStorage.setItem("gradgame_en",JSON.stringify({S:S,name:name}));}catch(e){}}
function load(){try{var d=JSON.parse(localStorage.getItem("gradgame_en")||"null");if(d&&d.S){return d;}}catch(e){}return null;}
function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function rank(){var k=S.know;return k>=100?"PhD-Bound 🎓":k>=75?"PhD Applicant":k>=50?"Thesis Writing":k>=25?"Master's Year 2":"Master's Year 1";}

/* ---------- time of day ---------- */
var PH=[{n:"Morning",e:"🌅",tint:[255,214,140,0.13],night:0},{n:"Afternoon",e:"☀️",tint:[255,255,255,0],night:0},{n:"Evening",e:"🌇",tint:[255,120,50,0.24],night:0.35},{n:"Night",e:"🌙",tint:[10,20,70,0.5],night:1}];
var tintCur=[255,214,140,0.13], nightK=0;
function tn(){return S.slot+1<4?"\n⏰ Time passes... ("+PH[S.slot+1].e+" "+PH[S.slot+1].n+")":"\n⏰ It's getting very late...";}
function newDay(){S.day++;S.slot=0;spawnCheer();if(S.day%5===4&&S.confDone!==S.day)S.confNotice=true;}
function isConfDay(){return !!S&&S.day%5===4&&S.confDone!==S.day&&S.slot<3&&!ending;}
function pKey(){return S.day*4+S.slot;}

/* ---------- map ---------- */
var buildings=[
 {id:"home",  x:1, y:1, w:4,h:3,img:"b_home",  label:"🏠 Home"},
 {id:"lib",   x:8, y:1, w:4,h:3,img:"b_lib",   label:"📚 Library"},
 {id:"cafe",  x:15,y:1, w:4,h:3,img:"b_cafe",  label:"💼 TA / RA Job"},
 {id:"bakery",x:1, y:8, w:4,h:3,img:"b_bakery",label:"🥐 Bakery"},
 {id:"hall",  x:8, y:8, w:4,h:3,img:"b_hall",  label:"🎓 Defense Hall"}
];
var garden={x:14*T,y:8*T,w:5*T,h:5*T};
var trees=[[0,5,"t_tree"],[19,5,"t_pink"],[6,6,"t_pine"],[13,6,"t_tree"],[13,12,"t_pine"],[0,13,"t_tree"],[19,13,"t_pine"],[7,5,"t_pink"],[12,13,"t_tree"]];
var decor=[{n:"o_lamp",c:6,r:4,h:56},{n:"o_lamp",c:13,r:4,h:56},{n:"o_bench",c:9,r:12,h:28},{n:"o_flower",c:6,r:9,h:28}];
var blocked=[];
(function(){
  for(var r=0;r<ROWS;r++){blocked[r]=[];for(var c=0;c<COLS;c++)blocked[r][c]=false;}
  buildings.forEach(function(b){for(var r=b.y;r<b.y+b.h;r++)for(var c=b.x;c<b.x+b.w;c++)blocked[r][c]=true;});
  trees.forEach(function(t){blocked[t[1]][t[0]]=true;});
  decor.forEach(function(d){blocked[d.r][d.c]=true;});
})();
function isBlocked(px,py){
  if(isConfDay()&&px>134&&px<250&&py>392&&py<440)return true;
  var c=Math.floor(px/T), r=Math.floor(py/T);
  if(c<0||r<0||c>=COLS||r>=ROWS)return true;
  return blocked[r][c];
}

/* ---------- entities ---------- */
var P={x:10*T,y:6*T+16,dir:"down",step:0,moving:false};
var CHEER={x:176,y:200,t:0};
var CHEER_SPOTS=[[176,200],[400,206],[560,208],[448,300]];
function spawnCheer(){var s=CHEER_SPOTS[Math.floor(Math.random()*CHEER_SPOTS.length)];CHEER.x=s[0];CHEER.y=s[1];}
function cheerHere(){return S&&S.slot<3&&!ending;}
var CAT={x:16*T,y:10*T,tx:16*T,ty:10*T,wait:0,face:1,t:0,pose:"sit",purr:0};

/* ---------- drawing helpers ---------- */
function R(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),w,h);}
// draw image scaled by "sc", anchored at bottom-center (cx,by)
function spr(name,cx,by,sc,flip,alpha){
  var im=IMG[name];if(!im||!im.naturalWidth)return;
  var w=im.naturalWidth/AS*sc,h=im.naturalHeight/AS*sc;
  ctx.save();
  if(alpha!==undefined)ctx.globalAlpha=alpha;
  if(flip){ctx.translate(cx,0);ctx.scale(-1,1);ctx.drawImage(im,-w/2,by-h,w,h);}
  else ctx.drawImage(im,cx-w/2,by-h,w,h);
  ctx.restore();
}
function sprH(name,cx,by,h,flip){var im=IMG[name];if(!im||!im.naturalHeight)return;spr(name,cx,by,h/(im.naturalHeight/AS),flip);}
function shadow(cx,cy,rx){ctx.fillStyle="rgba(0,0,0,.18)";ctx.beginPath();ctx.ellipse(cx,cy,rx,rx*0.33,0,0,Math.PI*2);ctx.fill();}

function drawTile(c,r){
  var x=c*T,y=r*T;
  R(x,y,T,T,((c+r)%2)?"#8fb85b":"#94bc60");
  var h=(c*7+r*13)%11;
  if(h===0){R(x+8,y+10,2,5,"#79a24a");R(x+20,y+20,2,5,"#79a24a");}
  if(h===3){R(x+12,y+14,4,4,"#ffd9e2");R(x+13,y+15,2,2,"#ff8fa8");}
  if(h===6){R(x+20,y+8,4,4,"#fff6c9");R(x+21,y+9,2,2,"#ffd24a");}
}
function pathTile(c,r){
  var im=IMG.tile_dirt;
  if(im&&im.naturalWidth){var iw=im.naturalWidth,ih=im.naturalHeight,ins=9*AS;ctx.drawImage(im,ins,ins,iw-2*ins,ih-2*ins,c*T,r*T,T+1,T+1);}else R(c*T,r*T,T,T,"#e7d3a8");
}
function drawPaths(){
  var c,r;
  for(c=0;c<COLS;c++){pathTile(c,5);pathTile(c,6);}
  [2,9,16].forEach(function(cx){pathTile(cx,3);pathTile(cx,4);});
  [2,9].forEach(function(cx){pathTile(cx,7);});
  ctx.fillStyle="rgba(120,80,40,.25)";ctx.fillRect(0,5*T,COLS*T,2);ctx.fillRect(0,7*T-2,COLS*T,2);
}
function drawGarden(){
  ctx.fillStyle="rgba(255,255,255,.12)";ctx.fillRect(garden.x,garden.y,garden.w,garden.h);
  ctx.strokeStyle="#8a6a3f";ctx.lineWidth=3;ctx.setLineDash([8,5]);ctx.strokeRect(garden.x+1.5,garden.y+1.5,garden.w-3,garden.h-3);ctx.setLineDash([]);
  ctx.fillStyle="#3b2a22";ctx.font="bold 12px sans-serif";ctx.textAlign="center";
  ctx.fillText("🌸 Cat Garden",garden.x+garden.w/2,garden.y-4);
}
function drawBuilding(b){
  var x=b.x*T,y=b.y*T,w=b.w*T,h=b.h*T;
  var im=IMG[b.img];
  if(im&&im.naturalWidth){
    var dw=w+20,dh=dw*im.naturalHeight/im.naturalWidth;
    var cx=x+w/2,by=y+h+6;
    ctx.save();
    ctx.fillStyle="rgba(0,0,0,.15)";ctx.beginPath();ctx.ellipse(cx,by-2,dw*0.42,6,0,0,Math.PI*2);ctx.fill();
    if(b.id==="hall"&&S.know<100)ctx.globalAlpha=0.6;
    ctx.drawImage(im,cx-dw/2,by-dh,dw,dh);
    ctx.restore();
    if(b.id==="hall"&&S.know<100){ctx.font="22px sans-serif";ctx.textAlign="center";ctx.fillText("🔒",cx,by-14);}
  } else R(x,y,w,h,"#ccc");
  ctx.font="bold 13px sans-serif";ctx.textAlign="center";
  ctx.fillStyle="rgba(255,250,241,.92)";ctx.fillRect(x+w/2-50,y+h+8,100,16);
  ctx.fillStyle="#3b2a22";ctx.fillText(b.label,x+w/2,y+h+20);
}

/* ---- character from sprite sheet ---- */
var WALK_SEQ=[1,0,1,2];
function playerSprite(cx,by,dir,step,moving){
  var key=(dir==="left"||dir==="right")?"walk_left":(dir==="up"?"walk_up":"walk_down");
  var fr=moving?WALK_SEQ[Math.floor(step/7)%4]:1;
  shadow(cx,by-1,13);
  spr(key+fr,cx,by+2,0.5,dir==="right");
}
function catSprite(cx,by,face,moving,t,pose,purr){
  var sc=0.46,name;
  shadow(cx,by-1,13);
  if(purr>0){spr("cat_purr",cx,by+2,sc,face>0);return;}
  if(moving){name="cat_walk"+(Math.floor(t/9)%3);}
  else name=pose==="sleep"?"cat_sleep":pose==="loaf"?"cat_loaf":"cat_sit";
  spr(name,cx,by+2,sc,face>0);
}

var scene=null;
var OFFICE_BOOKS=[];(function(){var cs=["#a55a4a","#4a6a8a","#c9a64a","#5a8a5a","#7a5a8a","#d08a5a","#4a4a5a"];for(var i=0;i<80;i++)OFFICE_BOOKS.push([cs[(i*7)%cs.length],10+((i*13)%9),30+((i*17)%14)]);})();
function drawOffice(){
  var g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#6b4b34");g.addColorStop(0.78,"#8a6444");g.addColorStop(0.78,"#5b4030");g.addColorStop(1,"#4a3224");
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  for(var x=0;x<W;x+=48){ctx.fillStyle="rgba(0,0,0,.08)";ctx.fillRect(x,350,2,98);}
  // bookshelf
  ctx.fillStyle="#3f2b1c";ctx.fillRect(24,70,190,280);
  var bi=0;
  for(var s=0;s<4;s++){
    var sy=78+s*68;ctx.fillStyle="#2c1d12";ctx.fillRect(30,sy+54,178,6);
    var bx=34;
    for(var k=0;k<12&&bx<200;k++){var b=OFFICE_BOOKS[bi++%80];ctx.fillStyle=b[0];ctx.fillRect(bx,sy+54-b[2],b[1],b[2]);bx+=b[1]+2;}
  }
  // window
  ctx.fillStyle="#3f2b1c";ctx.fillRect(470,80,124,150);
  ctx.fillStyle="#bfe0f2";ctx.fillRect(476,86,112,138);ctx.fillStyle="rgba(255,255,255,.35)";ctx.fillRect(476,86,112,40);
  ctx.fillStyle="#3f2b1c";ctx.fillRect(529,86,4,138);ctx.fillRect(476,152,112,4);
  // desk edge
  ctx.fillStyle="#5a3c26";ctx.fillRect(250,380,380,14);ctx.fillStyle="#46301e";ctx.fillRect(250,394,380,54);
}
function drawScene(){
  if(!scene)return;
  if(scene.bg==="hall"){var h=IMG.hall;if(h&&h.naturalWidth)ctx.drawImage(h,0,0,W,H);else R(0,0,W,H,"#432");}
  else drawOffice();
  (scene.sprites||[]).forEach(function(s){
    var bob=s.bob?Math.sin(endT2/s.bob)*3:0;
    spr(s.n,s.x,s.by+bob,s.sc,s.flip);
  });
}
var endT2=0;
var CHEER_SEQ=[1,4,2,3,5,9,4,10];
function cheerSprite(cx,by,t,fast){
  var fr=CHEER_SEQ[Math.floor(t/(fast?10:22))%CHEER_SEQ.length];
  shadow(cx,by-1,13);
  spr("cheer"+fr,cx,by+2,0.285);
}
/* ---------- confetti ---------- */
var confetti=[];
function burst(n){
  for(var i=0;i<n;i++){
    confetti.push({x:Math.random()*W,y:-10-Math.random()*200,vx:(Math.random()-.5)*1.2,vy:1+Math.random()*2.2,c:["#ff7a8a","#ffd35c","#7ad0ff","#9be37a","#c79bff"][i%5],s:3+Math.random()*4,r:Math.random()*6});
  }
}

/* ---------- ui ---------- */
var el={dayTxt:null,rank:null,en:null,st:null,enTxt:null,stTxt:null,chips:null,hint:null,dialog:null,menu:null,title:null,endbtn:null,face:null};
Object.keys(el).forEach(function(k){el[k]=document.getElementById(k);});

var faceOverride=null, faceUntil=0;
function setFace(n,ms){faceOverride=n;faceUntil=Date.now()+ms;updateHUD();setTimeout(updateHUD,ms+50);}
function currentFace(){
  if(faceOverride&&Date.now()<faceUntil)return faceOverride;
  if(S.energy<25)return "f_sleepy";
  if(S.stress>=70)return "f_tired";
  if(S.stress>=40)return "f_focus";
  return "f_smile";
}
function updateHUD(){
  if(!S)return;
  el.dayTxt.textContent=name+" · Day "+S.day+" · "+PH[Math.min(3,S.slot)].e+" "+PH[Math.min(3,S.slot)].n;
  el.rank.textContent=rank();
  el.en.style.width=S.energy+"%";el.st.style.width=S.stress+"%";
  el.enTxt.textContent=S.energy+"/100";el.stTxt.textContent=S.stress+"/100";
  el.face.src=ASSETS[currentFace()];
  el.chips.innerHTML=
    '<span class="chip">📖 Research '+S.know+'/100</span>'+
    '<span class="chip">💰 $'+S.money+'</span>'+
    '<span class="chip">🥐 Baking Lv.'+(1+Math.floor(S.bake/3))+'</span>'+
    '<span class="chip">🍪 Cookies '+S.cookies+'</span>'+
    '<span class="chip">🐱 Cat bond '+S.cat+'</span>'+
    (S.boost>0?'<span class="chip" style="background:#ffd9d2;font-weight:700">📣 Cheer Boost ×1.5 ('+S.boost+' left)</span>':'')+
    (S.hw>0?'<span class="chip" style="background:#e3dcf7;font-weight:700">📝 Homework: '+S.hw+' study left</span>':'')+
    (isConfDay()?'<span class="chip" style="background:#d8ecff;font-weight:700">🎤 Conference today!</span>':'');
}

var mode="title";
var dlgQueue=[], dlgDone=null, dlgPortrait=null, sceneKeep=false;
function say(lines,done,portrait){
  dlgQueue=(Array.isArray(lines)?lines:[lines]).slice();dlgDone=done||null;dlgPortrait=portrait||null;
  mode="dialog";el.menu.style.display="none";el.hint.style.display="none";nextLine();
}
function nextLine(){
  if(!dlgQueue.length){
    el.dialog.style.display="none";mode="play";el.dialog.classList.remove("top");
    if(!sceneKeep)scene=null;var d=dlgDone;dlgDone=null;sceneKeep=false;if(d)d();return;
  }
  sfx("blip");el.dialog.style.display="block";el.dialog.classList.toggle("top",!!scene||ending);
  var pt=dlgPortrait?'<img class="pt" alt="" src="'+ASSETS[dlgPortrait]+'">':"";
  el.dialog.innerHTML='<div class="row">'+pt+'<div>'+dlgQueue.shift().replace(/\n/g,"<br>")+'</div></div><small>'+(TOUCH?"Tap ▶":"Space ▶")+'</small>';
}
var menuItems=[], menuSel=0;
function openMenu(title,items){
  menuItems=items;menuSel=0;mode="menu";
  el.menu.innerHTML="<h3>"+title+"</h3>";
  items.forEach(function(it,i){
    var b=document.createElement("button");b.textContent=it.label;b.disabled=!!it.off;
    b.onclick=function(){menuSel=i;chooseMenu();};
    el.menu.appendChild(b);
  });
  el.menu.style.display="block";refreshMenu();
}
function refreshMenu(){
  var bs=el.menu.querySelectorAll("button");
  for(var i=0;i<bs.length;i++)bs[i].className=(i===menuSel)?"sel":"";
}
function closeMenu(){el.menu.style.display="none";mode="play";}
function chooseMenu(){
  var it=menuItems[menuSel];if(!it||it.off)return;
  sfx("ok");closeMenu();if(it.fn)it.fn();
}

/* ---------- game actions ---------- */
function afterAct(){
  updateHUD();save();
  if(S.stress>=100){burnout();}
}
function afterTimed(){
  S.slot++;updateHUD();save();
  if(S.stress>=100){burnout();return;}
  if(S.slot>=4){lateSleep();return;}
  if(S.slot===1&&maybeProf())return;
}
function lateSleep(){
  say(["Your eyelids get heavy... you fall asleep right where you are. 💤","(Slept in a chair: Energy 80, Stress -5. A new day begins.)"],function(){
    newDay();S.energy=80;S.stress=Math.max(0,S.stress-5);updateHUD();save();
  },"f_sleepy");
}
function burnout(){
  S.burn++;
  var lost=Math.min(S.money,10);
  say(["...I can't read one more paper. My head is spinning and the words are swimming.",
       "😵 Burnout! The thesis deadline fog finally hit, and you rested for a whole day.\n(Stress reset to 60, some energy back, -$"+lost+" for the clinic)"],
  function(){
    S.stress=60;S.energy=Math.max(S.energy,50);S.money-=lost;newDay();
    updateHUD();save();
    say("It's okay. Good researchers rest too. A PhD is a marathon, not a sprint. 🐾",null,"f_tired");
  },"f_tired");
}
function needEnergy(n){
  if(S.energy<n){say("Too tired to focus right now... Let's go home and sleep. (Needs "+n+" energy)",null,"f_sleepy");return false;}return true;
}
var studyLines=["Read three papers and wrote a memo on each. 📖","The regression finally came out right in the results section! 📈","Highlighters out: the literature review took shape. ✍️","Rubbing sleepy eyes, but a thesis chapter draft is done."];
var workLines=["Ran a packed TA section. Students asked great questions.","Graded the whole stack of assignments before deadline. Stipend day!","Fixed a bug in the lab's data pipeline just in time.","A labmate shared snacks. Energy boost!"];
function doStudy(){
  if(!needEnergy(20))return;
  var night=S.slot===3, morning=S.slot===0;
  S.energy-=20;S.stress+=night?14:8;
  var gain=6+Math.floor(S.studied/8);
  var note="";
  if(morning){gain+=2;note="\n🌅 Fresh morning mind: +2";}
  if(night){gain+=3;note="\n🌙 Late-night grind: +3 (but extra stress)";}
  if(S.boost>0){gain=Math.round(gain*1.5);S.boost--;note+="\n📣 Cheer Boost ×1.5! ("+S.boost+" left)";}
  if(S.hw>0){S.hw--;if(S.hw===0){gain+=6;S.stress=Math.max(0,S.stress-8);note+="\n📝 Homework submitted! The professor approves. (Research +6, Stress -8)";}else note+="\n📝 Homework progress: "+S.hw+" study left.";}
  S.know=Math.min(100,S.know+gain);S.studied++;
  var msg=studyLines[S.studied%studyLines.length]+note+"\n(Research +"+gain+", Stress +"+(night?14:8)+", Energy -20)"+tn();
  updateHUD();
  if(S.know>=100&&!S.unlocked){S.unlocked=true;say([msg],function(){say("🎓 The thesis is ready! The Defense Hall is open now. Time to defend and hear about the PhD!",afterTimed,"robe_stand");},"p_paper");}
  else say(msg,afterTimed,"p_paper");
}
function doWork(){
  if(!needEnergy(25))return;
  var pay=[25,30,25,35][S.slot], st=S.slot===3?16:12;
  S.energy-=25;S.stress+=st;S.money+=pay;S.worked++;
  var note=S.slot===1?"\n☀️ Lunch-rush bonus!":(S.slot===3?"\n🌙 Night shift pays extra, but it's draining.":"");
  say(workLines[S.worked%workLines.length]+note+"\n(Money +$"+pay+", Stress +"+st+", Energy -25)"+tn(),afterTimed,"p_coffee");
}
function doBake(){
  if(S.money<10){say("Not enough money for ingredients... (Costs $10)",null,"f_think");return;}
  if(!needEnergy(15))return;
  S.money-=10;S.energy-=15;S.stress=Math.max(0,S.stress-12);S.bake++;
  var n=1+Math.floor(S.bake/3)+(S.slot===0?1:0);S.cookies+=n;S.baked+=n;
  setFace("f_happy",4000);
  say(["Knead the dough, wait for the oven... the whole place smells amazing. 🥐","Made "+n+" cookie"+(n>1?"s":"")+"!"+(S.slot===0?"\n🌅 Morning batch: +1 bonus cookie!":"")+"\n(Stress -12, Energy -15, Ingredients -$10)"+tn()],afterTimed,"p_bake");
}
function doTea(){
  if(S.teaKey===pKey()){say("You've already had tea this time of day. Maybe a different activity?",null,"p_tea");return;}
  if(S.money<3){say("Not enough for tea leaves... (Costs $3)",null,"f_think");return;}
  S.teaKey=pKey();
  S.money-=3;S.stress=Math.max(0,S.stress-10);S.energy=Math.min(100,S.energy+5);
  setFace("f_happy",4000);
  say("Steam curls up from the cup. Slow sip... ahh. 🍵\n(Stress -10, Energy +5, Tea -$3)",afterAct,"p_tea");
}
function doSleep(){
  var cheers=["Good work today. Tomorrow the thesis will be a little further along. 🌙","It's okay to pause. The PhD isn't going anywhere.","One paper at a time is enough. You're already doing great.","Sweet dreams. Maybe one where reviewer 2 says 'accept' and a white cat purrs on the blanket. 🐱","Rejections and hard days pass. You did really well today."];
  var line=cheers[S.day%cheers.length];
  newDay();S.energy=100;S.stress=Math.max(0,S.stress-15);
  say(["Zzz... 😴",line+"\n(Energy restored, Stress -15) ☀️ A new morning begins."],afterAct,"f_sleepy");
}
function doNap(){
  S.energy=Math.min(100,S.energy+25);S.stress=Math.max(0,S.stress-6);
  say("A short nap on the sofa. 💤\n(Energy +25, Stress -6)"+tn(),afterTimed,"f_sleepy");
}
function petCat(){
  CAT.purr=240;setFace("f_happy",4000);
  if(S.petKey===pKey()){
    S.cat+=1;
    say("The cat leans in for one more scratch, but looks pretty content already. 🐱\n(Cat bond +1. Stress relief once per time of day.)",afterAct,"p_cat");return;
  }
  S.petKey=pKey();
  S.stress=Math.max(0,S.stress-12);S.cat+=3;
  var l=["You pet the cat. Purr purr purr... 🐱","The white cat headbutts your hand happily.","Mew~ it answers, and rolls over for belly rubs."];
  if(S.slot===3)l=["The sleepy cat opens one eye, then purrs softly. 🌙","You gently pet the half-asleep cat. So warm."];
  say(l[S.cat%l.length]+"\n(Stress -12, Cat bond +3)",afterAct,"p_cat");
}
function giveCookie(){
  if(S.cookies<1){say("No cookies to share. Bake some at the Bakery!",null,"f_think");return;}
  S.cookies--;S.stress=Math.max(0,S.stress-8);S.cat+=8;CAT.purr=300;
  setFace("f_happy",4000);
  say("(Cats shouldn't eat cookies, so you hand over a little cat-safe treat you made on the side 😉)\nNom nom! The cat squints in pure happiness.\n(Stress -8, Cat bond +8)",afterAct,"p_cat");
}

function addKnow(n){
  S.know=Math.min(100,S.know+n);
  if(S.know>=100&&!S.unlocked){S.unlocked=true;return "\n🎓 The thesis is ready! The Defense Hall is open now.";}
  return "";
}
function maybeProf(){
  if(S.hw>0||S.day<2||S.day-S.profDay<3||Math.random()>0.5)return false;
  S.profDay=S.day;
  var expected=Math.min(85,25+20*S.meetings);
  S.meetings++;
  var A={n:"ay_calm",x:170,by:436,sc:0.72};
  scene={bg:"office",sprites:[A,{n:"prof0",x:450,by:436,sc:0.7}]};
  say(["📩 \"Ayoub, please stop by my office this afternoon. — Professor\"","Professor: \"Ah, Ayoub. Come in, come in. Let's go over your progress.\""],function(){
    if(S.know>=expected){
      scene={bg:"office",sprites:[{n:"ay_smile",x:170,by:436,sc:0.72},{n:"prof2",x:450,by:436,sc:0.7}]};
      var extra=addKnow(8);S.stress=Math.max(0,S.stress-10);S.money+=20;
      say(["Professor: \"Excellent! Your work is well ahead of where I expected. The committee will be very pleased.\"","Professor: \"Here, a few comments on your draft... and a small travel grant, you've earned it.\"","🎉 Big praise from the professor!\n(Research +8, Stress -10, Money +$20)"+extra],afterAct);
    } else {
      scene={bg:"office",sprites:[{n:"ay_n1",x:170,by:436,sc:0.72},{n:"prof1",x:450,by:436,sc:0.7}]};
      S.hw=2;S.stress+=6;
      say(["Professor: \"Hmm. You're a little behind where I'd like you to be.\"","Professor: \"Here's your homework: two solid study sessions at the Library, then show me the results.\"","📝 Homework assigned: 2 study sessions.\n(Stress +6. Finish them for a bonus!)"],afterAct);
    }
  });
  return true;
}
function doConference(){
  if(!needEnergy(35))return;
  S.confDone=S.day;S.confs++;S.energy-=35;S.stress+=12;
  var chance=0.55+S.know/250+(S.cheerDay===S.day?0.15:0);
  var ok=Math.random()<chance;
  var stage=function(n,sc){return {n:n,x:300,by:298,sc:sc||0.5};};
  scene={bg:"hall",sprites:[stage("ay_n0")]};
  say(["📍 The conference hall. Your session is next...","The room is full, and your hands are shaking a little. 😰"],function(){
    scene={bg:"hall",sprites:[stage("ay_n2")]};
    say(["Chair: \"Next up, Ayoub, presenting his master's thesis research.\"","You take a deep breath, click to the first slide, and begin..."],function(){
      var sp=[];
      var aud=["aud0","aud1","aud2","aud3"];
      aud.forEach(function(a,i){sp.push({n:a,x:70+i*145,by:462,sc:0.62,bob:14+i*3});});
      if(S.cheers>0)sp.push({n:"cheer3",x:606,by:452,sc:0.3,bob:9});
      if(ok){
        sp.push(stage("ay_thanks"));burst(40);
        S.money+=30;S.confWins++;S.stress=Math.max(0,S.stress-8);var extra=addKnow(18);
        scene={bg:"hall",sprites:sp};
        say(["...The room erupts in applause! 👏","The Q&A went well. Smart questions, and you had good answers.","🎤 Presentation success!"+(S.cheers>0?"\n(Somebody in the back row is cheering the loudest. 📣)":"")+"\n(Research +18, Money +$30 travel award, Stress -8)"+extra+tn()],afterTimed);
      } else {
        sp.push(stage("ay_bow"));
        S.stress+=4;var extra2=addKnow(8);
        scene={bg:"hall",sprites:sp};
        say(["...You finish a little rushed. Polite applause. 👏","The Q&A was tough, but you wrote down every question. They're gold for the thesis. 📝","🎤 Presentation done, a bit shaky.\n(Research +8, Stress +4)"+extra2+tn()],afterTimed);
      }
    });
  });
}
var actions={
  conf:function(){openMenu("🎤 Conference",[{label:"🎤 Present your research (Energy -35, Stress +12)",fn:doConference},{label:"Leave"}]);},
  home:function(){openMenu("🏠 Home",[{label:"😴 Sleep for the night"+(S.slot===3?"":" (Night only)"),fn:doSleep,off:S.slot!==3},{label:"💤 Take a nap (+25 energy, time passes)",fn:doNap},{label:"🍵 Have some tea ($3, Stress -10)",fn:doTea},{label:"Leave"}]);},
  cheer:function(){
    if(S.cheerDay===S.day){say("In Ha: \"You've got this! I'll keep cheering for you from right here!\" 📣\n(Today's Cheer Boost is already used. A new one comes tomorrow.)",null,"cheer1");return;}
    S.cheerDay=S.day;S.boost=3;S.cheers++;S.energy=Math.min(100,S.energy+15);S.stress=Math.max(0,S.stress-8);
    setFace("f_happy",5000);burst(40);
    say(["In Ha: \"Go, "+name+", go! You can do it! Fight! 📣\"","📣 Cheer Boost activated! Your next 3 study sessions give ×1.5 Research.\n(Energy +15, Stress -8)"],afterAct,"cheer3");
  },
  lib:function(){openMenu("📚 Library",[{label:"📖 Read & write (Energy -20)",fn:doStudy},{label:"Leave"}]);},
  cafe:function(){openMenu("💼 TA / RA Job",[{label:"💼 Work a shift (Energy -25, +$25)",fn:doWork},{label:"Leave"}]);},
  bakery:function(){openMenu("🥐 Bakery",[{label:"🍪 Bake (Ingredients $10)",fn:doBake},{label:"Leave"}]);},
  hall:function(){
    if(S.know<100){say("🎓 The Defense Hall is still locked.\n(Opens when Research hits 100 and the thesis is ready. You're at "+S.know+"/100.)",null,"f_think");return;}
    say(["The Defense Hall doors swing open. The committee is waiting..."],startEnding,"robe_stand");
  },
  cat:function(){openMenu("🐱 White Cat",[{label:"🤚 Pet the cat",fn:petCat},{label:"🍪 Give a treat (you have "+S.cookies+")",fn:giveCookie},{label:"Leave"}]);}
};

/* ---------- ending ---------- */
var endT=0, ending=false, endDone=false;
function startEnding(){
  mode="end";ending=true;S.ended=true;save();endT=0;burst(160);
  var lines=[
    "🎓 Congratulations, "+name+"! Your master's thesis defense is passed!",
    "You read paper after paper, ran the experiments, got worn out and kept going anyway.\nIt took "+S.day+" day"+(S.day>1?"s":"")+", and the committee was impressed.",
    "And the best part: the PhD offer letter arrived. Welcome to the doctoral program! 📬",
    "In Ha burst in with pom-poms and cheered the loudest of all! 📣"+(S.cheers>0?" (You felt her cheers "+S.cheers+" time"+(S.cheers>1?"s":"")+" along the way.)":""),
    S.cat>=20?"The white cat was by your side through every late night in the lab. 🐱":"The white cat even came to watch the defense. 🐱",
    S.baked>0?"The "+S.baked+" cookies you baked fueled the whole lab and the committee too. 🍪":"Next time, bake some celebration cookies for the lab. 🍪",
    S.burn>0?"Some days you had to stop and rest, and that's exactly how you'll last through a PhD.":"Steady, without pushing too hard. That's the best habit for a PhD.",
    "The next chapter is longer and harder, but everything you've built will be cheering you on.\nCongratulations, future Dr. "+name+"! We're rooting for every step ahead. 🎉"
  ];
  say(lines,function(){mode="end";endDone=true;el.endbtn.style.display="block";},"robe_jump");
}
function resetGame(){
  try{localStorage.removeItem("gradgame_en");}catch(e){}
  location.reload();
}
el.endbtn.onclick=resetGame;

/* ---------- input ---------- */
var keys={};
var keymap={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right",W:"up",S:"down",A:"left",D:"right"};
window.addEventListener("keydown",function(e){
  if(e.target&&e.target.tagName==="INPUT"){if(e.key==="Enter")startGame();return;}
  var k=keymap[e.key];
  if(k){
    e.preventDefault();keys[k]=true;
    if(mode==="menu"){
      if(k==="up"){menuSel=(menuSel+menuItems.length-1)%menuItems.length;refreshMenu();}
      if(k==="down"){menuSel=(menuSel+1)%menuItems.length;refreshMenu();}
    }
    return;
  }
  if(e.key===" "||e.key==="Enter"){e.preventDefault();pressAction();}
  if(e.key==="Escape"&&mode==="menu")closeMenu();
});
window.addEventListener("keyup",function(e){var k=keymap[e.key];if(k)keys[k]=false;});
function pressAction(){
  if(mode==="dialog"){nextLine();return;}
  if(mode==="menu"){chooseMenu();return;}
  if(mode==="play"&&near){actions[near]();}
}
el.dialog.onclick=function(){if(mode==="dialog")nextLine();};
var TOUCH=(window.matchMedia&&matchMedia("(pointer:coarse)").matches)||("ontouchstart" in window);
function buzz(ms){try{if(navigator.vibrate)navigator.vibrate(ms);}catch(e){}}
var actBtn=document.getElementById("actBtn");
actBtn.addEventListener("pointerdown",function(ev){ev.preventDefault();actBtn.classList.add("on");buzz(8);pressAction();});
["pointerup","pointercancel","pointerleave"].forEach(function(t){actBtn.addEventListener(t,function(){actBtn.classList.remove("on");});});
actBtn.addEventListener("keydown",function(ev){ev.preventDefault();});
/* d-pad: touch & slide anywhere on the pad (joystick style) */
var dp=document.querySelector("#pad .dp"), dpBtns={};
Array.prototype.forEach.call(dp.querySelectorAll("[data-k]"),function(b){dpBtns[b.getAttribute("data-k")]=b;});
function menuStep(k){
  if(mode!=="menu")return;
  if(k==="up"){menuSel=(menuSel+menuItems.length-1)%menuItems.length;refreshMenu();}
  if(k==="down"){menuSel=(menuSel+1)%menuItems.length;refreshMenu();}
}
function setDirs(nd){
  ["up","down","left","right"].forEach(function(k){
    var on=!!nd[k];
    if(on&&!keys[k]){menuStep(k);}
    keys[k]=on;dpBtns[k].classList.toggle("on",on);
  });
}
var dpId=null;
function dpFrom(ev){
  var r=dp.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  var dx=(ev.clientX-cx)/(r.width/2),dy=(ev.clientY-cy)/(r.height/2);
  var d={};if(Math.hypot(dx,dy)<0.22){setDirs(d);return;}
  var ax=Math.abs(dx),ay=Math.abs(dy);
  if(ax>ay*0.45)d[dx<0?"left":"right"]=true;
  if(ay>ax*0.45)d[dy<0?"up":"down"]=true;
  setDirs(d);
}
dp.addEventListener("pointerdown",function(ev){ev.preventDefault();dpId=ev.pointerId;try{dp.setPointerCapture(ev.pointerId);}catch(e){}buzz(5);dpFrom(ev);});
dp.addEventListener("pointermove",function(ev){if(ev.pointerId===dpId)dpFrom(ev);});
function dpEnd(ev){if(ev.pointerId===dpId){dpId=null;setDirs({});}}
dp.addEventListener("pointerup",dpEnd);dp.addEventListener("pointercancel",dpEnd);dp.addEventListener("lostpointercapture",dpEnd);
window.addEventListener("blur",function(){setDirs({});});
dp.addEventListener("contextmenu",function(e){e.preventDefault();});
/* tap the floating hint bubble to interact, tap a menu title area is not needed */
el.hint.classList.add("tap");el.hint.addEventListener("pointerdown",function(ev){ev.preventDefault();buzz(8);pressAction();});
if(TOUCH){document.getElementById("guide").textContent="Hold & slide the pad to move · Tap ACTION (or the hint bubble) to talk and enter · Tap the dialogue to continue";}

/* ---------- nearby detection ---------- */
var near=null;
var hintText={conf:"Space: Conference venue 🎤",cheer:"Space: Talk to In Ha 📣",home:"Space: Home",lib:"Space: Library",cafe:"Space: TA / RA Job",bakery:"Space: Bakery",hall:"Space: Defense Hall",cat:"Space: Play with the cat"};
function detectNear(){
  near=null;
  if(isConfDay()&&P.x>108&&P.x<272&&P.y>356){near="conf";return;}
  if(cheerHere()&&Math.hypot(P.x-CHEER.x,P.y-CHEER.y)<46){near="cheer";return;}
  var dc=Math.hypot(P.x-CAT.x,P.y-CAT.y);
  if(dc<46){near="cat";return;}
  for(var i=0;i<buildings.length;i++){
    var b=buildings[i],x=b.x*T,y=b.y*T,w=b.w*T,h=b.h*T;
    if(P.x>x-22&&P.x<x+w+22&&P.y>y-30&&P.y<y+h+30){near=b.id;return;}
  }
}

/* ---------- update / render ---------- */
var catMoving=false;
function update(){
  endT2++;
  if(mode==="play"){
    var dx=0,dy=0,sp=2.2;
    if(keys.left)dx-=1;if(keys.right)dx+=1;if(keys.up)dy-=1;if(keys.down)dy+=1;
    P.moving=!!(dx||dy);
    if(P.moving){
      if(dy<0)P.dir="up";else if(dy>0)P.dir="down";
      if(dx<0)P.dir="left";else if(dx>0)P.dir="right";
      var len=Math.hypot(dx,dy);dx=dx/len*sp;dy=dy/len*sp;
      var nx=P.x+dx;
      if(!(isBlocked(nx-8,P.y)||isBlocked(nx+8,P.y)||isBlocked(nx-8,P.y-8)||isBlocked(nx+8,P.y-8)))P.x=nx;
      var ny=P.y+dy;
      if(!(isBlocked(P.x-8,ny)||isBlocked(P.x+8,ny)||isBlocked(P.x-8,ny-8)||isBlocked(P.x+8,ny-8)))P.y=ny;
      P.x=clamp(P.x,10,W-10);P.y=clamp(P.y,12,H-2);
      P.step++;
    }
    if(S.confNotice){S.confNotice=false;say(["📩 Conference day! A conference is being held today.","The venue is in the bottom-left, just below the Bakery. Give a talk for a big Research boost, if you have the energy. (Today only, until night.)"],null,"p_travel");}
    detectNear();
    if(near){el.hint.textContent=TOUCH?hintText[near].replace("Space:","Tap:"):hintText[near];el.hint.style.display="block";}else el.hint.style.display="none";
  } else P.moving=false;
  if(!ending){
    CAT.t++;CHEER.t++;if(CAT.purr>0)CAT.purr--;
    var pt=PH[Math.min(3,S.slot)];for(var q=0;q<4;q++)tintCur[q]+=(pt.tint[q]-tintCur[q])*0.04;nightK+=(pt.night-nightK)*0.04;
    catMoving=false;
    if(CAT.purr>0){/* stay put while being petted */}
    else if(CAT.wait>0){CAT.wait--;if(S.slot===3&&!catMoving){CAT.pose="sleep";CAT.wait=Math.max(CAT.wait,60);}}
    else{
      var d=Math.hypot(CAT.tx-CAT.x,CAT.ty-CAT.y);
      if(d<2){
        CAT.wait=80+Math.random()*160;
        var rnd=Math.random();CAT.pose=rnd<0.6?"sit":(rnd<0.8?"loaf":"sleep");
        if(S.slot===3){CAT.pose="sleep";CAT.wait=200;}else{CAT.tx=garden.x+24+Math.random()*(garden.w-48);CAT.ty=garden.y+40+Math.random()*(garden.h-60);}
      }else{
        catMoving=true;
        CAT.x+=(CAT.tx-CAT.x)/d*0.8;CAT.y+=(CAT.ty-CAT.y)/d*0.8;CAT.face=(CAT.tx>CAT.x)?1:-1;
      }
    }
  }
  if(ending){endT++;if(endT%40===0&&confetti.length<260)burst(20);}
  for(var i=confetti.length-1;i>=0;i--){var c=confetti[i];c.x+=c.vx;c.y+=c.vy;c.r+=0.1;if(c.y>H+10)confetti.splice(i,1);}
}
function render(){
  ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height);ctx.setTransform(K,0,0,K,0,0);
  if(!S){R(0,0,W,H,"#a8d583");return;}
  for(var r=0;r<ROWS;r++)for(var c=0;c<COLS;c++)drawTile(c,r);
  drawPaths();drawGarden();
  buildings.forEach(drawBuilding);
  if(isConfDay()){
    var cb=IMG.b_conf;
    if(cb&&cb.naturalWidth){var cw=132,chh=cw*cb.naturalHeight/cb.naturalWidth;shadow(194,436,52);ctx.drawImage(cb,128,438-chh,cw,chh);}
    ctx.font="bold 13px sans-serif";ctx.textAlign="center";ctx.fillStyle="rgba(255,250,241,.92)";ctx.fillRect(194-52,428,104,16);ctx.fillStyle="#3b2a22";ctx.fillText("🎤 Conference",194,440);
  }
  var ents=[];
  trees.forEach(function(t){ents.push({y:t[1]*T+T,f:function(){shadow(t[0]*T+16,t[1]*T+T-3,14);sprH(t[2],t[0]*T+16,t[1]*T+T+2,62);}});});
  decor.forEach(function(d){ents.push({y:d.r*T+T,f:function(){sprH(d.n,d.c*T+16,d.r*T+T,d.h);}});});
  if(cheerHere())ents.push({y:CHEER.y,f:function(){cheerSprite(CHEER.x,CHEER.y,CHEER.t,S.cheerDay!==S.day);if(S.cheerDay!==S.day){ctx.font="18px sans-serif";ctx.textAlign="center";ctx.fillText("📣",CHEER.x,CHEER.y-62+Math.sin(CHEER.t/10)*3);}}});
  ents.push({y:CAT.y,f:function(){catSprite(CAT.x,CAT.y,CAT.face,catMoving,CAT.t,CAT.pose,CAT.purr);}});
  if(!ending)ents.push({y:P.y,f:function(){playerSprite(P.x,P.y,P.dir,P.step,P.moving);}});
  ents.sort(function(a,b){return a.y-b.y;});
  ents.forEach(function(e){e.f();});
  if(!ending){
    ctx.fillStyle="rgba("+Math.round(tintCur[0])+","+Math.round(tintCur[1])+","+Math.round(tintCur[2])+","+tintCur[3].toFixed(3)+")";
    ctx.fillRect(0,0,W,H);
    if(nightK>0.02){
      ctx.save();ctx.globalCompositeOperation="lighter";
      var spots=[];decor.forEach(function(d){if(d.n==="o_lamp")spots.push([d.c*T+16,d.r*T-14,70]);});
      buildings.forEach(function(b){spots.push([(b.x+b.w/2)*T,(b.y+b.h)*T-26,58]);});
      spots.forEach(function(s){var g=ctx.createRadialGradient(s[0],s[1],2,s[0],s[1],s[2]);g.addColorStop(0,"rgba(255,205,110,"+(0.55*nightK).toFixed(3)+")");g.addColorStop(1,"rgba(255,205,110,0)");ctx.fillStyle=g;ctx.fillRect(s[0]-s[2],s[1]-s[2],s[2]*2,s[2]*2);});
      ctx.restore();
    }
  }
  if(ending){
    var h=IMG.hall;
    if(h&&h.naturalWidth)ctx.drawImage(h,0,0,W,H);else R(0,0,W,H,"#f3dcb4");
    R(0,0,W,H,"rgba(255,240,214,.22)");
    if(endDone){
      ctx.fillStyle="#3b2a22";ctx.font="bold 26px sans-serif";ctx.textAlign="center";
      ctx.strokeStyle="rgba(255,248,230,.95)";ctx.lineWidth=5;ctx.lineJoin="round";
      ctx.strokeText("🎓 Congratulations, Future Doctor! 🎓",W/2,48);
      ctx.fillText("🎓 Congratulations, Future Doctor! 🎓",W/2,48);
      ctx.font="bold 16px sans-serif";
      ctx.strokeText(name+"'s Road to the PhD",W/2,76);ctx.fillText(name+"'s Road to the PhD",W/2,76);
    }
    var ph=Math.floor(endT/100)%3, cx=W/2, by=398;
    shadow(cx,by-2,62);
    if(ph===0)spr("robe_stand",cx,by,1.35);
    else if(ph===1)spr("robe_jump",cx,by-Math.abs(Math.sin(endT/6))*22-6,1.35);
    else spr("robe_toss",cx,by,1.3);
    var ce=[3,2,6,9][Math.floor(endT/14)%4];
    shadow(cx-190,by-2,36);spr("cheer"+ce,cx-190,by+2,1.15);
    var cat=(endT%240<120)?"cat_sit":"cat_purr";
    shadow(cx+175,by-2,30);
    spr(cat,cx+175,by,1.25,true);
  }
  if(scene)drawScene();
  confetti.forEach(function(c){ctx.save();ctx.translate(c.x,c.y);ctx.rotate(c.r);ctx.fillStyle=c.c;ctx.fillRect(-c.s/2,-c.s/2,c.s,c.s*1.6);ctx.restore();});
}
/* ---------- chiptune music (WebAudio, no files) ---------- */
var AC=null, master=null, muted=false, curTrack=null, nextT=0, stepI=0, timer=null, noiseBuf=null;
try{muted=localStorage.getItem("gradgame_mute")==="1";}catch(e){}
var NOTE={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
function mf(s){if(!s||s==="-")return 0;var m=/^([A-G])(#?)(\d)$/.exec(s);var n=NOTE[m[1]]+(m[2]?1:0)+12*(+m[3]+1);return 440*Math.pow(2,(n-69)/12);}
function PN(s){return s.split(/\s+/).map(mf);}
var TRACKS={
 day:{bpm:112,lead:PN("E5 - G5 - E5 - C5 - D5 - F5 - D5 - B4 - C5 E5 G5 E5 C6 - G5 - F5 E5 D5 - C5 - - -  E5 - G5 - A5 - G5 - F5 - A5 - G5 - E5 - D5 F5 A5 F5 D5 - B4 - C5 - E5 - G5 - C6 -"),
      bass:PN("C3 - G3 - C3 - G3 - G2 - D3 - G2 - D3 - A2 - E3 - F2 - C3 - F2 - C3 - G2 - G3 - C3 - G3 - C3 - G3 - A2 - E3 - A2 - E3 - F2 - C3 - D3 - A3 - G2 - D3 - C3 - - -"),
      lw:"square",lg:0.10,bw:"triangle",bg:0.22,hat:true,len:0.7},
 night:{bpm:76,lead:PN("A4 - C5 - E5 - - - D5 - C5 - B4 - - - C5 - E5 - A5 - G5 - E5 - - - - - - - A4 - C5 - E5 - - - F5 - E5 - D5 - - - E5 - D5 - C5 - B4 - A4 - - - - - - -"),
      bass:PN("A2 - - - E3 - - - D3 - - - A2 - - - F2 - - - C3 - - - E2 - - - B2 - - - A2 - - - E3 - - - D3 - - - F3 - - - E3 - - - E2 - - - A2 - - -"),
      lw:"triangle",lg:0.2,bw:"sine",bg:0.3,hat:false,len:1.4},
 end:{bpm:150,lead:PN("C5 E5 G5 C6 G5 C6 E6 - D6 B5 G5 B5 D6 - - - A5 C6 E6 C6 A5 C6 E6 - F5 G5 A5 B5 C6 - C6 - C6 B5 C6 D6 E6 - G6 - F6 E6 D6 C6 B5 - D6 - E6 - C6 - G5 - C6 - C6 - - -"),
      bass:PN("C3 - C3 - G3 - G3 - G2 - G2 - D3 - D3 - A2 - A2 - E3 - E3 - F2 - F2 - G2 - G2 - C3 - C3 - E3 - E3 - F2 - F2 - D3 - G2 - G3 - C3 - C3 - C3 - - -"),
      lw:"square",lg:0.11,bw:"triangle",bg:0.24,hat:true,len:0.6}
};
function audioInit(){
  if(AC){if(AC.state==="suspended"&&!muted)AC.resume();return;}
  var C=window.AudioContext||window.webkitAudioContext;if(!C)return;
  AC=new C();master=AC.createGain();master.gain.value=muted?0:0.5;master.connect(AC.destination);
  noiseBuf=AC.createBuffer(1,AC.sampleRate*0.1,AC.sampleRate);
  var d=noiseBuf.getChannelData(0);for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1;
}
function tone(f,t,dur,type,vol){
  if(!f)return;var o=AC.createOscillator(),g=AC.createGain();
  o.type=type;o.frequency.value=f;
  g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(vol,t+0.01);
  g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+0.02);
}
function hat(t){var s=AC.createBufferSource(),g=AC.createGain(),h=AC.createBiquadFilter();
  s.buffer=noiseBuf;h.type="highpass";h.frequency.value=7000;
  g.gain.setValueAtTime(0.05,t);g.gain.exponentialRampToValueAtTime(0.0001,t+0.05);
  s.connect(h);h.connect(g);g.connect(master);s.start(t);}
function setTrack(n){
  if(!AC||n===curTrack)return;
  curTrack=n;stepI=0;nextT=AC.currentTime+0.15;
  if(!timer)timer=setInterval(sched,40);
}
function sched(){
  if(!AC||!curTrack||AC.state!=="running")return;
  var T_=TRACKS[curTrack],sd=60/T_.bpm/2;
  while(nextT<AC.currentTime+0.25){
    var i=stepI%T_.lead.length;
    tone(T_.lead[i],nextT,sd*T_.len*1.6,T_.lw,T_.lg);
    if(curTrack==="night"&&T_.lead[i])tone(T_.lead[i],nextT+sd*1.5,sd*2,T_.lw,T_.lg*0.35);
    tone(T_.bass[i%T_.bass.length],nextT,sd*1.7,T_.bw,T_.bg);
    if(T_.hat&&stepI%2===1)hat(nextT);
    nextT+=sd;stepI++;
  }
}
function sfx(k){
  if(!AC||muted||AC.state!=="running")return;var t=AC.currentTime;
  if(k==="blip")tone(880,t,0.06,"square",0.07);
  else if(k==="ok"){tone(660,t,0.07,"square",0.08);tone(990,t+0.06,0.09,"square",0.08);}
}
function setMuted(m){
  muted=m;try{localStorage.setItem("gradgame_mute",m?"1":"0");}catch(e){}
  if(master)master.gain.value=m?0:0.5;
  var b=document.getElementById("muteBtn");if(b)b.textContent=m?"🔇":"🔊";
}
function musicTick(){
  if(!AC)return;
  var want=(mode==="title"||!S)?"day":ending?"end":(S.slot===3?"night":"day");
  setTrack(want);
}
document.addEventListener("visibilitychange",function(){if(!AC)return;if(document.hidden)AC.suspend();else if(!muted)AC.resume();});
document.getElementById("muteBtn").onclick=function(e){e.stopPropagation();audioInit();setMuted(!muted);};
setMuted(muted);

function loop(){update();render();musicTick();requestAnimationFrame(loop);}

/* ---------- start ---------- */
function startGame(){
  if(!ready)return;
  audioInit();
  var v=document.getElementById("nameIn").value.trim();
  name=v||"Ayoub";
  var d=load();
  if(d&&!d.S.ended&&d.name===name){S=Object.assign(newState(),d.S);}else{S=newState();}
  spawnCheer();
  el.title.style.display="none";updateHUD();mode="play";
  if(S.day===1&&S.know===0&&S.energy===100){
    say(["Hey, "+name+"! You're a master's student with a PhD in sight. Let's get this thesis done.","📚 Read and write at the Library, 💼 earn a stipend at the TA / RA job, 🥐 bake at the Bakery.\nWhen you're worn out, pet the 🐱 white cat or have some 🍵 tea. Look out for 📣 In Ha, your biggest cheerleader, for a boost, and sleep at 🏠 Home when night falls.","Each study, job or bake takes a chunk of the day: 🌅 → ☀️ → 🌇 → 🌙. If Stress hits 100 you'll burn out, so watch it! Reach Research 100 and the 🎓 Defense Hall opens."],null,"p_travel");
  }
}
document.getElementById("startBtn").onclick=startGame;
S=newState();
loop();
})();

/* ---------- scale the whole game up on big screens ---------- */
(function(){
  var w=document.getElementById("wrap");
  function fit(){
    var s=Math.min(window.innerWidth/740,window.innerHeight/835);
    s=Math.max(1,Math.min(2.4,s));
    w.style.zoom=s.toFixed(3);if(window.__setupCanvas)window.__setupCanvas();
  }
  window.addEventListener("resize",fit);fit();
})();
