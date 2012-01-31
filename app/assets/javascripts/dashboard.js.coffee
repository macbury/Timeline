$(document).ready ->
  
  $(".spaces tr").sortable
    placeholder: "placeholder"
    forcePlaceholderSize: true
    handle: ".toolbar .move"
    cursor: "move"
  
  $('body, html').css
    overflow: "hidden"

  $(window).resize ->
    header_height = $('.header').height()
    body_height = $('body').height()
    space_height = body_height - header_height - 15

    $('.spaces .space').each ->
      inner_height = space_height - $(this).find('.toolbar').height() - 5
      $(this).height(space_height)
      $(this).find(".inner").height(inner_height)
      $(this).find(".nano").nanoScroller()

  $(window).resize()  