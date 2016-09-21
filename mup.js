module.exports = {
  servers: {
    one: {
      host: 'ec2-52-78-120-98.ap-northeast-2.compute.amazonaws.com',
      username: 'ubuntu',
      pem: '/home/jimmy/Downloads/kji0205.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'hPhone',
    path: '../hPhone',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://localhost',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord',
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
