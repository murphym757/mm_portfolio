"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.souseDefaultThemeDark = exports.souseDefaultTheme = void 0;
// Souse Default Color Scheme
var primaryColorAlt = 'rgb(160, 141, 165)';
var secondaryColor = 'rgb(114,225,209)';
var primaryColor = 'rgb(137, 112, 144)';
var white = 'rgb(255, 255, 255)';
var black = 'rgb(0, 0, 0)';
var dayThemeOpacity = 0.95;
var nightThemeOpacity = 0.85;
var souseDefaultTheme = {
  primaryColorAlt: primaryColorAlt,
  secondaryColor: secondaryColor,
  primaryColor: primaryColor,
  primaryFontColor: primaryColor,
  white: white,
  black: black,
  themeOpacity: dayThemeOpacity,
  '$card-bg': primaryColor
};
exports.souseDefaultTheme = souseDefaultTheme;
var souseDefaultThemeDark = {
  primaryColorAlt: primaryColorAlt,
  secondaryColor: secondaryColor,
  primaryColor: primaryColor,
  primaryFontColor: secondaryColor,
  white: black,
  black: white,
  themeOpacity: nightThemeOpacity,
  '$card-bg': primaryColor
};
exports.souseDefaultThemeDark = souseDefaultThemeDark;