import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import SplashView from "../Modules/Splash/SplashView";

const Stack = createNativeStackNavigator()

type AppNavigatorProps = {
    userToken: string | null;
};

export default function AppNavigator({ userToken }: AppNavigatorProps) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SplashView />;
    }

    return <NavigationContainer>
        <StatusBar backgroundColor="#128C7E" barStyle="light-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {userToken == null ? (
                <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
            ) : (
                <Stack.Screen name="MainApp" component={MainTabNavigator} />
            )}
        </Stack.Navigator>
    </NavigationContainer>
}
