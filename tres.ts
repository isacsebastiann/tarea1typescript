enum Season {
    FALL,
    WINTER,
    SPRING,
    SUMMER,
  }
  
  function isSeason(season: Season): string {
    switch (season) {
      case Season.FALL:
        return "estamos en otoño.";
      case Season.WINTER:
        return "esto es invierno.";
      case Season.SPRING:
        return "estamos en primavera.";
      case Season.SUMMER:
        return "el verano es azul";
      default:
        return "dato invalido";
    }
  }
  
  let chosenSeason: Season = Season.SUMMER;
  console.log(isSeason(chosenSeason));
  console.log(`Isaac Guerra`);
