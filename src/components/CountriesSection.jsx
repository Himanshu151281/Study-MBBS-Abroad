const countries = [
  {
    name: 'Russia',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800',
    fee: '$4,000 - $8,000/year'
  },
  {
    name: 'Uzbekistan',
    image: 'https://images.unsplash.com/photo-1528644495100-e7f1cd363796?auto=format&fit=crop&w=800',
    fee: '$5,000 - $7,000/year'
  },
  {
    name: 'Kazakhstan',
    image: 'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=800',
    fee: '$4,500 - $8,500/year'
  },
  {
    name: 'Philippines',
    image: 'https://images.unsplash.com/photo-1518439179742-2bfd6565d591?auto=format&fit=crop&w=800',
    fee: '$3,000 - $6,000/year'
  },
  {
    name: 'Georgia',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800',
    fee: '$4,000 - $7,000/year'
  },
  {
    name: 'Kyrgyzstan',
    image: 'https://images.unsplash.com/photo-1569534403760-8c20de4f05e6?auto=format&fit=crop&w=800',
    fee: '$3,500 - $6,500/year'
  },
  {
    name: 'Egypt',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800',
    fee: '$5,000 - $9,000/year'
  }
];

function CountriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Top Countries for MBBS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={country.image} 
                alt={country.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                <p className="text-gray-600">Average Fee: {country.fee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountriesSection;