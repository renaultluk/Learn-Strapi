'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        console.log("CALLED")
        const products = await strapi.services.products.find(ctx.query)
        return products.map((product) => product.title)
    }
};
