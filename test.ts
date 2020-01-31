const url = 'http://localhost:4500/public/index.html';

let count = 0;
(async () => {
  while (true) {
    console.log('opening...', ++count);
    const res = await fetch(url);
    if (res.status !== 200) {
      console.log('error!.', res.status);
    } else {
      console.log('opened.', res.status);
    }
  }
})();
