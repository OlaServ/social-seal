import { useBreakpointValue } from "@chakra-ui/react";

export const useIsMobile = () => {
  const isMobile = useBreakpointValue(
    { base: true, sm: true, md: true, lg: false },
    { fallback: "lg" }
  );

  return isMobile;
};
