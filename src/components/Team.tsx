import React from "react";

interface TeamMember {
  image: string;
  firstName: string;
  lastName: string;
  title: string;
  pronouns: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      image: "/images/caretech_logo.png",
      firstName: "Aanya",
      lastName: "Agrawal",
      title: "Co-President",
      pronouns: "she/her",
    },
    {
      image: "/images/committee_heads/pranav_gonuguntla_co_pres.jpg",
      firstName: "Pranav",
      lastName: "Gonuguntla",
      title: "Co-President",
      pronouns: "he/him",
    },
    {
      image: "/images/committee_heads/isaac_zhang_vp.jpg",
      firstName: "Isaac",
      lastName: "Zhang",
      title: "Vice President",
      pronouns: "he/him",
    },
    {
      image: "/images/committee_heads/edison_secretary.jpg",
      firstName: "Edison",
      lastName: "Trinh",
      title: "Secretary",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "Ranjani",
      lastName: "Belavadi",
      title: "Treasurer",
      pronouns: "she/her",
    },
    {
      image: "/images/committee_heads/suhani_khandelwal_event.jpg",
      firstName: "Suhani",
      lastName: "Khandelwal",
      title: "Event Head",
      pronouns: "she/her",
    },
    {
      image: "/images/committee_heads/julia_nguyen.png",
      firstName: "Julia",
      lastName: "Nguyen",
      title: "Marketing Head",
      pronouns: "she/her",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "Tony",
      lastName: "Tao",
      title: "Marketing Head",
      pronouns: "he/him",
    },
    {
      image: "/images/committee_heads/elaine_johann_outreach.jpeg",
      firstName: "Elaine",
      lastName: "Johann",
      title: "Outreach Head",
      pronouns: "she/her",
    },
    {
      image: "/images/committee_heads/andy_xie_project.jpg",
      firstName: "Andy",
      lastName: "Xie",
      title: "Project Head",
      pronouns: "he/him",
    },
    {
      image: "/images/committee_heads/margaret_tech.jpg",
      firstName: "Margaret",
      lastName: "Galvez",
      title: "Tech Head",
      pronouns: "she/her",
    },
  ];

  const itemsPerRow = 1000000;
  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-6xl md:text-8xl mt-4 sm:mt-16 sm:mb-8 justify-center text-center font-jersey text-[#183054]">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
          {Array.from(Array(Math.ceil(teamMembers.length / itemsPerRow))).map(
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col md:flex-row flex-wrap justify-center gap-8 font-normal"
              >
                {teamMembers
                  .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                  .map((member, index) => (
                    <TeamCard key={index} member={member} />
                  ))}
              </div>
            )
          )}
      </div>
    </div>
  );
};

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-5">
        <img
          src={member.image}
          alt={`${member.firstName} ${member.lastName}`}
          width={240}
          height={240}
          className="object-cover aspect-square rounded-lg"
        />
      </div>
      <h2 className="text-2xl text-[#183054] font-extrabold text-center">
        {member.firstName}
      </h2>
      <h2 className="text-2xl text-[#183054] font-extrabold text-center">
        {member.lastName}
      </h2>
      <p className="text-lg md:text-xl text-[#294B7B] font-semibold text-center">
        {member.title}
      </p>
      <p className="text-lg md:text-md text-[#294B7B] font-light text-center">
        {member.pronouns}
      </p>
    </div>
  );
};

export default Team;
