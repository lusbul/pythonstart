'use strict';
window.PythonProgress = (() => {
 const key='pythonstart-progress-v1';
 let data={version:1,name:'',topics:{},legacy:{}};
 let persistent=true;
 try {const saved=JSON.parse(localStorage.getItem(key));if(saved&&saved.version===1&&saved.topics&&saved.legacy)data=saved;}catch{persistent=false;}
 function save(){try{localStorage.setItem(key,JSON.stringify(data));}catch{persistent=false;}if(!persistent&&!document.querySelector('.storage-warning')){const p=document.createElement('p');p.className='storage-warning';p.textContent='Браузер не дозволяє зберігати прогрес. Збережіть PDF до закриття сторінки.';(document.querySelector('main')||document.body).prepend(p);}}
 function topic(id){return data.topics[id]||(data.topics[id]={started:new Date().toISOString(),tasks:[0,1,2].map(()=>({done:false,attempts:0,history:[]})),draft:{}});}
 function check(id,index,response,correct){const t=topic(id).tasks[index];if(t.done)return;t.attempts++;t.history.push({response,correct,time:new Date().toISOString()});t.done=correct;if(correct)t.completed=new Date().toISOString();save();}
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function printReport(markup){let area=document.getElementById('pdf-report');if(!area){area=document.createElement('div');area.id='pdf-report';area.className='print-only';document.body.append(area);}area.innerHTML=markup;document.body.classList.add('printing-report');window.print();}
 window.addEventListener('afterprint',()=>document.body.classList.remove('printing-report'));
 return {data,save,topic,check,esc,printReport};
})();
