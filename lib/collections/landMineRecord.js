landMineRecord = new Mongo.Collection('landMineRecord');

landMineRecord.allow({
  insert: function(rName, rType) {
    // only allow posting if you are logged in
    //return !! rName;
    return true;
  },
  update: function(){
  	return true;
  }, 
});
