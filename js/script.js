var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Załadowałeś tę stronę o  ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: "Uno"},
      {text: "Dos"},
      {text: "Tres"},
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Wiadomość'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'No spoko wiadmość'
  }
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    shopList: [
      {id: 0, text: 'Bread'},
      {id: 1, text: 'Apples'},
      {id: 2, text: 'Beer'},
    ],
    newItem: '',
  },
  methods: {
    addItem: function() {
      newId = this.shopList.length;
      this.shopList.push({id: newId, text: this.newItem});
    }
  }
})
