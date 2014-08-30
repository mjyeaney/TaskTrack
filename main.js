$(function(){
    // Matches the width of swimlanes to the current timeline scope
    function matchTimelineWidth(){
        var pos = $('ol.timeline li').last()[0].getBoundingClientRect();
        $('ol.projects li').width(pos.left + pos.width);
    };

    // Synchronize scrolling between project area and timeline
    $('#planChart').on('scroll', function(){
        $('#timeline').scrollLeft($(this).scrollLeft());
        $('ol.projects li h3').css('margin-left', $(this).scrollLeft()); 
    });

    // Create zoom slider
    $('#slider').slider({
        animate: true,
        min: 0,
        max: 100,
        value: 50
    }).on('slidechange', function(e, ui){
        console.log(ui.value);

        var zoom = Math.max(18, ui.value);
        var size = (30.0 * (zoom / 100.0));

        $('ol.timeline li').width(size + 'em');
        matchTimelineWidth();
    });

    // Establish basic timeline width
    matchTimelineWidth();
});
