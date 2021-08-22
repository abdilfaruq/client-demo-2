import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Spacer,
    Icon,
    Button,
    Text,
    Center,
} from '@chakra-ui/react';
import './FAQ.css';
import {
    ChevronDownIcon
} from '@chakra-ui/icons';

import ReactPlayer from 'react-player';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const showCaption = (e) => {
    let selected = document.getElementsByClassName('dropdown-text active');
    let a = document.getElementsByClassName('dropdown-icon css-tvakne tilt');
    let newSelect = e.target.parentNode.parentNode.lastElementChild.classList;
    let animate =  e.target.classList;

    if (selected.length > 0 && newSelect.value === 'dropdown-text css-0') {
        a[0].classList.remove('tilt');
        selected[0].classList.remove('active');
        newSelect.toggle('active');
        animate.toggle('tilt');
        console.log('sc1');
    } else if (newSelect.value === 'dropdown-text css-0 active') {
        console.log('sc');
        newSelect.toggle('active');
        animate.toggle('tilt');
    } else {
        console.log('sc2');
        newSelect.toggle('active');
        animate.toggle('tilt');
    }
}

const FAQBox = (props) => {
    return (
        <Box w="full" textAlign="left" className="menu">
            <Box className="faq-box dropdown" w="full">
                <Flex flexDirection="row" justifyContent="center" placeItems="center" cursor="pointer">
                    <Text className="faq-text">
                        {props.text}
                    </Text>
                    <Spacer/>
                    <Box w="22px" h="22px" zIndex='2' className="dropdown-icon" onClick={showCaption.bind(this)}>
                        <Icon w="full" h="full" position="relative" as={ChevronDownIcon} zIndex="-1"/>
                    </Box>
                </Flex>
                <Box className="dropdown-text">
                <Text fontFamily="Eudoxus Sans" fontWeight="400" fontSize="18px" opacity="50%" pt="15px">
                    {props.caption}
                </Text>           
                </Box>
            </Box>
        </Box>
    )
}

const FAQBoxWithVideo = (props) => {
    return (
        <Box w="full" textAlign="left" className="menu">
            <Box className="faq-box dropdown" w="full">
                <Flex flexDirection="row" justifyContent="center" placeItems="center" cursor="pointer">
                    <Text className="faq-text" disabled>
                        {props.text}
                    </Text>
                    <Spacer/>
                    <Box w="22px" h="22px" zIndex='2' className="dropdown-icon" onClick={showCaption.bind(this)}>
                        <Icon w="full" h="full" position="relative" as={ChevronDownIcon} zIndex="-1"/>
                    </Box>
                </Flex>
                <Box className="dropdown-text">
                <Flex direction={{lg: "row", md: 'column', sm: 'column', base: 'column'}} boxSizing="border-box" height={{lg: '250px', xl: '300px', md: '540px', sm: '500px'}} mt="12px">
                    <ReactPlayer light
                    width="90%"
                    height="100%"
                    url={props.videoUrl}
                    />
                    <Box h="100%" pl="19px">
                        <Text fontFamily="Plus Jakarta Sans" textColor="#23262F" fontWeight="700" fontSize="18px" opacity="50%" pt="15px">
                            {props.caption}
                        </Text>
                        <Text fontFamily="Eudoxus Sans" fontWeight="400" fontSize="18px" opacity="50%" pt="25px">
                            {props.subCaption}
                        </Text>
                        <Button borderRadius="6px" colorScheme="teal" variant="outline" mt="18px">
                            Learn more
                        </Button>
                    </Box>             
                </Flex>       
                </Box>
            </Box>
        </Box>
    )
}

export const FAQ = () => {
    return (
        <Center>
            <Box w="90%" p="10% 10%">
                <Box w='full' textAlign="center" borderBottom="solid 1px #E6E8EC" pb="10%">
                    <Text data-aos="fade-in" data-aos-delay="100" fontFamily="Plus Jakarta Sans" fontSize="12px" textTransform="uppercase" textColor="#777E90" p="1% 1%">
                        learn how to get started
                    </Text>
                    <Heading data-aos="fade-in" data-aos-delay="100"  fontFamily="Plus Jakarta Sans" fontSize="48px" letterSpacing="-2%" textColor="#23262F" p="1% 1%">
                        Frequently Asked Questions
                    </Heading>
                    <Text data-aos="fade-in" data-aos-delay="1000" textColor="#009A9D">
                        Contact Support
                    </Text>
                </Box>
                <div data-aos="fade-in" data-aos-delay="1400">
                    <FAQBoxWithVideo
                    text="What is Linguo.id?"
                    videoUrl='https://www.youtube.com/watch?v=3hDBE8o-jJU'
                    caption="Linguo.id"
                    subCaption='Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.'
                    />
                    <FAQBox
                    text="Can i join more than one class?"
                    caption="Of course you can!"
                    />
                    <FAQBox
                    text="Is there any continued class after 8 meetings?"
                    caption="Yes there is, with a requirement of 8 students minimum."
                    />
                    <FAQBox
                    text="What's the difference between regular and private classes?"
                    caption="The differences are in schedules and prices."
                    />
                    <FAQBox
                    text="How about the schedule and price for private class?"
                    caption="Untuk jadwal bisa dibahas langsung dengan pengajar apabila siswa sudah menyelesaikan pembayaran. Adapun untuk pembayaran kelas private yaitu minimal 10 jam dan berlaku opsi perpanjangan. Untuk lebih lengkapnya bisa menghubungi  +62 813-1767-3400 untuk info lebih lanjut mengenai private class."
                    />
                    <FAQBox
                    text="How will the class mechanism go?"
                    caption="The classes will be held on Zoom, Google Classroom, and Whatsapp Group."
                     />
                    <FAQBox
                    text="How many meetings will be held in every batch?"
                    caption="Setiap batch terdiri dari delapan pertemuan dimana setiap pertemuan diadakan satu pekan sekali sehingga total durasi kursus adalah delapan pekan."
                     />
                    <FAQBox
                    text="How long is the duration for every meeting?"
                    caption="90 minutes."
                    />
                    <FAQBox
                    text="Where can i see the learning syllabus?"
                    caption="Untuk silabus silakan DM admin melalui  +62 813-1767-3400."
                    />
                    <FAQBox
                    text="Will i get a certificate upon completing the course?"
                    caption="Setiap siswa berhak mendaptkan e-certificate jika mememuhi persyaratan keaktifan dalam mengikuti pembelajaran yaitu minimal mengikuti enam kali pertemuan dan mengumpulkan tugas akhir dari pengajar."
                    />
                    <FAQBox
                    text="Where can i send the payment?"
                    caption="Transfer ke 3370687641 BCA an. Lisana Rachmawati. Konfirmasi transfer dikirim ke  +62 813-1767-3400."
                    />
                </div>
            </Box>        
        </Center>
    )
}