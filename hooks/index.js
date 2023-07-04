import {useEffect, useState} from 'react';
import {BackHandler, Dimensions} from 'react-native';

export const useBackHandler = callback => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      callback,
    );

    return () => {
      backHandler.remove();
    };
  }, [callback]);
};

export const usePagination = (fetchData, pageSize = 10) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState('');

  const fetchDataWithPage = async pageNum => {
    setLoading(true);

    const result = await fetchData(pageNum, pageSize, searchText);
    setLoading(false);

    return result;
  };

  const refreshData = async () => {
    setRefreshing(true);

    const result = await fetchDataWithPage(1);
    setData(result);
    setPage(1);
    setRefreshing(false);
  };

  const loadMoreData = async () => {
    const nextPage = page + 1;
    const result = await fetchDataWithPage(nextPage);
    setData([...data, ...result]);
    setPage(nextPage);
  };

  useEffect(() => {
    refreshData();
  }, [searchText]);

  return {
    data,
    loading,
    refreshing,
    searchText,
    setSearchText,
    refreshData,
    loadMoreData,
  };
};

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handleDimensionsChange = ({window}) => {
      setDimensions(window);
    };
    const event = Dimensions.addEventListener('change', handleDimensionsChange);

    return () => event.remove();
  }, []);

  return dimensions;
};
