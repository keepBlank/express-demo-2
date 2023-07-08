const express = require('express');
const {request, response} = require('express');
const logger = require('./logger.js');
const app = express();

/*
* Express的中间件以及模块化
* **/
app.use(logger('dev'));

// app.use('/xxx',(request,response,next)=>{
//     response.send('xxx页面')
//     next()
// })

// app.route('/xxx')
//     .all((req, res, next) => {
//         response.send('all xxx');
//     })
//     .get((req, res, next) => {
//         response.send('get xxx');
//     })
//     .post((req, res, next) => {
//         response.send('post xxx');
//     });

/*
* Express的路由
* **/

// app.use((request, response, next) => {
//     if (request.path === '/' && request.method === 'get') {
//         response.send('根目录');
//     }
//     next();
// });
//
// app.use((request, response, next) => {
//     if (request.path === '/xxx' && request.method === 'get') {
//         response.send('这是xxx');
//     }
//     next();
// });
//
// app.use((request, response, next) => {
//     if (request.path === '/yyy' && request.method === 'get') {
//         response.send('这是yyy');
//     }
//     next();
// });

/*
* Express的编程模型
* **/

// app.use((request, response, next) => {
//     console.log(request.url);
//     response.write('Hi,I am Server Client')
//     next()
// });
//
// app.use((request, response, next) => {
//     console.log(2);
//     response.write('Hi,I am Server Client 2')
//     next()
// });
//
// app.use((request, response, next) => {
//     response.end()
// });
app.listen(3000, () => {
    console.log('正在监听3000端口');
});