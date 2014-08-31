$(function(){
    // Matches the width of swimlanes to the current timeline scope
    var setupTimelineWidth = function(){
        var pos = $('ol.timeline li').last()[0].getBoundingClientRect();
        $('ol.projects li').width(pos.left + pos.width);
    };

    // Synchronize scrolling between project area and timeline
    $('#planChart').on('scroll', function(){
        $('#timeline').scrollLeft($(this).scrollLeft());
        $('ol.projects li h3').css('margin-left', Math.max(4, $(this).scrollLeft()));
    });

    // Create zoom slider
    $('#slider').slider({
        animate: true,
        min: 0,
        max: 100,
        value: 50
    }).on('slidechange', function(e, ui){
        var zoom = Math.max(18, ui.value);
        var size = (30.0 * (zoom / 100.0));
        $('ol.timeline li').width(size + 'em');
        setupTimelineWidth();
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
            
            var startPos = (startMonth / 12.0) * 100.0;
            var width = (moment(row.EndDate).diff(row.StartDate, 'month') / 12.0) * 100.0;

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
