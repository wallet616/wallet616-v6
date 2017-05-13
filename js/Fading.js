$(window).scroll(() => {
    $(".fadeanim").each(function() {
        var val = 1.0;
        var val2 = 0.0;

        // Check if mobile (probably).
        if (window.innerWidth < 768) {
            // Nothing?
        } else {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();

            if ($(this).innerHeight() > window.innerHeight) {
                // Calc from top.
                val = (winTop + 1.1 * window.innerHeight - pos) / window.innerHeight;
            } else {
                // Calc from bottom.
                val = (winTop + 1.1 * window.innerHeight - pos) / $(this).innerHeight();

            }

            if (val < 0.0) val = 0.0;
            if (val > 1.0) val = 1.0;

            val2 = (8.5 * val - 8.5);
            val = 1.2 * val * val - 0.2 * val;
        }
        $(this).find(".fadeanim-warp").css("top", val2 + "em");
        //$(this).css({ "opacity": val, "margin-bottom": val2 + "em" });
        $(this).css("opacity", val);
    });
});