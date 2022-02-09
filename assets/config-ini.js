var deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {e.preventDefault();deferredPrompt = e;});
window.addEventListener('appinstalled', () => { deferredPrompt = null;});