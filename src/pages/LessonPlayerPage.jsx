
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function LessonPlayerPage() {
  const { courseId } = useParams();

  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      videoUrl: 'https://youtu.be/SqcY0GlETPk?si=AYGbFwtM6HyVV8N8',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      videoUrl: 'https://youtu.be/ks4MFTHLfyg?si=mOJlJa3KBeMNc8YO',
    },
    {
      id: 3,
      title: 'UI/UX Design Basics',
      videoUrl: 'https://youtu.be/wELfwQmtnvo?si=WHcIvxzzTNb66i_B',
    },
    {
      id: 4,
      title: 'Python for Data Science',
      videoUrl: 'https://youtu.be/mkv5mxYu0Wk?si=qYNIhgbeilNl1hS3',
    },
    {
      id: 5,
      title: 'Machine Learning A-Z',
      videoUrl: 'https://youtu.be/UcIx4ZoeChY?si=_C4CcmxWvyz4NdLa',
    },
    {
      id: 6,
      title: 'Node.js & Express',
      videoUrl: 'https://youtu.be/N2-FyBBxOZA?si=bu2vzBB_zADo0Aul',
    },
    {
      id: 7,
      title: 'CSS Flexbox & Grid',
      videoUrl: 'https://youtu.be/DXxt4oIAI4Y?si=WNeb2chLzXC97nr3',
    },
    {
      id: 8,
      title: 'Digital Marketing Essentials',
      videoUrl: 'https://youtu.be/RNh8VHc8qkk?si=wPUB-xqYVNBQwFxN',
    },
    {
      id: 9,
      title: 'DevOps Fundamentals',
      videoUrl: 'https://youtu.be/h7LDnVsNRVI?si=9G9UqbpWETMXnLXI',
    },
    {
      id: 10,
      title: 'Cloud Computing with AWS',
      videoUrl: 'https://youtu.be/BSGcQi2WNPg?si=fWEjk0t3xFkqLDW7',
    },
  ];


  const videoUrl = courses.find(course => course.id === parseInt(courseId))?.videoUrl || '';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Course Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {courses.map(course => (
          <div key={course.id} className="p-4 border rounded shadow bg-white">
            <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
            <Link to={`/course/${course.id}/lesson`} className="text-white bg-red-800 mt-3  p-2 rounded  text-center mt-2">
              Play Video
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Currently Playing:</h2>
      <div className="video-player bg-gray-200 p-4 rounded shadow-lg">
        {videoUrl ? (
          <ReactPlayer 
            url={videoUrl} 
            controls 
            width="100%" 
            height="400px" 
          />
        ) : (
          <p className="text-red-500">Video not available for this course.</p>
        )}
      </div>
    </div>
  );
}

export default LessonPlayerPage;
