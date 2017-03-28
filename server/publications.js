Meteor.publish('landMineRecord', function() {
  return landMineRecord.find();
});
Meteor.publish('hphone', function() {
  return hphone.find();
});