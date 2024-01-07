import { useState } from "react";
import BookCard from "./BookCard";
import SelectField from "@/components/forms/SelectField";

const sortOptions = [
  {
    label: "Sort by Publication Date",
    value: "publicationDate",
  },
  {
    label: "Sort By Author Birthdate",
    value: "authorBirthYear",
  },
];

export default function FilterPanel({
  data,
  isFilterActive,
  setIsFilterActive,
}) {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedSortOption, setSelectedSortOption] =
    useState("publicationDate");

  const handleDateSelect = (selectedOption) => {
    setSelectedSortOption(selectedOption);
    setIsFilterActive(true);

    const sortedByYear = [...data].sort((a, b) => {
      const valueA = new Date(a[selectedOption]);
      const valueB = new Date(b[selectedOption]);
      return valueA - valueB;
    });

    setFilteredData(sortedByYear);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 w-full">
        <div className="w-1/2">
          <SelectField
            label="Publication Date"
            name="publication_date"
            id="publication_date"
            onChange={(e) => handleDateSelect(e.value)}
            options={sortOptions}
          />
        </div>
        <div className="w-1/2"></div>
      </div>
      <div>
        {selectedSortOption === "publicationDate" ? (
          <p>Results Sorted by Publication Date</p>
        ) : (
          <p>Results Sorted by Author Birthdate</p>
        )}
      </div>
      {isFilterActive === true ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredData?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
