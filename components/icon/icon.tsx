import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

export type IconNameType = "chevron" | "route";

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

    case "route": {
      return {
        path: (
          <>
            <g clip-path="url(#clip0_30_806)">
              <g opacity="0.12">
                <path
                  d="M4.1665 6.66667C5.54722 6.66667 6.6665 5.54738 6.6665 4.16667C6.6665 2.78596 5.54722 1.66667 4.1665 1.66667C2.78579 1.66667 1.6665 2.78596 1.6665 4.16667C1.6665 5.54738 2.78579 6.66667 4.1665 6.66667Z"
                  fill="black"
                />
                <path
                  d="M15.8332 18.3333C17.2139 18.3333 18.3332 17.2141 18.3332 15.8333C18.3332 14.4526 17.2139 13.3333 15.8332 13.3333C14.4525 13.3333 13.3332 14.4526 13.3332 15.8333C13.3332 17.2141 14.4525 18.3333 15.8332 18.3333Z"
                  fill="black"
                />
              </g>
              <path
                d="M9.58317 4.16667H9.94517C12.4845 4.16667 13.7542 4.16667 14.2362 4.62275C14.6528 5.01698 14.8375 5.59774 14.725 6.16018C14.5948 6.81085 13.5583 7.54405 11.4851 9.01045L8.09794 11.4062C6.02476 12.8726 4.98816 13.6058 4.85803 14.2565C4.74555 14.8189 4.93018 15.3997 5.34681 15.7939C5.82878 16.25 7.09847 16.25 9.63784 16.25H10.4165M6.6665 4.16667C6.6665 5.54738 5.54722 6.66667 4.1665 6.66667C2.78579 6.66667 1.6665 5.54738 1.6665 4.16667C1.6665 2.78596 2.78579 1.66667 4.1665 1.66667C5.54722 1.66667 6.6665 2.78596 6.6665 4.16667ZM18.3332 15.8333C18.3332 17.214 17.2139 18.3333 15.8332 18.3333C14.4525 18.3333 13.3332 17.214 13.3332 15.8333C13.3332 14.4526 14.4525 13.3333 15.8332 13.3333C17.2139 13.3333 18.3332 14.4526 18.3332 15.8333Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_30_806">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </>
        ),
        viewBox: "0 0 20 20",
        fill: "none",
      };
    }
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
