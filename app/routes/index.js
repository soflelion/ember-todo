import Ember from 'ember';
//import todos from './todos';

let todos = [{
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

export default Ember.Route.extend({ 
  actions: {
    reloadModel() {
      alert('refresh work');
      this.refresh();
      return todos;
    }
  },
});