import { ENV, isEnvValid } from "./env";

export const apiFetch = async (endpoint: string, options?: RequestInit) => {
  if (!isEnvValid) {
    console.warn("⚠️ Missing env - returning safe fallback");
    return { data: [] };
  }

  const res = await fetch(`${ENV.API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.API_KEY}`,
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    return { data: [] };
  }

  return res.json();
};