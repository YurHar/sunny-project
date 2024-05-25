import axios from "axios";

const BASE_URL = "https://randomuser.me/api/";

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchUsers = async (page: number, results: number, searchQuery: string) => {
    const params = {
        page,
        results,
        ...(searchQuery && {seed: searchQuery}),
    };

    return apiClient.get("", {params});
}