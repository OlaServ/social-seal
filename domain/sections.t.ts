import { IPills } from "./pills.t";
import { ICard } from "./card.t";

export interface ISection {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionBody: string;
  pills?: IPills;
}

interface ISectionButton {
  sectionButtonText: string;
}

export interface ISectionWithButtons extends ISection {
  sectionButtonOne: ISectionButton;
  sectionButtonTwo?: ISectionButton;
}

export interface ICounter {
  number: number;
  symbol?: string;
  text: string;
  backgroundUrl: string;
  colorVariant: string;
  bgPlacement?: "left" | "right";
}

export interface ICountersSection {
  sectionData: ISection;
  counters: Array<ICounter>;
}

export interface ISwiperSection {
  sectionData: ISectionWithButtons;
  imageUrls: Array<string>;
}

export interface IBrandSection {
  sectionData: Omit<ISectionWithButtons, "sectionBody">;
  swipers: Array<Array<string>>;
  bottomText: string;
}

export interface ICreativeDesignSection {
  sectionData: ISectionWithButtons;
  list: { listTitle: string; listItems: Array<string> };
}

export interface IWhatWeDoSection {
  sectionData: ISectionWithButtons;
  cards: Array<ICard>;
}
