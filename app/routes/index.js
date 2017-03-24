import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category'),
      comments: this.store.findAll('comment')
    });
  },
  actions:{
    savePost(params){
      var newPost = this.store.createRecord('post', params);
      this.store.findRecord('category', parseInt(params.placeHolder)).then(function(response)
      {
        newPost.set('category', response);
        response.get('posts').addObject(newPost);
        return response.save();
    }).then(function() {
      delete newPost.placeHolder;
      return newPost.save();
    });
    // newPost.save();
    this.transitionTo('index');
  },
  saveCategory(params){
    var newCategory = this.store.createRecord('category', params);
    newCategory.save();
    this.transitionTo('index');
  },
  clear(){
    this.store.unloadAll('category'),
    this.store.unloadAll('post')
  }
}
});
