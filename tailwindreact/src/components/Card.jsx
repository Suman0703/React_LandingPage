import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

export default function Card({ image, title, date, category, excerpt }) {
    return (
        <article className="
      flex flex-col h-full 
      bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 
      overflow-hidden rounded-2xl border border-blue-400 dark:bg-black dark:border-gray-800
    ">

            <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-wide gap-2 mb-3">
                    <span className="text-blue-400">By Dreamland</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 leading-tight group-hover:text-blue-500 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3 flex-grow">
                    {excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    <span>{category}</span>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1 group-hover:text-red-400 transition-colors"><Heart size={14} /> 12</div>
                        <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors"><MessageCircle size={14} /> 3</div>
                    </div>
                </div>
            </div>
        </article>
    );
}