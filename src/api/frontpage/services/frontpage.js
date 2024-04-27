'use strict';

/**
 * frontpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frontpage.frontpage');
