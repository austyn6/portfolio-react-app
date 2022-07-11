function AllDevices({ project }) {
    return (
        <>
            {project.acf['web_project_device_images'].map((device) => <img src={project.acf['web_project_device_images'][0]['web_project_device_images']['link']} />)}
        </>
    )
}


export default AllDevices;