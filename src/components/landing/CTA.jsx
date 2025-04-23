import Button from '../common/Button';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Shipping?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that trust SwiftPost for their shipping needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started for Free
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-blue-700"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;