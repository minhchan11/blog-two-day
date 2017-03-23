import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  mainpic: DS.attr(),
  category: DS.belongsTo('category', {async:true}),
  content: DS.attr(),
  date:DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
