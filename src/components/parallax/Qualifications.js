function Qualifications({ qualificationsData }) {
    let softwareList
    let experienceList
    let codeList
    if (qualificationsData?.length > 0) {
        softwareList = qualificationsData.filter(qualification => qualification.qualifications_taxonomy[0] == 6)
        experienceList = qualificationsData.filter(qualification => qualification.qualifications_taxonomy[0] == 5)
        codeList = qualificationsData.filter(qualification => qualification.qualifications_taxonomy[0] == 4)
    }
    return (
        <>
            <h2 className="q-h2">Qualifications</h2>
            <section id="qualifications" className="qualifications">
                <details>
                    <summary>
                        <h3>Experience</h3>
                    </summary>
                    {experienceList?.length > 0 && (
                        <ul>
                            {experienceList.map((data, index) => <li key={index}>{data.qualifications_item}</li>)}
                        </ul>
                    )}
                </details>
                <details>
                    <summary>
                        <h3>Software</h3>
                    </summary>
                    {softwareList?.length > 0 && (
                        <ul>
                            {softwareList.map((data, index) => <li key={index}>{data.qualifications_item}</li>)}
                        </ul>
                    )}
                </details>
                <details>
                    <summary>
                        <h3>Code</h3>
                    </summary>
                    {codeList?.length > 0 && (
                        <ul>
                            {codeList.map((data, index) => <li key={index}>{data.qualifications_item}</li>)}
                        </ul>
                    )}
                </details>
            </section>
        </>
    )
}

export default Qualifications;