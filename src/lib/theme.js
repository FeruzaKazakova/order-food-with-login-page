import { store } from '../store'

export const lightTheme = {
    palette:{
        primary: {
            main: '#8A2B06',
            light: '#AD5502',
            dark: '#5A1F08',
            contrastText: '#fff'
        },
        secondary: {
            main: '#5e2913',
            light: '8A2B06',
            dark: '#2c0d00',
            contrastText: '#fff'
        },
        error: {
            main: '#EF0C0C',
            light: '#FE4646',
            dark: '#8B0808',
            contrastText: '#fff'
        },
        success: {
            main: '#2EAE0E',
            light: '#84F668',
            dark: '#383838',
            contrastText: '#fff'
        },
        warning: {
            main: '#DE4618',
            light: '#CE7251',
            dark: '#992B03',
            contrastText: '#fff'
        },
    }
}

export const darkTheme = {
    palette:{
        primary: {
            main: '#434343',
            light: '#383838',
            dark: '#1A1919',
            contrastText: '#fff'
        },
        secondary: {
            main: '#434343',
            light: '#8A2B06',
            dark: '#383838',
            contrastText: '#fff'
        },
        error: {
            main: '#EF0C0C',
            light: '#FE4646',
            dark: '#8B0808',
            contrastText: '#fff'
        },
        success: {
            main: '#2EAE0E',
            light: '#84F668',
            dark: '#1A1919',
            contrastText: '#fff'
        },
        warning: {
            main: '#DE4618',
            light: '#CE7251',
            dark: '#992B03',
            contrastText: '#fff'
        },
    }
}

export const getTheme = () => {
    const currentTheme = store.getState().ui.themeMode

    return currentTheme === 'light' ? lightTheme : darkTheme
}