import { ExpoConfig, ConfigContext } from 'expo/config';
import 'dotenv/config';

type CustomExpoConfig = ExpoConfig & {
  ios?: ExpoConfig['ios'] & {
    buildNumber?: string;
  };
  android?: ExpoConfig['android'] & {
    versionCode?: number;
    package?: string; // 패키지 이름을 위한 필드 추가
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
    package: 'com.yourcompany.danielstrainingtables', // 여기에 고유한 패키지 이름을 추가
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
  extra: {
    eas: {
      projectId: 'e011941c-382b-4146-892a-71b08a25fd5a',
    },
  },
});
