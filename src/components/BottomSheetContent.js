import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../assets/themes';


const BottomSheetContent = ({ handleClose }) => {
    return (
        <View style={styles.contentWrapper}>
            <TouchableOpacity 
                onPress={() => alert("A NEW ALBUM!")}
                style={styles.buttonLarge}
            >
            <Text style={styles.buttonTitle}>CREATE A NEW ALBUM</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => alert("Close!")}
                style={styles.buttonSmall}
            >
                <Text style={styles.buttonTitle}>CANCEL</Text>
            </TouchableOpacity> 
        </View>

    );
};

const styles = StyleSheet.create({
    contentWrapper: {
        backgroundColor: theme.colors.lightGray, 
        padding: theme.spacing.m,
        height: 250,
    },
    buttonLarge: {
        marginTop: theme.spacing.sm,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.l,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center', 
        shadowColor: theme.colors.black,
        shadowoffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadious: 8,
        elevation: 4,
    },
    buttonSmall: {
        marginTop: theme.spacing.sm,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center', 
        shadowColor: theme.colors.black,
        shadowoffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadious: 8,
        elevation: 4,
    },
    buttonTitle: {
        ...theme.textVariants.h2,
    },
})



export default BottomSheetContent;
