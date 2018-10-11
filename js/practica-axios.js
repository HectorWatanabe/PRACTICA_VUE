var urlUsers = 'https://randomuser.me/api/?results=10';

new Vue({
    el: '#my-axios-ajax',
    created: function () {
        var self = this;
        this.getAxiosUsers();
    },
    data: {
        listAxios: []
    },
    methods: {
        getAxiosUsers: function () {
            axios.get(urlUsers).then((response) => {
                this.listAxios = response.data.results;
            });
        }
    }
});