import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";
import { MainStackParamList } from "../../NavigationParamList";

interface NavigationButtonProps {
    text: string;
    targetScreen: keyof MainStackParamList;
    style?: any;
}

export function NavigationButton({ text, targetScreen, style }: NavigationButtonProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(targetScreen);
    };

    return (
        <button 
            style={[styles.button, style]} 
            text={text}
            onTap={handlePress}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8e44ad',
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        padding: 12,
        borderRadius: 24,
        elevation: 4,
    },
});