// src/components/PostList.tsx

// 1. Torna este um Componente de Cliente para podermos usar estado e interatividade
'use client';

import { useState } from 'react';
import BlogPostCard from './BlogPostCard';

// 2. Define o tipo para um único post e para as props do nosso componente
type Post = {
    slug: string;
    title: string;
    summary: string;
    date: string;
};

interface PostListProps {
    posts: Post[]; // O componente espera receber uma lista de posts
}


const PostList: React.FC<PostListProps> = ({ posts }) => {
    // 3. Define o estado para guardar o texto digitado na busca
    const [searchQuery, setSearchQuery] = useState('');

    // 4. Filtra os posts com base na busca antes de renderizar
    //    A busca é feita no título e no resumo, de forma case-insensitive
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* 5. Renderiza o campo de busca (input) */}
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar artigos..."
                className="w-full p-3 mb-8 border border-gray-200 rounded-sm transition-colors bg-gray-100 hover:bg-gray-50 focus:outline-none focus:bg-gray-200"
            />

            {/* 6. Renderiza a lista de posts filtrados ou uma mensagem de "não encontrado" */}
            <ul className="space-y-4">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <BlogPostCard
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            date={post.date}
                            summary={post.summary}
                        />
                    ))
                ) : (
                    <p className="text-gray-400">Nenhum artigo encontrado.</p>
                )}
            </ul>
        </div>
    );
};

export default PostList;