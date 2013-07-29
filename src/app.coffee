document.addEventListener 'DOMContentLoaded', ->
  OnDemand.init({ weight: 100 })
  OnDemand.addWatch("specialDiv-0", "somefile0.js")
  OnDemand.addWatch("specialDiv-1", "somefile1.js")
