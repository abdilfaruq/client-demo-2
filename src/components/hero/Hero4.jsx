import React from 'react';
import {
    Box,
    VStack,
    Text,
    Image,
    Heading,
    Icon,
    Flex,
    Spacer,
    Divider,
    Center,
    HStack,
    Stack,
} from '@chakra-ui/react';
import './Hero4.css';
import {
    ArrowBackIcon,
    ArrowForwardIcon
} from '@chakra-ui/icons';

import imgCover1 from '../../images/program-covers/cover-1.png';
import imgCover2 from '../../images/program-covers/cover-2.png';
import imgCover3 from '../../images/program-covers/cover-3.png';

import cathryn from '../../images/people/cathryn.png';
import karianne from '../../images/people/karianne.png';
import dariana from '../../images/people/dariana.png';

import ytIcon from '../../images/icons/yt-icon.png';
import peopleIcon from '../../images/icons/people-icon.png';

import beginnerBadge from '../../images/icons/badges/beginner.png';
import intermediateBadge from '../../images/icons/badges/intermediate.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = (props) => {
    return (
        <Box w={'352px'} h={'432px'}>
            <Stack spacing={"20px"}>
                <Box className="img-covers" w="352px" h="297px">
                    <Image src={props.coverImgSrc}/>
                </Box>
                <Box w="352px" h="50px">
                    <Flex>
                        <Box w='40px' h="40px">
                            <Image src={props.peopleImgSrc} />
                        </Box>
                        <Box w="160px" h="50px" paddingLeft="16px">
                            <VStack alignItems={'baseline'} >
                                <Text fontFamily="Plus Jakarta Sans" fontWeight={700} fontSize="15px">
                                    {props.headingTxt}
                                </Text>
                                <Text marginTop={'2px!important'} fontFamily="Eudoxus Sans" fontWeight={500} fontSize="14px" textColor="#777E90">
                                    {props.subHeadingTxt}
                                </Text>
                            </VStack>
                        </Box>
                        <Spacer/>
                        <Box w="78px" h="28px">
                            <Image src={props.badgeImgSrc} />
                        </Box>
                    </Flex>
                </Box>
                <Divider orientation="horizontal" h="1px" mt="12px!important"/>
                <Box w="full" mt={'12px!important'}>
                    <Flex>
                        <Box w="60px" h="20px">
                            <HStack>
                                <Image src={ytIcon} w="22px" h="20px" />
                                <Text fontFamily="poppins" fontWeight="600" fontSize="12px">
                                    {props.ytNumber}
                                </Text>
                            </HStack>
                        </Box>
                        <Spacer/>
                        <Box w="48px" h="20px">
                            <HStack>
                                <Image src={peopleIcon} w="34px" h="20px"/>
                                <Text fontFamily="poppins" fontWeight="600" fontSize="12px">
                                    {props.peopleNumber}
                                </Text>
                            </HStack>
                        </Box>
                    </Flex>
                </Box>
            </Stack>
        </Box>
    )
}

export const Hero4 = () => {
    return(
        <Box w="100%" h={'928px'} mt="135px" className='most-popular-class'>
            <Box w="90%">
            <Center>
            <Box w='60%'>
                <Flex direction={{lg: 'row', md: 'row', base: "column"}} data-aos="fade-up">
                    <Heading  fontFamily="Plus Jakarta Sans" fontWeight={700} fontSize={{lg: '40px', md: '36px', base: '28px'}} letterSpacing="-1%" alignSelf={{base: 'center', md: 'center'}}>
                        Most popular class
                    </Heading>
                    <Spacer/>
                    <Box w={'96px'} h={"16px"} alignSelf="center" mt={"8px"}>
                        <HStack>
                            <Icon as={ArrowBackIcon} w="48px" h="16px" opacity="50%"/>
                            <Icon as={ArrowForwardIcon} w="48px" h="16px" opacity="50%"/>
                        </HStack>
                    </Box>
                </Flex>
            </Box>
            </Center>
            <Box w={"full"} h={"432px"} mt="64px" data-aos="fade-up" data-aos-delay="200">
                <Stack spacing="32px" direction={{lg: 'row', md: 'column', base: 'column'}} justifyContent='center' alignItems={'center'}>
                    <Card
                    coverImgSrc={imgCover1}
                    peopleImgSrc={dariana}
                    headingTxt="Beginner English"
                    subHeadingTxt="Dariana Hammes"
                    badgeImgSrc={beginnerBadge}
                    ytNumber="8"
                    peopleNumber="160"
                    />
                    <Card
                    coverImgSrc={imgCover2}
                    peopleImgSrc={karianne}
                    headingTxt="Sweet and tone"
                    subHeadingTxt="Karianne Grimes"
                    badgeImgSrc={intermediateBadge}
                    ytNumber="7"
                    peopleNumber="160"
                    />
                    <Card
                    coverImgSrc={imgCover3}
                    peopleImgSrc={cathryn}
                    headingTxt="Power Yoga Sculpt"
                    subHeadingTxt="Cathryn Blick"
                    badgeImgSrc={beginnerBadge}
                    ytNumber="7"
                    peopleNumber="160"
                    />
                </Stack>
            </Box>
            </Box>
        </Box>
    )
}