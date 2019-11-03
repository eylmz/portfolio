import * as React from 'react';
import ReactTypist from 'react-typist';
import PropTypes from 'prop-types';

export class Typist extends React.Component{
  state = {
    index: 0,
    typing: true
  };
  timeout = null;

  constructor(props){
    super(props);

    this.onTypingDone = this.onTypingDone.bind(this);
    this.showNext = this.showNext.bind(this);
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  onTypingDone() {
    this.setState({ typing: false });
    this.timeout = setTimeout(this.showNext, this.props.interval || 500);
  }

  showNext(){
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
      </ReactTypist>: <strong>|</strong>
    );
  }
}

Typist.propTypes = {
  words: PropTypes.array.isRequired,
  timeout: PropTypes.number
};
