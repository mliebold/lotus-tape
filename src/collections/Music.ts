import { CollectionConfig } from "payload";

export const Music: CollectionConfig = {
  slug: "music",
  fields: [
    {
      name: "soundcloudURL",
      label: "Soundcloud URL",
      type: "text",
      required: true,
    },
    {
      name: "releaseDate",
      label: "Release Date",
      type: "date",
      defaultValue: new Date(),
      required: true,
    },
  ],
};
