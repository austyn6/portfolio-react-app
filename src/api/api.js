async function wordPressFetch(query) {
    try {
        const results = await fetch(`https://austyn.ca/content/wp-json/wp/v2/${query}`)
        return results.json()
    } catch (error) {
        return { type: 'error', message: error }
    }
}

export { wordPressFetch }