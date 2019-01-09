function driversWithRevenueOver(driverArray, revenue) {
  return driverArray.filter( function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driverArray, revenue) {
  return driversWithRevenueOver(driverArray, revenue).map( function(driver) {
    return driver.name;
  });
}

function exactMatch(driverArray, attributeToMatch) {

}

function exactMatchToList(driverArray, attributeToMatch) {

}
