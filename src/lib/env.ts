function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`❌ Missing env: ${name}`);
  }

  return value;
}

export const ENV = {
  API_URL: requireEnv("NEXT_PUBLIC_API_URL"),
  API_KEY: requireEnv("NEXT_PUBLIC_API_KEY"),
};