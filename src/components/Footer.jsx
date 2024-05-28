import { Flex, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const navLinks = [
  { name: "About", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Projects", path: "#" },
  { name: "Contact", path: "#" },
];

const Footer = () => {
  return (
    <Flex px={8} py={12} justifyContent={"space-between"}>
      <Flex gap={6}>
        {navLinks.map((navlink, i) => (
          <Link
            key={i}
            to={navlink.path}
            fontSize={"15px"}
            fontWeight={"medium"}
          >
            {navlink.name}
          </Link>
        ))}
      </Flex>
      <Text color={useColorModeValue("gray.400", "whiteAlpha.600")}>
        @2024 Sidhart Singh. All Rights Reserved
      </Text>
    </Flex>
  );
};

export default Footer;
