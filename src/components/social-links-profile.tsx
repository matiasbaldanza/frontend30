import Card from "./card";

type ProfileType = {
  name: string;
  location: string;
  avatar: string;
  bio: string;
  links: {
    name: string;
    url: string;
  }[];
}

const profile: ProfileType = {
  name: 'Jessica Randall',
  location: 'London, United Kingdom',
  avatar: '/social-links-profile/avatar-jessica.jpeg',
  bio: 'Front-end Developer and avid reader. Front-end Developer and avid reader. Front-end Developer and avid reader.',
  links: [
    {
      name: 'Github',
      url: 'https://github.com/jessica-randall',
    },
    {
      name: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/profile/jessica-randall',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jessica-randall/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jessica_randall',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jessica_randall/',
    },
  ]
}


export default function SocialLinksProfile() {
  return (
    <Card className="bg-gray-800 flex flex-col items-center gap-6 py-6 px-8 mx-auto rounded-2xl max-w-[354px] min-w-[80%] text-white font-inter">
      <img src={profile.avatar} alt={profile.name} className="w-24 h-24 rounded-full" />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-[400]">
          {profile.name}
        </h2>
        <p className="text-base font-[600] text-lime-400">
          {profile.location}
        </p>
      </div>
      {/* 
        DONE: truncate on max number of lines line-clamp-x
        TODO: how to expand on click or hover without any js
      */}
      <p className="text-base font-[400] text-center text-gray-300 text-balance line-clamp-2">
        "{profile.bio}"
      </p>

      {/* TODO: make it an unordered list */}
      <div className="flex flex-col items-center w-full gap-4 text-sm font-[600]">
        {
          profile.links.map((link) => (
            <a href={link.url} key={link.url}
              className="w-full py-3 tracking-wide text-center text-gray-100 transition-colors duration-300 ease-in-out bg-gray-600 rounded-lg hover:bg-lime-400 hover:text-gray-950"
            >
              {link.name}
            </a>
          ))
        }
      </div>
    </Card>
  )
}