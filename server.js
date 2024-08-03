console.log("hello")/*npm run serve*/

const express = require("express")
const app = express();


//routes
app.get('/', (req, res) => {
    res.send('hello node api')  //sent to client
})

app.get('/blog', (req, res) => {
    res.send('hello blog')  //sent to client
})


app.listen(3000, () => {
    console.log("node api appp is runnin gon port 3000")
})