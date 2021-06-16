// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"

// const Gallery = () => {
//   const data = useStaticQuery(graphql`
//     {
//         allJson {
//             edges {
//               node {
//                 value
//               }
//             }
//           }
//     }
//   `)
//   return (
//     <Layout>
//       <h1>All PDF Downloads</h1>
//       <ul>
//         {data.allFile.edges.map((file, index) => {
//           console.log('file.node.publicURL', file.node.publicURL)
//           return (
//             <div>
//             <GatsbyImage image="src/images/profile-photos/IMG_9523.jpeg"/>
//             </div>
//           )
//         })}
//       </ul>
//     </Layout>
//   )
// }
// export default Gallery