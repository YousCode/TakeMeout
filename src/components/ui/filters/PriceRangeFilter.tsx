import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { COLORS, SPACING, TYPOGRAPHY } from "../../../constants/theme";

interface PriceRangeFilterProps {
    value: number[];
    onChange: (range: number[]) => void;
    min?: number;
    max?: number;
}

export function PriceRangeFilter({ 
    value,
    onChange,
    min = 0,
    max = 1000
}: PriceRangeFilterProps) {
    return (
        <stackLayout style={styles.container}>
            <label style={styles.label}>Price Range</label>
            <flexboxLayout style={styles.rangeContainer}>
                <textField
                    style={styles.input}
                    text={value[0].toString()}
                    hint="Min"
                    keyboardType="number"
                    onTextChange={(args) => {
                        const newMin = parseInt(args.value) || min;
                        onChange([newMin, value[1]]);
                    }}
                />
                <label style={styles.separator}>-</label>
                <textField
                    style={styles.input}
                    text={value[1].toString()}
                    hint="Max"
                    keyboardType="number"
                    onTextChange={(args) => {
                        const newMax = parseInt(args.value) || max;
                        onChange([value[0], newMax]);
                    }}
                />
            </flexboxLayout>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.md,
    },
    label: {
        ...TYPOGRAPHY.body,
        marginBottom: SPACING.sm,
    },
    rangeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        paddingHorizontal: SPACING.sm,
        textAlign: "center",
    },
    separator: {
        marginHorizontal: SPACING.sm,
        color: COLORS.text.secondary,
    },
});