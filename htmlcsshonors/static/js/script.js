var Honors = window.Honors || {};

Honors = (function ($) {

     'use strict';

     return {

        openLinkInNewWindow: function () {
            $('a.js-external, a[rel="external"]').on('click', function (event) {
                var href;
                href = $(this).attr('href');
                window.open(href);
                event.preventDefault();
            });
        },

        highlightToday: function () {

            // Today's date
            var now = moment();
            var year = moment().year();
            var month = moment().month();
            var date = moment().date();
            var today = moment().year(year).month(month).date(date);

            // Class dates
            var date_list = [];
            $('tr.row-date').each(function () {
                var item = $(this).attr('class').split(/\s+/);
                date_list = date_list.concat(item);
            });

            // Highlights
            $.each(date_list, function (index, item) {
                if (moment(item).isSame(today, 'day')) {
                    $('tr.' + item).addClass('golden');
                }
            });

        },

        ready: function () {
            this.openLinkInNewWindow();
            this.highlightToday();
        }

     };

 }(jQuery));

jQuery(document).ready(function () {
    'use strict';
    Honors.ready();
});
