
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CatalogPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  

  const courses = [
    { 
      id: 1, 
      title: 'React for Beginners', 
      category: 'Web Development', 
      difficulty: 'Beginner',
      description: 'Learn the fundamentals of React, a popular JavaScript library for building user interfaces. This course covers components, props, state management, and how to create interactive web applications.' 
    },
    { 
      id: 2, 
      title: 'Advanced JavaScript', 
      category: 'Programming', 
      difficulty: 'Advanced',
      description: 'Dive deep into advanced JavaScript concepts such as closures, promises, async/await, and the prototype chain. This course is designed for developers looking to enhance their JavaScript skills.' 
    },
    { 
      id: 3, 
      title: 'UI/UX Design Basics', 
      category: 'Design', 
      difficulty: 'Beginner',
      description: 'Explore the essentials of UI/UX design, including design principles, user research, and prototyping. Learn how to create user-friendly interfaces that enhance user experience.Explore the essentials of UI/UX design,' 
    },
    { 
      id: 4, 
      title: 'Python for Data Science', 
      category: 'Data Science', 
      difficulty: 'Intermediate',
      description: 'This course introduces Python programming tailored for data analysis and visualization. Learn about libraries like Pandas, NumPy, and Matplotlib to manipulate and visualize data effectively.' 
    },
    { 
      id: 5, 
      title: 'Machine Learning A-Z', 
      category: 'AI/ML', 
      difficulty: 'Advanced',
      description: 'Master machine learning algorithms and concepts from scratch. This comprehensive course covers supervised and unsupervised learning, neural networks, and practical implementation using Python.' 
    },
    { 
      id: 6, 
      title: 'Node.js & Express', 
      category: 'Backend Development', 
      difficulty: 'Intermediate',
      description: 'Learn how to build scalable web applications using Node.js and Express. This course covers RESTful API development, middleware, and database integration with MongoDB.' 
    },
    { 
      id: 7, 
      title: 'CSS Flexbox & Grid', 
      category: 'Web Development', 
      difficulty: 'Beginner',
      description: 'Understand the power of CSS Flexbox and Grid layouts to create responsive web designs. This course provides hands-on projects to solidify your CSS layout skills.' 
    },
    { 
      id: 8, 
      title: 'Digital Marketing Essentials', 
      category: 'Marketing', 
      difficulty: 'Beginner',
      description: 'Get started with digital marketing strategies and techniques. Learn about SEO, content marketing, social media, and analytics to effectively promote your brand online.' 
    },
    { 
      id: 9, 
      title: 'DevOps Fundamentals', 
      category: 'DevOps', 
      difficulty: 'Intermediate',
      description: 'Explore the principles of DevOps, including continuous integration and delivery. This course covers tools and practices that help streamline software development and deployment.' 
    },
    { 
      id: 10, 
      title: 'Cloud Computing with AWS', 
      category: 'Cloud Computing', 
      difficulty: 'Advanced',
      description: 'Learn the fundamentals of cloud computing and how to leverage Amazon Web Services (AWS) for scalable applications. Understand services like EC2, S3, and RDS through hands-on labs.' 
    },
  ];

  const filteredCourses = courses
    .filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'All' || course.category === filter)
    );

  return (
    <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Course Catalog</h1>
    <div className="flex justify-between mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="p-3 me-5 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
        className="p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Programming">Programming</option>
        <option value="Design">Design</option>
        <option value="Data Science">Data Science</option>
        <option value="AI/ML">AI/ML</option>
        <option value="Backend Development">Backend Development</option>
        <option value="Marketing">Marketing</option>
        <option value="DevOps">DevOps</option>
        <option value="Cloud Computing">Cloud Computing</option>
      </select>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.map(course => (
        <div key={course.id} className="p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
          <p className="text-gray-600">Category: <span className="font-medium">{course.category}</span></p>
          <p className="text-gray-600">Difficulty: <span className="font-medium">{course.difficulty}</span></p>
          <p className="text-gray-500 mt-2">{course.description}</p>
          <Link to={`/course/${course.id}`} className="text-white mt-4 block text-center bg-red-900 hover:bg-red-800 transition duration-200 p-2 rounded-md shadow">View Details</Link>
        </div>
      ))}
    </div>
  </div>
  );
}

export default CatalogPage;
