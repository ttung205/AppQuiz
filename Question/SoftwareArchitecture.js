// Dữ liệu câu hỏi Kiến trúc phần mềm
var questionsData = [
  {
    "question": "Which statement best captures the fundamental nature of software architecture as a set of design decisions?",
    "options": [
      "The decisions primarily dictate the choice of programming language.",
      "The decisions define the structure and are difficult to change once implemented.",
      "The decisions are focused solely on satisfying functional requirements.",
      "The decisions exclusively pertain to the architecture in the small."
    ],
    "correct": 1
  },
  {
    "question": "What is the primary goal of the system architect, according to the principles of software architecture?",
    "options": [
      "To maximize code reusability and minimize implementation effort.",
      "To manage the project schedule and control the budget.",
      "To satisfy the system's Quality Attributes (Non-Functional Requirements) while meeting the functional needs.",
      "To define the sequence of activities in the software process model."
    ],
    "correct": 2
  },
  {
    "question": "Architecture in the large is primarily concerned with the decomposition of which elements?",
    "options": [
      "An individual program into its components.",
      "Complex enterprise systems that include other systems, programs, and components distributed over different computers.",
      "Object classes within a single program.",
      "The algorithms used within a single component."
    ],
    "correct": 1
  },
  {
    "question": "Which system characteristic is most dominantly influenced by the system's architecture, as confirmed by a study on 'architecturally significant requirements'?",
    "options": [
      "The implementation details of individual components.",
      "The non-functional system characteristics.",
      "The speed of the final compiler used.",
      "The amount of natural language used in requirements specification."
    ],
    "correct": 1
  },
  {
    "question": "The architectural design process is best considered as:",
    "options": [
      "A formal, formulaic sequence of well-defined activities.",
      "A fixed, one-time activity executed only after requirements validation.",
      "A creative process involving a series of structural decisions that profoundly affect the system.",
      "The sole activity of defining the physical view of the system."
    ],
    "correct": 2
  },
  {
    "question": "Which term is used to describe a short excerpt from the beginning of an attached file, used for assessment of its relevance?",
    "options": [
      "snippetFromBack",
      "contentFetchId",
      "fileMimeType",
      "snippetFromFront"
    ],
    "correct": 3
  },
  {
    "question": "When using an architectural pattern, what does the pattern itself describe, in addition to explaining when it may be used and its advantages/disadvantages?",
    "options": [
      "The specific code implementation for every class.",
      "The generic system architecture.",
      "The project manager's required skills.",
      "The optimal operational profile for reliability measurement."
    ],
    "correct": 1
  },
  {
    "question": "Which term is NOT listed as a key issue driving changes in modern software engineering in the provided text?",
    "options": [
      "Managing complexity.",
      "Integrating agility with other methods.",
      "Ensuring systems are secure and resilient.",
      "Minimizing legacy system decommissioning."
    ],
    "correct": 3
  },
  {
    "question": "Which element should be defined in a software design document, according to the abstract model of the design process, besides the structure of the software and data models?",
    "options": [
      "The requirements elicitation plan.",
      "The interfaces between system components.",
      "The user acceptance testing results.",
      "The history of configuration management changes."
    ],
    "correct": 1
  },
  {
    "question": "The notion that \"The rationale (the why) is more important than the design (the what)\" is a key lesson associated with which process?",
    "options": [
      "Requirements validation.",
      "System testing.",
      "Synthesizing software architecture.",
      "Software maintenance."
    ],
    "correct": 2
  },
  {
    "question": "A layered architecture is primarily used to support what non-functional system property?",
    "options": [
      "Confidentiality, by encrypting data at the repository layer.",
      "Incremental development and system evolution, as long as the interfaces between layers are stable.",
      "Real-time response, by allowing direct communication between non-adjacent layers.",
      "Low cost, by eliminating the need for separate databases."
    ],
    "correct": 1
  },
  {
    "question": "In the Model-View-Controller (MVC) pattern, which component is responsible for managing the application data and operations on that data, completely independent of how they are presented or viewed?",
    "options": [
      "The View.",
      "The Controller.",
      "The Model.",
      "The Observer."
    ],
    "correct": 2
  },
  {
    "question": "What is the main structural disadvantage of the Repository architectural pattern when all components are centralized and share the same data store?",
    "options": [
      "Managing the data store's redundancy and diversity is complex.",
      "It is difficult to scale for large numbers of users.",
      "Changes to the data structure are propagated to all components.",
      "It necessitates a two-tier client-server implementation."
    ],
    "correct": 2
  },
  {
    "question": "The Pipe and Filter architectural pattern excels in which scenario due to the independent nature of its filters?",
    "options": [
      "Applications where state must be strictly maintained across all stages of processing.",
      "Batch processing systems where input is processed by a series of sequential transformations.",
      "Interactive transaction processing systems requiring immediate database updates.",
      "Embedded systems with strict timing requirements."
    ],
    "correct": 1
  },
  {
    "question": "What is the fundamental distinction between the Repository pattern and the Black Board pattern?",
    "options": [
      "In the Black Board model, the components interact exclusively through service interfaces, while the Repository uses shared memory.",
      "In the Black Board model, the control component (Black Board) explicitly manages component interaction, whereas in the Repository pattern, components interact only via the Repository.",
      "The Black Board pattern is exclusively for real-time systems, while the Repository pattern is for batch processing.",
      "The Repository pattern is an architectural style in the large, while the Black Board is in the small."
    ],
    "correct": 1
  },
  {
    "question": "Which architectural pattern is most effective for a compiler's organization, specifically handling lexical analysis, parsing, type checking, and code generation?",
    "options": [
      "Layered architecture.",
      "Model-View-Controller (MVC).",
      "Pipe and Filter.",
      "Client- Server."
    ],
    "correct": 2
  },
  {
    "question": "In a two-tier client–server architecture, which element is most susceptible to becoming a performance bottleneck?",
    "options": [
      "The user interface on the client machine.",
      "The single server hosting both the application and database.",
      "The local network connection between client and server.",
      "The component interface definition language."
    ],
    "correct": 1
  },
  {
    "question": "A reference architecture is best described as:",
    "options": [
      "A model that describes how an application system is structured in the printed version of a book.",
      "A general architectural model that is customized and adapted for a specific class of applications.",
      "The architecture used in a published case study for comparison.",
      "The specific architecture for a pipe and filter compiler."
    ],
    "correct": 1
  },
  {
    "question": "Why does the Layered Architecture approach sometimes reduce the potential for performance optimization?",
    "options": [
      "Strict separation of layers prevents direct, optimized communication between non- adjacent layers.",
      "The Model component's separation from the View component introduces overhead.",
      "The centralized Repository becomes the single point of failure.",
      "It mandates the use of an asynchronous EDA style."
    ],
    "correct": 0
  },
  {
    "question": "Which of the following is NOT a common architectural pattern mentioned in the text?",
    "options": [
      "Model-View-Controller (MVC).",
      "Repository.",
      "Pipe and Filter.",
      "Dependency Injection (DI)."
    ],
    "correct": 3
  },
  {
    "question": "In the MVC pattern, if a user clicks a button, which component is the first to be notified and responsible for mapping the user action to an application action?",
    "options": [
      "The Model.",
      "The View.",
      "The Controller.",
      "The Database."
    ],
    "correct": 2
  },
  {
    "question": "What is a key characteristic of the Pipe and Filter pattern that contributes to system evolution?",
    "options": [
      "Filters operate independently and do not know the format of the data they process.",
      "Filters do not store state and can be reconfigured or replaced without affecting other filters.",
      "Filters must be executed sequentially on a single thread.",
      "Data must be transferred between pipes using a service-oriented architecture."
    ],
    "correct": 1
  },
  {
    "question": "A multi-tier client-server architecture typically involves separating which logical components into distinct, specialized servers?",
    "options": [
      "Repository, Model, and View components.",
      "The presentation, application processing, and data management components.",
      "Functional and non-functional requirements.",
      "The pipe and the filter components."
    ],
    "correct": 1
  },
  {
    "question": "Which type of architectural view focuses on how the system is decomposed into components for the purposes of development and testing?",
    "options": [
      "Conceptual view.",
      "Logical view.",
      "Process view.",
      "Development view."
    ],
    "correct": 3
  },
  {
    "question": "The process view of an architecture documents:",
    "options": [
      "The principal architectural components as seen by the system user.",
      "The decomposition of the system into logical objects.",
      "The run-time organization of the system as a set of interacting processes.",
      "The way in which the software is mapped onto the hardware processors."
    ],
    "correct": 2
  },
  {
    "question": "Why is the Repository pattern more suited to systems where the performance bottleneck is not the data management system?",
    "options": [
      "All components accessing the shared data store can lead to data access contention.",
      "Data validation is decentralized, increasing risk.",
      "It only supports simple, non-relational data structures.",
      "It is fundamentally incompatible with the client-server pattern."
    ],
    "correct": 0
  },
  {
    "question": "A key advantage of the Client-Server architecture is:",
    "options": [
      "The ability to manage and run processes only on the client machine.",
      "The possibility of distributing data and processing across a range of servers.",
      "The mandatory use of the Observer pattern for interaction.",
      "The inherent simplicity of two-tier implementations for high-traffic systems."
    ],
    "correct": 1
  },
  {
    "question": "The concept of \"Architecture in the small\" focuses on:",
    "options": [
      "The use of design patterns for object-oriented design.",
      "The architecture of complex enterprise systems.",
      "The distribution of the system over different physical computers.",
      "The security protocols used for inter-component communication."
    ],
    "correct": 0
  },
  {
    "question": "In a layered architecture, a client request often passes through how many layers before reaching the core service and then back to the client?",
    "options": [
      "Exactly one layer.",
      "Multiple layers, with strict adherence to the layer interface.",
      "Only the top-most and bottom-most layers.",
      "The Model and the View, but bypassing the Controller."
    ],
    "correct": 1
  },
  {
    "question": "Which pair of architectural concepts represents two distinct levels of abstraction described in the text?",
    "options": [
      "Logical View and Physical View.",
      "Component-based software engineering and Real- time software engineering.",
      "Architecture in the small and Architecture in the large.",
      "Requirements elicitation and Requirements specification."
    ],
    "correct": 2
  },
  {
    "question": "If an application architecture is modeled as a set of separate, specialized components with no shared data repository, and communication is via message passing, which core pattern is being leveraged?",
    "options": [
      "Layered Architecture.",
      "Repository.",
      "Client-Server.",
      "Pipe and Filter."
    ],
    "correct": 2
  },
  {
    "question": "What is the fundamental goal of using Architectural Patterns?",
    "options": [
      "To dictate the project's pricing and estimation.",
      "To reuse knowledge about generic system architectures.",
      "To enforce the use of a specific programming language.",
      "To eliminate the need for any formal requirements document."
    ],
    "correct": 1
  },
  {
    "question": "Which architectural pattern is best suited for an application where the key non- functional requirement is the isolation and replacement of the data access logic without modifying the core business logic?",
    "options": [
      "Pipe and Filter.",
      "Model-View-Controller (MVC).",
      "Layered Architecture (with the data layer at the bottom).",
      "Peer-to-Peer (P2P)."
    ],
    "correct": 2
  },
  {
    "question": "In the MVC pattern, how is the Model typically decoupled from the View, allowing multiple Views for the same Model?",
    "options": [
      "By using an API Gateway.",
      "By requiring the Controller to manage all data copies.",
      "By using an observer or notification mechanism.",
      "By ensuring the Model is implemented as a RESTful service."
    ],
    "correct": 2
  },
  {
    "question": "The physical view of a software architecture focuses on:",
    "options": [
      "The dynamic execution of the system processes.",
      "The mapping of the software components onto the hardware processors.",
      "The decomposition of the system into objects and classes.",
      "The high-level features understandable to stakeholders."
    ],
    "correct": 1
  },
  {
    "question": "Which non-functional requirement is directly enhanced by the Pipe and Filter pattern's characteristic of independent, stateless filters?",
    "options": [
      "Reliability.",
      "Reusability.",
      "Confidentiality.",
      "Real-time predictability."
    ],
    "correct": 1
  },
  {
    "question": "A system where clients can access and modify information in a database remotely by connecting to an appropriate server is broadly classified as what kind of architecture, regardless of the number of tiers?",
    "options": [
      "Master-Slave.",
      "Transaction Processing System.",
      "Language Processing System.",
      "Process Pipeline."
    ],
    "correct": 1
  },
  {
    "question": "The layered architecture model is most useful for designing what part of a system?",
    "options": [
      "The run-time execution model.",
      "The overall logical structure of a program.",
      "The distributed deployment configuration.",
      "The security assurance process."
    ],
    "correct": 1
  },
  {
    "question": "The most significant historical software failure cited in the text, often used as an example, involved a problem with an overflow and an incorrect reuse of code from an older system. What was this system?",
    "options": [
      "Mentcare.",
      "Ariane 5 launcher.",
      "Wilderness weather system.",
      "Insulin pump."
    ],
    "correct": 1
  },
  {
    "question": "When considering the logical view of a system architecture, what is the primary focus of the decomposition?",
    "options": [
      "Hardware placement and network topology.",
      "Run-time processes and their synchronization.",
      "The system's decomposition into abstract entities such as classes or objects.",
      "The flow of data between independent processing steps."
    ],
    "correct": 2
  },
  {
    "question": "In the context of the ShopSphere case study, what architectural pattern is introduced as an evolution from a layered monolith, focusing on independent service deployment?",
    "options": [
      "Repository Architecture.",
      "Master-Slave Architecture.",
      "Microservices Decomposition.",
      "Pipe and Filter Architecture."
    ],
    "correct": 2
  },
  {
    "question": "What is the fundamental difference in coupling achieved by using Event-Driven Architecture (EDA) compared to a direct synchronous function call between services?",
    "options": [
      "EDA increases temporal coupling while reducing logical coupling.",
      "EDA achieves spatial and temporal decoupling between the event producer and consumer.",
      "EDA reduces the need for the API Gateway pattern.",
      "EDA is suitable only for CRUD operations."
    ],
    "correct": 1
  },
  {
    "question": "Which quality attribute is the primary motivator for adopting the API Gateway pattern in a microservices architecture?",
    "options": [
      "Cost reduction in hosting.",
      "Centralized security, rate limiting, and request routing.",
      "Simplifying internal service-to-service communication.",
      "Eliminating the need for any internal databases."
    ],
    "correct": 1
  },
  {
    "question": "Which category of interaction is typically least suitable for Event-Driven Architecture (EDA) and would likely remain synchronous in a complex system?",
    "options": [
      "Logging and monitoring updates.",
      "User notifications (e.g., email confirmation).",
      "A simple Create, Read, Update, Delete (CRUD) operation requiring immediate client feedback.",
      "Updating search indexes after a product change."
    ],
    "correct": 2
  },
  {
    "question": "The Layered Monolith implementation in the lectures focuses on which fundamental set of database operations?",
    "options": [
      "Join, Aggregate, Filter.",
      "Commit, Rollback, Lock.",
      "Create, Read, Update, Delete (CRUD).",
      "Publish, Subscribe, Consume."
    ],
    "correct": 2
  },
  {
    "question": "What does the acronym ATAM stand for in the context of architectural analysis?",
    "options": [
      "Agile Testing and Monitoring.",
      "Architectural Trade-off Analysis Method.",
      "Advanced Topology Assessment Model.",
      "Automated Threat Analysis Module."
    ],
    "correct": 1
  },
  {
    "question": "What is the primary purpose of decomposing a system into microservices, beyond technology choice?",
    "options": [
      "To ensure all services are written in the same programming language.",
      "To align service boundaries with business capabilities and achieve scalability and fault isolation.",
      "To simplify system building using a single version control system.",
      "To eliminate the need for any form of process modeling."
    ],
    "correct": 1
  },
  {
    "question": "A successful API Gateway should successfully return a 401 Unauthorized response if a request is improperly secured. This test verifies the satisfaction of which Architecturally Significant Requirement (ASR)?",
    "options": [
      "Scalability.",
      "Fault Isolation.",
      "Security.",
      "Reusability."
    ],
    "correct": 2
  },
  {
    "question": "Which statement represents a core lesson about architectural patterns?",
    "options": [
      "The Repository pattern is always the best pattern for data-intensive systems.",
      "There is no single \"best\" pattern; there is only the most appropriate pattern for a given set of ASRs.",
      "All modern systems must transition directly from a two-tier Client-Server to a Microservices architecture.",
      "The Layered Monolith is inherently non-scalable and should be avoided entirely."
    ],
    "correct": 1
  },
  {
    "question": "In a Microservices architecture, why is the Product Service running independently on its own port (e.g., 5001) a proof of meeting the Scalability ASR?",
    "options": [
      "It confirms the service is written in an object-oriented language.",
      "It confirms the service is ready for independent deployment and horizontal scaling.",
      "It proves the service uses the Pipe and Filter pattern internally.",
      "It validates the service is compliant with SOAP standards."
    ],
    "correct": 1
  },
  {
    "question": "The rationale behind an architectural decision is crucial because:",
    "options": [
      "It dictates the choice of IDE for the development team.",
      "It prevents the need for a configuration management system.",
      "It documents the why, which is more important than the what for future evolution and understanding trade-offs.",
      "It automatically generates the code implementation."
    ],
    "correct": 2
  },
  {
    "question": "In an EDA test, what result is sought to confirm the system's resilience and fault isolation, especially if a component fails?",
    "options": [
      "The synchronous response time must be less than 10ms.",
      "The Producer finishing before the Consumer starts.",
      "The Producer finishing before the Consumer (eventually) completes its asynchronous task.",
      "The system must immediately abort all pending transactions."
    ],
    "correct": 2
  },
  {
    "question": "Which concept is specifically mentioned as being central to the Logical View presentation of the Layered Architecture pattern in the lectures?",
    "options": [
      "Deployment Topology.",
      "The C4 Model.",
      "The CRUD operations implementation.",
      "The physical mapping to hardware."
    ],
    "correct": 2
  },
  {
    "question": "The process of defining the system's Quality Attributes (QAs) in the initial stages is crucial because:",
    "options": [
      "It allows the architecture to be immediately fixed and immutable.",
      "QAs, especially non-functional requirements, dominate the influence on the system's architecture.",
      "Functional requirements are inherently less complex than QAs.",
      "It simplifies the logical view to a single tier."
    ],
    "correct": 1
  },
  {
    "question": "How is Decoupling primarily achieved in a Microservices architecture using the Event- Driven Architecture (EDA) pattern?",
    "options": [
      "By enforcing synchronous, direct communication via a central API Gateway.",
      "By services communicating via asynchronous messages or events, reducing direct dependencies.",
      "By implementing all services in the same programming language.",
      "By limiting all services to only read-only database access."
    ],
    "correct": 1
  },
  {
    "question": "The API Gateway pattern acts as a key component for which service management task?",
    "options": [
      "Direct database schema management.",
      "Providing a single, unified entry point for external clients to access the microservices.",
      "Performing all business logic within its own component.",
      "Translating functional requirements into code."
    ],
    "correct": 1
  },
  {
    "question": "If a system's ASR is Security, which architectural component is the appropriate centralized point for ensuring this requirement is met for external access?",
    "options": [
      "The independent Database Service.",
      "The Message Broker in the EDA.",
      "The API Gateway.",
      "The core Business Logic Layer in a monolith."
    ],
    "correct": 2
  },
  {
    "question": "What aspect of software testing is essential for validating that the selected architecture meets the initial non-functional goals (ASRs)?",
    "options": [
      "Unit testing all internal algorithms.",
      "The entire process of self-checking and final verification against the ASRs.",
      "Only user interface testing.",
      "Only testing the data structures."
    ],
    "correct": 1
  },
  {
    "question": "When designing a Microservices system, the separation of services should ideally be based on:",
    "options": [
      "The number of lines of code.",
      "The functional decomposition of the system.",
      "The alignment of service boundaries with specific business domains/capabilities.",
      "The available number of developers."
    ],
    "correct": 2
  },
  {
    "question": "Why is the \"Deployment View\" considered a critical artifact for a complex system in the lectures?",
    "options": [
      "It only shows the user interface layout.",
      "It documents the physical architecture, including the mapping of software components to hardware and the network topology.",
      "It details the process of requirements elicitation.",
      "It is used to model object-oriented design patterns."
    ],
    "correct": 1
  },
  {
    "question": "Which UML diagram would be most appropriate for modeling the interaction flow when a user withdraws cash from an ATM?",
    "options": [
      "Class Diagram.",
      "State Diagram.",
      "Sequence Diagram.",
      "Context Model."
    ],
    "correct": 2
  },
  {
    "question": "The API Gateway pattern may introduce which trade-off?",
    "options": [
      "Increased temporal coupling across all services.",
      "A single point of failure and potential latency for all external requests.",
      "Decentralized security logic, increasing risk.",
      "Elimination of the need for distributed version control."
    ],
    "correct": 1
  },
  {
    "question": "The use of a central API Gateway for security checks like authentication and authorization is an example of what design principle?",
    "options": [
      "Decentralization of business logic.",
      "Centralization of a cross-cutting concern.",
      "Reductionism.",
      "Process pipeline."
    ],
    "correct": 3
  },
  {
    "question": "What is the key advantage of a Layered Monolith architecture over a Microservices architecture, particularly in the initial implementation phase, as implied by the transition to Microservices?",
    "options": [
      "Superior fault isolation.",
      "Higher scalability ceiling.",
      "Easier initial implementation of CRUD and centralized transactions.",
      "Guaranteed temporal decoupling."
    ],
    "correct": 2
  },
  {
    "question": "A system that uses a Message Broker to allow one service (Producer) to asynchronously send updates to another service (Consumer) exemplifies which architectural style?",
    "options": [
      "Pipe and Filter.",
      "Model-View-Controller.",
      "Event-Driven Architecture (EDA).",
      "Two- tier Client-Server."
    ],
    "correct": 2
  },
  {
    "question": "What specific architectural decision is crucial for achieving the non-functional requirement of Fault Isolation in a distributed system like Microservices?",
    "options": [
      "Using an object-oriented programming language.",
      "Decoupling services using asynchronous communication (EDA).",
      "Implementing a Model-View-Controller pattern.",
      "Centralizing all configuration management in a single service."
    ],
    "correct": 1
  },
  {
    "question": "Which phase in the software process, when using an agile approach, is closely interleaved with implementation, often resulting in no formal design documents?",
    "options": [
      "Requirements elicitation.",
      "Software design.",
      "Software testing.",
      "Configuration management."
    ],
    "correct": 1
  },
  {
    "question": "What is the fundamental principle that drives the decision-making process for software architects regarding trade-offs?",
    "options": [
      "Always prioritize performance over security.",
      "Always prioritize cost reduction over complexity.",
      "No single pattern is best; decisions must be justified by the context and ASRs.",
      "The only valid trade-off is between the Conceptual View and the Logical View."
    ],
    "correct": 2
  },
  {
    "question": "In a layered architecture, a core principle is that a layer provides services to the layer immediately:",
    "options": [
      "Below it.",
      "To its side.",
      "Above it.",
      "Anywhere in the system."
    ],
    "correct": 2
  },
  {
    "question": "The C4 model, which includes Container and Component levels of modeling, is part of the documentation of which architectural artifact?",
    "options": [
      "Logical View.",
      "Development View.",
      "Conceptual View.",
      "All of the above (as part of general system modeling)."
    ],
    "correct": 3
  },
  {
    "question": "In a Distributed Component Systems architecture, which element is crucial for advertising the services provided by components so that clients can locate and use them?",
    "options": [
      "The master component.",
      "The peer-to-peer network overlay.",
      "The trading system (or name/resource discovery service).",
      "The process pipeline filter."
    ],
    "correct": 2
  },
  {
    "question": "The RESTful architecture is characterized by:",
    "options": [
      "Using a set of XML-based web service standards.",
      "Being based on resources and standard operations on these resources, utilizing HTTP verbs.",
      "Strict adherence to SOAP protocols.",
      "A mandatory centralized repository."
    ],
    "correct": 1
  },
  {
    "question": "Which type of service in a Service-Oriented Architecture (SOA) is designed to coordinate the execution of other services?",
    "options": [
      "Utility service.",
      "Business service.",
      "Coordination service.",
      "Presentation service."
    ],
    "correct": 2
  },
  {
    "question": "In the Master-Slave architectural pattern for distributed systems, what is the role of the slave processes?",
    "options": [
      "To manage the shared data repository exclusively.",
      "To handle the computational load delegated by the master process.",
      "To provide the unified user interface.",
      "To act as the central API Gateway."
    ],
    "correct": 1
  },
  {
    "question": "What is the primary characteristic that distinguishes a Peer-to-Peer (P2P) architecture from a Client-Server architecture?",
    "options": [
      "P2P is based on resources, while Client-Server is based on services.",
      "P2P nodes can act as both providers and consumers of services.",
      "P2P nodes must use an Event-Driven Architecture.",
      "P2P is fundamentally incompatible with the Pipe and Filter pattern."
    ],
    "correct": 1
  },
  {
    "question": "The architectural pattern \"Observe and React\" is primarily used in which type of software engineering?",
    "options": [
      "Transaction Processing Systems.",
      "Service-Oriented Systems.",
      "Real-time Software Engineering (Embedded Systems).",
      "Configuration Management."
    ],
    "correct": 2
  },
  {
    "question": "Which architectural pattern for real-time software is specifically designed to handle situations where the required computation can be decomposed into a number of sequential operations?",
    "options": [
      "Environmental control architecture.",
      "Observe and react architecture.",
      "Process pipeline.",
      "Master-slave architecture."
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is NOT an HTTP verb used for operations on standard resources in a RESTful approach?",
    "options": [
      "GET.",
      "POST.",
      "PUT.",
      "EXECUTE."
    ],
    "correct": 3
  },
  {
    "question": "The development of software using services, created by composing and configuring existing services to create new composite services and systems, is characteristic of what concept?",
    "options": [
      "Software maintenance.",
      "Service composition.",
      "Requirements elicitation.",
      "Design patterns in the small."
    ],
    "correct": 1
  },
  {
    "question": "A Utility service in SOA is characterized by providing what type of functionality?",
    "options": [
      "A specific, end-to-end business process.",
      "A general-purpose functionality, independent of any business process.",
      "The control flow for service composition.",
      "The master node in a distributed system."
    ],
    "correct": 1
  },
  {
    "question": "Which architectural pattern is specifically cited as an example of a fault-tolerant architecture?",
    "options": [
      "Model-View-Controller (MVC).",
      "Self-monitoring architecture.",
      "Layered architecture.",
      "Pipe and Filter."
    ],
    "correct": 1
  },
  {
    "question": "In a component-based software engineering (CBSE) process, which activity involves searching for reusable components or application systems that meet the essential requirements?",
    "options": [
      "Requirements refinement.",
      "Application system configuration.",
      "Component adaptation and integration.",
      "Component analysis."
    ],
    "correct": 3
  },
  {
    "question": "The architectural style known as Service-Oriented Architecture (SOA) uses which fundamental building blocks for application systems?",
    "options": [
      "Individual object classes.",
      "Reusable, standardized services.",
      "Shared, centralized repositories.",
      "Simple, sequential pipe and filters."
    ],
    "correct": 1
  },
  {
    "question": "The RESTful approach uses which protocols for service communication?",
    "options": [
      "SOAP and WSDL.",
      "http and https.",
      "TCP and UDP.",
      "SMTP and POP."
    ],
    "correct": 1
  },
  {
    "question": "Which system architecture pattern is explicitly associated with embedded software and involves periodically gathering information from sensors, computing a required control action, and sending commands to actuators?",
    "options": [
      "Process pipeline.",
      "Environmental control.",
      "Client-server.",
      "Peer-to-peer."
    ],
    "correct": 1
  },
  {
    "question": "What concept is essential for defining the service interface in the service engineering process?",
    "options": [
      "The UML sequence diagram for the full business process.",
      "The model specification and the component interface definition.",
      "The operational profile for reliability measurement.",
      "The COCOMO cost modeling parameters."
    ],
    "correct": 1
  },
  {
    "question": "Which architectural pattern is least likely to be appropriate for a system with stringent real-time deadlines due to the potential for synchronization issues and non- determinism?",
    "options": [
      "Environmental control architecture.",
      "Observe and react architecture.",
      "Pipe and Filter.",
      "Master-slave architecture."
    ],
    "correct": 2
  },
  {
    "question": "Which term is used to describe a model-driven architecture that is created by configuring an off-the-shelf application system to meet specific requirements?",
    "options": [
      "Real-time operating system.",
      "Configurable application system.",
      "Service-oriented architecture.",
      "Microservice decomposition."
    ],
    "correct": 1
  },
  {
    "question": "A key characteristic of a component in Component-Based Software Engineering (CBSE) is that its interfaces are:",
    "options": [
      "Always hidden and private.",
      "Fully specified and published, defining the services it provides.",
      "Defined only at run-time by the client.",
      "Always implemented using the C++ programming language."
    ],
    "correct": 1
  },
  {
    "question": "Graphical workflow languages, such as BPMN, are primarily used in service-oriented software engineering for what purpose?",
    "options": [
      "To describe the physical view of the system.",
      "To describe a business process and the services used in that process.",
      "To model the internal logic of a utility service.",
      "To conduct timing analysis for real-time systems."
    ],
    "correct": 1
  },
  {
    "question": "The primary challenge in using an operational profile for reliability measurement is that:",
    "options": [
      "The profile remains static and never changes over time.",
      "It is often impossible to develop a trustworthy profile because users change their usage patterns over time.",
      "It only applies to client-server systems.",
      "It must be written in a formal mathematical notation."
    ],
    "correct": 1
  },
  {
    "question": "What is the key element of the SOA approach that allows for greater flexibility and reuse compared to tightly integrated systems?",
    "options": [
      "Services are loosely coupled and accessed through standardized interfaces.",
      "The entire system must be deployed as a single, monolithic executable.",
      "Only proprietary protocols are used for communication.",
      "The separation of the Model from the View."
    ],
    "correct": 0
  },
  {
    "question": "The architectural pattern 'Process Pipeline' is an evolution of which general architectural pattern?",
    "options": [
      "Repository.",
      "Model-View-Controller (MVC).",
      "Pipe and Filter.",
      "Layered Architecture."
    ],
    "correct": 2
  },
  {
    "question": "What is one of the three main reasons why testing Systems of Systems (SoS) is difficult and expensive?",
    "options": [
      "The SoS is always implemented in a real-time operating system.",
      "The use of a distributed version control system.",
      "There may not be a detailed requirements specification that can be used as a basis for system testing.",
      "The components are always highly cohesive."
    ],
    "correct": 2
  },
  {
    "question": "In a distributed component system, if a component provides a service, what is the prerequisite for a client to be able to use it?",
    "options": [
      "The client must be on the same physical machine as the component.",
      "The service must be advertised via a trading system.",
      "The client must be a master process.",
      "The component must be an EDA consumer."
    ],
    "correct": 1
  },
  {
    "question": "Which principle for secure systems design is focused on validating all external inputs to the system before they are used?",
    "options": [
      "E-E Trust (End-to-End Trust).",
      "Least Privilege.",
      "Information Hiding.",
      "Fail Securely."
    ],
    "correct": 0
  },
  {
    "question": "What is the fundamental mechanism in a fault-tolerant architecture that allows a system to remain operational after a fault has caused a system failure?",
    "options": [
      "Relying solely on a single, highly optimized component.",
      "Including fault-tolerance facilities like redundancy and diversity.",
      "Eliminating all non-functional requirements.",
      "Using only the Pipe and Filter architectural pattern."
    ],
    "correct": 1
  },
  {
    "question": "A Systems of Systems (SoS) classified as Collaborative is primarily characterized by:",
    "options": [
      "The constituent systems only use a single, centralized control system.",
      "The constituent systems must negotiate and agree on a course of action to achieve an overall goal.",
      "The constituent systems are owned and managed by a single organization.",
      "The constituent systems lack a formal requirements specification."
    ],
    "correct": 1
  },
  {
    "question": "The concept of Reductionism is challenging for complex systems because:",
    "options": [
      "It mandates the use of an incremental software development process.",
      "It suggests understanding a system by decomposing it into independent components, but the emergent properties of the complex system are missed.",
      "It prevents the use of formal methods in system assurance.",
      "It is exclusively an architectural concept in the small."
    ],
    "correct": 1
  },
  {
    "question": "In a self-monitoring fault-tolerant architecture, what is the role of the self- monitoring component?",
    "options": [
      "To manage the user interface.",
      "To continuously check the system for violations of health or security policies.",
      "To provide the repository for all system data.",
      "To act as the master process for all distributed computation."
    ],
    "correct": 1
  },
  {
    "question": "Which key principle of dependability involves providing multiple components and varying the techniques used to implement them to minimize the chance of common- mode failures?",
    "options": [
      "Redundancy and diversity.",
      "Configuration management.",
      "Requirements refinement.",
      "Operational profiling."
    ],
    "correct": 0
  },
  {
    "question": "Which type of system is a Mentcare system (managing patient records) most accurately classified as in terms of application architecture?",
    "options": [
      "Real-time software system.",
      "Language processing system.",
      "Transaction processing system (specifically an Information System).",
      "Embedded system."
    ],
    "correct": 2
  },
  {
    "question": "Which security design principle is best enforced by the API Gateway pattern centralizing authorization checks?",
    "options": [
      "Least Surprise.",
      "Fail Securely.",
      "Economy of Mechanism.",
      "Centralization of Security (as a cross-cutting concern)."
    ],
    "correct": 3
  },
  {
    "question": "Which metric is a measure of the probability that the system will fail when a request for service is made?",
    "options": [
      "ROCOF (Rate of Occurrence of Failure).",
      "MTTF (Mean Time To Failure).",
      "POFOD (Probability of Failure on Demand).",
      "MTTR (Mean Time To Repair)."
    ],
    "correct": 2
  },
  {
    "question": "Why is the definition of system boundary and the context model important for project management?",
    "options": [
      "To ensure the code is bug-free.",
      "To help prevent scope creep, which can significantly increase project cost.",
      "To define the sequence of activity diagrams.",
      "To eliminate the need for formal methods."
    ],
    "correct": 1
  },
  {
    "question": "In a system involving human, social, and organizational elements interacting with computing hardware and software, the system is classified as a:",
    "options": [
      "Stand-alone software application.",
      "Technical computing system.",
      "Sociotechnical system.",
      "Black Box system."
    ],
    "correct": 2
  },
  {
    "question": "Which component is not a standard part of a Language Processing System's application architecture?",
    "options": [
      "A translator (compiler/interpreter).",
      "An abstract machine that executes the generated language.",
      "A component that only processes CRUD operations.",
      "A component to read and analyze the input text."
    ],
    "correct": 2
  },
  {
    "question": "The concept of Resilience Engineering specifically covers which three topics according to the text?",
    "options": [
      "Reliability, Safety, and Security.",
      "Project planning, Quality management, and Configuration management.",
      "Cybersecurity, organizational resilience, and resilient systems design.",
      "Functional requirements, non-functional requirements, and architectural patterns."
    ],
    "correct": 2
  },
  {
    "question": "Which characteristic is critical for a distributed system where different components may be owned and managed by different companies?",
    "options": [
      "Architecture in the small.",
      "The logical view.",
      "Architecture in the large.",
      "The process of component adaptation."
    ],
    "correct": 2
  },
  {
    "question": "Which software quality standard focuses on defining a framework for the quality management system?",
    "options": [
      "ISO 9001.",
      "Scrum.",
      "ATAM.",
      "COCOMO."
    ],
    "correct": 0
  },
  {
    "question": "The primary purpose of an Information System application architecture is:",
    "options": [
      "To translate one language into another.",
      "To allow the creation of new software from reusable components.",
      "To manage and process large amounts of data and support business operations.",
      "To control physical devices in real-time."
    ],
    "correct": 2
  },
  {
    "question": "The compiler for a high-level programming language uses a specific application architecture. The core of this system, which includes the translator and the abstract machine, is known as what general type of application architecture?",
    "options": [
      "Transaction Processing System.",
      "Language Processing System.",
      "Component-Based System.",
      "Distributed Component System."
    ],
    "correct": 1
  },
  {
    "question": "What is the main distinction between User Requirements and System Requirements in the specification process?",
    "options": [
      "User requirements are written only in formal notations; system requirements are only in natural language.",
      "User requirements describe services for the user in a customer- understandable language; System requirements are a detailed specification for the developers.",
      "User requirements only cover non-functional aspects; system requirements only cover functional aspects.",
      "User requirements are part of the Glossary; system requirements are part of the Introduction."
    ],
    "correct": 1
  },
  {
    "question": "The term 'Scope Creep' is defined as a continuous increase in the scope of a project. Which architectural artifact helps to prevent this?",
    "options": [
      "Sequence Diagram.",
      "Proper model of the system context.",
      "Author Index.",
      "Reliability measurement operational profile."
    ],
    "correct": 1
  },
  {
    "question": "In a Language Processing System, what does the 'abstract machine' component do?",
    "options": [
      "It performs the lexical analysis of the input text.",
      "It executes the generated language (intermediate code).",
      "It provides the user interface for the language.",
      "It manages the component configuration."
    ],
    "correct": 1
  },
  {
    "question": "A Transaction Processing System (like an ATM system) must ensure what critical non-functional property for its database operations?",
    "options": [
      "Decoupling.",
      "Consistency/Integrity (ACID properties).",
      "Environmental control.",
      "P2P communication."
    ],
    "correct": 1
  },
  {
    "question": "What type of model focuses on the run-time interactions between system components, showing the order in which messages are exchanged?",
    "options": [
      "Structural Model (e.g., Class Diagram).",
      "Context Model.",
      "Interaction Model (e.g., Sequence Diagram).",
      "Behavioral Model (e.g., State Diagram)."
    ],
    "correct": 2
  },
  {
    "question": "Which statement is the least accurate description of software architecture?",
    "options": [
      "It is the blueprint of a building, not the interior decorating.",
      "It defines the structure, components, relationships, and governing principles.",
      "It is the set of design decisions that, once made, are difficult to change.",
      "It must be implemented using a plan-driven development approach only."
    ],
    "correct": 3
  },
  {
    "question": "What is a trade-off in the context of architectural decision-making?",
    "options": [
      "A decision that satisfies all quality attributes simultaneously.",
      "A decision where improving one quality attribute necessitates compromising another.",
      "The mandatory selection of a distributed component architecture.",
      "The process of generating user stories."
    ],
    "correct": 1
  },
  {
    "question": "When developing a component-based system, after performing component analysis, what is the next logical step according to the component-based software engineering (CBSE) process?",
    "options": [
      "Application system configuration.",
      "Requirements refinement.",
      "Component adaptation.",
      "Software testing."
    ],
    "correct": 1
  }
];
