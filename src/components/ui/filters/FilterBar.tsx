import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { COLORS, SPACING } from "../../../constants/theme";

interface FilterOption {
    id: string;
    label: string;
}

interface FilterBarProps {
    options: FilterOption[];
    selectedId: string;
    onSelect: (id: string) => void;
}

export function FilterBar({ options, selectedId, onSelect }: FilterBarProps) {
    return (
        <scrollView orientation="horizontal" style={styles.container}>
            <flexboxLayout style={styles.content}>
                {options.map((option) => (
                    <button
                        key={option.id}
                        style={[
                            styles.option,
                            selectedId === option.id && styles.selectedOption
                        ]}
                        text={option.label}
                        onTap={() => onSelect(option.id)}
                    />
                ))}
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: COLORS.background,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    content: {
        flexDirection: "row",
        padding: SPACING.sm,
    },
    option: {
        paddingVertical: SPACING.xs,
        paddingHorizontal: SPACING.md,
        marginHorizontal: SPACING.xs,
        borderRadius: 20,
        backgroundColor: COLORS.background,
        color: COLORS.text.secondary,
        fontSize: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    selectedOption: {
        backgroundColor: COLORS.primary,
        color: COLORS.background,
        borderColor: COLORS.primary,
    },
});