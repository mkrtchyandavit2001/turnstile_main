function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`❌ Missing env: ${name}`);
  }

  return value;
}

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "",
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || "",
};

export const isEnvValid = Boolean(ENV.API_URL && ENV.API_KEY);