import React from 'react';
import {
    SearchIcon
} from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Spacer,
    Input
} from '@chakra-ui/react';
import {
    Route
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Menubar from '../../components/menubar/Menubar';
import {
    UserMenu as SmallMenu 
} from '../../components/menubar/UserMenu';
import SchedulePage from './pages/SchedulePage';

const UpperMenu = () => {
    return (
        <Flex w="100%" direction={{md: "row", sm: 'column', base: 'column', lg: 'row', xl: 'row'}} mt={{sm: 5, base: 6, md: 1}} alignItems="center">
            <Flex w={{lg: '25%', md: '25%', sm: '60%', base: '60%', xl: '25%'}} maxW="373px" direction="row" alignItems="stretch" cursor="pointer"
                mt={{base: 20, sm: 20, md: 'unset'}}    position="relative" ml={{base: 0, sm: 0, md: 5, lg: 5, xl: 5}}>
                <Input w="100%"  placeholder="Search" position="relative" borderRadius="25px" />
                <Flex pointerEvents="none" position="absolute" direction="row" alignItems="center" h="100%" w="100%" justifyContent="flex-end" pr={4}>
                     <SearchIcon color="#BABABA"/>
                </Flex>
            </Flex>
            <Spacer/>
            <Flex alignItems="center" justifyContent={{lg: "flex-end!important", md: 'flex-end!important', xl: 'flex-end!important', sm: 'center', base: 'center'}}>
                <SmallMenu/>
            </Flex>
        </Flex>
    )
}

const Dashboard = () => {
    const pathName = window.location.pathname.slice(1);
    let a = pathName.substring(pathName.lastIndexOf('/') + 1);
    return (
        <Box w="100%" background="#FAFAFA!important" h="100vh">
            <Flex>
                <Menubar isActive={a.charAt(0).toUpperCase() + a.slice(1)}/>
                <Box w={'100%'} h="100vh" background="#FFFFFF!important" borderRadius="67px 0px 0px 67px" pl={{lg: 6, xl: 6, md: 6, sm: 0, base: 0}} boxSizing="border-box" display="block" overflow="auto">
                    <UpperMenu/>
                    <Route path="/dashboard" component={DashboardPage} exact/>
                    <Route path="/dashboard/schedule" component={SchedulePage} exact/> 
                </Box>         
            </Flex>
        </Box>
    )
}

export default Dashboard;