export type MegaMenuItemDataType = {
  title: string;
  sections?: Array<MegaMenuSectionType>;
};

export type MegaMenuSectionType = {
  title: string;
  sectionElements: Array<{ title: string; iconSrc: string }>;
};

export type MegaMenuDataType = Array<MegaMenuItemDataType>;
