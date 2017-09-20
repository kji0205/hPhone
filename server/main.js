import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    getIP: function(){
        var ip = this.connection.clientAddress;
        return ip;
    }
});