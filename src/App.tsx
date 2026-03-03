import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SolutionsSection from './components/SolutionsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import BlogPostPage from './components/BlogPostPage';
import { Post } from './data/posts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog-post'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleNavigateToPost = (post: Post) => {
    setSelectedPost(post);
    setCurrentPage('blog-post');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <AboutSection />
            <SolutionsSection />
            
            {/* Installation Process Teaser */}
            <section className="py-20 bg-blue-900 text-white text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A MKS Solar na prática</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Acompanhe como é feita a instalação dos Geradores de Energia Solar WEG. 
                  Qualidade e Cuidado desde o orçamento até a entrega.
                </p>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <video 
                    controls 
                    className="w-full h-auto max-h-[500px] object-cover"
                    preload="metadata"
                    poster=""
                  >
                    <source src="video-institucional.mp4" type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeos.
                  </video>
                </div>
              </div>
            </section>

            <BlogSection onNavigateToPost={handleNavigateToPost} />
          </>
        ) : (
          selectedPost && <BlogPostPage post={selectedPost} onBack={() => setCurrentPage('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
}
