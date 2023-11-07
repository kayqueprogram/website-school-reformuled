import React from 'react';
import BlogCard from '../blog_card/BlogCard';

interface Post {
  id: string;
  title: string;
  image: string;
  content: string;
}

interface BlogPostListProps {
  posts: Post[];
  path: string; // Adicione a propriedade 'path'
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, path }) => {
  return (
    <div>
      {posts.map(post => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          content={post.content}
          path={path}  
        />
      ))}
    </div>
  );
};

export default BlogPostList;
