import { Platform, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

export default function useResponsive() {
    const { width, height } = useWindowDimensions();
    
    const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
    };
    
    const [deviceType, setDeviceType] = useState(() => {
        if (width < breakpoints.sm) return 'mobile';
        if (width >= breakpoints.sm && width < breakpoints.lg) return 'tablet';
        return 'desktop';
    });
    
    useEffect(() => {
        if (width < breakpoints.sm) setDeviceType('mobile');
        else if (width >= breakpoints.sm && width < breakpoints.lg) setDeviceType('tablet');
        else setDeviceType('desktop');
    }, [width]);
    
    return {
    isWeb: Platform.OS === 'web',
    isNative: Platform.OS === 'ios' || Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
    platform: Platform.OS,
    
    width,
    height,
    isPortrait: height > width,
    isLandscape: width > height,
    
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    deviceType,
    
    isScreenSm: width >= breakpoints.sm,
    isScreenMd: width >= breakpoints.md,
    isScreenLg: width >= breakpoints.lg,
    isScreenXl: width >= breakpoints.xl,
    isScreen2Xl: width >= breakpoints['2xl'],
    
    select: (config) => {
        if (Platform.OS === 'web') {
            return config.web || config.default;
        }
        if (Platform.OS === 'ios') {
            return config.ios || config.native || config.default;
        }
        if (Platform.OS === 'android') {
            return config.android || config.native || config.default;
        }
        return config.default || {};
        }
    };
}