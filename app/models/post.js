import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  title: DS.attr(),
  mainpic: DS.attr(),
  content: DS.attr(),
  date:DS.attr()
});
