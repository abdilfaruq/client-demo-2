import React from 'react';
import {
    Center,
    Box,
    Heading,
    Text,
    Button
} from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero5 = () => {
    return (
        <Center>
            <Box w="90%" textAlign="center" boxSizing="border-box" padding="10% 10%" mb={{base: '25%', sm: '25%', md: '0%', lg: '0%'}}>
                <Box w="100%">
                    <Heading data-aos="fade-in" data-aos-delay="200" fontFamily="Plus Jakarta Sans" fontWeight={700} fontSize={{lg: "64px", md: '62px', base: '34px', sm: '34px'}} textColor="#23262F">
                        Learning is journey<br/>
                        Start now & Grow up with Linguo
                    </Heading>
                    <Text data-aos="fade-out" data-aos-delay="1100" fontFamily="Eudoxus Sans" fontWeight={400} textColor="#777E90" fontSize={{lg: "16px", md: '16px', base: '14px', sm: '14px'}} pt="32px">
                        Linguo helps you to become fluent in many language<br/> through interactive classes that always prioritizes practice.
                    </Text> 
                    <Center mt="48px" data-aos="flip-up" data-aos-delay="1800">
                        <Box w="220px" h="58px" pt="30px">
                            <Button borderRadius="40px" w="151px" h="58px" className='shadow-2' colorScheme="blue" backgroundColor="#009A9D">Get Started</Button>
                        </Box>  
                    </Center>      
                </Box>
            </Box>       
        </Center>
    )
}

export default Hero5;