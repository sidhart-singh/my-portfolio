import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";

const experiences = [
  {
    company: "Ernst & Young GDS",
    iconPath: "EY_GDS_Logo.png",
    role: "Associate Software Engineer",
    startDate: new Date("Nov 04, 2024"),
    endDate: "Present",
    skills: ["Java", "Springboot", "NextJs"],
    details: [
      "Developed and maintained RESTful APIs using Java Spring Boot for a client onboarding portal, implementing authentication with JWT, optimizing SQL queries, and building reusable services that reduced data retrieval time by 20%.",
      "Exposure to cloud platforms (AWS/Azure) for deploying and monitoring applications, including working with services like EC2, S3, or Azure App Service.",
    ],
    certificateUrl: "",
  },
  {
    company: "Celebal Technologies",
    iconPath: "CelebalTechnology_Logo.png",
    role: "Web Developer Intern",
    startDate: new Date("May 27, 2023"),
    endDate: new Date("July 25, 2023"),
    skills: ["ReactJs", "Javascript", "Git", "Github"],
    details: [
      "Working in team to develop and deploy a project within a deadline.",
      "Developing and Adapting to continuous requirements for the assignments and projecs.",
      "Designed a course catalog site secure user authentication and private routing.",
      "Developed and implemented a highly secure user registration form, utilizing advanced data validation techniques resulting in 100% accurate data.",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1PQkjf09rel43F9dC6GE2Kbg6_mKtvjy1/view?usp=sharing",
  },
];

const Experience = () => {
  return (
    <Flex flexDir={"column"} w={"100%"}>
      <Heading size={"lg"} pb={4}>
        Experiences
      </Heading>
      <SimpleGrid column={{ base: 1, sm: 2, md: 1 }} spacing={2}>
        {experiences.map((exp, i) => (
          <>
            <ExperienceCard key={`${exp.company}_${i}`} experience={exp} />
          </>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Experience;

const ExperienceCard = ({ experience }) => {
  const {
    company,
    iconPath,
    role,
    skills,
    startDate,
    endDate,
    details,
    certificateUrl,
  } = experience;

  return (
    <Card
      borderWidth={"1px"}
      borderColor={useColorModeValue("transparent", "whiteAlpha.300")}
      bgColor={useColorModeValue("gray.50", "transparent")}
    >
      <CardBody pb={certificateUrl ? 2 : 6}>
        <HStack gap={4}>
          <Divider
            orientation="vertical"
            h={3}
            borderWidth={2}
            borderColor={useColorModeValue("gray.300", "gray.400")}
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color={useColorModeValue("gray.400", "gray.400")}
          >
            {startDate.toLocaleDateString("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            -{" "}
            {endDate.toLocaleDateString("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        </HStack>
        <HStack py={4} alignItems={"center"}>
          <Avatar src={`/assets/${iconPath}`} size={"sm"} />
          <Stack spacing={1}>
            <Heading size="sm">{company}</Heading>
            <Heading size={"xs"} fontWeight={"medium"}>
              {role}
            </Heading>
          </Stack>
        </HStack>
        {/* <List spacing={"6px"}>
              {details?.slice(0, 3).map((detail, i) => (
                <ListItem key={i} fontSize={"14px"}>
                  <Text px={2} lineHeight={"16px"}>
                    {detail}
                  </Text>
                </ListItem>
              ))}
            </List> */}
        <HStack pt={2}>
          {skills?.map((skill, i) => (
            <Tag key={i} px={2} borderRadius={"full"}>
              {skill}
            </Tag>
          ))}
        </HStack>
      </CardBody>
      {certificateUrl && (
        <CardFooter pt={0}>
          <Flex alignItems={"center"} gap={1}>
            <Link
              as={ReactRouterLink}
              to={certificateUrl}
              target={"_blank"}
              fontSize={"14px"}
              fontWeight={"medium"}
              color={"blue.500"}
            >
              Certificate
            </Link>
            <Icon as={BiLinkExternal} boxSize={"14px"} color={"blue.500"} />
          </Flex>
        </CardFooter>
      )}
    </Card>
  );
};
