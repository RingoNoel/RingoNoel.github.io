import React from "react";
function Contact() {
  const links = [
    {
      title: "Official Website",
      detail: "RADWIMPS.JP",
      url: "https://radwimps.jp/",
      icon: "◎",
    },
    {
      title: "YouTube Channel",
      detail: "Official videos · MV",
      url: "https://www.youtube.com/@RADWIMPSofficial",
      icon: "▶",
    },
    {
      title: "Spotify",
      detail: "Stream everything",
      url: "https://open.spotify.com/artist/0i4faJgVH09BjASoFZoiWD",
      icon: "♪",
    },
    {
      title: "Apple Music",
      detail: "Hi-res streaming",
      url: "https://music.apple.com/jp/artist/radwimps/202953984",
      icon: "♫",
    },
    {
      title: "X / Twitter",
      detail: "@RADWIMPS",
      url: "https://twitter.com/RADWIMPS",
      icon: "𝕏",
    },
    {
      title: "Instagram",
      detail: "@radwimps_jp",
      url: "https://www.instagram.com/radwimps_jp/",
      icon: "□",
    },
  ];

  return (
    <main>
      <section className="band band-dark" data-bg="maastricht">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">リンク</span>
            <h1>Listen · Follow · Witness</h1>
            <p className="lead">
              The music itself is the point. Below are the official channels where you
              can find every song, every video, every word — straight from the band.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-mid" data-bg="charcoal">
        <div className="container">
          <div className="contact-grid">
            {links.map((link) => (
              <a
                className="contact-link reveal"
                href={link.url}
                target="_blank"
                rel="noreferrer"
                key={link.title}
              >
                <span className="icon">{link.icon}</span>

                <span className="label">
                  {link.title}
                  <small>{link.detail}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-light" data-bg="azureish">
        <div className="container">
          <div className="quote-block reveal">
            <p className="quote">
              “Every official link leads back to the same place: songs that feel private,
              even when the whole world is listening.”
            </p>
            <p className="source">— CONNECT</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;