$(() => {
    $('#open_modal').on('click', e => {
        // $('#modal').css('display', 'block')
        $('#modal').fadeIn()
        $('body').css('background-color', 'rgba(0, 0, 0, 0.5)')
    })

    $('.close').on('click', e => {
        // $('#modal').css('display', 'none')
        $('#modal').fadeOut()
        $('body').css('background-color', '#fff')
    })
})