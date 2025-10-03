import { Footer } from "@/components/footer";
import { ExternalLink, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <main className="font-sans max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-18">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-paragraph py-2 font-bold text-sm group text-paragraph/50 transition-colors duration-500"
            >
              <MoveLeft
                size={18}
                className="group-hover:-translate-x-1 transition-all duration-300"
              />
              <span className="group-hover:translate-x-0.5 transition-all duration-300">
                Back home
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hello! I&apos;m Yuri.
              </h1>

              <div className="flex flex-col gap-3 md:gap-4">
                <p className="text-base md:text-lg text-paragraph/70 leading-normal">
                  As a Software Developer, I&apos;m passionate about
                  transforming complex challenges into efficient, high-impact
                  web solutions. With a full-stack background in technologies
                  like React and .NET, I have experience building and
                  maintaining robust platforms, from B2B commercial portals to
                  systems for the banking sector.
                </p>
                <p className="text-base md:text-lg text-paragraph/70 leading-normal">
                  Beyond the world of code, I have a deep appreciation for music
                  and enjoy playing the guitar in my free time. I&apos;m also an
                  volleyball fan and love watching matches. My curiosity extends
                  to languages and cultures, which is why I&apos;m currently
                  studying Japanese and enjoy watching anime.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">Experiences</h2>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://db1global.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/db1.png"
                          alt="DB1 Global Software Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline group-hover:underline-offset-2 flex gap-1">
                          <span>DB1 Global Software</span>
                          <ExternalLink
                            size={14}
                            className="md:hidden group-hover:block"
                          />
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Maringá, Brazil
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Feb 2025 - Present
                        </span>
                      </div>
                    </Link>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Feb 2025 - Present
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">Software Developer</h4>

                    <p className="text-paragraph/70 leading-relaxed">
                      As a Software Developer, I work on a high-impact B2B
                      import portal, where I&apos;ve taken on full-stack
                      responsibilities to ensure the platform remains stable and
                      performs efficiently. My role involves developing critical
                      front-end features with React to enhance user experience
                      and data analysis, while also expanding my skills to the
                      back-end with .NET. I&apos;ve implemented new API
                      functionalities and optimized database interactions using
                      Entity Framework and PostgreSQL. A key part of my journey
                      here has also been mentoring, where I successfully
                      onboarded a new developer, accelerating their productivity
                      and integration into our team.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Tech stack: React, TypeScript, .NET, Entity Framework,
                      PostgreSQL, Azure Devops, Docker, AWS
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://petinfouem.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/pet.png"
                          alt="PET-Informática Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline group-hover:underline-offset-2 flex gap-1">
                          <span>PET-Informática UEM</span>
                          <ExternalLink
                            size={14}
                            className="md:hidden group-hover:block"
                          />
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Maringá, Brazil
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Apr 2021 - Feb 2025
                        </span>
                      </div>
                    </Link>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Apr 2021 - Feb 2025
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {/* <h4 className="font-semibold">
                      Full-stack Developer Intern
                    </h4> */}

                    <p className="text-paragraph/70 leading-relaxed">
                      As a member of PET-Informática, I engaged in activities
                      that bridged the gap between the university and the
                      community. I was deeply involved in organizing our main
                      annual event, SECOMP (Computer Science Week), where I took
                      the lead on developing the event&apos;s website. This
                      included the landing page, a full registration system, and
                      an administrative panel with QR code scanning for attendee
                      check-ins. Beyond SECOMP, I helped organize workshops,
                      community outreach events, and managed the group&apos;s
                      digital presence through its website and social media,
                      developing skills in project management, leadership,
                      teamwork and public engagement.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Skills: Project Management, Leadership, Public Speaking,
                      Teamwork, Event Planning, Web Development
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://cadmus.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/cadmus.png"
                          alt="Cadmus Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline group-hover:underline-offset-2 flex gap-1">
                          <span>Cadmus</span>
                          <ExternalLink
                            size={14}
                            className="md:hidden group-hover:block"
                          />
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Remote
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Nov 2021 - Jul 2022
                        </span>
                      </div>
                    </Link>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Nov 2021 - Jul 2022
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">
                      Full-stack Developer Intern
                    </h4>

                    <p className="text-paragraph/70 leading-relaxed">
                      During my internship at Cadmus, I was actively involved in
                      developing a large-scale portal for the banking sector,
                      built on a micro-frontend architecture. As a Full-stack
                      Development Intern, I used React to build dynamic user
                      interfaces and Node.js with MongoDB to create and maintain
                      robust APIs. Working within an agile team, I contributed
                      to the continuous delivery of value each Sprint and was
                      responsible for developing key components and features,
                      which helped me understand the complexities of maintaining
                      and evolving a major application.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Tech stack: React, Node.js, MongoDB, JavaScript, Git,
                      Agile Methodologies
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="https://vgeducacional.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/vg.png"
                          alt="VG Educacional Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold group-hover:underline group-hover:underline-offset-2 flex gap-1">
                          <span>VG Educacional</span>
                          <ExternalLink
                            size={14}
                            className="md:hidden group-hover:block"
                          />
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Maringá, Brazil
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Jul 2021 - Nov 2021
                        </span>
                      </div>
                    </Link>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Jul 2021 - Nov 2021
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">
                      Front-end Developer Intern
                    </h4>

                    <p className="text-paragraph/70 leading-relaxed">
                      My journey at VG Educacional started with a focus on
                      front-end development and user experience. I collaborated
                      on the conception and initial development of a new
                      internal portal for employees, taking the project from a
                      UI/UX prototype in Figma to its foundational
                      implementation using Next.js. Additionally, I was
                      responsible for developing and maintaining interactive
                      digital educational materials and institutional web pages
                      on the Webflow platform, which allowed me to deliver
                      high-quality and engaging content directly to clients.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Tech stack: Next.js, React, Figma, Webflow, JavaScript,
                      HTML, CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">Education</h2>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 md:gap-6 border border-paragraph/10 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 grid place-content-center bg-neutral-50 p-1.5 rounded-md">
                        <Image
                          src="/logos/uem.png"
                          alt="Universidade Estadual de Maringá Logo"
                          width="192"
                          height="192"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold">
                          Universidade Estadual de Maringá
                        </h3>
                        <span className="text-paragraph/70 text-sm">
                          Maringá, Brazil
                        </span>
                        <span className="text-paragraph/70 text-sm sm:hidden">
                          Aug 2020 - Feb 2025
                        </span>
                      </div>
                    </div>

                    <span className="text-paragraph/70 italic text-sm hidden sm:inline">
                      Aug 2020 - Feb 2025
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold">
                      Bachelor&apos;s degree, Informatics
                    </h4>

                    <p className="text-paragraph/70 leading-relaxed">
                      My B.S. in Informatics provided a strong foundation in
                      software engineering principles, algorithms, and systems
                      architecture. Beyond the core curriculum, my academic
                      experience was enriched by my participation in the
                      PET-Informática extension group, where I was able to
                      develop and practice important soft skills and applied my
                      technical skills to real-world projects. My studies
                      culminated in my undergraduate thesis, where I developed a
                      tool to automate the authorship identification in
                      manuscripts for legal process , building upon the
                      scientific research I had started earlier.
                    </p>

                    <p className="text-paragraph/45 leading-normal">
                      Skills: Software Engineering, Data Structures &
                      Algorithms, Scientific Research, Academic Writing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
