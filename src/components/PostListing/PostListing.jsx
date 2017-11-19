import React from "react";
import CategoryList from '../molecules/category-list/CategoryList';
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
        <h2 className="PostListing-title">Technical Posts</h2>
        <div className="PostListing-categories">
          <CategoryList
            categories={
              postList.map(post => post.category)
              // gets a unique list of categories
              .filter((v, i, a) => a.indexOf(v) === i)
            }
          />
        </div>
        <div className='PostListing-grid'>
          {
            postList.map(post =>
              (
                <PostLink
                  key={post.path}
                  title={post.title}
                  image={post.image}
                  date={post.date}
                  category={post.category}
                  path={post.path}
                  tags={post.tags}
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
