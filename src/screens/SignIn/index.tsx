import React, { useContext, useState } from "react";
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import theme from "../../global/styles/theme";
import { useAuth } from '../../hooks/auth';
import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles';

export function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const { signInWithGoogle, signWithApple } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a sua conta do Google');
            setIsLoading(false);
        }
    }
    async function handleSignInWithApple() {
        try {
            setIsLoading(true);
            return await signWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a sua conta do Apple');
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Administre suas{'\n'}contas de uma{'\n'}forma
                        simples
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Login utilizando{'\n'}as plataformas:
                </SignInTitle>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SignInSocialButton
                        title="Entrar com o Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />

                    {
                        Platform.OS === 'ios' &&
                        < SignInSocialButton
                            title="Entrar com Apple"
                            svg={AppleSvg}
                            onPress={handleSignInWithApple}
                        />
                    }
                </FooterWrapper>

                {isLoading &&
                    <ActivityIndicator
                        color={theme.colors.shape} />
                }

            </Footer>
        </Container>
    );
}