// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      // console.log('---------')
      this.triggerEvent('increment', {name: 'why', age: 18}, {})
    }
  }
})
