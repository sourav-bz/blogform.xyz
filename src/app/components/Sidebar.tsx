import Navigation from "./navigation";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-6 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold dark:text-white">Sourav</h1>
        {/* <ThemeToggle /> */}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
        Insightful Articles & Endless Inspiration.
      </p>

      <Navigation />
    </div>
  );
}
