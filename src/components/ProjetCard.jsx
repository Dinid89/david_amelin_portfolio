function ProjetCard({ title, tags, description, imageUrl, projectUrl }) {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 max-w-sm h-[600px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-700">
      
      <img 
        className="image w-full object-contain p-2"
        style={{width: "100%", height: "300px"}} 
        src={imageUrl} 
        alt={title} 
      />

      <div className="p-6 text-center text-white flex flex-col items-center">
        
        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-900/30 border border-gray-700 text-white-400 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h5 className="mt-2 mb-3 text-xl font-semibold">
          {title}
        </h5>

        <p className="text-gray-400 text-sm mb-5">
          {description}
        </p>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
}

export default ProjetCard;