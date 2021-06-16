import React from "react"
import JSONData from "../data/data.json"
import { StaticImage } from "gatsby-plugin-image"



console.log('JSONData', JSONData)

const JSONbuildtime = () => (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <h1>hello</h1>
        <h1>{JSONData[0].artist}</h1>
        {/* <img src={node.image.childImageSharp.fluid.src} /> */}

        <ul>
            {JSONData.map((data, index) => {
                return <li key={`content_item_${index}`}>{data.profileImage}</li>
                // return <StaticImage src={data.profileImage} alt="A dinosaur" placeholder="blurred" layout="fixed" width={200} height={200}/>
            })}
        </ul>
    </div>
)
export default JSONbuildtime