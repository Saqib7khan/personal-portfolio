interface ProjectImagePlaceholderProps {
  title: string;
  category: string;
}

const gradients: Record<string, string> = {
  "AI/ML": "from-purple-600 via-blue-600 to-cyan-600",
  "Web": "from-orange-600 via-red-600 to-pink-600",
  "Cloud": "from-green-600 via-teal-600 to-blue-600",
  "Default": "from-gray-700 via-gray-800 to-gray-900",
};

/**
 * ProjectImagePlaceholder Component
 * 
 * Beautiful gradient placeholder for project images.
 * Used as fallback when actual project images are not available.
 * 
 * @component
 */
export function ProjectImagePlaceholder({ title, category }: ProjectImagePlaceholderProps) {
  const gradient = gradients[category] || gradients["Default"];
  
  return (
    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} p-8`}>
      <div className="text-center">
        <div className="mb-4 text-6xl opacity-20">
          {category === "AI/ML" && "🤖"}
          {category === "Web" && "🌐"}
          {category === "Cloud" && "☁️"}
          {!["AI/ML", "Web", "Cloud"].includes(category) && "💼"}
        </div>
        <h3 className="text-2xl font-bold text-white opacity-90">
          {title}
        </h3>
      </div>
    </div>
  );
}
