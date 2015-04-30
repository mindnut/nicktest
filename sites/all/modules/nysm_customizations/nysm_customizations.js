/**
 * @file nysm_customizations.js
 * 
 */
(function ($) {
/* Original Backup
  Drupal.behaviors.nysm_customizations = {
    attach: function() {
      $('#block-nysm-customizations-calendar-picker').once('nysm-customizations', function() {
        var current_date = new Date(Drupal.settings.nysm_event_default_date);
        Drupal.settings.nysm_customizations_current_date = current_date.getFullYear() +
          '-' + nysm_customizations_pad(current_date.getMonth() + 1);
        $('#nysm-event-nojs').hide();
        $('#nysm-datepicker').datepicker({
          defaultDate: Drupal.settings.nysm_event_default_date,
          monthNames: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          showOtherMonths: true,
          selectOtherMonths: true,
          onSelect: function(dateText, inst) {
            //Use date text to figure out week.
            var date = new Date(dateText);
            date.setDate(date.getDate() - date.getDay());
            var new_date_text = date.getFullYear() +
              '-' + nysm_customizations_pad(date.getMonth() + 1) +
              '-' + nysm_customizations_pad(date.getDate());
            var uri = Drupal.settings.nysm_event_base_uri + '/' + new_date_text;
            window.location = uri;
          },
          onChangeMonthYear: function(year, month, inst) {
            Drupal.settings.nysm_customizations_current_date = nysm_customizations_pad(year) +
              '-' + nysm_customizations_pad(month);
            setTimeout(nysm_customizations_update_month, 100);
          }
        });
        nysm_customizations_update_month();
      });
    }
  }
*/
/*
  Drupal.behaviors.nysm_customizations = {
    attach: function() {
      $('#block-nysm-customizations-calendar-picker').once('nysm-customizations', function() {
        var current_date = new Date(Drupal.settings.nysm_event_default_date);
        Drupal.settings.nysm_customizations_current_date = current_date.getFullYear() +
          '-' + nysm_customizations_pad(current_date.getMonth() + 1);
        $('#nysm-event-nojs').hide();
        $('#nysm-datepicker').datepicker({
          defaultDate: Drupal.settings.nysm_event_default_date,
          monthNames: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          showOtherMonths: true,
          selectOtherMonths: true,
          onSelect:           
          function(dateText, inst) {
            //Use date text to figure out week.
            var date = new Date(dateText);
            date.setDate(date.getDate());
            var new_date_text = date.getFullYear() + 
            	nysm_customizations_pad(date.getMonth() + 1) + 
            	nysm_customizations_pad(date.getDate());
            var uri = 'datepicker/' + new_date_text;
            $('#nysm-datepicker-details').load(uri+' .view-datepicker-details');
            //window.location = uri;
          },
          onChangeMonthYear: function(year, month, inst) {
            Drupal.settings.nysm_customizations_current_date = nysm_customizations_pad(year) +
              '-' + nysm_customizations_pad(month);
            setTimeout(nysm_customizations_update_month, 100);
          }
        });
        nysm_customizations_update_month();
      });
    }
  }
  // end new stuff
*/
  Drupal.behaviors.nysm_customizations = {
    attach: function() {
      $('#programs-nav').once('nysm-customizations', function() {
        var current_date = new Date(Drupal.settings.nysm_event_default_date);
        Drupal.settings.nysm_customizations_current_date = current_date.getFullYear() +
          '-' + nysm_customizations_pad(current_date.getMonth() + 1);
        $('#nysm-event-nojs').hide();
        $('#nysm-datepicker-details').hide();
        $('#nysm-datepicker-details .loading').hide();
        $('#nysm-datepicker-details .content').hide();
        $('#nysm-datepicker').datepicker({
          defaultDate: Drupal.settings.nysm_event_default_date,
          monthNames: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          showOtherMonths: true,
          selectOtherMonths: true,
          onSelect:   
          function(dateText, inst) {
	          setTimeout(nysm_customizations_update_month, 50);
          	$('#nysm-datepicker-details .loading').fadeIn('slow');
          	$('#nysm-datepicker-details').show();
            //Use date text to figure out week.
            var date = new Date(dateText);
            date.setDate(date.getDate());
            var new_date_text = date.getFullYear() + 
            	nysm_customizations_pad(date.getMonth() + 1) + 
            	nysm_customizations_pad(date.getDate());
            var uri = '/datepicker/' + new_date_text;
            $('#nysm-datepicker-details .content').load(uri+' .datepicker-details-page', null, function() { 
							//replace headers
/*
							$("#nysm-datepicker-details .content h3").each(function() {
							    var texta = $(this).text();
							    texta = texta.replace("nysm Event", "In The Theater");
							    $(this).text(texta);
							    
							    var textb = $(this).text();
							    textb = textb.replace("Gallery Exhibition", "In The Gallery");
							    $(this).text(textb);
							});					
*/
									
	            $('#nysm-datepicker-details .loading').fadeOut('slow');
	            $('#nysm-datepicker-details .content').fadeIn('slow');
	            
            });

            //window.location = uri;
            //$('#nysm-datepicker-details').show();

          },
          onChangeMonthYear: function(year, month, inst) {
            Drupal.settings.nysm_customizations_current_date = nysm_customizations_pad(year) +
              '-' + nysm_customizations_pad(month);
            setTimeout(nysm_customizations_update_month, 100);
          }
        });
        $('.ui-datepicker-today').removeClass('ui-datepicker-current-day');
        nysm_customizations_update_month();
      });
    }
  }
  // end new stuff
  
  function nysm_customizations_update_month() {
    Drupal.settings.nysm_customizations_current_year = year = Drupal.settings.nysm_customizations_current_date.substring(0, 4);
    Drupal.settings.nysm_customizations_current_month = month = Drupal.settings.nysm_customizations_current_date.substring(5);
    var dates = Drupal.settings.nysm_event_dates;
    if (dates[year] != undefined && dates[year][month] != undefined) {
      
      $('.ui-datepicker-calendar td').not('.ui-datepicker-other-month').each(function(index, value) {
        var year = Drupal.settings.nysm_customizations_current_year;
        var month = Drupal.settings.nysm_customizations_current_month;
        var dates = Drupal.settings.nysm_event_dates;
        var date = nysm_customizations_pad(index + 1);
        if (dates[year][month][date] != undefined) {
          $(this).addClass('has-event');
        }
      });
    }

    var datepicker_title = $('#nysm-datepicker').find('.ui-datepicker-title');
    var new_title = '<a href="' + Drupal.settings.nysm_event_base_uri + '/' +
      Drupal.settings.nysm_customizations_current_date +
      '" title="Calendar Month view for ' +
      Drupal.settings.nysm_customizations_current_date + '">' +
      $(datepicker_title).html() + '</a>';
    $(datepicker_title).html(new_title);
  }
  
  function nysm_customizations_pad(number) {
    return (number < 10 ? '0' : '') + number;
  }
  
})(jQuery);
