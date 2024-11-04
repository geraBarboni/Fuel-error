export interface BackendApiResponse<T> {
  status_code: number;
  data: T;
}
