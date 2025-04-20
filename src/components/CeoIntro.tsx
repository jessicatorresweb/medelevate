
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
          <h3 className="text-medelevate-primary text-lg font-semibold uppercase mb-2 tracking-wide">
            Meet Our CEO
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-medelevate-dark mb-4">
            Nyleen Flores, BA, FMSP, CPMSM, CPCS, CPCO, CASC
          </h2>
          <p className="text-md text-gray-700 mb-4 font-medium">
            Healthcare Executive & Marquis Who’s Who Honoree
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Nyleen Flores is a healthcare executive with over 16 years of experience and passion for healthcare services management. Nyleen is a Marquis Who’s Who honoree for Excellence in Healthcare Administration, a credentialing subject matter expert with experience in private specialty practice management, provider enrollment, surgical center administration and medical staff services management. Her background in healthcare and commitment to operational excellence ensures healthcare facilities provide an exceptional and unique healthcare experience for all patients. Additionally, her experience includes coordinating, evaluating, planning, developing, and improving the credentialing processes for multiple healthcare systems.
          </p>
          <p className="text-gray-500 mb-2 text-[16px]">
            Volunteer experience includes serving as the Chair of the Subject Matter Expert Subcommittee, Professional Development Council and Leadership Selection Committee for the National Association of Medical Staff Services. Awards have included the Florida Association of Medical Staff Services Mentor of the Year Award.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CeoIntro;

