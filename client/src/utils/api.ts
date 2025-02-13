const getApiUrl = (path: string): string => {
  const baseUrl = import.meta.env.PROD
    ? 'https://tracktryvia-api.vercel.app'
    : 'http://localhost:5000';
  return `${baseUrl}${path}`;
};

export const api = {
  get: async (path: string, options?: RequestInit) => {
    const response = await fetch(getApiUrl(path), options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}; 