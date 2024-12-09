import Image from "next/image";

const departments = [
  {
    id: 1,
    name: "Marketing",
    image: "/marketing.png",
    members: [
      { name: "Aamina Abedi", role: "Head of Marketing" },
      { name: "Solomon Kenneth", role: "Head of Marketing" },
    ],
  },
  {
    id: 2,
    name: "Information Technology",
    image: "/it.png",
    members: [
      { name: "Aditya Menon", role: "Head of IT" },
      { name: "Aayush Rajagopalan", role: "Head of IT" },
    ],
  },
  {
    id: 3,
    name: "Graphic Design",
    image: "/graphics.png",
    members: [{ name: "Ziyad", role: "Head of Graphic Design" }],
  },
  {
    id: 6,
    name: "Visual Design",
    image: "/visuals.png",
    members: [
      { name: "Jonah Kirupakaran", role: "Head of Visual Design" },
      { name: "Venus Rinith", role: "Head of Visual Design" },
    ],
  },
  {
    id: 4,
    name: "Executive Producer",
    image: "/exec.png",
    members: [
{ name: "Piyali Mohapatra", role: "Executive Producer" },
{ name: "Edwin Daniel", role: "Executive Producer" }
],
  },
  {
    id: 5,
    name: "Volunteers",
    image: "/volunteers.png",
    members: [{ name: "Dev Menon", role: "Head of Volunteers" }],
  },
  {
    id: 5,
    name: "Finance",
    image: "/finance.png",
    members: [
      { name: "Janavi Rajan", role: "Head of Finance" },
      { name: "Goutham Venkatasubramanian", role: "Head of Finance" },
    ],
  },
  {
    id: 6,
    name: "Press",
    image: "/press.png",
    members: [
      { name: "Advay Pande", role: "Head of Press" },
      { name: "Malik Fareez", role: "Head of Press" },
    ],
  },
];

const curators = {
  id: 7,
  name: "Curators",
  image: "/curators.png",
  members: [
    { name: "Mehull Girdhar", role: "Curator" },
    { name: "Thejus Aravind", role: "Curator" },
    { name: "Sansriti Sarraf", role: "Curator" },
    { name: "Vyusti Singh", role: "Curator" },
  ],
};

const lead = {
  id: 8,
  name: "Lead Organizer",
  image: "/lead.png",
  members: [
    { name: "Prithwiraj Purkait", role: "Lead Organizer" },
    { name: "Abhimanyu Gupta", role: "Lead Organizer" },
  ],
};

