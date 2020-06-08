import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends React.Component {

    state= {
        albums: []
        // cats: []
    }

    componentWillMount() {
        // console.log('componentWillMount in AlbumList')
        Axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        // Axios.get('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc')
        // .then(res => console.log(res))
        .then(res => this.setState({ albums: res.data }))

    }

    renderAlbums = () => {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} record={album}/>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={{paddingBottom: 15}}>
                    {/* <Text>AlbumList</Text> */}
                    {this.renderAlbums()}
                </View>
            </ScrollView>
        )
    }
}

// const styles = StyleSheet.create({

// })

export default AlbumList