import React from 'react';
import {
    Box,
    Center,
    Image,
    Icon,
    Heading
} from '@chakra-ui/react';
import {
    ArrowLeftIcon,
    ArrowRightIcon
} from '@chakra-ui/icons';
import backgroundImg from '../../images/backgrounds/background.svg';

import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css?v=12211122';

// import kartu
import card1 from '../../images/cards/card1.png';
import card2 from '../../images/cards/card2.png';
import card3 from '../../images/cards/card3.png';
import card4 from '../../images/cards/card4.png';
import card5 from '../../images/cards/card5.png';
import card6 from '../../images/cards/card6.png';
import 'tachyons';

import './Hero3.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero3 = () => {
    return (
        <Box id="hero-3-container" w={'100%'} h={{lg: '829px', md: '829px', sm: '420px', base: '420px'}}
        backgroundImage={backgroundImg} backgroundRepeat="no-repeat" backgroundPosition='center'
        backgroundSize="contain"
        >   
            <Center>
            <Box w="100%">
            <Box mt={'85px'} mb={{lg: '196px'}} textAlign="center">
                <Heading data-aos="fade-up" fontFamily="poppins" fontWeight={600} fontSize="36px" lineHeight="59.4px" textColor="#009A9D">
                    Why Linguo?
                </Heading>
            </Box>
            <Center>
                <Box data-aos="flip-down" data-aos-delay="300" mt={'10px'} className="container-carousel" w={{lg: "60%", md: '60%', xl: '60%', base: '90%', sm: '90%'}} h="full">
                <StackedCarousel
                    autoRotate={true}
                    containerClassName={"carousel"}
                    cardClassName="card"
                    leftButton={<Icon color="blue.600" _hover={{color: 'blue.200'}} as={ArrowLeftIcon}/>}
                    rightButton={<Icon color="blue.600" _hover={{color: 'blue.200'}} as={ArrowRightIcon}/>}>
                        <div key={'child1'}>
                            <Image className="shadow-3" borderRadius="32px" maxW={'400px'} minW={'140px'} src={card1}/>
                        </div>
                        <div key={'child2'}>
                            <Image className="shadow-3" borderRadius="32px"  maxW={'400px'} minW={'140px'} src={card2}/>
                        </div>
                        <div key={'child3'}>
                            <Image className="shadow-3" borderRadius="32px"  maxW={'400px'} minW={'140px'} src={card3}/>
                        </div>
                        <div key={'child4'}>
                            <Image className="shadow-3" borderRadius="32px"  maxW={'400px'} minW={'140px'} src={card4}/>
                        </div>
                        <div key={'child5'}>
                            <Image className="shadow-3" borderRadius="32px"  maxW={'400px'} minW={'140px'} src={card5}/>
                        </div>
                        <div key={'child6'}>
                            <Image className="shadow-3" borderRadius="32px"  maxW={'400px'} minW={'140px'} src={card6}/>
                        </div>
                </StackedCarousel>
                </Box>
            </Center>
            </Box>
            </Center>
        </Box>
    )
}

export default Hero3;