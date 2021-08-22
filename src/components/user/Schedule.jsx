import React from 'react';
import teacher1 from '../../images/icons/teacher1.png';
import teacher2 from '../../images/icons/teacher2.png';

import calendarIcon from '../../images/icons/calendar-icon.png';

import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    Spacer
} from '@chakra-ui/react';

const MySchedule = [
    {
        date: '03',
        month: 'sep',
        day: 'sun',
        meeting: 'Meeting 1.1 - Wie geht’s dir?',
        class: 'English Convo',
        teacherImg: teacher1
    },
    {
        date: '07',
        month: 'sep',
        day: 'sun',
        meeting: 'Meeting 1.2 - Wie geht’s dir?',
        class: 'English Convo',
        teacherImg: teacher2
    },
    {
        date: '03',
        month: 'sep',
        day: 'sun',
        meeting: 'Meeting 1.1 - Wie geht’s dir?',
        class: 'English Convo',
        teacherImg: teacher1
    },
    {
        date: '03',
        month: 'sep',
        day: 'sun',
        meeting: 'Meeting 1.1 - Wie geht’s dir?',
        class: 'English Convo',
        teacherImg: teacher1
    }
]

const Schedule = () => {
    return (
        <Box w={{lg: '30%', xl: '30%', md: '100%', sm: '100%', base: '100%'}} h="100%">
            <Flex direction="column" w="100%!important">
                <Box display='inline-flex' alignSelf={{lg: 'none', md: 'none', xl: 'none', sm: 'flex-start', base: 'flex-start'}} pl={{lg: 0, md: 0, xl: 0, sm: 3, base: 3}}>
                    <Heading fontFamily="Poppins" fontWeight={600} fontSize="22px" textColor="#0B0652">
                        Schedule
                    </Heading>
                    <Image ml={0} src={calendarIcon} w="60px" h="32px" />
                </Box>
                <Flex placeSelf={{lg: 'flex-start', md: 'flex-start', xl: 'flex-start', sm: 'center', base: 'center'}} w={'95%!important'} placeItems="center" p={2} direction="column" justifyContent="center" background="#F8F8F8" borderRadius="20px">
                    {MySchedule.map((item, i) => {
                        if (i === 0) {
                            return (
                                <Flex key={i} m={1} w="100%!important" h="84px" direction="row" placeItems="center" position="relative" background={'#FFFFFF'} borderRadius="18px">
                                    <Flex borderRadius="24px" h="62px" m={3} boxSizing="border-box" p={4} textTransform="uppercase" textAlign="center" textColor="white" direction="column" justifyContent="center" background="#009A9D">
                                        <Text fontFamily="Poppins" fontWeight={900} fontSize={15}>
                                            {item.date}
                                        </Text>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={11}>
                                            {item.month}
                                        </Text>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={11}>
                                            {item.day}
                                        </Text>
                                    </Flex>
                                    <Flex direction='column' justifyItems="flex-start" pl={3}>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={12} textColor={'#606060'}>
                                            {item.meeting}
                                        </Text>
                                        <Text fontFamily="Poppins" fontSize={10} textColor={'#B8B8B8'}>
                                            {item.class}
                                        </Text>
                                    </Flex>
                                    <Spacer/>
                                    <Image mr={5} src={item.teacherImg} w={'24px'} h={'24px'} />
                                </Flex>
                            )
                        } else if (i % 2 === 0) {
                            return (
                                <Flex key={i} m={1} w="100%!important" h="84px" direction="row" placeItems="center" position="relative" background={'#FFFFFF'} borderRadius="18px">
                                    <Flex borderRadius="24px" h="62px" m={3} boxSizing="border-box" p={4} textTransform="uppercase" textAlign="center" textColor="white" direction="column" justifyContent="center" background="#009A9D">
                                        <Text fontFamily="Poppins" fontWeight={900} fontSize={15}>
                                            {item.date}
                                        </Text>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={11}>
                                            {item.month}
                                        </Text>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={11}>
                                            {item.day}
                                        </Text>
                                    </Flex>
                                    <Flex direction='column' justifyItems="flex-start" pl={3}>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={12} textColor={'#606060'}>
                                            {item.meeting}
                                        </Text>
                                        <Text fontFamily="Poppins" fontSize={10} textColor={'#B8B8B8'}>
                                            {item.class}
                                        </Text>
                                    </Flex>
                                    <Spacer/>
                                    <Image mr={5} src={item.teacherImg} w={'24px'} h={'24px'} />
                                </Flex>
                            )} else {
                                return (
                                    <Flex key={i} m={1} w="100%!important" h="84px" direction="row" placeItems="center" position="relative" background={'#FFFFFF'} borderRadius="18px">
                                    <Flex borderRadius="24px" h="62px" m={3} boxSizing="border-box" p={4} textTransform="uppercase" textAlign="center" textColor="white" direction="column" justifyContent="center" background="#FE7A55">
                                        <Text fontFamily="Poppins" fontWeight={900} fontSize={15}>
                                            {item.date}
                                        </Text>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={11}>
                                            {item.month}
                                        </Text>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={11}>
                                            {item.day}
                                        </Text>
                                    </Flex>
                                    <Flex direction='column' justifyItems="flex-start" pl={3}>
                                        <Text fontFamily="Poppins" fontWeight={600} fontSize={12} textColor={'#606060'}>
                                            {item.meeting}
                                        </Text>
                                        <Text fontFamily="Poppins" fontSize={10} textColor={'#B8B8B8'}>
                                            {item.class}
                                        </Text>
                                    </Flex>
                                    <Spacer/>
                                    <Image mr={5} src={item.teacherImg} w={'24px'} h={'24px'} />
                                </Flex>
                                )
                            }
                    })} 
                </Flex>
            </Flex>
        </Box>
    )
}

export default Schedule;