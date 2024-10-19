
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function DashboardPage() {
  const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

 
  const handleDelete = (courseId) => {
    const updatedCourses = enrolledCourses.filter(course => course.id !== courseId);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
    toast.success('Course successfully deleted!'); 
    window.location.reload();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Courses</h1>
      {enrolledCourses.length === 0 ? (
        <p className="text-center text-gray-600">No enrolled courses. Start learning today!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map(course => (
            <div 
              key={course.id} 
              className="p-6 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700">Instructor: <span className="font-medium">{course.instructor}</span></p>
              
            
              <p className="text-gray-700">
                Progress: <span className="font-medium">{course.progress}%</span>
              </p>

              <div className="flex justify-between mt-4">
                <Link 
                  to={`/course/${course.id}`} 
                  className="text-white bg-red-900 p-2 rounded hover:underline"
                >
                  Resume Course
                </Link>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="text-white bg-red-900 p-2 rounded hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
