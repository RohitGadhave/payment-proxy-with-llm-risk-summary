import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  llmApiKey: process.env.LLM_API_KEY || '',
  isProduction: process.env.NODE_ENV === 'production',
};
