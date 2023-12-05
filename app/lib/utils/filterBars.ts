import { barProps, filterType } from "../definitions";

export const filterBars = (bars: barProps, filter: filterType) => {
    if (filter === 'adventure') {
        const result = bars.filter((bar) => bar.user_ratings_total <= 50)
        return result;
    }
    if (filter === 'breton') {
        const result = bars.filter((bar) => bar.formatted_phone_number.includes('22') || bar.formatted_phone_number.includes('29') || bar.formatted_phone_number.includes('35') || bar.formatted_phone_number.includes('56'))
        return result;
    }
    if (filter === 'student') {
        const result = bars.filter((bar) => {
            if (bar.opening_hours === "null") {
                return
            }
            const openingHours = JSON.parse(bar.opening_hours)
            if (!openingHours[3].includes('Fermé')) {
                return bar
            }
        })
        return result;
    }
    return bars;
}