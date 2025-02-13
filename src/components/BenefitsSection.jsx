import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'World-Class Medical Education',
  'Affordable Fee Structure',
  'Global Recognition',
  'Cultural Exposure',
  'Advanced Infrastructure',
  'Clinical Experience'
];

function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Study MBBS Abroad?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;