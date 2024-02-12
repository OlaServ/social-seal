export interface ISection {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionBody: string;
  pills?: {
    title: string;
    pillsList: Array<{
      text: string;
      colorVariant: "orange" | "yellow" | "blue" | "red";
    }>;
  };
}

export interface ISectionWithButtons extends ISection {
  sectionButtonOneText: string;
  onClickSectionButton?: () => void;
  sectionButtonTwoText?: string;
  onClickSectionButtonTwo?: () => void;
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
