import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if(confirm("Would you like to delete this comment on this cutie?")){
        this.sendAction('deleteComment', comment);
      }
    }
  }
});
