function parsedResponse(text){
  return text.split('*');
}

async function getResponseFromGeminiAI(recipeServingsOrginal, servings, recipe, recipeName){
  
  const prompt1 = "Jestem kucharzem i mam oryginalny przepis na " + recipeName + " dla " + recipeServingsOrginal + " osób.";
  const prompt2 = "Proszę przelicz składniki tego przepisu, aby można było przygotować potrawę dla " + servings + " osób. Odpowiedź zapisz w formacie: * Przepis dla ... * składnik 1 - ilość 1 * składnik 2 - ilość 2 * Krok 1 * Krok 2 * itd. W pierwszej linii napisz, dla ilu osób przeliczono przepis (Przepis dla ... osób). Następnie wygeneruj przepis na " + recipeName + " z wykorzystaniem obliczonych składników. Koniecznie użyj podanego formatu odpowiedzi (każdą nową linię oddzielaj znakiem * ), pamiętaj o wygenerowaniu kroków do wykonania przepisu.";
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
