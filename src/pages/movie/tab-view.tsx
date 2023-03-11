import React, { FC, memo, useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MovieListItem, MovieMenuItem } from 'types/movie'
import { getMoviesByPage } from 'apis/movie'
import PageLoading from 'components/page-loading'
import { MovieScreenNavigationProp } from 'types'
import { styles } from './style'

const TabView: FC<MovieMenuItem> = memo(({ link }) => {
  const navigation = useNavigation<MovieScreenNavigationProp>()

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
        onPress={() => navigation.navigate('Detail', { id: item.id, link: item.link })}
      >
        <Image
          source={{ uri: item.coverUrl }}
          style={styles.cover}
        />
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>{item.movieName}</Text>
          <Text style={styles.star} numberOfLines={1}>{item.info}</Text>
        </View>
      </Pressable>
    )
  }

  if (!movies.length) return <PageLoading />

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