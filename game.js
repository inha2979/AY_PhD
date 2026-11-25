
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
 "idle0": "assets/idle0.webp",
 "idle1": "assets/idle1.webp",
 "idle2": "assets/idle2.webp",
 "idle3": "assets/idle3.webp",
 "idle4": "assets/idle4.webp",
 "idle5": "assets/idle5.webp",
 "idle6": "assets/idle6.webp",
 "idle7": "assets/idle7.webp",
 "mp_brick0": "assets/map/brick0.webp",
 "mp_brick1": "assets/map/brick1.webp",
 "mp_cobble0": "assets/map/cobble0.webp",
 "mp_cobble1": "assets/map/cobble1.webp",
 "mp_d0": "assets/map/d0.webp",
 "mp_d1": "assets/map/d1.webp",
 "mp_d2": "assets/map/d2.webp",
 "mp_d3": "assets/map/d3.webp",
 "mp_d4": "assets/map/d4.webp",
 "mp_d5": "assets/map/d5.webp",
 "mp_e_bl": "assets/map/e_bl.webp",
 "mp_e_bot": "assets/map/e_bot.webp",
 "mp_e_br": "assets/map/e_br.webp",
 "mp_e_left": "assets/map/e_left.webp",
 "mp_e_right": "assets/map/e_right.webp",
 "mp_e_tl": "assets/map/e_tl.webp",
 "mp_e_top": "assets/map/e_top.webp",
 "mp_e_topg": "assets/map/e_topg.webp",
 "mp_e_tr": "assets/map/e_tr.webp",
 "mp_g0": "assets/map/g0.webp",
 "mp_g1": "assets/map/g1.webp",
 "mp_g10": "assets/map/g10.webp",
 "mp_g11": "assets/map/g11.webp",
 "mp_g2": "assets/map/g2.webp",
 "mp_g3": "assets/map/g3.webp",
 "mp_g4": "assets/map/g4.webp",
 "mp_g5": "assets/map/g5.webp",
 "mp_g6": "assets/map/g6.webp",
 "mp_g7": "assets/map/g7.webp",
 "mp_g8": "assets/map/g8.webp",
 "mp_g9": "assets/map/g9.webp",
 "mp_m_bed": "assets/map/m_bed.webp",
 "mp_m_bench": "assets/map/m_bench.webp",
 "mp_m_bench2": "assets/map/m_bench2.webp",
 "mp_m_berry": "assets/map/m_berry.webp",
 "mp_m_bowl": "assets/map/m_bowl.webp",
 "mp_m_bush0": "assets/map/m_bush0.webp",
 "mp_m_bush1": "assets/map/m_bush1.webp",
 "mp_m_bush2": "assets/map/m_bush2.webp",
 "mp_m_drygrass": "assets/map/m_drygrass.webp",
 "mp_m_fence_l": "assets/map/m_fence_l.webp",
 "mp_m_fence_s": "assets/map/m_fence_s.webp",
 "mp_m_fountain": "assets/map/m_fountain.webp",
 "mp_m_garden": "assets/map/m_garden.webp",
 "mp_m_gfence": "assets/map/m_gfence.webp",
 "mp_m_house": "assets/map/m_house.webp",
 "mp_m_lamp": "assets/map/m_lamp.webp",
 "mp_m_lamp_on": "assets/map/m_lamp_on.webp",
 "mp_m_logs": "assets/map/m_logs.webp",
 "mp_m_mailbox": "assets/map/m_mailbox.webp",
 "mp_m_planter": "assets/map/m_planter.webp",
 "mp_m_pond": "assets/map/m_pond.webp",
 "mp_m_post1": "assets/map/m_post1.webp",
 "mp_m_post2": "assets/map/m_post2.webp",
 "mp_m_rock": "assets/map/m_rock.webp",
 "mp_m_rock_s": "assets/map/m_rock_s.webp",
 "mp_m_sign": "assets/map/m_sign.webp",
 "mp_m_snowdrop": "assets/map/m_snowdrop.webp",
 "mp_m_snowpile": "assets/map/m_snowpile.webp",
 "mp_m_steps": "assets/map/m_steps.webp",
 "mp_m_stump": "assets/map/m_stump.webp",
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
 "u_bolt": "assets/ui/i_bolt.png",
 "u_bowl": "assets/ui/i_bowl.png",
 "u_brain": "assets/ui/i_brain.png",
 "u_cat": "assets/ui/i_cat.png",
 "u_coins": "assets/ui/i_coins.png",
 "u_cookie": "assets/ui/i_cookie.png",
 "u_heart": "assets/ui/i_heart.png",
 "u_moon": "assets/ui/i_moon.png",
 "u_sun": "assets/ui/i_sun.png",
 "walk_down0": "assets/walk_down0.webp",
 "walk_down1": "assets/walk_down1.webp",
 "walk_down2": "assets/walk_down2.webp",
 "walk_left0": "assets/walk_left0.webp",
 "walk_left1": "assets/walk_left1.webp",
 "walk_left2": "assets/walk_left2.webp",
 "walk_up0": "assets/walk_up0.webp",
 "walk_up1": "assets/walk_up1.webp",
 "walk_up2": "assets/walk_up2.webp",
 "x_banner_blank": "assets/xmas/banner_blank.webp",
 "x_bubble_exclaim": "assets/xmas/bubble_exclaim.webp",
 "x_bubble_heart": "assets/xmas/bubble_heart.webp",
 "x_candle_f0": "assets/xmas/candle_f0.webp",
 "x_candle_f1": "assets/xmas/candle_f1.webp",
 "x_candle_f2": "assets/xmas/candle_f2.webp",
 "x_cocoa_mug": "assets/xmas/cocoa_mug.webp",
 "x_fireplace_mini_f0": "assets/xmas/fireplace_mini_f0.webp",
 "x_fireplace_mini_f1": "assets/xmas/fireplace_mini_f1.webp",
 "x_fireplace_mini_f2": "assets/xmas/fireplace_mini_f2.webp",
 "x_garland_f0": "assets/xmas/garland_f0.webp",
 "x_garland_f1": "assets/xmas/garland_f1.webp",
 "x_garland_f2": "assets/xmas/garland_f2.webp",
 "x_gift_green": "assets/xmas/gift_green.webp",
 "x_gift_icon": "assets/xmas/gift_icon.webp",
 "x_gift_sack": "assets/xmas/gift_sack.webp",
 "x_gift_white": "assets/xmas/gift_white.webp",
 "x_gingerbread": "assets/xmas/gingerbread.webp",
 "x_lamp_post": "assets/xmas/lamp_post.webp",
 "x_reindeer_rest": "assets/xmas/reindeer_rest.webp",
 "x_snowman": "assets/xmas/snowman.webp",
 "x_sparkle_a": "assets/xmas/sparkle_a.webp",
 "x_sparkle_b": "assets/xmas/sparkle_b.webp",
 "x_star": "assets/xmas/star.webp",
 "x_tree_large": "assets/xmas/tree_large.webp",
 "x_tree_medium": "assets/xmas/tree_medium.webp",
 "x_tree_small": "assets/xmas/tree_small.webp",
 "x_window_night": "assets/xmas/window_night.webp",
 "x_window_warm": "assets/xmas/window_warm.webp"
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
  var d=load();
  if(d&&d.S&&!d.S.ended){
    b.textContent="Continue · Day "+d.S.day;
    document.getElementById("nameIn").value=d.name||"Ayoub";
    document.getElementById("newBtn").style.display="inline-block";
  }
}

