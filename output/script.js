function show() {
    $('#box').removeClass('box--hide');
}

function hide() {
    $('#box').addClass('box--hide');
}

let isAnimating = false;

function switchContent() {
    if (isAnimating) {
        return;
    }

    isAnimating = true;

    if ($('#c-1').hasClass('content--show')) {
        $('#c-1').removeClass('content--show');
        $('#c-1').addClass('content--hide'); // c1滑出

        $('#c-2').show(); // 显示c2
        $('#c-2').addClass('content--show'); // c2滑入

        setTimeout(function () {
            $('#c-1').hide(); // 隐藏c1
            $('#c-1').removeClass('content--hide'); // 等待
            isAnimating = false;
        }, 300);
    } else {
        $('#c-2').removeClass('content--show');
        $('#c-2').addClass('content--hide'); // c2滑出

        $('#c-1').show(); // 显示c1
        $('#c-1').addClass('content--show'); // c1滑入

        setTimeout(function () {
            $('#c-2').hide(); // 隐藏c2
            $('#c-2').removeClass('content--hide'); // 等待
            isAnimating = false;
        }, 300);
    }
}