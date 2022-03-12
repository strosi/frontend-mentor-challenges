var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function AdviceId(_ref) {
    var id = _ref.id;

    return React.createElement(
        "p",
        { className: "advice__id" },
        "Advice #",
        React.createElement(
            "span",
            null,
            id
        )
    );
}

function AdviceText(_ref2) {
    var text = _ref2.text;

    return React.createElement(
        "div",
        { className: "advice__text-holder" },
        React.createElement(
            "p",
            { className: "advice__text" },
            React.createElement(
                "q",
                null,
                text
            )
        )
    );
}

function App() {
    var adviceSlipAPIurl = "https://api.adviceslip.com/advice";
    var initSlip = {
        "slip": {
            "id": "117",
            "advice": "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        }
    };

    var _React$useState = React.useState(initSlip),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        slip = _React$useState2[0],
        setSlip = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        isBtnClicked = _React$useState4[0],
        setIsBtnClicked = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        inProp = _React$useState6[0],
        setInProp = _React$useState6[1];

    var generateAdvice = function generateAdvice(e) {
        e.preventDefault();

        fetch(adviceSlipAPIurl, { cache: "no-cache" }).then(function (res) {
            return res.json();
        }).then(function (newSlip) {
            setSlip(newSlip);
        }).catch(function (err) {
            console.log(err);
        });

        setIsBtnClicked(true);
        setInProp(!inProp);

        var timeoutId = setTimeout(function () {
            setIsBtnClicked(false);
        }, 1000);

        return function () {
            return clearTimeout(timeoutId);
        };
    };

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "advice" },
            React.createElement(
                ReactTransitionGroup.CSSTransition,
                {
                    "in": inProp,
                    timeout: 2000,
                    classNames: "id-transition" },
                React.createElement(AdviceId, { id: slip.slip.id })
            ),
            React.createElement(
                ReactTransitionGroup.CSSTransition,
                {
                    "in": inProp,
                    timeout: 2000,
                    classNames: "advice-transition" },
                React.createElement(AdviceText, { text: slip.slip.advice })
            )
        ),
        React.createElement("div", { className: "divider" }),
        React.createElement(
            "button",
            { className: "dice-btn", onClick: generateAdvice },
            React.createElement("img", { src: "images/icon-dice.svg", alt: "Generate advice", className: isBtnClicked ? "roll-dice" : "" })
        )
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById("generator"));