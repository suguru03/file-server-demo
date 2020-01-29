const express = require('express');

const app = express();

app.use('public', express.static('public'));

const port = 4500;

app.listen(port);
console.log(`server listening on http://0.0.0.0:${port}`);
