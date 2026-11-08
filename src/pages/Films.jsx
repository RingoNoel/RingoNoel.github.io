import React from "react";
function Films() {
  const films = [
    {
      year: "2016",
      title: "Your Name.",
      jpTitle: "君の名は。 — Kimi no Na wa.",
      imageLabel: "YOUR NAME",
      image: "/images/kiminonaha_jk_tsujo_tw-1-f9e445.jpg",
      textOne:
        "The collaboration that changed everything. Director Makoto Shinkai approached RADWIMPS to write the score before the film was finished — songs and animation evolved together.",
      textTwo:
        "The result was a soundtrack that did not just accompany the film but felt inseparable from it. Tracks like Zenzenzense, Sparkle, and Nandemonaiya became emotional entry points for global audiences.",
      songs: ["夢灯籠", "前前前世", "スパークル", "なんでもないや"],
    },
    {
      year: "2019",
      title: "Weathering With You",
      jpTitle: "天気の子 — Tenki no Ko",
      imageLabel: "WEATHERING",
      image: "/images/tenkinoko-H1_final_rgb-1-b8e1f4.jpg",
      textOne:
        "The follow-up. Where Your Name. was about distance and longing, Weathering With You was about love in a world that will not stop raining — both literally and metaphorically.",
      textTwo:
        "The soundtrack became bigger, more cinematic, and more openly romantic, matching a story about climate, sacrifice, and emotional uncertainty.",
      songs: ["愛にできることはまだあるかい", "グランドエスケープ", "大丈夫", "祝祭"],
    },
    {
      year: "2022",
      title: "Suzume",
      jpTitle: "すずめの戸締まり — Suzume no Tojimari",
      imageLabel: "SUZUME",
      image: "/images/Suzume_JACKET-DESIGN-scaled-dd2a2b.jpg",
      textOne:
        "The third Shinkai collaboration, co-composed with Kazuma Jinnouchi. For a film about doors, grief, disaster memory, and growing up, the music became both intimate and mythic.",
      textTwo:
        "The title track Suzume, featuring Toaka, sits at the centre of the film's emotional world — fragile, mysterious, and unforgettable.",
      songs: ["すずめ", "カナタハルカ", "Tamaki", "Tears of Suzume"],
    },
  ];

  return (
    <main>
      <section className="band band-dark" data-bg="maastricht">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">映画とのコラボ</span>
            <h1>The Shinkai Trilogy</h1>
            <p className="lead">
              Three films, three soundtracks, one of the most defining director–band
              pairings in modern Japanese cinema.
            </p>
          </div>
        </div>
      </section>

      {films.map((film, index) => (
        <section
          className={index === 1 ? "band band-light" : "band band-mid"}
          data-bg={index === 1 ? "azureish" : "charcoal"}
          key={film.title}
        >
          <div className="container">
            <article className={`film-block reveal ${index === 1 ? "reverse" : ""}`}>
            <div className="film-art">
  {film.image ? (
    <img className="film-photo" src={film.image} alt={film.title} />
  ) : (
    <div className="film-placeholder">
      <span>{film.year}</span>
      <small>{film.imageLabel}</small>
    </div>
  )}
</div>

              <div className="film-info">
                <p className="year">{film.year}</p>
                <h2>{film.title}</h2>
                <p className="jp">{film.jpTitle}</p>
                <p>{film.textOne}</p>
                <p>{film.textTwo}</p>

                <div className="songs">
                  {film.songs.map((song) => (
                    <span key={song}>{song}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      ))}

      <section className="band band-dark" data-bg="maastricht">
        <div className="container">
          <div className="quote-block reveal">
            <p className="quote">
              “In these films, RADWIMPS does not simply provide music. The songs become
              part of how the audience remembers the sky, the rain, the doors, and the
              feeling of almost missing someone.”
            </p>
            <p className="source">— 映画音楽</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Films;