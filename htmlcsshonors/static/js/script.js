// Honors object
var Honors = (function ($) {
     'use strict';
     var highlightToday = function () {

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

     }
     return {
        'highlightToday': highlightToday
     }
 })(jQuery);

// Document ready
jQuery(function () {
    'use strict';
    Honors.highlightToday();
});