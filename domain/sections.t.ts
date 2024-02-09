export interface ISection {
  subtitle: string;
  sectionTitle: string;
  body: string;
}

export interface ICounter {
  number: number;
  symbol?: string;
  text: string;
  backgroundUrl: string;
  colorVariant: string;
  bgPlacement?: "left" | "right";
}

export interface ICountersSection extends ISection {
  counters: Array<ICounter>;
}

export interface ISwiperSection extends ISection {
  imageUrls: Array<string>;
}
