
import { useState } from "react";
import {
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import "./gallery.css";

const galleryPhotos = [
  {
    id: 1,
    title: "Our SACCO Members",
    category: "Members",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Team Collaboration",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Customer Service",
    category: "Our Offices",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Staff Meeting",
    category: "Staff",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Community Engagement",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Modern Office",
    category: "Our Offices",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    title: "Working Together",
    category: "Staff",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    title: "Member Engagement",
    category: "Members",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
  },
];

const categories = [
  "All",
  "Members",
  "Staff",
  "Events",
  "Our Offices",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter(
          (photo) => photo.category === activeCategory
        );

  function showPrevious() {
    const index = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const previousIndex =
      (index - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[previousIndex]);
  }

  function showNext() {
    const index = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const nextIndex = (index + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  }

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">
            <Images size={17} />
            LIFE AT MUKI SACCO
          </span>

          <h1>Our Gallery</h1>

          <p>
            A glimpse into our people, our workplace, our
            community and the moments that bring us together.
          </p>

          <a href="#gallery-photos" className="gallery-hero-button">
            Explore Our Photos
            <ChevronRight size={19} />
          </a>
        </div>

        <div className="gallery-hero-decoration">
          <Camera size={100} strokeWidth={1} />
        </div>
      </section>

      <section className="gallery-intro">
        <span className="gallery-section-label">CAPTURING MOMENTS</span>
        <h2>People. Progress. Community.</h2>
        <p>
          Discover the people and experiences that make our
          SACCO community special.
        </p>
      </section>

      <section
        className="gallery-content"
        id="gallery-photos"
      >
        <div className="gallery-toolbar">
          <div className="gallery-count">
            <Images size={20} />
            <span>
              {filteredPhotos.length} Photos
            </span>
          </div>

          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedPhoto(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredPhotos.map((photo) => (
            <button
              className="gallery-card"
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`View ${photo.title}`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
              />

              <span className="gallery-card-overlay">
                <span className="gallery-card-category">
                  {photo.category}
                </span>
                <span className="gallery-card-title">
                  {photo.title}
                </span>
                <span className="gallery-view-icon">
                  <Images size={19} />
                </span>
              </span>
            </button>
          ))}
        </div>

       
      </section>

      {selectedPhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setSelectedPhoto(null);
            }

            if (event.key === "ArrowLeft") {
              showPrevious();
            }

            if (event.key === "ArrowRight") {
              showNext();
            }
          }}
          tabIndex={0}
        >
          <button
            type="button"
            className="gallery-close"
            aria-label="Close photo"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={25} />
          </button>

          <button
            type="button"
            className="gallery-nav gallery-prev"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
            />
            <div className="gallery-lightbox-caption">
              <span>{selectedPhoto.category}</span>
              <h3>{selectedPhoto.title}</h3>
            </div>
          </div>

          <button
            type="button"
            className="gallery-nav gallery-next"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </main>
  );
}
