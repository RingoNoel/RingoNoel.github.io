import React from "react";
function Band() {
  const timelineItems = [
    {
      year: "2001",
      title: "Four boys, one rehearsal room",
      text: `RADWIMPS forms in Yokohama, founded by high-school friends. The name — a slangy mash-up of "rad" and "wimps" — captures their early identity: a band that's "cool weaklings", soft and loud at once.`,
    },
    {
      year: "2003",
      title: "Self-titled debut album",
      text: "The first studio album lands on indie label Newtraxx, written and recorded while the members are still teenagers. It's raw, lo-fi, and already unmistakably them.",
    },
    {
      year: "2005",
      title: "Major-label leap with EMI Music Japan",
      text: "A move from indie to major label arrives with «25コ目の染色体» — a single that starts to define the band's signature collision of intimacy and complexity.",
    },
    {
      year: "2006",
      title: '"有心論" / Yushinron breaks them open',
      text: "From the third album, the song becomes one of their first cultural touchstones — a math-rock prayer for losing yourself in someone else.",
    },
    {
      year: "2011",
      title: "«絶体絶命» — Stadium-sized ambition",
      text: "The seventh album — recorded in part in London — sees the band stretch into cinematic, orchestrated territory while losing none of its bite.",
    },
    {
      year: "2016",
      title: "Your Name. — the year everything changed",
      text: "RADWIMPS scores Makoto Shinkai's «君の名は。». The soundtrack — featuring «前前前世», «スパークル», «なんでもないや» — becomes a global phenomenon. The band's audience suddenly stretches from Tokyo to Toronto.",
    },
    {
      year: "2018",
      title: "«ANTI ANTI GENERATION»",
      text: "An album that refuses to repeat the soundtrack formula — full of pop swerves, hip-hop features, and the band insisting on staying restless.",
    },
    {
      year: "2019",
      title: "Weathering With You",
      text: "A second Shinkai collaboration. «愛にできることはまだあるかい» becomes a generational ballad — a love letter to a drowning world.",
    },
    {
      year: "2022",
      title: "Suzume — composing for the wind",
      text: "A third Shinkai score, now co-composed with Kazuma Jinnouchi. Title track «すずめ» (with Toaka) sits at the center of a film about doors, grief, and growing up.",
    },
    {
      year: "NOW",
      title: "Still writing the next chapter",
      text: "Touring globally, scoring films, releasing music in formats that didn't exist when the band started. Twenty years on, RADWIMPS is still the diary of a generation — one that refuses to stop changing its mind.",
    },
  ];

  const legacyItems = [
    {
      number: "∞",
      title: "The Shinkai Effect",
      text: "Their soundtracks blurred the line between band and film score, helping redefine how Japanese cinema scores can sound — emotional, contemporary, lyrical.",
    },
    {
      number: "語",
      title: "Lyrics as Literature",
      text: "Yojiro Noda's writing — physics metaphors, internal rhymes, naked confessions — has spawned theses, fan translations, and a tattoo culture all its own.",
    },
    {
      number: "世",
      title: "A Global Diary",
      text: "From Tokyo Dome to Coachella sing-alongs, the band's audience has grown into a worldwide network of listeners who treat each release like a letter from home.",
    },
  ];

  return (
    <main>
      <section className="band band-dark" data-bg="maastricht">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">バンドの軌跡</span>
            <h1>The Band</h1>
            <p className="lead">
              Twenty years, eleven albums, and a quiet revolution in Japanese rock —
              told as a timeline of small, almost-accidental moments.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-mid" data-bg="charcoal">
        <div className="container">
          <div className="timeline">
            {timelineItems.map((item) => (
              <div className="timeline-item reveal" key={`${item.year}-${item.title}`}>
                <div className="year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-light" data-bg="azureish">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">文化的影響 — LEGACY</span>
            <h1>Why It Matters</h1>
          </div>

          <div className="legacy-grid reveal">
            {legacyItems.map((item) => (
              <div className="legacy-card" key={item.title}>
                <div className="num">{item.number}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Band;