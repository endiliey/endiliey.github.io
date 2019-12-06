import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';

function BlogListPage(props) {
  const {metadata, items} = props;

  return (
    <Layout
      isBlogListPage={true}
      title="Endiliey"
      description="Endilie's personal blog">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            {items.map(
              ({content: BlogPostContent}) => (
                <div
                  className="margin-bottom--lg"
                  key={BlogPostContent.metadata.permalink}>
                  <BlogPostItem
                    frontMatter={BlogPostContent.frontMatter}
                    metadata={BlogPostContent.metadata}
                    truncated>
                    <BlogPostContent />
                  </BlogPostItem>
                </div>
              ),
            )}
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
