const db = require('../db/queries')

async function getMessages(req, res){
    const messages = await db.getMessages()
    console.log(messages)
    res.render("index", {
        title: 'Messages',
        messages: messages
    })
}


async function postNewMessage(req, res){
    let author = req.body.author
    let message = req.body.newMessage
    await db.insertMessaage(author, message)
    res.redirect("/")
}

async function getDetails(req, res){
    let messageId = req.params.id
    let messageObj = await db.findMessage(messageId)
    res.render("detail", {index: messageObj.id, message: messageObj})
}

async function deleteMessage(req, res){
    let messageId = req.params.id
    await db.deleteMessage(messageId)
    res.redirect("/")
}
module.exports = {
    getMessages,
    postNewMessage,
    getDetails, deleteMessage
}