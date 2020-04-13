const commons = {
  fonts: {
    header: `"Staatliches", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    chinese: `"Noto Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    body: `"Overpass", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
  }
}

const lightTheme = {
  ...commons,
  colors: {
    background: '#FCE38A',
    body: '#18587A'
  }
}

const darkTheme = {
  ...commons,
  colors: {
    background: '#18587A',
    body: '#FCE38A'
  }
}

export default { lightTheme, darkTheme }
export { lightTheme }
export { darkTheme }