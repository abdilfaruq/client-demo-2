import React from 'react';
import {
    Modal,
    Alert,
    AlertIcon,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Text,
    ModalFooter,
    Box,
    Link,
    ModalBody,
    FormControl,
    FormLabel,
    useDisclosure,
    Input,
    Button,
    ModalCloseButton,
    Heading,
  } from "@chakra-ui/react";
import GoogleLogin from 'react-google-login';

import Hero1 from '../../components/hero/Hero1';
import LogoStack from '../../components/hero/LogoStack';
import Features from '../../components/hero/Features';
import Hero3 from '../../components/hero/Hero3';
import Hero2 from '../../components/hero/Hero2';
import { Hero4 } from '../../components/hero/Hero4';
import MeetOurTeacher from '../../components/hero/MeetOurTeacher';
import Pricing from '../../components/hero/Pricing';
import HomeNav from '../../components/navbar/HomeNav';
import Hero5 from '../../components/hero/Hero5';
import { FAQ } from '../../components/hero/FAQ';
import { Footer } from '../../components/hero/Footer';

import {
    setEmail,
    setPassword,
    requestUserData,
    logoutUser
} from '../../redux/actions';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    email: state.inputLoginDetails.email,
    password: state.inputLoginDetails.password,
    isAuthenticated: state.requestUserData.isAuthenticated,
    userData: state.requestUserData.userData,
    dataError: state.requestUserData.error
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEmail: (e) => dispatch(setEmail(e.target.value)),
        onChangePassword: (e) => dispatch(setPassword(e.target.value)),
        onSignIn: () => dispatch(requestUserData()),
        onLogout: () => {
          dispatch(logoutUser());
          window.location.reload();
        }
    }
}

export const SignInModal = (props) => {
  const responseGoogle=(response) => {
    console.log(response);
    console.log(response.profileObj);
  };
    return (
        <Modal
        isCentered
        initialFocusRef={props.initialRef}
        finalFocusRef={props.finalRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {props.isAuthenticated?<Text textColor="black.600">Hello, <Text as="span" textColor="blue.400">
                {props.userName}
            </Text></Text>:<Text textColor="blue.400" mb={5}>
                Student Login
            </Text>}
          </ModalHeader>
          <ModalCloseButton />
         {props.isAuthenticated?null:<Box w="100%" display="grid" placeItems="center">
            <Box w='40%' h="65px">
              <GoogleLogin
              clientId=""
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              />
            </Box>
          </Box>}
          {props.isAuthenticated?null:<Heading w="100%" textAlign='center' fontFamily='Plus Jakarta Sans' fontStyle="bold" textColor='gray.600' fontSize="13px" fontWeight={600}>
            OR
          </Heading>}
          {props.isAuthenticated?<div></div>:<ModalBody pb={6}>
          {props.err?<Alert status="error" borderRadius={5} mb={5}>
            <AlertIcon />
            Invalid email or password
          </Alert>:''}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input textColor={props.err?'red':'black'} ref={props.initialRef} onChange={props.inputEmail} placeholder="email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type='password' textColor={props.err?'red':'black'} placeholder="password" onChange={props.inputPass}/>
            </FormControl>
            <Box w="60px" _hover={{textDecoration: 'underline'}} cursor={'pointer'}>
              <Link href={'/register'} isExternal>
                <Text textColor="blue.400" fontSize={14} pt={5}>
                    Register
                </Text>
              </Link>
            </Box>
          </ModalBody>}

          <ModalFooter>
            {props.isAuthenticated?<Button colorScheme="blue" mr={3} onClick={props.logout}>
              Logout
            </Button>:<Button textColor='whiteAlpha.900'  backgroundColor="#2ea7f5" colorScheme="blue" onClick={props.click}>
              Sign In
            </Button>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

function Homepage({isAuthenticated, onChangeEmail, onChangePassword, onSignIn, userData, onLogout, dataError}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    return(
                <Box h="100%!important">
                    <SignInModal
                    err={dataError}
                    logout={onLogout}
                    onClose={onClose}
                    isOpen={isOpen}
                    initialRef={initialRef}
                    isAuthenticated={isAuthenticated}
                    userName={isAuthenticated?userData.firstName:''}
                    finalRef={finalRef}
                    click={onSignIn}
                    inputEmail={onChangeEmail.bind(this)}
                    inputPass={onChangePassword.bind(this)}
                    />
                    <HomeNav clicked={onOpen} isAuthenticated={isAuthenticated}/>
                    <Hero1/>
                    <LogoStack/>
                    <Features/>
                    <Hero2/>
                    <Hero3/>
                    <Hero4/>
                    <MeetOurTeacher/>
                    <Pricing/>
                    <Hero5/>
                    <FAQ/>
                    <Footer/>        
                </Box>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);