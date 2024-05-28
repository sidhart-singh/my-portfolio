import { Outlet } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box bgColor={useColorModeValue("gray.100", "blackAlpha.700")}>
      <Container
        overflow={"hidden"}
        px={{ base: 4, lg: 8 }}
        as={"section"}
        mx={"auto"}
        maxW={"6xl"}
        display={"flex"}
        flexDir={"column"}
        gap={2}
        borderWidth={"1px"}
        bgColor={useColorModeValue("gray.50", "whiteAlpha.100")}
      >
        <Stack spacing={4}>
          <Navbar />
          <Box alignItems={"flex-start"}>
            <Outlet />
          </Box>
          <Divider
            borderColor={useColorModeValue("gray.200", "whiteAlpha.400")}
            w={"full"}
          />
          <Footer />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
