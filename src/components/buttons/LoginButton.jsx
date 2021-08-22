import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export const LoginButton = () => {
    return (
        <Box w="25%" h="auto">
            <Button color="#FE7A55" variant="outline" boxSizing={'border-box'} p={5} pr={6} pl={6} colorScheme="blue" border="2px" borderColor="#FE7A55" borderRadius={'30px'}>Login</Button>
        </Box>
    )
}