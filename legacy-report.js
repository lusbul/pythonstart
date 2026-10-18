'use strict';
(() => {
 const P=PythonProgress, E=P.esc,file=location.pathname.split('/').pop();
 function snapshot(){
 if(file==='python_intro_trainer.html')return {title:'Перший тренажер',summary:`Виконані дії: ${Array.from(done).join(', ')||'ще немає'}.`,evidence:document.getElementById('editor').value+'\n\n'+document.getElementById('asciiCodeText').textContent+'\n\n'+document.getElementById('bioCode').textContent};
 if(file==='python_quest_5.html')return {title:'РобоКвест',summary:`Виконано ${completed} із 5 кроків.`,evidence:'Учасник: '+player+'\nКроки: print, input, змінні, типи даних, арифметика.'};
 if(file==='python-dragon-quest.html')return {title:'Пригоди дракона',summary:`Виконано ${completed.filter(Boolean).length} із 3 місій.`,evidence:missions.map((m,i)=>`${m.title}: ${completed[i]?'виконано':'не виконано'}\n${programs[i].map(j=>m.blocks[j].code).join('\n')}`).join('\n\n')+'\n\nРефлексія: '+document.getElementById('reflection').value};
 if(file==='station_if.html')return {title:'Станція IF',summary:`Відновлено ${state.filter(x=>x.done).length} із 6 систем.`,evidence:missions.map((m,i)=>`${m.title}: ${state[i].done?'виконано':'не виконано'}\nУмова: ${state[i].choice===''?'не обрано':m.options[Number(state[i].choice)]}`).join('\n\n')};
 return {title:'День рішень',summary:document.getElementById('status').textContent,evidence:document.getElementById('output').innerText};
 }
 const box=document.createElement('aside');box.className='legacy-report';box.innerHTML='<b>📝 Звіт про проходження</b><p>Збережіть поточний результат у PDF. До спільного звіту автоматично потрапляє останній зафіксований стан цього квесту.</p><p><button type="button" id="legacy-pdf">Зберегти звіт як PDF / Друк</button> · <a href="report.html">Спільний звіт курсу</a> · <a href="index.html">До розділів</a></p><p id="legacy-status" role="status"></p>';document.body.append(box);
 function capture(){try{const s=snapshot();s.time=new Date().toISOString();P.data.legacy[file]=s;P.save();return s;}catch{return null;}}
 document.getElementById('legacy-pdf').onclick=()=>{const s=capture();if(!s){document.getElementById('legacy-status').textContent='Не вдалося сформувати звіт. Спробуйте ще раз.';return;}const name=prompt('Ім’я для звіту (необов’язково):',P.data.name);if(name===null)return;P.data.name=name.slice(0,100);P.save();P.printReport(`<h1>${E(s.title)} · звіт</h1><p>Учасник / учасниця: ${E(P.data.name||'Не вказано')}</p><p>${E(new Date().toLocaleString('uk-UA'))}</p><h2>${E(s.summary)}</h2><pre>${E(s.evidence)}</pre><p>Звіт відображає поточний стан. Для попередніх квестів історія спроб не збирається.</p>`);};
 document.addEventListener('click',()=>setTimeout(capture,0));document.addEventListener('change',capture);window.addEventListener('pagehide',capture);capture();
})();