/* Christmas sprites (lazy): not loaded at start. Call loadXmas() once, then use IMG["x_<name>"] / spr("x_<name>",...). See XMAS_ASSETS.md */
var XMAS_NAMES="candle_f0 candle_f1 candle_f2 snowglobe_f0 snowglobe_f1 snowglobe_f2 garland_f0 garland_f1 garland_f2 fireplace_mini_f0 fireplace_mini_f1 fireplace_mini_f2 tree_small tree_medium tree_large wreath_stand snowman reindeer_rest reindeer_lights fence_lights holly_snow_bush lamp_post snow_pile window_night window_warm armchair round_table_mug bookshelf fireplace_big sofa bed nightstand_lamp floor_lamp dining_set rug gift_green gift_white gift_sack candy_cane gingerbread tree_cookie star ornament snowflake lantern_dim lantern_lit poinsettia cocoa_mug cake_choco cake_berry yule_log letter card book_stack tile_wood tile_parquet tile_red tile_plaid tile_snow_cream tile_snow_blue banner_tree banner_snowflake banner_reindeer banner_blank bubble_exclaim bubble_heart gift_icon sparkle_a sparkle_b".split(" ");
function loadXmas(){XMAS_NAMES.forEach(function(n){if(IMG["x_"+n])return;var im=new Image();im.src="assets/xmas/"+n+".webp";IMG["x_"+n]=im;});}
document.getElementById("titleImg").src=ASSETS.p_travel;
document.getElementById("face").src=ASSETS.f_smile;

/* ---------- title scene ---------- */
(function(){
  var cv=document.getElementById("tcv"),tt=document.getElementById("title");
  if(!cv)return;
  var g=cv.getContext("2d"),LW=640,LH=448,S2=2,t=0,tp=[];
  cv.width=LW*S2;cv.height=LH*S2;
  var snow=[],stars=[],i;
  for(i=0;i<70;i++)snow.push({x:Math.random()*LW,y:Math.random()*LH,r:0.8+Math.random()*1.8,v:0.25+Math.random()*0.7,ph:Math.random()*6.28});
  for(i=0;i<46;i++)stars.push({x:Math.random()*LW,y:Math.random()*210,r:0.5+Math.random()*1.1,ph:Math.random()*6.28});
  function im(n){var m=IMG[n];return(m&&m.naturalWidth)?m:null;}
  function dh(n,cx,by,h,flip){var m=im(n);if(!m)return;var w=m.naturalWidth*h/m.naturalHeight;g.save();if(flip){g.translate(cx,0);g.scale(-1,1);g.drawImage(m,-w/2,by-h,w,h);}else g.drawImage(m,cx-w/2,by-h,w,h);g.restore();}
  function sh(cx,by,rx){g.fillStyle="rgba(10,16,40,.35)";g.beginPath();g.ellipse(cx,by,rx,rx*0.28,0,0,6.283);g.fill();}
  var HOT={cat:[480,330,40],inha:[190,300,60],me:[290,300,50]};
  function frame(){
    if(tt.style.display==="none")return;
    t++;g.setTransform(S2,0,0,S2,0,0);g.clearRect(0,0,LW,LH);
    /* stars */
    stars.forEach(function(s){g.globalAlpha=0.35+0.65*(0.5+0.5*Math.sin(t/22+s.ph));g.fillStyle="#fff7da";g.fillRect(s.x,s.y,s.r,s.r);});g.globalAlpha=1;
    /* moon */
    g.fillStyle="rgba(255,244,205,.95)";g.beginPath();g.arc(592,200,18,0,6.283);g.fill();g.fillStyle="rgba(255,244,205,.16)";g.beginPath();g.arc(592,200,30,0,6.283);g.fill();
    /* snowy hills */
    g.fillStyle="#cfd9ee";g.beginPath();g.ellipse(120,372,230,56,0,0,6.283);g.fill();g.beginPath();g.ellipse(520,380,250,60,0,0,6.283);g.fill();
    var gr=g.createLinearGradient(0,350,0,LH);gr.addColorStop(0,"#f4f7ff");gr.addColorStop(1,"#d5def2");g.fillStyle=gr;g.fillRect(0,372,LW,LH-372);
    /* background props */
    dh("x_tree_large",44,392,200);dh("x_tree_medium",120,384,120);dh("x_tree_large",604,396,190);dh("x_tree_small",548,386,92);
    dh("x_lamp_post",330,376,110);
    dh("x_snowman",402,398,84);
    /* garland */
    var gf=Math.floor(t/14)%3;for(i=0;i<6;i++){var gm=im("x_garland_f"+gf);if(gm){var gw=118,gh=gm.naturalHeight*gw/gm.naturalWidth;g.drawImage(gm,i*gw-4,-6,gw,gh);}}
    /* characters */
    var ti=Math.floor(t/12)%4+((Math.floor(t/48)%4===3)?4:0);
    sh(290,412,26);dh("idle"+ti,290,412,118);
    var cq=[1,4,2,3,5,9,4,10],cf=cq[Math.floor(t/18)%cq.length];
    sh(190,414,26);dh("cheer"+cf,190,414,124);
    sh(480,414,26);dh(((Math.floor(t/200)%2)?"cat_loaf":"cat_sit"),480,416,60,true);
    /* gifts + sparkles */
    dh("x_gift_sack",368,420,52);dh("x_gift_icon",404,422,40);dh("x_gift_green",98,422,40);dh("x_gift_white",134,424,32);
    for(i=0;i<7;i++){var sp=im(i%3===0?"x_star":(i%2?"x_sparkle_a":"x_sparkle_b"));if(!sp)continue;var tw=0.5+0.5*Math.sin(t/9+i*2.1),ss=(i%3===0?14:10)*(0.6+0.6*tw);g.globalAlpha=tw;g.drawImage(sp,[250,330,150,520,70,430,600][i]-ss/2,[360,330,340,300,330,360,320][i]-ss/2,ss,ss);}g.globalAlpha=1;
    /* heart pops */
    for(i=tp.length-1;i>=0;i--){var p=tp[i];p.t++;if(p.t>90){tp.splice(i,1);continue;}var hm=im("x_bubble_heart");if(!hm)continue;
      var k=p.t<10?1.35*Math.sin(p.t/10*1.5708):(p.t<18?1.35-0.35*(p.t-10)/8:1),w=36*k,h=hm.naturalHeight*w/hm.naturalWidth;
      g.globalAlpha=p.t>72?(90-p.t)/18:1;g.drawImage(hm,p.x-w/2,p.y-p.t*0.2-h,w,h);g.globalAlpha=1;}
    /* snow */
    g.fillStyle="#fff";snow.forEach(function(f){f.y+=f.v;f.x+=Math.sin(t/40+f.ph)*0.35;if(f.y>LH+3){f.y=-4;f.x=Math.random()*LW;}g.globalAlpha=0.55+0.4*f.r/2.6;g.beginPath();g.arc(f.x,f.y,f.r,0,6.283);g.fill();});g.globalAlpha=1;
    requestAnimationFrame(frame);
  }
  tt.addEventListener("click",function(e){
    if(e.target.closest&&e.target.closest("button,input"))return;
    var r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*LW,y=(e.clientY-r.top)/r.height*LH;
    for(var k in HOT){var h=HOT[k];if(Math.hypot(x-h[0],y-h[1])<h[2]){tp.push({x:h[0],y:h[1]-(k==="cat"?20:60),t:0});return;}}
    tp.push({x:x,y:y,t:0});
  });
  frame();
})();

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
var trees=[[0,5,"t_tree"],[19,5,"t_pink"],[6,7,"t_pine"],[13,7,"t_tree"],[13,12,"t_pine"],[0,13,"t_tree"],[19,13,"t_pine"],[7,4,"t_pink"],[12,13,"t_tree"]];
var XT={c:6,r:11};
var decor=[{n:"o_lamp",c:6,r:4,h:56},{n:"o_lamp",c:13,r:4,h:56},{n:"o_bench",c:9,r:12,h:28},{n:"o_flower",c:6,r:9,h:28}];
/* Christmas switches: XMAS = lights + music, XSNOW = snow, XTREE = drawn tree, XTXT = Christmas wording, XART = sprite decorations */
var XMAS=true, XMAS_NOTE="", XSNOW=false, XTREE=false, XTXT=false, XART=true, XEND=true;
var XMAP={t_tree:["x_tree_small",52],t_pink:["x_tree_medium",56],t_pine:["x_tree_large",60],o_lamp:["x_lamp_post",58]};
if(XART){decor.push({n:"x_snowman",c:18,r:8,h:46},{n:"x_reindeer_rest",c:15,r:12,h:40});}
/* Snowy village map art (map sheets). MAPART=false restores the old flat grass. */
var MAPART=true;
if(MAPART&&ASSETS.mp_g0){
  decor=decor.filter(function(d){return d.n!=="o_bench"&&d.n!=="o_flower";});
  [[9,12,"mp_m_bench",28],[5,3,"mp_m_mailbox",30],[5,9,"mp_m_logs",22],[5,7,"mp_m_sign",32],[12,7,"mp_m_planter",24],[6,11,"mp_m_fountain",38],[3,12,"mp_m_pond",26],[10,13,"mp_m_rock",22],[5,13,"mp_m_stump",24],
   [0,2,"mp_m_bush0",24],[5,2,"mp_m_bush2",24],[7,2,"mp_m_bush1",24],[12,2,"mp_m_bush0",24],[14,2,"mp_m_bush2",24],[19,3,"mp_m_bush1",24],[19,1,"mp_m_bush0",24],
   [16,12,"mp_m_bowl",12],[17,12,"mp_m_bed",14],[18,10,"mp_m_house",34]].forEach(function(a){decor.push({n:a[2],c:a[0],r:a[1],h:a[3]});});
}
var blocked=[];
(function(){
  for(var r=0;r<ROWS;r++){blocked[r]=[];for(var c=0;c<COLS;c++)blocked[r][c]=false;}
  buildings.forEach(function(b){for(var r=b.y;r<b.y+b.h;r++)for(var c=b.x;c<b.x+b.w;c++)blocked[r][c]=true;});
  trees.forEach(function(t){blocked[t[1]][t[0]]=true;});
  decor.forEach(function(d){blocked[d.r][d.c]=true;});
  if(XTREE)blocked[XT.r][XT.c]=true;
})();
function isBlocked(px,py){
  if(isConfDay()&&px>134&&px<254&&py>372&&py<428)return true;
  var c=Math.floor(px/T), r=Math.floor(py/T);
  if(c<0||r<0||c>=COLS||r>=ROWS)return true;
  return blocked[r][c];
}

