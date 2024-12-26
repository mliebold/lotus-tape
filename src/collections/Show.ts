import { CollectionConfig } from "payload";

export const Shows: CollectionConfig = {
  slug: "shows",
  fields: [
    {
      name: "date",
      type: "date",
    },
    {
      name: "venue",
      type: "text",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "ticketLink",
      type: "text",
    },
  ],
};
