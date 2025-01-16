import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";

interface BackButtonProps {
    style?: any;
}

export function BackButton({ style }: BackButtonProps) {
    const navigation = useNavigation();

    return (
        <button 
            style={[styles.button, style]} 
            text="←"
            onTap={() => navigation.goBack()}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 24,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: 40,
        height: 40,
        borderRadius: 20,
        textAlignment: "center",
        elevation: 2,
    },
});