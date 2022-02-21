//add getElementbyId for notification prior to app being loaded and when app is loaded.
//added query selector for the buttonInstall used in index.html

const loadNotice = document.getElementById('priorLoadNotice');
const loadBtn = document.querySelector('buttonInstall');
const appLoad = document.getElementById('appLoaded');

//event listener for the prior notification of app load
window.addEventListener('priorLoadNotice', (event) => {
    window.delayedstart = event;
    loadBtn.classList.toggle('hidden', false);
  });

  //event listener for the install button
loadBtn.addEventListener('click', async () => {
  const kickOffEvent = window.delayedstart;
  if (!kickOffEvent) {
   return;
  }

  //function to kick off the event
  kickOffEvent.start();

  window.delayedstart = null;
  
  loadBtn.classList.toggle('hidden', true);
});

//event listener fo loading the app
window.addEventListener('appLoaded', (event) => {

  window.delayedstart = null;
}); 
