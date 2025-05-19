
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Txt from '../txt';
import { Colors, Sizes } from '../../constants';

const ServiceCard = ({ icon, title, bgColor, img, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.card, { backgroundColor: bgColor || Colors.white }]}>
            {img ? (
                <Image source={img} style={styles.image} />
            ) : (
                <Txt  size={Sizes.medium}>{icon}</Txt>
            )}
            <Txt size={Sizes.medium} mt={20} color={Colors.black}>{title}</Txt>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 16,
        borderColor: Colors.primary,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        overflow: 'hidden',
        alignItems: 'center',
    },
    icon: {
        fontSize: 60,
        marginBottom: 8,
        color: Colors.primary,
    },
    image: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
    },
    title: {
        fontSize: Sizes.xLarge,
        fontWeight: '600',
        marginTop: 18,
        color: '#333',
        textAlign: 'center',
    },
});

export default ServiceCard;
