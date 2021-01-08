import { useColorMode, Switch, HStack } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <>
    <HStack spacing="8px" width="100%" justifyContent="center">
      <SunIcon />
        <Switch
          id="darkModeSwitch"
          aria-label="Dark Mode Toggle"
          top="1rem"
          right="1rem"
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
        <MoonIcon />
    </HStack>
    </>
  )
}
