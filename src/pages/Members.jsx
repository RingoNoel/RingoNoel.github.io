import React from "react";
function Members() {
  const members = [
    {
      role: "VOCALS · GUITAR · PIANO",
      name: "Yojiro Noda",
      jpName: "野田 洋次郎",
      image: "/images/EFzTfu0U4AEgkeZ-0504bf.jpg",
      bio: "The voice and chief songwriter. Born 1985. Studied in the U.S. as a child, which left his Japanese lyrics tangled with English fragments and a love of internal rhyme. Also releases solo work as ill dolce.",
    },
    {
      role: "GUITAR",
      name: "Akira Kuwahara",
      jpName: "桑原 彰",
      image: "/images/1631917657-20210917-kuwaharaakira-40e627.jpg",
      photoClass: "photo-Akira",
      bio: "The texture-maker. Born 1985, joined the band as a teenager. His guitar work threads cleanly between math-rock precision and ambient washes — the negative space in which Noda's voice breathes.",
    },
    {
      role: "BASS",
      name: "Yusuke Takeda",
      jpName: "武田 祐介",
      image: "/images/NS02OTI1LnBuZw-1bdcfd.jpeg",
      bio: "The low end. Born 1985, a founding member. His bass lines often work like a second melody — quietly intricate, holding the song together with patterns you notice only on the third or fourth listen.",
    },
    {
      role: "DRUMS",
      name: "Satoshi Yamaguchi",
      jpName: "山口 智史",
      image: "/images/Picture1_0.jpg-d945ae.webp",
      bio: "The pulse. Born 1985, a founding member. Stepped back from touring in 2015 due to focal dystonia but remains the heartbeat of the band's recorded identity. Mizuki Mori has filled the live drum chair since.",
    },
  ];

  return (
    <main>
      <section className="band band-dark" data-bg="maastricht">
        <div className="container">
          <div className="section-head reveal">
            <span className="jp">メンバー紹介</span>
            <h1>
              Four Voices,
              <br />
              One Conversation
            </h1>
            <p className="lead">
              Childhood friends from Yokohama who started a band before they knew what
              kind of band they wanted to be — and have spent two decades figuring it
              out together.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-mid" data-bg="charcoal">
        <div className="container">
          <div className="members-grid">
            {members.map((member) => (
              <article className="member-card reveal" key={member.name}>
                <div className="member-avatar">
  <div className="inner">
    {member.image ? (
      <img
      className={`member-photo ${member.photoClass || ""}`}
      src={member.image}
      alt={member.name}
    />
    ) : (
      <span className="avatar-letter">{member.name.charAt(0)}</span>
    )}
  </div>
</div>

                <p className="role">{member.role}</p>
                <h2 className="name-en">{member.name}</h2>
                <p className="name-jp">{member.jpName}</p>
                <p className="bio">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-light" data-bg="azureish">
        <div className="container">
          <div className="quote-block reveal">
            <p className="quote">
              Live drums since 2015 have been performed by Mizuki Mori, a longtime
              collaborator who tours and records with the band.
            </p>
            <p className="source">— ライブ・ドラマー</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Members;