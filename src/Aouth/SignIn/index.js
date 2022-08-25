import React from "react"
import "./aouth.css"
import {Box, Stack, Input, Text, Heading, InputGroup, InputRightElement, Button} from "@chakra-ui/react"
export default function SignIn() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return(
    //   Firt parent div with bg image
      <Box className="auth-img-container">
          {/* Second Parent with bg color and two box div */}
          <Box className={"auth-img-container-sub"} flexDirection={{base:"column", md:"column",lg:"row"}}>
            <Box className={"auth-left"} width={{base:"100%", md:"100%", lg:"70%"}}>
              <Heading color={"#fff"}>#1 Intelligent Financial Management  Application</Heading>
              <Heading color={"#fff"}>for Personal and Collaborative use</Heading>
            </Box>
            <Box className={"auth-right"}>
              <Box mb={5}>
                <Box>sign in</Box>
              </Box>
              <Box>
                <Box>
                  <Stack spacing={3}>
                    <Stack>
                      <Text>First Name</Text>
                      <Input placeholder="First Name" size="md" />
                    </Stack>
                    <Stack>
                      <Text>Last Name</Text>
                      <Input placeholder="Last Name" size="md" />
                    </Stack>
                    <Stack>
                      <Text>Email</Text>
                      <Input type={"email"} placeholder="Email" size="md" />
                    </Stack>
                    <Stack>
                      <Text>Password</Text>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="password"
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
      </Box>
  );
}
