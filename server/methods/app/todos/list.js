import SimpleSchema from "simpl-schema";

new ValidateMethod({
    name : 'todos.list',
    validate : new SimpleSchema ({
        options : {type : QueryOptionSchema, optional : true}
    }).validator(),
    run: function (data) {
        this.unblock();
        const { options } = data 

        return Fetch(Todos, {} , options , 'todos');
    }
})