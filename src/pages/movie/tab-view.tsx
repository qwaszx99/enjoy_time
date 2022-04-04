import React, { FC, memo, useEffect, useState } from 'react'
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MovieListItem, MovieMenuItem } from 'types/movie'
import { getMoviesByPage } from 'apis/movie'
import { APP } from 'config'
import { styles } from './style'


const TabView: FC<MovieMenuItem> = memo(({ link }) => {
  const navigation = useNavigation()

  const [movies, setMovies] = useState<MovieListItem[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await getMoviesByPage(link)
      setMovies(res)
    } catch (error) {

    }

  }

  const _renderItem: FC<{ item: MovieListItem }> = ({ item }) => {

    return (
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate('Detail' as never, { id: item.id } as never)}
      >
        <ImageBackground
          source={{ uri: APP.assetBaseUrl + item.coverUrl }}
          style={styles.cover}
        >
          <View style={styles.bg}>
            <Text style={styles.progress}>{item.progress}</Text>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>{item.movieName}</Text>
          <Text style={styles.star} numberOfLines={1}>主演: {item.stars}</Text>
          <View style={styles.row}>
            <Text style={styles.label} numberOfLines={1}>产地: {item.area}</Text>
            <Text style={styles.label} numberOfLines={1}>年份: {item.year}</Text>
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={_renderItem}
        numColumns={2}
        contentContainerStyle={styles.contentStyle}
        columnWrapperStyle={styles.columnStyle}
      />
    </View>
  )
})

export default TabView