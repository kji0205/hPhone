Template.mine.onRendered(function() {
  	success= function() {

		Meteor.call('getIP', function(error, result){
            if(error){
               //Error handling code
            }
            else {
                Session.set("ip", result);
            }
        });

		var ip = Session.get("ip");

		var nTime = $('#lblTime').val() || 60;
		var today = new Date();
		var year = today.getUTCFullYear();
		var month = today.getUTCMonth() + 1;
		var day = today.getUTCDate() + 1;
		var UTC = today.getUTCMilliseconds();
		var hour = today.getUTCHours();
		var minute = today.getUTCMinutes();
		var today = year + '/' + month + '/' + day + ' ' + hour + ':' + minute;

	    var record = {
	      game: 'landMine',
	      win: 'Y',
	      clientIp: ip,
	      time: nTime,
	      now: today,
	      UTC: UTC
	    };
	    if (record.clientIp) {
	    	landMineRecord._id = landMineRecord.insert(record);	
	    }
    	// landMineRecord.update();
	}
});

Template.mine.helpers({
	
	landMineRecord: function() {
		return landMineRecord.find({}, {
			limit: 10,
			sort: {time: -1}
		});
	},
	"offset": function(index){
        index += 1;
        // console.log("index = "+index);
        return index;
    }
});