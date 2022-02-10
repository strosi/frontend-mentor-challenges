window.onload = () => {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            const reportContainer = document.querySelector('.report');
            let checkedTimefr = document.querySelector('input[name=timeframe][checked]').id;

            // Create the initial HTML content...
            data.forEach(d => {
                reportContainer.appendChild(
                    createStatistic(d.title, getCurrentTimefr(d, checkedTimefr), checkedTimefr));
            });

            // Set listeners to the time frame buttons
            const rButtons = document.querySelectorAll('input[name=timeframe]');
            rButtons.forEach(rb => {
                rb.addEventListener('click', (e) => {
                    handleClick(e, data);
                    checkedTimefr = e.target.id;
                });
            })

            // Set listeners to the options buttons
            const optRadButtonsGroups = Array.from(
                document.querySelectorAll('.stat-content'))
                .map(el => el.id + '-time');
            for(const name of optRadButtonsGroups) {
                const rBtnsOptions = document.querySelectorAll('input[name=' + name + ']');
                rBtnsOptions.forEach(rb => {
                    rb.addEventListener('click', (e) => {
                        handleOptionClick(e, data, checkedTimefr);
                    });
                })
            }

            // Close opened options menu on click outside...
            const optMenus = document.querySelectorAll('.opt-menu');
            document.addEventListener('click', (e) => {
                for(const menu of optMenus) {
                    if(!menu.classList.contains('opt-menu_hidden')) {
                        const menuBtn = menu.parentElement.childNodes[0].childNodes[1];
                        if(!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                            menuBtn.childNodes[0].setAttribute('aria-expanded', false);
                            Array.from(menuBtn.childNodes[0].children).forEach(el => el.classList.remove('stat-content__btn-el_close'));
                            hideOptions(menu);
                        }
                    }
                }
            })

        }).catch(err => console.log(err));
}

/*  ---------------------------------------------------
    Create the initial HTML structure 
    for the report statistic entity.
 */
const createStatistic = (title, timeframe, timefrName) => {
    // Report statistic header -----------------------|
    // - Title...
    const statTitle = document.createElement('h2');
    const titleText = document.createTextNode(title);
    statTitle.appendChild(titleText);
    statTitle.classList.add('stat-content__title');

    // - Options menu button...
    // -- Button
    const togBtn = document.createElement('button');
    togBtn.classList.add('stat-content__tog-btn');
    togBtn.setAttribute('aria-haspopup', true);
    togBtn.setAttribute('aria-expanded', false);
    togBtn.setAttribute('onclick', 'openMenu(this)')
    // -- Button elements
    for (let i = 0; i < 4; i++) {
        const btnEl = document.createElement('span');
        btnEl.classList.add('stat-content__btn-el');
        togBtn.append(btnEl);
    }

    const statMenu = document.createElement('div');
    statMenu.classList.add('stat-content__menu');
    statMenu.appendChild(togBtn);

    // - Header container...
    const statHeadContainer = document.createElement('div');
    statHeadContainer.classList.add('stat-content__header');
    statHeadContainer.appendChild(statTitle);
    statHeadContainer.appendChild(statMenu);

    // Report statistic data -------------------------|
    // - Current...
    const statNum = document.createElement('span');
    const currentStatNum = document.createTextNode(timeframe.current);
    statNum.appendChild(currentStatNum);

    const statCurr = document.createElement('p');
    const currentStat = document.createTextNode('hrs');
    statCurr.appendChild(statNum);
    statCurr.appendChild(currentStat);
    statCurr.classList.add('stat-content__current');

    // - Previous...
    const statPrevLabel = getPrevStatLabel(timefrName);
    const statPrev = document.createElement('p');
    const previousStat = document.createTextNode(statPrevLabel + timeframe.previous + 'hrs')
    statPrev.appendChild(previousStat);
    statPrev.classList.add('stat-content__prev');

    // - Data container
    const statDataContainer = document.createElement('div');
    statDataContainer.classList.add('stat-content__data');
    statDataContainer.appendChild(statCurr);
    statDataContainer.appendChild(statPrev);

    // Statistic container ---------------------------|
    const statContentContainer = document.createElement('div');
    statContentContainer.classList.add('stat-content');
    statContentContainer.id = title.toLowerCase().replace(/\s/g, "");
    statContentContainer.appendChild(statHeadContainer);
    statContentContainer.appendChild(statDataContainer);
    statContentContainer.appendChild(createOptionsMenu(statContentContainer.id));

    const themeClassName = 'statistic_' + statContentContainer.id + '-theme'
    const container = document.createElement('div');
    container.classList.add('statistic', themeClassName);
    container.appendChild(statContentContainer);

    return container;
}

/*  ---------------------------------------------------
    Create the initial HTML structure 
    for the entity options menu.
 */
