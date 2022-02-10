var deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {e.preventDefault();deferredPrompt = e;});
window.addEventListener('appinstalled', () => { $('#espera').hide(); $('#termino').show(); deferredPrompt = null; });