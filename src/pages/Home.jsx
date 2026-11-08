import React from "react";
function Home() {
  return (
    <main>
      <section className="band band-dark hero" data-bg="maastricht">
        <p className="jp-tag">ラッドウィンプス</p>
        <h1>RADWIMPS</h1>
        <p className="subtitle">— a band that paints the silence between hearts —</p>
        <p className="since">SINCE 2001 · YOKOHAMA · JAPAN</p>
        <span className="scroll-hint">SCROLL</span>
      </section>

      <section className="band band-mid" data-bg="charcoal">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">序章 — INTRODUCTION</span>
            <h1>
              The Sound of
              <br />
              a Generation Becoming Itself
            </h1>
            <p className="lead">
              Born in Yokohama at the turn of the millennium, RADWIMPS has spent two
              decades bending the shape of Japanese rock — weaving math-rock precision,
              hip-hop cadence, orchestral swell, and a deeply private kind of poetry into
              songs that have become the ambient memory of a generation.
            </p>
          </div>

          <div className="legacy-grid reveal">
            <div className="legacy-card">
              <div className="num">2001</div>
              <h4>Formed in Yokohama</h4>
              <p>
                横浜で結成。Four high-school friends started rehearsing in a small
                studio with no idea what they were about to become.
              </p>
            </div>

            <div className="legacy-card">
              <div className="num">11+</div>
              <h4>Studio Albums</h4>
              <p>
                From self-released independents to international film soundtracks — a
                discography that grew with its audience.
              </p>
            </div>

            <div className="legacy-card">
              <div className="num">3</div>
              <h4>Shinkai Films Scored</h4>
              <p>
                Your Name. (2016), Weathering With You (2019), Suzume (2022) — three
                soundtracks that redefined modern anime music.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-light" data-bg="azureish">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">音 — THEIR SOUND</span>
            <h1>Vulnerable. Loud. Unmistakable.</h1>
          </div>

          <div className="text-block reveal">
            <p>
              Few bands have built a sonic world as instantly identifiable as RADWIMPS.
              Yojiro Noda's voice — fragile one moment, ferocious the next — sits at the
              centre of arrangements that move between intimate confession and cinematic
              explosion.
            </p>

            <p>
              Their songs often feel like private letters made public. A melody can begin
              as a whisper, then open into a chorus that feels far larger than the room it
              started in. This contrast between vulnerability and scale is what gives the
              band its emotional force.
            </p>

            <p>
              RADWIMPS' music is not only about sound. It is about memory, youth, distance,
              language, and the small emotional contradictions that define growing up.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;