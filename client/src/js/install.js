const beforeInstall = document.getElementById('beforeinstallprompt');
const butInstall = document.getElementById('buttonInstall');
const appInstall = document.getElementById('appinstalled');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {

  window.deferredPrompt = null;
}); 
