export const ENV = {
  API_URL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://turnstile-admin.turniket.am",
};

export const isEnvValid = Boolean(ENV.API_URL);