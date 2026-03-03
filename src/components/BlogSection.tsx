import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts, Post } from '../data/posts';

const BlogPost = ({ post, onNavigate }: { post: Post; onNavigate?: () => void }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
    <div 
      className="h-48 overflow-hidden cursor-pointer"
      onClick={onNavigate}
    >
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
        <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
        <span className="flex items-center"><User className="h-3 w-3 mr-1" /> Admin</span>
      </div>
      <h3 
        className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors"
        onClick={onNavigate}
      >
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      <button 
        onClick={onNavigate}
        className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
      >
        Leia Mais <ArrowRight className="ml-1 h-3 w-3" />
      </button>
    </div>
  </div>
);

export default function BlogSection({ onNavigateToPost }: { onNavigateToPost?: (post: Post) => void }) {
  return (

    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Blog MKS Solar</h2>
            <p className="text-gray-600">Fique por dentro das novidades do setor energético.</p>
          </div>
          <button className="hidden md:flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors">
            Ver todos os posts <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={post.id} 
              post={post} 
              onNavigate={() => onNavigateToPost?.(post)} 
            />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors">
            Ver todos os posts <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
