// @ts-nocheck
"use strict";

/**
 * product service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::product.product",
  ({ strapi }) => ({
    updateImage: async (args: { id: string; files: Object }) => {
      const { id, files } = args;
      const res = await strapi;
      strapi.plugins.upload.services.upload.upload({
        data: {
          ref: "api::product.product",
          refId: id,
          field: "img",
        },
        files,
      });
      return res;
    },
    getTotalProductsInventory: async () => {
      const entries = await strapi.entityService.findMany(
        "api::product.product"
      );
      const totalInventory = entries.reduce(
        (acc: any, current: { inventory: any }) => {
          return acc + current.inventory;
        },
        0
      );
      return totalInventory;
    },
  })
);
