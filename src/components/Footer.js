import { Box, Flex } from '@chakra-ui/react'

export const Footer = (props) => (
    <Box width="100%" bgColor="#131313">
        <Flex as="footer" py="4rem" {...props} flexWrap="wrap" justifyContent="center" alignContent="center" alignSelf="center"/>
    </Box>
)
