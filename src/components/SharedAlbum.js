import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import Avatars from './Avatars';
import theme from '../../assets/themes';
import { ThemeProvider } from '@react-navigation/native';
import ImageGallery from './ImageGallery';
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbum = ({ route }) => {
    const {album} = route.params;

    console.log(album);

    return (
        <ScrollView>
            <SharedAlbumTitleCard album={album} />

            <View style={styles.avatarContainer}>
                <Avatars avatars={album.avatars} />
                <Text style={styles.avatarContainerText}>{`${album.avatars.length} people`}</Text>
            </View>

            <ImageGallery images={backgroundImages} />
             
        </ScrollView>
    ); 
};

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightGray, 
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorrizontal: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
    },
    avatarContainerText: {
        ...theme.textVariants.body3,
        color: theme.colors.gray,
        opacity: 0.3
    },
})

export default SharedAlbum;