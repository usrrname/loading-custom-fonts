import {
  ProximaNovaRegularOtf,
  ProximaNovaRegularTtf,
  ProximaNovaRegularWoff,
  ProximaNovaRegularWoff2,
} from "../assets/fonts";

const fallbackFontStack = "Helvetica Neue, Arial, sans-serif";
const mainFont = "Proxima Nova";

export const fontFamily = {
  regular: `${mainFont}`,
  bold: `${mainFont} Bold`,
};

// Font Sizes
export const fonts = {
  heading: `${fontFamily.bold}, ${fallbackFontStack}`,
  body: `${fontFamily.regular}, ${fallbackFontStack}`,
};

export const globalFonts = `
@font-face {
  font-family: 'Proxima Nova';
  src: url(${ProximaNovaRegularOtf}) format('opentype'),
    url(${ProximaNovaRegularTtf}) format('ttf'),
    url(${ProximaNovaRegularWoff2}) format('woff2'),
    url(${ProximaNovaRegularWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: optional;
  fallback: ${fallbackFontStack};
}
`;
