import React from 'react';
import {
    Box,
    Heading,
    Text,
    Image,
    Icon,
    Center,
    HStack,
    Button,
    Flex,
} from '@chakra-ui/react';
import 'tachyons';
import {
    CheckIcon
} from '@chakra-ui/icons';
import lightning from '../../images/icons/lightning.png';
import './Pricing.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const PricingItem = (props) => {
    return (
        <Box w="220px" h="297px!important" className={props.class} border={props.isHighlighted?'1px solid #E6E8EC':'0px'} borderRadius="20px" boxShadow={props.isHighlighted?'24px 24px 54px rgba(81, 80, 94, 0.08)':'none'}>
            <Center mt="48px">
                <Box w="192px" h="177px">
                    <Box w="100%">
                        <Text fontFamily="Plus Jakarta Sans" fontWeight="700" textColor="#23262F" fontSize="18px" w="100%" textAlign="center">
                            {props.heading}
                        </Text>
                        <Text fontFamily="Poppins" fontWeight="400" textColor="#808080" fontSize="13px" w="100%" padding="20px 0 20px 0" textAlign="center">
                            {props.subHeading}
                        </Text>
                        <Box w="100%" display={props.isRecommended?'block':'none'}>
                            <HStack direction={'row'} justifyContent="center">
                                <Box w="20px" h="20px">
                                    <Image src={lightning} />
                                </Box>
                                <Text fontFamily="Poppins" fontWeight="500" lineHeight="24.75px" fontSize="15px" opacity="50%" w="130px" h="25px" textAlign="center">
                                    Recommended
                                </Text>
                            </HStack>
                        </Box>
                        <Box w="100%" mt={props.mtc}>
                            <Text fontFamily="Poppins" fontWeight="600" textColor={props.isHighlighted?'#009A9D':'#838383'} fontSize="25px" w="100%" letterSpacing="-1%" textAlign="center">
                                {props.price}
                            </Text>
                        </Box>  
                    </Box>
                </Box>
            </Center>
        </Box>
    );
}

const CheckerBox = (props) => {
    return (
    [...Array(8)].map( (_,i) => 
    <Box key={i} className={props.class} w="100%" h="69px">
    <Icon display={'block'} ml={'auto'} mr={'auto'} as={CheckIcon} color="green" w="16px" h="16px"/>
</Box>));
}

export const PricingTable = () => {
    return (
        <Box id="pricing-table" mt="71px" data-aos="flip-up" data-aos-delay="1000">
            <Flex direction={'row'} id="pricing-flex" justifyContent="center">
                <Flex direction="column">
                    <Box w="234px" h="297px" visibility="hidden" id="invis-box"/>
                    <Text className="pricing-title">
                        Tersedia Recording Class/sesi
                    </Text>
                    <Text className="pricing-title">
                        Interactive Class melalui ZOOM
                    </Text>
                    <Text className="pricing-title">
                        Soft file Materi Pembelajaran
                    </Text>
                    <Text className="pricing-title">
                        8 - 15 Siswa Per Kelas
                    </Text>
                    <Text className="pricing-title">
                        Qualified Teacher
                    </Text>
                    <Text className="pricing-title">
                        Tersedia Kelas Lanjutan
                    </Text>
                    <Text className="pricing-title">
                        E-Sertificate
                    </Text>
                    <Text className="pricing-title">
                        8 Pertemuan (2 bulan)
                    </Text>
                </Flex>
                <Box className="initial-boxes">
                <Box className="split-boxes">
                <Flex direction="column" background="#FCFCFD" className="each-box first">
                    <div visibility="hidden" className="box-header-pricing" position={'relative'} w="220px" h="297px!important">
                    </div>
                    <PricingItem
                            isHighlighted={true}
                            class='header-pricing highlighted shadow-5'
                            isRecommended={true}
                            heading="Basic"
                            subHeading="Cocok buat kamu yang udah punya basic cukup kuat"
                            mtc={'20px'}
                            price="Rp 150.000"/>
                    <CheckerBox
                    class="checkbox highlighted"
                    />
                    <Box w="220px" h="58px" pt="30px">
                        <Button borderRadius="40px" w="151px" h="58px" className='shadow-2' colorScheme="blue" backgroundColor="#009A9D">Get Started</Button>
                    </Box>
                </Flex>
                <Flex direction="column" className="each-box">
                    <PricingItem
                            isHighlighted={false}
                            isRecommended={false}
                            class='header-pricing'
                            heading="Basic"
                            subHeading="Cocok buat kamu yang mau belajar dari basic banget"
                            mtc={'20px'}
                            price="Rp 200.000"/>
                    <CheckerBox
                    class="checkbox"
                    />
                    <Box w="220px" h="58px" pt="30px">
                        <Button borderRadius="40px" w="120px" h="48px" colorScheme="blue" fontSize="13px" textColor="#009A9D" backgroundColor="#e0f4f4">Get Started</Button>
                    </Box>
                </Flex>              
                </Box>
                <Box className="split-boxes">
                <Flex direction="column" className="each-box">
                    <PricingItem
                            isHighlighted={false}
                            isRecommended={false}
                            class='header-pricing'
                            heading="Intermediate"
                            subHeading="Cocok buat kamu yang udah mau lebih memperdalam penguasaan bahasa"
                            price="Rp 250.000"/>
                    <CheckerBox
                    class="checkbox"
                    />
                    <Box w="220px" h="58px" pt="30px">
                        <Button borderRadius="40px" w="120px" h="48px" colorScheme="blue" fontSize="13px" textColor="#009A9D" backgroundColor="#e0f4f4">Get Started</Button>
                    </Box>
                </Flex>
                <Flex direction="column" className="each-box">
                    <PricingItem
                            isHighlighted={false}
                            isRecommended={false}
                            class='header-pricing'
                            heading="Advance"
                            subHeading="Cocok buat kamu yang udah mau lebih memperdalam penguasaan bahasa"
                            price="Rp 300.000"/>
                    <CheckerBox
                    class="checkbox"
                    />
                    <Box w="220px" h="58px" pt="30px">
                        <Button borderRadius="40px" w="120px" h="48px" colorScheme="blue" fontSize="13px" textColor="#009A9D" backgroundColor="#e0f4f4">Get Started</Button>
                    </Box>
                </Flex>
                </Box>
                </Box>
            </Flex>
        </Box>
    )
}

const Pricing = () => {
    return (
        <Center mt="58px" mb="153.8px">
            <Box w="90%">
                <Box w="100%">
                    <Heading data-aos="zoom-in" fontSize={{lg: "40px", xl: '40px', md: '35px', sm: '30px', base: '30px'}} letterSpacing="-1%" textAlign="center" fontFamily="Eudoxus Sans" fontWeight={700}>
                        Choose a learning plan that <br/>speaks to you
                    </Heading>
                    <Text data-aos="flip-right" data-aos-delay="600" fontSize={{lg: "18px", xl: '18px', md: '16px', sm: '15px', base: '15px'}} mt="22px" opacity="60%" textAlign="center" fontFamily="Eudoxus Sans" fontWeight={400}>
                        Flexible pricing plans for individuals and organizations — let's discuss your needs.
                    </Text>
                </Box>
                <PricingTable/>
            </Box>
        </Center>
    )
}

export default Pricing;