import React from 'react';
import Logo from '../../images/linguo-logo-white.png';
import './HomeNav.css?v=123213123';
import Cart from '../commerce/Cart';
import Divider from '../../images/divider.png';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Image,
    Link,
    useColorModeValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
  } from '@chakra-ui/icons';
  import ChangeLanguage from '../buttons/ChangeLanguage.jsx';
  
  export default function WithSubnavigation(props) {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('#009A9D')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2}}
          px={{ base: 4 }}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          padding={9}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -1 }}
            display={{ base: 'flex', md: 'flex', lg: 'none', xl: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon color={'white'} w={3} h={3} /> : <HamburgerIcon w={5} h={5} color="white"/>
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start', lg: 'start', xl: 'start' }} mt={2}>
              <Image src={Logo} w="112px"/>
            <Flex display={{ base: 'none', md: 'none', lg: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            alignItems={'center'}
            spacing={6}>
            <Cart/>
            <Text w="99px" fontFamily="Poppins" display={{base: 'none', sm: 'none', md: 'block'}} fontWeight={500} textColor="white" fontSize='13px'>Site Language : </Text>
            <ChangeLanguage/>
            <Button onClick={props.clicked} className="shadow-lg" colorScheme={'cyan'} backgroundColor={'#F8CB2E'} fontFamily={'Poppins, sans-serif'} fontSize={15} borderRadius={'500'} w={{lg: '127px', md: '100px', sm: '100px'}} color="#12393B">{props.isAuthenticated?'My Account':'Log in'}</Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
  
    return (
      <Stack direction={'row'} spacing={4} marginTop={'-9px'}>
        <Box className='box-nav'>
                <Link
                  p={2}
                  href='#'
                  color={'#FFC600'}                  
                  className='nav'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  Our Program
                </Link>
          </Box>
          <div className='dividers'>
            <img src={Divider} alt=''/>
          </div>
          <Box className='box-nav'>
                <Link
                  p={2}
                  href='#'
                  color={linkColor}
                  className='nav'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                 Language
                </Link>
          </Box>
          <div className='dividers'>
            <img src={Divider} alt=''/>
          </div>
          <Box className='box-nav'>
                <Link
                  p={2}
                  href='#'
                  color={linkColor}
                  className='nav'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  Career
                </Link>
          </Box>
          <div className='dividers'>
            <img src={Divider} alt=''/>
          </div>
          <Box className='box-nav'>
                <Link
                  p={2}
                  href='#'
                  color={linkColor}
                  className='nav'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  Contact
                </Link>
          </Box>
      </Stack>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ lg: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={400}
            fontFamily='Eudoxus Sans'
            size={15}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: 'Our Program',
      href: '#',
      leftDivider: false,
      rightDivider: true
    },
    {
      label: 'Language',
      href: '#',
      leftDivider: true,
      rightDivider: true
    },
    {
      label: 'Career',
      href: '#',
      leftDivider: true,
      rightDivider: true
    },
    {
      label: 'Contact',
      href: '#',
      leftDivider: true,
      rightDivider: false
    }
  ];