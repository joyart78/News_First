import axios from "axios";

function axiosCreate(baseUrl) {
  return axios.create({
    baseURL: baseUrl,
    timeout: 5000,
  });
}

export async function fetchPosts() {
  const axios = axiosCreate(import.meta.env.VITE_API_URL_POSTS_AND_USER);

  try {
    const response = await axios.get("/posts");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchUser() {
  const axios = axiosCreate(import.meta.env.VITE_API_URL_POSTS_AND_USER);

  try {
    const response = await axios.get("/users/1");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
