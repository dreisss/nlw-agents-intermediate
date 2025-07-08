import cors from '@elysiajs/cors';
import { env } from '@repo/env';
import { Elysia } from 'elysia';

const corsPlugin = cors({
  origin: 'http://localhost:3001',
});

const app = new Elysia()
  .use(corsPlugin)
  .get('/health', () => 'OK')
  .listen(env.SERVER_PORT);

console.info(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
