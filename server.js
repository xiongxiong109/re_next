const express = require('express')
const server = express()
const next = require('next')
const dev = process.env.NODE_ENV === 'development'  //默认为false，置为true则next会启动本地服务用于调试

const app = next({dev})

const appService = (port) => {

  const handle = app.getRequestHandler()

  // 自定义路由

  // 通配路由
  server.get('*', async (req, res) => {

    const pageHtml = await app.renderToHTML(req, res, '/', {
      env: 'dev-bear'
    })
    console.log(pageHtml);
    return handle(req, res)
  })

  server.listen(port, (err) => {
      if (err) {
          throw err;
      }
      console.log(`> Nfes Ready on http://localhost:${port}`);
  });
}

app
  .prepare()
  .then(() => {
    appService(3000)
  })