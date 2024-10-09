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

module.exports = indexRouter;