/* ---------- entities ---------- */
var P={x:10*T,y:6*T+16,dir:"down",step:0,moving:false,idle:0};
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

var BG=null;
function isRoadCell(c,r){
  if(c<0||c>=COLS)return true;
  if(r===5||r===6)return true;
  if(r>=3&&r<=4&&(c===2||c===9||c===16))return true;
  if(r===7&&(c===2||c===9))return true;
  return false;
}
function bakeBG(){
  var g0=IMG.mp_g0;if(!MAPART||!g0||!g0.naturalWidth)return null;
  var cb=document.createElement("canvas"),Z=3,CL=T*Z;cb.width=W*Z;cb.height=H*Z;
  var g=cb.getContext("2d");g.imageSmoothingEnabled=true;g.imageSmoothingQuality="high";
  var sd=7;function rnd(){sd|=0;sd=sd+0x6D2B79F5|0;var q=Math.imul(sd^sd>>>15,1|sd);q=q+Math.imul(q^q>>>7,61|q)^q;return((q^q>>>14)>>>0)/4294967296;}
  function pick(a){return a[Math.floor(rnd()*a.length)];}
  function tile(n,x,y,fl){var im=IMG["mp_"+n];if(!im||!im.naturalWidth)return;g.save();g.translate(x+(fl&1?CL:0),y+(fl&2?CL:0));g.scale(fl&1?-1:1,fl&2?-1:1);g.drawImage(im,0,0,CL+1,CL+1);g.restore();}
  var FT={},FS=Math.round(CL*1.7);
  function feath(n){
    if(FT[n])return FT[n];var im=IMG["mp_"+n];if(!im||!im.naturalWidth)return null;
    var cv2=document.createElement("canvas");cv2.width=cv2.height=FS;var q=cv2.getContext("2d");
    q.drawImage(im,0,0,FS,FS);q.globalCompositeOperation="destination-in";
    var gx=q.createLinearGradient(0,0,FS,0);gx.addColorStop(0,"rgba(0,0,0,0)");gx.addColorStop(0.34,"rgba(0,0,0,1)");gx.addColorStop(0.66,"rgba(0,0,0,1)");gx.addColorStop(1,"rgba(0,0,0,0)");q.fillStyle=gx;q.fillRect(0,0,FS,FS);
    var gy=q.createLinearGradient(0,0,0,FS);gy.addColorStop(0,"rgba(0,0,0,0)");gy.addColorStop(0.34,"rgba(0,0,0,1)");gy.addColorStop(0.66,"rgba(0,0,0,1)");gy.addColorStop(1,"rgba(0,0,0,0)");q.fillStyle=gy;q.fillRect(0,0,FS,FS);
    return FT[n]=cv2;
  }
  function soft(n,cx,cy,fl){var f=feath(n);if(!f)return;g.save();g.translate(cx,cy);g.scale(fl&1?-1:1,fl&2?-1:1);g.drawImage(f,-FS/2,-FS/2);g.restore();}
  var PL=["g0","g4","g10","g11","g6","g7","g9"],TU=["g2","g8"],PA=["g1","g3"];
  function inGarden(c,r){return c>=14&&c<19&&r>=8&&r<13;}
  var c,r;
  g.fillStyle="#e9e5f3";g.fillRect(0,0,cb.width,cb.height);
  for(r=-1;r<=ROWS;r++)for(c=-1;c<=COLS;c++){
    var q=rnd(),n;
    if(inGarden(c,r))n=q<.6?"g3":"g1";
    else n=q<.58?pick(PL):(q<.88?pick(TU):(q<.95?pick(PA):"g5"));
    soft(n,c*CL+CL/2,r*CL+CL/2,Math.floor(rnd()*4));
  }
  /* road: feathered dirt clipped to the road cells */
  var DP=["d2","d3","d3","d2","d0","d1","d4","d5"];
  function roadCell(c,r){return c>=0&&c<COLS&&(r===5||r===6||(r>=3&&r<=4&&(c===2||c===9||c===16))||(r===7&&(c===2||c===9)));}
  g.save();g.beginPath();
  for(r=0;r<ROWS;r++)for(c=0;c<COLS;c++)if(roadCell(c,r))g.rect(c*CL,r*CL,CL,CL);
  g.clip();
  for(r=3;r<=7;r++)for(c=-1;c<=COLS;c++)soft(pick(DP),c*CL+CL/2,r*CL+CL/2,Math.floor(rnd()*4));
  g.restore();
  function band(n,x,y){tile(n,x,y,0);}
  var B=0.42*CL;
  for(r=0;r<ROWS;r++)for(c=0;c<COLS;c++){
    if(!roadCell(c,r))continue;
    var x=c*CL,y=r*CL;
    if(!isRoadCell(c,r-1))band("e_top",x,y-B);
    if(!isRoadCell(c,r+1))band("e_bot",x,y+B);
    if(!isRoadCell(c-1,r))band("e_left",x-B,y);
    if(!isRoadCell(c+1,r))band("e_right",x+B,y);
  }
  /* snow heaps in the junction notches */
  var sp=IMG.mp_m_snowpile;
  if(sp&&sp.naturalWidth)[[2,5],[9,5],[16,5],[2,6],[9,6],[2,6]].forEach(function(j){});
  /* scattered small bits (ground level, non-blocking) */
  var small=["mp_m_snowdrop","mp_m_berry","mp_m_drygrass","mp_m_snowpile","mp_m_rock_s","mp_m_snowpile"],hs=[14,16,14,11,11,11],k;
  var occ={};decor.forEach(function(d){occ[d.c+","+d.r]=1;});trees.forEach(function(t){occ[t[0]+","+t[1]]=1;});
  var tries=0,placed=0;
  while(placed<22&&tries<400){tries++;
    c=Math.floor(rnd()*COLS);r=Math.floor(rnd()*ROWS);
    if(isRoadCell(c,r)||occ[c+","+r]||inGarden(c,r)||r===4||r===7||r===8&&c<12)continue;
    var inb=false;buildings.forEach(function(b){if(c>=b.x&&c<b.x+b.w&&r>=b.y&&r<b.y+b.h)inb=true;});if(inb)continue;
    var i=Math.floor(rnd()*small.length),im=IMG[small[i]];if(!im||!im.naturalWidth)continue;
    var h=hs[i]*Z,w=im.naturalWidth*h/im.naturalHeight,px=c*CL+CL/2+(rnd()-.5)*CL*.5,py=r*CL+CL*.75+(rnd()-.5)*CL*.3;
    g.drawImage(im,px-w/2,py-h,w,h);occ[c+","+r]=1;placed++;
  }
  /* garden fence */
  var fs=IMG.mp_m_fence_s;
  if(fs&&fs.naturalWidth){var fw=46*Z,fh=fw*fs.naturalHeight/fs.naturalWidth;[14*CL,14*CL+fw*0.95,17*CL+CL*0.6,17*CL+CL*0.6+fw*0.95].forEach(function(fx){g.drawImage(fs,fx,8*CL-fh*0.2,fw,fh);});}
  return cb;
}
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
function drawGardenLabel(){
  ctx.font="bold 12px sans-serif";ctx.textAlign="center";var tx="🌸 Cat Garden",w=ctx.measureText(tx).width+14;
  ctx.fillStyle="rgba(255,250,241,.9)";ctx.fillRect(garden.x+garden.w/2-w/2,garden.y-17,w,16);
  ctx.fillStyle="#3b2a22";ctx.fillText(tx,garden.x+garden.w/2,garden.y-5);
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
    if(XMAS&&b.id!=="hall")lightString(cx-dw*0.40,cx+dw*0.40,by-dh*0.42,6,13);
    if(b.id==="hall"&&S.know<100){ctx.font="22px sans-serif";ctx.textAlign="center";ctx.fillText("🔒",cx,by-14);}
  } else R(x,y,w,h,"#ccc");
  ctx.font="bold 13px sans-serif";ctx.textAlign="center";
  ctx.fillStyle="rgba(255,250,241,.92)";ctx.fillRect(x+w/2-50,y+h+8,100,16);
  ctx.fillStyle="#3b2a22";ctx.fillText(b.label,x+w/2,y+h+20);
}

