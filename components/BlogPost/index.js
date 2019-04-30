import React from 'react'; // eslint-disable-line
import Layout from '../BlogLayout';
import Post from '../Post';

function BlogPost(props) {
  const {content, metadata} = props;
  const BlogPostContents = content;

  return (
    <Layout metadata={metadata}>
      {BlogPostContents && (
        <div className="container margin-vert--sm">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <Post metadata={metadata}>
                <BlogPostContents />
              </Post>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPost;
