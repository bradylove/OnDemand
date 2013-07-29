(function() {
  document.addEventListener('DOMContentLoaded', function() {
    OnDemand.init({
      weight: 100
    });
    OnDemand.addWatch("specialDiv-0", "scripts/somefile0.js", function() {
      return alert("scipts/somefile0.js has been added to the page");
    });
    return OnDemand.addWatch("specialDiv-1", "scripts/somefile1.js", function() {
      return alert("scripts/somefile1.js has been aded to the page");
    });
  });

}).call(this);
