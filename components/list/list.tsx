import { List as ChakraList, ListItem, ListProps } from "@chakra-ui/react";
import { ListElements as el } from "./list.elements";
import uniqid from "uniqid";

interface IListProps extends ListProps {
  listItems: Array<string>;
}

export const List = ({ listItems, ...rest }: IListProps) => {
  return (
    <ChakraList spacing="16px" {...rest}>
      {listItems.map((item) => (
        <el.Item key={uniqid()}>{item}</el.Item>
      ))}
    </ChakraList>
  );
};
