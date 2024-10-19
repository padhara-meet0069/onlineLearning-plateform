
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.', instructor: 'John Doe', difficulty: 'Beginner' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.', instructor: 'Jane Smith', difficulty: 'Advanced' },
  { id: 3, title: 'UI/UX Design Basics', description: 'Understand design principles.', instructor: 'Alice Johnson', difficulty: 'Beginner' },
  { id: 4, title: 'Python for Data Science', description: 'Python for data analysis.', instructor: 'Bob Brown', difficulty: 'Intermediate' },
  { id: 5, title: 'Machine Learning A-Z', description: 'Learn ML algorithms.', instructor: 'Carol White', difficulty: 'Advanced' },
  { id: 6, title: 'Node.js & Express', description: 'Build RESTful APIs.', instructor: 'Eve Davis', difficulty: 'Intermediate' },
  { id: 7, title: 'CSS Flexbox & Grid', description: 'Master CSS layouts.', instructor: 'Charlie Green', difficulty: 'Beginner' },
  { id: 8, title: 'Digital Marketing Essentials', description: 'Fundamentals of marketing.', instructor: 'David Black', difficulty: 'Beginner' },
  { id: 9, title: 'DevOps Fundamentals', description: 'Learn DevOps practices.', instructor: 'Grace Hill', difficulty: 'Intermediate' },
  { id: 10, title: 'Cloud Computing with AWS', description: 'AWS cloud services overview.', instructor: 'Heidi Turner', difficulty: 'Advanced' },
];

function CourseDetailPage() {
  const { courseId } = useParams();

 
  const course = courses.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <div className="container mx-auto p-4">Course not found!</div>;
  }

  const handleEnroll = () => {
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

  
    const alreadyEnrolled = enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id);

    if (alreadyEnrolled) {
      toast.info('You are already enrolled in this course!');
      return;
    }

   
    const courseWithProgress = { ...course, progress: 30 };
    localStorage.setItem('enrolledCourses', JSON.stringify([...enrolledCourses, courseWithProgress]));
    toast.success('Enrolled successfully!');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{course.title}</h1>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            <p className="text-lg font-semibold">Instructor:</p>
            <p className="text-gray-700">{course.instructor}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg font-semibold">Difficulty:</p>
            <p className="text-gray-700">{course.difficulty}</p>
          </div>
        </div>
        <Link to="/dashboard"
          onClick={handleEnroll} 
          className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition duration-300"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default CourseDetailPage;
