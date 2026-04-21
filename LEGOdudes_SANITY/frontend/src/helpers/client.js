import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "9k9wdwgt",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"
})

export default client