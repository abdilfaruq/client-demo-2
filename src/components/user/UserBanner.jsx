import React from 'react';
import {
    Box,
    Text,
    Icon,
    Center,
    Flex
} from '@chakra-ui/react';
import {
    IoPeopleSharp,
    IoLibraryOutline,
    IoBodySharp
} from 'react-icons/io5';
import {
    GiTeacher
} from 'react-icons/gi';

const StatsBox = (props) => {
    return (
        <Box backgroundColor={props.boxBg} w={{base: '95%', md: '25%'}} m={4} h={'147px'} borderRadius={14}>
            <Box placeItems='start' ml={10} display="grid" h="100%">
                <Center h="100%">
                    <Box w={'64px'} h={'64px'} bgGradient={props.iconBoxColor} borderRadius={30} display="grid" placeItems="center">
                        <Icon as={props.icon} color={props.iconColor} w={{base: '90%', md: '60%'}} h={{base: '90%', md: '60%'}}/>
                     </Box>
                    <Flex direction="column" justifyContent="start" m={6}>
                        <Text fontWeight={700} fontSize="2rem" textColor="blue.900">
                                    {props.number}
                        </Text>
                        <Text fontWeight={600} fontSize="1.05rem" opacity={'55%'} textcolor="blue.800">
                                    {props.text}
                        </Text>                             
                    </Flex>
                </Center>
            </Box>
        </Box>
    )
}

const UserBanner = () => {
    return (
            <Flex w="99%" direction={{base: 'column', md: 'row'}} >
                <StatsBox
                boxBg='rgb(200, 250, 205)'
                iconBoxColor='linear(to-b, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)'
                iconColor="#1da71b"
                icon={IoPeopleSharp}
                number='120'
                text="Students"/>
                <StatsBox
                boxBg="rgb(208, 242, 255)"
                iconBoxColor="linear(to-b, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)"
                iconColor="blue.700"
                icon={GiTeacher}
                number='25'
                text="Teachers"/>
                <StatsBox
                boxBg="rgb(255, 247, 205)"
                iconBoxColor="linear(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)"
                iconColor="blue.700"
                icon={IoLibraryOutline}
                number='194'
                text="Classes"/>
                <StatsBox
                boxBg="rgb(255, 231, 217)"
                iconBoxColor="linear(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)"
                iconColor="rgb(122, 79, 1)"
                icon={IoBodySharp}
                number='120'
                text="Staff"/>
            </Flex>
    )
}

export default UserBanner;