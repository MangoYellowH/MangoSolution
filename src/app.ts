import Koa from 'koa';

const app = new Koa();

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

console.log(process.env.NODE_ENV);
app.listen(3000);
