
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <script src="https://form.jotform.com/static/feedback2.js" type="text/javascript"></script>
            <script type="text/javascript">
              {`var JFL_251076529160152 = new JotformFeedback({
                formId: '251076529160152',
                base: 'https://form.jotform.com/',
                windowTitle: 'MedElevate Contact Form',
                backgroundColor: '#0ca5e9',
                fontColor: '#FFFFFF',
                type: '1',
                height: 700,
                width: 500,
                openOnLoad: false
              });`}
            </script>
            <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
            <script>{`window.jotformEmbedHandler("iframe[id='251076529160152']", "https://form.jotform.com/")`}</script>
            <a 
              className="lightbox-251076529160152 bg-[#0ca5e9] text-white px-8 py-6 rounded-md hover:bg-[#0ca5e9]/90 text-lg font-medium cursor-pointer"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
