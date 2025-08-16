import Head from "next/head";
import "./snapshot-project.css";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";

export default function CaseStudies() {
  const projects = [
    {
      id: 1,
      title: "Adplusa",
      image: "/adpl1.png",
      href: "https://architect-sigma.vercel.app/",
    },
    {
      id: 2,
      title: "Cupid Clothings",
      image: "/cupid.png",
      href: "https://cupidclothings.com/",
    },
    {
      id: 3,
      title: "Uberlyfe",
      image: "/uber.png",
      href: "https://uberlyfe.com/",
    },
    {
      id: 4,
      title: "Devkinandan Steel",
      image: "/dev.png",
      href: "https://www.devkinandansteel.com/",
    },
    {
      id: 5,
      title: "Kryys Global",
      image: "/kryss.png",
      href: "https://www.kryysglobal.com/",
    },
    {
      id: 6,
      title: "Aiva Jewellery",
      image: "/aiva.png",
      href: "https://aivajewellery.com/",
    },
    {
      id: 7,
      title: "Da Urban",
      image: "/da.png",
      href: "https://daurban.com/",
    },
    {
      id: 8,
      title: "Aurave",
      image: "/aurave.png",
      href: "https://www.auravedecor.in/",
    },
    {
      id: 9,
      title: "HubHawks",
      image: "/hub.png",
      href: "https://sniper-ruddy.vercel.app/",
    },
    {
      id: 10,
      title: "ISU Fashion",
      image: "/isu.png",
      href: "https://isufashion.com/",
    },
    {
      id: 11,
      title: "MiReads",
      image: "/mi.png",
      href: "https://mireads.com/",
    },
    {
      id: 12,
      title: "Madverse",
      image: "/mir.png",
      href: "https://www.madverse.co/",
    },
    {
      id: 13,
      title: "Aqua Easy Purifier",
      image: "/aqua-d.png",
      href: "https://aquaeasypurifier.com/",
    },
  ];

  return (
    <>
      <Head>
        <title>Every Project We’ve Shipped</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Global (non-module) stylesheet */}
        <link rel="stylesheet" href="/css/case-studies.css" />
      </Head>

      <main className="cs-container">
        <Header />
        <header className="cs-header">
          <h1>All Projects</h1>
          <p>
            Explore the complete collection of websites, funnels, and
            performance campaigns we’ve executed — real projects that drove
            measurable results for our clients.
          </p>
        </header>

        <section className="cs-grid" aria-label="case study cards">
          {projects.map((p) => (
            <article className="cs-card" key={p.id}>
              <a
                className="cs-card__link"
                href={p.href}
                aria-label={`Read ${p.title}`}
              >
                <div className="cs-card__imageWrap">
                  {/* plain <img> to keep it simple */}
                  <img
                    className="cs-card__image"
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width="640"
                    height="420"
                  />
                </div>
                <div className="cs-card__body">
                  <h2 className="cs-card__title">{p.title}</h2>
                  {/* <span className="cs-card__cta">Read Case Study →</span> */}
                </div>
              </a>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
