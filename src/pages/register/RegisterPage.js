import React from 'react';
import {
    Box,
    Text,
    Image,
    FormControl,
    Button,
    FormLabel,
    Input,
    Icon
} from '@chakra-ui/react';
import {
    FaPaperPlane
} from 'react-icons/fa';
import { connect } from 'react-redux';
import {
    inputRegFirstName,
    inputRegLastName,
    inputRegEmail,
    inputRegPassword,
    registerUser
} from '../../redux/actions';
import linguoLogo from '../../images/linguo-blue.png';
import 'tachyons';
import background from '../../images/backgrounds/background.svg';

const mapStateToProps = state => {
    return {
        inputFirstName: state.inputRegisterDetails.firstName,
        inputLastName: state.inputRegisterDetails.lastName,
        inputEmail: state.inputRegisterDetails.email,
        inputPassword: state.inputRegisterDetails.password,
        registerSubmitValues: state.submitRegisterDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputFirstName: (e) => dispatch(inputRegFirstName(e.target.value)),
        onInputLastName: (e) => dispatch(inputRegLastName(e.target.value)),
        onInputEmail: (e) => dispatch(inputRegEmail(e.target.value)),
        onInputPassword: (e) => dispatch(inputRegPassword(e.target.value)),
        onSubmitRegistration: () => dispatch(registerUser())
    }
}

class RegisterPage extends React.Component{
    constructor(){
        super();
        this.state = {
            captcha: ''
        }
    }

    render(){
        return (
            <Box w="100%" bgImage={background} bgRepeat="no-repeat" bgSize="cover" display="grid" placeItems="center" h="100vh!important">
                    <Box  display="grid" placeItems="center" className='shadow-2' borderRadius="30px" border="1px solid" borderColor="blue.300" bgColor="#FFFFFF" w={{base: '90%', sm: '90%', md: '30%'}} p={10}>
                        <Box w="100%" h="10%" display="grid" placeItems="center">
                            <Box w="150px" h="auto" mb={5}>
                                <Image src={linguoLogo} />
                            </Box>
                        </Box>
                        <Text m={5} textColor="blue.600" fontFamily="Poppins" fontSize="1.75rem" mb={5}>
                            Student Register
                        </Text>
                        <FormControl m={1} isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input onChange={this.props.onInputFirstName} placeholder="first name" />
                        </FormControl>
                        <FormControl m={1} isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input onChange={this.props.onInputLastName} placeholder="last name" />
                        </FormControl>
                        <FormControl m={1} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input onChange={this.props.onInputEmail} type="email" placeholder="email" />
                        </FormControl>
                        <FormControl m={1} isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input onChange={this.props.onInputPassword} type="password" placeholder="password" />
                        </FormControl>
                        <Box w="100%" display="grid" placeItems="center">
                            <Button
                                mt={4}
                                colorScheme="red"
                                isLoading={this.props.registerSubmitValues.isLoading?true:false}
                                type="submit">
                                <Icon as={FaPaperPlane} mr={2} color="white"/>
                                Register
                            </Button>
                        </Box>
                    </Box>
            </Box>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);