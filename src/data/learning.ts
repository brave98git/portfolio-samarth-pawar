export interface LearningTopic {
  title: string;
  category: string;
  description: string;
  topics: string[];
}

export const learningTopics: LearningTopic[] = [
  {
    title: "AI & Machine Learning",
    category: "Intelligent Systems",
    description: "Foundational ML algorithms, neural networks, LLM application development, and model integration.",
    topics: ["Supervised & Unsupervised Learning", "Neural Networks & PyTorch", "LLM APIs & Prompt Engineering", "Vector DBs & Embeddings"]
  },
  {
    title: "System Design & Architecture",
    category: "Distributed Systems",
    description: "Designing scalable, fault-tolerant, high-throughput backend systems and caching layers.",
    topics: ["Microservices vs Monoliths", "Load Balancing & Reverse Proxies", "Caching & Redis", "Database Sharding & Replication"]
  },
  {
    title: "Operating Systems & Internals",
    category: "Core Computing",
    description: "Deepening understanding of low-level system execution, memory hierarchy, and process scheduling.",
    topics: ["Process & Thread Synchronization", "Virtual Memory & Paging", "File Systems & I/O", "Linux Kernel & System Calls"]
  },
  {
    title: "Computer Networks & Protocols",
    category: "Networking",
    description: "Transport layer mechanisms, TCP/IP stack, socket programming, and low-latency network communication.",
    topics: ["TCP / UDP & Flow Control", "HTTP/2, HTTP/3 & WebSockets", "DNS, TLS & Routing Protocols", "Socket Programming"]
  }
];
