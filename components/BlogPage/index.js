import React from 'react'; // eslint-disable-line
import Layout from '../BlogLayout';
import Post from '../Post';

function BlogPage(props) {
  let {metadata, entries: BlogPosts} = props;
  let {posts = []} = metadata;

  {
    /* Temporary hack because Docusaurus 2 blog post is in reverse order */
  }
  BlogPosts = BlogPosts.reverse();
  posts = posts.reverse();
  {
    /* TODO remove this in the future*/
  }

  return (
    <Layout metadata={metadata}>
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            {BlogPosts.map((PostContent, index) => (
              <div className="margin-bottom--lg" key={index}>
                <Post truncated metadata={posts[index]}>
                  <PostContent />
                </Post>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;
