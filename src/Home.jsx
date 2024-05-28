import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import me from "/me.jpg";
import React from "react";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <Stack>
      <Box px={4} py={6}>
        <Avatar src={me} size={"lg"} my={6} loading="lazy" />
        <Heading size={"2xl"} textAlign={"left"}>
          Full-Stack Developer
        </Heading>
        <Text py={6} lineHeight={"28px"}>
          Hello there! 👋🏻 I'm Sidhart Singh, a passionate and driven final-year
          B.Tech. student majoring in Information Technology. My journey in the
          world of technology has been an exhilarating one, and I'm always eager
          to explore new horizons in Computer Science specifically Software
          Development and Artificial Intelligence.
          <br />
          My insatiable thirst for knowledge has cultivated a dynamic skill set
          and an eagerness to keep pushing the boundaries of technology. My
          determination to contribute to the tech industry and make a positive
          impact drives me forward.
        </Text>
        <Box>
          <SocialLinks />
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        py={6}
        gap={4}
      >
        <Box w={{ md: "40%" }} px={6}>
          {/* TODO: Implement timeline view for the experience */}
          <Experience />
        </Box>
        <Box w={{ md: "60%" }} px={6}>
          <Skills />
        </Box>
      </Box>

      <Contact />
    </Stack>
  );
};

export default Home;
