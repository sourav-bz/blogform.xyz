import { allBlogs } from "contentlayer/generated";

export default function Blogs() {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">BLOGS</h2>

      <div className="space-y-6">
        {allBlogs.map((article, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow p-6 flex items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {article.description}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {article.author}
                </span>
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  {article.date}
                </span>
              </div>
            </div>
            <div className="w-32 h-24 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
