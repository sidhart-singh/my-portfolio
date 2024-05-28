import React, { Fragment } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkgapll");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <Container maxW={"6xl"} py={6} px={{ base: 5, md: 8 }}>
      <Stack spacing={6}>
        <VStack
          as="form"
          w="100%"
          spacing={6}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
          border={"1px"}
          borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          bg={useColorModeValue("gray.50", "transparent")}
        >
          {/* <form> */}
          <VStack spacing={4} w="100%">
            <Stack
              w="100%"
              spacing={3}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your Name" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                placeholder="Are you available for freelance work?"
                rounded="md"
              />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                size="lg"
                placeholder="Enter your message"
                rounded="md"
              />
            </FormControl>
          </VStack>
          {/* <VStack w={'100%'}> */}
          <Button
            type="submit"
            onClick={handleSubmit}
            variant={"outline"}
            color="blue.500"
            borderColor={"blackAlpha.400"}
            _hover={{
              color: "blue.600",
            }}
            // _pressed={{
            //   color: "blackAlpha.800",
            // }}
            rounded="md"
            fontWeight={"medium"}
            w={{ base: "100%", md: "max-content" }}
          >
            Send Message
          </Button>
          {/* </VStack> */}
          {/* </form> */}
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;

// <Box p={6}>
/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form> */
// </Box>
