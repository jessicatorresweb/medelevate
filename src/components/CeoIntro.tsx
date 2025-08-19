import React from "react";

const CeoIntro = () => {
  return (
    <section className="py-20 bg-medelevate-light" id="ceo">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-shrink-0 w-full md:w-[340px] flex justify-center">
          <img
            src="/lovable-uploads/ed56e0d3-532a-4050-9d01-37e3eb92e27c.png"
            alt="Nyleen Flores, CEO of MedElevate"
            className="rounded-2xl shadow-xl w-64 h-64 object-cover border-4 border-medelevate-primary bg-white"
          />
        </div>
        <div>
          <a 
            href="https://www.namss.org/Membership/NAMSS-Awards#JCC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-105"
          >
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-yellow-800 font-bold text-sm">★</span>
                </div>
                <span className="text-yellow-800 font-bold text-sm uppercase tracking-wide">2025 Award Winner</span>
              </div>
              <p className="text-yellow-800 font-semibold">
                Co-Recipient of the NAMSS Joan Covell-Carpenter Award
              </p>
            </div>
          </a>
          
          <h3 className="text-medelevate-primary text-lg font-semibold uppercase mb-2 tracking-wide">
            Meet Our CEO
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-medelevate-dark mb-4">
            Nyleen Flores, BA, FMSP, CPMSM, CPCS, CPCO, CASC
          </h2>
          <p className="text-md text-gray-700 mb-4 font-medium">
            2025 NAMSS Joan Covell-Carpenter Award Co-Recipient<br />
            Healthcare Executive & Marquis Who's Who Honoree
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Nyleen Flores is a distinguished healthcare executive and the co-recipient of the prestigious 2025 NAMSS Joan Covell-Carpenter Award, recognizing her exceptional contributions to medical staff services. With over 20 years of experience and passion for healthcare services management, Nyleen is also a Marquis Who's Who honoree for Excellence in Healthcare Administration. As a credentialing subject matter expert with experience in private specialty practice management, provider enrollment, surgical center administration and medical staff services management, her background in healthcare and commitment to operational excellence ensures healthcare facilities provide an exceptional and unique healthcare experience for all patients. Additionally, her experience includes coordinating, evaluating, planning, developing, and improving the credentialing processes for multiple healthcare systems.
          </p>
          <p className="text-gray-500 mb-2 text-[16px]">
            Recent honors include co-receiving the 2025 NAMSS Joan Covell-Carpenter Award, the most prestigious recognition in medical staff services. Volunteer experience includes serving as the Chair of the Subject Matter Expert Subcommittee, Professional Development Council and Leadership Selection Committee for the National Association of Medical Staff Services. Additional awards have included the Florida Association of Medical Staff Services Mentor of the Year Award.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CeoIntro;