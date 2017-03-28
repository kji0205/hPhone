Meteor.subscribe('hphone');
Template.hphonelist.helpers({
  hphone: function() {
    return hphone.find();
  }
});