import { Component } from "preact";
import "tachyons";

import GithubCorner from "react-github-corner";

import BoobList from "./boob-list";
import { Errors } from "./errors";
import { ContentBefore, ContentAfter, ContentAboutMe, Footer } from "./content";

export default class App extends Component {
  constructor() {
    super();
    this.state = { error: false, messages: [] };
  }

  signalError = message => {
    this.setState(({ messages }, state) => ({
      error: true,
      messages: messages.concat(message)
    }));
  };

  render(props, state) {
    return (
      <div id="app">
        <div class="mw7 mw8-l center pa3 ph5-ns mv3 mv5-ns cf">
          <ContentBefore />
          <Errors {...state} />
          <BoobList signalError={this.signalError} />
          <ContentAfter />
          <ContentAboutMe />
        </div>
        <Footer />
        <GithubCorner href="https://github.com/raulk/boobies-on-the-blockchain" />
      </div>
    );
  }
}
