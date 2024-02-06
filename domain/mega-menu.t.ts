export type MegaMenuItemDataType = {
  title: string;
  sections?: Array<MegaMenuSectionType>;
};

export type MegaMenuSectionType = {
  title: string;
  description?: string;
  sectionElements: Array<{ title: string; iconUrl: string }>;
};

export type MegaMenuDataType = Array<MegaMenuItemDataType>;
