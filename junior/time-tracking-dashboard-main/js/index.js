window.onload = () => {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            const reportContainer = document.querySelector('.report');
            let checkedTimefr = document.querySelector('input[checked]').id;

            data.forEach(d => {
                reportContainer.appendChild(
                    createStatistic(d.title, getCurrentTimefr(d, checkedTimefr), checkedTimefr));
            });

            const rButtons = document.querySelectorAll('input[type=radio]');
            rButtons.forEach(rb => {
                rb.addEventListener('click', (e) => {
                    handleClick(e, data);
                })
            })
        }).catch(err => console.log(err));
}

/*  ---------------------------------------------------
    Create the initial HTML structure 
    for the report statistic entity.
*/
const createStatistic = (title, timeframe, timefrName) => {
    // Report statistic header
    const statTitle = document.createElement('h2');
    const titleText = document.createTextNode(title);
    statTitle.appendChild(titleText);
    statTitle.classList.add('stat-content__title');

    const statMenu = document.createElement('div');
    statMenu.classList.add('stat-content__menu');

    const statHeadContainer = document.createElement('div');
    statHeadContainer.classList.add('stat-content__header');
    statHeadContainer.appendChild(statTitle);
    statHeadContainer.appendChild(statMenu);

    // Report statistic data
    const statCurr = document.createElement('p');
    const currentStat = document.createTextNode(timeframe.current + 'hrs');
    statCurr.appendChild(currentStat);
    statCurr.classList.add('stat-content__current');

    const statPrevLabel = getPrevStatLabel(timefrName);
    const statPrev = document.createElement('p');
    const previousStat = document.createTextNode(statPrevLabel + timeframe.previous + 'hrs')
    statPrev.appendChild(previousStat);
    statPrev.classList.add('stat-content__prev');

    const statDataContainer = document.createElement('div');
    statDataContainer.classList.add('stat-content__data');
    statDataContainer.appendChild(statCurr);
    statDataContainer.appendChild(statPrev);

    // Statistic container
    const statContentContainer = document.createElement('div');
    statContentContainer.classList.add('stat-content');
    statContentContainer.id = title.toLowerCase().replace(/\s/g, "");
    statContentContainer.appendChild(statHeadContainer);
    statContentContainer.appendChild(statDataContainer);

    // statistic_work-theme
    const themeClassName = 'statistic_' + statContentContainer.id + '-theme'
    const container = document.createElement('div');
    container.classList.add('statistic', themeClassName);
    container.appendChild(statContentContainer);

    return container;
}

/*  ---------------------------------------------------
    Handle checked event of the time frame radio button.
*/
const handleClick = (e, data) => {
    const currentTimefr = e.target.id;
    changeTimeFrame(data, currentTimefr);
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
    const id = title.toLowerCase().replace(/\s/g, "");
    const statContent = document.getElementById(id);
    const statPrevLabel = getPrevStatLabel(timefrName);

    statContent.childNodes[1].firstChild.innerHTML = timeframe.current + 'hrs';
    statContent.childNodes[1].lastChild.innerHTML = statPrevLabel + timeframe.previous + 'hrs';
}

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