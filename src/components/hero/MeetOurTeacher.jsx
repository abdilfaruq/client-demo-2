import React from 'react';
import {
    Text,
    Heading,
    Box,
    Center,
    Image,
    Stack,
    Spacer,
    Flex,
    Icon,
    VStack,
    SimpleGrid,
} from '@chakra-ui/react';
import 'tachyons';
import {
    ArrowBackIcon,
    ArrowForwardIcon
} from '@chakra-ui/icons';

import './Box.css?v=112223213';

import nitalia from '../../images/teacher/nitalia.png';
import thifal from '../../images/teacher/thifal.png';
import maria from '../../images/teacher/maria.png';
import febri from '../../images/teacher/febri.png';
import paramita from '../../images/teacher/paramita.png';
import angga from '../../images/teacher/angga.png';
import maura from '../../images/teacher/maura.png';
import googleReview from '../../images/google-review.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Testimonial = (props) => {
    return (
        <SimpleGrid
         columns={{lg: 2, xl: 2, md: 2, sm: 1, base: 1}} placeItems={'center'} mt={'5%'} mb={{lg: '5%', xl: '5%', md: '5%', sm: '12%', base: '12%'}}>
            <Box w='40%' alignSelf="flex-start">
                <Box w="80%">
                    <Stack w={{lg: "296px", xl: '296px', md: '296px', sm: '100%', base: '100%'}} textAlign={{base: '-webkit-center'}} direction={{sm: 'column', base: 'column', md: 'row', lg: 'row'}} spacing={'26px'} alignItems={{base: 'center', sm: 'center'}}>
                        <Box w="107px">
                            <Image src={props.testiImgSrc} />
                        </Box>
                        <Box w="172px" className="text-box">
                            <Text fontSize="15px" letterSpacing="-1%" fontWeight={600} fontFamily={'Poppins'} textAlign="center" textColor="#18214D">
                                {props.testiName}
                            </Text>
                            <Text fontSize="13px" letterSpacing="-1%" fontWeight={600} fontFamily={'Poppins'} textAlign="center" textColor="#808080">
                                {props.testiSubName}
                            </Text>
                        </Box>
                    </Stack>  
                    <Box w="206px" mt={'42.73px'}>
                    <a rel="noreferrer" href="https://www.google.com/search?q=linguo+id&oq=linguo+id+&aqs=chrome.0.69i59j0i131i433j69i60l3j69i65j69i60l2.2264j0j7&sourceid=chrome&ie=UTF-8#lrd=0x2e68e91323e3fe35:0x89051f2e6769ddac" cursor={"pointer"} target="_blank"><Image src={googleReview} alt={'Google Review'}/></a>
                    </Box>
                </Box>
            </Box>
            <Box w="60%" data-aos="fade-in" data-aos-delay={props.delay}>
                <Text fontFamily="Poppins" fontWeight={'bold'} fontSize="15px" lineHeight="34.5px">
                    {props.text1}<br/><br/>{props.text2}
                </Text>
            </Box>
        </SimpleGrid>
    )
}

