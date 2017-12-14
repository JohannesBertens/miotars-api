module.exports = function (app, db) {
    app.get('/characters', (req, res) => {
        res.send('Hello GET')
    });

    app.post('/characters', (req, res) => {
        console.log(req.body)
        res.send('Hello POST')
    });

};