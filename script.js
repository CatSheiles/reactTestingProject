// 1. Display a name or anything really
const name = 'Cat'

ReactDOM.render(
    <div>
    <h1>Hello, {name}!</h1>
    <h1>Hello, {name}!</h1>
    </div>,
    document.getElementById('app')
);

// 2. Display a clock that tells time & update constantly by millisec
    //benefit of using this method is once rendered, only update is the change (ie millisec) so performance enhancement
function tick(){
    const element = (
        <div>
            <h1>Hello, Time Clock!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <Welcome city="SurfersP" />
            <Clock />
            <Button></Button>
        </div>
    );
    ReactDOM.render(element, document.getElementById('app'));
}

setInterval(tick, 1000);

// 3. Components & props - team useful - easily split each stand alone component
    //components, props cant change, just displayed
function Welcome(props){
    return <h1>You are in, {props.city}</h1>
}

// 4. State - on the otherhand can change!
//changing how the clock works

class Clock extends React.Component {
    constructor(props) {
        super(props);           //super runs the magical react in background-just run super!
        this.state = {date: new Date()};
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState( {date: new Date()} );
    }

    render() {
        return (
            <div>
                <h1>Hello, Clock2!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// 5.Handling events in a function (if handling in a class it is a this.activateLasers)
function activateLasers() {
    console.log("fire");
}

function Button(props)
{
    return <button onClick= {activateLasers} >Activate Lasers</button>

}

// singleton
class Player{
    static hasBeenCreated = false;
    createPlayer()
    {
        if(hasBeenCreated) return;

        console.log('created player');
        hasBeenCreated = true;
    }
}

let player = new Player();
player.createPlayer();

let player2 = new Player();
player.createPlayer();
