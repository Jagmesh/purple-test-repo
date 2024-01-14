declare global {
    namespace NodeJS {
        interface ProcessEnv {
            OPEN_WEATHER_MAP_API_URL: string
        }
    }
}

export {}