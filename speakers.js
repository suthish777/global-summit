const speakers = [
  {
    name: 'Yochi Benker',
    profilePicture: './assets/speakers/speaker_01.png',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'SohYeong Noh',
    profilePicture: './assets/speakers/speaker_02.png',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Lila tretikov',
    profilePicture: './assets/speakers/speaker_03.png',
    title: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    name: 'Kilnam Chon',
    profilePicture: './assets/speakers/speaker_04.png',
    title: 'American business magnate',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame.',
  },
  {
    name: 'Julia Leda',
    profilePicture: './assets/speakers/speaker_05.png',
    title: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    name: 'Ryan Merkley',
    profilePicture: './assets/speakers/speaker_06.png',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const featuredSpeakers = document.getElementById('featured-speakers');

speakers.forEach((speaker) => {
  const listItem = document.createElement('li');
  listItem.className = 'featured-speaker';
  listItem.innerHTML = `<div class="featured-speaker-profile-container">
            <img src="${speaker.profilePicture}" alt="${speaker.name}">
        </div>
        <div class="featured-speaker__info">
            <h4 class="featured-speaker__name">${speaker.name}</h4>
            <p class="featured-speaker__designation">${speaker.title}</p>
            <hr>
            <p class="featured-speaker__about">${speaker.description}</p>
        </div>`;
  featuredSpeakers.appendChild(listItem);
});