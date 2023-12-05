
export type barProps = Array<{
    id: number,
    name: string,
    location: {
        type: string,
        coordinates: [number, number]
    },
    place_id: string,
    rating: number,
    address: string,
    status: string,
    formatted_phone_number: string,
    international_phone_number: string,
    maps_url: string,
    user_ratings_total: number,
    opening_hours: string,
    website: string,
}>

export type filterType = string
export type sortingType = string