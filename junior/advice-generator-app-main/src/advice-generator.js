function AdviceId({ id }) {
    return (
        <p className="advice__id">Advice #<span>{id}</span></p>
    );
}

function AdviceText({ text }) {
    return (
        <div className="advice__text-holder">
            <p className="advice__text">
                <q>{text}</q>
            </p>
        </div>
    );
}

function App() {
    const adviceAPIurl = "https://api.adviceslip.com/advice";
    const initAdvice = {
        "slip": {
            "id": "117",
            "advice": "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        }
    };
    const [advice, setAdvice] = React.useState(initAdvice);
    const [isBtnClicked, setIsBtnClicked] = React.useState(false);
    const [inProp, setInProp] = React.useState(false);

    const generateAdvice = (e) => {
        e.preventDefault();

        fetch(adviceAPIurl)
            .then(res => res.json())
            .then(advice => {
                setAdvice(advice);
            })
            .catch(err => {
                console.log(err);
            });

        setIsBtnClicked(true);
        setInProp(!inProp);

        const timeoutId = setTimeout(() => {
            setIsBtnClicked(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }

    return (
        <div>
            <div className="advice">
                <ReactTransitionGroup.CSSTransition
                    in={inProp}
                    timeout={2000}
                    classNames="id-transition">

                    <AdviceId id={advice.slip.id} />

                </ReactTransitionGroup.CSSTransition>

                <ReactTransitionGroup.CSSTransition
                    in={inProp}
                    timeout={2000}
                    classNames="advice-transition">
                
                    <AdviceText text={advice.slip.advice} />

                </ReactTransitionGroup.CSSTransition>
            </div>
            <div className="divider"></div>
            <button className="dice-btn" onClick={generateAdvice}>
                <img src="images/icon-dice.svg" alt="Generate advice" className={isBtnClicked ? "roll-dice" : ""} />
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("generator")
);