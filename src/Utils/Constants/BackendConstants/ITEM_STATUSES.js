export const ITEM_STATUSES = {
  ACTIVE: {
    item_status: "Active",
    description: "Item is in circulation",
  },
  INACTIVE: {
    item_status: "Inactive",
    description:
      "Item is undergoing repair/maintenance but will be active later",
  },
  DESIGNATED: {
    item_status: "Designated",
    description:
      "Not borrowed but item is currently deployed to an APC employee",
  },
  FOR_REPAIR: {
    item_status: "For Repair",
    description: "Item is damaged thus, for repair",
  },
  BEYOND_REPAIR: {
    item_status: "Beyond Repair",
    description: "Item is unfixable",
  },
  RETIRED: {
    item_status: "Retired",
    description: "Item retired due to age",
  },
  LOST: {
    item_status: "Lost",
    description: "Item is lost",
  },
};
