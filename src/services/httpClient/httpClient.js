class HttpClient {
  // private methode (#) to use fetch
  async #fetch(url, options = {}) {
    const response = await fetch(url, options);
    console.log(response)
    if (!response.ok) {
      throw new Error('HTTP Error')
    }
    return response.json();
  }

  /**
   * Method to call the private method with get
   * @param {string} url
   * @param {FetchOptions} options
   * @returns
   */
  async get(url, options = {}) {
    return this.#fetch(url, { method: "GET", ...options })
  }
}

export const httpClient = new HttpClient()
