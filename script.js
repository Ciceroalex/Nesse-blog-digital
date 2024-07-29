window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

if ('SpeechRecognition' in window) {
  const recognition = new window.SpeechRecognition();
  const btnConverter = document.getElementById('btnConverter');

  recognition.lang = 'pt-BR'; // Defina o idioma da fala
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript;
    const audioPlayer = document.getElementById('player');
    const audioSource = document.createElement('source');

    audioSource.type = 'audio/mpeg';
    audioSource.src = data:audio/mpeg;base64,${btoa(result)};

    audioPlayer.innerHTML = '';
    audioPlayer.appendChild(audioSource);
    audioPlayer.load();
    audioPlayer.play();

    const audioPlayerContainer = document.getElementById('audioPlayer');
    audioPlayerContainer.style.display = 'block';
  }

  btnConverter.addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    recognition.start();
    recognition.speak();
  });
} else {
  alert('Seu navegador não suporta a Web Speech API.');
}