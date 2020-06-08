import React from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({record}) => {

    const { thumbnail_image, title, artist, image, url } = record
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        headerTextStyle,
        imageStyle
    } = styles

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={thumbnailStyle}
                        />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image}}
                    style={imageStyle}
                    />
            </CardSection>

            <CardSection>
                <Button
                    whenPress={() => Linking.openURL(url)}
                    // whenPress={() => console.log(title)}
                    >
                        Buy Me
                    </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumDetail