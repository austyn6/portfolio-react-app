function WebFeaturedImage({ project }) {
    const featuredImageData = project['_embedded']['wp:featuredmedia'][0];
    return (
            <img src={featuredImageData.media_details.sizes.full['source_url']} alt={featuredImageData['alt_text']} className='featured-image' />
    )
}

export default WebFeaturedImage;