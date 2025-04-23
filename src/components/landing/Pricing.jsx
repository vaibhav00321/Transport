import Button from '../common/Button';

const plans = [
  {
    name: "Basic",
    price: "$4.99",
    description: "Perfect for occasional senders",
    features: [
      "Up to 5 lbs",
      "3-5 business days",
      "Tracking included",
      "Email notifications"
    ],
    featured: false
  },
  {
    name: "Standard",
    price: "$9.99",
    description: "Great for regular shipments",
    features: [
      "Up to 20 lbs",
      "2-3 business days",
      "Priority support",
      "All Basic features"
    ],
    featured: true
  },
  {
    name: "Premium",
    price: "$19.99",
    description: "For time-sensitive deliveries",
    features: [
      "Up to 50 lbs",
      "Next business day",
      "Dedicated account manager",
      "All Standard features"
    ],
    featured: false
  }
];

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Choose the plan that works best for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-sm border ${plan.featured ? 'border-blue-500 transform md:-translate-y-4' : 'border-gray-200'}`}
            >
              {plan.featured && (
                <div className="bg-blue-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.featured ? "primary" : "outline"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;