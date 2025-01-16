import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface SearchBarProps {
    value?: string;
    onTextChange?: (text: string) => void;
    placeholder?: string;
}

export function SearchBar({ value, onTextChange, placeholder = "Rechercher..." }: SearchBarProps) {
    return (
        <flexboxLayout style={styles.container}>
            <searchBar 
                hint={placeholder}
                text={value}
                onTextChange={(args) => onTextChange?.(args.value)}
                style={styles.searchInput}
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: "#f5f5f5",
        borderRadius: 20,
        paddingHorizontal: 16,
    },
});