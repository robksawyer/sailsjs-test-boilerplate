/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

//var uuid = require('uuid');

module.exports = {

  attributes: {

    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      unique: true
    },
    emailConfirmationStatus: {
      type: 'boolean'
    },
    phoneConfirmationStatus: {
      type: 'boolean'
    },
    likes: {
      collection: 'like',
      via: 'owner'
    },
    comments: {
      collection: 'comment',
      via: 'owner'
    },
    posts: {
      collection: 'post',
      via: 'owner'
    },
    status: {
      type: 'string',
      enum: ['active', 'unconfirmed', 'banned'],
      defaultsTo: [1]
    },
    role: {
      type: 'string',
      defaultsTo: 'anonymous'
    },
    toJSON: function() {
      var obj = this.toObject();
      if(obj)
        delete obj.password;
      return obj;
    }
    
  }
};
