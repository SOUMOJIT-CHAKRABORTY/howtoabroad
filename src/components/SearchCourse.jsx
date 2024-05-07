// src/components/SearchCourse.js
import { useState } from "react";
import Sidebar from "./Sidebar";

const SearchCourse = () => {
  const initialFilters = {
    universityName: "",
    courseName: "",
    germanyRanking: "",
    courseType: "",
    teachingLanguage: "",
    beginningSemester: "",
    duration: "",
    tuitionFee: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));
    // Apply filter logic here to fetch updated course listings based on selected filters
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    // Apply filter reset logic here (e.g., fetch all course listings without filters)
  };

  // Dummy course data (replace with actual course data)
  const dummyCourses = [
    {
      universityName: "Johannes Gutenberg University of Mainz",
      courseName: "Young Professional Master of Business Administration",
      germanyRanking: 19,
      courseType: "Masters",
      teachingLanguage: "English",
      beginningSemester: "Summer",
      duration: "4 Semesters",
      tuitionFee: "None",
    },
    {
      universityName: "Heinrich Heine University Dusseldorf",
      courseName: "Yiddish Culture, Language and Literature",
      germanyRanking: 33,
      courseType: "Bachelor",
      teachingLanguage: "English, German, Yiddish",
      beginningSemester: "Winter",
      duration: "6 Semesters",
      tuitionFee: "NA",
    },
    {
      universityName: "Bielefeld University",
      courseName: "World Studies: Orders, Politics, Cultures",
      germanyRanking: 39,
      courseType: "Masters",
      teachingLanguage: "English",
      beginningSemester: "Winter",
      duration: "4 Semesters",
      tuitionFee: "NA",
    },
    {
      universityName: "Technical University of Munich",
      courseName: "Computer Science",
      germanyRanking: 50,
      courseType: "Bachelor",
      teachingLanguage: "English, German",
      beginningSemester: "Summer",
      duration: "6 Semesters",
      tuitionFee: "None",
    },
    {
      universityName: "Ludwig Maximilian University of Munich",
      courseName: "Data Science and Artificial Intelligence",
      germanyRanking: 42,
      courseType: "Masters",
      teachingLanguage: "English",
      beginningSemester: "Winter",
      duration: "4 Semesters",
      tuitionFee: "None",
    },
    {
      universityName: "Harvard University",
      courseName: "Computer Science",
      germanyRanking: null,
      courseType: "Bachelor",
      teachingLanguage: "English",
      beginningSemester: "Fall",
      duration: "8 Semesters",
      tuitionFee: "High",
    },
    {
      universityName: "Stanford University",
      courseName: "Electrical Engineering",
      germanyRanking: null,
      courseType: "Masters",
      teachingLanguage: "English",
      beginningSemester: "Autumn",
      duration: "6 Semesters",
      tuitionFee: "High",
    },
    {
      universityName: "Massachusetts Institute of Technology (MIT)",
      courseName: "Biomedical Engineering",
      germanyRanking: null,
      courseType: "PhD",
      teachingLanguage: "English",
      beginningSemester: "Spring",
      duration: "8 Semesters",
      tuitionFee: "High",
    },
    {
      universityName: "University of Oxford",
      courseName: "Philosophy",
      germanyRanking: null,
      courseType: "Masters",
      teachingLanguage: "English",
      beginningSemester: "Autumn",
      duration: "3 Semesters",
      tuitionFee: "Medium",
    },
    {
      universityName: "University of Cambridge",
      courseName: "History",
      germanyRanking: null,
      courseType: "Bachelor",
      teachingLanguage: "English",
      beginningSemester: "Winter",
      duration: "6 Semesters",
      tuitionFee: "Medium",
    },
    {
      universityName: "Imperial College London",
      courseName: "Chemical Engineering",
      germanyRanking: null,
      courseType: "Masters",
      teachingLanguage: "English",
      beginningSemester: "Spring",
      duration: "4 Semesters",
      tuitionFee: "High",
    },
  ];

  // Filtered courses based on selected filters
  const filteredCourses = dummyCourses.filter((course) => {
    // Implement your filter logic based on selected filters
    // For example, filter by universityName, courseType, etc.
    return (
      course.universityName
        .toLowerCase()
        .includes(filters.universityName.toLowerCase()) &&
      course.courseType
        .toLowerCase()
        .includes(filters.courseType.toLowerCase()) &&
      // Add more filter conditions based on other filters
      true // Placeholder condition to show all courses initially
    );
  });

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex justify-between items-center mb-6">
        {/* Sidebar with filters */}
        <div className="w-1/4">
          <Sidebar
            selectedFilters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
        </div>
        {/* Main content (course listings) */}
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-4">Search Courses</h1>
          {/* Display course listings based on selected filters */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6">
              {filteredCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    {course.courseName}
                  </h2>
                  <p className="text-gray-600 mb-2">{course.universityName}</p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Germany Ranking:</span>{" "}
                    {course.germanyRanking}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Course Type:</span>{" "}
                    {course.courseType}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Teaching Language:</span>{" "}
                    {course.teachingLanguage}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Beginning Semester:</span>{" "}
                    {course.beginningSemester}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Duration:</span>{" "}
                    {course.duration}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Tuition Fee:</span>{" "}
                    {course.tuitionFee}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No courses found matching the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
