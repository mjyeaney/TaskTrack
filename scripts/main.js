/* global $ */

$(function(){
    // Top-level click handler
    $(document).on('click', function(){
        // Hide the user profile flyout if visible
        if ($('#userStatus').hasClass('active')) {
            $('#userStatusMenu').hide();
            $('#userStatus').removeClass('active');
        }
    });

    // Matches the width of swimlanes to the current timeline scope
    var setupTimelineWidth = function(){
        var pos = $('ol.timeline li').last()[0].getBoundingClientRect();
        $('ol.projects li').width(pos.left + pos.width);
    };

    // User status / menu behaviors
    $('#userStatus').on('click', function(e){
        $(this).addClass('active');
        $('#userStatusMenu').show();
        e.stopPropagation();
    });

    // Synchronize scrolling between project area and timeline
    $('#planChart').on('scroll', function(){
        $('#timeline').scrollLeft($(this).scrollLeft());
    });

    // Create zoom slider
    $('#slider').slider({
        animate: true,
        min: 10,
        max: 100,
        value: 50
    }).on('slide', function(e, ui){
        var zoom = ui.value,
            size = (30.0 * (zoom / 100.0));

        $('ol.timeline li').width(size + 'em');
        setupTimelineWidth();
    });

    // Options panel collapse
    $('#options .collapseTab').on('click', function(){
        if ($(this).hasClass('expand')){
            $(this).removeClass('expand');
            $('#options').css('right', '0');
        } else {
            $('#options').css('right', '-20em');
            $(this).addClass('expand');
        }
    });

    // Toggle swimlane active state
    $('ol.projects').on('click', 'li', function(e){
        $('ol.projects li').removeClass('active');
        $(this).addClass('active');
        e.stopPropagation();
        e.preventDefault();
    });

    // Get data to render timeline
    var view = app.GetViewData();
    var timeLineInfo = app.GetTimelineProperties(view);

    for (var t = 0; t < timeLineInfo.length; t++){
        var ti = timeLineInfo[t];
        var item = $('<li></li>').text(ti.MonthName);
        var yearText = '';
        if ((t === 0) || (ti.Quarter === '1')){
            yearText = ti.Year.toString() + ' - ';
        }
        if (t % 3 == 0){
            $('<span></span>')
                .addClass('yq')
                .text(yearText + 'Q' + ti.Quarter)
                .appendTo(item);
        }
        item.appendTo('ol.timeline');
    }

    // Draw lanes for this view
    for (var l = 0; l < view.Lanes.length; l++){
        var laneInfo = app.GetLaneProperties(view.Lanes[l]);
        var lane = $('<li></li>').addClass('swimlane');
        var title = $('<h3></h3>').text(laneInfo.Name);
        title.appendTo(lane);

        for (var r = 0; r < laneInfo.Rows.length; r++){
            var row = laneInfo.Rows[r];
            var startMonth = moment(row.StartDate).month();

            startMonth -= timeLineInfo[0].Month;
            
            var startPos = ((startMonth / 12.0) * 100.0).toFixed(2);
            var width = ((moment(row.EndDate).diff(row.StartDate, 'month') / 12.0) * 100.0).toFixed(2);

            var activity = $('<div></div')
                .addClass('row')
                .css('margin-left', startPos + '%')
                .css('width', width + '%')
                .appendTo(lane);

            $('<h5></h5>').text(row.Name)
                .appendTo(activity);
        }
        lane.appendTo('ol.projects');
    }

    // Establish basic timeline width
    setupTimelineWidth();
});
