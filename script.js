function show(){
    $('#box').show();
    $('#box').removeClass('box--in');
}

function hide(){
    $('#box').addClass('box--out');
    setTimeout(function(){
        $('#box').hide();
        $('#box').removeClass('box--out');
        $('#box').addClass('box--in');
    }, 800);
}