/* Ejercicio Básico **/
$basico = new Vue({
    el: '#my-list',
    data: {
        animals: ['Perro', 'Gato', 'Conejo', 'Zorro']
    },
    name: '',
    methods: {
        addName: function () {
            this.animals.push(this.name);
            this.name = '';
        }
    }
});

/* Ejercicio V-BIND **/
$cambio = new Vue({
    el: '#cambio-titulo',
    data: {
        newTitle: ''
    }
});

$tutorialShow = new Vue({
    el: '#tutorial-show',
    data: {
        email: ''
    }
});

$tutorialVerdad = new Vue({
    el: '#tutorial-verdad',
    data: {
        message: ''
    }
});

$tutorialEventos = new Vue({
    el: '#tutorial-eventos',
    data: {
        people: ['Carlos', 'Beto', 'Javier', 'Maria'],
        name: '',
        num: 0
    },
    methods: {
        addName: function () {
            this.people.push(this.name);
            this.name = '';
        }
    }
});