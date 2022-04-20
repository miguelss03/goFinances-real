//arquivo que serve para a sobreposição de 'tipos' (no caso, tipos de estilos)
// utilizando o typescript

import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType { }
}