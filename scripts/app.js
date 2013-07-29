(function() {
  document.addEventListener('DOMContentLoaded', function() {
    OnDemand.init({
      weight: 100
    });
    OnDemand.addWatch("specialDiv-0", "somefile0.js");
    return OnDemand.addWatch("specialDiv-1", "somefile1.js");
  });

}).call(this);
