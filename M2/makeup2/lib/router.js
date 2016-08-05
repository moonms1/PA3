Router.configure({
layoutTemplate: 'layout',
});

Router.route('quiz2');

Router.route('/showDonation/:_id',
       {name:"showDonation",
        data: function(){
const d = Donations.findOne({_id:this.params._id});
console.dir(d);
return d;
}
   }
);
