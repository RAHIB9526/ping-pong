const express = require('express');
app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});
app.get('/game/:name', (req, res) => {
    res.render('game', { name: req.params.name })
});


app.listen(port, () => {
    console.log("listening on port " + port);
});

