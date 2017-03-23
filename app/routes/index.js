import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category')
    });
  },
  actions:{
    savePost(params){
      // console.log(typeof params);
      // console.log("SAVEPOST PARAMS: " + params.category);
      // debugger;
      // var newCategory;
      // this.store.findAll('category').then(function(categories){
      //   categories.forEach(function(category){
      //     console.log(category.get('name'));
      //     if (category.id == params.category) {
      //       newCategory = category.get('id');
      //     }
      //   })
      //   console.log("NEW CATEGORY: " + newCategory);
      // })
      // var newCategory = this.store.findRecord('category', params.placeHolder);
      var newPost = this.store.createRecord('post', params);

      var category = this.store.findRecord('category', 0)

      var catObject;
      var cats = [];
      category.then(function(response)
      {
        catObject = category.get('data');

        // console.log("CATOBJECT:" + catObject);
        cats.push(catObject);
        console.log("CATOBJECT");
        console.log(catObject);
        newPost.set('category', cats);
        newPost.save();
    });
    console.log("CATS");
    console.log(cats);
    // var newCategory = response;
    // var array = newPost.get('category');
    // console.log(array);
    // array.toArray();
    // console.log(array);
    // newPost.set('category', response);
    // newPost.save();

      ///PLEASE LOOK ATHIS ALLIE//
      //SET TO ZERO TO JUST MAKE AN EXAMPLE//

    this.transitionTo('index');
  },
  saveCategory(params){
    var newCategory = this.store.createRecord('category', params);
    newCategory.save();
    this.transitionTo('index');
  }
}
});
