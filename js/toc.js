$(function() {
  let h1 = 0
  let h2 = 0
  let h3 = 0
  $('h1, h2, h3').each(function() {
    switch($(this).prop('tagName')) {
      case 'H1':
        h1++
        $(this).text(`${h1} ${$(this).text()}`)
        h2 = 0
        h3 = 0
        break

      case 'H2':
        h2++
        $(this).text(`${h1}.${h2} ${$(this).text()}`)
        h3 = 0
        break

      case 'H3':
        h3++
        $(this).text(`${h1}.${h2}.${h3} ${$(this).text()}`)
    }

    $(this).wrap($('<a>', {
      name: $(this).text().split(' ')[0]
    }))
    $('#toc').append($('<a>', {
      text: $(this).text(),
      href: `#${$(this).text().split(' ')[0]}`,
      css: {
        marginLeft: 10 * ($(this).prop('tagName').substr(1) - 1)
      }
    }))
  })
})
