export const fetchData = async <T,>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Failed to fetch: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
};
