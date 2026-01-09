import { useEffect, useState } from "react";
import api from "../api/axios";

function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/my-courses").then((res) => setCourses(res.data));
  }, []);

  return (
    <div
      className="min-h-screen px-8 py-10
                 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100"
    >
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          My Courses 🎓
        </h2>
        <p className="text-gray-600 mt-2">
          All the courses you are currently enrolled in
        </p>
      </div>

      {/* Empty State */}
      {courses.length === 0 && (
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-md p-10 text-center">
          <p className="text-lg text-gray-600">
            You haven’t subscribed to any courses yet.
          </p>
        </div>
      )}

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-3xl shadow-lg p-6
                       hover:shadow-2xl hover:-translate-y-1
                       transition-all duration-300 flex flex-col"
          >
            {/* Course Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.courseId.title}
            </h3>

            {/* Price Paid */}
            <div className="mt-auto">
              <span
                className={`inline-block px-4 py-1 text-sm font-semibold rounded-full
                  ${
                    item.pricePaid === 0
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
              >
                {item.pricePaid === 0
                  ? "Free Course"
                  : `Price Paid: ₹${item.pricePaid}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
