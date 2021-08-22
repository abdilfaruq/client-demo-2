import React from 'react';
import {
    Flex,
    Heading,
    Center,
    Text,
    Image,
    Box,
} from '@chakra-ui/react';
import stepsFrame from '../../images/steps-frame.png';
import circle from '../../images/steps/bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero2.css';
AOS.init();

const StepsLayout = (props) => {
    return (
        <Box w={{lg:'25%', md: '25%', sm: '95%', base: '95%'}} textAlign={"center"} mt={'30px'} data-aos={props.aos} data-aos-delay={props.delay}>
            <div className="steps-title">
                <Text fontFamily="Eudoxus Sans" fontWeight={700} fontSize={'12px'} lineHeight={'20px'} textColor="#777E90">
                    {props.title}
                </Text>
            </div>
            <div className="steps-heading">
                <Text fontFamily="Eudoxus Sans" pt={'32px'} fontWeight={700} lineHeight={'24px'} textColor="#23262F" fontSize={'16px'}>
                    {props.heading}
                </Text>
            </div>
            <div className="steps-subheading">
                <Text fontFamily="Poppins" pt={'15.99px'} fontWeight={400} lineHeight={'28px'} fontSize={'16px'} textColor="#353945">
                    {props.subheading}
                </Text>
            </div>
            <div className="steps-extra-heading">
                <Text fontFamily="Poppins" pt={'10px'} fontWeight={400} lineHeight={'22px'} fontSize={'11px'} textColor="#353945">
                    {props.extraheading}
                </Text>
            </div>
        </Box>
    )
}

const Hero2 = () => {
    return(
        <Box w={'100%'} p={'66px'} bg={'#FBFBFB'} h={{lg:'780px', base: '1550px', sm: '1550px', md: '780px'}}>
            <Center>
            <Box w="90%" >
            <Center>
                    <Heading data-aos="fade-left" textColor={'#009A9D'} letterSpacing="-1%" lineHeight={{lg:'56px', md: '50px', base: '42px', sm: '42px'}} fontFamily="Plus Jakarta Sans" textAlign="center">
                    Learning new language is complicated<br/> 
                    but we can make it easy for you
                    </Heading>
            </Center>
            <Center>
                    <Text data-aos="fade-right" data-aos-delay="400" fontFamily="Eudoxus Sans" textColor="#777E90" fontWeight={400} fontSize="18px" mt={'16px'} textAlign="center">
                    Linguo helps you to become fluent in many language.
                    </Text>
            </Center>
            <Center mt={{lg: '96px', md: '96px', base: '55px', sm: '55px'}}>
                <Box data-aos="flip-down" data-aos-delay="600" w={'1120px'} h={'97.01px'}>
                    <Image src={stepsFrame} alt="#"/>
                </Box>
            </Center>
            <Center mt={{lg: '56px', md: '56px', base: '15px', sm: '15px'}}>
                <Box w={'1250px'} h={'97px'}>
                    <Flex direction={{lg: 'row', md: 'row', base: 'column'}} w={'100%'} alignItems="center">
                        <StepsLayout title="Step 1" aos="flip-up" delay="800"
                        heading="Select Language"
                        subheading="Pilih bahasa yang kamu sukai (bisa memilih leibih dari satu bahasa sekaligus)"
                        />
                        <StepsLayout title="Step 2" aos="flip-up" delay="1100"
                        heading="Choose The Language Level"
                        subheading="Pilih level kemampuanmu (tersedia dari basic hingg advance*)"
                        extraheading="*untuk beberapa bahasa"
                        />
                        <StepsLayout title="Step 3" aos="flip-up" delay="1400"
                        heading="Learn & Practice with Linguo"
                        subheading="Setelah menyeselasiakan pembayaran kamu bisa mulai belajar sesuai jadwal belajar"
                        />
                        <StepsLayout title="Step 4" aos="flip-up" delay="1700"
                        heading="Level up & Get certified"
                        subheading="Setelah delapan sesi, kamu bisa ikut kelas lanjutan hingga mendapatkan e-sertifikat*"
                        extraheading="*S&K berlaku"
                        />
                    </Flex>
                </Box>
            </Center>
            <Box id="bg-circle">
                <Image src={circle} alt="#"/>
            </Box>
            </Box>
            </Center>
        </Box>
    )
}

export default Hero2;