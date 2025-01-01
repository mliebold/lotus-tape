import { CollectionConfig } from "payload";

export const Music: CollectionConfig = {
  slug: "music",
  fields: [
    {
      name: "trackEmbed",
      type: "textarea",
    },
    {
      name: "releaseDate",
      label: "Release Date",
      type: "date",
      defaultValue: new Date(),
    },
  ],
};
