import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    selectCategory(value) {
         this.set('category.value', value);
       },
    savePost() {
      var categoryId = $("#category option:selected" ).val();
      var params = {
        title: this.get('title'),
        category:categoryId,
        content: this.get('content'),
        mainpic: this.get('image'),
        date: this.get('date')
      };

      console.log(params);
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
