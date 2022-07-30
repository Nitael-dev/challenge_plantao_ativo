import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleFavorite = async (
  setFavoriteState?: React.Dispatch<React.SetStateAction<string[]>>,
  id?: number,
  setFavoriteLoading?: React.Dispatch<React.SetStateAction<number>>
) => {
  setFavoriteLoading && setFavoriteLoading(Number(id));
    if(setFavoriteState) {
      if(id) {
        const asyncItem = await AsyncStorage.getItem('favorites');
        const favorites = String(asyncItem).search(',') !== -1 ?
        String(asyncItem).split(',')
        : [String(asyncItem)];
        if(!favorites) {
          await AsyncStorage.setItem('favorites', String([id]));
          setFavoriteState([String(id)]);
          setFavoriteLoading && setFavoriteLoading(-1);
          return;
        }
        if(!!favorites.find((item) => item === String(id))) {
          console.log('asdasd2');
          const newValue = favorites.filter(item => item !== String(id));
          await AsyncStorage.setItem('favorites', String(newValue));
          setFavoriteLoading && setFavoriteLoading(-1);
          return;
        }
        if(favorites[favorites.length - 1] === String(id)) {
          console.log('asdasd3');
          let changeable = favorites;
          changeable.pop();
          const newValue = String(changeable);
          await AsyncStorage.setItem('favorites', newValue);
          setFavoriteLoading && setFavoriteLoading(-1);
          return;
        }
        await AsyncStorage.setItem('favorites', String([...favorites, String(id)]));
        setFavoriteState([...favorites, String(id)]);
        setFavoriteLoading && setFavoriteLoading(-1);
        } else {
        const favorites = String(await AsyncStorage.getItem('favorites')).split(',')
        ?? await AsyncStorage.getItem('favorites');
        setFavoriteState(favorites);
        setFavoriteLoading && setFavoriteLoading(-1);
      }
    } else {
      const asyncItem = await AsyncStorage.getItem('favorites');
      const favorites = String(asyncItem).search(',') !== -1 ?
      String(asyncItem).split(',')
      : [String(asyncItem)];
      if(!!favorites.find((item) => item === String(id))) {
        console.log('asdasd2');
        const newValue = favorites.filter(item => item !== String(id));
        await AsyncStorage.setItem('favorites', String(newValue));
        setFavoriteLoading && setFavoriteLoading(-1);
        return;
      }
      if(favorites[favorites.length - 1] === String(id)) {
        console.log('asdasd3');
        let changeable = favorites;
        changeable.pop();
        const newValue = String(changeable);
        await AsyncStorage.setItem('favorites', newValue);
        setFavoriteLoading && setFavoriteLoading(-1);
        return;
      }
    }
  }