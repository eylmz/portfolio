import * as React from 'react';
import ReactTypist from 'react-typist';

export interface TypistProps {
  interval?: number;
  words: string[];
}

export interface TypistStates {
  index: number;
  typing: boolean;
}

export class Typist extends React.Component<TypistProps, TypistStates>{
  state = {
    index: 0,
    typing: true
  };
  _timeout?: number;
  _isMounted = false;

  constructor(props: any) {
    super(props);

    this.onTypingDone = this.onTypingDone.bind(this);
    this.showNext = this.showNext.bind(this);
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  }

  onTypingDone() {
    this.setState({ typing: false });
    this._timeout = window.setTimeout(this.showNext, this.props.interval || 500);
  }

  showNext() {
    const { words } = this.props;
    this.setState(oldState => ({
      typing: true,
      index: (oldState.index + 1) % words.length
    }));
  }

  render() {
    const { words } = this.props;
    const { index, typing } = this.state;
    const word = words[index];
    const backSpaceCount = word.length;

    return (typing ?
      <ReactTypist onTypingDone={this.onTypingDone}>
        <strong>{word}</strong>
        <ReactTypist.Backspace count={backSpaceCount} delay={500}/>
      </ReactTypist> : <strong>|</strong>
    );
  }
}
