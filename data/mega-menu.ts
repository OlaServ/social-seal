import { MegaMenuDataType } from "@/domain/mega-menu.t";

export const MegaMenuData: MegaMenuDataType = [
  { title: "Managment" },
  { title: "Marketing" },
  { title: "Increase Sales" },
  {
    title: "Services",
    sections: [
      {
        title: "Fundamentals",
        sectionElements: [
          { title: "Strategy Planning", iconUrl: "/assets/icons/route.svg" },
          {
            title: "Profile Setup",
            iconUrl: "/assets/icons/magic-wand-01.svg",
          },
          { title: "Theming & Branding", iconUrl: "/assets/icons/colors.svg" },
          { title: "Training", iconUrl: "/assets/icons/award-03.svg" },
        ],
      },
      {
        title: "Content",
        sectionElements: [
          {
            title: "Research & Planning",
            iconUrl: "/assets/icons/search-lg.svg",
          },
          {
            title: "Post Creation",
            iconUrl: "/assets/icons/image-01.svg",
          },
          {
            title: "Video Creation",
            iconUrl: "/assets/icons/video-recorder.svg",
          },
          {
            title: "Keyword Optimization",
            iconUrl: "/assets/icons/line-chart-up-03.svg",
          },
        ],
      },

      {
        title: "Public Relations",
        sectionElements: [
          { title: "Inbox Managment", iconUrl: "/assets/icons/inbox-01.svg" },
          {
            title: "Social Listening",
            iconUrl: "/assets/icons/message-notification-circle.svg",
          },
          {
            title: "Brand Reputation",
            iconUrl: "/assets/icons/activity-heart.svg",
          },
          {
            title: "Crisis Management",
            iconUrl: "/assets/icons/announcement-01.svg",
          },
        ],
      },

      {
        title: "Market Growth",
        sectionElements: [
          {
            title: "Paid Advertising Setup",
            iconUrl: "/assets/icons/dataflow-04.svg",
          },
          {
            title: "Campaign Management",
            iconUrl: "/assets/icons/shield-dollar.svg",
          },
          {
            title: "Strategy Optimization",
            iconUrl: "/assets/icons/chart-breakout-circle.svg",
          },
          {
            title: "Analytics & Reporting",
            iconUrl: "/assets/icons/presentation-chart-02.svg",
          },
        ],
      },
    ],
  },
  {
    title: "Plans & Pricing",

    sections: [
      {
        title: "Managment",
        description:
          "Great for those starting up in Social Media and looking for a regular management service to keep up.",
        sectionElements: [
          { title: "Rates", iconUrl: "/assets/icons/route.svg" },
          { title: "Features", iconUrl: "/assets/icons/magic-wand-01.svg" },
          { title: "Sign Up", iconUrl: "/assets/icons/colors.svg" },
        ],
      },
      {
        title: "Growth Plans",
        description:
          "Geared for those looking to grow their Social Media presence and capitalize on marketing benefits.",
        sectionElements: [
          { title: "Rates", iconUrl: "/assets/icons/search-lg.svg" },
          { title: "Features", iconUrl: "/assets/icons/stars-03.svg" },
          { title: "Sign Up", iconUrl: "/assets/icons/user-right-01.svg" },
        ],
      },

      {
        title: "Public Relations",
        sectionElements: [
          { title: "Inbox Managment", iconUrl: "/assets/icons/inbox-01.svg" },
          {
            title: "Social Listening",
            iconUrl: "/assets/icons/message-notification-circle.svg",
          },
          {
            title: "Brand Reputation",
            iconUrl: "/assets/icons/activity-heart.svg",
          },
          {
            title: "Crisis Management",
            iconUrl: "/assets/icons/announcement-01.svg",
          },
        ],
      },

      {
        title: "Market Growth",
        sectionElements: [
          {
            title: "Paid Advertising Setup",
            iconUrl: "/assets/icons/dataflow-04.svg",
          },
          {
            title: "Campaign Management",
            iconUrl: "/assets/icons/shield-dollar.svg",
          },
          {
            title: "Strategy Optimization",
            iconUrl: "/assets/icons/chart-breakout-circle.svg",
          },
          {
            title: "Analytics & Reporting",
            iconUrl: "/assets/icons/presentation-chart-02.svg",
          },
        ],
      },
    ],
  },
];
