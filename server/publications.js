Meteor.publish('landMineRecord', function() {
  return landMineRecord.find();
});
Meteor.publish('hphone', function() {
  return hphone.find();
});
// Meteor.publish('tasks', function() {
//   return Tasks.find();
// });