import { styled, List, ListIcon, ListItem } from "@chakra-ui/react";

const Item = styled(ListItem, {
  baseStyle: {
    bgImage: "url('/assets/icons/check_icon.svg')",
    lineHeight: "24px",
    fontSize: "18px",
    verticalAlign: "middle",
    color: "#959EB6",
    bgRepeat: "no-repeat",
    bgPos: "left center",
    bgSize: "20px",
    pl: "30px",
  },
});

export const ListElements = {Item};
