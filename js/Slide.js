$(window).scroll(() => {
    $(".slideanim").each(function() {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();

        if (pos < winTop + window.innerHeight * 0.9) {
            $(this).addClass("slide");
        }
    });
});