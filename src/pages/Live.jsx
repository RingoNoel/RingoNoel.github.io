import React from "react";
function Live() {
  const tours = [
    {
      year: "2008",
      title: "RADWIMPS GRAND PRIX 2008",
      place: "JAPAN ARENA TOUR · 国内アリーナ",
      text: "The first arena-scale tour, marking the band's transition from clubs to bigger rooms — and the moment their fanbase realised how many of them there were.",
    },
    {
      year: "2011",
      title: "絶体絶命 TOUR",
      place: "JAPAN HALLS & ARENAS",
      text: "A theatrical tour built around the album of the same name, with stripped-down moments that turned big rooms into living rooms.",
    },
    {
      year: "2015",
      title: "×と○と君と",
      place: "JAPAN STADIUM RUN",
      text: "The tour where Yamaguchi stepped away from live drumming due to focal dystonia, and where Mizuki Mori's drumming first became part of the live identity.",
    },
    {
      year: "2017",
      title: "HUMAN BLOOM TOUR 2017",
      place: "JAPAN ARENA TOUR · TOKYO DOME",
      text: "Following Your Name., the band sold out Tokyo Dome — for many fans, the symbolic moment when RADWIMPS became a stadium-scale band.",
    },
    {
      year: "2018",
      title: "ANTI ANTI GENERATION TOUR",
      place: "ASIA RUN — TAIPEI · SHANGHAI · SEOUL · HONG KONG",
      text: "The first major Asia-wide tour. Crowds outside Japan sang every word — proof of how far the music had travelled on the back of the soundtrack.",
    },
    {
      year: "2019",
      title: "RADWIMPS WORLD TOUR 2019",
      place: "N. AMERICA · EUROPE · ASIA",
      text: "A genuinely global tour — Los Angeles, New York, London, Paris, Berlin, Bangkok, Singapore, Jakarta — riding the wave of Weathering With You's release.",
    },
    {
      year: "2021",
      title: "VOID FEAT. TIELLE & ENA FUJITA",
      place: "VIRTUAL CONCERT",
      text: "During the pandemic, the band experimented with cinematic, online-only shows — a different language of live performance for a year that didn't have one.",
    },
    {
      year: "2023",
      title: "FOREVER DAZE TOUR · WORLD RUN",
      place: "N. AMERICA · EUROPE · ASIA · OCEANIA",
      text: "A return to global touring after the pandemic, including major festival slots and headline shows for an audience that had spent years waiting.",
    },
    {
      year: "NOW",
      title: "The next tour",
      place: "SOMEWHERE NEAR YOU",
      text: "The band continues to tour both Japan and the world. For up-to-date dates, visit the official channels.",
    },
  ];

  return (
    <main>
      <section className="band band-dark" data-bg="maastricht">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">ライブ・ツアー</span>
            <h1>Live & Tours</h1>
            <p className="lead">
              From sweaty 200-cap rooms in Yokohama to the floor of Tokyo Dome,
              RADWIMPS' live show has always been the most direct line between songs
              and skin.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-mid" data-bg="charcoal">
        <div className="container">
          <div className="live-list">
            {tours.map((tour) => (
              <article className="live-item reveal" key={`${tour.year}-${tour.title}`}>
                <div className="when">{tour.year}</div>
                <div>
                  <h3>{tour.title}</h3>
                  <p className="place">{tour.place}</p>
                  <p>{tour.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-light" data-bg="azureish">
        <div className="container">
          <div className="quote-block reveal">
            <p className="quote">
              “A RADWIMPS show feels less like a concert and more like 50,000 people
              discovering, simultaneously, that a private feeling has always been a shared one.”
            </p>
            <p className="source">— ファンの声</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Live;