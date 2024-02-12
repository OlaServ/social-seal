import { ISectionWithButtons } from "@/domain/sections.t";

export const ThreatMonitoringSectionData: ISectionWithButtons = {
  sectionTitle: "Social Gossiping Slowing You Down?",
  sectionSubtitle: "Keeping You Covered",
  sectionButtonOne: {
    sectionButtonOneText: "Protect Your Brand"
  },

  sectionButtonTwo: {
    sectionButtonTwoText: "Find Out more",
  },
  pills: {
    pillsTitle: "The most common threats we encounter:",
    pillsList: [
      { colorVariant: "orange", text: "Brand Impresonation" },
      { colorVariant: "yellow", text: "Compromised Account" },
      { colorVariant: "orange", text: "Scams" },
      { colorVariant: "blue", text: "Hi-jacked Posts" },
      { colorVariant: "yellow", text: "Bad Sentiment" },
      { colorVariant: "pink", text: "Bad Reviews" },
      { colorVariant: "green", text: "Competitor Envy" },
      { colorVariant: "blue", text: "False Media" },
      { colorVariant: "red", text: "Low Social Authority" },
      { colorVariant: "violet", text: "Information Inaccuracy" },
      { colorVariant: "purple", text: "Missed Messages" },
    ],
  },
  sectionBody:
    "Staying on top of how your brand is being used is an important aspect to <u>protect your identity and reputation</u>.\n\nOur sophisticated <u>threat monitoring</u> system enables us to <u>quickly identify threats</u> towards your brand and deal with them to <u>prevent damage</u> to your reputation.",
};
