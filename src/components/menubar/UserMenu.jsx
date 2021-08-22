import React from 'react';
import profileImg from '../../images/user-profile-img.png';
import {
    FiMessageCircle,
    FiBell
} from 'react-icons/fi';
import {
    Flex,
    Icon,
    Box,
    Image
} from '@chakra-ui/react';

export const UserMenu = () => {
    return (
        <Flex alignItems="center" justifyContent={{lg: "flex-end", md: 'flex-end', sm: 'center', base: 'center', xl: 'flex-end'}} m={7} mt={8}>
            <span className="relative inline-block pointer">
                <Icon as={FiMessageCircle} minW="25px" minH="25px" m={3} />
                <span className="absolute shadow-inner top-0 right-4 inline-flex items-center justify-center px-2 py-1 text-xs transform translate-y-1/2 translate-x-1/2 font-bold leading-none rounded-full w-1 bg-notification h-4"/>
            </span>
            <span className="relative inline-block pointer">
                <Icon as={FiBell} minW="25px" minH="25px" m={3}/>
                <span className="absolute shadow-inner top-0 right-4 inline-flex items-center justify-center px-2 py-1 text-xs transform translate-y-1/2 translate-x-1/2 font-bold leading-none bg-notification black rounded-full w-1 h-4"/>
            </span>
            <Box w="18%" h="18%" m={3}>
                <Image src={profileImg} />
            </Box>
        </Flex>
    )
}