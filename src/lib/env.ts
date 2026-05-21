

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "",
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || "",
};

export const isEnvValid = Boolean(ENV.API_URL && ENV.API_KEY);