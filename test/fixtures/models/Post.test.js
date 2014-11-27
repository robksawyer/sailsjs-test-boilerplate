/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    body: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string'
    },
    category:{
      type: 'string',
      in: [
        'uncategorized', 'person', 'place', 'thing', 'other'
      ],
      defaultsTo: 'uncategorized'
    },
    img: {
      type: 'json'
    },
    status: {
      type: 'string',
      in: ['published', 'draft', 'banned'],
      defaultsTo: ['published']
    },
    likes: {
      collection: 'like',
      via: 'post'
    },
    comments: {
      collection: 'comment',
      via: 'post'
    },
    owner:{
      model: 'user'
    }
  },

  beforeCreate: function( values, next){
    // Generate and sanitanize slug
    var getSlug = require('speakingurl');
    if (values.slug === null || values.slug === '') {
      values.slug = values.body.toString().substr(0,15);
    }
    values.slug = getSlug(values.slug);
  },

  afterValidation: function(values, next) {

    // Generate and sanitanize slug
    var getSlug = require('speakingurl');
    if (values.slug === null || values.slug === '') {
      values.slug = values.title;
    }
    values.slug = getSlug(values.slug);

    next();
  }

};

