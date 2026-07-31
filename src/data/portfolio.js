export const personalInfo = {
  name: "Saurabh Sonawane",
  title: "Backend Engineer — Distributed Systems & Microservices",
  tagline: "I build systems that never sleep.",
  description:
    "Backend Software Engineer with 3+ years of experience building large-scale microservices for enterprise retail e-commerce. I specialize in event-driven architecture, real-time inventory automation, competitive pricing engines, and high-throughput backend services using Java, Spring Boot, Kafka, and Redis.",
  resumeUrl: "#",
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Fulfillment Centers Served", value: "50+" },
  { label: "Articles Priced in Real-Time", value: "50K+" },
  { label: "Microservices Integrated", value: "10+" },
];

export const skills = {
  "Languages & Core": {
    icon: "backend",
    items: [
      "Java 8",
      "Java 21",
      "SQL",
      "Multithreading",
      "Virtual Threads",
      "Design Patterns",
    ],
  },
  "Frameworks & Libraries": {
    icon: "architecture",
    items: [
      "Spring Boot",
      "Spring Cloud",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Resilience4j",
    ],
  },
  "Messaging & Events": {
    icon: "practices",
    items: [
      "Apache Kafka",
      "IBM MQ (JMS)",
      "Event-Driven Architecture",
      "Dead-Letter Queues",
      "Retry Mechanisms",
      "Async Processing",
    ],
  },
  "Databases & Caching": {
    icon: "database",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Redisson Distributed Locks",
      "Cache-Aside Pattern",
      "MongoDB Indexing",
    ],
  },
  "DevOps & Tools": {
    icon: "devops",
    items: [
      "Git",
      "Maven",
      "Docker",
      "GitHub Actions",
      "Swagger / OpenAPI",
      "Log4j2",
    ],
  },
  "Architecture & Concepts": {
    icon: "frontend",
    items: [
      "Microservices",
      "Distributed Systems",
      "REST APIs",
      "Distributed Locking",
      "CQRS",
      "Scheduler Coordination",
    ],
  },
};

export const experience = [
  {
    role: "Assistant Manager — Software Developer",
    company: "Avenue E-Commerce Ltd (DMart Ready)",
    location: "Mumbai",
    period: "Jun 2023 — Present",
    highlights: [
      "Designed & built Inventory Executor — an automation framework processing real-time stock events across 50+ fulfillment centers using Java 8, Spring Boot, Kafka, IBM MQ, MongoDB & Redis",
      "Built event-driven workflows for RTAM, SAP & MRP with configurable retry mechanisms, async execution, and dead-letter handling for reliable high-volume message processing",
      "Engineered distributed schedulers with Redis (Redisson) locking ensuring exactly-once execution across clustered deployments",
      "Developed Right Price Engine — a greenfield competitive pricing platform automating price decisions for 50K+ articles using Java 21, Spring Boot 4, Kafka & rule-based workflows",
      "Built configurable Price Decision Engine supporting automated increase, decrease, hold, approval & skip logic based on business rules and competitor data",
      "Implemented Kafka pipelines integrated with 3+ microservices via OpenFeign & Resilience4j for fault-tolerant inter-service communication",
      "Owned complete feature lifecycle: requirement analysis, LLD, implementation, testing, deployment & production incident resolution",
    ],
  },
  {
    role: "PG Diploma — Advanced Computing (A Grade)",
    company: "C-DAC, Nashik",
    location: "Nashik",
    period: "Sep 2022 — Feb 2023",
    highlights: [
      "Intensive program covering Java, Data Structures, Databases, Web Technologies & Software Engineering",
      "Foundation for enterprise software development and system design thinking",
    ],
  },
  {
    role: "Bachelor of Engineering — Mechanical",
    company: "Savitribai Phule Pune University",
    location: "Pune",
    period: "Aug 2016 — Jul 2021",
    highlights: [
      "Engineering fundamentals with problem-solving and analytical thinking",
      "Transitioned to software through self-learning and C-DAC program",
    ],
  },
];

export const projects = [
  {
    title: "Inventory Executor",
    description:
      "Inventory automation agent that processes out-of-stock events and auto-restocks articles in real-time. Handles Kafka event streams, scheduled jobs, retry mechanisms, and REST integrations with design patterns across 50+ fulfillment centers.",
    tags: ["Java 8", "Spring Boot", "Kafka", "IBM MQ", "MongoDB", "Redis"],
    architecture: "Event-Driven Automation",
    link: "#",
    featured: true,
  },
  {
    title: "Right Price Engine",
    description:
      "Real-time competitive pricing platform that automatically adjusts prices for 50K+ articles based on configurable business rules and competitor data. Rule-based decision engine with increase, decrease, hold, and approval workflows.",
    tags: ["Java 21", "Spring Boot 4", "Kafka", "Redis", "MongoDB", "Resilience4j"],
    architecture: "Rule-Based Microservice",
    link: "#",
    featured: true,
  },
  {
    title: "Inside JVM",
    description:
      "Deep-dive exploration project demonstrating JVM internals — class loading, memory model, garbage collection, and bytecode execution. Educational resource for Java engineers.",
    tags: ["Java", "JVM Internals", "Educational"],
    architecture: "Learning & OSS",
    link: "https://github.com/Saurabhsds13/inside-jvm",
    featured: true,
  },
  {
    title: "IBM OMS System",
    description:
      "Full-featured Order Management System handling order lifecycle from placement to fulfillment with inventory sync, status tracking, and event notifications.",
    tags: ["Java", "Spring Boot", "REST APIs", "MongoDB"],
    architecture: "Microservice",
    link: "https://github.com/Saurabhsds13/IBM-OMS-SYSTEM",
    featured: false,
  },
  {
    title: "QuickBasket — E-Commerce System",
    description:
      "End-to-end e-commerce platform with product catalog, cart, checkout, and user management. Full-stack implementation showcasing both backend and frontend engineering.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "REST APIs"],
    architecture: "Full-Stack Application",
    link: "https://github.com/Saurabhsds13/QuickBasket-Ecommerce-System",
    featured: false,
  },
];

export const architecturePhilosophy = [
  {
    principle: "Design for Failure",
    description:
      "Every distributed system fails. I build with circuit breakers, retries, dead-letter queues, and graceful degradation as first-class citizens — not afterthoughts.",
  },
  {
    principle: "Event-Driven First",
    description:
      "Loose coupling through events. Kafka pipelines with idempotent consumers, exactly-once semantics, and async processing enable systems that scale without tight dependencies.",
  },
  {
    principle: "Exactly-Once Matters",
    description:
      "In distributed schedulers and event processors, duplicate execution is a bug. Redis distributed locks and idempotent handlers ensure correctness across clustered deployments.",
  },
  {
    principle: "Own the Lifecycle",
    description:
      "From requirement analysis to LLD to production support — I believe in full ownership. You build it, you run it, you fix it at 2 AM.",
  },
];

export const contact = {
  email: "saurabhsds13@gmail.com",
  github: "https://github.com/Saurabhsds13",
  linkedin: "https://linkedin.com/in/saurabhsds13",
};
