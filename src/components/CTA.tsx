
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
              id="JotFormIFrame-251076529160152"
              title="MedElevate Contact Form"
              onLoad="window.parent.scrollTo(0,0)"
              allowTransparency="true"
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/251076529160152"
              frameBorder="0"
              style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
              scrolling="no"
            >
            </iframe>
          </div>
        </div>
      </div>
      <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
      <script dangerouslySetInnerHTML={{ 
        __html: `window.jotformEmbedHandler("iframe[id='JotFormIFrame-251076529160152']", "https://form.jotform.com/")` 
      }} />
    </div>
  );
};

export default CTA;
