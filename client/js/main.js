// Load bower-installed libraries. Don't remove this
require('bower-components');

var _ = require('lodash');
var $ = require('jquery');
var loadcss = require('./loadcss');

var MainView = require('./views/main');
var Router = require('./router');
var Backbone = require('./shims/backbone');

module.exports = {
  launch: _.once(function () {
    var self = window.app = this;

    this.router = new Router();
    this.router.history = Backbone.history;

    //Wait for the DOM to be rendered.
    $(document).ready(function () {

      // Asynchronously load our main CSS file. Required for critical CSS
      loadcss('/css/main.css');

      //Initialize the main view.
      var mainView = self.view = new MainView({
        el: document.body
      });

      //Render the main view.
      mainView.render();

      //Listen for 'newPage' event from the router
      self.router.on('newPage', mainView.setPage, mainView);

      self.router.start();
    });
  }),

  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;
    this.router.history.navigate(url, { trigger: true});
  }
};

module.exports.launch();
