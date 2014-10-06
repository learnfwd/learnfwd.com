'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Read Forward | Manifesto',
  template: templates.pages.manifesto,
  render: function () {
    this.$el.html(this.template());
    return this;
  }, 
  customDocumentClasses: function () {
    return ['manifesto-page'];
  },

});
