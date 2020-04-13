import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      header: string;
      chinese: string;
      body: string;
    },
    colors: {
      background: string
      body: string
    }
  }
}