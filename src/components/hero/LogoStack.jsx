import {
    Box,
    Flex,
    Image,
    Center
} from '@chakra-ui/react';
import './LogoStack.css?v=2332';
import React from 'react';
import prasmul from '../../images/prasmul.png';
import cimsa from '../../images/cimsa.png';
import vaksindo from '../../images/vaksindo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CompanyLogo2 = () => {
    return (
        <Center>
        <Box data-aos="flip-down" w={{lg: '50%', sm: '380px', base: '380px', md: '400px'}}>
            <Flex direction="row" justifyContent="space-around" placeItems="center">
                <Image className="logo-img" w="18%" id="company-logo-2" src={prasmul}  alt="Perusahaan Indonesia"/>
                <Image className="logo-img" w="18%" id="company-logo-2" src={cimsa}  alt="Perusahaan Indonesia"/>
                <Image className="logo-img" w="18%" id="company-logo-2" src={vaksindo}  alt="Perusahaan Indonesia"/>             
            </Flex>
        </Box>
        </Center>
    )
}

const LogoStack = () => {
        return (    
                <Box w='full' bgColor="#FFFFFF" h={{lg: '238px', base: '120px', md: '200px', sm: '200px'}} className="box-div" justifyContent="center" pt={5} pb={5}>
                    <Center h="100%">
                            <div>
                                <CompanyLogo2/>
                            </div>
                    </Center>
                </Box>
        )
    }

export default LogoStack;