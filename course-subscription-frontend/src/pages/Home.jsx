import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then((res) => setCourses(res.data));
  }, []);

  return (
    <div
      className="min-h-screen px-8 py-10
                 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100"
    >
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Available Courses 📚
        </h2>
        <p className="text-gray-600 mt-2">
          Choose a course and start learning today
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-3xl shadow-lg p-6
                       hover:shadow-2xl hover:-translate-y-1
                       transition-all duration-300 flex flex-col"
          >
            {/* Course Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 flex-grow">
              {course.description}
            </p>

            {/* Price Badge */}
            <div className="mt-4">
              {course.price === 0 ? (
                <span className="inline-block px-4 py-1 text-sm font-semibold
                                 rounded-full bg-green-100 text-green-700">
                  Free
                </span>
              ) : (
                <span className="inline-block px-4 py-1 text-sm font-semibold
                                 rounded-full bg-purple-100 text-purple-700">
                  ₹{course.price}
                </span>
              )}
            </div>

            {/* Action */}
            <Link
              to={`/course/${course._id}`}
              className="mt-6 inline-block text-center
                         py-3 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                         hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
                         transition-all duration-300"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