const StoryFromStudents = () => {
    return (
       <Box w="100%" mt={'12%'}>
           <Box w="100%">
                <Heading data-aos="flip-up" textColor="#23262F" fontSize="40px" fontFamily="Plus Jakarta Sans" letterSpacing="-1%" textAlign="center">
                    Story from our students
                </Heading>
           </Box>
           <Box w="100%">
               <Flex justifyContent={{xl: 'flex-end', lg: 'flex-end', md: 'center', base: 'center', sm: 'center'}}>
                    <Box width='20%'>
                        <Center padding="30px">
                            <Flex>
                                <Icon as={ArrowBackIcon} color="#009A9D" w="46px" h="16px" cursor="progress"/>
                                <Spacer w="10px"/>
                                <Icon as={ArrowForwardIcon} color="#009A9D" w="46px" h="16px" cursor="progress"/>
                            </Flex>
                        </Center>
                    </Box>
                </Flex>
            <Box w="100%" data-aos="fade-in">
                <Testimonial
                delay="600"
                testiImgSrc={maria}
                testiName='Maria Dita'
                testiSubName="Universitas Indonesia"
                text1="Awalnya saya mengetahui Linguo dari Instagram dan kemudian saya tertarik karna melihat review dari para siswa Linguo yg ada di story IG, saya hubungi adminnya dan adminnya ramah sekali... Lalu saya tanya harga ternyata harganya cukup terjangkau dan akhirnya saya memutuskan untuk registrasi kursus bahasa Belanda... "
                text2="Daaaan pas mengikuti kelas nya sangatt asyik, materi nya jelas, gurunya enakkkk dan pinter, temen-temen nya juga enak alhasil saya ikut ke kelas lanjutan berikutnya dan tetep enak-enak juga kelas nya.... Pokoknya gak menyesal deh kursus di Linguo..   Semoga Linguo bisa ada terus dan konsisten kualitasnya... 💕❤😍"
                />
            </Box>
           </Box>
           <SimpleGrid>
                <Box>
                </Box>
           </SimpleGrid>
        </Box>
    )
};

