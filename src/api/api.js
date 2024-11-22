import axios from "axios";

class HttpClient {
  constructor(baseURL, timeout = 10000) {
    this.client = axios.create({ baseURL, timeout });
  }

  async get(url) {
    return await this.client.get(url);
  }
}

class Api {
  constructor(baseURL) {
    this.http = new HttpClient(baseURL);
  }

  getUser = async () => {
    const res = await this.http.get(`/users/1`);
    return res.data;
  };

  getAllPosts = async () => {
    const res = await this.http.get("/posts");
    return res.data;
  };
}

const api = new Api("https://jsonplaceholder.typicode.com");

export default { api };
