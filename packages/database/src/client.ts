import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

// export const prisma = (global as any).prisma || new PrismaClient();

export const prisma =
  (global as any).prisma ||
  new PrismaClient().$extends(
    withOptimize({
      apiKey: 'xxx',
    }),
  );

if (process.env.NODE_ENV !== 'production') (global as any).prisma = prisma;

export * from '@prisma/client';
