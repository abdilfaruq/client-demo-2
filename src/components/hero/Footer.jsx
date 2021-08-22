import React from 'react';
import {
    Box,
    Text,
    Flex,
    Image
} from '@chakra-ui/react';
import './Footer.css';
import facebook from '../../images/icons/Facebook.png';
import instagram from '../../images/icons/Instagram.png';
import dribble from '../../images/icons/Dribbble.png';
import linkedin from '../../images/icons/LinkedIn.png';

const footerItems = {
    Learn: [
        "Learn English",
        'Learn French',
        'Learn Spanish',
        'Learn Portuguese', 
        'Learn German',
        'Learn Japanese',
        'Learn Korean',
        'Learn Arabic',
        'Learn Hindi',
        'Learn Italian',
        'Learn Russian',
        'Learn More Languages'
    ],
    Level: [
        'Basic',
        'Upper basic',
        'Intermediate',
        'Advance'
    ],
    Program: [
        'Regular Class',
        'Private Class',
        'IELTS Class',
        'TOEFL Class'
    ],
    Teaching: [
        'Become a teacher'
    ],
    Address: [
        'Alamat: Jl. Jaksa Naranata Perum Puri Matahari D1, Baleendah, Kec. Baleendah, Bandung, Jawa Barat 40365.'
    ],
    Telp: [
        'Telepon: (+62)813-1767-3400 '
    ],
    Email: [
        'Email: info@linguo.id'
    ]
};

const socialIcons = [
    linkedin,
    facebook,
    instagram,
    dribble
];

export const Footer = () => {
    return (
        <Box background="#035C5D" p="2% 0 2% 0" w="100%" textColor="#FFFFFF" boxSizing="border-box" paddingTop="4%" pb="4%">
            <Flex className="main-flex" direction="row" justifyContent='center' alignItems="flex-start" fontFamily="Poppins" fontWeight={500} lineHeight="19px">
                <Flex className="double-col" direction="row">
                    <Flex className='footer-box' direction="column">
                        <Text textAlign="left" mb="4px">
                            Learn a Language
                        </Text>
                        {footerItems.Learn.map((elm, i) => (
                            <Box textAlign="left" key={i}>
                            <Text key={i} fontSize="13px" fontFamily="Poppins" textColor="#FFFFF" pt="5px">
                                {elm}
                            </Text>
                            </Box>
                            )
                        )}
                    </Flex>
                    <Flex className="flex-level-programs" direction="column">
                        <Flex className='footer-box' direction="column">
                            <Text textAlign="left" mb="4px">
                                Level Option
                            </Text>
                            {footerItems.Level.map((elm, i) => (
                                <Box textAlign="left" key={i}>
                                <Text key={i} fontSize="13px" fontFamily="Poppins" textColor="#FFFFF" pt="5px">
                                    {elm}
                                </Text>
                                </Box>
                                )
                            )}
                        </Flex>
                        <Flex className='footer-box' direction="column" mt="20px">
                            <Text textAlign="left" mb="4px">
                                Programs
                            </Text>
                            {footerItems.Program.map((elm, i) => (
                                <Box textAlign="left" key={i}>
                                <Text key={i} fontSize="13px" fontFamily="Poppins" textColor="#FFFFF" pt="5px">
                                    {elm}
                                </Text>
                                </Box>
                                )
                            )}
                        </Flex>   
                    </Flex>           
                </Flex>
                <Flex className='footer-box teaching' direction="column">
                    <Text textAlign="left" mb="4px">
                        Teaching
                    </Text>
                    {footerItems.Teaching.map((elm, i) => (
                        <Box textAlign="left" key={i}>
                        <Text key={i} fontSize="13px" fontFamily="Poppins" textColor="#FFFFF" pt="5px">
                            {elm}
                        </Text>
                        </Box>
                        )
                    )}
                    {footerItems.Address.map((elm, i) => (
                        <Box textAlign="left" mt={'10%'} key={i}>
                        <Text key={i} w="231px" fontSize="12px" fontFamily="Poppins" textColor="#FFFFF" pt="5px">
                            {elm}
                        </Text>
                        </Box>
                        )
                    )}
                    {footerItems.Telp.map((elm, i) => (
                        <Box textAlign="left" key={i}>
                        <Text key={i} fontSize="13px" fontFamily="Poppins" textColor="#FFFFF" pt="5px">
                            {elm}
                        </Text>
                        </Box>
                        )
                    )}
                    {footerItems.Email.map((elm, i) => (
                        <Box textAlign="left" key={i}>
                        <Text key={i} fontSize="13px" fontFamily="Poppins" textColor="#FFFFF" pt="5px">
                            {elm}
                        </Text>
                        </Box>
                        )
                    )}
                    <Flex className='logo-icons' direction="row" w="192px" justifyContent={'space-between'} mt="18px">
                    {socialIcons.map((elm, i) => (
                        <Box w="30px" h="24px" key={i}>
                            <Image key={i} src={elm}/>
                        </Box>
                        )
                    )}
                    </Flex>
                    <Text fontFamily="Poppins" fontWeight={900} fontSize="12px" mt="38px">
                    © 2021 PT. Linguo Edu Indonesia
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}