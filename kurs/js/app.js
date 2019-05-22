new Vue({
  el: '#vue-app',
  data: {
    name: 'Matuesz',
    job: "IT guy",
    website: 'http://google.pl',
    websiteTag: '<a href="http://google.pl">Website, but from the tag inside Vue object</a>',
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name ;
    }
  }
});

new Vue({
  el: '#vue-app-2',
  data: {
    age: 28,
    x: 0,
    y: 0,
  },
  methods: {
    add: function(inc) {
      this.age += inc;
    },
    substract: function(dec) {
      this.age -= dec;
    },
    updateXY: function() {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert("You clicked it");
    }
  }
});

new Vue({
  el: '#vue-app-3',
  methods: {
    logName: function() {
      console.log('You entered your name');
    },
    logAge: function() {
      console.log('You entered your age');
    }
  }
});

new Vue({
  el: '#vue-app-4',
  data: {
    name: '',
    age: '',
  },
});

new Vue({
  el: '#vue-app-5',
  data: {
    age: 20,
    a: 0,
    b: 0,
  },
  methods: {
   /* addToA: function() {
      return this.a + this.age;
    },
    addToB: function() {
      return this.b + this.age;
    }*/
  },
  computed: {
    addToA: function() {
      console.log("Just A run");
      return this.a + this.age;
    },
    addToB: function() {
      console.log("Just B run");
      return this.b + this.age;
    }
  },
});

new Vue({
  el: '#vue-app-6',
  data: {
    available: false,
    nearby: false,
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
});

new Vue({
  el: '#fantasy-1',
  data: {
    color: ''
  },
  methods: {
    changeColor: function() {
      console.log(this.color);
      document.querySelector('.test-square').style.backgroundColor = this.color;
    }
  }
});

new Vue({
  el: '#vue-app-7',
  data: {
    error: false,
    success: false
  },
});

new Vue({
  el: '#vue-app-8',
  data: {
    characters: ['Mario','Luigi','Yoshi','Bowser'],
    ninjas: [
      {name: 'Sushi', age: 25},
      {name: 'Kushi', age: 35},
      {name: 'Yoshi', age: 45},
    ]
  },
});

new Vue({
  el: '#vue-app-9',
  data: {
    health: 100,
    ended: false,
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if(this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  }
});

var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'
  },
  computed: {
    greet: function() {
      return 'Hello from app one :)';
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeTitle: function() {
      one.title = "Changed title";
    }
  },
  computed: {
    greet: function() {
      return 'This is App 2';
    }
  }
});

two.title = "Changed from outside";


var data = { // Jeśli w komponencie użyjemy tej zmiennej z zewnątrz to  JEST ona współdzielona przez wszystkie instacje.
  name: 'Yoshi'
};

Vue.component('greeting', {
  template: '<p>Hi there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
  data: function() { // Jeśli nie użyjemy zmiennej z zewnątrz to ograniczamy się tylko do komponentu w pojedynczej instacji. W komponencie 'data' to funkcja, nie obiekt.
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: '#vue-app-10',
});

new Vue({
  el: '#vue-app-11',
});

new Vue({
  el: '#vue-app-12',
  data: {
    output: 'Your favorite food'
  },
  methods: {
    readRefs: function() {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.myInput.value;
    }
  }
});