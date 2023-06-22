const WORDS_PER_MINUTE = 270;

(() => {
  const readTime = document.getElementById('read-time');

  if (readTime) {
    const words = document.querySelector('body > main article > section').textContent.split(/\s+/).length;
    const seconds = words * (60 / WORDS_PER_MINUTE);
    let minutes = Math.round(seconds / 60);

    if (minutes < 1) {
      minutes = 1;
    }

    readTime.textContent = minutes + ' minutes';
  }
})();