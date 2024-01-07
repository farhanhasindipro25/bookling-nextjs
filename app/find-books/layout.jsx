import FilterPanel from "./components/FilterPanel";

export default function FindBooksLayout({ children }) {
  return (
    <div className="space-y-6 lg:space-y-10">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        ALL
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          BOOKS
        </span>
      </h2>

      <div className="space-y-4">
        <FilterPanel />
        <>{children}</>
      </div>
    </div>
  );
}
