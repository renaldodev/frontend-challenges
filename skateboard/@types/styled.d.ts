import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        font: string;
        bgColor: string;
        bodyColor:string;
        buttonColor:string;
        borderColor: string;
        videoBgColor: string;
        delay: string;
    }
  }