const url = 'http://localhost:4500/public/index.html';

let count = 0;
(async () => {
  while (true) {
    console.log('opening...', ++count);
    await fetch(url);
    console.log('opened.');
  }
})();
