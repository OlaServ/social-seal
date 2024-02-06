import { IconNameType } from "@/components/icon/icon";

export type MegaMenuItemDataType = {
  title: string;
  sections?: Array<MegaMenuSectionType>;
};

export type MegaMenuSectionType = {
  title: string;
  description?: string;
  sectionElements: Array<{ title: string; iconUrl: IconNameType }>;
};

export type MegaMenuDataType = Array<MegaMenuItemDataType>;
