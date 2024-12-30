import { addRandomFileNameSuffix } from "@/lib/utils";
import type { CollectionConfig } from "payload";

export const GalleryImages: CollectionConfig = {
  slug: "gallery-images",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "orientation",
      type: "select",
      required: true,
      options: [
        { label: "Landscape", value: "landscape" },
        { label: "Portrait", value: "portrait" },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "visible",
      type: "checkbox",
      label: "Check this box for the image to show in gallery",
      defaultValue: true,
    },
  ],
  upload: true,
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (req.file?.name && data.filename) {
          const newFileName = addRandomFileNameSuffix(data.filename);
          req.file.name = newFileName;
          data.filename = newFileName;
        }
      },
    ],
  },
};
