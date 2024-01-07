import { useState } from "react";
import BookCard from "./BookCard";
import SelectField from "@/components/forms/SelectField";
import toast from "react-hot-toast";
import BookCardSkeleton from "./skeleton/BookCardSkeleton";
import BookCardError from "./error/BookCardError";
import cn from "@/utils/UtilsKit";

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
const bookCategoryOptions = [
  {
    label: "Non-Fiction",
    value: "Non-Fiction",
  },
  {
    label: "Romance",
    value: "Romance",
  },
  {
    label: "Business",
    value: "Business",
  },
  {
    label: "Fiction",
    value: "Fiction",
  },
  {
    label: "Thriller",
    value: "Thriller",
  },
  {
    label: "Science Fiction",
    value: "Science Fiction",
  },
  {
    label: "Thriller",
    value: "Thriller",
  },
  {
    label: "Adventure",
    value: "Adventure",
  },
  {
    label: "Philosophy",
    value: "Philosophy",
  },
  {
    label: "Fantasy",
    value: "Fantasy",
  },
  {
    label: "Mystery",
    value: "Mystery",
  },
  {
    label: "Music",
    value: "Music",
  },
  {
    label: "Art",
    value: "Art",
  },
  {
    label: "Nature",
    value: "Nature",
  },
  {
    label: "Inspirational",
    value: "Inspirational",
  },
  {
    label: "History",
    value: "History",
  },
];

export default function FilterPanel({
  data,
  isFilterActive,
  setIsFilterActive,
  isError,
  isLoading,
}) {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedSortOption, setSelectedSortOption] =
    useState("publicationDate");
  const [selectedGenderOption, setSelectedGenderOption] = useState("MALE");
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(
    bookCategoryOptions[0]
  );
  if (isLoading) return <BookCardSkeleton />;
  if (isError) return <BookCardError />;

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
  const handleCategorySelect = (selectedOption) => {
    setSelectedCategoryOption(selectedOption);
    setIsFilterActive(true);

    const filteredByCategory = [...data].filter(
      (item) => item.bookCategory === selectedOption
    );

    setFilteredData(filteredByCategory);
    let responseTxt = "";
    if (selectedOption === "Non-Fiction") {
      responseTxt = "Showing books of category Non-Fiction ";
    } else if (selectedOption === "Romance") {
      responseTxt = "Showing books of category Romance";
    } else if (selectedOption === "Business") {
      responseTxt = "Showing books of category Business";
    } else if (selectedOption === "Fiction") {
      responseTxt = "Showing books of category Fiction";
    } else if (selectedOption === "Science Fiction") {
      responseTxt = "Showing books of category Science Fiction";
    } else if (selectedOption === "Thriller") {
      responseTxt = "Showing books of category Thriller";
    } else if (selectedOption === "Adventure") {
      responseTxt = "Showing books of category Adventure";
    } else if (selectedOption === "Philosophy") {
      responseTxt = "Showing books of category Philosophy";
    } else if (selectedOption === "Fantasy") {
      responseTxt = "Showing books of category Fantasy";
    } else if (selectedOption === "Mystery") {
      responseTxt = "Showing books of category Mystery";
    } else if (selectedOption === "Music") {
      responseTxt = "Showing books of category Music";
    } else if (selectedOption === "Art") {
      responseTxt = "Showing books of category Art";
    } else if (selectedOption === "Nature") {
      responseTxt = "Showing books of category Nature";
    } else if (selectedOption === "Inspirational") {
      responseTxt = "Showing books of category Inspirational";
    } else if (selectedOption === "History") {
      responseTxt = "Showing books of category History";
    } else {
      responseTxt = "";
    }
    toast.success(responseTxt);
  };

  return (
    <div className="space-y-6">
      <div className={cn(isFilterActive === true ? "space-y-6" : "")}>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <div className="w-full md:w-1/3">
            <SelectField
              label="Publication Date"
              name="publication_date"
              id="publication_date"
              onChange={(e) => handleSortSelect(e.value)}
              options={sortOptions}
              defaultValue={selectedSortOption}
            />
          </div>
          <div className="w-full md:w-1/3">
            <SelectField
              label="Author Gender"
              name="author_gender"
              id="author_gender"
              onChange={(e) => handleGenderSelect(e.value)}
              options={genderOptions}
              defaultValue={selectedGenderOption}
            />
          </div>
          <div className="w-full md:w-1/3">
            <SelectField
              label="Book Category"
              name="book_category"
              id="book_category"
              onChange={(e) => handleCategorySelect(e.value)}
              options={bookCategoryOptions}
              defaultValue={selectedCategoryOption}
            />
          </div>
        </div>
        {isFilterActive === true ? (
          <div className="justify-between flex">
            <p className="font-medium text-blue-950">
              Showing{" "}
              <span className="font-semibold text-blue-700">
                {filteredData?.length}
              </span>{" "}
              {filteredData?.length > 1 ? "results" : "result"}
            </p>
            <button
              className="underline text-base font-semibold text-red-500 cursor-pointer"
              onClick={() => {
                setFilteredData(null);
                setIsFilterActive(false);
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : null}
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
