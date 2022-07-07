import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
    // slightly dirty to do this from the parent component, but it needs to be done exactly once, so not EmojiResultRow.componentDidMount:
    this.clipboard.on('success', EmojiResultRow.animateFromEvent);
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}
