import { Component } from "preact";
import ScrollableAnchor from "react-scrollable-anchor";
import SocialIcons from "react-social-icons";

export const ContentBefore = () =>
  <div class="mb4">
    <h4 class="f5 light-grey white bg-light-red pv3 ph2 ttu tc mb4">
      This is real data from the Ethereum mainnet
    </h4>
    <span class="outline bg-white ttu f5 ph3 pv1">experiment</span>
    <h1 class="f1-ns f2 mt4 mb5-ns mb4">Boobies on the Ethereum blockchain</h1>

    <p class="lh-copy bb b--black-10 pb3 lh-copy">
      <strong class="ttu ph2 pv1 bg-dark-blue mr2 white">
        Wait a minute, what?
      </strong>&nbsp;
      <span>
        This is an experiment to demonstrate that it is possible to&nbsp;
        <strong>
          store arbitrary data forever on the Ethereum blockchain{" "}
        </strong>
        at a very low cost and very easily, as transaction input data. Once
        stored, it cannot be deleted, so be careful.
      </span>
    </p>

    <p class="lh-copy bb b--black-10 pb3">
      <strong class="ttu ph2 pv1 bg-gold mr2 white">Why boobs?</strong>&nbsp;
      <span>
        <strong>Immutability is a double-edged sword.</strong> Transaction data
        stays forever, which is good.&nbsp; But a wicked mind could leverage
        immutability to store harmful images or texts about a third party
        FOREVER, with the goal of inflicting social damage.
      </span>
      <p>
        Once stored, it is irreversible.
        <strong>
          {" "}And it interferes with the{" "}
          <a
            class="link dim"
            href="https://www.wikiwand.com/en/Right_to_be_forgotten"
            class="link dim"
            target="_blank"
          >
            Right to be forgotten
          </a>.
        </strong>
      </p>
      <p class="mb0">
        Think about a spiteful vengeance in the context of a lovers' spat or a
        relationship break-up.&nbsp;
        <strong>That's why I've used artistic boobs, as a fun analogy.</strong>
      </p>
    </p>

    <p class="lh-copy bb b--black-10 pb3">
      <strong class="ttu ph2 pv1 bg-green mr2 white">How?</strong>&nbsp;
      <span>
        <strong>
          Ethereum transactions can include input data, encoded as a
          hexadecimal.
        </strong>{" "}
        Storing data in smart contracts is expensive and prohibitive. But
        transaction input data is cheap. Storing these images cost almost less
        than $1 each.
      </span>
      <p class="mb0">
        To understand these transactions in more detail, continue reading below.
      </p>
    </p>

    <a
      class="inline-flex items-center grow link ph3 pv2 mb2 dib white bg-dark-pink shadow-3 f4 near-white"
      href="#boobs"
    >
      <span>View the boobs</span>
      <svg
        fill="currentColor"
        class="dib h2 w2 ml2 o-80"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path d="M7.963 11.98l-4.91-2.9L7.963 16l4.913-6.92-4.914 2.9zM8.037 0l-4.91 8.148 4.91 2.903 4.91-2.9L8.037 0z" />
      </svg>
    </a>
  </div>;

export const ContentAfter = () =>
  <ScrollableAnchor id={"after"}>
    <div class="mb4">
      <h2 class="f2">About the experiment</h2>

      <p class="lh-copy bb b--black-10 pa2">
        <strong class="ttu ph2 pv1 bg-dark-red mr2 white">
          The steps
        </strong>&nbsp; This experiment was performed as follows:
        <ol class="ol">
          <li>
            <strong class="bg-light-gray ph2 pv1">Initial transfer:</strong> I
            transferred a small amount of ETH to an address I control. Its only
            purpose is to be spent as gas.
          </li>
          <li>
            <strong class="bg-light-gray ph2 pv1">Process images:</strong> After
            spending 1 hour online looking for graceful boobs, I cropped and
            compressed 4 images. I saved them as non-progressive jpegs. The
            difficulty was to strike a balance between keeping the boob
            distinguishable and creating lighter images to save on gas.
          </li>
          <li>
            <strong class="bg-light-gray ph2 pv1">Hex dump:</strong> Using the{" "}
            <code>xxd -p</code> command on macOS, I created hex dumps of each
            image.
          </li>
          <li>
            <strong class="bg-light-gray ph2 pv1">Transactions:</strong> The TXs
            needed to carry the hex dump as input data, so I crafted the
            transactions appropriately.
          </li>
          <li>
            <strong class="bg-light-gray ph2 pv1">Gas:</strong> I adjusted the
            gas in accordance with the number of input bytes of each image hex
            dump.
          </li>
          <li>
            <strong class="bg-light-gray ph2 pv1">
              Sign & broadcast:
            </strong>&nbsp; Using{" "}
            <a
              class="link dim"
              href="https://www.myetherwallet.com"
              target="_blank"
            >
              MyEtherWallet
            </a>&nbsp;
            <i>
              (never use links to go to MEW, always type it yourself in the
              address bar to avoid phishing attacks),
            </i>{" "}
            I signed and broadcast the TX to the network, once per image/TX.
          </li>
          <li>
            <strong class="bg-light-gray ph2 pv1">Cleanup: </strong> Once all
            transactions were confirmed to my satisfaction, I transferred the
            remaining ETH out of that account. The balance is now 0,{" "}
            <strong>but the boobs will stay forever on the blockchain</strong>.
          </li>
        </ol>
      </p>

      <p class="lh-copy bb b--black-10 pa2">
        <strong class="ttu ph2 pv1 bg-near-black mr2 white">
          How this page was built
        </strong>&nbsp; This page is built with{" "}
        <a class="link dim" href="https://preactjs.com/" target="_blank">
          Preact
        </a>{" "}
        and&nbsp;
        <a class="link dim" href="http://tachyons.io/" target="_blank">
          Tachyons.css
        </a>.
        <p>
          It has no backend and it hits the{" "}
          <a class="link dim" href="https://etherscan.io" target="_blank">
            etherscan.io
          </a>{" "}
          and&nbsp;
          <a
            class="link dim"
            href="https://www.cryptocompare.com/"
            target="_blank"
          >
            Cryptocompare
          </a>{" "}
          APIs directly. So if the data doesn't load, there's probably something
          wrong with those services, or your IP/browser/network has been
          blacklisted.
        </p>
        <p>
          I've used the{" "}
          <strong>
            <code>Window.btoa</code>
          </strong>{" "}
          function in conjunction with{" "}
          <strong>
            <code>String.fromCharCode</code>
          </strong>{" "}
          to convert the hex data coming back from the{" "}
          <strong>
            GETH proxy at{" "}
            <a class="link dim" href="https://etherscan.io" target="_blank">
              etherscan.io
            </a>
          </strong>. Nothing fancy.
        </p>
        <p>
          This site is a{" "}
          <a
            href="https://developers.google.com/web/progressive-web-apps/"
            target="_blank"
            class="link dim"
          >
            Progressive Web Application
          </a>, so if you have a modern Android phone and are using Chrome,
          you'll be prompted to install it to your home screen. That way, you
          can return to browse boobies easily with just one tap! Woohoo!
        </p>
      </p>

      <p class="lh-copy pa2">
        <strong class="ttu ph2 pv1 bg-purple mr2 white">
          Want other boobs to be featured?
        </strong>&nbsp; Send a transaction to this address:
        <a
          class="link dim"
          href="https://etherscan.io/address/0x65630100a5864fb94cd998b6d4c2ca2acba14127"
          target="_blank"
          class="link dim"
          onClick={() =>
            window.ga("send", "event", "after", "click", "donation_address")}
        >
          <pre class="bg-white pa2 tc f4">
            0x65630100a5864fb94cd998b6d4c2ca2acba14127
          </pre>
        </a>
        <p>
          Set the input data to the hex-encoded jpeg image.{" "}
          <strong>Only non-obscene images will be featured.</strong>
        </p>
        <p class="mb0">
          If you enjoyed this experiment, feel free to send extra ETH inside
          that transaction as a donation ;-)
        </p>
      </p>
    </div>
  </ScrollableAnchor>;

