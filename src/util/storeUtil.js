import { industryStore } from '/src/store/industryStore.js'

export const getIndustry = (industryId) => {
    for (const industry of industryStore) {
        if (industry.id == industryId) {
            return industry
        }
    }

    return {}
}