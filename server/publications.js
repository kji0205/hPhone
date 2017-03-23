Meteor.publish('landMineRecord', function() {
  return landMineRecord.find();
});