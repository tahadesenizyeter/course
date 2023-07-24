Template.pagesTodos.onRendered(function() {
    Meteor.call('todos.list', {} , function(error, result) { 
        console.log(error,result);
    });
});