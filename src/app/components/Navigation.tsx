// components/Navigation.tsx
import {
  allAbouts,
  allPricings,
  allThemes,
  allBlogs,
  allHomes,
} from "contentlayer/generated";
import Link from "next/link";

console.log("allAbouts", allAbouts);
console.log("allPricings", allPricings);
console.log("allThemes", allThemes);
console.log("allBlogs", allBlogs);
console.log("allHomes", allHomes);

const Navigation = () => {
  // Get unique navigation items from nav folder
  const navItems = [
    ...new Set(
      [...allAbouts, ...allPricings, ...allThemes, ...allBlogs]
        .filter((item) => item._raw.sourceFileDir.startsWith("nav/"))
        .map((item) => item.type.toLowerCase())
    ),
  ];

  console.log("navItems", navItems);

  return (
    <nav className="space-y-4">
      {navItems.map((item) => (
        <div
          key={item}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <Link href={`/${item}`} className="uppercase">
            {item}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
