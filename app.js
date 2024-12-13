const salary = [1800, 3621, 3980, 5200, 1900];

// Méthode filter personnalisée

function filteredSalaries(arr, callback) {
  // Création d'un tableau qui va recevoir les salaires filtrés
  const finalFilteredSalaries = [];
  // On boucle à travers le tableau
  for (value of arr) {
    // Vérification de la fonction callback
    if (callback(value)) {
      // ajout des salaires par rapport à la valeur de la fonction callback
      finalFilteredSalaries.push(value);
    }
  }
  return finalFilteredSalaries;
}
// log de la fonction principal et de la fonction callback en arguments (on utilise une fonction fléchée)
console.log(filteredSalaries(salary, (value) => value > 2000));
console.log(filteredSalaries(salary, (value) => value > 1000));
console.log(filteredSalaries(salary, (value) => value > 3500));
console.log(filteredSalaries(salary, (value) => value > 5000));
