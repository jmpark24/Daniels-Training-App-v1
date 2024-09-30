import { ExpoConfig, ConfigContext } from 'expo/config';
import 'dotenv/config';
// ExpoConfig를 확장하여 커스텀 속성을 포함할 수 있는 타입을 정의합니다.
type CustomExpoConfig = ExpoConfig & {
  ios?: ExpoConfig['ios'] & {
    buildNumber?: string;
  };
  android?: ExpoConfig['android'] & {
    versionCode?: number;
  };
};

export default ({ config }: ConfigContext): CustomExpoConfig => ({
  name: 'Daniels_Training_Tables',
  slug: 'Daniels_Training_Tables',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    ...(process.env.MY_ENVIRONMENT === 'production' ? { buildNumber: '1.0.0' } : {}),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    ...(process.env.MY_ENVIRONMENT === 'production' ? { versionCode: 1 } : {}),
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-screen-orientation',
      {
        initialOrientation: 'DEFAULT',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
