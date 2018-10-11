var urlUsers = 'https://jsonplaceholder.typicode.com/users';

$practicaComputed = new Vue({
    el: '#practica-computed',
    data: {
        list: [],
        name: ''
    },
    methods: {
        getUsers: function (){
            axios.get(urlUsers).then( (response) => {
                this.list = response.data;
            });
        }
    },
    computed: {
        searchUser: function (){
            return this.list.filter( (item) => item.name.includes(this.name));
        }
    }
});