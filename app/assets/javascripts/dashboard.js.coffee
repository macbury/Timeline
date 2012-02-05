$(document).ready ->
  $('.dropdown-toggle').dropdown()
  cursor = $('.cursor')
  mx = 0
  my = 0
  $('body').mousemove (event) ->
    mx = event.pageX
    my = event.pageY

  $('textarea').autoResize ->
    animate: true
    animateDuration: 250
    extraSpace: 80,
    animateCallback: -> $(window).resize()
      

  updateCursorCallback = ->
    cursor.css
      left: "#{mx+16}px"
      top: "#{my+16}px"
  
  timer = null
  $("body").ajaxStart -> 
    cursor.show()
    timer = setInterval(updateCursorCallback, 50)
  $('body').ajaxStop -> 
    clearInterval(timer)
    cursor.hide()
  