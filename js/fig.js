$(function() {
  let figId = 0
  $('img').each(function() {
    figId++
    $(this).data('id', figId)
    let figFrame = $('<a>', {
      "class": 'figFrame',
      name: `fig${figId}`
    })
    $(this).wrap(figFrame)
    $(this).parent().append($('<div>', {
      html: `<b>Fig. ${figId}</b> : ${$(this).attr('alt')}`
    }))
  })

  $('.fig').each(function() {
    let name = $(`img[src='${$(this).data('url')}']`).parent().attr('name')
    $(this).attr('href', `#${name}`)
    $(this).text(`(Fig. ${name.substr(3)})`)
  })
})
