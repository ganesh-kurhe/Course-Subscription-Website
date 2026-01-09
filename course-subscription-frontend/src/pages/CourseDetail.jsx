import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    api.get(`/courses/${id}`).then((res) => setCourse(res.data));
  }, [id]);

  const subscribe = async () => {
    const body =
      course.price === 0
        ? { courseId: id }
        : { courseId: id, promoCode };

    try {
      await api.post("/subscribe", body);
      toast.success("Subscribed successfully 🎉");
    } catch (err) {
      toast.error(err.response?.data?.message || "Subscription failed");
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading course details...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-8 py-12
                 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100
                 flex justify-center"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl
                   shadow-2xl p-10"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed">
          {course.description}
        </p>

        {/* Price Badge */}
        <div className="mt-6">
          {course.price === 0 ? (
            <span className="inline-block px-5 py-2 text-sm font-semibold
                             rounded-full bg-green-100 text-green-700">
              Free Course
            </span>
          ) : (
            <span className="inline-block px-5 py-2 text-sm font-semibold
                             rounded-full bg-purple-100 text-purple-700">
              Price: ₹{course.price}
            </span>
          )}
        </div>

        {/* Promo Code */}
        {course.price > 0 && (
          <input
            className="w-full mt-6 rounded-xl border border-gray-300
                       px-5 py-4 text-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter promo code (BFSALE25)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        )}

        {/* Subscribe Button */}
        <button
          onClick={subscribe}
          className="w-full mt-8 py-4 rounded-xl text-lg font-semibold text-white
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                     hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
                     transition-all duration-300"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default CourseDetail;
