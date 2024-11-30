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
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
    {
      image: "/images/pronsh.png",
      firstName: "Pronk",
      lastName: "SwagMaster",
      title: "President",
      pronouns: "he/him",
    },
  ];

  const itemsPerRow = 5;
  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-8xl mt-16 text-center mb-8 font-jersey text-[#183054]">
        Our Team
      </h1>
      <div className="mx-4 px-4">
        <div className="grid grid-rows-auto gap-y-16 gap-x">
          {Array.from(Array(Math.ceil(teamMembers.length / itemsPerRow))).map(
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-row flex-wrap justify-center gap-8 font-montserrat"
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
    </div>
  );
};

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-60 h-60 mb-4">
        <img
          src={member.image}
          alt={`${member.firstName} ${member.lastName}`}
          width={240}
          height={240}
          className="object-cover"
        />
      </div>
      <h2 className="text-2xl text-[#183054] font-extrabold text-center">
        {member.firstName}
      </h2>
      <h2 className="text-2xl text-[#183054] font-extrabold text-center mb-2">
        {member.lastName}
      </h2>
      <p className="text-xl text-[#294B7B] font-semibold text-center mb-1">
        {member.title}
      </p>
      <p className="text-md text-[#294B7B] font-light text-center">
        {member.pronouns}
      </p>
    </div>
  );
};

export default Team;
