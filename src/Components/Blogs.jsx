import React from 'react';
import '../style/Blog.css'; // You can style this as needed

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Mysteries of the Universe",
    date: "October 5, 2024",
    description:
      "From the Big Bang to black holes, humanity's quest to understand the universe is an ongoing journey. Dive into the most fascinating theories and discoveries about our cosmos.",
    imageUrl: "https://www.10wallpaper.com/wallpaper/1152x864/1112/galaxy-Explore_the_mysteries_of_the_universe_1152x864.jpg", // Placeholder image URL
  },
  {
    id: 2,
    title: "The Future of Space Travel",
    date: "September 25, 2024",
    description:
      "With advancements in rocket technology and space exploration, missions to Mars, moon bases, and even space tourism are becoming a reality. What does the future hold for humanity in space?",
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.b_uIIK6UXFW9unq2run9awHaEK&pid=Api&P=0&h=220",
  },
  {
    id: 3,
    title: "The Role of AI in Space Exploration",
    date: "August 30, 2024",
    description:
      "AI is revolutionizing space exploration, from autonomous rovers to AI-driven data analysis on distant planets. Learn how artificial intelligence is shaping the next era of cosmic discovery.",
    imageUrl: "http://ai47labs.com/wp-content/uploads/2023/04/AI-in-space.jpg",
  },
  {
    id: 4,
    title: "Colonizing Mars: What It Takes",
    date: "July 15, 2024",
    description:
      "Mars colonization isn't just science fiction anymore. Learn about the challenges, from radiation protection to creating sustainable habitats, and the progress being made toward a human presence on Mars.",
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.hxJl6InwJvlArisT2MNtaAHaDt&pid=Api&P=0&h=220",
  },
  {
    id: 5,
    title: "SpaceX and the New Space Race",
    date: "June 20, 2024",
    description:
      "Private companies like SpaceX are redefining space exploration. Explore how the new space race between private and public enterprises is accelerating innovation and opening space to new possibilities.",
    imageUrl: "https://tse2.mm.bing.net/th?id=OIP.VhnfKKwCoorRJ5A_jG2YeAHaFK&pid=Api&P=0&h=220",
  },
  {
    id: 6,
    title: "The Search for Extraterrestrial Life",
    date: "May 10, 2024",
    description:
      "Are we alone in the universe? From exoplanets to SETI (Search for Extraterrestrial Intelligence), this article delves into ongoing efforts to detect life beyond Earth.",
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.6wn2hI9gVNdxVlsnhoP8-wHaEK&pid=Api&P=0&h=220",
  },
  {
    id: 7,
    title: "The James Webb Space Telescope: A New Window into the Cosmos",
    date: "April 8, 2024",
    description:
      "The James Webb Space Telescope is the most powerful space telescope ever built. Discover how it is helping scientists uncover the mysteries of the early universe and distant galaxies.",
    imageUrl: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/03/artist_s_impression_of_the_james_webb_space_telescope/17429370-1-eng-GB/Artist_s_impression_of_the_James_Webb_Space_Telescope_pillars.jpg",
  },
  {
    id: 8,
    title: "Asteroid Mining: The Next Frontier",
    date: "March 22, 2024",
    description:
      "Asteroids hold vast amounts of resources like precious metals. Learn about the technologies and missions being developed to mine asteroids and how it could impact Earth's economy.",
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.DHs5xKzxmIX4Xmvh2YlcWwHaEK&pid=Api&P=0&h=220",
  },
  {
    id: 9,
    title: "The Voyager Mission: 40 Years of Discovery",
    date: "February 17, 2024",
    description:
      "Voyager 1 and 2 are the farthest human-made objects from Earth. This article celebrates over 40 years of their journey through the solar system and beyond, exploring the data they continue to send back.",
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.5uFho-DZHo72hmp25K04QQHaEK&pid=Api&P=0&h=220",
  },
  {
    id: 10,
    title: "How Space Affects the Human Body",
    date: "January 30, 2024",
    description:
      "Living in space is tough on the human body. From muscle atrophy to bone loss, this article explores the challenges astronauts face and the research being done to mitigate the risks of long-term space travel.",
    imageUrl: "https://tse2.mm.bing.net/th?id=OIP.vXo2nmRYK5ts7rROC2hi-AHaE7&pid=Api&P=0&h=220",
  },
  {
    id: 11,
    title: "Colonizing Mars: What It Takes",
    date: "July 15, 2024",
    description:
      "Mars colonization isn't just science fiction anymore. Learn about the challenges, from radiation protection to creating sustainable habitats, and the progress being made toward a human presence on Mars.",
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.hxJl6InwJvlArisT2MNtaAHaDt&pid=Api&P=0&h=220",
  },
  {
    id: 12,
    title: "Exploring the Mysteries of the Universe",
    date: "October 5, 2024",
    description:
      "From the Big Bang to black holes, humanity's quest to understand the universe is an ongoing journey. Dive into the most fascinating theories and discoveries about our cosmos.",
    imageUrl: "https://www.10wallpaper.com/wallpaper/1152x864/1112/galaxy-Explore_the_mysteries_of_the_universe_1152x864.jpg", // Placeholder image URL
  },
];

export const Blogs = () => {
  return (
    <div className="blog-container">
    <h1 className="text-warning fs-1 fw-bold text-center p-4">Space Exploration Blog</h1>
    <div className="blog-list">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post bg-white">
          <img src={post.imageUrl} alt={post.title} className="blog-image" />
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p><small>{post.date}</small></p>
            <p>{post.description}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Blogs;
