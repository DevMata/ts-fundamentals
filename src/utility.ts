type Ingredient = 'salami' | 'pepperoni' | 'margherita';

enum EIngredient {
  'SALAMI' = 'salami',
  'PEPPERONI' = 'pepperoni',
  'MARGHERITA' = 'margherita',
}

function getPizza(ingredient: Ingredient) {
  console.log(`Here's your ${ingredient} pizza`);
}

getPizza('salami');
