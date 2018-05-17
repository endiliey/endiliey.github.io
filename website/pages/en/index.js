/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('elogo.gif')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <a
              className="social-link fa fa-twitter fa-2x fa-fw"
              href="https://twitter.com/endiliey"
              target="_blank"
            />
            <a
              className="social-link fa fa-linkedin fa-2x fa-fw"
              href="https://www.linkedin.com/in/endiliey"
              target="_blank"
            />
            <a
              className="social-link fa fa-instagram fa-2x fa-fw"
              href="https://instagram.com/endiliey"
              target="_blank"
            />
            <a
              className="social-link fa fa-github fa-2x fa-fw"
              href="https://github.com/endiliey"
              target="_blank"
            />
            <a
              className="social-link fa fa-facebook fa-2x fa-fw"
              href="https://facebook.com/endijr/"
              target="_blank"
            />
            <a
              className="social-link fa fa-quora fa-2x fa-fw"
              href="https://www.quora.com/profile/Endilie-Yacop-Sucipto/"
              target="_blank"
            />
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background="light">
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="threeColumn">
    {[
      {
        content: (
          `I like to share my knowledge and experiences. Be it in [quora](https://www.quora.com/profile/Endilie-Yacop-Sucipto)
          or my [blog](/blog)`
        ),
        image: imgUrl('Endilie_1.png'),
        imageAlign: 'top',
        title: 'Writer',
      },
      {
        content: (
          `I am an undergraduate student at Nanyang Technological University (2019)`
        ),
        image: imgUrl('Endilie_2.png'),
        imageAlign: 'top',
        title: 'Student',
      },
      {
        content: (
          `My passion is in software development.
          Some of my projects are hosted at [GitHub](https://github.com/endiliey)`
        ),
        image: imgUrl('Endilie_3.png'),
        imageAlign: 'top',
        title: 'Developer',
      }
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: (
          `I am an undergraduate student at Nanyang Technological University (2019). I love working on Software projects, especially the one with lot of challenges. `
        ),
        image: imgUrl('Endilie.png'),
        imageAlign: 'left',
        title: 'About Me                                ',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection">
      <h2>{"Internship Experiences"}</h2>
      <div className="logos">{showcase}</div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
