import React from 'react'; // eslint-disable-line
import Layout from '../BlogLayout';
import Post from '../Post';

function BlogPage(props) {
  const {metadata, entries: BlogPosts} = props;
  const {posts = []} = metadata;

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
