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
		// var clientIP = this.connection.clientAddress;

// console.log('clientIP :: ' + ip);
		var userObj = Meteor.user();
		var userEmail = '';
		if (userObj) {
			userEmail = Meteor.user().emails[0].address;	
		}
		

	    var record = {
	      game: 'landMine',
	      win: 'Y',
	      clientIp: ip || 'unknown',
	      time: nTime,
	      now: today,
	      UTC: UTC,
	      email: userEmail
	    };
	    if (record.clientIp) {
	    	landMineRecord._id = landMineRecord.insert(record);	
	    }
    	// landMineRecord.update();
	},
	// Game Hack
	fnTdColorChange = function(){
		var obj = document.querySelectorAll('td');
        var length = obj.length;
        for (var i = length - 1; i >= 0; i--) {
            obj[i].style.color = 'black';
        }
	},
	fnCheckMine = function(){
		console.log('fnCheckMine');
        // if (nowPlaying == 'N') { return false;}
        // if (td[i].innerText === 'X') {
        //     // console.log('X');
        //     td[i].className = 'td4';
        // } else {
        //     // alert('Game Over');
        //     fnShowX();
        // }
	}
});

Template.mine.helpers({
	
	landMineRecord: function() {
		return landMineRecord.find({
			"email": {
				$exists: true
			}
		}, {
			limit: 10,
			sort: {time: -1},
		});
	},
	"offset": function(index){
        index += 1;
        // console.log("index = "+index);
        return index;
    }
});

// Template.mine.helpers({
//   templateGestures: {
//     'press .row': function (event, templateInstance) {
//       /* `event` is the Hammer.js event object */
//        `templateInstance` is the `Blaze.TemplateInstance` 
//       /* `this` is the data context of the element in your template, so in this case `someField` from `someArray` in the template */
//       console.log('hammer');
//       fnCheckMine();
//     }
//   }
// });

// Template.mine.events({
//   templateGestures: {
// 	  'press .row': function (event) {
// 	     // Do something when user swipes left on .item .panel (elements(s) inside the template html) 
// 	    /* The `this` context is the `Blaze.TemplateInstance` */
// 	    console.log('hammer evt');
// 	  }
// 	}
// });

if (Meteor.isClient) {

  // $(function () {
  //   var hammertime = $('body').hammer({
  //     swipe_velocity: 0.45
  //   });


  //   hammertime.on('doubletap', '.row', function() {
  //     alert('yay');
  //   })
  // });

}

// Template.mine.events({
// 	'tabhold document': function(e) {
// 		console.log('tabhold back');
// 	},
// 	'click .row': function(e) {
// 		console.log('click back');
// 	}
// });

// Template.body.events({
// 	'tabhold .row': function(e) {
// 		console.log('body tabhold back');
// 	},
// 	'click .row': function(e) {
// 		console.log('body click back');
// 	}
// });