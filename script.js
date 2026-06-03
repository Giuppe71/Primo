const services = [
  { name: 'ChatGPT', url: 'https://chatgpt.com/' },
  { name: 'Gemini', url: 'https://gemini.google.com/' },
];

const openBothButton = document.querySelector('#open-both');
const openPreviewButton = document.querySelector('#open-preview');
const preview = document.querySelector('#preview');
const statusMessage = document.querySelector('#status');

function openService({ url }) {
  return window.open(url, '_blank', 'noopener,noreferrer');
}

function showStatus(message) {
  statusMessage.textContent = message;
}

openBothButton.addEventListener('click', () => {
  const openedWindows = services.map(openService);
  const blocked = openedWindows.some((openedWindow) => openedWindow === null);

  if (blocked) {
    showStatus('Il browser ha bloccato almeno una scheda. Usa il pannello di avvio o abilita i popup.');
    preview.hidden = false;
    return;
  }

  showStatus('ChatGPT e Gemini sono stati aperti in nuove schede.');
});

openPreviewButton.addEventListener('click', () => {
  preview.hidden = !preview.hidden;
  openPreviewButton.textContent = preview.hidden ? 'Mostra pannello di avvio' : 'Nascondi pannello di avvio';
  showStatus(preview.hidden ? '' : 'Puoi aprire i servizi anche singolarmente dal pannello.');
});
