import React from 'react';
import {
    Image,
    Button,
    Text,
    Heading,
    Center,
    Box,
} from '@chakra-ui/react';

import nextArrow from '../../images/icons/next_arrow.png';
import prevArrow from '../../images/icons/prev_arrow.png';

import philippinesLogo from '../../images/philippine.png';
import turkeyLogo from '../../images/turkey.png';
import japanLogo from '../../images/japan.png';
import russiaLogo from '../../images/russia.png';
import indiaLogo from '../../images/india.png';
import koreaLogo from '../../images/korea.png';
import '../../fonts/fonts.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './Features.css?v=123123123';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Features = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <Button background="none"
          {...props}
          className={
            "slick-arrow" +
            (currentSlide === 0 ? "slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
        >
          <Image src={prevArrow} w="9px"/>
        </Button>
      );
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <Button background="none"
          {...props}
          className={
            "slick-arrow" +
            (currentSlide === slideCount - 1 ? "slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
        >
          <Image src={nextArrow} w="9px"/>
        </Button>
      );
        return (
            <Box m={0} w='100%' p={10} bgColor="#EBF9F9">
                <Center textAlign="center">
                        <Heading data-aos="zoom-in" fontFamily="Plus Jakarta Sans" fontWeight={700} color="#23262F">
                            Become a polyglot <br/><Text as="span">
                            with Linguo
                            </Text>
                        </Heading>
                </Center>
                <Center>
                        <Text fontFamily="Eudoxus Sans" data-aos="zoom-in" data-aos-delay="400" opacity="60%" mt={'20px'} textAlign={'center'} lineHeight="165%">
                            Linguo helps you to become fluent in many language.
                        </Text>
                </Center>
                <Center>
                    <Box width={'80%'} className="container" marginTop={'2%'}>
                            <Slider dots={false}
                                slidesToShow={5}
                                slidesToScroll={1}
                                infinite={true}
                                arrows={true}
                                autoplay={true}
                                prevArrow={<SlickArrowLeft/>}
                                nextArrow={<SlickArrowRight/>}
                                autoplaySpeed={1200}>
                                <div>
                                    <Image w="255px" src={philippinesLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={turkeyLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={japanLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={russiaLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={indiaLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={koreaLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={philippinesLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={turkeyLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={japanLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={russiaLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={indiaLogo}/>
                                </div>
                                <div>
                                    <Image w="255px" src={koreaLogo}/>
                                </div>
                            </Slider> 
                    </Box>
                </Center>
            </Box>
        )
}

export default Features;