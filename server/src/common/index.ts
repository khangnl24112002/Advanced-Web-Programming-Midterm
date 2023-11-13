import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const CORS: CorsOptions = {
  origin: [
    'http://localhost:3000',
    'https://advanced-web-programming-midterm.vercel.app',
  ],
  credentials: true,
  exposedHeaders: 'uuid',
};
