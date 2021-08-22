import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Image,
} from '@chakra-ui/react';
import MyCourses from '../../../components/user/MyCourses';
import CurrentActivity from '../../../components/user/CurrentActivity';
import Schedule from '../../../components/user/Schedule';
import UserBanner from '../../../components/user/UserBanner';
import handwave from '../../../images/handwave.png';

const DashboardPage = () => {
    return (
            <Box pb={5} boxSizing="border-box">
                <Flex w="100%" direction="row">
                    <Heading fontSize={35} pl={6}>
                        Hallo $user!
                    </Heading>
                    <Image ml={5} w={10} h={10} src={handwave} />
                </Flex>
                <UserBanner/>
                <Flex alignItems="baseline!important" flexWrap="wrap" direction={{lg: 'row', xl: 'row', md: 'row', sm: 'column', base: 'column'}} w="100%" justifyContent="center">
                    <MyCourses/>
                    <CurrentActivity/>
                    <Schedule/>
                </Flex>
            </Box>            
    )
}

export default DashboardPage;