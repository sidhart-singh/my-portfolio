import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <HStack gap={6}>
      <Icon as={BsLinkedin} fontSize={"14px"} boxSize={"20px"} color={"gray"} />
      <Icon as={SiLeetcode} boxSize={"20px"} color={"gray"} />
      <Icon as={BsGithub} boxSize={"20px"} color={"gray"} />
      <Icon as={BiLogoGmail} boxSize={"22px"} color={"gray"} />
      <Icon as={BsInstagram} boxSize={"20px"} color={"gray"} />
    </HStack>
  );
};

export default SocialLinks;
