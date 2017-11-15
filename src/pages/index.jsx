import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import HeaderContainer from '../components/atoms/header/HeaderContainer';
import NameHeader from '../components/atoms/header/NameHeader';

import './Index.scss';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <HeaderContainer>
          <NameHeader />
        </HeaderContainer>
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            image {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
