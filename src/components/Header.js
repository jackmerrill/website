import { useState } from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import Logo from './ui/Logo'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      overflow="hidden"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="1rem"
      px="5rem"
      bg="#131313"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Logo variant="light" />
        </Heading>
      </Flex>

    </Flex>
  );
};

export default Header;
