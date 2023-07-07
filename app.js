const express = require('express');
const {request} = require('express');

const app = express();

app.use((request, response, next) => {
    console.log(request.url);
    response.write('Hi,I am Server Client')
    next()
});

app.use((request, response, next) => {
    console.log(2);
    response.write('Hi,I am Server Client 2')
    next()
});

app.use((request, response, next) => {
    response.end()
});

app.listen(3000,()=>{
    console.log('正在监听3000端口');
});