
const app = new Vue({
    el: '#app',
    data(){
        return {
            currentPage: 'main-page',
            id_product: 0,//сюда будет передаваться id товара для страницы одного товара
        }
    },
    methods: {
        setPage(page, id = 0) {
            //if (id) this.id_product = id;
            if (id) this.id_product = 678; //в products.json этот товар настроен лучше для страницы одного товара
            this.currentPage = page;
            window.scrollBy(0,-100000);
            if (page !== 'catalog-page') this.$refs.header.$refs.search.userSearch = '';
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
    },

});

