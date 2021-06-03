export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 180)
            }
          }
        }
      }
    }
  }
`;
