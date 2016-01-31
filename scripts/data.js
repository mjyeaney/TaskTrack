//
// Create hosting container for our app scope.
//
if (typeof app === 'undefined') app = {};

//
// Returns the list of known views
//
app.GetViews = function(){
    var data = [];
    data.push({
        ID : '78d64dfa-28d5-4f01-8738-e9696391eb4f',
        Name : 'Debugging Test'
    });
    return data;
};

//
// Read remote data (or generate fake data)
//
app.GetViewData = function(id){
    // Basic view data 
    var view = {};
    view.Name = 'Debugging Test';
    view.Description = 'This is a test view used for debugging general behaviors';
    view.Tags = [];
    view.ID = '78d64dfa-28d5-4f01-8738-e9696391eb4f'; // bogus - doesn't mater yet.
    view.Lanes = [];

    // define some lanes
    view.Lanes.push({
        Name : 'Project 1',
        Description : 'Sample project #1.',
        ID : '0c7848b2-aec8-4dfb-8629-322798daf45a',
        Tags : [],
        Activities : []
    });
    view.Lanes.push({
        Name : 'Project 2',
        Description : 'Sample project #2.',
        ID : '0c7848b2-aec8-4dfb-8629-322798daf45b',
        Tags : [],
        Activities : []
    });
    view.Lanes.push({
        Name : 'Project 3',
        Description : 'Sample project #3.',
        ID : '0c7848b2-aec8-4dfb-8629-322798daf45c',
        Tags : [],
        Activities : []
    });

    // How about some activities for our lanes
    // May -> July
    view.Lanes[0].Activities.push({
        Name : 'Task 1',
        Tags : [],
        StartDate : '2014-05-01',
        EndDate : '2014-07-31',
        Completed : false,
        Description : ''
    });
    // June -> August
    view.Lanes[0].Activities.push({
        Name : 'Task 2', 
        Tags : [],
        StartDate : '2014-06-01',
        EndDate : '2014-08-31',
        Completed : false,
        Description : ''
    });
    // Sept -> Nov
    view.Lanes[0].Activities.push({
        Name : 'Task 3',
        Tags : [],
        StartDate : '2014-09-01',
        EndDate : '2014-11-30',
        Completed : false,
        Description : ''
    });
    // June -> Sept
    view.Lanes[0].Activities.push({
        Name : 'Task 4', 
        Tags : [],
        StartDate : '2014-07-01',
        EndDate : '2015-09-30',
        Completed : false,
        Description : ''
    });
    // Oct -> Nov
    view.Lanes[0].Activities.push({
        Name : 'Task 5', 
        Tags : [],
        StartDate : '2014-10-01',
        EndDate : '2014-12-31',
        Completed : false,
        Description : ''
    });

    // just duplicate activites for other lanes
    // May -> July
    view.Lanes[1].Activities.push({
        Name : 'Task 1',
        Tags : [],
        StartDate : '2014-05-01',
        EndDate : '2014-07-31',
        Completed : false,
        Description : ''
    });
    // Sept -> Nov
    view.Lanes[1].Activities.push({
        Name : 'Task 3',
        Tags : [],
        StartDate : '2014-09-01',
        EndDate : '2014-12-15',
        Completed : false,
        Description : ''
    });
    // June -> Sept
    view.Lanes[1].Activities.push({
        Name : 'Task 4', 
        Tags : [],
        StartDate : '2014-07-01',
        EndDate : '2015-01-31',
        Completed : false,
        Description : ''
    });
    // Oct -> Nov
    view.Lanes[1].Activities.push({
        Name : 'Task 5', 
        Tags : [],
        StartDate : '2014-10-01',
        EndDate : '2014-12-31',
        Completed : false,
        Description : ''
    });

    // Sept -> Nov
    view.Lanes[2].Activities.push({
        Name : 'Task 1',
        Tags : [],
        StartDate : '2014-07-01',
        EndDate : '2014-09-30',
        Completed : false,
        Description : ''
    });
    // June -> Sept
    view.Lanes[2].Activities.push({
        Name : 'Task 2', 
        Tags : [],
        StartDate : '2014-06-01',
        EndDate : '2014-07-30',
        Completed : false,
        Description : ''
    });
    // Oct -> Nov
    view.Lanes[2].Activities.push({
        Name : 'Task 3', 
        Tags : [],
        StartDate : '2014-09-01',
        EndDate : '2014-11-31',
        Completed : false,
        Description : ''
    });
    view.Lanes[2].Activities.push({
        Name : 'Task 4',
        Tags : [],
        StartDate : '2014-07-01',
        EndDate : '2014-09-30',
        Completed : false,
        Description : ''
    });
    // June -> Sept
    view.Lanes[2].Activities.push({
        Name : 'Task 5', 
        Tags : [],
        StartDate : '2014-06-01',
        EndDate : '2014-07-30',
        Completed : false,
        Description : ''
    });
    // Oct -> Nov
    view.Lanes[2].Activities.push({
        Name : 'Task 6', 
        Tags : [],
        StartDate : '2014-09-01',
        EndDate : '2014-11-31',
        Completed : false,
        Description : ''
    });

    return view;
};
