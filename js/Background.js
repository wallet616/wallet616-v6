"use strict";

class Background {
    constructor() {
        this.logo_size = { x: 0, y: 0, min_scale: 0 /*16 / 9*/ };

        this.ctx;
        this.element_canvas;
        this.element_background;
        this.element_content_panel;

        this.time;

        this.is_initialized = false;
        this.need_redraw = true;
    }

    init(panel_content_id, canvas_id, background_id) {
        // Validation.
        if (this.is_initialized) {
            console.error("Background: Background already initialized.");
            return;
        }

        if (!document.getElementById(canvas_id)) {
            console.error("Background: Cannot find id '" + canvas_id + "' during initialization process.");
            return;
        }

        if (!document.getElementById(panel_content_id)) {
            console.error("Background: Cannot find id '" + panel_content_id + "' during initialization process.");
            return;
        }

        if (!document.getElementById(background_id)) {
            console.error("Background: Cannot find id '" + background_id + "' during initialization process.");
            return;
        }


        // Initialization.
        this.element_canvas = $(document.getElementById(canvas_id));
        this.element_background = $(document.getElementById(background_id));
        this.element_content_panel = $(document.getElementById(panel_content_id));
        this.ctx = document.getElementById(canvas_id).getContext("2d");

        this.generate();

        this.time = 20;
        this.loop();

        this.is_initialized = true;
    }

    loop() {
        setTimeout(() => {
            this.resize();
            if (this.need_redraw) this.redraw();

            this.loop();
        }, this.time);
    }

    resize() {
        var y = this.element_content_panel.outerHeight();
        var x = this.element_content_panel.outerWidth();

        if (x < 768) {
            this.need_redraw = false;
        } else {
            this.need_redraw = true;
        }

        if (x < y * this.logo_size.min_scale) x = y * this.logo_size.min_scale;

        if (this.logo_size.x != x || this.logo_size.y != y) {
            this.logo_size.x = x;
            this.logo_size.y = y;
            //console.log(this.logo_size);

            this.element_canvas.attr("width", x);
            this.element_canvas.attr("height", y);
            this.element_background.css("height", y);
            //this.set_background_position();

            this.need_redraw = true;
        }
    }

    generate() {
        //console.log("generate");
    }

    redraw() {
        //var gradient = this.ctx.createLinearGradient(0, 0, this.logo_size.x, this.logo_size.y);
        //gradient.addColorStop("0", "magenta");
        //gradient.addColorStop("0.5", "blue");
        //gradient.addColorStop("1.0", "red");


        this.ctx.fillStyle = "#161616";
        this.ctx.fillRect(0, 0, this.logo_size.x, this.logo_size.y);
        //this.ctx.clearRect(0, 0, this.logo_size.x, this.logo_size.y);

        this.ctx.strokeStyle = "#7c0000";
        this.ctx.lineWidth = 40;
        this.ctx.strokeRect(0, 0, this.logo_size.x, this.logo_size.y);


        //var max = (this.logo_size.x > this.logo_size.y) ? this.logo_size.x : this.logo_size.y;

        var from = -this.logo_size.y / 2.0;
        var to = this.logo_size.x + this.logo_size.y;
        this.ctx.lineWidth = 20;

        for (var i = from; i < to; i += 45) {
            this.ctx.beginPath();
            this.ctx.moveTo(i, 0);
            this.ctx.lineTo(i + this.logo_size.x, i + this.logo_size.y);
            this.ctx.stroke();
        }
    }
}

$(document).ready(() => {
    var BG = new Background();
    BG.init("panel-logo-content", "logo-canvas-background", "logo-background");
});