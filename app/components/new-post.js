import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        category: this.get('category'),
        content: this.get('content'),
        mainpic: this.get('image'),
        date: this.get('date')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
