const priorLoad = document.getElementById('priorLoadnotification');
const loadBtn = document.querySelector('buttonInstall');
const appLoad = document.getElementById('appLoaded');

window.addEventListener('priorLoad', (event) => {
    window.delayedstart = event;
    loadBtn.classList.toggle('hidden', false);
  });

loadBtn.addEventListener('click', async () => {
  const kickOffEvent = window.delayedstart;
  if (!kickOffEvent) {
   return;
  }

  kickOffEvent.start();

  window.delayedstart = null;
  
  loadBtn.classList.toggle('hidden', true);
});

window.addEventListener('appLoad', (event) => {

  window.delayedstart = null;
}); 