/* ---- character from sprite sheet ---- */
var PTOP=0;
function pdraw(name,cx,by,flip,sy,bob){
  var im=IMG[name];if(!im||!im.naturalWidth)return false;
  var sc=0.5,w=im.naturalWidth/AS*sc,h=im.naturalHeight/AS*sc*sy,y=by+2-bob;PTOP=y-h;
  ctx.save();
  if(flip){ctx.translate(cx,0);ctx.scale(-1,1);ctx.drawImage(im,-w/2,y-h,w,h);}
  else ctx.drawImage(im,cx-w/2,y-h,w,h);
  ctx.restore();return true;
}
function playerSprite(cx,by,dir,step,moving){
  playerSprite0(cx,by,dir,step,moving);
}
function playerSprite0(cx,by,dir,step,moving){
  var side=(dir==="left"||dir==="right");
  var key=side?"walk_left":(dir==="up"?"walk_up":"walk_down");
  var flip=(dir==="right");
  shadow(cx,by-1,13);
  if(moving){
    /* 4-phase cycle: contact(A) - passing - contact(B, mirrored) - passing; body rises on passing */
    var ph=Math.floor(step/7)%4, fr, mir=false;
    if(side){fr=[0,1,2,1][ph];}
    else{fr=(ph%2===1)?1:0;mir=(ph===2);}
    var bob=(ph%2===1)?1.6:0;
    pdraw(key+fr,cx,by,flip!==mir,1,bob);
  }else{
    var t=P.idle||0;
    if(dir==="down"&&IMG.idle0&&IMG.idle0.naturalWidth){
      /* breathing loop x3, then a foot-tap loop */
      var tap=(Math.floor(t/48)%4===3);
      pdraw("idle"+(Math.floor(t/12)%4+(tap?4:0)),cx,by,false,1,0);
    }else{
      pdraw(key+1,cx,by,flip,1+0.018*Math.sin(t/12),0.6*Math.sin(t/12));
    }
  }
}
/* ---------- Christmas edition ---------- */

