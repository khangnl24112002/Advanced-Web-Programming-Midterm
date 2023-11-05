import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const CORS: CorsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  exposedHeaders: 'uuid',
};
