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
