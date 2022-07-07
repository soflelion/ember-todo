
import Ember from 'ember';

export let todos = [{
  id: 1,
  task: 'Se reveiller tot',
  completed: true,
}, {
  id: 2,
  task: 'aller au sport',
  completed: false,
  }, {
  id: 3,
  task: 'faire le menage',
  completed: false,
}];


export default Ember.Controller.extend({
  todos: todos,
  actions: {
    addTodo: function () {
      todos.push({ id: 4, task: "sortir la nuit", completed: false });
      alert(todos);
      this.get('target.router').refresh();
    },
    removeTodo: function() {
      alert("Suppression todo");
    },
    doRefresh: function () {
      this.get('target.router').refresh();
    }
  },
});