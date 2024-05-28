import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  MenuItem,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import { BiChevronDown, BiSearch, BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";

const navLinks = [
  { name: "About", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Projects", path: "#" },
  { name: "Contact", path: "#" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navProps = {
    bg: useColorModeValue("gray.50", "blackAlpha.600"),
    border: useColorModeValue("gray.200", "gray.700"),
  };

  const iconProps = {
    bg: useColorModeValue("gray.50", "blackAlpha.700"),
    color: useColorModeValue("blue.400", "whiteAlpha.600"),
    hover_color: "blue.600",
    hover_dark_color: "whiteAlpha.700",
    border: useColorModeValue("gray.200", "gray.700"),
    hover_dark_border: "gray.600",
  };

  return (
    <Box
      p={4}
      pos={"sticky"}
      top={4}
      zIndex={10}
      display={"flex"}
      justifyContent={"center"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"70%"}
        gap={4}
      >
        <Box w={"10%"}>{""}</Box>
        <Flex
          // minW={{ base: "", md: "300px" }}
          justifyContent={{ base: "flex-end", md: "center" }}
        >
          <HStack
            as="nav"
            p={1}
            spacing={1}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            border={"1px"}
            borderRadius={"3xl"}
            borderColor={navProps.border}
            bgColor={navProps.bg}
            boxShadow={"lg"}
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} />
            ))}
          </HStack>
          <Box display={{ base: "flex", md: "none" }}>
            <Button
              bgColor={navProps.bg}
              border={"1px"}
              borderRadius={"2xl"}
              borderColor={navProps.border}
              boxShadow={"lg"}
              fontWeight={"normal"}
              rightIcon={<BiChevronDown />}
              onClick={onOpen}
            >
              Menu
            </Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay display={{ base: "flex", md: "none" }} />
              <ModalContent
                display={{ base: "flex", md: "none" }}
                borderRadius={"xl"}
                p={4}
              >
                <ModalHeader fontSize={"medium"}>Navigation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight="normal" mb="1rem">
                    You can scroll the content behind the modal
                  </Text>
                  <List spacing={2}>
                    {navLinks.map((link, index) => (
                      <ListItem key={index}>{link.name}</ListItem>
                    ))}
                  </List>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
        <Flex gap={2}>
          <IconButton
            size={"md"}
            border={"1px"}
            borderRadius={"2xl"}
            borderColor={iconProps.border}
            color={iconProps.color}
            _hover={{
              color: iconProps.hover_color,
              _dark: {
                color: iconProps.hover_dark_color,
                borderColor: iconProps.hover_dark_border,
              },
            }}
            bgColor={iconProps.bg}
            boxShadow={"lg"}
            icon={<BiSearch size={"20px"} />}
          />
          <IconButton
            size={"md"}
            border={"1px"}
            borderRadius={"2xl"}
            borderColor={iconProps.border}
            color={iconProps.color}
            bgColor={iconProps.bg}
            _hover={{
              color: iconProps.hover_color,
              _dark: {
                color: iconProps.hover_dark_color,
                borderColor: iconProps.hover_dark_border,
              },
            }}
            boxShadow={"lg"}
            onClick={toggleColorMode}
            icon={
              colorMode === "light" ? (
                <BiSun size={"20px"} />
              ) : (
                <BsMoonStars size={"20px"} />
              )
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
}

const NavLink = ({ name, path, onClose }) => {
  const link = {
    hover_color: useColorModeValue("blue.600", "blue.400"),
  };

  return (
    <Link
      href={path}
      px={3}
      py={1}
      fontSize={"15px"}
      fontWeight={"medium"}
      _hover={{
        textDecoration: "none",
        color: link.hover_color,
      }}
    >
      {name}
    </Link>
  );
};
