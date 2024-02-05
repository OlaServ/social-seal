import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

type IconNameType = "chevron";

interface IIconProps extends IconProps {
  iconName: IconNameType;
}

const getIconParams = (iconName: IconNameType) => {
  switch (iconName) {
    case "chevron":
      return {
        path: (
          <path
            d="M6 9.5L12 15.5L18 9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ),
        viewBox: "0 0 24 25",
        fill: "none",
      };
  }
};

export const Icon = ({ iconName, ...rest }: IIconProps) => {
  const { path, viewBox, fill } = getIconParams(iconName);

  return (
    <ChakraIcon
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {path}
    </ChakraIcon>
  );
};
