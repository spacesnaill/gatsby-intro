import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const PostTemplate = () => (
  <Layout>
    <h1>Post Title</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted By: Author Name
    </p>
    <p>Post Body</p>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
