import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { COLORS, SPACING, TYPOGRAPHY } from "../../../constants/theme";

interface DateFilterProps {
    date: Date;
    onDateChange: (date: Date) => void;
}

export function DateFilter({ date, onDateChange }: DateFilterProps) {
    return (
        <stackLayout style={styles.container}>
            <label style={styles.label}>Select Date</label>
            <datePicker
                style={styles.datePicker}
                date={date}
                onDateChange={(args) => onDateChange(args.value)}
                minDate={new Date()}
                maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days from now
            />
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
    datePicker: {
        width: "100%",
        height: 40,
    },
});