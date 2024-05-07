// src/components/Sidebar.js
import PropTypes from "prop-types";

const Sidebar = ({
  filters,
  selectedFilters,
  onFilterChange,
  onResetFilters,
}) => {
  const handleFilterChange = (filterKey, e) => {
    const value = e.target.value;
    onFilterChange(filterKey, value);
  };

  const handleResetFilters = () => {
    onResetFilters();
  };

  // Define options for the "Beginning Semester" filter
  const beginningSemesterOptions = [
    { value: "", label: "--- Beginning Semester ---" },
    { value: "ALL QUARTERS", label: "ALL QUARTERS" },
    { value: "ALL TRIMESTERS", label: "ALL TRIMESTERS" },
    { value: "ANY TIME", label: "ANY TIME" },
    { value: "AUTUMN", label: "AUTUMN" },
    { value: "AUTUMN QUARTER", label: "AUTUMN QUARTER" },
    { value: "AUTUMN TRIMESTER", label: "AUTUMN TRIMESTER" },
    { value: "JANUARY", label: "JANUARY" },
    { value: "N/A", label: "N/A" },
    { value: "OTHER", label: "OTHER" },
    { value: "SPRING", label: "SPRING" },
    { value: "SPRING QUARTER", label: "SPRING QUARTER" },
    { value: "SPRING TRIMESTER", label: "SPRING TRIMESTER" },
    { value: "SUMMER", label: "SUMMER" },
    { value: "SUMMER QUARTER", label: "SUMMER QUARTER" },
    { value: "WINTER", label: "WINTER" },
    { value: "WINTER QUARTER", label: "WINTER QUARTER" },
    { value: "WINTER TRIMESTER", label: "WINTER TRIMESTER" },
  ];

  return (
    <div className="bg-gray-200 p-4 absolute top-20 left-20">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">University Name</label>
        <input
          type="text"
          className="block w-full border rounded p-1"
          value={selectedFilters.universityName}
          onChange={(e) => handleFilterChange("universityName", e)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Course Name</label>
        <input
          type="text"
          className="block w-full border rounded p-1"
          value={selectedFilters.courseName}
          onChange={(e) => handleFilterChange("courseName", e)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Germany Ranking</label>
        <input
          type="number"
          className="block w-full border rounded p-1"
          value={selectedFilters.germanyRanking}
          onChange={(e) => handleFilterChange("germanyRanking", e)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Course Type</label>
        <select
          className="block w-full border rounded p-1"
          value={selectedFilters.courseType}
          onChange={(e) => handleFilterChange("courseType", e)}
        >
          <option value="">Select Course Type</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Postgraduate">Postgraduate</option>
          <option value="PhD">PhD</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Teaching Language</label>
        <select
          className="block w-full border rounded p-1"
          value={selectedFilters.teachingLanguage}
          onChange={(e) => handleFilterChange("teachingLanguage", e)}
        >
          <option value="">Select Teaching Language</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Beginning Semester</label>
        <select
          className="block w-full border rounded p-1"
          value={selectedFilters.beginningSemester}
          onChange={(e) => handleFilterChange("beginningSemester", e)}
          multiple // Allow multiple selection
        >
          {beginningSemesterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Duration (Semesters)</label>
        <input
          type="number"
          className="block w-full border rounded p-1"
          value={selectedFilters.duration}
          onChange={(e) => handleFilterChange("duration", e)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Tuition Fee</label>
        <input
          type="text"
          className="block w-full border rounded p-1"
          value={selectedFilters.tuitionFee}
          onChange={(e) => handleFilterChange("tuitionFee", e)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleResetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
Sidebar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  selectedFilters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};
