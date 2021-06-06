import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroud: string;
      primaryText: string;
    };
  }
}
