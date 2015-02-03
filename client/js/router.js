'use strict';

var Backbone = require('./shims/backbone');
var $ = require('jquery');

var HomePage = require('./pages/home');
var ContactPage = require('./pages/contact');
var FeaturesPage = require('./pages/features');
var DemoPage = require ('./pages/demo');
var PricingPage = require ('./pages/pricing');
var TeamPage = require ('./pages/team');
var ManifestoPage = require('./pages/manifesto');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'home',
    'manifesto/': 'manifesto',
    'contact/': 'contact',
    'features/': 'features',
    'demo/': 'demo',
    'pricing/': 'pricing',
    'editions/': 'pricing',
    'team/': 'team'
  },

  //Handlers
  home: function () {
    this.trigger('newPage', new HomePage({}));
  },

  contact: function () {
    this.trigger('newPage', new ContactPage({}));
    ga('send', 'pageview', '/contact');
  },

  manifesto: function () {
    this.trigger('newPage', new ManifestoPage({}));
    ga('send', 'pageview', '/manifesto');

  },

  features: function () {
    this.trigger('newPage', new FeaturesPage({}));
    ga('send', 'pageview', '/features');
  },

  demo: function () {
    this.trigger('newPage', new DemoPage({}));
    ga('send', 'pageview', '/demo');
  },

  pricing: function () {
    this.trigger('newPage', new PricingPage({}));
    ga('send', 'pageview', '/pricing');
  },

  team: function () {
    this.trigger('newPage', new TeamPage({}));
    ga('send', 'pageview', '/team');
  },

  start: function () {
    var self = this;
    if (self._started) { return; }
    self._started = true;

    Backbone.history.start({ 
      pushState: true,
      root: '/'
    });

    // Hijack links to prevent page reloads when using push state
    // Courtesy of https://gist.github.com/tbranyen/1142129
    
    // Only need this for pushState enabled browsers
    if (Backbone.history && Backbone.history._hasPushState) {
      // Use delegation to avoid initial DOM selection and allow all matching elements to bubble
      $(document).delegate('a', 'click', function(evt) {
        // Get the anchor href and protcol
        var href = $(this).attr('href');
        var protocol = this.protocol + '//';
     
        // Ensure the protocol is not part of URL, meaning its relative.
        // Stop the event bubbling to ensure the link will not cause a page refresh.
        if (href.slice(0, protocol.length) !== protocol) {
          evt.preventDefault();
     
          // Note by using Backbone.history.navigate, router events will not be
          // triggered.  If this is a problem, change this to navigate on your
          // router.
          self.navigate(href, true);
        }
      });
    }
  }
});
