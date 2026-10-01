"use client";

import { useState } from "react";

const topics = [
  { id: "web", number: "01", label: "Computer science", title: "Web Development", person: "Robert", accent: "mint", icon: "</>", intro: "Turning ideas into useful, accessible experiences that live in the browser.", points: ["Front-end craft", "Back-end logic", "Human-centered design"], question: "How do we make the web feel effortless?" },
  { id: "ai", number: "02", label: "Computer science", title: "Artificial Intelligence", person: "Brandon", accent: "coral", icon: "✦", intro: "How much did you know already? Do you want to know more?", points: ["ChatGPT", "Gemini", "Claude"], question: "How do you decide what to tell me when I ask you things?" },
  { id: "games", number: "03", label: "Computer science", title: "Video Games", person: "Christhian", accent: "yellow", icon: "◈", intro: "Understand how games turn player actions into interactive experiences.", points: ["Programming", "Algorithms", "Game Design"], question: "How does Computer Science turn a player's actions into interactions and experiences?" },
  { id: "communication", number: "04", label: "Communication", title: 'The "us" of identity ', person: "Eli", accent: "blue", icon: "◌", intro: "Communication helps us understand how our interactions are shaped by our group and cultural identities.", points: ["Cross-Cultural Interaction", "Group identity", "Relationships"], question: "How do cultural group identities shape our relationships?" },
];

function TopicPanel({ topic }) {
  return <article className={`topic-panel topic-panel--${topic.accent}`}>
    <div className="topic-panel__topline"><span>{topic.label}</span><span>{topic.number} / 04</span></div>
    <div className="topic-panel__icon" aria-hidden="true">{topic.icon}</div>
    <p className="topic-panel__eyebrow">{topic.person} presents</p>
    <h2>{topic.title}</h2>
    <p className="topic-panel__intro">{topic.intro}</p>
    <ul>{topic.points.map((point) => <li key={point}>{point}</li>)}</ul>
    <div className="topic-panel__question"><span>Guiding question</span><strong>{topic.question}</strong></div>
  </article>;
}

export default function Home() {
  const [activeTopic, setActiveTopic] = useState("web");
  const active = topics.find((topic) => topic.id === activeTopic);

  return( <main>
    <nav className="site-nav" aria-label="Main navigation"><a className="wordmark" href="#top"><span>04</span> / one group</a><a className="nav-link" href="#topics">Explore our angles <span aria-hidden="true">↘</span></a></nav>
    <section className="hero" id="top">
      <div className="hero__copy"><p className="kicker"><span className="kicker__line" /> Presentation handout</p><h1>Many paths.<br /><em>One</em> group.</h1><p className="hero__description">Four people, two majors, and the ideas that bring our work together.</p><a className="scroll-cue" href="#topics"><span>Scroll to explore</span><span className="scroll-cue__arrow">↓</span></a></div>
      <div className="hero__stamp" aria-label="Three computer science majors and one communication major"><span className="stamp__orbit stamp__orbit--one" /><span className="stamp__orbit stamp__orbit--two" /><strong>03<br />CS</strong><span className="stamp__plus">+</span><strong>01<br />COM</strong></div><div className="hero__index">01 <span /> 04</div>
    </section>
    <section className="topics" id="topics">
      <div className="section-heading"><div><p className="kicker"><span className="kicker__line" /> The breakdown</p><h2>Three lenses<br /><em>on the same field.</em></h2></div><p className="section-heading__note">Pick an area to see what we have to offer you.</p></div>
      <div className="topic-tabs" role="tablist" aria-label="Presentation topics">{topics.map((topic) => <button className={`topic-tab topic-tab--${topic.accent} ${activeTopic === topic.id ? "is-active" : ""}`} key={topic.id} onClick={() => setActiveTopic(topic.id)} role="tab" aria-selected={activeTopic === topic.id} aria-controls="active-topic"><span>{topic.number}</span><strong>{topic.title}</strong><i aria-hidden="true">↗</i></button>)}</div>
      <div id="active-topic" role="tabpanel" className="active-topic"><TopicPanel topic={active} /><aside className="throughline"><p className="kicker"><span className="kicker__line" /> The throughline</p><p>Different tools. Different questions. <strong>Still, we are all making ways for people to connect with ideas.</strong></p><span className="throughline__mark" aria-hidden="true">+</span></aside></div>
    </section>
    <footer className="site-footer"><span>Group presentation / 2026</span><span>Stay curious <b>↗</b></span></footer>
  </main>);
}
