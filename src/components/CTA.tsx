
const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-medelevate-primary to-medelevate-secondary py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our healthcare optimization experts to discover how MedElevate Solutions can help your organization thrive.
          </p>
          <div className="flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSejREFtCzmIHUETTQMY1ll0ieyp977d31NYGyq_hSbjSLCcGg/viewform?embedded=true" 
              width="640" 
              height="824" 
              className="border-0 w-full max-w-2xl bg-white rounded-lg shadow-lg"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
