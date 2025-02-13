const steps = [
  'Complete Higher Secondary with PCB',
  'Clear NEET Examination',
  'Submit Required Documents',
  'University Selection',
  'Visa Processing',
  'Pre-Departure Briefing'
];

function AdmissionProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Admission Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionProcessSection;