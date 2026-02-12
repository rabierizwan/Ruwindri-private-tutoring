export type Bundle = {
  id: string;
  syllabus: string;
  title: string;
  includes: string[];
  price: string;
  stripeUrl: string;
};
  
export const bundles: Bundle[] = [
    // -----------------------
    // Year 7–10
    // -----------------------
    {
      id: "y7-10-papers",
      syllabus: "Year 7–10 Mathematics",
      title: "Paper 1 & Paper 2 Bundle",
      includes: ["Paper 1", "Paper 2"],
      price: "$15.99",
      stripeUrl: "https://buy.stripe.com/fZudR83WpdSOaHf3wX7ss02",
    },
  
    // -----------------------
    // Year 11 Extension 1
    // -----------------------
    {
      id: "y11-functions",
      syllabus: "Year 11 Mathematics Extension 1",
      title: "Functions – All Subtopics",
      includes: [
        "Limits and Asymptotes",
        "Inverse Functions",
        "Graphs",
        "Coordinate Geometry",
        "Polynomial Functions",
      ],
      price: "$19.99",
      stripeUrl: "https://buy.stripe.com/fZu14m1Oh7uq4iRd7x7ss03",
    },
    {
      id: "y11-trigonometry",
      syllabus: "Year 11 Mathematics Extension 1",
      title: "Trigonometry – All Subtopics",
      includes: [
        "Sector + Segment Area",
        "Angles",
        "Trigonometry 2",
        "Inverse Trigonometry",
      ],
      price: "$15.99",
      stripeUrl: "https://buy.stripe.com/eVqbJ03Wp2a67v34B17ss04",
    },
    {
      id: "y11-calculus",
      syllabus: "Year 11 Mathematics Extension 1",
      title: "Calculus – All Subtopics",
      includes: [
        "Differential Calculus",
        "Geometrical Applications of Differentiation",
        "Differentiation of Logarithmic + Exponential Functions",
        "Differentiation of Trigonometric Functions",
      ],
      price: "$19.99",
      stripeUrl: "https://buy.stripe.com/9B64gy8cFg0WeXv9Vl7ss05",
    },
    {
      id: "y11-combinatorics",
      syllabus: "Year 11 Mathematics Extension 1",
      title: "Combinatorics – All Subtopics",
      includes: [
        "Binomial Expansion",
        "Permutations and Combinations",
      ],
      price: "$11.99",
      stripeUrl: "https://buy.stripe.com/4gM3cu78B5mi8z7gjJ7ss06",
    },
    {
      id: "y11-prelim",
      syllabus: "Year 11 Mathematics Extension 1",
      title: "Prelim Paper – All Papers",
      includes: ["Paper 1", "Paper 2"],
      price: "$16.99",
      stripeUrl: "https://buy.stripe.com/8x2eVcboRcOK5mV3wX7ss07",
    },
  
    // -----------------------
    // Year 12 Extension 1
    // -----------------------
    {
      id: "y12-proof",
      syllabus: "Year 12 Mathematics Extension 1",
      title: "Proof – All",
      includes: ["Proofs"],
      price: "$7.99",
      stripeUrl: "https://buy.stripe.com/dRm4gydwZ01YbLjffF7ss08",
    },
    {
      id: "y12-vectors",
      syllabus: "Year 12 Mathematics Extension 1",
      title: "Vectors – All",
      includes: ["Vector Geometry"],
      price: "$7.99",
      stripeUrl: "https://buy.stripe.com/cNi14m0Kd7uq16FebB7ss09",
    },
    {
      id: "y12-calculus",
      syllabus: "Year 12 Mathematics Extension 1",
      title: "Calculus – All Subtopics",
      includes: [
        "Differential Equations",
        "Integration of Logarithmic + Exponential Functions",
        "Integration of Trigonometric Functions",
        "Physical Applications of Integration",
      ],
      price: "$28.99",
      stripeUrl: "https://buy.stripe.com/5kQ5kC3Wpg0W4iR7Nd7ss0a",
    },
    {
      id: "y12-trigonometry",
      syllabus: "Year 12 Mathematics Extension 1",
      title: "Trigonometry – All",
      includes: ["Trigonometry"],
      price: "$7.99",
      stripeUrl: "https://buy.stripe.com/aFa4gy78B7uq02BebB7ss0b",
    },
    {
      id: "y12-stat",
      syllabus: "Year 12 Mathematics Extension 1",
      title: "Statistical Analysis – All",
      includes: ["Statistical Analysis"],
      price: "$7.99",
      stripeUrl: "https://buy.stripe.com/cNi5kCgJbdSO4iRc3t7ss0c",
    },
    {
      id: "y12-hsc",
      syllabus: "Year 12 Mathematics Extension 1",
      title: "HSC Papers – All Papers",
      includes: ["Paper 1", "Paper 2"],
      price: "$25.99",
      stripeUrl: "https://buy.stripe.com/6oU6oG64x8yu6qZd7x7ss0d",
    },
  
    // -----------------------
    // Year 12 Extension 2
    // -----------------------
    {
      id: "y12ext2-topics",
      syllabus: "Year 12 Mathematics Extension 2",
      title: "All Topics Bundle",
      includes: [
        "Proofs",
        "Vectors",
        "Complex Numbers",
        "Calculus",
        "Mechanics",
      ],
      price: "$69.99",
      stripeUrl: "https://buy.stripe.com/7sYdR850t7uq9Db5F57ss0e",
    },
    {
      id: "y12ext2-hsc",
      syllabus: "Year 12 Mathematics Extension 2",
      title: "HSC Papers – All Papers",
      includes: ["Paper 1", "Paper 2", "Paper 3"],
      price: "$49.99",
      stripeUrl: "https://buy.stripe.com/aFa7sK78BeWS5mV3wX7ss01",
    },
];
