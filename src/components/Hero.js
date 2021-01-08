import { Flex, Heading } from '@chakra-ui/react'

export const Hero = () => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading 
      fontSize="8xl"
      bgGradient="linear(to-l, #7928CA,#FF0080)"
      className="animated-gradient"
      bgClip="text"
      fontFamily="Inter"
      fontWeight="extrabold"
      textAlign="center"
      padding="16px"
    >Jack Merrill</Heading>
  </Flex>
)

