const names = ["Alice", "Bob", "Carol", "David", "Ethan", "Fred", "Gary", "Helena"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Engineer", "Consultant"];
const freelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50},
    {name: "Carol", occupation: "Programmer", startingPrice: 70}
];

function renderFreelancers() {
    const freelancersList = document.querySelector("#freelancers");
    freelancersList.innerHTML = "";

    for (const freelancer of freelancers) {
        const freelancerItem = document.createElement("li");
        freelancerItem.textContent = `${freelancer.name} - ${freelancer.occupation} - ${freelancer.startingPrice}`;
        freelancersList.appendChild(freelancerItem);
    }
};

function calculateAverageStartingPrice() {
    let totalStartingPrice = 0;
    for (const freelancer of freelancers) {
        totalStartingPrice += freelancer.startingPrice;
    }

    return totalStartingPrice / freelancers.length;
};

function updateAveragePrice() {
    const averagePriceElement = document.querySelector("#average-price");
    averagePriceElement.textContent = `Average starting price: $${calculateAverageStartingPrice()}`;
};

function generateNewFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1;

    return {name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice};
};

setInterval (() => {
   if (freelancers.length < 20) {
    const newFreelancer = generateNewFreelancer();
    freelancers.push(newFreelancer);
    renderFreelancers();
    updateAveragePrice();
    } else {
        console.log("Maximum limit freelancers reached.");
    }
}, 1000);

renderFreelancers();
updateAveragePrice();
freelancers.push({name: "David", occupation: "Engineer", startingPrice: 100});
renderFreelancers();