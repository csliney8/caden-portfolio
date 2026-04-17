function BlogPost({ title, subtitle, image, imageAlt, children }) {
  return (
    <article className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-sub">{subtitle}</p>
      <div className="divider" />
      <img src={image} alt={imageAlt} className="blog-img" />
      <div className="blog-post-body">{children}</div>
    </article>
  );
}

function Blog() {
  return (
    <main className="blog-page">
      <div className="inner">

        <header className="blog-header">
          <h1 className="section-title">Blog</h1>
          <p className="body-text">Spring Break 2026 recap.</p>
        </header>

        <BlogPost
          title="Padres Opening Series at Petco Park"
          subtitle="First game of the season and it did not disappoint."
          image="/caden-portfolio/padres.jpeg"
          imageAlt="Padres game at Petco Park"
        >
          <p>
            Went to the Padres home opener with some friends and it was a solid time.
            Got there early enough to watch batting practice from the lower bowl, which
            is always worth doing if you can pull it off. Petco Park is genuinely one
            of the best venues to catch a game, the views of downtown over the outfield
            wall, the open concourses, and the fact that pretty much every seat has a
            decent sightline make it hard to have a bad experience there.
          </p>
          <p>
            The game itself was a good one. Crowd was loud from the jump and the team
            looked sharp. There is something about opening series energy that just hits
            different, everyone is optimistic and the stadium has a buzz to it that
            you do not really get in a mid-July game against a mediocre opponent.
            Solid start to the break.
          </p>
        </BlogPost>

        <BlogPost
          title="San Diego FC at Snapdragon Stadium"
          subtitle="The city's soccer scene is building into something real."
          image="/caden-portfolio/sdfc.jpeg"
          imageAlt="SDFC match at Snapdragon Stadium"
        >
          <p>
            Caught an SDFC match at Snapdragon later in the week and honestly the
            atmosphere kind of blew me away. I was not sure what to expect from a
            relatively new MLS club but the supporter sections were loud and organized
            the whole match. The tifo they put up before kickoff was impressive too,
            a full banner stretching across the entire end of the stadium. The venue
            itself is really well suited for soccer, compact enough that every seat
            feels close to the pitch.
          </p>
          <p>
            The match was entertaining and physical, exactly what you want from a
            home game. San Diego has always felt like a natural soccer market and
            watching SDFC play in front of a packed Snapdragon made it obvious this
            club is going to stick around for a long time. Two great games in one
            spring break, can not really complain about that.
          </p>
        </BlogPost>

      </div>
    </main>
  );
}

export default Blog;
