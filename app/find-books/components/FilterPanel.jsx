import { useState } from "react";
import BookCard from "./BookCard";
import SelectField from "@/components/forms/SelectField";
import toast from "react-hot-toast";

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
const genderOptions = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
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
  const [selectedGenderOption, setSelectedGenderOption] = useState("MALE");

  const handleSortSelect = (selectedOption) => {
    setSelectedSortOption(selectedOption);
    setIsFilterActive(true);

    const sortedByYear = [...data].sort((a, b) => {
      const valueA = new Date(a[selectedOption]);
      const valueB = new Date(b[selectedOption]);
      return valueA - valueB;
    });
    setFilteredData(sortedByYear);
    let responseTxt = "";
    if (selectedOption === "publicationDate") {
      responseTxt = "Results are sorted by publication date";
    } else {
      responseTxt = "Results are sorted by author birth year";
    }
    toast.success(responseTxt);
  };
  const handleGenderSelect = (selectedOption) => {
    setSelectedGenderOption(selectedOption);
    setIsFilterActive(true);

    const filteredByGender = [...data].filter(
      (item) => item.authorGender === selectedOption
    );

    setFilteredData(filteredByGender);
    let responseTxt = "";
    if (selectedOption === "Male") {
      responseTxt = "Showing books of male authors";
    } else {
      responseTxt = "Showing books of female authors";
    }
    toast.success(responseTxt);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 w-full">
        <div className="w-1/3">
          <SelectField
            label="Publication Date"
            name="publication_date"
            id="publication_date"
            onChange={(e) => handleSortSelect(e.value)}
            options={sortOptions}
          />
        </div>
        <div className="w-1/3">
          <SelectField
            label="Author Gender"
            name="author_gender"
            id="author_gender"
            onChange={(e) => handleGenderSelect(e.value)}
            options={genderOptions}
          />
        </div>
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
