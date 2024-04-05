module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@context': './src/context',
          '@data': './src/data',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@network': './src/network',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@repository': './src/repository',
          '@navigations': './src/navigations',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@hooks': './src/hooks'
        },
      },
    ],
  ],
};
