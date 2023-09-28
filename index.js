
// Arrays containing names, occupations, and initial freelancers' data.
const names = ["Alice", "Bob", "Carol", "David", "Ethan", "Fred", "Gary", "Helena"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Engineer", "Consultant"];
const freelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50},
    {name: "Carol", occupation: "Programmer", startingPrice: 70}
];

// Function that renders the list of the freelancers.
function renderFreelancers() {
    const freelancersList = document.querySelector("#freelancers");
    freelancersList.innerHTML = "";

    for (const freelancer of freelancers) {
        const freelancerItem = document.createElement("li");
        freelancerItem.textContent = `${freelancer.name} - ${freelancer.occupation} - ${freelancer.startingPrice}`;
        freelancersList.appendChild(freelancerItem);
    }
};

// Function that calculates the average starting price of the freelancers.
function calculateAverageStartingPrice() {
    let totalStartingPrice = 0;
    for (const freelancer of freelancers) {
        totalStartingPrice += freelancer.startingPrice;
    }

    return totalStartingPrice / freelancers.length;
};

// Function that updates the displayed average starting price.
function updateAveragePrice() {
    const averagePriceElement = document.querySelector("#average-price");
    averagePriceElement.textContent = `Average starting price: $${calculateAverageStartingPrice()}`;
};

// Function that generates a new random freelancer.
function generateNewFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1;

    return {name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice};
};

// Function that adds a new freelancer every second with a maxium number of freelancers set to 20.
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

// Initial rendering of freelancers and the average price.
renderFreelancers();
updateAveragePrice();