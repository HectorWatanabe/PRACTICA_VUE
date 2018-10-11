var urlUsers = 'https://randomuser.me/api/?results=10';

new Vue({
    el: '#myajax',
    created: function(){
        var self = this;
        this.getUsers();
    },
    data:{
        list: []
    },
    methods:{
        getUsers: function () {
            this.$http.get(urlUsers).then((response) => {
                this.list = response.data.results;
            });
        }
    }
});