const createOptionsMenu = (groupId) => {
    const optIntroText = document.createElement('p');
    const text = document.createTextNode('Show data in:');
    optIntroText.appendChild(text);
    optIntroText.classList.add('opt-menu__text');

    const optHolder = document.createElement('div');
    optHolder.classList.add('opt-menu', 'opt-menu_hidden');
    optHolder.appendChild(optIntroText);

    const timeUnits = ['minutes', 'hours', 'days'];

    for (let i = 0; i < timeUnits.length; i++) {
        const rBtnId = groupId + '-' + timeUnits[i];
        const groupName = groupId + '-time';
        const optRadBtn = document.createElement('input');
        optRadBtn.classList.add('vh');
        optRadBtn.setAttribute('type', 'radio');
        optRadBtn.setAttribute('id', rBtnId);
        optRadBtn.setAttribute('name', groupName);
        optRadBtn.setAttribute('value', rBtnId);
        if (timeUnits[i] == 'hours') optRadBtn.setAttribute('checked', true);

        var label = document.createElement('label')
        label.setAttribute('for', rBtnId);

        var description = document.createTextNode(timeUnits[i]);
        label.appendChild(description);

        var timeUnitCont = document.createElement('div');
        timeUnitCont.classList.add('opt-menu__time-unit');
        timeUnitCont.appendChild(optRadBtn);
        timeUnitCont.appendChild(label);

        optHolder.appendChild(timeUnitCont);
    }

    return optHolder;
}

/*  ---------------------------------------------------
    Handle checked event of the time frame radio button.
 */
const handleClick = (e, data) => {
    const currentTimefr = e.target.id;
    changeTimeFrame(data, currentTimefr);

    const optBtns = document.querySelectorAll('[id$=-hours]');
    resetOptionsButtons(optBtns);
}

/*  ---------------------------------------------------
    Handle checked event of the option radio button 
    (from the options menu).
 */
const handleOptionClick = (e, data, checkedTimefr) => {
    const [enId, tUnit] = e.target.id.split('-');
    const enTitle = document
        .querySelector('#' + enId)
        .querySelector('h2').innerHTML;
    const enData = data.filter(d => d.title === enTitle)[0]["timeframes"][checkedTimefr];
    const enDataHolder = document
        .querySelector('#' + enId)
        .querySelector('.stat-content__data');

    changeTimeUnit(enData, tUnit, enDataHolder, checkedTimefr);
}

/*  ---------------------------------------------------
    Refresh statistical data according to the time frame option
    that was checked.
 */
const changeTimeFrame = (data, btnId) => {
    data.forEach(d => {
        changeStatistic(d.title, getCurrentTimefr(d, btnId), btnId);
    });
}

/*  ---------------------------------------------------
    Change statistical data of an entity.
 */
const changeStatistic = (title, timeframe, timefrName) => {
    const id = title.toLowerCase().replace(/\s/g, '');
    const statContent = document.getElementById(id);
    const statPrevLabel = getPrevStatLabel(timefrName);

    // Adding <span>currNumb</span> trigger the number animation again...
    statContent.childNodes[1].firstChild.innerHTML = '';
    const newCurrNum = document.createElement('span');
    const num = document.createTextNode(timeframe.current);
    newCurrNum.appendChild(num);
    const currentStat = document.createTextNode('hrs');
    statContent.childNodes[1].firstChild.appendChild(newCurrNum);
    statContent.childNodes[1].firstChild.appendChild(currentStat);

    // statContent.childNodes[1].firstChild.innerHTML = timeframe.current + 'hrs';
    statContent.childNodes[1].lastChild.innerHTML = statPrevLabel + timeframe.previous + 'hrs';
}

/*  ---------------------------------------------------
    Helpers
 */
const getCurrentTimefr = (data, checkedTimefr) => {
    let currentTimefr = {};

    switch (checkedTimefr) {
        case 'daily':
            currentTimefr = data.timeframes.daily;
            break;
        case 'weekly':
            currentTimefr = data.timeframes.weekly;
            break;
        case 'monthly':
            currentTimefr = data.timeframes.monthly;
            break;
        default:
            console.log('No timeframe selected...');
    }

    return currentTimefr;
}

const getPrevStatLabel = (checkedTimefr) => {
    let label = 'Last ';

    switch (checkedTimefr) {
        case 'daily':
            label = label + 'Day - ';
            break;
        case 'weekly':
            label = label + 'Week - ';
            break;
        case 'monthly':
            label = label + 'Month - ';
            break;
        default:
            console.log('No timeframe selected...');
    }

    return label;
}

/*  ---------------------------------------------------
    Change data time unit of an entity.
 */
const changeTimeUnit = (enData, tUnit, enDataHolder, timefrName) => {
    const statPrevLabel = getPrevStatLabel(timefrName);
    let newCurrData = enData.current;
    let newPrevData = enData.previous;
    let tUnitAbbr = '';

    switch (tUnit) {
        case 'minutes':
            newCurrData = newCurrData * 60;
            newPrevData = newPrevData * 60;
            tUnitAbbr = 'min';
            break;
        case 'hours':
            tUnitAbbr = 'hrs';
            break;
        case 'days':
            newCurrData = Math.floor(newCurrData / 24);
            newPrevData = Math.floor(newPrevData / 24);
            tUnitAbbr = 'dys';
            break;
        default:
            tUnitAbbr = 'hrs';
    }

    enDataHolder.firstChild.innerHTML = newCurrData + tUnitAbbr;
    enDataHolder.lastChild.innerHTML = statPrevLabel + newPrevData + tUnitAbbr;
}

const resetOptionsButtons = (btns) => {
    btns.forEach(btn => {btn.checked = true});
}