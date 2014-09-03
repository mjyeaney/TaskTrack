//
// Create hosting container for our app scope.
//
if (typeof app === 'undefined') app = {};

//
// Returns timeline properties given the current view
//
app.GetTimelineProperties = function(currentView){
    var l = 0,
        a = 0,
        currActivity = null,
        minDate = null,
        maxDate = null,
        startDate = moment(),
        currStartDate = null,
        endDate = moment().add(6, 'M'),
        currEndDate = null,
        quarterMonth = 1,
        timeLineBlocks = [];

    // Establish the min / max start/end date for the timeline
    for (l = 0; l < currentView.Lanes.length; l++){
        for (a = 0; a < currentView.Lanes[l].Activities.length; a++){
            currActivity = currentView.Lanes[l].Activities[a];
            currStartDate = moment(currActivity.StartDate);
            currEndDate = moment(currActivity.EndDate);

            if (currStartDate < startDate){
                startDate = currStartDate;
            }

            if (currEndDate > endDate){
                endDate = currEndDate;
            }
        }
    }

    // Start on quater-alignments
    quarterMonth = (Math.floor((startDate.month() + 1) / 3) * 3) + 1;
    if (startDate.month() >= quarterMonth){
        startDate.month(quarterMonth - 1);
    } 

    // Let's create our array of timeline blocks
    while (true){
        timeLineBlocks.push({
            MonthName : startDate.format('MMM'),
            Month : startDate.month(),
            Year : startDate.format('YYYY'),
            Quarter : startDate.format('Q')
        });

        if ((startDate < endDate) && (startDate.month() != endDate.month())){
            startDate.add(1, 'M');
        } else {
            break;
        }
    }

    return timeLineBlocks;
};

//
// Returns visual properties for the specified lane; drives the render logic.
// 
app.GetLaneProperties = function(lane){
    var laneInfo = {},
        r = 0,
        act = null;

    laneInfo.Name = lane.Name;
    laneInfo.Rows = [];

    for (r = 0; r < lane.Activities.length; r++){
        act = lane.Activities[r];
        laneInfo.Rows.push(act);
    }

    return laneInfo;
};
