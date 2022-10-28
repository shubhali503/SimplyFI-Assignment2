const paths = {
    "Paris": ["Skopje"],
    "Zurich": ["Amsterdam"],
    "Prague": ["Zurich"],
    "Barcelona": ["Berlin"],
    "Kiev": ["Prague"],
    "Skopje": ["Paris"],
    "Amsterdam": ["Barcelona"],
    "Berlin": ["Kiev", "Amsterdam"]
};

const citiesToVisit = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];

function startJourney(currentPoint, visited, currentPath) {
    if (currentPath.length > citiesToVisit.length) {
        return;
    }
    if (currentPath.length === citiesToVisit.length) {
        let allVisited = true;
        citiesToVisit.forEach(city => {
            if (!visited[city]) {
                allVisited = false;
            }
        })
        if (allVisited) {
            currentPath.forEach(cp => {
                console.log(cp);
            })
        }
    }
    currentPath.push(currentPoint);
    visited[currentPoint] = true;
    paths[currentPoint].forEach(city => {
        startJourney(city, visited, currentPath);
        visited[currentPoint] = false;
        currentPath.pop();
    })

}

function checkPath() {
    const visited = {};
    // Mark all cities as not visited;
    citiesToVisit.forEach(city => {
        visited[city] = false;
    })
    const currentPath = [];
    startJourney("Kiev", visited, currentPath);
}

checkPath();