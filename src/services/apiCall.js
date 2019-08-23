import API_KEY from "../config/NASA";
import baseURL from "../config/NASA";

async function apiCall(request) {
  const response = await fetch(`${baseURL}${request}${API_KEY}`);
  const data = await response.json();
  return data;
}

const api = {
  imageOfTheDay() {
    return apiCall("planetary/apod?api_key=");
  },
  rovers() {
    return apiCall(
      "mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="
    );
  }
};

export default api;
