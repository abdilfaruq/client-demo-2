import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Flex,
    Center,
    Button,
    Wrap,
    WrapItem,
    Stack,
  } from '@chakra-ui/react';
import '../navbar/HomeNav.css';
import flatIllustration from '../../images/hero-2.png';
import chatbox1 from '../../images/chatbox-1.png';
import chatbox2 from '../../images/chatbox-2.png';
import googleReview from '../../images/google-review-white.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tachyons';

AOS.init();

  export default function CallToActionWithAnnotation() {
    return (
       <Box className="hero1" w={'100%'} bg={'#009A9D'}>
           <Box width="90%">
           <Center>
           <SimpleGrid columns={2}>
            <Wrap ml={{lg: '120px', md: '60px', base: '10%', sm: '10%'}}>
                    <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>

                        <Heading
                        className="head1"
                        data-aos="fade-right"
                        fontWeight={700}
                        fontFamily={'Plus Jakarta Sans'}
                        color={'white'}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl', lg: '64px'}}
                        lineHeight={'110%'} textAlign={'left'}>
                        Belajar 33<br/> bahasa online <br/>rasa offline!<br />
                        </Heading>

                        <Text data-aos="fade-left" color={'white'} fontFamily={'Eudoxus Sans, sans-serif'} textAlign={'left'}>
                        Linguo akan membantumu lebih cepat bisa cas cis cus dalam belajar bahasa :)
                        </Text>

                    <Flex columns={2} spacing={1}>
                    <Button className="shadow-5" data-aos="flip-up" data-aos-delay="400" textColor={'#035C5D'} colorScheme={'yellow'} backgroundColor={'#F8CB2E'} fontFamily={'Poppins, sans-serif'} fontSize={15} borderRadius={'500'} h={{lg: 58, md: 54, sm: 34, base: 34}} w={{lg: 151, md: 60, sm: 60}} color="#12393B">Mulai Belajar
                    </Button>
                    <Button className="shadow-5" data-aos="flip-down" data-aos-delay="1000" ml={5} textColor={'#035C5D'} colorScheme={'blue'} backgroundColor={'#FFFFFF'} fontFamily={'Poppins, sans-serif'} fontSize={15} borderRadius={'500'} h={{lg: 58, md: 54, sm: 34, base: 34}} w={{lg: 151, md: 60, sm: 60}} color="#12393B">Cek Jadwal
                    </Button>
                    </Flex>
                    <Box ml={'-5%!important'} maxW={'215px'}>
                        <a href="https://www.google.com/search?q=linguo+id&oq=linguo+id+&aqs=chrome.0.69i59j0i131i433j69i60l3j69i65j69i60l2.2264j0j7&sourceid=chrome&ie=UTF-8#lrd=0x2e68e91323e3fe35:0x89051f2e6769ddac" cursor={"pointer"} target="_blank" rel=
                        "noreferrer"><Image src={googleReview} alt={'Google Review'}/></a>
                    </Box>
                </Stack>
            </Wrap>
            <WrapItem alignSelf={'flex-end'}>
                <Center>
                        <Flex flexDirection="row">
                                <Image transform="scaleX(-1)" src={flatIllustration} h={'100%'} width={{base: '0', sm: '0', md: '0', lg: '1000px'}} alignSelf={'flex-end'}/>
                                <Image top={'1%'} right={'14%'} position="absolute" src={chatbox1} h={'auto'} width={{base: '0', sm: '0', md: '0', lg: '191px', xl: '240px'}} alignSelf={'flex-end'}/>
                                <Image top={'1%'} right={'30%'} position="absolute" src={chatbox2} h={'auto'} width={{base: '0', sm: '0', md: '0', lg: '191px', xl: '240px'}} alignSelf={'flex-end'}/>
                        </Flex>
                </Center>
            </WrapItem>
           </SimpleGrid>
           </Center>
        </Box>         
        </Box>
    );
  }