import React, { useRef, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ROUTES = ['index', 'Training', 'Equivalent', 'More'] as const;
type RouteNames = (typeof ROUTES)[number];

export function AnimatedTabContent({ children }: { children: React.ReactNode }) {
  const translateX = useSharedValue(0); // translateX를 애니메이션으로 제어
  const router = useRouter();
  const pathname = usePathname();
  const activeIndex = useRef(ROUTES.indexOf(pathname.split('/')[1] as RouteNames));

  const navigateToTab = (index: number) => {
    const route = ROUTES[index];
    if (route === 'index') {
      router.push('/');
    } else {
      router.push(`/${route}`);
    }
  };

  const panGestureHandler = (event: PanGestureHandlerGestureEvent) => {
    'worklet';
    const { translationX, state, velocityX } = event.nativeEvent;

    if (state === 2) {
      // 스와이프 중일 때 translateX 값을 업데이트하여 화면 이동
      translateX.value = -activeIndex.current * SCREEN_WIDTH + translationX;
    } else if (state === 3 || state === 5) {
      // 제스처 종료 시 새로운 인덱스 계산
      let newIndex = activeIndex.current;
      if (Math.abs(velocityX) > 500) {
        newIndex += velocityX > 0 ? -1 : 1;
      } else {
        const dragThreshold = SCREEN_WIDTH / 3;
        if (Math.abs(translationX) > dragThreshold) {
          newIndex += translationX > 0 ? -1 : 1;
        }
      }

      newIndex = Math.max(0, Math.min(newIndex, ROUTES.length - 1)); // 경계값 보정

      // 현재 탭과 목표 탭이 다를 때만 애니메이션 적용
      if (newIndex !== activeIndex.current) {
        activeIndex.current = newIndex;

        // translateX 값을 새로운 탭 위치로 애니메이션 처리
        translateX.value = withTiming(-newIndex * SCREEN_WIDTH, {
          duration: 300,
          easing: Easing.out(Easing.cubic),
        });

        // 탭 변경 후 경로 이동
        runOnJS(navigateToTab)(newIndex);
      }
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // 경로가 변경되면 translateX 값을 초기화하여 애니메이션 실행
  useEffect(() => {
    let newIndex = ROUTES.indexOf(pathname.split('/')[1] as RouteNames);
    newIndex = Math.max(0, Math.min(newIndex, ROUTES.length - 1));

    // newIndex가 현재 activeIndex와 다를 경우에만 translateX 업데이트
    if (newIndex !== activeIndex.current) {
      activeIndex.current = newIndex;

      // 화면을 새로운 위치로 이동
      translateX.value = withTiming(-newIndex * SCREEN_WIDTH, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
    }
  }, [pathname]);

  return (
    <View style={{ flex: 1, overflow: 'hidden' }}>
      {/* overflow 설정 */}
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH * ROUTES.length, // 전체 탭 너비 설정
              flexDirection: 'row',
            },
            animatedStyle,
          ]}
        >
          {React.Children.map(children, (child, index) => (
            <View key={index} style={{ width: SCREEN_WIDTH }}>
              {child}
            </View>
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
