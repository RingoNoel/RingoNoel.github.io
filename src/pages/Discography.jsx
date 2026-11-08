import React from "react";
function Discography() {
  const albums = [
    {
      year: "2003",
      title: "RADWIMPS",
      jpTitle: "セルフタイトル — 1st",
      type: "Studio Album",
      cover: "/images/61rENFMZW6L._AC_SL1050_-7a0294.jpg",
    },
    {
      year: "2006",
      title: "RADWIMPS 3",
      jpTitle: "無人島に持っていき忘れた一枚",
      type: "Studio Album",
      cover: "/images/jk_mujinto-1-56fe72.jpg",
    },
    {
      year: "2009",
      title: "Altocolony's Theorem",
      jpTitle: "アルトコロニーの定理",
      type: "Studio Album",
      cover: "/images/jk_20090311-1-1267fd.jpg",
    },
    {
      year: "2011",
      title: "Zettai Zetsumei",
      jpTitle: "絶体絶命",
      type: "Studio Album",
      cover: "/images/jk_zz-1-ac4f18.jpg",
    },
    {
      year: "2016",
      title: "Your Name.",
      jpTitle: "君の名は。",
      type: "Original Soundtrack",
      cover: "/images/kiminonaha_jk_tsujo_tw-1-f9e445.jpg",
    },
    {
      year: "2016",
      title: "Ningen Kaika",
      jpTitle: "人間開花",
      type: "Studio Album",
      cover: "/images/UPCH-29241-cf432e.jpg",
    },
    {
      year: "2018",
      title: "ANTI ANTI GENERATION",
      jpTitle: "10th Studio Album",
      type: "Studio Album",
      cover: "/images/aag_jk_disco-1-78c27e.jpg",
    },
    {
      year: "2019",
      title: "Weathering With You",
      jpTitle: "天気の子 complete version",
      type: "Original Soundtrack",
      cover: "/images/tenkinoko-H1_final_rgb-1-b8e1f4.jpg",
    },
    {
      year: "2021",
      title: "FOREVER DAZE",
      jpTitle: "11th Studio Album",
      type: "Studio Album",
      cover: "/images/CD_booklet_H1_small-10ab66.jpg",
    },
  ];

  const highlights = [
    {
      title: "From Indie Rock to Cinematic Scale",
      text: "The discography moves from raw early guitar records into albums shaped by orchestration, electronic textures, and film-scale emotional pacing.",
    },
    {
      title: "Soundtracks as Turning Points",
      text: "Your Name., Weathering With You, and Suzume did not only expand the band's audience; they changed how many global listeners first encountered RADWIMPS.",
    },
    {
      title: "A Restless Album Identity",
      text: "Even after international soundtrack success, the band continued to release studio albums that resisted becoming a fixed formula.",
    },
  ];

  return (
    <main>
      <section className="band band-dark" data-bg="maastricht">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">作品集</span>
            <h1>Discography</h1>
            <p className="lead">
              Eleven studio albums, three film soundtracks, countless EPs and singles —
              here are the chapters that mattered most.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-mid" data-bg="charcoal">
        <div className="container">
          <div className="album-grid">
            {albums.map((album) => (
              <article className="album-card reveal" key={album.title}>
                <div className="album-cover">
  {album.cover ? (
    <img className="album-photo" src={album.cover} alt={album.title} />
  ) : (
    <>
      <div className="album-year-large">{album.year}</div>
      <div className="album-type">{album.type}</div>
    </>
  )}
</div>

                <div className="album-info">
                  <p className="year">{album.year}</p>
                  <h3>{album.title}</h3>
                  <p className="jp-title">{album.jpTitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-light" data-bg="azureish">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">読み方 — HOW TO READ IT</span>
            <h1>More Than a List of Albums</h1>
          </div>

          <div className="legacy-grid reveal">
            {highlights.map((item) => (
              <div className="legacy-card" key={item.title}>
                <div className="num">♪</div>
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

export default Discography;