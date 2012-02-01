$(document).ready ->
  
  $(".spaces tr").sortable
    placeholder: "placeholder"
    forcePlaceholderSize: true
    handle: ".toolbar .move"
    cursor: "move"
  
  #$( ".spaces" ).selectable
  #  filter: ".ticket"
  $(".spaces .ticket").disableSelection()
  
  $('.dropdown-toggle').dropdown()

  $('body, html').css
    overflow: "hidden"

  $(window).resize ->
    header_height = $('.header').height()
    body_height = $('body').height()
    space_height = body_height - header_height - 35

    $('.spaces .space').each ->
      inner_height = space_height - $(this).find('.toolbar').height() - 5
      $(this).height(space_height)
      $(this).find(".inner").height(inner_height)
      $(this).find(".nano").nanoScroller()

  $(window).resize()
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