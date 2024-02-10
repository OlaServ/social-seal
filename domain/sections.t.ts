export interface ISection {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionBody: string;
}

export interface ISectionWithButton extends ISection {
  sectionButtonText: string;
  onClickSectionButton?: () => void;
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
  sectionData: ISection,
  counters: Array<ICounter>;
}

export interface ISwiperSection {
  sectionData: ISectionWithButton;
  imageUrls: Array<string>;
}
