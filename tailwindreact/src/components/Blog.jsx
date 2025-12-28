const BlogCard = ({ title, date, category, image, heightClass }) => (
  <div className="break-inside-avoid mb-8 bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
    <div className={`overflow-hidden ${heightClass}`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
    </div>
    <div className="p-8 border border-t-0 border-gray-100">
      <div className="flex text-[10px] uppercase text-gray-400 gap-2 mb-3">
        <span>By Shufflehound</span>
        <span>•</span>
        <span>{date}</span>
      </div>
      <h2 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{title}</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        Dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.
      </p>
      <div className="pt-4 border-t border-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {category}
      </div>
    </div>
  </div>
);

export default BlogCard ;