var snow=[];(function(){for(var i=0;i<85;i++)snow.push({x:Math.random()*640,y:Math.random()*448,r:0.8+Math.random()*1.7,v:0.3+Math.random()*0.7,p:Math.random()*6});})();
function snowStep(){for(var i=0;i<snow.length;i++){var f=snow[i];f.y+=f.v;f.p+=0.03;f.x+=Math.sin(f.p)*0.4+0.15;if(f.y>W*0.7+3){f.y=-4;f.x=Math.random()*W;}if(f.x>W+3)f.x=-3;}}
function drawSnow(){ctx.fillStyle="rgba(255,255,255,.92)";ctx.beginPath();for(var i=0;i<snow.length;i++){var f=snow[i];ctx.moveTo(f.x+f.r,f.y);ctx.arc(f.x,f.y,f.r,0,6.2832);}ctx.fill();}
var LCOL=["#ff4d4d","#ffd24a","#5ad07a","#5ab8ff","#ff8ad8"];
function lightString(x1,x2,y,sag,n){
  ctx.strokeStyle="rgba(40,70,40,.8)";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x1,y);ctx.quadraticCurveTo((x1+x2)/2,y+sag*2,x2,y);ctx.stroke();
  for(var i=0;i<=n;i++){
    var u=i/n,x=x1+(x2-x1)*u,yy=y+sag*2*u*(1-u)*2*0.5*2/2*1;
    yy=y+sag*4*u*(1-u)*0.5;
    var on=((i+Math.floor(endT2/18))%3)!==0;
    ctx.globalAlpha=on?1:0.4;ctx.fillStyle=LCOL[i%5];
    ctx.beginPath();ctx.arc(x,yy+2,2.2,0,6.2832);ctx.fill();
    if(on){ctx.globalAlpha=0.25;ctx.beginPath();ctx.arc(x,yy+2,4.6,0,6.2832);ctx.fill();}
  }
  ctx.globalAlpha=1;
}
function santaHat(x,y,s,face){
  ctx.save();ctx.translate(x,y);ctx.scale((face||1)*s,s);
  ctx.fillStyle="#d8323a";ctx.beginPath();ctx.moveTo(-11,2);ctx.quadraticCurveTo(-9,-14,10,-13);ctx.quadraticCurveTo(7,-4,12,2);ctx.closePath();ctx.fill();
  ctx.fillStyle="#b8242c";ctx.beginPath();ctx.moveTo(-3,-4);ctx.quadraticCurveTo(0,-11,10,-13);ctx.quadraticCurveTo(5,-6,4,-3);ctx.closePath();ctx.fill();
  ctx.fillStyle="#fff";ctx.beginPath();ctx.ellipse(0,3,13,3.6,-0.08,0,6.2832);ctx.fill();
  ctx.beginPath();ctx.arc(11,-13,3.3,0,6.2832);ctx.fill();
  ctx.restore();
}
function xmasTree(cx,by){
  shadow(cx,by-1,17);
  ctx.fillStyle="#6b4a2e";ctx.fillRect(cx-3,by-8,6,8);
  var tiers=[[by-8,20,26,"#2f7d3a"],[by-26,16,24,"#3a9447"],[by-42,11,22,"#4aab55"]];
  tiers.forEach(function(t){
    ctx.fillStyle=t[3];ctx.beginPath();ctx.moveTo(cx,t[0]-t[2]);ctx.lineTo(cx-t[1],t[0]);ctx.lineTo(cx+t[1],t[0]);ctx.closePath();ctx.fill();
    ctx.strokeStyle="rgba(255,255,255,.85)";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx-t[1]+1,t[0]-1);ctx.lineTo(cx+t[1]-1,t[0]-1);ctx.stroke();
  });
  var L=[[-8,-12],[6,-16],[-4,-30],[8,-33],[-11,-6],[10,-6],[0,-46],[-3,-42],[4,-22],[-7,-22]];
  for(var i=0;i<L.length;i++){
    var on=((i+Math.floor(endT2/16))%3)!==0;
    ctx.globalAlpha=on?1:0.35;ctx.fillStyle=LCOL[i%5];
    ctx.beginPath();ctx.arc(cx+L[i][0],by+L[i][1],2,0,6.2832);ctx.fill();
  }
  ctx.globalAlpha=1;
  var tw=0.7+0.3*Math.sin(endT2/10);
  ctx.fillStyle="#ffd24a";ctx.globalAlpha=tw;ctx.font="14px sans-serif";ctx.textAlign="center";ctx.fillText("★",cx,by-60);ctx.globalAlpha=1;
  ctx.fillStyle="#e24a4a";ctx.fillRect(cx-19,by-6,9,7);ctx.fillStyle="#fff";ctx.fillRect(cx-15,by-6,1.5,7);
  ctx.fillStyle="#4a8ae2";ctx.fillRect(cx+11,by-5,8,6);ctx.fillStyle="#fff";ctx.fillRect(cx+14.5,by-5,1.5,6);
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
  if(!XART){
  ctx.fillStyle="#3f2b1c";ctx.fillRect(470,80,124,150);
  ctx.fillStyle="#bfe0f2";ctx.fillRect(476,86,112,138);ctx.fillStyle="rgba(255,255,255,.35)";ctx.fillRect(476,86,112,40);
  ctx.fillStyle="#3f2b1c";ctx.fillRect(529,86,4,138);ctx.fillRect(476,152,112,4);
  }
  // desk edge
  ctx.fillStyle="#5a3c26";ctx.fillRect(250,380,380,14);ctx.fillStyle="#46301e";ctx.fillRect(250,394,380,54);
  if(XART)drawOfficeXmas();
}
function sprW(name,cx,by,w){var im=IMG[name];if(!im||!im.naturalWidth)return;var h=im.naturalHeight*w/im.naturalWidth;ctx.drawImage(im,cx-w/2,by-h,w,h);}
function drawOfficeXmas(){
  var f=Math.floor(endT2/14)%3;
  for(var gx=0;gx<5;gx++)sprW("x_garland_f"+((f+gx)%3),gx*140+70,72,150);
  sprW((S&&S.slot===3)?"x_window_night":"x_window_warm",532,240,150);
  sprW("x_tree_small",612,356,66);
  sprW("x_fireplace_mini_f"+f,318,352,132);
  sprW("x_candle_f"+f,292,386,34);
  sprW("x_cocoa_mug",590,386,30);
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
var POPS=[];
function popB(n,x,y,sc){POPS.push({n:n,x:x,y:y,t:0,sc:sc||1});}
function tickPops(){for(var i=POPS.length-1;i>=0;i--){POPS[i].t++;if(POPS[i].t>100)POPS.splice(i,1);}}
function drawPops(){
  for(var i=0;i<POPS.length;i++){
    var p=POPS[i],im=IMG[p.n];if(!im||!im.naturalWidth)continue;
    var k=p.t<10?1.35*Math.sin(p.t/10*1.5708):(p.t<18?1.35-0.35*(p.t-10)/8:1);
    var a=p.t>80?(100-p.t)/20:1,rise=p.t*0.16;
    var w=34*p.sc*k,h=im.naturalHeight*w/im.naturalWidth;
    ctx.globalAlpha=a;ctx.drawImage(im,p.x-w/2,p.y-rise-h,w,h);ctx.globalAlpha=1;
  }
}
var giftOn=false,giftT=0;
function drawGifts(by){
  var cx=W/2,G=[["x_gift_sack",cx-100,by,70,0],["x_gift_white",cx-58,by+6,50,10],["x_gift_icon",cx+96,by,62,5],["x_gift_green",cx+134,by+6,52,15]];
  for(var i=0;i<G.length;i++){
    var g=G[i],t=giftT-g[4];if(t<0)continue;
    var k=t<12?1.3*Math.sin(t/12*1.5708):(t<22?1.3-0.3*(t-12)/10:1);
    var im=IMG[g[0]];if(!im||!im.naturalWidth)continue;
    var w=g[3]*k,h=im.naturalHeight*w/im.naturalWidth,sh=(t>30)?Math.sin(endT2/9+i)*1.5:0;
    ctx.drawImage(im,g[1]-w/2,g[2]-h-Math.abs(sh),w,h);
  }
  for(var j=0;j<9;j++){
    var sp=IMG[j%3===0?"x_star":(j%2?"x_sparkle_a":"x_sparkle_b")];if(!sp||!sp.naturalWidth)continue;
    var tw=0.5+0.5*Math.sin(endT2/7+j*1.9),sx=cx-150+((j*97)%300),sy=by-110+((j*53)%90),ss=(j%3===0?16:11)*(0.6+0.6*tw);
    ctx.globalAlpha=Math.min(1,giftT/20)*tw;ctx.drawImage(sp,sx-ss/2,sy-ss/2,ss,ss);ctx.globalAlpha=1;
  }
}
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
var SKIN=true;
function UI(n,fb){return (SKIN&&ASSETS["u_"+n])?'<img class="ic2" src="'+ASSETS["u_"+n]+'" alt="">':fb;}
if(SKIN&&ASSETS.u_bolt)document.body.classList.add("skin");
function ICON(n,fb){return (XART&&ASSETS["x_"+n])?'<img class="ic" src="'+ASSETS["x_"+n]+'" alt="">':fb;}
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
  var tc=Math.min(3,S.slot);
  el.dayTxt.innerHTML=name+" · Day "+S.day+'<span class="tod">'+PH.map(function(p,i){return '<i class="'+(i===tc?"on":i<tc?"past":"")+'">'+UI(i<2?"sun":"moon",p.e)+'</i>';}).join("")+'</span> '+PH[tc].n;
  el.rank.textContent=rank();
  el.en.style.width=S.energy+"%";el.st.style.width=S.stress+"%";
  el.en.className=S.energy<25?"lo":(S.energy<50?"mid":"");
  el.st.className=S.stress>=70?"lo":(S.stress>=40?"mid":"");
  document.getElementById('lbEn').innerHTML=UI('bolt','⚡')+' Energy';document.getElementById('lbSt').innerHTML=UI('heart','😵')+' Stress';el.enTxt.textContent=S.energy+"/100";el.stTxt.textContent=S.stress+"/100";
  el.face.src=ASSETS[currentFace()];
  el.chips.innerHTML=
    '<span class="chip" data-k="know">'+UI("brain","📖")+' Research '+S.know+'/100</span>'+
    '<span class="chip" data-k="money">'+UI("coins","💰")+' $'+S.money+'</span>'+
    '<span class="chip" data-k="bake">'+UI("bowl","🥐")+' Baking Lv.'+(1+Math.floor(S.bake/3))+'</span>'+
    '<span class="chip" data-k="cookies">'+UI("cookie",ICON("gingerbread","🍪"))+' Cookies '+S.cookies+'</span>'+
    '<span class="chip" data-k="cat">'+UI("cat","🐱")+' Cat bond '+S.cat+'</span>'+
    (S.boost>0?'<span class="chip pl" style="background:#ffd9d2;font-weight:700">📣 Cheer Boost ×1.5 ('+S.boost+' left)</span>':'')+
    (S.hw>0?'<span class="chip pl" style="background:#e3dcf7;font-weight:700">📝 Homework: '+S.hw+' study left</span>':'')+
    (isConfDay()?'<span class="chip pl" style="background:#d8ecff;font-weight:700">🎤 Conference today!</span>':'');
  hudChanges();
}
var HP=null;
function floatAt(target,txt,cls){
  var hud=document.getElementById("hud");if(!target||!hud)return;
  var r=target.getBoundingClientRect(),h=hud.getBoundingClientRect(),d=document.createElement("span");
  d.className="dlt "+cls;d.textContent=txt;d.style.left=(r.left-h.left+r.width/2)+"px";d.style.top=(r.top-h.top)+"px";
  hud.appendChild(d);setTimeout(function(){if(d.parentNode)d.parentNode.removeChild(d);},1150);
}
function hudChanges(){
  var cur={energy:S.energy,stress:S.stress,know:S.know,money:S.money,cookies:S.cookies,cat:S.cat};
  if(HP){
    Object.keys(cur).forEach(function(k){
      var d=cur[k]-HP[k];if(!d)return;
      var good=(k==="stress")?d<0:d>0,txt=(k==="money"?(d>0?"+$":"-$")+Math.abs(d):(d>0?"+":"")+d);
      var tgt=k==="energy"?el.enTxt:k==="stress"?el.stTxt:el.chips.querySelector('[data-k="'+k+'"]');
      if(tgt&&k!=="energy"&&k!=="stress"){tgt.classList.add("flash");}
      floatAt(tgt,txt,good?"g":"b");
    });
  }
  HP=cur;
}

