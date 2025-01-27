import React from "react";

const Blog = () => {
  const posts = [
    {
      imgSrc: "https://images.pexels.com/photos/6944684/pexels-photo-6944684.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "11",
      month: "MAR",
      title: "Cleaning",
      subTitle: "Issue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      personImg: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      position: "CEO",
    },
    {
      imgSrc: "https://images.pexels.com/photos/6943947/pexels-photo-6943947.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "10",
      month: "FEB",
      title: "Renovation",
      subTitle: "Update",
      description: "Curabitur pretium tincidunt lacus, magna bibendum arcu vel.",
      personImg: "https://randomuser.me/api/portraits/men/20.jpg",
      name: "Jane Smith",
      position: "Manager",
    },
    {
      imgSrc: "https://images.pexels.com/photos/6943958/pexels-photo-6943958.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "5",
      month: "JAN",
      title: "Repairs",
      subTitle: "Problem",
      description: "Donec a ante ac ligula venenatis viverra at vitae lectus.",
      personImg: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Alice Johnson",
      position: "Coordinator",
    },
  ];

  return (
    <div id="blog" className="py-10 px-6 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
    
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-blue-600 mb-2">WHY CHOOSE US</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">RECENT NEWS</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our team works tirelessly to provide the best services in cleaning, renovation, and repairs, always striving to deliver exceptional results.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          
            <div className="relative w-full h-60">
              <img src={post.imgSrc} alt="Blog" className="w-full h-full object-cover" />
              <div className="absolute top-0 right-0 bg-blue-400 bg-opacity-60 text-white px-3 py-1 text-sm">
                {post.date} <br />
                {post.month}
              </div>
            </div>

            <div className="px-6 py-4 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <h2 className="text-lg font-medium text-gray-600">{post.subTitle}</h2>
              <p className="text-gray-500 mt-2">{post.description}</p>
            </div>

           
            <div className="flex items-center justify-start p-4 border-t">
              <img
                src={post.personImg}
                alt="Person"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="text-gray-800 font-semibold">{post.name}</p>
                <p className="text-gray-500 text-sm">{post.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
