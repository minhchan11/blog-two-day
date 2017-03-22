import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost(params) {
      console.log("nav-bar fired");
      this.sendAction('savePost', params);
    }
  }
});
