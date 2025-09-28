export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      const data = await response.json();
      return { data, success: response.ok };
    } catch (error) {
      throw new Error(`Failed to fetch: ${error}`);
    }
  }

  async post<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return { data, success: response.ok };
    } catch (error) {
      throw new Error(`Failed to post: ${error}`);
    }
  }
}

export const apiClient = new HttpClient('/api');