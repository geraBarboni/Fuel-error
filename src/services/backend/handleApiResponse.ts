import { BackendApiResponse } from "./types/BackendApiResponse";

export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result: BackendApiResponse<T> = await response.json();
  if (result.status_code !== 200) {
    throw new Error(`API error: ${result.status_code}`);
  }
  return result.data;
}
