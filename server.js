const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(3000 || process.ENV.PORT, console.log('app is running on port 3000'))