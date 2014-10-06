'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');
var ContactPage = require('./pages/contact');
var FeaturesPage = require('./pages/features');
var DemoPage = require ('./pages/demo');
var PricingPage = require ('./pages/pricing');
var TeamPage = require ('./pages/team');
var ManifestoPage = require('./pages/manifesto');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'manifesto/': 'manifesto',
    'contact/': 'contact',
    'features/': 'features',
    'demo/': 'demo',
    'pricing/': 'pricing',
    'team/': 'team'
  },

  //Handlers
  home: function () {
    this.trigger('newPage', new HomePage({}));
  },

  contact: function () {
    this.trigger('newPage', new ContactPage({}));
  },

  manifesto: function () {
    this.trigger('newPage', new ManifestoPage({}));
  },

  features: function () {
    this.trigger('newPage', new FeaturesPage({}));
  },

  demo: function () {
    this.trigger('newPage', new DemoPage({}));
  },

  pricing: function () {
    this.trigger('newPage', new PricingPage({}));
  },

  team: function () {
    this.trigger('newPage', new TeamPage({}));
  }
});
