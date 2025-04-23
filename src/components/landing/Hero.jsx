import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modern Logistics <br />
              <span className="text-blue-600">Simplified</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              SwiftPost delivers your packages faster than traditional mail services, with real-time tracking and premium customer service.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Delivery truck" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;