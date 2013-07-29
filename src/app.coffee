document.addEventListener 'DOMContentLoaded', ->
  OnDemand.init({ weight: 100 })
  OnDemand.addWatch "specialDiv-0", "scripts/somefile0.js", ->
    alert("scipts/somefile0.js has been added to the page")

  OnDemand.addWatch "specialDiv-1", "scripts/somefile1.js", ->
    alert("scripts/somefile1.js has been aded to the page")
