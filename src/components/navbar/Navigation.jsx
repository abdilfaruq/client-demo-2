import React from 'react';
import logo from '../../images/linguo-blue.png';
import { ProgressBar } from '../progress/ProgressBar';
import Cart from '../commerce/Cart';
import {
    Flex,
    Image,
    Spacer,
    Box
} from '@chakra-ui/react';
import { LoginButton } from '../buttons/LoginButton';


export const NavigationOnly = () => {
    return (
        <Flex alignItems="center" w="100%" p={4} direction={{lg: 'row', xl: 'row', md: 'row', sm: 'column', base: 'column'}}>
            <Box w="25%" display={{base: 'contents', sm: 'contents', md: 'block', lg: 'block', xl: 'block'}}>
                <Image src={logo} minW={'130px'} maxW={'130px'}justifySelf="center"/>
            </Box>
            <Box w="50%" textAlign="-webkit-center">
                <ProgressBar
                progressColor={"#F8CB2E"}
                val={'10%'}
                />
            </Box>
            <Box w="25%" visibility="hidden"/>
        </Flex> 
    )
}
 
const NavigationWithCart = () => {
    return (
        <Flex alignItems="center" w="100%" p={4} direction={{lg: 'row', xl: 'row', md: 'row', sm: 'column', base: 'column'}}>
            <Box w="25%" display={{base: 'contents', sm: 'contents', md: 'block', lg: 'block', xl: 'block'}}>
                <Image src={logo} minW={'130px'} maxW={'130px'}justifySelf="center"/>
            </Box>
            <Box w="50%" textAlign="-webkit-center">
                <ProgressBar
                progressColor={"#F8CB2E"}
                val={'10%'}
                />
            </Box>
            <Flex justifyContent="flex-end" w="25%" pr={{lg: '1%', md: '1%', sm: '1%', base: '0'}}>
                <Box>
                    <Cart grey={true} />
                </Box>
                <Spacer maxW="4%" />
                <Flex w={'10%'} direction={{lg: 'row', md: 'row', sm: 'row', base: 'column'}} alignItems="center">
                    <LoginButton />
                </Flex>
            </Flex>
        </Flex> 
    )
}

export default NavigationWithCart;