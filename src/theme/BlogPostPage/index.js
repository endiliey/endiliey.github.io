import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';

function BlogPostPage(props) {
  const {content: BlogPostContent} = props;
  const {frontMatter, metadata} = BlogPostContent;
  return (
    <Layout title={metadata.title} description={metadata.description}>
      {BlogPostContent && (
        <div className="container margin-vert--sm">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <BlogPostItem frontMatter={frontMatter} metadata={metadata}>
                <BlogPostContent />
              </BlogPostItem>
              <div className="margin-vert--xl">
                <BlogPostPaginator
                  nextItem={metadata.nextItem}
                  prevItem={metadata.prevItem}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
