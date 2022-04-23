const elPaymentPeriodRadio = document.querySelectorAll('[name="payment-period"]');
const elPaymentPriceValue  = document.querySelectorAll('.pricing-plan__value');


elPaymentPeriodRadio.forEach(function(elPaymentPeriodRadio){
  elPaymentPeriodRadio.addEventListener('change',function(){
    let period = elPaymentPeriodRadio.value;
    if(period === 'annual'){
      elPaymentPriceValue.forEach(function(elPrice){
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.annualyPrice;
      });
    }else{
      elPaymentPriceValue.forEach(function(elPrice){
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.monthlyPrice;
      });
    }
  });
});


// let basicPrice = document.querySelector('#basic-price');
// let professionalPrice = document.querySelector('#professional-price');
// let masterPrice = document.querySelector('#master-price');
// document.body.addEventListener('change', function(e){
//   let target = e.target;
//   let message;

//   // Basic-Price

//   switch (target.id){
//     case 'annual-payment-radio':
//       message = '199.99';
//       break;
//     case 'monthly-payment-radio':
//       message = '19.99';
//       break;
//   }
//   basicPrice.textContent = message;

//   // Professioanl Price

//   switch (target.id){
//     case 'annual-payment-radio':
//       message = '249.99';
//       break;
//     case 'monthly-payment-radio':
//       message = '24.99';
//       break;
//   }
//   professionalPrice.textContent = message;

//   // Master Price

//   switch (target.id){
//     case 'annual-payment-radio':
//       message = '399.99';
//       break;
//     case 'monthly-payment-radio':
//       message = '39.99';
//       break;
//   }
//   masterPrice.textContent = message;
// });

