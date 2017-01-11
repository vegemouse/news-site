import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.get("https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=9d962b0723554d7fa068b02b75274e7b").then(function(response) {
      return response;
    });
  },
});
