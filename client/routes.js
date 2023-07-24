import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/',{

    name : "public.home",
    action : function (params,queryParams) {
        this.render("publicLayoutsDefault" , {page : 'pagesHome'})
    }

})
FlowRouter.route('/about',{

    name : "public.about",
    action : function (params,queryParams) {
        this.render("publicLayoutsDefault" , {page : 'pagesAbout'})
    }

})
FlowRouter.route('/contact',{

    name : "public.contact",
    action : function (params,queryParams) {
        this.render("publicLayoutsDefault" , {page : 'pagesContact'})
    }

})
FlowRouter.route('/working',{

    name : "public.working",
    action : function (params,queryParams) {
        this.render("publicLayoutsDefault" , {page : 'pagesWorking'})
    }

})



