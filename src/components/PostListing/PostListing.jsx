import React from "react";
import PostLink from  '../molecules/post-link/PostLink';
import './PostListing.scss';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        image: postEdge.node.frontmatter.image.childImageSharp.original.src,
        title: postEdge.node.frontmatter.title,
        category: postEdge.node.frontmatter.category,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        <div className="PostLink-categories" />
        <div className='PostLink-columns'>
          {
            postList.map(post =>
              (
                <PostLink
                  title={post.title}
                  image={post.image}
                  category={post.category}
                  path={post.path}
                />
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default PostListing;
