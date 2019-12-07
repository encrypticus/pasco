module.exports = {
  extends: 'stylelint-config-airbnb',
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/properties-order': [
      {
        'properties': [
          'content',
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'display',
          'z-index',
          'float',
          'width',
          'height',
          'margin',
          'padding',
          'font',
          'font-family',
          'font-size',
          'font-weight',
          'font-style',
          'line-height',
          'color',
          'text-align',
          'background-color',
          'border',
          'border-radius',
          'opacity'
        ]
      },
    ],
    'color-hex-length': 'short',
    'string-quotes': 'single'
  }
};

