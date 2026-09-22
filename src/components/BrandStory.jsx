import { useState } from 'react'

const STORY_IMAGE =
  'https://images.unsplash.com/photo-1606259458027-54d2a728b6ab?w=1000&q=80&auto=format&fit=crop'

export default function BrandStory() {
  const [broken, setBroken] = useState(false)

  return (
    <section className="brand-story">
      <div className="story-visual">
        {!broken ? (
          <img
            src={STORY_IMAGE}
            alt="Draped folds of cream silk fabric, close up"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="story-visual-fallback" aria-hidden="true" />
        )}
      </div>

      <div className="story-copy">
        <p className="eyebrow">Our Craft</p>
        <h2>
          Every seam considered,
          <br />
          every drape intentional.
        </h2>
        <p className="story-body">
          Amara Atelier began with a simple frustration: abayas that looked
          beautiful on a hanger but fought you all day. So we started over —
          hand-cutting each pattern to how fabric actually falls, testing
          weights of silk-blend crepe until movement felt effortless, and
          keeping every run small enough that a person, not a factory line,
          checks the final stitch.
        </p>
        <p className="story-body">
          It's slower. It's also the only way we've found to make something
          worth keeping for years, not seasons.
        </p>
        <a className="btn btn-text" href="/about">
          Read our story
        </a>
      </div>
    </section>
  )
}