const urls = [
  "https://twitter.com/raulvk",
  "https://linkedin.com/in/raulkripalani",
  "https://medium.com/@raulk",
  "https://github.com/raulk/boobies-on-the-blockchain"
];

export const ContentAboutMe = () =>
  <ScrollableAnchor id={"author"}>
    <div class="mb4 ph4 bg-white cf ba b--light-silver">
      <h2 class="f2">Interesting? Hit me up!</h2>
      <div class="fl w-30-ns w-100 pa2">
        <a
          href="https://linkedin.com/in/raulkripalani"
          target="_blank"
          class="cf"
          onClick={() => window.ga("send", "event", "after", "click", "photo")}
        >
          <img class="db w-100 br-100 shadow-3" src="/assets/rk.jpg" />
        </a>
      </div>
      <div class="fl w-70-ns w-100 pl4-ns">
        <SocialIcons urls={urls} class="mb4" />
        <p class="lh-copy pb3 lh-copy">
          <p>
            My name is <strong>Raúl Kripalani</strong>. I'm working hard to
            launch&nbsp;
            <a
              href="https://consensusx.com"
              target="_blank"
              class="link dim fw5"
              onClick={() =>
                window.ga("send", "event", "after", "click", "consensusx")}
            >
              consensusX
            </a>, a joint effort to experiment with, consult and advise on
            Blockchain awareness and adoption.
          </p>
          <p>
            I'm a distributed systems engineering, PMC and Committer in
            the&nbsp;
            <a href="https://apache.org" target="_blank" class="link dim fw5">
              Apache Software Foundation
            </a>. I've worked for companies like Audi, Richemont, Telenor, Red
            Hat, Atos, GridGain, TOP-TOY, etc. in the past.
          </p>
          <p class="black fw5">
            I'm open to opportunities in the Blockchain space, so if you've got
            an exciting project, get in touch!
          </p>
        </p>
      </div>
    </div>
  </ScrollableAnchor>;

export const Footer = () =>
  <div class="bg-near-black w-100 db pa5 tc near-white">
    <p>© RAÚL KRIPALANI</p>
    <p>
      <a
        class="white dim link"
        href="https://etherscan.io/address/0x65630100a5864fb94cd998b6d4c2ca2acba14127"
        target="_blank"
        onClick={() => window.ga("send", "event", "footer", "click", "address")}
      >
        Donations: 0x65630100a5864fb94cd998b6d4c2ca2acba14127
      </a>
    </p>
    <div class="bt b--gray o-80">
      <p>
        <a
          class="white dim link"
          href={urls[0]}
          target="_blank"
          onClick={() =>
            window.ga("send", "event", "after", "click", "twitter")}
        >
          Twitter
        </a>
      </p>
      <p>
        <a
          class="white dim link"
          href={urls[1]}
          target="_blank"
          onClick={() =>
            window.ga("send", "event", "after", "click", "linkedin")}
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a
          class="white dim link"
          href={urls[2]}
          target="_blank"
          onClick={() => window.ga("send", "event", "after", "click", "medium")}
        >
          Medium
        </a>
      </p>
      <p>
        <a
          class="white dim link"
          href={urls[3]}
          target="_blank"
          onClick={() => window.ga("send", "event", "after", "click", "github")}
        >
          Github
        </a>
      </p>
    </div>
  </div>;
