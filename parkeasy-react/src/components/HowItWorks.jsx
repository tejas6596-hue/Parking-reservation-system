function HowItWorks() {
    const steps = [
      {
        number: "1",
        title: "Search",
        description: "Find nearby parking.",
      },
      {
        number: "2",
        title: "Select",
        description: "Choose your slot.",
      },
      {
        number: "3",
        title: "Pay",
        description: "Confirm booking.",
      },
      {
        number: "4",
        title: "Park",
        description: "Enjoy hassle-free parking.",
      },
    ];
  
    return (
      <section className="py-24">
        <div className="container mx-auto px-8">
  
          <h2 className="text-5xl font-bold text-center mb-20">
            How It Works
          </h2>
  
          <div className="grid md:grid-cols-4 gap-8 text-center">
  
            {steps.map((step) => (
              <div key={step.number}>
  
                <div className="w-20 h-20 mx-auto bg-cyan-500 rounded-full flex items-center justify-center text-3xl font-bold">
                  {step.number}
                </div>
  
                <h3 className="mt-6 text-xl font-bold">
                  {step.title}
                </h3>
  
                <p className="text-gray-400 mt-2">
                  {step.description}
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default HowItWorks;