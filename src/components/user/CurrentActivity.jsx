import React from 'react';
import trophyIcon from '../../images/icons/trophy.png';
import activityDiagram from '../../images/icons/activity-diagram.svg';
import activityDiagramNote from '../../images/icons/activity-diagram-note.png';
import {
    Box,
    Flex,
    Heading,
    Image,
    Center
} from '@chakra-ui/react';

const CurrentActivity = () => {
    return (
        <Box w={{lg: '40%', xl: '40%', md: '100%', sm: '100%', base: '100%'}} p={{lg: 10, xl: 10, md: 10, sm: 4, base: 4}} flex="1" h="40vh">
            <Flex direction="column" h="100%">
                <Box display='inline-flex'>
                    <Heading fontFamily="Poppins" fontWeight={600} fontSize="22px" textColor="#0B0652">
                        Current Activity
                    </Heading>
                    <Image ml={0} mt={-1} src={trophyIcon} w="56px" h="38px" />
                </Box>
                <Flex h="100%" borderRadius={24} className="shadow-md" w="100%" direction="column" justifyContent="center">
                    <Box w="100%" display="grid" placeItems="center">
                        <Image src={activityDiagram} maxW={152} maxH={152} />
                    </Box>
                    <Center>
                    <Image display={{sm: 'none', base: 'none', md: 'inline-flex', lg: 'inline-flex', xl: 'inline-flex'}} src={activityDiagramNote} maxW={323} maxH={27} />
                    </Center>
                </Flex>
            </Flex>
        </Box>
    )
}

export default CurrentActivity;