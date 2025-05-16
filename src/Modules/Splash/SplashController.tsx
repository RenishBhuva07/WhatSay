import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SplashView from './SplashView';
import { simulateAppLoad } from './SplashModel';

export default function SplashController() {
    const navigation = useNavigation();

    useEffect(() => {
        simulateAppLoad().then(() => {
            // navigation.replace('OnboardingStack');
        });
    }, []);

    return <SplashView />;
}
