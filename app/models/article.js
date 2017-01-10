import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  description: DS.attr(),
  publishedAt: DS.attr(),
  title: DS.attr(),
  url: DS.attr(),
  urlToImage: DS.attr()
});
