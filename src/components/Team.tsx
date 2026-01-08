

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
      image: "/images/board/aanya_agrawal_copres.png",
      firstName: "Aanya",
      lastName: "Agrawal",
      title: "President",
      pronouns: "she/her",
    },
    {
      image: "/images/board/angie_xetey_vp.jpeg",
      firstName: "Angie",
      lastName: "Xetey",
      title: "Vice President",
      pronouns: "she/her",
    },
    {
      image: "/images/board/edison_secretary.jpg",
      firstName: "Edison",
      lastName: "Trinh",
      title: "Secretary",
      pronouns: "he/him",
    },
    {
      image: "/images/board/yurie_jeong_tres.jpg",
      firstName: "Yurie",
      lastName: "Jeong",
      title: "Treasurer",
      pronouns: "she/her",
    },
    {
      image: "/images/board/rithika_yalla_event.jpg",
      firstName: "Rithika",
      lastName: "Yalla",
      title: "Event Head",
      pronouns: "she/her",
    },
    {
      image: "/images/board/julia_nguyen.jpg",
      firstName: "Julia",
      lastName: "Nguyen",
      title: "UI/UX & Marketing Head",
      pronouns: "she/her",
    },
    {
      image: "/images/board/genevie_vu_uiux.jpeg",
      firstName: "Genevie",
      lastName: "Vu",
      title: "UI/UX & Marketing Head",
      pronouns: "she/her",
    },
    {
      image: "/images/board/margaret_galvez.jpg",
      firstName: "Margaret",
      lastName: "Galvez",
      title: "Tech Head",
      pronouns: "she/her",
    },
    {
      image: "/images/board/leo_siu_tech_head.jpeg",
      firstName: "Leonardo",
      lastName: "Siu",
      title: "Tech Head",
      pronouns: "he/him",
    },
    {
      image: "/images/board/zarin_hasan_outreach.jpg",
      firstName: "Zarin",
      lastName: "Hasan",
      title: "Outreach Head",
      pronouns: "she/her",
    },
    {
      image: "/images/board/andy_xie_project.jpg",
      firstName: "Andy",
      lastName: "Xie",
      title: "Project Head",
      pronouns: "he/him",
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
