/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        icon: {
          brand: 'var(--color-icon-brand)',
          inverse: 'var(--color-icon-inverse)',
        },
        text: {
          default: 'var(--color-text-default)',
          subtle: 'var(--color-text-subtle)',
          subtlest: 'var(--color-text-subtlest)',
          brand: 'var(--color-text-brand)',
          'brand-bold': 'var(--color-text-brand-bold)',
          'brand-subtle': 'var(--color-text-brand-subtle)',
          inverse: 'var(--color-text-inverse)',
        },
        bg: {
          default: 'var(--color-bg-default)',
          subtle: 'var(--color-bg-subtle)',
          subtlest: 'var(--color-bg-subtlest)',
          brand: 'var(--color-bg-brand)',
          'brand-subtle': 'var(--color-bg-brand-subtle)',
        },
        border: {
          default: 'var(--color-border-default)',
          brand: 'var(--color-border-brand)',
          'brand-subtle': 'var(--color-border-brand-subtle)',
          disabled: 'var(--color-border-disabled)',
        },
      },
      fontFamily: {
        kr: 'var(--font-family-kr)',
        eng: 'var(--font-family-eng)',
      },
      fontSize: {
        'header-28': ['var(--font-size-28)', { lineHeight: 'var(--line-height-tight)' }],
        'title-24': ['var(--font-size-24)', { lineHeight: 'var(--line-height-normal)' }],
        'title-22': ['var(--font-size-22)', { lineHeight: 'var(--line-height-normal)' }],
        'title-20': ['var(--font-size-20)', { lineHeight: 'var(--line-height-tight)' }],
        'body-18': ['var(--font-size-18)', { lineHeight: 'var(--line-height-normal)' }],
        'body-16': ['var(--font-size-16)', { lineHeight: 'var(--line-height-normal)' }],
        'body-14': ['var(--font-size-14)', { lineHeight: 'var(--line-height-normal)' }],
        'caption-12': ['var(--font-size-12)', { lineHeight: 'var(--line-height-relaxed)' }],
        'caption-10': ['var(--font-size-10)', { lineHeight: 'var(--line-height-compact)' }],
      },
      fontWeight: {
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      lineHeight: {
        tight: 'var(--line-height-tight)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        compact: 'var(--line-height-compact)',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
    },
  },
  plugins: [],
};
