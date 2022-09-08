// https://www.omnicalculator.com/finance/apc

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averagepropensitytoconsumeRadio = document.getElementById('averagepropensitytoconsumeRadio');
const totalconsumptionRadio = document.getElementById('totalconsumptionRadio');
const totaldisposableincomeRadio = document.getElementById('totaldisposableincomeRadio');

let averagepropensitytoconsume;
let totalconsumption = v1;
let totaldisposableincome = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

averagepropensitytoconsumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Total consumption';
  variable2.textContent = 'Total disposable income';
  totalconsumption = v1;
  totaldisposableincome = v2;
  result.textContent = '';
});

totalconsumptionRadio.addEventListener('click', function() {
  variable1.textContent = 'Average propensity to consume';
  variable2.textContent = 'Total disposable income';
  averagepropensitytoconsume = v1;
  totaldisposableincome = v2;
  result.textContent = '';
});

totaldisposableincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Average propensity to consume';
  variable2.textContent = 'Total consumption';
  averagepropensitytoconsume = v1;
  totalconsumption = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(averagepropensitytoconsumeRadio.checked)
    result.textContent = `Average propensity to consume = ${computeaveragepropensitytoconsume().toFixed(2)}`;

  else if(totalconsumptionRadio.checked)
    result.textContent = `Total consumption = ${computetotalconsumption().toFixed(2)}`;

  else if(totaldisposableincomeRadio.checked)
    result.textContent = `Total disposable income = ${computetotaldisposableincome().toFixed(2)}`;
})

// calculation

function computeaveragepropensitytoconsume() {
  return Number(totalconsumption.value) / Number(totaldisposableincome.value);
}

function computetotalconsumption() {
  return Number(averagepropensitytoconsume.value) * Number(totaldisposableincome.value);
}

function computetotaldisposableincome() {
  return Number(totalconsumption.value) / Number(averagepropensitytoconsume.value);
}