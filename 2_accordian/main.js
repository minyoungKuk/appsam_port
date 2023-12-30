$(() => {
    $('button').click(function(){
        const idx = $(this).index();
        $('.area').hide();
        $('.area').eq(idx).show();
        $('button').removeClass('active'); 
        $(this).addClass('active');
      });
})