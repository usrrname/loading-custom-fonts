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
