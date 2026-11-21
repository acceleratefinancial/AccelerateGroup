import React from "react";
import Image from "next/image";
import SectionEyebrow from "@/components/shared/SectionEyebrow";

// Row 1 – Leadership Team (4 members in exact specified order)
const leadershipTeam = [
  {
    name: 'Andrew "Hoppy" Hopkins',
    displayName: "Hoppy",
    role: "Director",
    image: "/images/home/team-hoppy-new.png",
    objectPosition: "object-center",
  },
  {
    name: "David Manou",
    displayName: "Dave",
    role: "Director",
    image: "/images/home/team-dave-new.png",
    objectPosition: "object-center",
  },
  {
    name: "Rhianna",
    displayName: "Rhianna",
    role: "Business Development Manager",
    image: "/images/home/team-rhianna-new.png",
    objectPosition: "object-center",
  },
  {
    name: "Bianca",
    displayName: "Bianca",
    role: "Team Leader",
    image: "/images/home/team-bianca-new.png",
    objectPosition: "object-center",
  },
];

// Row 2 – Brokers (5 members as per updated specifications)
const brokersTeam = [
  {
    name: "Russell",
    displayName: "Russell",
    role: "Broker",
    image: "/images/home/team-russell.png",
    isPlaceholder: false,
  },
  {
    name: "Scott",
    displayName: "Scott",
    role: "Broker",
    image: "/images/home/team-scott.png",
    isPlaceholder: false,
  },
  {
    name: "Dan",
    displayName: "Dan",
    role: "Broker",
    image: "/images/home/team-dan.png",
    isPlaceholder: false,
  },
  {
    name: "Mike",
    displayName: "Mike",
    role: "Broker",
    image: "/images/home/team-mike.png",
    isPlaceholder: false,
  },
  {
    name: "Ronnie",
    displayName: "Ronnie",
    role: "Broker",
    image: "/images/home/team-ronnie.png",
    isPlaceholder: false,
  },
];

export default function HomeTeam() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="team">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow text="Expert Advisors" />

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#06122d] leading-tight">
            Our Awesome Team
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3">
            Experienced Adelaide finance brokers dedicated to finding you the right loan structuring.
          </p>
        </div>

        {/* Row 1: Leadership Team (4 Members on Desktop) */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00c5d6]">
              Leadership Team
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {leadershipTeam.map((member) => (
              <div
                key={member.displayName}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.image}
                    alt={`${member.displayName} - ${member.role}`}
                    fill
                    className={`object-cover ${member.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Info Card at Bottom */}
                <div className="p-4 sm:p-5 bg-white flex flex-col justify-center border-t border-gray-100">
                  <h3 className="font-bold text-base sm:text-lg text-[#06122d] leading-snug group-hover:text-[#00c5d6] transition-colors">
                    {member.displayName}
                  </h3>
                  <p className="text-xs font-bold text-[#00c5d6] uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Brokers (5 Members on Desktop) */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Brokers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {brokersTeam.map((member, i) => (
              <div
                key={`${member.displayName}-${i}`}
                className="group relative rounded-2xl overflow-hidden bg-slate-50 shadow-xs hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={`${member.displayName} - ${member.role}`}
                    fill
                    className={
                      member.isPlaceholder
                        ? "object-contain p-6 opacity-80 group-hover:scale-105 transition-transform duration-500"
                        : "object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    }
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                {/* Info Card at Bottom */}
                <div className="p-4 sm:p-5 bg-white flex flex-col justify-center border-t border-gray-100">
                  <h4 className="font-bold text-base sm:text-lg text-[#06122d] leading-snug truncate group-hover:text-[#00c5d6] transition-colors">
                    {member.displayName}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
