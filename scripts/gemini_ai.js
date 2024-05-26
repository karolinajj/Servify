async function getResponseFromGeminiAI(recipeServingsOrginal, servings, recipe){
  const prompt1 = "Jestem kucharzem. Mam oryginalny przepis dla " + recipeServingsOrginal + " osób.";
  const prompt2 = "Przelicz proszę oryginalny przepis tak żebym mógł przygotować potrawę dla " + servings +" osób." ;
  const prompt3 = "Oto przepis: ";
  const result = await model.generateContent(prompt1 + prompt2 + prompt3 + recipe);
  const response = await result.response;
  const text = response.text();
  console.log("Oryginalna liczba porcji: " + recipeServingsOrginal);
  console.log("---")
  console.log(recipe)
  console.log("---")
  console.log(text);
  return text;
  //alert(recipe)
}