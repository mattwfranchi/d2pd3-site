import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const MarkdownSection = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "dataset-access.md/" }) {
        html
        frontmatter {
          title
        }
      }
    }
  `)

  const post = data.markdownRemark

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default MarkdownSection
