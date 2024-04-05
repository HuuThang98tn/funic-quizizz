import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';


interface RowField {
    label: string;
    value: string;
}

interface RowProps {
    children?: ReactNode;
    fields: RowField[];
    flexDirection?: ViewStyle['flexDirection'];
    isLast?: boolean;
}

export const Row = ({
    children,
    fields,
    flexDirection = 'row',
    isLast,
}: RowProps) => (
    <View style={[styles.rows, isLast && styles.rowLasts, { flexDirection }]}>
        <View>
            {fields.map((field, index) => (
                <View
                    style={[styles.row, fields.length - 1 === index && styles.rowLast]}
                // key={camelCase(field.label)}
                >
                    <Text style={styles.L1}>{field.label}</Text>
                    <Text style={styles.P1}>{field.value}</Text>
                </View>
            ))}
        </View>

        {children}
    </View>
);

const styles = StyleSheet.create({
    row: {
        marginBottom: 10,
    },

    rowLast: {
        marginBottom: 0,
    },
    L1: {
        textTransform: 'uppercase',
        letterSpacing: 0.3,
        fontWeight: '600',
        fontSize: 12,
        color: "#454545",
    },
    P1: {
        fontSize: 16,
        lineHeight: 20,
        color: "#000",
    },
    rows: {
        marginTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },

    rowLasts: {
        paddingBottom: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
    },
});
