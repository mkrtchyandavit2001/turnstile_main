export const apiFetch = async (endpoint: string, options?: RequestInit) => {
  const res = await fetch(`/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    return { data: [] };
  }

  return res.json();
};
