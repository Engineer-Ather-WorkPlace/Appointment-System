import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Txt from '../txt';
import { Colors, Sizes } from '../../constants';

const ServiceCard = ({ icon, title, bgColor, img }) => (
    <View style={[styles.card, { backgroundColor: bgColor || Colors.white }]}>
        {img ? (
            <Image source={img} style={styles.image} />
        ) : (
            <Txt style={styles.icon} size={Sizes.xxLarge}>{icon}</Txt>
        )}
        <Txt style={styles.title} color={Colors.black}>{title}</Txt>
    </View>
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
        overflow:"hidden"
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
        borderRadius: 16,
    },
    title: {
        fontSize: Sizes.xLarge,
        fontWeight: '600',
        marginBottom: 4,
        color: '#333',
    },
});

export default ServiceCard;
