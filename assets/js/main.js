(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
  function $(i){return document.getElementById(i);}
  // 1. Colour matcher
  var HEX={navy:'#1F2E4A',camel:'#B8875A',olive:'#6B7444',burgundy:'#6E1F2E',blush:'#EBC2BA',cobalt:'#1F4FB3',mustard:'#D29B1E',grey:'#9A9A9A',black:'#1A1A1A',white:'#FFFFFF',cream:'#F2EADB',rust:'#B5543C',tan:'#C9A27A',pink:'#E8A3B5',denim:'#4A6A94',sage:'#8FA58A',lavender:'#B9AED8',red:'#C0392B',chocolate:'#5A3A2A',charcoal:'#3A3A3D',sky:'#A9C8E8',terracotta:'#C2653F'};
  var CM={navy:{calm:['white','camel','grey'],bold:['rust','mustard','pink'],soft:['sky','denim','cream']},camel:{calm:['cream','navy','black'],bold:['burgundy','cobalt','olive'],soft:['tan','white','chocolate']},
    olive:{calm:['cream','tan','white'],bold:['rust','mustard','pink'],soft:['sage','camel','chocolate']},burgundy:{calm:['grey','navy','camel'],bold:['pink','mustard','olive'],soft:['blush','chocolate','cream']},
    blush:{calm:['grey','white','camel'],bold:['burgundy','cobalt','red'],soft:['cream','lavender','tan']},cobalt:{calm:['white','grey','navy'],bold:['mustard','pink','camel'],soft:['sky','denim','white']},
    mustard:{calm:['navy','denim','cream'],bold:['lavender','burgundy','cobalt'],soft:['camel','tan','olive']},grey:{calm:['navy','white','black'],bold:['pink','mustard','cobalt'],soft:['charcoal','lavender','cream']},
    black:{calm:['white','camel','grey'],bold:['red','cobalt','pink'],soft:['charcoal','chocolate','cream']},white:{calm:['navy','black','denim'],bold:['red','cobalt','mustard'],soft:['cream','sand','sky']}};
  HEX.sand='#DCC9A8';
  var WHY={calm:'A calm, classic palette: neutrals and gentle contrasts that always look put together.',bold:'Confident contrast: these partners sit across the colour wheel, so the outfit feels lively and intentional.',soft:'A tonal, soft palette: neighbouring shades create a quiet, expensive-looking outfit.'};
  var IDEA={navy:'a navy knit',camel:'a camel coat',olive:'olive trousers',burgundy:'a burgundy sweater',blush:'a blush blouse',cobalt:'a cobalt shirt',mustard:'a mustard cardigan',grey:'grey wool trousers',black:'a black dress or trousers',white:'a white shirt'};
  var cc=$('cm-c'),cmm=$('cm-m');
  function nm(k){return k.charAt(0).toUpperCase()+k.slice(1);}
  function colour(){if(!cc)return;var k=cc.value,P=CM[k][cmm.value];
    $('cm-t').textContent=nm(k)+' pairs with';
    $('cm-sw').innerHTML=[k].concat(P).map(function(x,i){return '<div><i style="background:'+HEX[x]+'"></i><small>'+(i?nm(x):nm(x)+' (yours)')+'</small></div>';}).join('');
    $('cm-p').innerHTML=P.map(function(x){return '<li><span><i style="background:'+HEX[k]+'"></i><i style="background:'+HEX[x]+'"></i></span>'+nm(k)+' + '+x+'</li>';}).join('');
    $('cm-n').innerHTML='<b>Try:</b> '+IDEA[k]+' with '+P[0]+' as the main partner and a touch of '+P[2]+' in a scarf, bag or shoe. '+WHY[cmm.value];}
  if(cc){[cc,cmm].forEach(function(x){x.addEventListener('change',colour);});colour();}
  // 2. Dress code decoder
  var DC={bt:{n:'Black tie',s:'The most formal evening dress code you&#8217;re likely to meet.',w:['Floor-length gown or very elegant midi dress','Dinner suit (tuxedo) with bow tie','Patent or polished leather shoes, elegant heels'],a:'Short casual dresses, business suits, trainers',c:'Check the fit of formalwear a week ahead and book alterations early.'},
    sf:{n:'Semi-formal',s:'Dressy but not floor-length; elegant and a little fun.',w:['Knee or midi-length dress, or a dressy jumpsuit','Dark suit, tie optional, or a smart blazer and trousers','Heels, smart flats or polished shoes'],a:'Jeans, sportswear, full black tie',c:'One statement piece, such as a bold colour or sparkle, is plenty.'},
    bf:{n:'Business formal',s:'Traditional office formal for interviews, presentations and formal meetings.',w:['Matching suit in navy, grey or charcoal','Shirt or blouse in white or pale blue','Closed-toe leather shoes'],a:'Bright prints, casual knits, trainers',c:'Press your suit and check sleeves and hem lengths before the day.'},
    bc:{n:'Business casual',s:'Polished but relaxed everyday office wear.',w:['Chinos or tailored trousers, or a knee-length skirt','Shirt, blouse or fine knit','Loafers, flats or clean leather shoes'],a:'Ripped jeans, hoodies, flip-flops',c:'A blazer instantly lifts business casual for meetings.'},
    sc:{n:'Smart casual',s:'Somewhere between the office and the weekend: neat, relaxed and considered.',w:['Dark jeans or chinos, or a casual dress','Shirt, fine knit or a smart T-shirt','Minimal trainers, loafers or ankle boots'],a:'Sportswear, beachwear, very formal suits',c:'If unsure, add a blazer or smart jacket you can remove.'},
    cs:{n:'Casual',s:'Comfortable everyday clothes, but still clean and cared for.',w:['Jeans, shorts or relaxed trousers','T-shirts, sweatshirts or casual shirts','Trainers or sandals'],a:'Anything stained, creased or worn-out',c:'Even casual outfits look better with a good fit and clean shoes.'}};
  var EV={day:'For daytime, lighter colours and fabrics such as cotton and linen work well.',eve:'For evening, darker colours, richer fabrics and a little shine feel right.'};
  var dc=$('dc-c'),dt=$('dc-t');
  function decode(){if(!dc)return;var D=DC[dc.value];$('dc-h').textContent=D.n+(dt.value==='eve'?', evening':', daytime');$('dc-s').innerHTML=D.s;
    $('dc-l').innerHTML=[['Wear',D.w[0]],['Top half',D.w[1]],['Shoes',D.w[2]],['Avoid',D.a]].map(function(x){return '<li><b>'+x[0]+'</b><span>'+x[1]+'</span></li>';}).join('');
    $('dc-n').innerHTML='<b>Checklist:</b> '+D.c+' '+EV[dt.value];}
  if(dc){[dc,dt].forEach(function(x){x.addEventListener('change',decode);});decode();}
  // 3. Pattern mixer
  var BOLD={stripe:1,check:2,dot:1,floral:3,animal:3,geo:2},NM={stripe:'stripes',check:'checks',dot:'polka dots',floral:'florals',animal:'animal print',geo:'geometric print'},SZ={s:1,m:2,l:3};
  var pa=$('pm-a'),pas=$('pm-as'),pb=$('pm-b'),pbs=$('pm-bs'),pc=$('pm-c');
  function mix(){if(!pa)return;var a=pa.value,b=pb.value,sa=SZ[pas.value],sb=SZ[pbs.value],score=55,why=[];
    if(a===b){score+=sa!==sb?5:-20;why.push(sa!==sb?'Same pattern in different sizes can work, like a wide and a fine stripe.':'The same pattern at the same size competes for attention.');}
    else why.push('Two different patterns add interest.');
    if(sa!==sb){score+=20;why.push('Different sizes help one pattern lead and the other support.');}else{score-=10;why.push('Similar sizes make the patterns fight each other.');}
    if(pc.value==='yes'){score+=20;why.push('A shared colour ties the outfit together.');}else{score-=15;why.push('Without a shared colour the look can feel disconnected.');}
    if(BOLD[a]+BOLD[b]>=5){score-=12;why.push('Both prints are busy, so keep everything else plain.');}
    if((a==='stripe'||b==='stripe')&&a!==b)score+=5;
    score=Math.max(5,Math.min(98,score));
    var v=score>=80?'Great match':score>=60?'Works well':score>=40?'Proceed with care':'Likely to clash';
    $('pm-v').textContent=v;$('pm-m').style.width=score+'%';
    $('pm-e').textContent=NM[a].charAt(0).toUpperCase()+NM[a].slice(1)+' + '+NM[b]+': '+why.join(' ');
    var tip=score>=80?'Keep shoes and accessories in a solid colour from the prints.':score>=60?'Add a solid layer, like a plain jacket, between the two prints to give them space.':'Try changing one pattern&#8217;s size, or pick pieces that share a colour.';
    $('pm-t').innerHTML='<b>Stylist tip:</b> '+tip;}
  if(pa){[pa,pas,pb,pbs,pc].forEach(function(x){x.addEventListener('change',mix);});mix();}
  // contact & cookies
  var cf=$('cform');
  if(cf)cf.addEventListener('submit',function(ev){ev.preventDefault();if(cf.website.value)return;if(!cf.checkValidity()){cf.reportValidity();return;}
    var body='Name: '+cf.name.value+'\nEmail: '+cf.email.value+'\nTopic: '+cf.topic.value+'\n\n'+cf.message.value;
    window.location.href='mailto:'+cf.dataset.to+'?subject='+encodeURIComponent('Website enquiry: '+cf.topic.value)+'&body='+encodeURIComponent(body);
    var s=$('fm');s.hidden=false;s.textContent='Your email app should now open with your message ready to send. If it doesn’t, please email us directly at '+cf.dataset.to+'.';});
  var c=$('cookie'),v=null;try{v=localStorage.getItem('mo_cookie');}catch(e){}
  if(c&&!v)c.classList.add('show');
  document.querySelectorAll('[data-cookie]').forEach(function(x){x.addEventListener('click',function(){try{localStorage.setItem('mo_cookie',x.dataset.cookie);}catch(e){}c.classList.remove('show');});});
  var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
