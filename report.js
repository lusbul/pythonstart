'use strict';
(() => {
const P=PythonProgress,E=P.esc,$=id=>document.getElementById(id),sel=$('scope');
PYTHON_TOPICS.forEach(t=>{const o=document.createElement('option');o.value=t.id;o.textContent=t.title;sel.append(o);});
const requested=new URLSearchParams(location.search).get('topic');if(PYTHON_TOPICS.some(t=>t.id===requested))sel.value=requested;
$('report-name').value=P.data.name;$('reflection').value=P.data.reflection||'';
function render(){const scope=sel.value,topics=PYTHON_TOPICS.filter(t=>scope==='all'||t.section===scope||t.id===scope);let completed=0,attempts=0;
const table=topics.map(t=>{const tasks=P.data.topics[t.id]?.tasks||[];const n=tasks.filter(s=>s.done).length,a=tasks.reduce((v,s)=>v+s.attempts,0);completed+=n;attempts+=a;return `<tr><td>${E(t.title)}</td><td>${n} / 3</td><td>${a}</td></tr>`;}).join('');
const details=topics.filter(t=>P.data.topics[t.id]).map(t=>{const s=P.data.topics[t.id];return `<section><h2>${E(t.title)}</h2>${s.tasks.map((x,i)=>`<div class="report-entry"><b>${i+1}. ${['Прогноз результату','Вибір рішення','Конструктор програми'][i]} — ${x.done?'виконано':'не виконано'}</b><p>Спроб: ${x.attempts}${x.completed?' · Завершено: '+E(new Date(x.completed).toLocaleString('uk-UA')):''}</p>${x.history.map((h,j)=>`<p>Спроба ${j+1}: ${h.correct?'правильно':'потребує виправлення'}</p><pre>${E(h.response)}</pre>`).join('')||'<p>Відповідь ще не перевірялася.</p>'}</div>`).join('')}</section>`;}).join('');
const legacy=scope==='all'?Object.values(P.data.legacy).map(x=>`<div class="report-entry"><h3>${E(x.title)}</h3><p>${E(x.summary)}</p><p>Зафіксовано: ${E(new Date(x.time).toLocaleString('uk-UA'))}</p><pre>${E(x.evidence)}</pre></div>`).join(''):'';
$('report-area').innerHTML=`<h1>Інтерактивний Python · звіт</h1><p>Учасник / учасниця: ${E(P.data.name.trim()||'Не вказано')}</p><p>Обсяг: ${E(sel.selectedOptions[0].textContent)} · Дата: ${E(new Date().toLocaleString('uk-UA'))}</p><p><b>Виконано ${completed} із ${topics.length*3} завдань. Перевірених спроб: ${attempts}.</b></p><p>Це звіт про проходження тренажерів; кількість спроб не перетворюється на шкільну оцінку.</p><div class="table-wrap"><table class="report-table"><thead><tr><th>Тема</th><th>Виконано</th><th>Спроби</th></tr></thead><tbody>${table}</tbody></table></div>${details}${legacy?'<h2>Наявні квести · останні зафіксовані результати</h2>'+legacy:''}<h2>Моя рефлексія</h2><p style="white-space:pre-wrap">${E(P.data.reflection||'Не заповнено')}</p><p>Джерело: власні відповіді у навчальному сайті. Прогрес і повторні спроби зафіксовано локально у браузері.</p>`;
}
$('report-name').oninput=()=>{P.data.name=$('report-name').value;P.save();render();};$('reflection').oninput=()=>{P.data.reflection=$('reflection').value;P.save();render();};sel.onchange=render;
$('print-report').onclick=()=>{render();P.printReport($('report-area').innerHTML);};
$('save-json').onclick=()=>{const u=URL.createObjectURL(new Blob([JSON.stringify(P.data,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=u;a.download='pythonstart-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};render();
})();
