import React from 'react';
import {
    Box,
    Button,
    Image,
    Flex,
    useDisclosure,
    Stack,
    Collapse,
    IconButton,
    Link,
    Text
} from '@chakra-ui/react';
import {
    Link as Linker
} from 'react-router-dom';
import {
    CloseIcon
} from '@chakra-ui/icons';
import logo from '../../images/linguo-blue.png';
import home from '../../images/icons/home.png';
import calendar from '../../images/icons/calendar.png';
import lecture from '../../images/icons/lecture.png';

export default function MainMenuNav(props) {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box id="menubar-box" position={{base: 'absolute', md: 'static'}} w={{base: "100%", sm: '100%', md: 'unset'}} zIndex={2}>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
          <Flex  mt={{ base: 3, sm: 3, md: 'unset'}} zIndex="2"
            flex={{ base: 0, md: 'auto' }}
            py={{ base: 4 }}
            px={{ base: 6 }}
            justifyContent="center"
            align="center"
            display={{ base: 'flex', md: 'flex', lg: 'none', xl: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon color={'#3aad9b'}  w={{sm: '17px!important', base: '17px!important', md: '5px', lg: '5px'}} h={{sm: '17px!important', base: '17px!important', md: '5px', lg: '5px'}} /> : <Image src={logo} maxW="100px" maxH="auto"/>
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start', lg: 'start', xl: 'start' }} mt={2}>
            <Flex display={{ base: 'none', md: 'none', lg: 'flex' }}>
              <DesktopNav isActive={props.isActive}/>
            </Flex>
          </Flex>
      </Box>
    )
  }

  const DesktopNav = (props) => {
      return (
        <Box w={'100%'} style={{background: '#FAFAFA'}}>
            <Box display="grid" pt={10}>
                <Image src={logo} minW={'130px'} maxW={'130px'}justifySelf="center" mt={2}/>
            </Box>
            <Flex direction="column" pl={1} pr={1} justifyContent={'flex-start'} ml={0} mr={9} mt={10}>
                {MENU_ITEMS.map((item) => (
                    <Linker to={item.href}>
                        <Button key={item.label} w="100%" p={7} borderRadius="20px" iconSpacing={3} leftIcon={item.leftIcon}background="#FFFFF" m={2} isActive={props.isActive === item.label?true:false}
                        _active={{
                            bg: '#FFFFFF',
                            boxShadow: '0px 3.89859px 14.1767px rgba(0, 0, 0, 0.0389404), 0px 1.91116px 6.94968px rgba(0, 0, 0, 0.0310596), 0px 0.755676px 2.74791px rgba(0, 0, 0, 0.0217013)'
                        }}>
                            {item.label}
                        </Button>
                    </Linker>
                ))}
            </Flex>
        </Box>
      )
  }

  const MobileNav = () => {
      return (
          <Stack
          background="#FAFAFA"
          p={6}
          display={{lg: 'none'}}>
          {MENU_ITEMS.map((navItem) => (
           <MobileNavItem key={navItem.label} {...navItem} />   
          ))}
          </Stack>
      );
  }

  const MobileNavItem = ({props, label, href, isActive }) => {
      const { onToggle } = useDisclosure();

      return(
          <Stack spacing={4} onClick={onToggle}>
                <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify="space-between"
                align={'center'}
                _hover={{
                    textDecoration: 'none'
                }}>
                    <Text
                    fontWeight={isActive?700:300}
                    fontFamily="Eudoxus Sans"
                    size={15}
                    color={isActive?'black.800':'black.200'}>
                    {label}
                    </Text>
                </Flex>
          </Stack>
      )
  }
  
  const MENU_ITEMS = [
        {
            label: 'Dashboard',
            href: '/dashboard',
            leftIcon: <Image w={'24px'} h={'26px'} src={home} />
        },
        {
            label: 'Schedule',
            href: '/dashboard/schedule',
            leftIcon: <Image w={'27px'} h={'27px'} src={calendar}/>
        },
        {
            label: 'My Class',
            href: '/dashboard/my-class',
            leftIcon: <Image w={'27px'} h={'29px'} src={lecture} />
        },
  ]