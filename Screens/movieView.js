import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    Text, View,
    Image,
    Button,
    TouchableOpacity, ActivityIndicator,
} from 'react-native';
import styles from "./styles";

const MovieView = (props) => {
    const { movieData } = props
    return (
        <View style={styles.container}>

            <FlatList
                numColumns={2}
                data={movieData}
                onEndReached={() => props.handleLoadMore()}
                onEndReachedThreshold={0.5}
                keyExtractor={(item) => item.id.toString()}
                initialNumToRender={10}
                renderItem={({ item, index }) =>
                    <View style={styles.cardSection}>
                        <Image
                            style={styles.image}
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
                        />
                        <View style={styles.textSection}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text numberOfLines={2} style={styles.movieTitle}>{item.title}</Text>
                                {item.checked && <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => props.unfavourites(item, index)}
                                ><Text style={{ fontSize: 30, color: 'red' }}> ♥</Text>

                                </TouchableOpacity>}
                                {item && !item.checked && <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => props.favourites(item, index)}
                                >
                                    <Text style={{ fontSize: 30 }}>♡</Text>
                                </TouchableOpacity>}
                            </View>
                            <Text numberOfLines={3} style={styles.desc}>{item.overview}</Text>
                        </View>
                    </View>}
            />
            <View>
                <Button
                    title="Load More Data"
                    onPress={() => props.handleLoadMore()}
                />
            </View>
        </View>
    )
};

export default MovieView;