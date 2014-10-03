'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');
var ContactPage = require('./pages/contact');
var FeaturesPage = require('./pages/features');
var DemoPage = require ('./pages/demo');
var PricingPage = require ('./pages/pricing');
var TeamPage = require ('./pages/team');

module.exports = Router.extend({
  routes: {
    '': 'home',
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
