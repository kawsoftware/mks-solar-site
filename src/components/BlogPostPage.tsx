import React, { useEffect } from 'react';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { Post } from '../data/posts';
import { getWhatsAppLink } from '../utils/whatsapp';

interface BlogPostPageProps {
  post: Post;
  onBack: () => void;
}

export default function BlogPostPage({ post, onBack }: BlogPostPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-900 hover:text-blue-700 font-semibold transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para a Home
          </button>
          <span className="text-sm text-gray-500 hidden sm:block">Blog MKS Solar</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative min-h-[60vh] md:h-[60vh] w-full overflow-hidden flex flex-col justify-end">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="relative z-10 w-full p-8 pb-20 md:p-16 md:pb-24 max-w-7xl mx-auto mt-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para o Blog
          </button>
          <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            Blog MKS Solar
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center text-white/90 text-sm gap-6">
            <span className="flex items-center"><Calendar className="h-4 w-4 mr-2 text-blue-400" /> {post.date}</span>
            <span className="flex items-center"><User className="h-4 w-4 mr-2 text-blue-400" /> {post.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {post.sections.map((section, idx) => {
              switch (section.type) {
                case 'paragraph':
                  return (
                    <p 
                      key={idx} 
                      className={`mb-6 ${section.highlight ? 'text-xl text-gray-600 italic border-l-4 border-blue-500 pl-6 py-2' : ''}`}
                      dangerouslySetInnerHTML={{ __html: section.content || '' }}
                    />
                  );
                case 'heading':
                  const headingLevel = section.level || 2;
                  const HeadingTag = `h${headingLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
                  return (
                    <HeadingTag key={idx} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                      {section.content}
                    </HeadingTag>
                  );
                case 'list':
                  return (
                    <ul key={idx} className="space-y-4 mb-8">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">{i + 1}</div>
                          <div dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  );
                case 'highlight':
                  return (
                    <div key={idx} className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600 mb-8">
                      <p dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                    </div>
                  );
                case 'table':
                  return (
                    <div key={idx} className="overflow-x-auto mb-8">
                      <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-blue-900 text-white">
                            {section.tableData?.head.map((h, i) => (
                              <th key={i} className="p-4 font-bold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {section.tableData?.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                              {row.map((cell, j) => (
                                <td key={j} className={`p-4 ${j === 0 ? 'font-semibold text-blue-900' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                case 'grid':
                  return (
                    <div key={idx} className="grid md:grid-cols-2 gap-4 mb-8">
                      {section.gridData?.map((item, i) => (
                        <div key={i} className="p-4 bg-gray-100 rounded-lg">
                          <span className="block text-xs font-bold text-gray-500 uppercase mb-1">{item.label}</span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  );
                case 'conclusion':
                  return (
                    <div key={idx} className="bg-blue-900 rounded-2xl p-10 text-white text-center my-16">
                      <h2 className="text-3xl font-bold mb-4">Conclusão</h2>
                      <p className="text-lg text-blue-100 mb-0">
                        {section.content}
                      </p>
                    </div>
                  );
                default:
                  return null;
              }
            })}

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gostaria de um orçamento detalhado?</h3>
              <p className="mb-6">Fale com nossos especialistas e descubra como a MKS Solar pode transformar sua vida e seus negócios.</p>
              <a href={getWhatsAppLink('blog')} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
                Falar com Especialista MKS SOLAR
              </a>
            </div>
          </div>

          {/* Footer of the article */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0284c7&color=fff`} alt="Author" className="w-12 h-12 rounded-full" />
              <div>
                <span className="block font-bold text-gray-900">{post.author}</span>
                <span className="block text-sm text-gray-500">{post.role}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const url = window.location.href;
                  const text = `Confira este artigo da MKS Solar: ${post.title}`;
                  if (navigator.share) {
                    navigator.share({ title: post.title, text, url });
                  } else {
                    navigator.clipboard.writeText(url).then(() => {
                      const btn = document.getElementById('share-btn');
                      if (btn) {
                        btn.textContent = 'Link copiado!';
                        setTimeout(() => { btn.textContent = ''; }, 2000);
                      }
                    });
                  }
                }}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Share2 className="h-5 w-5" />
                <span id="share-btn" className="text-sm"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
