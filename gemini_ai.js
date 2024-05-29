function parsedResponse(text){
  return text.split('*');
}

async function getResponseFromGeminiAI(recipeServingsOrginal, servings, recipe, recipeName){
  const prompt1 = "Jestem kucharzem. Mam oryginalny przepis na " + recipeName +" dla " + recipeServingsOrginal + " osób.";
  const prompt2 = "Przelicz proszę oryginalne składniki przepisu tak żebym mógł przygotować potrawę dla " + servings +" osób. Odpowiedź zapisz w foracie: * Przepis dla ... osób * skałdnik 1 - waga 1 * składnik 2 - waga 2 * Krok1 * Krok2 * itd.. W pierwszej linii napisz dla ilu osób przeliczyłeś przepis (Przepis dla ... osób). Następnie wygeneruj przepis na" + recipeName + "z wykorzystaniem obliczonych składników. Koniecznie uwzględnij podany przeze mnie format odpowiedzi.";
  const prompt3 = "Oto składniki: ";
  const result = await model.generateContent(prompt1 + prompt2 + prompt3 + recipe);
  const response = await result.response;
  const text = response.text();
  console.log("Oryginalna liczba porcji: " + recipeServingsOrginal);
  console.log("---")
  console.log(recipe)
  console.log("---")
  console.log(text);

  //return parsedResoponse(text);
  return text;
  //alert(recipe)
}