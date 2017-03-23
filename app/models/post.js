import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  mainpic: DS.attr(),
  category: DS.belongsTo('category'),
  content: DS.attr(),
  date:DS.attr()
});