const timeline = [
  {
    title: "2024",
    content: {
      title: (
        <p>
          Art of <span className="text-red-600">Flaws</span>
        </p>
      ),
      desc: `Our imperfections are like strokes on a canvas, creating a tapestry
            of authenticity that celebrates vulnerability and the strength of
            embracing our true selves. TEDxYouth@DPSMIS explores how challenges
            and mistakes become opportunities for growth, transforming our lives
            into masterpieces painted with resilience and self-discovery.`,
      images: [
        "https://cdn.aayus.me/tedx/24_1.png",
        "https://cdn.aayus.me/tedx/24_2.png",
      ],
    },
  },

  {
    title: "2023",
    content: {
      title: (
        <p>
          Tangential <span className="text-red-600">Thoughts</span>
        </p>
      ),
      desc: `Solving life’s problems often requires introspection, combining
            knowledge, and adapting to new situations. Tangential thinking
            sparks transformative ideas, while holistic education fosters
            curiosity and interdisciplinary learning. By embracing
            interconnected skills, we can solve complex challenges and better
            understand ourselves and the world.`,
      images: [
        "https://cdn.aayus.me/tedx/23_1.png",
        "https://cdn.aayus.me/tedx/23_2.png",
      ],
    },
  },
  {
    title: "2022",
    content: {
      title: (
        <p>
          Changing <span className="text-red-600">Currents</span>
        </p>
      ),
      desc: `Changing Currents captures life&apos;s unpredictability, showing how
            even in the harshest times, humanity rises to adapt and innovate.
            From reinventing entrenched beliefs to driving global progress in
            climate, infrastructure, and social justice, we evolve alongside the
            deepest tides. This event invites you to shape these currents for a
            better future.`,
      images: [
        "https://cdn.aayus.me/tedx/19_1.png",
        "https://cdn.aayus.me/tedx/23_2.png",
      ],
    },
  },

  {
    title: "2021",
    content: {
      title: (
        <p>
          Addressing <span className="text-red-600">Adversity</span>
        </p>
      ),
      desc: `  Adversity, as Mark Manson highlights, gives purpose to life’s
            inevitable suffering. It serves as a catalyst for growth, teaching
            lessons and inspiring change. While its uncertainty can be daunting,
            addressing adversity requires introspection and action. By
            understanding its roots and impact, we can transform challenges into
            opportunities for personal and collective strength.`,
      images: [
        "https://cdn.aayus.me/tedx/21_1.png",
        "https://cdn.aayus.me/tedx/21_2.png",
      ],
    },
  },

  {
    title: "2019",
    content: {
      title: (
        <p>
          The Resolve To <span className="text-red-600">Reform</span>
        </p>
      ),
      desc: `  Adversity, as Mark Manson highlights, gives purpose to life’s
            inevitable suffering. It serves as a catalyst for growth, teaching
            lessons and inspiring change. While its uncertainty can be daunting,
            addressing adversity requires introspection and action. By
            understanding its roots and impact, we can transform challenges into
            opportunities for personal and collective strength.`,
      images: [
        "https://cdn.aayus.me/tedx/19_1.png",
        "https://cdn.aayus.me/tedx/19_2.png",
      ],
    },
  },

  {
    title: "2018",
    content: {
      title: (
        <p>
          Decoding <span className="text-red-600">Deceptions</span>
        </p>
      ),
      desc: `  Adversity, as Mark Manson highlights, gives purpose to life’s
            inevitable suffering. It serves as a catalyst for growth, teaching
            lessons and inspiring change. While its uncertainty can be daunting,
            addressing adversity requires introspection and action. By
            understanding its roots and impact, we can transform challenges into
            opportunities for personal and collective strength.`,
      images: [
        "https://cdn.aayus.me/tedx/18_1.png",
        "https://cdn.aayus.me/tedx/18_2.png",
      ],
    },
  },

  {
    title: "2017",
    content: {
      title: (
        <p>
          Breaking Through <span className="text-red-600">Inhibitions</span>
        </p>
      ),
      desc: `  Adversity, as Mark Manson highlights, gives purpose to life’s
            inevitable suffering. It serves as a catalyst for growth, teaching
            lessons and inspiring change. While its uncertainty can be daunting,
            addressing adversity requires introspection and action. By
            understanding its roots and impact, we can transform challenges into
            opportunities for personal and collective strength.`,
      images: [
        "https://cdn.aayus.me/tedx/17_1.png",
        "https://cdn.aayus.me/tedx/17_2.png",
      ],
    },
  },

  {
    title: "2016",
    content: {
      title: (
        <p>
          Transcend and <span className="text-red-600">Include</span>
        </p>
      ),
      desc: `  Adversity, as Mark Manson highlights, gives purpose to life’s
            inevitable suffering. It serves as a catalyst for growth, teaching
            lessons and inspiring change. While its uncertainty can be daunting,
            addressing adversity requires introspection and action. By
            understanding its roots and impact, we can transform challenges into
            opportunities for personal and collective strength.`,
      images: [
        "https://cdn.aayus.me/tedx/16_1.png",
        "https://cdn.aayus.me/tedx/16_2.png",
      ],
    },
  },

  {
    title: "2015",
    content: {
      title: (
        <p>
          The Power of <span className="text-red-600">Uncertainty</span>
        </p>
      ),
      desc: `  Adversity, as Mark Manson highlights, gives purpose to life’s
            inevitable suffering. It serves as a catalyst for growth, teaching
            lessons and inspiring change. While its uncertainty can be daunting,
            addressing adversity requires introspection and action. By
            understanding its roots and impact, we can transform challenges into
            opportunities for personal and collective strength.`,
      images: [
        "https://cdn.aayus.me/tedx/15_1.png",
        "https://cdn.aayus.me/tedx/15_2.png",
      ],
    },
  },
];

export { departments, curators, timeline, lead };
