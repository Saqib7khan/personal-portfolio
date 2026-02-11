/**
 * API Client
 * 
 * Centralized HTTP client following SOLID principles.
 * All network I/O should go through this layer.
 * 
 * Usage:
 * - Never import fetch/axios directly in UI components
 * - Use this client for all API calls
 * - Environment variables should be used for endpoints
 */

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL || "";
  }

  /**
   * Generic GET request
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Unknown error",
        status: 500,
      };
    }
  }

  /**
   * Generic POST request
   */
  async post<T, U>(endpoint: string, body: U): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Unknown error",
        status: 500,
      };
    }
  }

  /**
   * Submit contact form
   * 
   * Note: In production, replace this with actual API endpoint
   * For now, this is a mock implementation
   */
  async submitContactForm(
    data: ContactFormData
  ): Promise<ApiResponse<{ success: boolean }>> {
    // Mock implementation - replace with actual endpoint
    // Example: return this.post('/api/contact', data);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate success
        resolve({
          data: { success: true },
          status: 200,
        });
      }, 1000);
    });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export types
export type { ApiResponse, ContactFormData };
