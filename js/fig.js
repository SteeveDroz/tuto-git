$(function() {
  let figId = 0
  $('img').each(function() {
    figId++
    $(this).data('id', figId)
    let figFrame = $('<a>', {
      "class": `figFrame ${$(this).attr('class')}`,
      name: `fig${figId}`
    })
    $(this).removeClass()
    $(this).wrap(figFrame)
    $(this).parent().append($('<div>', {
      "class": 'legend',
      html: `<b>Fig. ${figId}</b> : ${$(this).attr('alt')}`
    }))
  })

  $('.fig').each(function() {
    let image = $(`img[src='${$(this).attr('href')}']`)
    let name = image.parent().attr('name')
    $(this).attr('href', `#${name}`)
    $(this).text(`${image.parent().find('.legend').text()}`)
  })
})
