$(document).ready ->
  $('.dropdown-toggle').dropdown()
  $('select').chosen()
  cursor = $('.cursor')
  mx = 0
  my = 0
  $('body').mousemove (event) ->
    mx = event.pageX
    my = event.pageY

  $('#notifications').tooltip
    title: "3 notifications"
    placement: "bottom"

  $('#notifications').tooltip('show')

  Notificon("10", { favicon: "/favicon.png" })


  updateCursorCallback = ->
    cursor.css
      left: "#{mx+16}px"
      top: "#{my+16}px"
  
  timer = null
  $("body").ajaxStart ->
    updateCursorCallback()
    cursor.show()
    timer = setInterval(updateCursorCallback, 50)
  $('body').ajaxStop -> 
    clearInterval(timer)
    cursor.hide()

  p = new Pusher()
  p.subscribeTag "current_workspace", (msg) -> console.log(msg)
  