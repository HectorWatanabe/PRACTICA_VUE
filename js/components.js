var urlAlbums = 'https://jsonplaceholder.typicode.com/posts';
var urlPosts =  'https://jsonplaceholder.typicode.com/albums';

Vue.component('common-list', {
    props: ['list'],
    template:   '<ul class="list-group">' +
                    '<li class="list-group-item" v-for="item in list">' +
                        '{{ item.title }}' +
                    '</li>' + 
                '</ul>'
})

$practicaComponets = new Vue({
    el: '#practicaComponents',
    created: function (){
        var self = this;
        this.getAlbums();
        this.getPosts();
    },
    data: {
        posts: [],
        albums: [],
        photos: [
            {title: 'foto 1'},
            {title: 'foto 2'},
        ]
    },
    methods: {
        getAlbums: function(){
            axios.get(urlAlbums).then( (response) => {
                this.albums = response.data;
            });
        },
        getPosts: function(){
            axios.get(urlPosts).then( (response) => {
                this.posts = response.data;
            });
        }
    }
})