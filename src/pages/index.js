import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  HStack,
  Stack,
  Divider,
  Box,
  Tooltip,
  Icon,
  StackDivider
} from '@chakra-ui/react'
import { Adobeillustrator, Affinitydesigner, Html5, NextDotJs, Javascript, Python } from '@icons-pack/react-simple-icons'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import Header from '../components/Header'

function GDesign() {
  return <>
    <HStack padding="8px" spacing="8px">
      <Adobeillustrator color="#FF9A00"/>
      <Affinitydesigner color="#1B72BE"/>
    </HStack>
  </>
}

function UIDesign() {
  return <>
    <HStack padding="8px" spacing="8px">
      <NextDotJs color="#ffffff" />
      <Html5 color="#E34F26" />
    </HStack>
  </>
}

function Programming() {
  return <>
    <HStack padding="8px" spacing="8px">
      <Javascript color="#F7DF1E" />
      <Python color="#3776AB" />
    </HStack>
  </>
}

const Index = () => (
  <>
    <Container height="100vh">
      <Hero />
      <Main>
        <Stack align="center" direction={["column", "row"]} divider={<StackDivider />}>
          <Tooltip hasArrow label={<GDesign />} bg="gray.700" color="black">
            <Text fontSize="200%" fontWeight="bold">
              Graphic Designer
            </Text>
          </Tooltip>
          <Tooltip hasArrow label={<UIDesign />} bg="gray.700" color="black">
            <Text fontSize="200%" fontWeight="bold">
              UI Designer
            </Text>
          </Tooltip>
          <Tooltip hasArrow label={<Programming />} bg="gray.700" color="black">
            <Text fontSize="200%" fontWeight="bold">
              Programmer
            </Text>
          </Tooltip>
        </Stack>

      </Main>


    </Container>
    <Header />
    <Container>
      <Footer>
        <Text textAlign="center">Copyright 2021 Jack Merrill<br />Made with <span color="red.300">❤️</span> in Illinois</Text>
        <DarkModeSwitch />
      </Footer>
    </Container>
  </>
)

export default Index
