import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {

    onEmailChange =(text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange =(text) => {
        this.props.passwordChanged(text);
    }
        //
    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
        // 
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                        </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <View>
                <Header
                centerComponent={{ text:'Please Login', style:{color :'#fff'} }}
                />
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email.gmail.com"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                        />
                </CardSection>
                <CardSection>
                <Input 
                    secureTextEntry
                    label="Password"
                    placeholder="Password"
                    onChangeText={this.onPasswordChange}
                    value={this.props.password}
                    />
                 </CardSection>
                 {this.renderError()}
                    <CardSection>
                    {this.renderButton()}
                    <CardSection>
                     </CardSection>
                 </CardSection>
            </Card>
            </View>
            );
        }
    }
    const styles = {
        errorTextStyle: {
            fontSize: 20,
            alignSelf: 'center',
            color: 'red'
        }
    };

const mapStateToProps = (state) => {
    const { email, password, error, loading, user } = state.auth;
    
    return { email, password, error, loading, user };
};
    
// export default connect(null, {emailChanged, passwordChanged}) (LoginForm);
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);