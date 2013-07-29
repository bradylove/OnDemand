Number.prototype.between = (min, max) ->
  @ > min && @ < max

@OnDemand =
  watches: []
  weight: 100

  init: (options) ->
    @weight = options.weight || 100
    that = @
    document.addEventListener "mousemove", (event) ->
      that.onMouseMove(event)

  addScript: (src) ->
    script = document.createElement("script")
    script.type = "text/javascript"
    script.src  = src

    body = document.getElementsByTagName("body")[0]
    body.appendChild(script)

  onMouseMove: (event) ->
    for watch in @watches
      if !watch.loaded
        coords = @getElementCoords(watch.id)

        if (event.pageX).between(coords[0], coords[1]) &&
           (event.pageY).between(coords[2], coords[3])
          @addScript(watch.src)
          watch.loaded = true

  getElementCoords: (id) ->
    element = document.getElementById(id)

    x = element.offsetLeft - @weight
    y = element.offsetTop - @weight

    xx = element.offsetLeft + element.offsetWidth + @weight
    yy = element.offsetTop + element.offsetHeight + @weight

    return [x, xx, y, yy]

  addWatch: (id, src) ->
    newWatch =
      id: id
      src: src
      loaded: false

    @watches.push newWatch

window.OnDemand = @OnDemand
