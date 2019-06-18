module.exports = function(app, models){

    // Api code to register new user.
    app.post('/web/test', (req, res) => {
        res.send("Hello world");
    })

}