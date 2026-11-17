import React from "react";
import Image from "next/image";
import SectionEyebrow from "@/components/shared/SectionEyebrow";

// Row 1 – Leadership Team (4 members in exact specified order from Image 5)
const leadershipTeam = [
  {
    name: 'Andrew "Hoppy" Hopkins',
    displayName: "Hoppy",
    role: "Director",
    image: "/images/home/team-1.png",
  },
  {
    name: "David Manou",
    displayName: "Dave",
    role: "Director",
    image: "/images/home/team-2.png",
  },
  {
    name: "Rhianna",
    displayName: "Rhianna",
    role: "BDM Leader",
    image: "/images/home/team-3.png",
  },
  {
    name: "Bianca",
    displayName: "Bianca",
    role: "Team Leader",
    image: "/images/home/team-4.png",
  },
];

// Row 2 – Brokers (6 members, all with title Broker from Image 5)
const brokersTeam = [
  {
    name: "Laurence Camporeale",
    displayName: "Laurence",
    role: "Broker",
    image: "/images/home/team-6.png",
  },
  {
    name: "Stefanie",
    displayName: "Stef",
    role: "Broker",
    image: "/images/home/team-7.png",
  },
  {
    name: "Stuart",
    displayName: "Stuart",
    role: "Broker",
    image: "/images/home/team-8.png",
  },
  {
    name: "Kayla",
    displayName: "Kayla",
    role: "Broker",
    image: "/images/home/team-9.png",
  },
  {
    name: "Taylor",
    displayName: "Taylor",
    role: "Broker",
    image: "/images/home/team-5.png",
  },
  {
    name: "Broker Specialist",
    displayName: "Broker Specialist",
    role: "Broker",
    image: "/images/laurence-camporeale.jpg",
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
        </div>

        {/* Row 1: Leadership Team (4 Members on Desktop) */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Leadership Team (4 members)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {leadershipTeam.map((member) => (
              <div
                key={member.displayName}
                className="group relative rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.image}
                    alt={`${member.displayName} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Info Card at Bottom */}
                <div className="p-4 bg-white flex flex-col justify-center border-t border-gray-100">
                  <h3 className="font-bold text-base text-[#06122d] leading-snug group-hover:text-[#00c5d6] transition-colors">
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

        {/* Row 2: Brokers (6 Members on Desktop) */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Brokers (6 members)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {brokersTeam.map((member, i) => (
              <div
                key={`${member.displayName}-${i}`}
                className="group relative rounded-xl overflow-hidden bg-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.image}
                    alt={`${member.displayName} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>

                {/* Info Card at Bottom */}
                <div className="p-3 bg-white flex flex-col justify-center border-t border-gray-100">
                  <h4 className="font-bold text-sm text-[#06122d] leading-snug truncate group-hover:text-[#00c5d6] transition-colors">
                    {member.displayName}
                  </h4>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
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