const Card = (props) => {
    return (
        <Box onClick={(e) => {
            let h = document.getElementById('text-header');
            let t = document.getElementById('text-subheader');
            let c = document.getElementById('text-caption');

            let oldSelected = document.getElementsByClassName('selected');
            oldSelected[0].className = oldSelected[0].className.replace('selected', 'unselected');
            console.log(oldSelected);
            
            e.target.className = e.target.className.replace('unselected', 'selected');

        
            h.innerHTML = props.header;
            t.innerHTML = props.name;
            c.innerHTML = props.caption;
            }} h="308px" maxW={"256px"} data-aos="flip-up" data-aos-delay={props.delay} borderRadius="24px" border="1px solid #E6E8EC" background="#FFFFFF" boxSizing="border-box" className={props.boxClassName} cursor={'pointer'}>
            <VStack pointerEvents="none">
                <Box w="128px" h="144px" marginTop="48px" pointerEvents="none" className="noselect">
                    <Image src={props.imgSrc} className="noselect"/>
                </Box>
                <Text textColor="#23262F" fontWeight={600} fontFamily="Poppins" fontSize="18px" letterSpacing="-1%" mt="22px!important" pointerEvents="none" className="noselect">
                    {props.name}
                </Text>
                <Box w="80%" textAlign="center" pointerEvents="none" className="noselect">
                    <Text textColor="#777E90" fontWeight={500} fontFamily="Poppins" fontSize="14px" className="noselect">
                        {props.subText}
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}

const MeetOurTeacher = () => {
    return (
        <Center mt={{base: '620px', lg: '620px', md: '730px', sm: '700px', xl: '-100px'}}>
            <Box w="100%">
                <Center textAlign={{base: 'center'}}>
                    <Heading data-aos="flip-up" fontFamily="Plus Jakarta Sans" fontWeight={700} fontSize="40px" letterSpacing="-1%" textColor="#23262F">
                            Meet Our Teacher
                    </Heading>              
                </Center>
                <Center mt={'20px'} textAlign={{base: 'center'}}>
                    <Text data-aos="flip-down" data-aos-delay="200" fontFamily="Eudoxus Sans" fontWeight={400} fontSize="18px" textColor="#777E90">
                        Linguo helps you to become fluent in many language.
                    </Text>
                </Center>
                <Flex mt={'80px'} direction={{base: 'column', md: 'row', lg: 'row', xl: 'row'}} w="89%">
                    <Box id='text-div' data-aos="zoom-in" data-aos-delay="300" maxW="365px" minW="310px" textAlign="center" margin={{lg: "111px 0 0 10%", base: '0 0 0 0'}} alignSelf={{base: "center", md: 'baseline', sm: 'center', lg: 'baseline', xl: 'baseline'}}>
                        <Text id="text-header" fontFamily="Poppins" fontWeight={600} fontSize="15px" textColor="#000000">
                            SPANISH & THAI TUTOR
                        </Text>
                        <br/>
                        <Text id="text-subheader" fontFamily="Poppins" fontWeight={600} fontSize="15px" textColor="#000000">Febri Darusman
                        </Text>
                        <Text id="text-caption" fontFamily="Poppins" fontWeight={600} fontSize="15px" textColor="#000000" mt="28px">
                            Lulusan Sastra Prancis UGM. Berpenglaman mengajar dari 2013,  selain itu pernah menjadi ketua komunitas Polyglot Indonesia chapter Bandung. 
                        </Text>
                    </Box>
                    <Box className="cards-list" w="65%" ml={{lg: "10%"}} alignSelf={{base: 'center', sm: 'center'}}>
                            <SimpleGrid spacing={'32px'} minChildWidth="256px" placeContent="center!important" mt={{sm: '32px', base: '32px'}}>
                                <Card
                                imgSrc={febri}
                                delay='300'
                                name="Febri Darusman"
                                subText="Spanish & Thai Teacher"
                                header="SPANISH & THAI TUTOR"
                                boxClassName="teacher-box selected"
                                caption="Lulusan Sastra Prancis UGM. Berpengalaman mengajar dari 2013, selain itu pernah menjadi ketua komunitas Polyglot Indonesia chapter Bandung."
                                />
                                <Card
                                imgSrc={nitalia}
                                delay='500'
                                name="Nitalia Wijaya"
                                subText="Korean & English Teacher"
                                header="KOREAN & THAI TUTOR"
                                caption="Mahasiswa Jeonbuk University. Berpengalaman mengajar dari 2015,  saat ini sudah level Topik 5 untuk bahasa Korea"
                                boxClassName="teacher-box unselected"
                                />
                                <Card
                                imgSrc={angga}
                                delay='700'
                                name="Angga"
                                subText="Chinese, Korean & Vietnamese Teacher"
                                header="KOREAN & THAI TUTOR"
                                caption="Mahasiswa Jeonbuk University. Berpengalaman mengajar dari 2015,  saat ini sudah level Topik 5 untuk bahasa Korea"
                                boxClassName="teacher-box unselected"
                                />
                                <Card
                                imgSrc={paramita}
                                delay='900'
                                name="Paramita Wulandari"
                                subText="Japanese & Portuguese Teacher"
                                boxClassName="teacher-box unselected"
                                header="JAPANESE & PORTUGUESE TEACHER"
                                caption="Mahasiswa Jeonbuk University. Berpengalaman mengajar dari 2015,  saat ini sudah level Topik 5 untuk bahasa Korea"
                                />
                                <Card
                                imgSrc={thifal}
                                delay='1100'
                                name="Thifal Syahla"
                                subText="English & Persian Teacher"
                                boxClassName="teacher-box unselected"
                                header="ENGLISH & PERSIAN TEACHER"
                                caption="Mahasiswa Jeonbuk University. Berpengalaman mengajar dari 2015,  saat ini sudah level Topik 5 untuk bahasa Korea"
                                />
                                <Card
                                imgSrc={maura}
                                delay='1300'
                                name="Maura Izzati"
                                subText="Italian and Spanish Teacher"
                                boxClassName="teacher-box unselected"
                                header="ITALIAN & SPANISH TEACHER"
                                caption="Mahasiswa Jeonbuk University. Berpengalaman mengajar dari 2015,  saat ini sudah level Topik 5 untuk bahasa Korea"
                                />
                            </SimpleGrid>
                    </Box>
                </Flex>
                <Center>
                    <Box w="90%">
                        <StoryFromStudents/>
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}

export default MeetOurTeacher;