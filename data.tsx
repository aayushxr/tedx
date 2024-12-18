// contains the data of the organizers of the 10th Edition and timeline of all TEDxYouth@DPSMIS events

const departments = [
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
    id: 1,
    name: "Marketing",
    image: "/marketing.png",
    members: [
      { name: "Aamina Abedi", role: "Head of Marketing" },
      { name: "Solomon Kenneth", role: "Head of Marketing" },
    ],
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
    id: 5,
    name: "Volunteers",
    image: "/volunteers.png",
    members: [{ name: "Dev Menon", role: "Head of Volunteers" }],
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
  image: "/lead-org.png",
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

const images = [
  {
    "id": 1,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0023.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0023.jpg",
    "alt": "Kayal_0023.jpg"
  },
  {
    "id": 2,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0029.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0029.jpg",
    "alt": "Kayal_0029.jpg"
  },
  {
    "id": 3,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0030.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0030.jpg",
    "alt": "Kayal_0030.jpg"
  },
  {
    "id": 4,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0036.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0036.jpg",
    "alt": "Kayal_0036.jpg"
  },
  {
    "id": 5,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0037.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0037.jpg",
    "alt": "Kayal_0037.jpg"
  },
  {
    "id": 6,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0038.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0038.jpg",
    "alt": "Kayal_0038.jpg"
  },
  {
    "id": 7,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0045.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0045.jpg",
    "alt": "Kayal_0045.jpg"
  },
  {
    "id": 8,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0066.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0066.jpg",
    "alt": "Kayal_0066.jpg"
  },
  {
    "id": 9,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0068.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0068.jpg",
    "alt": "Kayal_0068.jpg"
  },
  {
    "id": 10,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0069.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0069.jpg",
    "alt": "Kayal_0069.jpg"
  },
  {
    "id": 11,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0070.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0070.jpg",
    "alt": "Kayal_0070.jpg"
  },
  {
    "id": 12,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0071.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0071.jpg",
    "alt": "Kayal_0071.jpg"
  },
  {
    "id": 13,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0072.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0072.jpg",
    "alt": "Kayal_0072.jpg"
  },
  {
    "id": 14,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0073.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0073.jpg",
    "alt": "Kayal_0073.jpg"
  },
  {
    "id": 15,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0074.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0074.jpg",
    "alt": "Kayal_0074.jpg"
  },
  {
    "id": 16,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0075.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0075.jpg",
    "alt": "Kayal_0075.jpg"
  },
  {
    "id": 17,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0088.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0088.jpg",
    "alt": "Kayal_0088.jpg"
  },
  {
    "id": 18,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0089.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0089.jpg",
    "alt": "Kayal_0089.jpg"
  },
  {
    "id": 19,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0098.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0098.jpg",
    "alt": "Kayal_0098.jpg"
  },
  {
    "id": 20,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0111.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0111.jpg",
    "alt": "Kayal_0111.jpg"
  },
  {
    "id": 21,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0115.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0115.jpg",
    "alt": "Kayal_0115.jpg"
  },
  {
    "id": 22,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0119.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0119.jpg",
    "alt": "Kayal_0119.jpg"
  },
  {
    "id": 23,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0126.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0126.jpg",
    "alt": "Kayal_0126.jpg"
  },
  {
    "id": 24,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0140.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0140.jpg",
    "alt": "Kayal_0140.jpg"
  },
  {
    "id": 25,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0142.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0142.jpg",
    "alt": "Kayal_0142.jpg"
  },
  {
    "id": 26,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0145.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0145.jpg",
    "alt": "Kayal_0145.jpg"
  },
  {
    "id": 27,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0147.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0147.jpg",
    "alt": "Kayal_0147.jpg"
  },
  {
    "id": 28,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0148.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0148.jpg",
    "alt": "Kayal_0148.jpg"
  },
  {
    "id": 29,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0150.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0150.jpg",
    "alt": "Kayal_0150.jpg"
  },
  {
    "id": 30,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0151.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0151.jpg",
    "alt": "Kayal_0151.jpg"
  },
  {
    "id": 31,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0152.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0152.jpg",
    "alt": "Kayal_0152.jpg"
  },
  {
    "id": 32,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0153.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0153.jpg",
    "alt": "Kayal_0153.jpg"
  },
  {
    "id": 33,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0155.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0155.jpg",
    "alt": "Kayal_0155.jpg"
  },
  {
    "id": 34,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0156.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0156.jpg",
    "alt": "Kayal_0156.jpg"
  },
  {
    "id": 35,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0157.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0157.jpg",
    "alt": "Kayal_0157.jpg"
  },
  {
    "id": 36,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0160.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0160.jpg",
    "alt": "Kayal_0160.jpg"
  },
  {
    "id": 37,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0161.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0161.jpg",
    "alt": "Kayal_0161.jpg"
  },
  {
    "id": 38,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0162.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0162.jpg",
    "alt": "Kayal_0162.jpg"
  },
  {
    "id": 39,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0163.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0163.jpg",
    "alt": "Kayal_0163.jpg"
  },
  {
    "id": 40,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0164.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0164.jpg",
    "alt": "Kayal_0164.jpg"
  },
  {
    "id": 41,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0166.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0166.jpg",
    "alt": "Kayal_0166.jpg"
  },
  {
    "id": 42,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0168.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0168.jpg",
    "alt": "Kayal_0168.jpg"
  },
  {
    "id": 43,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0172.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0172.jpg",
    "alt": "Kayal_0172.jpg"
  },
  {
    "id": 44,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0173.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0173.jpg",
    "alt": "Kayal_0173.jpg"
  },
  {
    "id": 45,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0175.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0175.jpg",
    "alt": "Kayal_0175.jpg"
  },
  {
    "id": 46,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0177.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0177.jpg",
    "alt": "Kayal_0177.jpg"
  },
  {
    "id": 47,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0178.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0178.jpg",
    "alt": "Kayal_0178.jpg"
  },
  {
    "id": 48,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0187.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0187.jpg",
    "alt": "Kayal_0187.jpg"
  },
  {
    "id": 49,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0188.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0188.jpg",
    "alt": "Kayal_0188.jpg"
  },
  {
    "id": 50,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0189.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0189.jpg",
    "alt": "Kayal_0189.jpg"
  },
  {
    "id": 51,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0192.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0192.jpg",
    "alt": "Kayal_0192.jpg"
  },
  {
    "id": 52,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0201.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0201.jpg",
    "alt": "Kayal_0201.jpg"
  },
  {
    "id": 53,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0209.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0209.jpg",
    "alt": "Kayal_0209.jpg"
  },
  {
    "id": 54,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0213.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0213.jpg",
    "alt": "Kayal_0213.jpg"
  },
  {
    "id": 55,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0214.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0214.jpg",
    "alt": "Kayal_0214.jpg"
  },
  {
    "id": 56,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0237.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0237.jpg",
    "alt": "Kayal_0237.jpg"
  },
  {
    "id": 57,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0238.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0238.jpg",
    "alt": "Kayal_0238.jpg"
  },
  {
    "id": 58,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0242.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0242.jpg",
    "alt": "Kayal_0242.jpg"
  },
  {
    "id": 59,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0251.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0251.jpg",
    "alt": "Kayal_0251.jpg"
  },
  {
    "id": 60,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0258.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0258.jpg",
    "alt": "Kayal_0258.jpg"
  },
  {
    "id": 61,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0259.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0259.jpg",
    "alt": "Kayal_0259.jpg"
  },
  {
    "id": 62,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0260.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0260.jpg",
    "alt": "Kayal_0260.jpg"
  },
  {
    "id": 63,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0264.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0264.jpg",
    "alt": "Kayal_0264.jpg"
  },
  {
    "id": 64,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0266.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0266.jpg",
    "alt": "Kayal_0266.jpg"
  },
  {
    "id": 65,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0270.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0270.jpg",
    "alt": "Kayal_0270.jpg"
  },
  {
    "id": 66,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0286.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0286.jpg",
    "alt": "Kayal_0286.jpg"
  },
  {
    "id": 67,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0288.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0288.jpg",
    "alt": "Kayal_0288.jpg"
  },
  {
    "id": 68,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0293.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0293.jpg",
    "alt": "Kayal_0293.jpg"
  },
  {
    "id": 69,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0297.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0297.jpg",
    "alt": "Kayal_0297.jpg"
  },
  {
    "id": 70,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0308.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0308.jpg",
    "alt": "Kayal_0308.jpg"
  },
  {
    "id": 71,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0310.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0310.jpg",
    "alt": "Kayal_0310.jpg"
  },
  {
    "id": 72,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0312.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0312.jpg",
    "alt": "Kayal_0312.jpg"
  },
  {
    "id": 73,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0317.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0317.jpg",
    "alt": "Kayal_0317.jpg"
  },
  {
    "id": 74,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0320.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0320.jpg",
    "alt": "Kayal_0320.jpg"
  },
  {
    "id": 75,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0323.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0323.jpg",
    "alt": "Kayal_0323.jpg"
  },
  {
    "id": 76,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0325.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0325.jpg",
    "alt": "Kayal_0325.jpg"
  },
  {
    "id": 77,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0328.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0328.jpg",
    "alt": "Kayal_0328.jpg"
  },
  {
    "id": 78,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0331.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0331.jpg",
    "alt": "Kayal_0331.jpg"
  },
  {
    "id": 79,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0335.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0335.jpg",
    "alt": "Kayal_0335.jpg"
  },
  {
    "id": 80,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0340.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0340.jpg",
    "alt": "Kayal_0340.jpg"
  },
  {
    "id": 81,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0358.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0358.jpg",
    "alt": "Kayal_0358.jpg"
  },
  {
    "id": 82,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0361.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0361.jpg",
    "alt": "Kayal_0361.jpg"
  },
  {
    "id": 83,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0364.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0364.jpg",
    "alt": "Kayal_0364.jpg"
  },
  {
    "id": 84,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0369.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0369.jpg",
    "alt": "Kayal_0369.jpg"
  },
  {
    "id": 85,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0373.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0373.jpg",
    "alt": "Kayal_0373.jpg"
  },
  {
    "id": 86,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0374.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0374.jpg",
    "alt": "Kayal_0374.jpg"
  },
  {
    "id": 87,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0388.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0388.jpg",
    "alt": "Kayal_0388.jpg"
  },
  {
    "id": 88,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0389.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0389.jpg",
    "alt": "Kayal_0389.jpg"
  },
  {
    "id": 89,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0390.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0390.jpg",
    "alt": "Kayal_0390.jpg"
  },
  {
    "id": 90,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0397.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0397.jpg",
    "alt": "Kayal_0397.jpg"
  },
  {
    "id": 91,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0398.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0398.jpg",
    "alt": "Kayal_0398.jpg"
  },
  {
    "id": 92,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0412.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0412.jpg",
    "alt": "Kayal_0412.jpg"
  },
  {
    "id": 93,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0413.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0413.jpg",
    "alt": "Kayal_0413.jpg"
  },
  {
    "id": 94,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0421.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0421.jpg",
    "alt": "Kayal_0421.jpg"
  },
  {
    "id": 95,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0426.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0426.jpg",
    "alt": "Kayal_0426.jpg"
  },
  {
    "id": 96,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0427.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0427.jpg",
    "alt": "Kayal_0427.jpg"
  },
  {
    "id": 97,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0428.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0428.jpg",
    "alt": "Kayal_0428.jpg"
  },
  {
    "id": 98,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0429.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0429.jpg",
    "alt": "Kayal_0429.jpg"
  },
  {
    "id": 99,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0433.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0433.jpg",
    "alt": "Kayal_0433.jpg"
  },
  {
    "id": 100,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0435.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0435.jpg",
    "alt": "Kayal_0435.jpg"
  },
  {
    "id": 101,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0436.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0436.jpg",
    "alt": "Kayal_0436.jpg"
  },
  {
    "id": 102,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0437.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0437.jpg",
    "alt": "Kayal_0437.jpg"
  },
  {
    "id": 103,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0438.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0438.jpg",
    "alt": "Kayal_0438.jpg"
  },
  {
    "id": 104,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0439.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0439.jpg",
    "alt": "Kayal_0439.jpg"
  },
  {
    "id": 105,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0443.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0443.jpg",
    "alt": "Kayal_0443.jpg"
  },
  {
    "id": 106,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0458.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0458.jpg",
    "alt": "Kayal_0458.jpg"
  },
  {
    "id": 107,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0459.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0459.jpg",
    "alt": "Kayal_0459.jpg"
  },
  {
    "id": 108,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0460.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0460.jpg",
    "alt": "Kayal_0460.jpg"
  },
  {
    "id": 109,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0461.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0461.jpg",
    "alt": "Kayal_0461.jpg"
  },
  {
    "id": 110,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0462.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0462.jpg",
    "alt": "Kayal_0462.jpg"
  },
  {
    "id": 111,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0463.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0463.jpg",
    "alt": "Kayal_0463.jpg"
  },
  {
    "id": 112,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0464.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0464.jpg",
    "alt": "Kayal_0464.jpg"
  },
  {
    "id": 113,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0466.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0466.jpg",
    "alt": "Kayal_0466.jpg"
  },
  {
    "id": 114,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0467.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0467.jpg",
    "alt": "Kayal_0467.jpg"
  },
  {
    "id": 115,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0468.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0468.jpg",
    "alt": "Kayal_0468.jpg"
  },
  {
    "id": 116,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0469.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0469.jpg",
    "alt": "Kayal_0469.jpg"
  },
  {
    "id": 117,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0470.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0470.jpg",
    "alt": "Kayal_0470.jpg"
  },
  {
    "id": 118,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0471.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0471.jpg",
    "alt": "Kayal_0471.jpg"
  },
  {
    "id": 119,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0473.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0473.jpg",
    "alt": "Kayal_0473.jpg"
  },
  {
    "id": 120,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0478.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0478.jpg",
    "alt": "Kayal_0478.jpg"
  },
  {
    "id": 121,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0482.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0482.jpg",
    "alt": "Kayal_0482.jpg"
  },
  {
    "id": 122,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0483.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0483.jpg",
    "alt": "Kayal_0483.jpg"
  },
  {
    "id": 123,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0489.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0489.jpg",
    "alt": "Kayal_0489.jpg"
  },
  {
    "id": 124,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0494.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0494.jpg",
    "alt": "Kayal_0494.jpg"
  },
  {
    "id": 125,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0499.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0499.jpg",
    "alt": "Kayal_0499.jpg"
  },
  {
    "id": 126,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0503.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0503.jpg",
    "alt": "Kayal_0503.jpg"
  },
  {
    "id": 127,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_0504.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_0504.jpg",
    "alt": "Kayal_0504.jpg"
  },
  {
    "id": 128,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_2007.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_2007.jpg",
    "alt": "Kayal_2007.jpg"
  },
  {
    "id": 129,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_2023.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_2023.jpg",
    "alt": "Kayal_2023.jpg"
  },
  {
    "id": 130,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_173711.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_173711.jpg",
    "alt": "Kayal_20241215_173711.jpg"
  },
  {
    "id": 131,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_180830.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_180830.jpg",
    "alt": "Kayal_20241215_180830.jpg"
  },
  {
    "id": 132,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_182236.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_182236.jpg",
    "alt": "Kayal_20241215_182236.jpg"
  },
  {
    "id": 133,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_182647_edit_60644877376968.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_182647_edit_60644877376968.jpg",
    "alt": "Kayal_20241215_182647_edit_60644877376968.jpg"
  },
  {
    "id": 134,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_183204.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_183204.jpg",
    "alt": "Kayal_20241215_183204.jpg"
  },
  {
    "id": 135,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_183539.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_183539.jpg",
    "alt": "Kayal_20241215_183539.jpg"
  },
  {
    "id": 136,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_183735.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_183735.jpg",
    "alt": "Kayal_20241215_183735.jpg"
  },
  {
    "id": 137,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_195042.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_195042.jpg",
    "alt": "Kayal_20241215_195042.jpg"
  },
  {
    "id": 138,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_200306.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_200306.jpg",
    "alt": "Kayal_20241215_200306.jpg"
  },
  {
    "id": 139,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_20241215_200309.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_20241215_200309.jpg",
    "alt": "Kayal_20241215_200309.jpg"
  },
  {
    "id": 140,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_2048.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_2048.jpg",
    "alt": "Kayal_2048.jpg"
  },
  {
    "id": 141,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_2049.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_2049.jpg",
    "alt": "Kayal_2049.jpg"
  },
  {
    "id": 142,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9940.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9940.jpg",
    "alt": "Kayal_9940.jpg"
  },
  {
    "id": 143,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9942.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9942.jpg",
    "alt": "Kayal_9942.jpg"
  },
  {
    "id": 144,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9943.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9943.jpg",
    "alt": "Kayal_9943.jpg"
  },
  {
    "id": 145,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9945.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9945.jpg",
    "alt": "Kayal_9945.jpg"
  },
  {
    "id": 146,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9956.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9956.jpg",
    "alt": "Kayal_9956.jpg"
  },
  {
    "id": 147,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9957.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9957.jpg",
    "alt": "Kayal_9957.jpg"
  },
  {
    "id": 148,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9958.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9958.jpg",
    "alt": "Kayal_9958.jpg"
  },
  {
    "id": 149,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9964.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9964.jpg",
    "alt": "Kayal_9964.jpg"
  },
  {
    "id": 150,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9965.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9965.jpg",
    "alt": "Kayal_9965.jpg"
  },
  {
    "id": 151,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9968.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9968.jpg",
    "alt": "Kayal_9968.jpg"
  },
  {
    "id": 152,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9971.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9971.jpg",
    "alt": "Kayal_9971.jpg"
  },
  {
    "id": 153,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9978.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9978.jpg",
    "alt": "Kayal_9978.jpg"
  },
  {
    "id": 154,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9981.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9981.jpg",
    "alt": "Kayal_9981.jpg"
  },
  {
    "id": 155,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9988.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9988.jpg",
    "alt": "Kayal_9988.jpg"
  },
  {
    "id": 156,
    "url": "https://cdn.aayus.me/tedx/press/Kayal_9989.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Kayal_9989.jpg",
    "alt": "Kayal_9989.jpg"
  },
  {
    "id": 157,
    "url": "https://cdn.aayus.me/tedx/press/Press_0218.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0218.jpg",
    "alt": "Press_0218.jpg"
  },
  {
    "id": 158,
    "url": "https://cdn.aayus.me/tedx/press/Press_0219.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0219.jpg",
    "alt": "Press_0219.jpg"
  },
  {
    "id": 159,
    "url": "https://cdn.aayus.me/tedx/press/Press_0220.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0220.jpg",
    "alt": "Press_0220.jpg"
  },
  {
    "id": 160,
    "url": "https://cdn.aayus.me/tedx/press/Press_0221.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0221.jpg",
    "alt": "Press_0221.jpg"
  },
  {
    "id": 161,
    "url": "https://cdn.aayus.me/tedx/press/Press_0224.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0224.jpg",
    "alt": "Press_0224.jpg"
  },
  {
    "id": 162,
    "url": "https://cdn.aayus.me/tedx/press/Press_0225.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0225.jpg",
    "alt": "Press_0225.jpg"
  },
  {
    "id": 163,
    "url": "https://cdn.aayus.me/tedx/press/Press_0226.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0226.jpg",
    "alt": "Press_0226.jpg"
  },
  {
    "id": 164,
    "url": "https://cdn.aayus.me/tedx/press/Press_0227.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0227.jpg",
    "alt": "Press_0227.jpg"
  },
  {
    "id": 165,
    "url": "https://cdn.aayus.me/tedx/press/Press_0228.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0228.jpg",
    "alt": "Press_0228.jpg"
  },
  {
    "id": 166,
    "url": "https://cdn.aayus.me/tedx/press/Press_0229.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0229.jpg",
    "alt": "Press_0229.jpg"
  },
  {
    "id": 167,
    "url": "https://cdn.aayus.me/tedx/press/Press_0230.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0230.jpg",
    "alt": "Press_0230.jpg"
  },
  {
    "id": 168,
    "url": "https://cdn.aayus.me/tedx/press/Press_0231.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0231.jpg",
    "alt": "Press_0231.jpg"
  },
  {
    "id": 169,
    "url": "https://cdn.aayus.me/tedx/press/Press_0232.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0232.jpg",
    "alt": "Press_0232.jpg"
  },
  {
    "id": 170,
    "url": "https://cdn.aayus.me/tedx/press/Press_0235.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0235.jpg",
    "alt": "Press_0235.jpg"
  },
  {
    "id": 171,
    "url": "https://cdn.aayus.me/tedx/press/Press_0238.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0238.jpg",
    "alt": "Press_0238.jpg"
  },
  {
    "id": 172,
    "url": "https://cdn.aayus.me/tedx/press/Press_0239.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0239.jpg",
    "alt": "Press_0239.jpg"
  },
  {
    "id": 173,
    "url": "https://cdn.aayus.me/tedx/press/Press_0240.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0240.jpg",
    "alt": "Press_0240.jpg"
  },
  {
    "id": 174,
    "url": "https://cdn.aayus.me/tedx/press/Press_0243.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0243.jpg",
    "alt": "Press_0243.jpg"
  },
  {
    "id": 175,
    "url": "https://cdn.aayus.me/tedx/press/Press_0245.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0245.jpg",
    "alt": "Press_0245.jpg"
  },
  {
    "id": 176,
    "url": "https://cdn.aayus.me/tedx/press/Press_0246.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0246.jpg",
    "alt": "Press_0246.jpg"
  },
  {
    "id": 177,
    "url": "https://cdn.aayus.me/tedx/press/Press_0247.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0247.jpg",
    "alt": "Press_0247.jpg"
  },
  {
    "id": 178,
    "url": "https://cdn.aayus.me/tedx/press/Press_0248.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0248.jpg",
    "alt": "Press_0248.jpg"
  },
  {
    "id": 179,
    "url": "https://cdn.aayus.me/tedx/press/Press_0251.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0251.jpg",
    "alt": "Press_0251.jpg"
  },
  {
    "id": 180,
    "url": "https://cdn.aayus.me/tedx/press/Press_0253.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0253.jpg",
    "alt": "Press_0253.jpg"
  },
  {
    "id": 181,
    "url": "https://cdn.aayus.me/tedx/press/Press_0254.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0254.jpg",
    "alt": "Press_0254.jpg"
  },
  {
    "id": 182,
    "url": "https://cdn.aayus.me/tedx/press/Press_0255.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0255.jpg",
    "alt": "Press_0255.jpg"
  },
  {
    "id": 183,
    "url": "https://cdn.aayus.me/tedx/press/Press_0256.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0256.jpg",
    "alt": "Press_0256.jpg"
  },
  {
    "id": 184,
    "url": "https://cdn.aayus.me/tedx/press/Press_0262.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0262.jpg",
    "alt": "Press_0262.jpg"
  },
  {
    "id": 185,
    "url": "https://cdn.aayus.me/tedx/press/Press_0263.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0263.jpg",
    "alt": "Press_0263.jpg"
  },
  {
    "id": 186,
    "url": "https://cdn.aayus.me/tedx/press/Press_0264.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0264.jpg",
    "alt": "Press_0264.jpg"
  },
  {
    "id": 187,
    "url": "https://cdn.aayus.me/tedx/press/Press_0265.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0265.jpg",
    "alt": "Press_0265.jpg"
  },
  {
    "id": 188,
    "url": "https://cdn.aayus.me/tedx/press/Press_0267.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0267.jpg",
    "alt": "Press_0267.jpg"
  },
  {
    "id": 189,
    "url": "https://cdn.aayus.me/tedx/press/Press_0269.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0269.jpg",
    "alt": "Press_0269.jpg"
  },
  {
    "id": 190,
    "url": "https://cdn.aayus.me/tedx/press/Press_0272.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0272.jpg",
    "alt": "Press_0272.jpg"
  },
  {
    "id": 191,
    "url": "https://cdn.aayus.me/tedx/press/Press_0273.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0273.jpg",
    "alt": "Press_0273.jpg"
  },
  {
    "id": 192,
    "url": "https://cdn.aayus.me/tedx/press/Press_0274.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0274.jpg",
    "alt": "Press_0274.jpg"
  },
  {
    "id": 193,
    "url": "https://cdn.aayus.me/tedx/press/Press_0276.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0276.jpg",
    "alt": "Press_0276.jpg"
  },
  {
    "id": 194,
    "url": "https://cdn.aayus.me/tedx/press/Press_0277.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0277.jpg",
    "alt": "Press_0277.jpg"
  },
  {
    "id": 195,
    "url": "https://cdn.aayus.me/tedx/press/Press_0280.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0280.jpg",
    "alt": "Press_0280.jpg"
  },
  {
    "id": 196,
    "url": "https://cdn.aayus.me/tedx/press/Press_0281.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0281.jpg",
    "alt": "Press_0281.jpg"
  },
  {
    "id": 197,
    "url": "https://cdn.aayus.me/tedx/press/Press_0282.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0282.jpg",
    "alt": "Press_0282.jpg"
  },
  {
    "id": 198,
    "url": "https://cdn.aayus.me/tedx/press/Press_0283.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0283.jpg",
    "alt": "Press_0283.jpg"
  },
  {
    "id": 199,
    "url": "https://cdn.aayus.me/tedx/press/Press_0285.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0285.jpg",
    "alt": "Press_0285.jpg"
  },
  {
    "id": 200,
    "url": "https://cdn.aayus.me/tedx/press/Press_0287.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0287.jpg",
    "alt": "Press_0287.jpg"
  },
  {
    "id": 201,
    "url": "https://cdn.aayus.me/tedx/press/Press_0288.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0288.jpg",
    "alt": "Press_0288.jpg"
  },
  {
    "id": 202,
    "url": "https://cdn.aayus.me/tedx/press/Press_0290.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0290.jpg",
    "alt": "Press_0290.jpg"
  },
  {
    "id": 203,
    "url": "https://cdn.aayus.me/tedx/press/Press_0291.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0291.jpg",
    "alt": "Press_0291.jpg"
  },
  {
    "id": 204,
    "url": "https://cdn.aayus.me/tedx/press/Press_0292.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0292.jpg",
    "alt": "Press_0292.jpg"
  },
  {
    "id": 205,
    "url": "https://cdn.aayus.me/tedx/press/Press_0293.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0293.jpg",
    "alt": "Press_0293.jpg"
  },
  {
    "id": 206,
    "url": "https://cdn.aayus.me/tedx/press/Press_0294.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0294.jpg",
    "alt": "Press_0294.jpg"
  },
  {
    "id": 207,
    "url": "https://cdn.aayus.me/tedx/press/Press_0295.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0295.jpg",
    "alt": "Press_0295.jpg"
  },
  {
    "id": 208,
    "url": "https://cdn.aayus.me/tedx/press/Press_0296.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0296.jpg",
    "alt": "Press_0296.jpg"
  },
  {
    "id": 209,
    "url": "https://cdn.aayus.me/tedx/press/Press_0297.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0297.jpg",
    "alt": "Press_0297.jpg"
  },
  {
    "id": 210,
    "url": "https://cdn.aayus.me/tedx/press/Press_0298.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0298.jpg",
    "alt": "Press_0298.jpg"
  },
  {
    "id": 211,
    "url": "https://cdn.aayus.me/tedx/press/Press_0300.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0300.jpg",
    "alt": "Press_0300.jpg"
  },
  {
    "id": 212,
    "url": "https://cdn.aayus.me/tedx/press/Press_0301.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0301.jpg",
    "alt": "Press_0301.jpg"
  },
  {
    "id": 213,
    "url": "https://cdn.aayus.me/tedx/press/Press_0302.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0302.jpg",
    "alt": "Press_0302.jpg"
  },
  {
    "id": 214,
    "url": "https://cdn.aayus.me/tedx/press/Press_0303.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0303.jpg",
    "alt": "Press_0303.jpg"
  },
  {
    "id": 215,
    "url": "https://cdn.aayus.me/tedx/press/Press_0305.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0305.jpg",
    "alt": "Press_0305.jpg"
  },
  {
    "id": 216,
    "url": "https://cdn.aayus.me/tedx/press/Press_0306.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0306.jpg",
    "alt": "Press_0306.jpg"
  },
  {
    "id": 217,
    "url": "https://cdn.aayus.me/tedx/press/Press_0307.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0307.jpg",
    "alt": "Press_0307.jpg"
  },
  {
    "id": 218,
    "url": "https://cdn.aayus.me/tedx/press/Press_0308.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0308.jpg",
    "alt": "Press_0308.jpg"
  },
  {
    "id": 219,
    "url": "https://cdn.aayus.me/tedx/press/Press_0311.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0311.jpg",
    "alt": "Press_0311.jpg"
  },
  {
    "id": 220,
    "url": "https://cdn.aayus.me/tedx/press/Press_0314.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0314.jpg",
    "alt": "Press_0314.jpg"
  },
  {
    "id": 221,
    "url": "https://cdn.aayus.me/tedx/press/Press_0316.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0316.jpg",
    "alt": "Press_0316.jpg"
  },
  {
    "id": 222,
    "url": "https://cdn.aayus.me/tedx/press/Press_0317.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0317.jpg",
    "alt": "Press_0317.jpg"
  },
  {
    "id": 223,
    "url": "https://cdn.aayus.me/tedx/press/Press_0318.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0318.jpg",
    "alt": "Press_0318.jpg"
  },
  {
    "id": 224,
    "url": "https://cdn.aayus.me/tedx/press/Press_0320.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0320.jpg",
    "alt": "Press_0320.jpg"
  },
  {
    "id": 225,
    "url": "https://cdn.aayus.me/tedx/press/Press_0321.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0321.jpg",
    "alt": "Press_0321.jpg"
  },
  {
    "id": 226,
    "url": "https://cdn.aayus.me/tedx/press/Press_0322.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0322.jpg",
    "alt": "Press_0322.jpg"
  },
  {
    "id": 227,
    "url": "https://cdn.aayus.me/tedx/press/Press_0323.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0323.jpg",
    "alt": "Press_0323.jpg"
  },
  {
    "id": 228,
    "url": "https://cdn.aayus.me/tedx/press/Press_0324.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0324.jpg",
    "alt": "Press_0324.jpg"
  },
  {
    "id": 229,
    "url": "https://cdn.aayus.me/tedx/press/Press_0325.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0325.jpg",
    "alt": "Press_0325.jpg"
  },
  {
    "id": 230,
    "url": "https://cdn.aayus.me/tedx/press/Press_0326.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0326.jpg",
    "alt": "Press_0326.jpg"
  },
  {
    "id": 231,
    "url": "https://cdn.aayus.me/tedx/press/Press_0328.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0328.jpg",
    "alt": "Press_0328.jpg"
  },
  {
    "id": 232,
    "url": "https://cdn.aayus.me/tedx/press/Press_0330.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0330.jpg",
    "alt": "Press_0330.jpg"
  },
  {
    "id": 233,
    "url": "https://cdn.aayus.me/tedx/press/Press_0331.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0331.jpg",
    "alt": "Press_0331.jpg"
  },
  {
    "id": 234,
    "url": "https://cdn.aayus.me/tedx/press/Press_0332.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0332.jpg",
    "alt": "Press_0332.jpg"
  },
  {
    "id": 235,
    "url": "https://cdn.aayus.me/tedx/press/Press_0333.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0333.jpg",
    "alt": "Press_0333.jpg"
  },
  {
    "id": 236,
    "url": "https://cdn.aayus.me/tedx/press/Press_0334.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0334.jpg",
    "alt": "Press_0334.jpg"
  },
  {
    "id": 237,
    "url": "https://cdn.aayus.me/tedx/press/Press_0348.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0348.jpg",
    "alt": "Press_0348.jpg"
  },
  {
    "id": 238,
    "url": "https://cdn.aayus.me/tedx/press/Press_0350.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0350.jpg",
    "alt": "Press_0350.jpg"
  },
  {
    "id": 239,
    "url": "https://cdn.aayus.me/tedx/press/Press_0351.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0351.jpg",
    "alt": "Press_0351.jpg"
  },
  {
    "id": 240,
    "url": "https://cdn.aayus.me/tedx/press/Press_0352.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0352.jpg",
    "alt": "Press_0352.jpg"
  },
  {
    "id": 241,
    "url": "https://cdn.aayus.me/tedx/press/Press_0353.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0353.jpg",
    "alt": "Press_0353.jpg"
  },
  {
    "id": 242,
    "url": "https://cdn.aayus.me/tedx/press/Press_0354.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0354.jpg",
    "alt": "Press_0354.jpg"
  },
  {
    "id": 243,
    "url": "https://cdn.aayus.me/tedx/press/Press_0355.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0355.jpg",
    "alt": "Press_0355.jpg"
  },
  {
    "id": 244,
    "url": "https://cdn.aayus.me/tedx/press/Press_0359.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0359.jpg",
    "alt": "Press_0359.jpg"
  },
  {
    "id": 245,
    "url": "https://cdn.aayus.me/tedx/press/Press_0362.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0362.jpg",
    "alt": "Press_0362.jpg"
  },
  {
    "id": 246,
    "url": "https://cdn.aayus.me/tedx/press/Press_0363.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0363.jpg",
    "alt": "Press_0363.jpg"
  },
  {
    "id": 247,
    "url": "https://cdn.aayus.me/tedx/press/Press_0364.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0364.jpg",
    "alt": "Press_0364.jpg"
  },
  {
    "id": 248,
    "url": "https://cdn.aayus.me/tedx/press/Press_0369.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0369.jpg",
    "alt": "Press_0369.jpg"
  },
  {
    "id": 249,
    "url": "https://cdn.aayus.me/tedx/press/Press_0370.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0370.jpg",
    "alt": "Press_0370.jpg"
  },
  {
    "id": 250,
    "url": "https://cdn.aayus.me/tedx/press/Press_0371.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0371.jpg",
    "alt": "Press_0371.jpg"
  },
  {
    "id": 251,
    "url": "https://cdn.aayus.me/tedx/press/Press_0373.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0373.jpg",
    "alt": "Press_0373.jpg"
  },
  {
    "id": 252,
    "url": "https://cdn.aayus.me/tedx/press/Press_0375.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0375.jpg",
    "alt": "Press_0375.jpg"
  },
  {
    "id": 253,
    "url": "https://cdn.aayus.me/tedx/press/Press_0376.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0376.jpg",
    "alt": "Press_0376.jpg"
  },
  {
    "id": 254,
    "url": "https://cdn.aayus.me/tedx/press/Press_0379.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0379.jpg",
    "alt": "Press_0379.jpg"
  },
  {
    "id": 255,
    "url": "https://cdn.aayus.me/tedx/press/Press_0385.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0385.jpg",
    "alt": "Press_0385.jpg"
  },
  {
    "id": 256,
    "url": "https://cdn.aayus.me/tedx/press/Press_0386.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0386.jpg",
    "alt": "Press_0386.jpg"
  },
  {
    "id": 257,
    "url": "https://cdn.aayus.me/tedx/press/Press_0387.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0387.jpg",
    "alt": "Press_0387.jpg"
  },
  {
    "id": 258,
    "url": "https://cdn.aayus.me/tedx/press/Press_0389.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0389.jpg",
    "alt": "Press_0389.jpg"
  },
  {
    "id": 259,
    "url": "https://cdn.aayus.me/tedx/press/Press_0390.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0390.jpg",
    "alt": "Press_0390.jpg"
  },
  {
    "id": 260,
    "url": "https://cdn.aayus.me/tedx/press/Press_0391.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0391.jpg",
    "alt": "Press_0391.jpg"
  },
  {
    "id": 261,
    "url": "https://cdn.aayus.me/tedx/press/Press_0392.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0392.jpg",
    "alt": "Press_0392.jpg"
  },
  {
    "id": 262,
    "url": "https://cdn.aayus.me/tedx/press/Press_0394.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0394.jpg",
    "alt": "Press_0394.jpg"
  },
  {
    "id": 263,
    "url": "https://cdn.aayus.me/tedx/press/Press_0395.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0395.jpg",
    "alt": "Press_0395.jpg"
  },
  {
    "id": 264,
    "url": "https://cdn.aayus.me/tedx/press/Press_0396.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0396.jpg",
    "alt": "Press_0396.jpg"
  },
  {
    "id": 265,
    "url": "https://cdn.aayus.me/tedx/press/Press_0397.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0397.jpg",
    "alt": "Press_0397.jpg"
  },
  {
    "id": 266,
    "url": "https://cdn.aayus.me/tedx/press/Press_0398.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0398.jpg",
    "alt": "Press_0398.jpg"
  },
  {
    "id": 267,
    "url": "https://cdn.aayus.me/tedx/press/Press_0400.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0400.jpg",
    "alt": "Press_0400.jpg"
  },
  {
    "id": 268,
    "url": "https://cdn.aayus.me/tedx/press/Press_0403.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0403.jpg",
    "alt": "Press_0403.jpg"
  },
  {
    "id": 269,
    "url": "https://cdn.aayus.me/tedx/press/Press_0404.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0404.jpg",
    "alt": "Press_0404.jpg"
  },
  {
    "id": 270,
    "url": "https://cdn.aayus.me/tedx/press/Press_0405.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0405.jpg",
    "alt": "Press_0405.jpg"
  },
  {
    "id": 271,
    "url": "https://cdn.aayus.me/tedx/press/Press_0406.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0406.jpg",
    "alt": "Press_0406.jpg"
  },
  {
    "id": 272,
    "url": "https://cdn.aayus.me/tedx/press/Press_0409.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0409.jpg",
    "alt": "Press_0409.jpg"
  },
  {
    "id": 273,
    "url": "https://cdn.aayus.me/tedx/press/Press_0410.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0410.jpg",
    "alt": "Press_0410.jpg"
  },
  {
    "id": 274,
    "url": "https://cdn.aayus.me/tedx/press/Press_0411.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0411.jpg",
    "alt": "Press_0411.jpg"
  },
  {
    "id": 275,
    "url": "https://cdn.aayus.me/tedx/press/Press_0412.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0412.jpg",
    "alt": "Press_0412.jpg"
  },
  {
    "id": 276,
    "url": "https://cdn.aayus.me/tedx/press/Press_0413.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0413.jpg",
    "alt": "Press_0413.jpg"
  },
  {
    "id": 277,
    "url": "https://cdn.aayus.me/tedx/press/Press_0415.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0415.jpg",
    "alt": "Press_0415.jpg"
  },
  {
    "id": 278,
    "url": "https://cdn.aayus.me/tedx/press/Press_0416.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0416.jpg",
    "alt": "Press_0416.jpg"
  },
  {
    "id": 279,
    "url": "https://cdn.aayus.me/tedx/press/Press_0417.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0417.jpg",
    "alt": "Press_0417.jpg"
  },
  {
    "id": 280,
    "url": "https://cdn.aayus.me/tedx/press/Press_0418.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0418.jpg",
    "alt": "Press_0418.jpg"
  },
  {
    "id": 281,
    "url": "https://cdn.aayus.me/tedx/press/Press_0419.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0419.jpg",
    "alt": "Press_0419.jpg"
  },
  {
    "id": 282,
    "url": "https://cdn.aayus.me/tedx/press/Press_0420.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0420.jpg",
    "alt": "Press_0420.jpg"
  },
  {
    "id": 283,
    "url": "https://cdn.aayus.me/tedx/press/Press_0422.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0422.jpg",
    "alt": "Press_0422.jpg"
  },
  {
    "id": 284,
    "url": "https://cdn.aayus.me/tedx/press/Press_0424.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0424.jpg",
    "alt": "Press_0424.jpg"
  },
  {
    "id": 285,
    "url": "https://cdn.aayus.me/tedx/press/Press_0425.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0425.jpg",
    "alt": "Press_0425.jpg"
  },
  {
    "id": 286,
    "url": "https://cdn.aayus.me/tedx/press/Press_0426.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Press_0426.jpg",
    "alt": "Press_0426.jpg"
  },
  {
    "id": 287,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0032.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0032.jpg",
    "alt": "Rayed_0032.jpg"
  },
  {
    "id": 288,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0052.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0052.jpg",
    "alt": "Rayed_0052.jpg"
  },
  {
    "id": 289,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0054.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0054.jpg",
    "alt": "Rayed_0054.jpg"
  },
  {
    "id": 290,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0058.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0058.jpg",
    "alt": "Rayed_0058.jpg"
  },
  {
    "id": 291,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0059.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0059.jpg",
    "alt": "Rayed_0059.jpg"
  },
  {
    "id": 292,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0062.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0062.jpg",
    "alt": "Rayed_0062.jpg"
  },
  {
    "id": 293,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0064.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0064.jpg",
    "alt": "Rayed_0064.jpg"
  },
  {
    "id": 294,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0079.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0079.jpg",
    "alt": "Rayed_0079.jpg"
  },
  {
    "id": 295,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0080.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0080.jpg",
    "alt": "Rayed_0080.jpg"
  },
  {
    "id": 296,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0084.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0084.jpg",
    "alt": "Rayed_0084.jpg"
  },
  {
    "id": 297,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0085.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0085.jpg",
    "alt": "Rayed_0085.jpg"
  },
  {
    "id": 298,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0086.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0086.jpg",
    "alt": "Rayed_0086.jpg"
  },
  {
    "id": 299,
    "url": "https://cdn.aayus.me/tedx/press/Rayed_0090.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Rayed_0090.jpg",
    "alt": "Rayed_0090.jpg"
  },

  {
    "id": 300,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6763.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6763.jpg",
    "alt": "Swastik_6763.jpg"
},
{
    "id": 301,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6765.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6765.jpg",
    "alt": "Swastik_6765.jpg"
},
{
    "id": 302,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6766.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6766.jpg",
    "alt": "Swastik_6766.jpg"
},
{
    "id": 303,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6767.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6767.jpg",
    "alt": "Swastik_6767.jpg"
},
{
    "id": 304,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6768.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6768.jpg",
    "alt": "Swastik_6768.jpg"
},
{
    "id": 305,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6769(1).jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6769(1).jpg",
    "alt": "Swastik_6769(1).jpg"
},
{
    "id": 306,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6769.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6769.jpg",
    "alt": "Swastik_6769.jpg"
},
{
    "id": 307,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6770.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6770.jpg",
    "alt": "Swastik_6770.jpg"
},
{
    "id": 308,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6771.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6771.jpg",
    "alt": "Swastik_6771.jpg"
},
{
    "id": 309,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6772.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6772.jpg",
    "alt": "Swastik_6772.jpg"
},
{
    "id": 310,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6773.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6773.jpg",
    "alt": "Swastik_6773.jpg"
},
{
    "id": 311,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6774.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6774.jpg",
    "alt": "Swastik_6774.jpg"
},
{
    "id": 312,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6775.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6775.jpg",
    "alt": "Swastik_6775.jpg"
},
{
    "id": 313,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6776.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6776.jpg",
    "alt": "Swastik_6776.jpg"
},
{
    "id": 314,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6777.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6777.jpg",
    "alt": "Swastik_6777.jpg"
},
{
    "id": 315,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6780.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6780.jpg",
    "alt": "Swastik_6780.jpg"
},
{
    "id": 316,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6781.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6781.jpg",
    "alt": "Swastik_6781.jpg"
},
{
    "id": 317,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6782.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6782.jpg",
    "alt": "Swastik_6782.jpg"
},
{
    "id": 318,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6783.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6783.jpg",
    "alt": "Swastik_6783.jpg"
},
{
    "id": 319,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6785.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6785.jpg",
    "alt": "Swastik_6785.jpg"
},
{
    "id": 320,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6786.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6786.jpg",
    "alt": "Swastik_6786.jpg"
},
{
    "id": 321,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6787.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6787.jpg",
    "alt": "Swastik_6787.jpg"
},
{
    "id": 322,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6788.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6788.jpg",
    "alt": "Swastik_6788.jpg"
},
{
    "id": 323,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6789.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6789.jpg",
    "alt": "Swastik_6789.jpg"
},
{
    "id": 324,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6790.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6790.jpg",
    "alt": "Swastik_6790.jpg"
},
{
    "id": 325,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6791.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6791.jpg",
    "alt": "Swastik_6791.jpg"
},
{
    "id": 326,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6792.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6792.jpg",
    "alt": "Swastik_6792.jpg"
},
{
    "id": 327,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6793.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6793.jpg",
    "alt": "Swastik_6793.jpg"
},
{
    "id": 328,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6794.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6794.jpg",
    "alt": "Swastik_6794.jpg"
},
{
    "id": 329,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6795.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6795.jpg",
    "alt": "Swastik_6795.jpg"
},
{
    "id": 330,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6796.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6796.jpg",
    "alt": "Swastik_6796.jpg"
},
{
    "id": 331,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6797.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6797.jpg",
    "alt": "Swastik_6797.jpg"
},
{
    "id": 332,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6811.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6811.jpg",
    "alt": "Swastik_6811.jpg"
},
{
    "id": 333,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6812.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6812.jpg",
    "alt": "Swastik_6812.jpg"
},
{
    "id": 334,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6818.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6818.jpg",
    "alt": "Swastik_6818.jpg"
},
{
    "id": 335,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6819.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6819.jpg",
    "alt": "Swastik_6819.jpg"
},
{
    "id": 336,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6820(1).jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6820(1).jpg",
    "alt": "Swastik_6820(1).jpg"
},
{
    "id": 337,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6820.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6820.jpg",
    "alt": "Swastik_6820.jpg"
},
{
    "id": 338,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6821(1).jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6821(1).jpg",
    "alt": "Swastik_6821(1).jpg"
},
{
    "id": 339,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6821.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6821.jpg",
    "alt": "Swastik_6821.jpg"
},
{
    "id": 340,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6822.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6822.jpg",
    "alt": "Swastik_6822.jpg"
},
{
    "id": 341,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6823.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6823.jpg",
    "alt": "Swastik_6823.jpg"
},
{
    "id": 342,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6824.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6824.jpg",
    "alt": "Swastik_6824.jpg"
},
{
    "id": 343,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6825.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6825.jpg",
    "alt": "Swastik_6825.jpg"
},
{
    "id": 344,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6826.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6826.jpg",
    "alt": "Swastik_6826.jpg"
},
{
    "id": 345,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6827.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6827.jpg",
    "alt": "Swastik_6827.jpg"
},
{
    "id": 346,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6828.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6828.jpg",
    "alt": "Swastik_6828.jpg"
},
{
    "id": 347,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6829.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6829.jpg",
    "alt": "Swastik_6829.jpg"
},
{
    "id": 348,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6830.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6830.jpg",
    "alt": "Swastik_6830.jpg"
},
{
    "id": 349,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6831.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6831.jpg",
    "alt": "Swastik_6831.jpg"
},
{
    "id": 350,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6832.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6832.jpg",
    "alt": "Swastik_6832.jpg"
},
{
    "id": 351,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6833.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6833.jpg",
    "alt": "Swastik_6833.jpg"
},
{
    "id": 352,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6834.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6834.jpg",
    "alt": "Swastik_6834.jpg"
},
{
    "id": 353,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6835.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6835.jpg",
    "alt": "Swastik_6835.jpg"
},
{
    "id": 354,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6836.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6836.jpg",
    "alt": "Swastik_6836.jpg"
},
{
    "id": 355,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6837.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6837.jpg",
    "alt": "Swastik_6837.jpg"
},
{
    "id": 356,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6838.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6838.jpg",
    "alt": "Swastik_6838.jpg"
},
{
    "id": 357,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6839.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6839.jpg",
    "alt": "Swastik_6839.jpg"
},
{
    "id": 358,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6840.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6840.jpg",
    "alt": "Swastik_6840.jpg"
},
{
    "id": 359,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6841.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6841.jpg",
    "alt": "Swastik_6841.jpg"
},
{
    "id": 360,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6842.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6842.jpg",
    "alt": "Swastik_6842.jpg"
},
{
    "id": 361,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6843.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6843.jpg",
    "alt": "Swastik_6843.jpg"
},
{
    "id": 362,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6844.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6844.jpg",
    "alt": "Swastik_6844.jpg"
},
{
    "id": 363,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6845.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6845.jpg",
    "alt": "Swastik_6845.jpg"
},
{
    "id": 364,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6846.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6846.jpg",
    "alt": "Swastik_6846.jpg"
},
{
    "id": 365,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6847.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6847.jpg",
    "alt": "Swastik_6847.jpg"
},
{
    "id": 366,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6848.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6848.jpg",
    "alt": "Swastik_6848.jpg"
},
{
    "id": 367,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6849.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6849.jpg",
    "alt": "Swastik_6849.jpg"
},
{
    "id": 368,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6850.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6850.jpg",
    "alt": "Swastik_6850.jpg"
},
{
    "id": 369,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6851.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6851.jpg",
    "alt": "Swastik_6851.jpg"
},
{
    "id": 370,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6852.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6852.jpg",
    "alt": "Swastik_6852.jpg"
},
{
    "id": 371,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6853.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6853.jpg",
    "alt": "Swastik_6853.jpg"
},
{
    "id": 372,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6854.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6854.jpg",
    "alt": "Swastik_6854.jpg"
},
{
    "id": 373,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6855.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6855.jpg",
    "alt": "Swastik_6855.jpg"
},
{
    "id": 374,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6856.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6856.jpg",
    "alt": "Swastik_6856.jpg"
},
{
    "id": 375,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6857.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6857.jpg",
    "alt": "Swastik_6857.jpg"
},
{
    "id": 376,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6858.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6858.jpg",
    "alt": "Swastik_6858.jpg"
},
{
    "id": 377,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6859.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6859.jpg",
    "alt": "Swastik_6859.jpg"
},
{
    "id": 378,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6860.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6860.jpg",
    "alt": "Swastik_6860.jpg"
},
{
    "id": 379,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6861.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6861.jpg",
    "alt": "Swastik_6861.jpg"
},
{
    "id": 380,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6862.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6862.jpg",
    "alt": "Swastik_6862.jpg"
},
{
    "id": 381,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6863.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6863.jpg",
    "alt": "Swastik_6863.jpg"
},
{
    "id": 382,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6864.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6864.jpg",
    "alt": "Swastik_6864.jpg"
},
{
    "id": 383,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6865.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6865.jpg",
    "alt": "Swastik_6865.jpg"
},
{
    "id": 384,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6866.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6866.jpg",
    "alt": "Swastik_6866.jpg"
},
{
    "id": 385,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6867.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6867.jpg",
    "alt": "Swastik_6867.jpg"
},
{
    "id": 386,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6868.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6868.jpg",
    "alt": "Swastik_6868.jpg"
},
{
    "id": 387,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6869.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6869.jpg",
    "alt": "Swastik_6869.jpg"
},
{
    "id": 388,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6870.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6870.jpg",
    "alt": "Swastik_6870.jpg"
},
{
    "id": 389,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6871.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6871.jpg",
    "alt": "Swastik_6871.jpg"
},
{
    "id": 390,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6872.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6872.jpg",
    "alt": "Swastik_6872.jpg"
},
{
    "id": 391,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6873.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6873.jpg",
    "alt": "Swastik_6873.jpg"
},
{
    "id": 392,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6874.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6874.jpg",
    "alt": "Swastik_6874.jpg"
},
{
    "id": 393,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6875.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6875.jpg",
    "alt": "Swastik_6875.jpg"
},
{
    "id": 394,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6876.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6876.jpg",
    "alt": "Swastik_6876.jpg"
},
{
    "id": 395,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6877.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6877.jpg",
    "alt": "Swastik_6877.jpg"
},
{
    "id": 396,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6878.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6878.jpg",
    "alt": "Swastik_6878.jpg"
},
{
    "id": 397,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6879.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6879.jpg",
    "alt": "Swastik_6879.jpg"
},
{
    "id": 398,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6880.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6880.jpg",
    "alt": "Swastik_6880.jpg"
},
{
    "id": 399,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6881.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6881.jpg",
    "alt": "Swastik_6881.jpg"
},
{
    "id": 400,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6882.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6882.jpg",
    "alt": "Swastik_6882.jpg"
},
{
    "id": 401,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6883.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6883.jpg",
    "alt": "Swastik_6883.jpg"
},
{
    "id": 402,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6884.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6884.jpg",
    "alt": "Swastik_6884.jpg"
},
{
    "id": 403,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6885.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6885.jpg",
    "alt": "Swastik_6885.jpg"
},
{
    "id": 404,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6886.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6886.jpg",
    "alt": "Swastik_6886.jpg"
},
{
    "id": 405,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6887.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6887.jpg",
    "alt": "Swastik_6887.jpg"
},
{
    "id": 406,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6888.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6888.jpg",
    "alt": "Swastik_6888.jpg"
},
{
    "id": 407,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6889.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6889.jpg",
    "alt": "Swastik_6889.jpg"
},
{
    "id": 408,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6890.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6890.jpg",
    "alt": "Swastik_6890.jpg"
},
{
    "id": 409,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6891.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6891.jpg",
    "alt": "Swastik_6891.jpg"
},
{
    "id": 410,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6892.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6892.jpg",
    "alt": "Swastik_6892.jpg"
},
{
    "id": 411,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6893.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6893.jpg",
    "alt": "Swastik_6893.jpg"
},
{
    "id": 412,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6894.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6894.jpg",
    "alt": "Swastik_6894.jpg"
},
{
    "id": 413,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6895.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6895.jpg",
    "alt": "Swastik_6895.jpg"
},
{
    "id": 414,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6896.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6896.jpg",
    "alt": "Swastik_6896.jpg"
},
{
    "id": 415,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6897.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6897.jpg",
    "alt": "Swastik_6897.jpg"
},
{
    "id": 416,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6898.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6898.jpg",
    "alt": "Swastik_6898.jpg"
},
{
    "id": 417,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6899.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6899.jpg",
    "alt": "Swastik_6899.jpg"
},
{
    "id": 418,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6900.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6900.jpg",
    "alt": "Swastik_6900.jpg"
},
{
    "id": 419,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6901.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6901.jpg",
    "alt": "Swastik_6901.jpg"
},
{
    "id": 420,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6902.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6902.jpg",
    "alt": "Swastik_6902.jpg"
},
{
    "id": 421,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6903.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6903.jpg",
    "alt": "Swastik_6903.jpg"
},
{
    "id": 422,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6904.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6904.jpg",
    "alt": "Swastik_6904.jpg"
},
{
    "id": 423,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6905.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6905.jpg",
    "alt": "Swastik_6905.jpg"
},
{
    "id": 424,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6906.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6906.jpg",
    "alt": "Swastik_6906.jpg"
},
{
    "id": 425,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6907.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6907.jpg",
    "alt": "Swastik_6907.jpg"
},
{
    "id": 426,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6908.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6908.jpg",
    "alt": "Swastik_6908.jpg"
},
{
    "id": 427,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6909.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6909.jpg",
    "alt": "Swastik_6909.jpg"
},
{
    "id": 428,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6910.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6910.jpg",
    "alt": "Swastik_6910.jpg"
},
{
    "id": 429,
    "url": "https://cdn.aayus.me/tedx/press/Swastik_6911.jpg",
    "thumbnail": "https://cdn.aayus.me/tedx/press/thumbs/Swastik_6911.jpg",
    "alt": "Swastik_6911.jpg"
}
]


export { departments, curators, timeline, lead, images };
