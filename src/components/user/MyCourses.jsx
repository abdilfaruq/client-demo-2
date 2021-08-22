import {
    BsChevronDown
} from 'react-icons/bs';
import englishIcon from '../../images/flags/united-kingdom.png';
import graduateIcon from '../../images/icons/graduate.png';
import signalIcon from '../../images/icons/signal.png';
import {
    Box,
    Image,
    Text,
    Flex,
    Icon, 
    Heading
} from '@chakra-ui/react';

const courses = [
    [englishIcon, 'English Convo', 'Basic 1.0'],
    [englishIcon, 'French', 'Basic 1.0'],
    [englishIcon, 'Dutch', 'Basic 1.0'],
    [englishIcon, 'Dutch', 'Basic 1.0']
]

const MyCoursesClasses = () => {
    return (
    courses.map((item, i) => {
        return (
            <Flex m={3} className="shadow" borderRadius={'13px'} p={5} direction="row" justifyContent='space-between' width="95%" height={86} key={i}>
                <Box display="inline-flex" w="70%" alignItems="center" >
                <Box mr={5} w={62} h={62} borderRadius="24px" background="#F6BB00" display="grid" placeItems="center">
                    <Image w={30} h={30} src={item[0]}/>
                </Box>
                <Flex direction="column">
                    <Text textColor="#414141" fontSize={15} fontWeight={600} fontFamily={'Poppins'}>
                        {item[1]}
                    </Text>
                    <Box display="inline-flex" alignItems="center">
                        <Image w={22} h={15} src={signalIcon} />
                        <Text fontSize={15} textColor={'#BABABA'} pl={2} fontWeight={600}>
                            {item[2]}
                        </Text>
                    </Box>
                </Flex>                  
                </Box>
                <Box w={11} h={5}>
                    <Icon as={BsChevronDown}/>
                </Box>
            </Flex>
        )
    })
    )
}

const MyCourses = () => {
    return (
        <Box w={{lg: '30%', xl: '30%', md: '100%', sm: '100%', base: '100%'}} flex="1" id="my-courses">
            <Flex direction="row" w="100%" justifyContent="space-around">
            <Box display='inline-flex'>
                <Heading fontFamily="Poppins" fontWeight={600} fontSize="22px" textColor="#0B0652">
                    My Courses
                </Heading>
                <Image ml={2} src={graduateIcon} w="60px" h="32px" />
            </Box>
            <Box display="grid" placeItems="center" w="92px" h="27px" background="#FFFFFF" border="1px solid #DDDDDD" boxSizing="border-box" borderRadius="4px">
                <Text textAlign="center" alignSelf="center" fontFamily="Poppins" fontSize='13px' textColor='#BABABA' fontWeight={600}>
                    Basic 1.0
                </Text>
            </Box>
            </Flex>
            <MyCoursesClasses/>
        </Box>
    )
}

export default MyCourses;