(function() {
  Number.prototype.between = function(min, max) {
    return this > min && this < max;
  };

  this.OnDemand = {
    watches: [],
    weight: 100,
    init: function(options) {
      var that;
      this.weight = options.weight || 100;
      that = this;
      return document.addEventListener("mousemove", function(event) {
        return that.onMouseMove(event);
      });
    },
    addScript: function(src) {
      var body, script;
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      body = document.getElementsByTagName("body")[0];
      return body.appendChild(script);
    },
    onMouseMove: function(event) {
      var coords, watch, _i, _len, _ref, _results;
      _ref = this.watches;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        watch = _ref[_i];
        if (!watch.loaded) {
          coords = this.getElementCoords(watch.id);
          if (event.pageX.between(coords[0], coords[1]) && event.pageY.between(coords[2], coords[3])) {
            this.addScript(watch.src);
            _results.push(watch.loaded = true);
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    getElementCoords: function(id) {
      var element, x, xx, y, yy;
      element = document.getElementById(id);
      x = element.offsetLeft - this.weight;
      y = element.offsetTop - this.weight;
      xx = element.offsetLeft + element.offsetWidth + this.weight;
      yy = element.offsetTop + element.offsetHeight + this.weight;
      return [x, xx, y, yy];
    },
    addWatch: function(id, src) {
      var newWatch;
      newWatch = {
        id: id,
        src: src,
        loaded: false
      };
      return this.watches.push(newWatch);
    }
  };

  window.OnDemand = this.OnDemand;

}).call(this);
