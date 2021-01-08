import { useState } from "react";
import { Box, Heading, Flex, Text, Button, Link, Image, HStack } from "@chakra-ui/react";
import Logo from './ui/Logo'
import * as NextLink from 'next/link'

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    // <Flex
    //   as="nav"
    //   overflow="hidden"
    //   align="center"
    //   justify="space-between"
    //   wrap="wrap"
    //   py="1rem"
    //   px="5rem"
    //   bg="#131313"
    //   color="white"
    //   {...props}
    // >
    //   <Flex align="center" mr={5} wrap="wrap" justifyContent="flex-start">
    //     <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
    //       <Logo variant="light" />
    //       <Link as={NextLink.default} href="/portfolio">Portfolio</Link>
    //     </Heading>
    //   </Flex>

    // </Flex>

    <Flex
        bg="#131313"
        color="white"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
    >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Link as={NextLink.default} href="/"><Logo variant="light" /></Link>
        </Flex>
        <Box>
            <HStack>
                <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
                    <Link as={NextLink.default} href="/">Home</Link>
                </Heading>
                <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
                    <Link as={NextLink.default} href="/portfolio">Portfolio</Link>
                </Heading>
                <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
                    <Link as={NextLink.default} href="/contact">Contact</Link>
                </Heading>
            </HStack>
        </Box>
  </Flex>
  );
};

export default Header;
