import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    update(post){
      var params = {
        title : this.get('title'),
        mainpic : this.get('mainpic'),
        content : this.get('content'),
        category : this.get('category'),
        date : this.get('date')
      };
      this.sendAction('update', post, params);
    },
    delete(post){
      this.sendAction('delete',post)
    }
  }
});
