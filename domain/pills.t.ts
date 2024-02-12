export type PillColorVariantType =
  | "orange"
  | "yellow"
  | "blue"
  | "red"
  | "green"
  | "violet"
  | "pink"
  | "purple";

export interface IPills {
  pillsTitle: string;
  pillsList: Array<{
    text: string;
    colorVariant: PillColorVariantType;
  }>;
}
