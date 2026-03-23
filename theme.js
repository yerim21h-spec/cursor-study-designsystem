/**
 * Design tokens extracted from Figma — Style section
 * Primitives → Tokens → Semantic mapping
 */

const primitives = {
  color: {
    green800: '#4b5240',
    green700: '#606c4e',
    green500: '#6f7b5f',
    green300: '#bac3ab',
    green200: '#9aa689',
    green100: '#e3e6d8',
    gray900: '#1d1e1b',
    gray600: '#686967',
    gray400: '#a4a79f',
    gray200: '#e4e5df',
    gray100: '#f0f0ef',
    white: '#ffffff',
  },

  fontSize: {
    28: '1.75rem',
    24: '1.5rem',
    22: '1.375rem',
    20: '1.25rem',
    18: '1.125rem',
    16: '1rem',
    14: '0.875rem',
    12: '0.75rem',
    10: '0.625rem',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.4,
    normal: 1.5,
    relaxed: 1.7,
    compact: 1,
  },

  fontFamily: {
    kr: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    eng: "'Playfair Display', Georgia, serif",
  },
};

const tokens = {
  color: {
    icon: {
      brand: primitives.color.green700,
      inverse: primitives.color.white,
    },
    text: {
      default: primitives.color.gray900,
      subtle: primitives.color.gray600,
      subtlest: primitives.color.gray400,
      brand: primitives.color.green700,
      brandBold: primitives.color.green800,
      brandSubtle: primitives.color.green200,
      inverse: primitives.color.white,
    },
    bg: {
      default: primitives.color.white,
      subtle: primitives.color.gray200,
      subtlest: primitives.color.gray100,
      brand: primitives.color.green700,
      brandSubtle: primitives.color.green100,
    },
    border: {
      default: primitives.color.gray200,
      brand: primitives.color.green500,
      brandSubtle: primitives.color.green300,
      disabled: primitives.color.gray200,
    },
  },

  typography: {
    'header-28-sb-kr': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[28],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.tight,
    },
    'header-28-sb-eng': {
      fontFamily: primitives.fontFamily.eng,
      fontSize: primitives.fontSize[28],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.tight,
    },
    'title-24-sb': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[24],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.normal,
    },
    'title-24-md': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[24],
      fontWeight: primitives.fontWeight.medium,
      lineHeight: primitives.lineHeight.normal,
    },
    'title-22-sb': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[22],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.normal,
    },
    'title-20-sb': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[20],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.tight,
    },
    'title-20-md-eng': {
      fontFamily: primitives.fontFamily.eng,
      fontSize: primitives.fontSize[20],
      fontWeight: primitives.fontWeight.medium,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-18-sb': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[18],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-18-rg': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[18],
      fontWeight: primitives.fontWeight.regular,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-16-bd': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[16],
      fontWeight: primitives.fontWeight.bold,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-16-sb': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[16],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-16-rg': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[16],
      fontWeight: primitives.fontWeight.regular,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-14-sb': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[14],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-14-rg': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[14],
      fontWeight: primitives.fontWeight.regular,
      lineHeight: primitives.lineHeight.normal,
    },
    'body-14-rg-strike': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[14],
      fontWeight: primitives.fontWeight.regular,
      lineHeight: primitives.lineHeight.normal,
      textDecoration: 'line-through',
    },
    'caption-12-sb': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[12],
      fontWeight: primitives.fontWeight.semibold,
      lineHeight: primitives.lineHeight.normal,
    },
    'caption-12-md-strike': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[12],
      fontWeight: primitives.fontWeight.medium,
      lineHeight: primitives.lineHeight.normal,
      textDecoration: 'line-through',
    },
    'caption-12-rg': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[12],
      fontWeight: primitives.fontWeight.regular,
      lineHeight: primitives.lineHeight.relaxed,
    },
    'caption-10-rg': {
      fontFamily: primitives.fontFamily.kr,
      fontSize: primitives.fontSize[10],
      fontWeight: primitives.fontWeight.regular,
      lineHeight: primitives.lineHeight.compact,
    },
  },
};

export { primitives, tokens };
