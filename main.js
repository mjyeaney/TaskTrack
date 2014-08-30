$(function(){
    // Matches the width of swimlanes to the current timeline scope
    function matchTimelineWidth(){
        var pos = $('ol.timeline li').last()[0].getBoundingClientRect();
        $('ol.projects li').width(pos.left + pos.width);
    };

    matchTimelineWidth();

    // Synchronize scrolling between project area and timeline
    $('#planChart').on('scroll', function(){
        $('#timeline').scrollLeft($(this).scrollLeft());
    });

    $('#slider').slider();
});
