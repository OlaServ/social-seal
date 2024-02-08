import { ICountersSection } from "@/domain/sections.t";

export const CountersSectionData: ICountersSection = {
  subtitle: "Social Media Management is",
  sectionTitle: "Building Brands \nCreating Connections \nDriving Sales",
  body: "Social Media is more than just posting and showing off how many followers you have. It's a valuable addition to your marketing strategy that builds trust and creates connections with potential customers to drive sales and increase your revenue. \n\nSave your time and money by partnering with us and start seeing results that give you the highest return on investment. \n\nAfter all; when you grow, we grow together.",
  counters: [
    {
      text: "Offices",
      number: 100,
      backgroundUrl: "/assets/images/counter-1.png",
      colorVariant: "counter.orange",
    },

    {
      text: "Workers",
      number: 10,
      backgroundUrl: "/assets/images/counter-2.png",
      colorVariant: "counter.blue",
      bgPlacement: "right",
    },

    {
      text: "Customers",
      number: 15,
      symbol: "K",
      backgroundUrl: "/assets/images/counter-3.png",
      colorVariant: "counter.teal",
    },

    {
      text: "Projects",
      number: 1300,
      symbol: "+",
      backgroundUrl: "/assets/images/counter-4.png",
      colorVariant: "counter.violet",
    },
  ],
};