var mode="title";
var dlgQueue=[], dlgDone=null, dlgPortrait=null, sceneKeep=false;
function say(lines,done,portrait){
  dlgQueue=(Array.isArray(lines)?lines:[lines]).slice();dlgDone=done||null;dlgPortrait=portrait||null;
  mode="dialog";el.menu.style.display="none";el.hint.style.display="none";nextLine();
}
var typeTimer=null,typeFin=null;
function finishType(){if(typeFin)typeFin();}
function startType(node){
  var w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT),n,list=[];
  while((n=w.nextNode()))list.push({n:n,a:Array.from(n.nodeValue),i:0});
  list.forEach(function(o){o.n.nodeValue="";});
  var li=0;
  typeFin=function(){clearInterval(typeTimer);typeTimer=null;typeFin=null;list.forEach(function(o){o.n.nodeValue=o.a.join("");});};
  typeTimer=setInterval(function(){
    var c=2;
    while(c>0&&li<list.length){var o=list[li];if(o.i>=o.a.length){li++;continue;}o.i++;o.n.nodeValue=o.a.slice(0,o.i).join("");c--;}
    if(li>=list.length)typeFin();
  },24);
}
function advance(){if(typeFin){typeFin();return;}nextLine();}
function speakerOf(line,portrait){
  var m=/^In Ha:\s*/.exec(line);
  if(m)return {tag:"In Ha",cls:"ih",text:line.slice(m[0].length)};
  if(portrait&&/^cheer/.test(portrait))return {tag:"In Ha",cls:"ih",text:line};
  if(portrait&&/^f_/.test(portrait))return {tag:name,cls:"",text:line};
  return {tag:"",cls:"",text:line};
}
function nextLine(){
  finishType();
  if(!dlgQueue.length){
    el.dialog.style.display="none";mode="play";el.dialog.classList.remove("top");
    if(!sceneKeep)scene=null;var d=dlgDone;dlgDone=null;sceneKeep=false;if(d)d();return;
  }
  sfx("blip");el.dialog.style.display="block";el.dialog.classList.toggle("top",!!scene||ending);
  var pt=dlgPortrait?'<img class="pt" alt="" src="'+ASSETS[dlgPortrait]+'">':"";
  var sp=speakerOf(dlgQueue.shift(),dlgPortrait);
  el.dialog.innerHTML='<div class="row">'+pt+'<div class="tb">'+(sp.tag?'<span class="nm '+sp.cls+'">'+sp.tag+'</span><br>':"")+'<span class="tt">'+sp.text.replace(/\n/g,"<br>")+'</span></div></div><small>'+(TOUCH?"Tap ▶":"Space ▶")+'</small>';
  startType(el.dialog.querySelector(".tt"));
}
var menuItems=[], menuSel=0;
function openMenu(title,items){
  menuItems=items;menuSel=0;mode="menu";
  el.menu.innerHTML="<h3>"+title+"</h3>";
  items.forEach(function(it,i){
    var b=document.createElement("button"),pl=parseLabel(it.label);
    if(it.label==="Leave"||!pl.icon&&!pl.badges.length){b.innerHTML=it.label;if(it.label==="Leave")b.className="leave";}
    else{b.innerHTML='<span class="ci">'+pl.icon+'</span><span class="tx"><b>'+pl.title+'</b>'+(pl.badges.length?'<span class="bd">'+pl.badges.map(function(t){return '<i class="'+badgeCls(t)+'">'+t+'</i>';}).join("")+'</span>':"")+'</span>';b.dataset.card="1";}
    b.disabled=!!it.off;
    b.onclick=function(){menuSel=i;chooseMenu();};
    el.menu.appendChild(b);
  });
  el.menu.style.display="block";refreshMenu();
}
function parseLabel(l){
  var icon="",rest=l,m=/^(<img[^>]*>)\s*/.exec(l);
  if(m){icon=m[1];rest=l.slice(m[0].length);}
  else{var m2=/^(\S+)\s+/.exec(l);if(m2&&m2[1].charCodeAt(0)>0x2000){icon=m2[1];rest=l.slice(m2[0].length);}}
  var badges=[],pm=/\s*\(([^()]*)\)\s*$/.exec(rest);
  if(pm){rest=rest.slice(0,pm.index);badges=pm[1].split(/,\s*/);}
  return {icon:icon,title:rest,badges:badges};
}
function badgeCls(t){
  if(/^stress\s*\+/i.test(t))return "b";
  if(/^stress\s*[-−]/i.test(t))return "g";
  if(/night only|you have|time passes/i.test(t))return "";
  if(/^\+/.test(t)||/\+\$/.test(t))return "g";
  if(/^energy\s*[-−]|^\$|ingredients|^[-−]/i.test(t))return "c";
  return "";
}
function refreshMenu(){
  var bs=el.menu.querySelectorAll("button");
  for(var i=0;i<bs.length;i++){var base=bs[i].dataset.card?"card":(bs[i].classList.contains("leave")?"leave":"");bs[i].className=base+(i===menuSel?" sel":"");}
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
  say([XTXT?"Knead the dough, cut out little stars and trees, wait for the oven... the whole place smells like Christmas. 🎄":"Knead the dough, wait for the oven... the whole place smells amazing. 🥐","Made "+n+(XTXT?" Christmas":"")+" cookie"+(n>1?"s":"")+"!"+(S.slot===0?"\n🌅 Morning batch: +1 bonus cookie!":"")+"\n(Stress -12, Energy -15, Ingredients -$10)"+tn()],afterTimed,"p_bake");
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
  popB("x_bubble_heart",CAT.x,CAT.y-38,0.9);
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
    popB("x_bubble_heart",CHEER.x,CHEER.y-66,1.2);
    if(S.cheerDay===S.day){say("In Ha: \"You've got this! I'll keep cheering for you from right here!\" 📣\n(Today's Cheer Boost is already used. A new one comes tomorrow.)",null,"cheer1");return;}
    S.cheerDay=S.day;S.boost=3;S.cheers++;S.energy=Math.min(100,S.energy+15);S.stress=Math.max(0,S.stress-8);
    setFace("f_happy",5000);burst(40);
    say(["In Ha: \"Go, "+name+", go! You can do it! Fight! 📣\"","📣 Cheer Boost activated! Your next 3 study sessions give ×1.5 Research.\n(Energy +15, Stress -8)"],afterAct,"cheer3");
  },
  lib:function(){openMenu("📚 Library",[{label:"📖 Read & write (Energy -20)",fn:doStudy},{label:"Leave"}]);},
  cafe:function(){openMenu("💼 TA / RA Job",[{label:"💼 Work a shift (Energy -25, +$25)",fn:doWork},{label:"Leave"}]);},
  bakery:function(){openMenu("🥐 Bakery",[{label:(XTXT?"🎄 Bake Christmas cookies (Ingredients $10)":ICON("gingerbread","🍪")+" Bake (Ingredients $10)"),fn:doBake},{label:"Leave"}]);},
  hall:function(){
    if(S.know<100){say("🎓 The Defense Hall is still locked.\n(Opens when Research hits 100 and the thesis is ready. You're at "+S.know+"/100.)",null,"f_think");return;}
    say(["The Defense Hall doors swing open. The committee is waiting..."],startEnding,"robe_stand");
  },
  cat:function(){openMenu("🐱 White Cat",[{label:"🤚 Pet the cat",fn:petCat},{label:ICON("gingerbread","🍪")+" Give a treat (you have "+S.cookies+")",fn:giveCookie},{label:"Leave"}]);}
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
    S.baked>0?"The "+S.baked+(XTXT?" Christmas":"")+" cookies you baked fueled the whole lab and the committee too. 🍪":"Next time, bake some celebration cookies for the lab. 🍪",
    S.burn>0?"Some days you had to stop and rest, and that's exactly how you'll last through a PhD.":"Steady, without pushing too hard. That's the best habit for a PhD.",
    "The next chapter is longer and harder, but everything you've built will be cheering you on.\nCongratulations, future Dr. "+name+"! We're rooting for every step ahead. 🎉",
    XTXT?"Merry Christmas, "+name+"! ❄️🎄 May the whole year ahead be as warm as this one."+(XMAS_NOTE?"\n"+XMAS_NOTE:""):null
  ];
  lines=lines.filter(Boolean);
  var fin=function(){mode="end";endDone=true;el.endbtn.style.display="block";};
  say(lines,function(){
    if(!XEND){fin();return;}
    mode="end";giftOn=true;giftT=0;burst(70);
    say(["In Ha: \"Wait, there's one more thing! 🎁\"","In Ha: \"I made this whole journey just for you.\nMerry Christmas, "+name+"! Whatever comes next, I'll keep cheering for you.\" 💌"],fin,"cheer3");
  },"robe_jump");
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
  if(mode==="dialog"){advance();return;}
  if(mode==="menu"){chooseMenu();return;}
  if(mode==="play"&&near){actions[near]();}
}
el.dialog.onclick=function(){if(mode==="dialog")advance();};
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
  endT2++;snowStep();tickPops();if(giftOn)giftT++;
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
  if(P.moving)P.idle=0;else P.idle++;
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
  if(ending){endT++;if(endT%40===0&&confetti.length<260)burst(20);if(giftOn&&endT%55===0)popB("x_bubble_heart",W/2-190,205,1.4);}
  for(var i=confetti.length-1;i>=0;i--){var c=confetti[i];c.x+=c.vx;c.y+=c.vy;c.r+=0.1;if(c.y>H+10)confetti.splice(i,1);}
}
function render(){
  ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height);ctx.setTransform(K,0,0,K,0,0);
  if(!S){R(0,0,W,H,"#a8d583");return;}
  if(MAPART&&!BG)BG=bakeBG();
  if(BG){ctx.drawImage(BG,0,0,W,H);drawGardenLabel();}else{
  for(var r=0;r<ROWS;r++)for(var c=0;c<COLS;c++)drawTile(c,r);
  drawPaths();drawGarden();}
  buildings.forEach(drawBuilding);
  if(isConfDay()){
    var cb=IMG.b_conf;
    if(cb&&cb.naturalWidth){var cw=120,chh=cw*cb.naturalHeight/cb.naturalWidth;shadow(194,424,48);ctx.drawImage(cb,134,426-chh,cw,chh);}
    ctx.font="bold 13px sans-serif";ctx.textAlign="center";ctx.fillStyle="rgba(255,250,241,.92)";ctx.fillRect(194-52,428,104,16);ctx.fillStyle="#3b2a22";ctx.fillText("🎤 Conference",194,440);
  }
  var ents=[];
  trees.forEach(function(t){ents.push({y:t[1]*T+T,f:function(){shadow(t[0]*T+16,t[1]*T+T-3,14);var xm=XART&&XMAP[t[2]];sprH(xm?xm[0]:t[2],t[0]*T+16,t[1]*T+T+2,xm?xm[1]:62);}});});
  if(XMAS&&XTREE)ents.push({y:XT.r*T+T,f:function(){xmasTree(XT.c*T+16,XT.r*T+T+2);}});
  decor.forEach(function(d){ents.push({y:d.r*T+T,f:function(){var xm=XART&&XMAP[d.n];sprH(xm?xm[0]:d.n,d.c*T+16,d.r*T+T,xm?xm[1]:d.h);}});});
  if(cheerHere())ents.push({y:CHEER.y,f:function(){cheerSprite(CHEER.x,CHEER.y,CHEER.t,S.cheerDay!==S.day);if(S.cheerDay!==S.day){var ex=IMG.x_bubble_exclaim;if(XART&&ex&&ex.naturalWidth){ctx.drawImage(ex,CHEER.x-12,CHEER.y-84+Math.sin(CHEER.t/10)*3,24,24*ex.naturalHeight/ex.naturalWidth);}else{ctx.font="18px sans-serif";ctx.textAlign="center";ctx.fillText("📣",CHEER.x,CHEER.y-62+Math.sin(CHEER.t/10)*3);}}}});
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
      var xb=XEND&&IMG.x_banner_blank&&IMG.x_banner_blank.naturalWidth;
      if(xb){
        var bw=280,bh=bw*IMG.x_banner_blank.naturalHeight/IMG.x_banner_blank.naturalWidth,bb=4+bh+Math.sin(endT/24)*2;
        sprW("x_banner_blank",W/2,bb,bw);
        var bt="Merry Christmas!",fs=22;ctx.font="bold "+fs+"px Georgia,serif";
        while(ctx.measureText(bt).width>bw*0.54&&fs>11){fs--;ctx.font="bold "+fs+"px Georgia,serif";}
        ctx.fillStyle="#b3262e";ctx.textAlign="center";ctx.fillText(bt,W/2,bb-bh*0.40);
        ctx.fillStyle="#3b2a22";ctx.font="bold 19px sans-serif";
        ctx.strokeText("🎓 Congratulations, Future Doctor! 🎓",W/2,134);
        ctx.fillText("🎓 Congratulations, Future Doctor! 🎓",W/2,134);
      }else{
        ctx.strokeText("🎓 Congratulations, Future Doctor! 🎓",W/2,48);
        ctx.fillText("🎓 Congratulations, Future Doctor! 🎓",W/2,48);
        ctx.font="bold 16px sans-serif";
        ctx.strokeText(name+"'s Road to the PhD",W/2,76);ctx.fillText(name+"'s Road to the PhD",W/2,76);
      }
      if(XMAS&&XTXT){ctx.fillStyle="#c0392b";ctx.font="bold 18px sans-serif";ctx.strokeText("🎄 Merry Christmas! 🎄",W/2,104);ctx.fillText("🎄 Merry Christmas! 🎄",W/2,104);}
    }
    var ph=Math.floor(endT/100)%3, cx=W/2, by=398;
    if(giftOn)drawGifts(by+6);
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
  drawPops();
  if(XMAS&&XSNOW&&!scene)drawSnow();
  confetti.forEach(function(c){ctx.save();ctx.translate(c.x,c.y);ctx.rotate(c.r);ctx.fillStyle=c.c;ctx.fillRect(-c.s/2,-c.s/2,c.s,c.s*1.6);ctx.restore();});
}
/* ---------- chiptune music (WebAudio, no files) ---------- */
var AC=null, master=null, muted=false, curTrack=null, nextT=0, stepI=0, timer=null, noiseBuf=null;
try{muted=localStorage.getItem("gradgame_mute")==="1";}catch(e){}
var NOTE={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
function mf(s){if(!s||s==="-")return 0;var m=/^([A-G])(#?)(\d)$/.exec(s);var n=NOTE[m[1]]+(m[2]?1:0)+12*(+m[3]+1);return 440*Math.pow(2,(n-69)/12);}
function PN(s){return s.split(/\s+/).map(mf);}
function M(){return Array.prototype.slice.call(arguments).join(" ");}
var TRACKS={
 xmas:{bpm:126,lead:PN(M("E5 - E5 - E5 - - -","E5 - E5 - E5 - - -","E5 - G5 - C5 - D5 -","E5 - - - - - - -","F5 - F5 - F5 - F5 -","F5 - E5 - E5 - E5 E5","E5 - D5 - D5 - E5 -","D5 - - - G5 - - -","E5 - E5 - E5 - - -","E5 - E5 - E5 - - -","E5 - G5 - C5 - D5 -","E5 - - - - - - -","F5 - F5 - F5 - F5 -","F5 - E5 - E5 - E5 E5","G5 - G5 - F5 - D5 -","C5 - - - - - - -")),
      bass:PN(M("C3 - - - C3 - - -","C3 - - - C3 - - -","C3 - - - G2 - - -","C3 - - - C3 - - -","F3 - - - F3 - - -","C3 - - - C3 - - -","G2 - - - G2 - - -","G2 - - - G2 - - -","C3 - - - C3 - - -","C3 - - - C3 - - -","C3 - - - G2 - - -","C3 - - - C3 - - -","F3 - - - F3 - - -","C3 - - - C3 - - -","G2 - - - G2 - - -","C3 - - - - - - -")),
      lw:"square",lg:0.10,bw:"triangle",bg:0.22,hat:true,len:0.6},
 silent:{bpm:84,lead:PN(M("G4 - - A4 G4 -","E4 - - - - -","G4 - - A4 G4 -","E4 - - - - -","D5 - - D5 - -","B4 - - - - -","C5 - - C5 - -","G4 - - - - -","A4 - - A4 - C5","B4 - A4 - - -","G4 - - A4 G4 -","E4 - - - - -","A4 - - A4 - C5","B4 - A4 - - -","G4 - - A4 G4 -","E4 - - - - -","D5 - - D5 - F5","D5 - B4 - - -","C5 - - E5 - -","C5 - G4 - E4 -","F4 - D4 - - -","C4 - - - - -")),
      bass:PN(M("C3 - E3 - G3 -","C3 - E3 - G3 -","C3 - E3 - G3 -","C3 - E3 - G3 -","G2 - B2 - D3 -","G2 - B2 - D3 -","C3 - E3 - G3 -","C3 - E3 - G3 -","F3 - A3 - C4 -","G2 - B2 - D3 -","C3 - E3 - G3 -","C3 - E3 - G3 -","F3 - A3 - C4 -","G2 - B2 - D3 -","C3 - E3 - G3 -","C3 - E3 - G3 -","G2 - B2 - D3 -","G2 - B2 - D3 -","C3 - E3 - G3 -","C3 - E3 - G3 -","F3 - A3 - C4 -","C3 - - - - -")),
      lw:"triangle",lg:0.2,bw:"sine",bg:0.28,hat:false,len:1.4},
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
    if((curTrack==="night"||curTrack==="silent")&&T_.lead[i])tone(T_.lead[i],nextT+sd*1.5,sd*2,T_.lw,T_.lg*0.35);
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
  var want=(mode==="title"||!S)?(XMAS?"xmas":"day"):ending?"end":(S.slot===3?(XMAS?"silent":"night"):(XMAS?"xmas":"day"));
  setTrack(want);
}
document.addEventListener("visibilitychange",function(){if(!AC)return;if(document.hidden)AC.suspend();else if(!muted)AC.resume();});
document.getElementById("muteBtn").onclick=function(e){e.stopPropagation();audioInit();setMuted(!muted);};
setMuted(muted);

function loop(){update();render();musicTick();requestAnimationFrame(loop);}

/* ---------- start ---------- */
function startGame(fresh){
  if(!ready)return;
  audioInit();
  var v=document.getElementById("nameIn").value.trim();
  var d=load();
  if(fresh!==true&&d&&d.S&&!d.S.ended){name=d.name||v||"Ayoub";S=Object.assign(newState(),d.S);}
  else{name=v||"Ayoub";S=newState();try{localStorage.removeItem("gradgame_en");}catch(e){}}
  spawnCheer();
  el.title.style.display="none";updateHUD();mode="play";
  if(S.day===1&&S.know===0&&S.energy===100){
    say(["Hey, "+name+"! You're a master's student with a PhD in sight. Let's get this thesis done."+(XTXT?"\n🎄 It's Christmas season, and snow is falling on campus. ❄️":""),"📚 Read and write at the Library, 💼 earn a stipend at the TA / RA job, 🥐 bake at the Bakery.\nWhen you're worn out, pet the 🐱 white cat or have some 🍵 tea. Look out for 📣 In Ha, your biggest cheerleader, for a boost, and sleep at 🏠 Home when night falls.","Each study, job or bake takes a chunk of the day: 🌅 → ☀️ → 🌇 → 🌙. If Stress hits 100 you'll burn out, so watch it! Reach Research 100 and the 🎓 Defense Hall opens."],null,"p_travel");
  }
}
document.getElementById("startBtn").onclick=function(){startGame(false);};
document.getElementById("newBtn").onclick=function(){startGame(true);};
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
