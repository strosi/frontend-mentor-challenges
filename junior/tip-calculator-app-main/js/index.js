// Input field elements
const inputBill = document.querySelector('#bill');
const inputNumPple = document.querySelector('#num-people');
const inputCustom = document.querySelector('#custom-tip');
const inputs = [inputBill, inputNumPple, inputCustom];

// Button elements
const btnTip5 = document.querySelector('#tip-5');
const btnTip10 = document.querySelector('#tip-10');
const btnTip15 = document.querySelector('#tip-15');
const btnTip25 = document.querySelector('#tip-25');
const btnTip50 = document.querySelector('#tip-50');
const tipBtns = [btnTip5, btnTip10, btnTip15, btnTip25, btnTip50];
const btnReset = document.querySelector('#reset');

// Output text elements
const resultTip = document.querySelector('#result-tip');
const resultTotal = document.querySelector('#result-total');

// Active data
let billValue = 0;
let tipValue = 0;
let pplNumValue = 0;

// Active data validating
let isBillValid = false;
let isTipValid = false;
let isPplNumValid = false;

tipBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const tipText = document.querySelector('label[for=' + e.target.id + ']').innerHTML;
        const tipBtnValue = parseFloat(tipText.substring(0, tipText.length - 1));
        tipValue = tipBtnValue;
        isTipValid = true;

        if(isBillValid && isTipValid && isPplNumValid) {
            const result = calculate(billValue, tipValue, pplNumValue);
            printResult(result, resultTip, resultTotal);
        }

        btnReset.classList.add('calc__reset--active');
    })
});

inputs.forEach(inp => {
    inp.addEventListener('input', (e) => {
        e.preventDefault();
        e.target.parentNode.onsubmit = () => {return false;}
        const inputEl = e.target;

        if(inputEl.id === 'bill') {
            billValue = parseFloat(inputEl.value);
            isBillValid = checkIfPositive(inputEl);
        } else if(inputEl.id === 'custom-tip') {
            tipValue = parseFloat(inputEl.value);
            isTipValid = checkIfPositive(inputEl);
        } else {
            pplNumValue = parseFloat(inputEl.value);
            isPplNumValid = checkIfPositive(inputEl);
        }

        if(isBillValid && isTipValid && isPplNumValid) {
            const result = calculate(billValue, tipValue, pplNumValue);
            printResult(result, resultTip, resultTotal);
        }

        btnReset.classList.add('calc__reset--active');
    })
});

btnReset.addEventListener('click', (e) => {
    resetCalculator(inputs, resultTip, resultTotal);
    tipBtns.forEach(btn => btn.checked = false);
    e.target.classList.remove('calc__reset--active');
})

// Function that is called when some of the tip buttons/field is clicked/pressed Enter
const calculate = (bill, tip, numPpl) => {
    const calcTipAmount = ((bill * tip) / 100) / numPpl;
    const calcTotal = (bill / numPpl) + calcTipAmount;

    return [calcTipAmount, calcTotal];
}

const checkIfPositive = (field) => {
    let isValid = false;
    const value = Number(field.value.trim());

    if(value < 0) {
        showError(field, 'Can\'t be negative');
    } else if(value === 0) {
        showError(field, 'Can\'t be zero');
    } else {
        isValid = true;
        hideError(field);
    }

    // field.addEventListener('focus', () => {
    //     hideError(field);
    // });

    return isValid;
}

// Show calculation result
const printResult = (result, elTip, elTotal) => {
    elTip.innerHTML = '$' + result[0];
    elTotal.innerHTML = '$' + result[1];
}

const resetCalculator = (fields, elTip, elTotal) => {
    fields[0].value = 0;
    fields[1].value = '';
    fields[2].value = 0;
    elTip.innerHTML = '$0.00';
    elTotal.innerHTML = '$0.00';
    
}

const showError = (field, errorMsg) => {
    const errorEl = field.parentNode.querySelector('.error');
    errorEl.innerHTML = errorMsg;
    errorEl.classList.add('show-error');
}

const hideError = (field) => {
    const errorEl = field.parentNode.querySelector('.error');
    errorEl.innerHTML = '';
    errorEl.classList.remove('show-error');
}