import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    },
    updateText(editor) {
      this.attrs.update(editor.root.innerHTML);
    }
  }
});
