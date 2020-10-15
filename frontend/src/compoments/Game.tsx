import React, { ChangeEvent } from 'react';
import { BoxContainer, CommandsBox, ResultBox, Title } from './GameStyles';

type State = {
    commands: string;
    result: string;
}

export default class Game extends React.Component<{}, State> {

    state = {
        commands: '',
        result: ''
    };

    componentDidMount() {
        this.loadExample()
            .then(example => this.setState({ commands: example}));
    }

    loadExample = () => {
        return fetch('/api/example')
            .then(response => response.text());
    };

    setCommands = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ commands: event.target.value });
    };

    playGame = () => {
        const queryString = new URLSearchParams({
            commands: this.state.commands
        }).toString();

        const url = `/api/play?${queryString}`;
        fetch(url)
            .then(response => response.text())
            .then(result => this.setState({ result }));
    };

    render() {
        const { commands, result } = this.state;
        return (
            <div className="container">
                <Title>Toy Robot</Title>
                <BoxContainer className="row">
                    <div className="one-half column">
                        <CommandsBox value={commands} onChange={this.setCommands} />
                    </div>
                    <div className="one-half column">
                        <ResultBox>{ result }</ResultBox>
                    </div>
                </BoxContainer>
                <div className="row">
                    <button onClick={this.playGame}>Play game</button>
                </div>
            </div>
        );
    }
};
