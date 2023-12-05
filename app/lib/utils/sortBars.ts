import { barProps, filterType } from "../definitions";

export const sortBars = (bars: barProps, sorting: filterType) => {
    let sortedBars = [...bars];

    switch (sorting) {
        case "starsAsc":
            return sortedBars.sort((a, b) => a.rating - b.rating);
        case "starsDesc":
            return sortedBars.sort((a, b) => b.rating - a.rating);
        case "ratingsAsc":
            return sortedBars.sort((a, b) => a.user_ratings_total - b.user_ratings_total);
        case "ratingsDesc":
            return sortedBars.sort((a, b) => b.user_ratings_total - a.user_ratings_total);
        default:
            return sortedBars;
    }
}