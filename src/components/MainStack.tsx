import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/home/HomeScreen";
import { LoginScreen } from "./screens/auth/LoginScreen";
import { ProfileDetailsScreen } from "./screens/profile/ProfileDetailsScreen";
import { BookingScreen } from "./screens/booking/BookingScreen";
import { MatchesScreen } from "./screens/matches/MatchesScreen";
import { SavedScreen } from "./screens/saved/SavedScreen";
import { ProfileScreen } from "./screens/profile/ProfileScreen";
import { WalletScreen } from "./screens/wallet/WalletScreen";

const StackNavigator = stackNavigatorFactory();

export function MainStack() {
    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    cardStyle: { backgroundColor: 'white' },
                    presentation: 'card'
                }}
            >
                {/* Main Tabs */}
                <StackNavigator.Screen name="Home" component={HomeScreen} />
                <StackNavigator.Screen name="Matches" component={MatchesScreen} />
                <StackNavigator.Screen name="Saved" component={SavedScreen} />
                <StackNavigator.Screen name="Wallet" component={WalletScreen} />
                <StackNavigator.Screen name="Profile" component={ProfileScreen} />
                
                {/* Modal Screens */}
                <StackNavigator.Screen 
                    name="ProfileDetails" 
                    component={ProfileDetailsScreen}
                    options={{ presentation: 'modal' }}
                />
                <StackNavigator.Screen 
                    name="Booking" 
                    component={BookingScreen}
                    options={{ presentation: 'modal' }}
                />
                <StackNavigator.Screen 
                    name="Login" 
                    component={LoginScreen}
                    options={{ presentation: 'modal' }}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
}