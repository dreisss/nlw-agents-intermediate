import cors from '@elysiajs/cors';
import { Elysia } from 'elysia';

const corsPlugin = cors({
  origin: 'http://localhost:3001',
});

const app = new Elysia()
  .use(corsPlugin)
  .get('/', () => 'Hello Elysia')
  .listen(3000);

console.info(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
