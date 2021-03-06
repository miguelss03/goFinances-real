import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IconsProps {
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)`
    width: 48%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;

    padding: 16px;
`;

export const Icon = styled(Feather) <IconsProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    
    color: ${({ theme, type }) =>
        type === 'up' ? theme.colors.sucess : theme.colors.attention
    }
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`;