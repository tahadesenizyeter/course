
Template.pagesWorking.onCreated(function() { 
    this.count = new ReactiveVar(0);

    this.maps = new ReactiveDict(null, {
        name : 'taha',
        lastname : 'atar',
        count : 0
    })
});

Template.pagesWorking.onRendered(function() {
    const self = this ;
    
    this.autorun(function() { 
        const count = self.count.get();
        
        console.log(count)
    });
    this.autorun(function() { 
        Meteor.call('todos', 'my_id-1', function(error, result) { 
            
        console.log(error,result)
        })
    });

    
    
});

Template.pagesWorking.helpers({
    count: function() {
        return Template.instance().count
    },
    maps: function() {
        return Template.instance().maps
    },
    todos: function() {
        return Todos.find().fetch();
    }
});



Template.pagesWorking.events({ 
    'click .brd-add': function(event, template) { 
        template.count.set(template.count.get()+1)
        template.maps.set('count',template.maps.get('count')+1)
    }, 
    'click .brd-insert': function(event, template) { 
        Todos.insert({title: 'my-todo', state :'in-process'});  
    }
});

