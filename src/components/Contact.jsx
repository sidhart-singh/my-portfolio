import React, { Fragment } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxW={"6xl"} py={6} px={{ base: 5, md: 8 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <VStack
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
                <FormControl id="name" isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    rounded="md"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="email" isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    rounded="md"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
              <FormControl id="subject">
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input
                  type="text"
                  placeholder="Are you available for freelance work?"
                  rounded="md"
                  {...register("subject", {
                    required: "Subject must not be empty",
                  })}
                />
                <FormErrorMessage>
                  {errors.subject && errors.subject.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="message">
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  size="lg"
                  placeholder="Enter your message"
                  rounded="md"
                  {...register("message", {
                    required: "Message must not be empty",
                  })}
                />
                <FormErrorMessage>
                  {errors.subject && errors.subject.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
            {/* <VStack w={'100%'}> */}
            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={!isValid || isSubmitting}
              variant={"outline"}
              colorScheme="blue"
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
      </form>
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
