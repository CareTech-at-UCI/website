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
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
    {
      image: "/images/caretech_logo.png",
      firstName: "First Name",
      lastName: "Last Name",
      title: "CareTech X",
      pronouns: "he/him",
    },
  ];

  const itemsPerRow = 5;
  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-6xl md:text-8xl mt-16 justify-center text-center font-jersey text-[#183054]">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
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
