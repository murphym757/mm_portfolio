// Souse Default Color Scheme
const primaryColorAlt = 'rgb(160, 141, 165)';
const secondaryColor = 'rgb(114,225,209)';
const primaryColor = 'rgb(137, 112, 144)';
const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';
const dayThemeOpacity = 0.95;
const nightThemeOpacity = 0.85;

export const souseDefaultTheme = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColor,
    primaryFontColor: primaryColor,
    white: white,
    black: black,
    themeOpacity: dayThemeOpacity,
    '$card-bg': primaryColor
}

export const souseDefaultThemeDark = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColor,
    primaryFontColor: secondaryColor,
    white: black,
    black: white,
    themeOpacity: nightThemeOpacity,
    '$card-bg': primaryColor
}