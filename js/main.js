const elSwitchInputAnnualy = document.querySelector(".switch-control-annualy");
const elPricingPlanValue = document.querySelector(".pricing-plan__value");

elSwitchInputAnnualy.addEventListener("checked", function(){
  elPricingPlanValue.textContent = 199.99;
});

