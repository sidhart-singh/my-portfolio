import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSpringBoot,
} from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import {
  SiLeetcode,
  SiNodedotjs,
  SiDocker,
  SiMicrosoftazure,
} from "react-icons/si";

const skills = [
  {
    name: "Java",
    tags: ["Web Development", "Programming"],
    icon: BiLogoJava,
  },
  {
    name: "SpringBoot",
    tags: ["Web Development, Backend"],
    icon: BiLogoSpringBoot,
  },
  {
    name: "Leetcode",
    tags: ["Data Structures & Algorithms"],
    icon: SiLeetcode,
  },
  {
    name: "Data Structures & Algorithms",
    tags: ["Programming"],
    icon: GiBrain,
  },
  {
    name: "Javascript",
    tags: ["Web Development"],
    icon: BiLogoJavascript,
  },
  {
    name: "ReactJs",
    tags: ["Web Development"],
    icon: BiLogoReact,
  },
  {
    name: "NodeJs",
    tags: ["Web Development"],
    icon: SiNodedotjs,
  },
  {
    name: "Docker",
    tags: ["DevOps"],
    icon: SiDocker,
  },
  {
    name: "Azure",
    tags: ["Cloud, DevOps"],
    icon: SiMicrosoftazure,
  },
];

const Skills = () => {
  return (
    <Flex flexDir={"column"} w={"100%"}>
      <Heading size={"lg"} pb={4}>
        Skills
      </Heading>
      {/* <Stack spacing={2}></Stack> */}
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const SkillCard = ({ skill: { name, tags, icon } }) => {
  return (
    <Card
      borderWidth={"1px"}
      borderColor={useColorModeValue("transparent", "whiteAlpha.300")}
      bgColor={useColorModeValue("gray.50", "transparent")}
    >
      <CardBody display={"flex"} p={"14px"} alignItems={"center"}>
        <HStack alignItems={"center"}>
          <Flex
            p={1}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={6}
            bgColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          >
            <Icon as={icon} boxSize={"40px"} />
          </Flex>
          <Stack spacing={1}>
            <Heading size={"sm"}>{name}</Heading>
            <Text fontSize={"sm"} fontWeight={"medium"}>
              {tags.join(", ")}
            </Text>
          </Stack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Skills;
