import { FavoritesProps } from "types";

export function checkIsFavorite(favorites: FavoritesProps[], id: string) {
    const  favorite = favorites.find((fav) => fav.contentId === id);
    const isFavorite = favorite ? true : false;
  return { isFavorite, favorite };
}