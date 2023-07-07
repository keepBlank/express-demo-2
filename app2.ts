import express from 'express'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello,Express!');
});

app.post('/xxx',(req, res, next)=>{

})

app.listen(port, () => {
    console.log(`现在监听的端口是 ${port}`);
});