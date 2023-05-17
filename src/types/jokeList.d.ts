type JokeListType = {
    find(arg0?: (item: JokeListType) => boolean): unknown
    categories?: any[],
    created_at?: string,
    icon_url?: string,
    id: string,
    updated_at?: string,
    url: string,
    value: string
}

export { JokeListType }