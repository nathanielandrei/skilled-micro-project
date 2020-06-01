import axios from "axios";

const apiUrl = axios.create({
    baseURL: "https://api.github.com/"
});

export const getUserRepo = async (name) => {
   const result = await apiUrl.get(`users/${name}/repos`)
   return result
}

export const getReadMe = async (name, repoName) => {
    const result = await apiUrl.get(`repos/${name}/${repoName}/contents/README.md`)
    return result
}