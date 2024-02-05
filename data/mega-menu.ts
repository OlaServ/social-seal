import { MegaMenuDataType } from "@/domain/mega-menu.t";

export const MegaMenuData : MegaMenuDataType = [
  { title: "Managment" },
  { title: "Marketing" },
  { title: "Increase Sales" },
  { title: "Services", sections: [
    {title: "Fundamentals", sectionElements: [
        {title: "Strategy Planning", iconSrc: "/assets/icons/route.svg"}

    ]}
  ] },
  { title: "Plans & Pricing"},
];
