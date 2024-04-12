function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return "Least expensive option is the subway.";
  } else if (feet <= 2000) {
    return "A taxi would be the best option.";
  } else {
    return "An SUV would be the best option for you.";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good. We will head to NYC." : "We do not serve that area";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch (true) {
    case tip === 0:
      return "Such a shame!";
    case tip <= 5:
      return "Tip is a bit low.";
    case tip <= 10:
      return "Tip is average.";
    case tip <= 20:
      return "Great tip!";
    default:
      return "Wow! That's very generous.";
  }
}

