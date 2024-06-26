import React from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const links = {
  linkedIn: "https://linkedin.com/in/sidhart-singh",
  leetcode: "https://leetcode.com/u/i_SID/",
  github: "https://github.com/sidhart-singh",
  gmail: "mailto:isidhartsingh@gmail.com",
  instagram: "",
};

const SocialLinks = () => {
  return (
    <HStack gap={2}>
      <IconButton
        bg={"transparent"}
        as={Link}
        to={links.gmail}
        icon={<BiLogoGmail size={"md"} />}
        boxSize={"24px"}
        color={"gray.600"}
      />

      <IconButton
        bg={"transparent"}
        as={Link}
        to={links.linkedIn}
        icon={<BsLinkedin size={"sm"} />}
        boxSize={"20px"}
        color={"gray.600"}
      />
      <IconButton
        bg={"transparent"}
        as={Link}
        to={links.github}
        icon={<BsGithub size={"md"} />}
        boxSize={"20px"}
        color={"gray.600"}
      />
      <IconButton
        bg={"transparent"}
        as={Link}
        to={links.leetcode}
        icon={<SiLeetcode size={"md"} />}
        boxSize={"20px"}
        color={"gray.600"}
      />
      <IconButton
        bg={"transparent"}
        as={Link}
        to={links.instagram}
        icon={<BsInstagram size={"md"} />}
        boxSize={"20px"}
        color={"gray.600"}
      />
    </HStack>
  );
};

export default SocialLinks;
