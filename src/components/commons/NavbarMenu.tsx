import branding from "@/app/theme/index";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface NavbarMenuProps {
  buttonText: string;
  menuItems: MenuItem[];
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ buttonText, menuItems }) => {
  const pathname = usePathname();
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="link"
        color={branding.colors.white}
        bg="none"
      >
        {buttonText}
      </MenuButton>
      <MenuList bg="white" color={branding.colors.gray} border="none">
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            as={Link}
            href={item.href}
            _hover={{
              bg: branding.colors.primary,

              color: branding.colors.white,
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
