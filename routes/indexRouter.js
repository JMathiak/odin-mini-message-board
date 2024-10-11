const { Router } = require('express');

const indexRouter = Router();

const messages = [
    {
        text: "I want to play wuwa!",
        user: "Josh",
        added: new Date()
    },
    {
        text: "I can't wait to farm!",
        user: "Alex",
        added: new Date()
    }
]

indexRouter.get("/", (req, res) => {
    res.render("index", {messages: messages})
})

indexRouter.get('/new', (req, res) => {
    res.render("form")
})

indexRouter.get('/detail/:id', (req, res) => {
    console.log(req.params)
    let message = messages[req.params.id]
    res.render("detail", {message: message})
})

indexRouter.post('/new', (req, res) =>{
    let author = req.body.author
    let message = req.body.newMessage
    messages.push({ text: message, user: author, added: new Date()})
    res.redirect("/")
})
module.exports = indexRouter;