/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
    NProgress.start();
    NProgress.configure({ ease: 'ease', speed: 600 });
(function ($) {
    "use strict";

    $(document).ready(function(){



    // setTimeout(function() { NProgress.done();   }, 1000);


NProgress.done(true);

        $(".post-content").fitVids();

    });

}(jQuery));