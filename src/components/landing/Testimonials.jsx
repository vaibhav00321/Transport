const testimonials = [
    {
      quote: "SwiftPost cut our delivery times in half and saved us thousands in shipping costs. Their tracking system is fantastic.",
      author: "Sarah Johnson",
      role: "E-commerce Store Owner",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "As a small business, reliable shipping is crucial. SwiftPost has been a game-changer for our operations.",
      author: "Michael Chen",
      role: "Founder, Handmade Goods",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The customer service is outstanding. They actually care about solving problems, not just processing shipments.",
      author: "Emily Rodriguez",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;