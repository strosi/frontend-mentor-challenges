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
            "slip_id": "117",
            "advice": "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        }
    };
    const [advice, setAdvice] = React.useState(initAdvice);

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
    }

    return (
        <div>
            <div className="advice">
                <AdviceId id={advice.slip.id} />
                <AdviceText text={advice.slip.advice} />
            </div>
            <div className="divider"></div>
            <button className="dice-btn" onClick={generateAdvice}>
                <img src="images/icon-dice.svg" alt="Generate advice" />
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("generator")
);