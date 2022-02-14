// Input field elements
const inputBill = document.querySelector('#bill');
const inputNumPple = document.querySelector('#num-people');
const inputCustom = document.querySelector('#custom-tip');
const inputs = [inputBill, inputNumPple, inputCustom];

// Button elements
const tipBtns = document.querySelectorAll('[name=tip]');
const btnReset = document.querySelector('#reset');

// Output text elements
const resultTip = document.querySelector('#result-tip');
const resultTotal = document.querySelector('#result-total');

// Active data
let billValue = '';
let tipValue = '';
let pplNumValue = '';

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

        // Clear the custom tip field when some of the tip buttons is selected
        inputCustom.value = '';

        if (isBillValid && isTipValid && isPplNumValid) {
            const result = calculate(billValue, tipValue, pplNumValue);
            printResult(result, resultTip, resultTotal);
        }

        if (!checkIfAllValuesEmpty([billValue, tipValue, pplNumValue])) {
            btnReset.classList.add('calc__reset--active');
        } else {
            btnReset.classList.remove('calc__reset--active');
        }
    })
});

inputs.forEach(inp => {
    inp.addEventListener('input', (e) => {
        e.preventDefault();
        e.target.parentNode.onsubmit = () => { return false; }
        const inputEl = e.target;

        if (inputEl.id === 'bill') {
            billValue = parseFloat(inputEl.value);
            isBillValid = checkIfPositive(inputEl);
        } else if (inputEl.id === 'custom-tip') {
            tipValue = parseFloat(inputEl.value);
            isTipValid = checkIfPositive(inputEl);
        } else {
            pplNumValue = parseFloat(inputEl.value);
            isPplNumValid = checkIfPositive(inputEl);
        }

        if (isBillValid && isTipValid && isPplNumValid) {
            const result = calculate(billValue, tipValue, pplNumValue);
            printResult(result, resultTip, resultTotal);
        }

        if (!checkIfAllValuesEmpty([billValue, tipValue, pplNumValue])) {
            btnReset.classList.add('calc__reset--active');
        } else {
            btnReset.classList.remove('calc__reset--active');
        }
    })
});

inputCustom.addEventListener('input', (e) => {
    clearTipBtns(tipBtns);
    tipValue = parseInt(e.target.value);

    if (!checkIfAllValuesEmpty([billValue, tipValue, pplNumValue])) {
        btnReset.classList.add('calc__reset--active');
    } else {
        btnReset.classList.remove('calc__reset--active');
    }
});

btnReset.addEventListener('click', (e) => {
    resetCalculator(inputs, resultTip, resultTotal);
    tipBtns.forEach(btn => btn.checked = false);
    e.target.classList.remove('calc__reset--active');
});

// Function that is called when some of the tip buttons/field is clicked/pressed Enter
const calculate = (bill, tip, numPpl) => {
    const calcTipAmount = ((bill * tip) / 100) / numPpl;
    const calcTotal = (bill / numPpl) + calcTipAmount;

    return [calcTipAmount, calcTotal];
}

const checkIfPositive = (field) => {
    let isValid = false;
    const value = Number(field.value.trim());

    if (value < 0) {
        showError(field, 'Can\'t be negative');
    } else if (field.value == '') {
        hideError(field);
    } else if (value === 0) {
        showError(field, 'Can\'t be zero');
    } else {
        isValid = true;
        hideError(field);
    }

    return isValid;
}

const checkIfAllValuesEmpty = (values) => {
    let allEmpty = true;

    for (v of values) {
        if (v === 0 || v) {
            allEmpty = false;
            break;
        }
    }
    return allEmpty;
}

const printResult = (result, elTip, elTotal) => {
    elTip.innerHTML = '$' + result[0].toFixed(2);
    elTotal.innerHTML = '$' + result[1].toFixed(2);
}

const clearTipBtns = (btns) => {
    btns.forEach(b => b.checked = false);
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

const resetCalculator = (fields, elTip, elTotal) => {
    billValue = 0;
    tipValue = 0;
    pplNumValue = 0;
    isBillValid = false;
    isTipValid = false;
    isPplNumValid = false;
    fields[0].value = '';
    fields[1].value = '';
    fields[2].value = '';
    elTip.innerHTML = '$0.00';
    elTotal.innerHTML = '$0.00';
    fields.forEach(f => { hideError(f); });
}