
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const featuredCourses = [
    { 
      id: 1, 
      title: 'React for Beginners', 
      category: 'Web Development', 
      difficulty: 'Beginner', 
      image: 'https://www.logicraysacademy.com/blog/wp-content/uploads/2023/03/RPFI-1.jpg'
    },
    { 
      id: 2, 
      title: 'Advanced JavaScript', 
      category: 'Programming', 
      difficulty: 'Advanced', 
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*PQ2O_-QPWPELuYctLu0o0Q.jpeg' 
    },
    { 
      id: 3, 
      title: 'UI/UX Design Basics', 
      category: 'Design', 
      difficulty: 'Beginner', 
      image: 'https://cdn.prod.website-files.com/5f6bd5d85587b65348960e08/617c6c623892fa102aba85ea_UI%201.png' 
    },
    { 
      id: 4, 
      title: 'Python for Data Science', 
      category: 'Data Science', 
      difficulty: 'Intermediate', 
      image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg' 
    },
    { 
      id: 5, 
      title: 'Machine Learning A-Z', 
      category: 'AI/ML', 
      difficulty: 'Advanced', 
      image: 'https://img-c.udemycdn.com/course/480x270/1219332_bdd7.jpg' 
    },
    { 
      id: 6, 
      title: 'Node.js & Express', 
      category: 'Backend Development', 
      difficulty: 'Intermediate', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNbBIKeLDnkj0yeV1gmvb8nydjb6OumWeOA&s' 
    },
    { 
      id: 7, 
      title: 'CSS Flexbox & Grid', 
      category: 'Web Development', 
      difficulty: 'Beginner', 
      image: 'https://f36.contentful.com/docs-images/grid_vs_flexbox.png' 
    },
    { 
      id: 8, 
      title: 'Digital Marketing Essentials', 
      category: 'Marketing', 
      difficulty: 'Beginner', 
      image: 'https://media.licdn.com/dms/image/D5612AQEGi6lhmUDKNQ/article-cover_image-shrink_720_1280/0/1713018098797?e=2147483647&v=beta&t=shmVMbbgIWZ9TWoOFcr0cNNjgqqBAKKKQPrL5Hx9zc8' 
    },
    { 
      id: 9, 
      title: 'DevOps Fundamentals', 
      category: 'DevOps', 
      difficulty: 'Intermediate', 
      image: 'https://i.ytimg.com/vi/bH42wDyHRzk/maxresdefault.jpg' 
    },
    { 
      id: 10, 
      title: 'Cloud Computing with AWS', 
      category: 'Cloud Computing', 
      difficulty: 'Advanced', 
      image: 'https://www.cromacampus.com/public/uploads/Blog/2024/02/week_1/Know-all-About-Amazon-Web-Services-in-Cloud-Computing.jpg' 
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCourses.map(course => (
          <div
            key={course.id}
            className="p-6 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
        
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">Category: <span className="font-medium">{course.category}</span></p>
            <p className="text-gray-600">Difficulty: <span className="font-medium">{course.difficulty}</span></p>
            <Link to={`/course/${course.id}`} className="text-blue-500    mt-4 inline-block bg-red-900 text-white p-2 rounded  hover:bg-red-800 transition duration-300">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
