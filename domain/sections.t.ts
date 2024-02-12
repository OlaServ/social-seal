import { IPills } from "./pills.t";

export interface ISection {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionBody: string;
  pills?: IPills;
}

export interface ISectionWithButtons extends ISection {
  sectionButtonOne: {
    sectionButtonOneText: string;
  };
  sectionButtonTwo?: {
    sectionButtonTwoText: string;
  };
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
