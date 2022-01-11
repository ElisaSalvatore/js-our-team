const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: './img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: './img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: './img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: './img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: './img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: './img/barbara-ramos-graphic-designer.jpg',
  },
];

//dove andremo ad inseirire le cards?
const teamContainer = document.querySelector('.team-container');

//ciclo for per ripetere la creazione delle cards
for (let i = 0; i < team.length; i++) {
  const member = team[i];

  teamContainer.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img
          src="${member.image}"
          alt="${member.name}"
        />
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    </div>
  `
};

