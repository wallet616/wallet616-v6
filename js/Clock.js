"use strict";
/**
 * Clock
 * 
 * version: 1.0
 * 
 * Description:
 * Simple class that call function every specified amount of time.
 * 
 * Created by: Piotr Bartela.
 */


class Clock {
    constructor(time = null, func = null) {
        this.active = true;
        this.time = time;

        this.function_warp = func;
        this.loop();
    }

    loop() {
        if (!this.active) return;

        setTimeout(() => {
            this.function_warp();
            this.loop();
        }, this.time);
    }
}



/*
 * Example of simple usage:
 * 

var example = new Clock(200,
    function() {
        console.log("abc");
    });

 *
 * End.
 */