$(document).ready ->
  

  
  #$( ".spaces" ).selectable
  #  filter: ".ticket"
  $(".spaces .ticket").disableSelection()
  
  $('.dropdown-toggle').dropdown()


  $("#loading").ajaxStart ->
    console.log "Starting ajax..." 
  $('.log').ajaxStop  ->
    console.log "Stopping ajax..." 

  cursor = $('.cursor')
  mx = 0
  my = 0
  $('body').mousemove (event) ->
    mx = event.pageX
    my = event.pageY
  
  $("select").chosen();

  $('textarea').autoResize ->
    animate: true
    animateDuration: 250
    extraSpace: 80,
    animateCallback: -> $(window).resize()
      

  updateCursorCallback = ->
    cursor.css
      left: "#{mx+16}px"
      top: "#{my+16}px"
  
  #setInterval updateCursorCallback, 50

  $('.ticket .expand').click ->
    $(this).parents('.ticket').find(".list").hide()
    $(this).parents('.ticket').find(".block").show("fade")
    $(window).resize()
    false
  $('.ticket .collapse').click ->
    $(this).parents('.ticket').find(".list").show("fade")
    $(this).parents('.ticket').find(".block").hide()
    $(window).resize()
    false