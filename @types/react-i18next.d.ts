import {resources} from '../src/common/languages/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en'];
  }
}
