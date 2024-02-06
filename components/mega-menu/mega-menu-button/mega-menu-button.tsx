import { ButtonProps } from "@chakra-ui/react";
import { MegaMenuButtonElements as el } from "./mega-menu-button.elements";

export const MegaMenuButton = ({...rest}: ButtonProps) => {
    return <el.MenuButton variant="unstyled" {...rest}>
        <el.Hamburger src="assets/images/hamburger.png"/>
    </el.MenuButton>
}