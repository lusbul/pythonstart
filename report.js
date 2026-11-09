'use strict';
(() => {
const P=PythonProgress,E=P.esc,$=id=>document.getElementById(id),sel=$('scope');
PYTHON_TOPICS.forEach(t=>{const o=document.createElement('option');o.value=t.id;o.textContent=t.title;sel.append(o);});
const requested=new URLSearchParams(location.search).get('topic');if(PYTHON_TOPICS.some(t=>t.id===requested))sel.value=requested;
$('report-name').value=P.data.name;$('reflection').value=P.data.reflection||'';
function render(){const scope=sel.value,topics=PYTHON_TOPICS.filter(t=>scope==='all'||t.section===scope||t.id===scope);let completed=0,attempts=0;
const table=topics.map(t=>{const tasks=P.data.topics[t.id]?.tasks||[];const n=tasks.filter(s=>s.done).length,a=tasks.reduce((v,s)=>v+s.attempts,0);completed+=n;attempts+=a;return `<tr><td>${E(t.title)}</td><td>${n} / 3</td><td>${a}</td></tr>`;}).join('');
const details=topics.filter(t=>P.data.topics[t.id]).map(t=>{const s=P.data.topics[t.id];return `<section><h2>${E(t.title)}</h2>${s.tasks.map((x,i)=>`<div class="report-entry"><b>${i+1}. ${['Прогноз результату','Вибір рішення','Конструктор програми'][i]} — ${x.done?'виконано':'не виконано'}</b><p>Спроб: ${x.attempts}${x.completed?' · Завершено: '+E(new Date(x.completed).toLocaleString('uk-UA')):''}</p>${x.history.map((h,j)=>`<p>Спроба ${j+1}: ${h.correct?'правильно':'потребує виправлення'}</p><pre>${E(h.response)}</pre>`).join('')||'<p>Відповідь ще не перевірялася.</p>'}</div>`).join('')}${s.draft?`<h3>Нові практики та квест</h3>${[0,1].map(i=>`<div class="report-entry"><b>Практика ${i+1}</b>${s.draft['modernRun'+i]?`<pre>${E(s.draft['modernRun'+i].code)}</pre><p>Результат:</p><pre>${E(s.draft['modernRun'+i].output)}</pre>`:'<p>Ще не запускали</p>'}</div>`).join('')}<p>Конструктор: ${s.draft.modernDragDone?'виконано':'ще не виконано'}</p><p>Квест: ${s.draft.modernQuestDone?'виконано':'ще не виконано'}</p><p>${E(s.draft.modernNote||'')}</p>`:''}</section>`;}).join('');
let forEvidence='';
if(topics.some(t=>t.id==='loops-1')){
 try{const f=JSON.parse(localStorage.getItem('pythonstart-for-lab-v1')||'null');if(f){
 forEvidence=`<section class="report-entry"><h2>Цикл for - симулятор і мініпроєкт</h2><p><b>Симулятор:</b> range(${E(f.start)}, ${E(f.stop)}, ${E(f.step)}). Виконано ${E(f.position)} із ${E(f.iterations)} повторень.</p><pre>${E(f.output||'Цикл ще не виконували')}</pre><h3>Робот-художник</h3><p>Повторень: ${E(f.sides)}; кут: ${E(f.angle)}°; довжина кроку: ${E(f.length)}.</p><pre>for i in range(${E(f.sides)}):\n    forward(${E(f.length)})\n    right(${E(f.angle)})</pre>${f.image?`<img src="${f.image}" alt="Малюнок робота-художника" style="display:block;max-width:100%;width:440px;height:auto;margin:10px auto">`:''}<p><b>Пояснення учня:</b> ${E(f.explanation||'Ще не заповнено')}</p></section>`;
 }}catch(e){console.warn('Не вдалося прочитати результати лабораторії',e)}
}
let whileEvidence='';
if(topics.some(t=>t.id==='loops-2')){
 try{const w=JSON.parse(localStorage.getItem('pythonstart-while-lab-v1')||'null');if(w){
 const g=w.game||{};
 whileEvidence=`<section class="report-entry"><h2>Цикл while - симулятор, текстова гра та ШІ</h2><h3>Симулятор</h3><pre>x = ${E(w.start)}\nwhile x < ${E(w.limit)}:\n    print(x)\n    x += ${E(w.delta)}</pre><p>Виконано повторень: ${E(w.iterations)}. Поточне x: ${E(w.x)}.</p><pre>${E(w.output||'Ще немає виведення')}</pre><p><b>Пояснення:</b> ${E(w.simNote||'Не заповнено')}</p><h3>Текстова пригода</h3><p>Команди: ${E((g.moves||[]).join(' → ')||'Ще не грали')}</p><p>Ключ: ${g.key?'знайдено':'не знайдено'}; результат: ${E(g.result||'не завершено')}</p><p>${E(w.gameNote||'Пояснення ще немає')}</p><h3>ШІ-майстерня</h3><p>Світ: ${E(w.world)}. Механіка: ${E(w.mechanic)}.</p><p><b>Промпт:</b></p><pre>${E(w.prompt||'Не складено')}</pre><p><b>Код текстової гри:</b></p><pre>${E(w.code||'Код ще не додано')}</pre><p><b>Перевірка та вдосконалення:</b> ${E(w.aiNote||'Не заповнено')}</p></section>`;
 }}catch(e){console.warn('Не вдалося прочитати результати while',e)}
}
const legacy=scope==='all'?Object.values(P.data.legacy).map(x=>`<div class="report-entry"><h3>${E(x.title)}</h3><p>${E(x.summary)}</p><p>Зафіксовано: ${E(new Date(x.time).toLocaleString('uk-UA'))}</p><pre>${E(x.evidence)}</pre></div>`).join(''):'';
$('report-area').innerHTML=`<h1>Інтерактивний Python · звіт</h1><p>Учасник / учасниця: ${E(P.data.name.trim()||'Не вказано')}</p><p>Обсяг: ${E(sel.selectedOptions[0].textContent)} · Дата: ${E(new Date().toLocaleString('uk-UA'))}</p><p><b>Виконано ${completed} із ${topics.length*3} завдань. Перевірених спроб: ${attempts}.</b></p><p>Це звіт про проходження тренажерів; кількість спроб не перетворюється на шкільну оцінку.</p><div class="table-wrap"><table class="report-table"><thead><tr><th>Тема</th><th>Виконано</th><th>Спроби</th></tr></thead><tbody>${table}</tbody></table></div>${details}${forEvidence}${whileEvidence}${legacy?'<h2>Наявні квести · останні зафіксовані результати</h2>'+legacy:''}<h2>Моя рефлексія</h2><p style="white-space:pre-wrap">${E(P.data.reflection||'Не заповнено')}</p><p>Джерело: власні відповіді у навчальному сайті. Прогрес і повторні спроби зафіксовано локально у браузері.</p>`;
}
$('report-name').oninput=()=>{P.data.name=$('report-name').value;P.save();render();};$('reflection').oninput=()=>{P.data.reflection=$('reflection').value;P.save();render();};sel.onchange=render;
$('download-pdf').onclick=async()=>{
 render();const status=$('report-status'),button=$('download-pdf');
 if(typeof html2pdf!=='function'){status.textContent='Не вдалося завантажити модуль PDF. Скористайтеся кнопкою «Друк / Зберегти як PDF».';return;}
 button.disabled=true;status.textContent='Створюємо PDF. Зачекайте…';
 const t=PYTHON_TOPICS.find(x=>x.id===sel.value);
 const filename='Start_Python_'+(t?t.id:sel.value)+'_'+new Date().toISOString().slice(0,10)+'.pdf';
 try{
  const element=$('report-area');
  await html2pdf().set({margin:[12,12,12,12],filename,image:{type:'jpeg',quality:.96},html2canvas:{scale:1.5,useCORS:true,backgroundColor:'#ffffff',windowWidth:900},jsPDF:{unit:'mm',format:'a4',orientation:'portrait'},pagebreak:{mode:['css','legacy'],avoid:['.report-entry','pre','tr']}}).from(element).save();
  status.textContent='PDF підготовлено. Перевірте папку завантажень Вашого пристрою.';
 }catch(error){status.textContent='Автоматичне збереження не вдалося. Скористайтеся кнопкою «Друк / Зберегти як PDF».';console.error(error)}finally{button.disabled=false}
};
$('print-report').onclick=()=>{render();P.printReport($('report-area').innerHTML);};
$('save-json').onclick=()=>{const u=URL.createObjectURL(new Blob([JSON.stringify(P.data,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=u;a.download='pythonstart-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};render();
})();
