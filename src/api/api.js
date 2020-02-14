export const API = {
    async getUsers() {
        const url = "https://api.github.com/repos/vuejs/vue/contributors";
        const response = await fetch(url);
        return await response.json();
    },
    async getProjectField() {
        const url = "https://api.github.com/repos/vuejs/vue";
        const response = await fetch(url);
        return await response.json();
    },
    async getSubCounter() {
        const url = "https://api.github.com/repos/vuejs/vue/stats/contributors";
        const response = await fetch(url);
        return await response.json();
    }
};
