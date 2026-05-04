import axios from "axios"

const API = "https://zany-waffle-5ggxw9r5xpq9hv9rx-5000.app.github.dev/api/users";

export const callRegisterUserApi = async (formData) => {
      const response = await axios.post(`${API}/register`, formData, {
            withCredentials: true
        });
      return response.data
}