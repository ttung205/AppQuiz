

Multiple choice questions bank
(Answers are given at the end of this document)
- Which statement best captures the fundamental nature of software architecture as a set
of design decisions?
A. The decisions primarily dictate the choice of programming language. B. The decisions
define the structure and are difficult to change once implemented. C. The decisions are
focused solely on satisfying functional requirements. D. The decisions exclusively pertain
to the architecture in the small.
- What is the primary goal of the system architect, according to the principles of software
architecture?
A. To maximize code reusability and minimize implementation effort. B. To manage the
project schedule and control the budget. C. To satisfy the system's Quality Attributes
(Non-Functional Requirements) while meeting the functional needs. D. To define the
sequence of activities in the software process model.
- Architecture in the large is primarily concerned with the decomposition of which
elements?
A. An individual program into its components. B. Complex enterprise systems that
include other systems, programs, and components distributed over different computers.
C. Object classes within a single program. D. The algorithms used within a single
component.
- Which system characteristic is most dominantly influenced by the system's architecture,
as confirmed by a study on 'architecturally significant requirements'?
A. The implementation details of individual components. B. The non-functional system
characteristics. C. The speed of the final compiler used. D. The amount of natural
language used in requirements specification.
- The architectural design process is best considered as:
A. A formal, formulaic sequence of well-defined activities. B. A fixed, one-time activity
executed only after requirements validation. C. A creative process involving a series of
structural decisions that profoundly affect the system. D. The sole activity of defining the
physical view of the system.
- Which term is used to describe a short excerpt from the beginning of an attached file,
used for assessment of its relevance?

A. snippetFromBack B. contentFetchId C. fileMimeType D. snippetFromFront
- When using an architectural pattern, what does the pattern itself describe, in addition to
explaining when it may be used and its advantages/disadvantages?
A. The specific code implementation for every class. B. The generic system architecture.
C. The project manager's required skills. D. The optimal operational profile for reliability
measurement.
- Which term is NOT listed as a key issue driving changes in modern software engineering
in the provided text?
A. Managing complexity. B. Integrating agility with other methods. C. Ensuring systems
are secure and resilient. D. Minimizing legacy system decommissioning.
- Which element should be defined in a software design document, according to the
abstract model of the design process, besides the structure of the software and data
models?
A. The requirements elicitation plan. B. The interfaces between system components. C.
The user acceptance testing results. D. The history of configuration management
changes.
- The notion that "The rationale (the why) is more important than the design (the what)"
is a key lesson associated with which process?
A. Requirements validation. B. System testing. C. Synthesizing software architecture. D.
Software maintenance.
- A layered architecture is primarily used to support what non-functional system
property?
A. Confidentiality, by encrypting data at the repository layer. B. Incremental
development and system evolution, as long as the interfaces between layers are stable.
C. Real-time response, by allowing direct communication between non-adjacent layers.
D. Low cost, by eliminating the need for separate databases.
- In the Model-View-Controller (MVC) pattern, which component is responsible for
managing the application data and operations on that data, completely independent of
how they are presented or viewed?
## A. The View. B. The Controller. C. The Model. D. The Observer.
- What is the main structural disadvantage of the Repository architectural pattern when
all components are centralized and share the same data store?

A. Managing the data store's redundancy and diversity is complex. B. It is difficult to
scale for large numbers of users. C. Changes to the data structure are propagated to all
components. D. It necessitates a two-tier client-server implementation.
- The Pipe and Filter architectural pattern excels in which scenario due to the independent
nature of its filters?
A. Applications where state must be strictly maintained across all stages of processing. B.
Batch processing systems where input is processed by a series of sequential
transformations. C. Interactive transaction processing systems requiring immediate
database updates. D. Embedded systems with strict timing requirements.
- What is the fundamental distinction between the Repository pattern and the Black
Board pattern?
A. In the Black Board model, the components interact exclusively through service
interfaces, while the Repository uses shared memory. B. In the Black Board model, the
control component (Black Board) explicitly manages component interaction, whereas in
the Repository pattern, components interact only via the Repository. C. The Black Board
pattern is exclusively for real-time systems, while the Repository pattern is for batch
processing. D. The Repository pattern is an architectural style in the large, while the
Black Board is in the small.
- Which architectural pattern is most effective for a compiler's organization, specifically
handling lexical analysis, parsing, type checking, and code generation?
A. Layered architecture. B. Model-View-Controller (MVC). C. Pipe and Filter. D. Client-
## Server.
- In a two-tier client–server architecture, which element is most susceptible to becoming
a performance bottleneck?
A. The user interface on the client machine. B. The single server hosting both the
application and database. C. The local network connection between client and server. D.
The component interface definition language.
- A reference architecture is best described as:
A. A model that describes how an application system is structured in the printed version
of a book. B. A general architectural model that is customized and adapted for a specific
class of applications. C. The architecture used in a published case study for comparison.
D. The specific architecture for a pipe and filter compiler.

- Why does the Layered Architecture approach sometimes reduce the potential for
performance optimization?
A. Strict separation of layers prevents direct, optimized communication between non-
adjacent layers. B. The Model component's separation from the View component
introduces overhead. C. The centralized Repository becomes the single point of failure.
D. It mandates the use of an asynchronous EDA style.
- Which of the following is NOT a common architectural pattern mentioned in the text?
A. Model-View-Controller (MVC). B. Repository. C. Pipe and Filter. D. Dependency
Injection (DI).
- In the MVC pattern, if a user clicks a button, which component is the first to be notified
and responsible for mapping the user action to an application action?
## A. The Model. B. The View. C. The Controller. D. The Database.
- What is a key characteristic of the Pipe and Filter pattern that contributes to system
evolution?
A. Filters operate independently and do not know the format of the data they process. B.
Filters do not store state and can be reconfigured or replaced without affecting other
filters. C. Filters must be executed sequentially on a single thread. D. Data must be
transferred between pipes using a service-oriented architecture.
- A multi-tier client-server architecture typically involves separating which logical
components into distinct, specialized servers?
A. Repository, Model, and View components. B. The presentation, application
processing, and data management components. C. Functional and non-functional
requirements. D. The pipe and the filter components.
- Which type of architectural view focuses on how the system is decomposed into
components for the purposes of development and testing?
A. Conceptual view. B. Logical view. C. Process view. D. Development view.
- The process view of an architecture documents:
A. The principal architectural components as seen by the system user. B. The
decomposition of the system into logical objects. C. The run-time organization of the
system as a set of interacting processes. D. The way in which the software is mapped
onto the hardware processors.

- Why is the Repository pattern more suited to systems where the performance
bottleneck is not the data management system?
A. All components accessing the shared data store can lead to data access contention. B.
Data validation is decentralized, increasing risk. C. It only supports simple, non-relational
data structures. D. It is fundamentally incompatible with the client-server pattern.
- A key advantage of the Client-Server architecture is:
A. The ability to manage and run processes only on the client machine. B. The possibility
of distributing data and processing across a range of servers. C. The mandatory use of
the Observer pattern for interaction. D. The inherent simplicity of two-tier
implementations for high-traffic systems.
- The concept of "Architecture in the small" focuses on:
A. The use of design patterns for object-oriented design. B. The architecture of complex
enterprise systems. C. The distribution of the system over different physical computers.
D. The security protocols used for inter-component communication.
- In a layered architecture, a client request often passes through how many layers before
reaching the core service and then back to the client?
A. Exactly one layer. B. Multiple layers, with strict adherence to the layer interface. C.
Only the top-most and bottom-most layers. D. The Model and the View, but bypassing
the Controller.
- Which pair of architectural concepts represents two distinct levels of abstraction
described in the text?
A. Logical View and Physical View. B. Component-based software engineering and Real-
time software engineering. C. Architecture in the small and Architecture in the large. D.
Requirements elicitation and Requirements specification.
- If an application architecture is modeled as a set of separate, specialized components
with no shared data repository, and communication is via message passing, which core
pattern is being leveraged?
A. Layered Architecture. B. Repository. C. Client-Server. D. Pipe and Filter.
- What is the fundamental goal of using Architectural Patterns?
A. To dictate the project's pricing and estimation. B. To reuse knowledge about generic
system architectures. C. To enforce the use of a specific programming language. D. To
eliminate the need for any formal requirements document.

- Which architectural pattern is best suited for an application where the key non-
functional requirement is the isolation and replacement of the data access logic without
modifying the core business logic?
A. Pipe and Filter. B. Model-View-Controller (MVC). C. Layered Architecture (with the
data layer at the bottom). D. Peer-to-Peer (P2P).
- In the MVC pattern, how is the Model typically decoupled from the View, allowing
multiple Views for the same Model?
A. By using an API Gateway. B. By requiring the Controller to manage all data copies. C.
By using an observer or notification mechanism. D. By ensuring the Model is
implemented as a RESTful service.
- The physical view of a software architecture focuses on:
A. The dynamic execution of the system processes. B. The mapping of the software
components onto the hardware processors. C. The decomposition of the system into
objects and classes. D. The high-level features understandable to stakeholders.
- Which non-functional requirement is directly enhanced by the Pipe and Filter pattern's
characteristic of independent, stateless filters?
A. Reliability. B. Reusability. C. Confidentiality. D. Real-time predictability.
- A system where clients can access and modify information in a database remotely by
connecting to an appropriate server is broadly classified as what kind of architecture,
regardless of the number of tiers?
A. Master-Slave. B. Transaction Processing System. C. Language Processing System. D.
## Process Pipeline.
- The layered architecture model is most useful for designing what part of a system?
A. The run-time execution model. B. The overall logical structure of a program. C. The
distributed deployment configuration. D. The security assurance process.
- The most significant historical software failure cited in the text, often used as an
example, involved a problem with an overflow and an incorrect reuse of code from an
older system. What was this system?
A. Mentcare. B. Ariane 5 launcher. C. Wilderness weather system. D. Insulin pump.
- When considering the logical view of a system architecture, what is the primary focus of
the decomposition?

A. Hardware placement and network topology. B. Run-time processes and their
synchronization. C. The system's decomposition into abstract entities such as classes or
objects. D. The flow of data between independent processing steps.
- In the context of the ShopSphere case study, what architectural pattern is introduced as
an evolution from a layered monolith, focusing on independent service deployment? A.
Repository Architecture. B. Master-Slave Architecture. C. Microservices Decomposition.
D. Pipe and Filter Architecture.
- What is the fundamental difference in coupling achieved by using Event-Driven
Architecture (EDA) compared to a direct synchronous function call between services?
A. EDA increases temporal coupling while reducing logical coupling. B. EDA achieves
spatial and temporal decoupling between the event producer and consumer. C. EDA
reduces the need for the API Gateway pattern. D. EDA is suitable only for CRUD
operations.
- Which quality attribute is the primary motivator for adopting the API Gateway pattern in
a microservices architecture?
A. Cost reduction in hosting. B. Centralized security, rate limiting, and request routing. C.
Simplifying internal service-to-service communication. D. Eliminating the need for any
internal databases.
- Which category of interaction is typically least suitable for Event-Driven Architecture
(EDA) and would likely remain synchronous in a complex system?
A. Logging and monitoring updates. B. User notifications (e.g., email confirmation). C. A
simple Create, Read, Update, Delete (CRUD) operation requiring immediate client
feedback. D. Updating search indexes after a product change.
- The Layered Monolith implementation in the lectures focuses on which fundamental set
of database operations?
A. Join, Aggregate, Filter. B. Commit, Rollback, Lock. C. Create, Read, Update, Delete
(CRUD). D. Publish, Subscribe, Consume.
- What does the acronym ATAM stand for in the context of architectural analysis?
A. Agile Testing and Monitoring. B. Architectural Trade-off Analysis Method. C. Advanced
## Topology Assessment Model. D. Automated Threat Analysis Module.
- What is the primary purpose of decomposing a system into microservices, beyond
technology choice?

A. To ensure all services are written in the same programming language. B. To align
service boundaries with business capabilities and achieve scalability and fault isolation.
C. To simplify system building using a single version control system. D. To eliminate the
need for any form of process modeling.
- A successful API Gateway should successfully return a 401 Unauthorized response if a
request is improperly secured. This test verifies the satisfaction of which Architecturally
Significant Requirement (ASR)?
## A. Scalability. B. Fault Isolation. C. Security. D. Reusability.
- Which statement represents a core lesson about architectural patterns?
A. The Repository pattern is always the best pattern for data-intensive systems. B. There
is no single "best" pattern; there is only the most appropriate pattern for a given set of
ASRs. C. All modern systems must transition directly from a two-tier Client-Server to a
Microservices architecture. D. The Layered Monolith is inherently non-scalable and
should be avoided entirely.
- In a Microservices architecture, why is the Product Service running independently on its
own port (e.g., 5001) a proof of meeting the Scalability ASR?
A. It confirms the service is written in an object-oriented language. B. It confirms the
service is ready for independent deployment and horizontal scaling. C. It proves the
service uses the Pipe and Filter pattern internally. D. It validates the service is compliant
with SOAP standards.
- The rationale behind an architectural decision is crucial because:
A. It dictates the choice of IDE for the development team. B. It prevents the need for a
configuration management system. C. It documents the why, which is more important
than the what for future evolution and understanding trade-offs. D. It automatically
generates the code implementation.
- In an EDA test, what result is sought to confirm the system's resilience and fault
isolation, especially if a component fails?
A. The synchronous response time must be less than 10ms. B. The Producer finishing
before the Consumer starts. C. The Producer finishing before the Consumer (eventually)
completes its asynchronous task. D. The system must immediately abort all pending
transactions.
- Which concept is specifically mentioned as being central to the Logical View
presentation of the Layered Architecture pattern in the lectures?

A. Deployment Topology. B. The C4 Model. C. The CRUD operations implementation. D.
The physical mapping to hardware.
- The process of defining the system's Quality Attributes (QAs) in the initial stages is
crucial because:
A. It allows the architecture to be immediately fixed and immutable. B. QAs, especially
non-functional requirements, dominate the influence on the system's architecture. C.
Functional requirements are inherently less complex than QAs. D. It simplifies the logical
view to a single tier.
- How is Decoupling primarily achieved in a Microservices architecture using the Event-
Driven Architecture (EDA) pattern?
A. By enforcing synchronous, direct communication via a central API Gateway. B. By
services communicating via asynchronous messages or events, reducing direct
dependencies. C. By implementing all services in the same programming language. D. By
limiting all services to only read-only database access.
- The API Gateway pattern acts as a key component for which service management task?
A. Direct database schema management. B. Providing a single, unified entry point for
external clients to access the microservices. C. Performing all business logic within its
own component. D. Translating functional requirements into code.
- If a system's ASR is Security, which architectural component is the appropriate
centralized point for ensuring this requirement is met for external access?
A. The independent Database Service. B. The Message Broker in the EDA. C. The API
Gateway. D. The core Business Logic Layer in a monolith.
- What aspect of software testing is essential for validating that the selected architecture
meets the initial non-functional goals (ASRs)?
A. Unit testing all internal algorithms. B. The entire process of self-checking and final
verification against the ASRs. C. Only user interface testing. D. Only testing the data
structures.
- When designing a Microservices system, the separation of services should ideally be
based on:
A. The number of lines of code. B. The functional decomposition of the system. C. The
alignment of service boundaries with specific business domains/capabilities. D. The
available number of developers.

- Why is the "Deployment View" considered a critical artifact for a complex system in the
lectures?
A. It only shows the user interface layout. B. It documents the physical architecture,
including the mapping of software components to hardware and the network topology.
C. It details the process of requirements elicitation. D. It is used to model object-oriented
design patterns.
- Which UML diagram would be most appropriate for modeling the interaction flow when
a user withdraws cash from an ATM?
## A. Class Diagram. B. State Diagram. C. Sequence Diagram. D. Context Model.
- The API Gateway pattern may introduce which trade-off?
A. Increased temporal coupling across all services. B. A single point of failure and
potential latency for all external requests. C. Decentralized security logic, increasing risk.
D. Elimination of the need for distributed version control.
- The use of a central API Gateway for security checks like authentication and
authorization is an example of what design principle?
A. Decentralization of business logic. B. Centralization of a cross-cutting concern. C.
Reductionism. D. Process pipeline.
- What is the key advantage of a Layered Monolith architecture over a Microservices
architecture, particularly in the initial implementation phase, as implied by the transition
to Microservices?
A. Superior fault isolation. B. Higher scalability ceiling. C. Easier initial implementation of
CRUD and centralized transactions. D. Guaranteed temporal decoupling.
- A system that uses a Message Broker to allow one service (Producer) to asynchronously
send updates to another service (Consumer) exemplifies which architectural style?
A. Pipe and Filter. B. Model-View-Controller. C. Event-Driven Architecture (EDA). D. Two-
tier Client-Server.
- What specific architectural decision is crucial for achieving the non-functional
requirement of Fault Isolation in a distributed system like Microservices?
A. Using an object-oriented programming language. B. Decoupling services using
asynchronous communication (EDA). C. Implementing a Model-View-Controller pattern.
D. Centralizing all configuration management in a single service.

- Which phase in the software process, when using an agile approach, is closely
interleaved with implementation, often resulting in no formal design documents?
A. Requirements elicitation. B. Software design. C. Software testing. D. Configuration
management.
- What is the fundamental principle that drives the decision-making process for software
architects regarding trade-offs?
A. Always prioritize performance over security. B. Always prioritize cost reduction over
complexity. C. No single pattern is best; decisions must be justified by the context and
ASRs. D. The only valid trade-off is between the Conceptual View and the Logical View.
- In a layered architecture, a core principle is that a layer provides services to the layer
immediately:
A. Below it. B. To its side. C. Above it. D. Anywhere in the system.
- The C4 model, which includes Container and Component levels of modeling, is part of
the documentation of which architectural artifact?
A. Logical View. B. Development View. C. Conceptual View. D. All of the above (as part of
general system modeling).
- In a Distributed Component Systems architecture, which element is crucial for
advertising the services provided by components so that clients can locate and use
them?
A. The master component. B. The peer-to-peer network overlay. C. The trading system
(or name/resource discovery service). D. The process pipeline filter.
- The RESTful architecture is characterized by:
A. Using a set of XML-based web service standards. B. Being based on resources and
standard operations on these resources, utilizing HTTP verbs. C. Strict adherence to
SOAP protocols. D. A mandatory centralized repository.
- Which type of service in a Service-Oriented Architecture (SOA) is designed to coordinate
the execution of other services?
A. Utility service. B. Business service. C. Coordination service. D. Presentation service.
- In the Master-Slave architectural pattern for distributed systems, what is the role of the
slave processes?

A. To manage the shared data repository exclusively. B. To handle the computational
load delegated by the master process. C. To provide the unified user interface. D. To act
as the central API Gateway.
- What is the primary characteristic that distinguishes a Peer-to-Peer (P2P) architecture
from a Client-Server architecture?
A. P2P is based on resources, while Client-Server is based on services. B. P2P nodes can
act as both providers and consumers of services. C. P2P nodes must use an Event-Driven
Architecture. D. P2P is fundamentally incompatible with the Pipe and Filter pattern.
- The architectural pattern "Observe and React" is primarily used in which type of
software engineering?
A. Transaction Processing Systems. B. Service-Oriented Systems. C. Real-time Software
Engineering (Embedded Systems). D. Configuration Management.
- Which architectural pattern for real-time software is specifically designed to handle
situations where the required computation can be decomposed into a number of
sequential operations?
A. Environmental control architecture. B. Observe and react architecture. C. Process
pipeline. D. Master-slave architecture.
- Which of the following is NOT an HTTP verb used for operations on standard resources in
a RESTful approach?
## A. GET. B. POST. C. PUT. D. EXECUTE.
- The development of software using services, created by composing and configuring
existing services to create new composite services and systems, is characteristic of what
concept?
A. Software maintenance. B. Service composition. C. Requirements elicitation. D. Design
patterns in the small.
- A Utility service in SOA is characterized by providing what type of functionality?
A. A specific, end-to-end business process. B. A general-purpose functionality,
independent of any business process. C. The control flow for service composition. D. The
master node in a distributed system.
- Which architectural pattern is specifically cited as an example of a fault-tolerant
architecture?

A. Model-View-Controller (MVC). B. Self-monitoring architecture. C. Layered
architecture. D. Pipe and Filter.
- In a component-based software engineering (CBSE) process, which activity involves
searching for reusable components or application systems that meet the essential
requirements?
A. Requirements refinement. B. Application system configuration. C. Component
adaptation and integration. D. Component analysis.
- The architectural style known as Service-Oriented Architecture (SOA) uses which
fundamental building blocks for application systems?
A. Individual object classes. B. Reusable, standardized services. C. Shared, centralized
repositories. D. Simple, sequential pipe and filters.
- The RESTful approach uses which protocols for service communication?
A. SOAP and WSDL. B. http and https. C. TCP and UDP. D. SMTP and POP.
- Which system architecture pattern is explicitly associated with embedded software and
involves periodically gathering information from sensors, computing a required control
action, and sending commands to actuators?
A. Process pipeline. B. Environmental control. C. Client-server. D. Peer-to-peer.
- What concept is essential for defining the service interface in the service engineering
process?
A. The UML sequence diagram for the full business process. B. The model specification
and the component interface definition. C. The operational profile for reliability
measurement. D. The COCOMO cost modeling parameters.
- Which architectural pattern is least likely to be appropriate for a system with stringent
real-time deadlines due to the potential for synchronization issues and non-
determinism?
A. Environmental control architecture. B. Observe and react architecture. C. Pipe and
Filter. D. Master-slave architecture.
- Which term is used to describe a model-driven architecture that is created by
configuring an off-the-shelf application system to meet specific requirements?
A. Real-time operating system. B. Configurable application system. C. Service-oriented
architecture. D. Microservice decomposition.

- A key characteristic of a component in Component-Based Software Engineering (CBSE) is
that its interfaces are:
A. Always hidden and private. B. Fully specified and published, defining the services it
provides. C. Defined only at run-time by the client. D. Always implemented using the C++
programming language.
- Graphical workflow languages, such as BPMN, are primarily used in service-oriented
software engineering for what purpose?
A. To describe the physical view of the system. B. To describe a business process and the
services used in that process. C. To model the internal logic of a utility service. D. To
conduct timing analysis for real-time systems.
- The primary challenge in using an operational profile for reliability measurement is that:
A. The profile remains static and never changes over time. B. It is often impossible to
develop a trustworthy profile because users change their usage patterns over time. C. It
only applies to client-server systems. D. It must be written in a formal mathematical
notation.
- What is the key element of the SOA approach that allows for greater flexibility and reuse
compared to tightly integrated systems?
A. Services are loosely coupled and accessed through standardized interfaces. B. The
entire system must be deployed as a single, monolithic executable. C. Only proprietary
protocols are used for communication. D. The separation of the Model from the View.
- The architectural pattern 'Process Pipeline' is an evolution of which general architectural
pattern?
A. Repository. B. Model-View-Controller (MVC). C. Pipe and Filter. D. Layered
## Architecture.
- What is one of the three main reasons why testing Systems of Systems (SoS) is difficult
and expensive?
A. The SoS is always implemented in a real-time operating system. B. The use of a
distributed version control system. C. There may not be a detailed requirements
specification that can be used as a basis for system testing. D. The components are
always highly cohesive.
- In a distributed component system, if a component provides a service, what is the
prerequisite for a client to be able to use it?

A. The client must be on the same physical machine as the component. B. The service
must be advertised via a trading system. C. The client must be a master process. D. The
component must be an EDA consumer.
- Which principle for secure systems design is focused on validating all external inputs to
the system before they are used?
A. E-E Trust (End-to-End Trust). B. Least Privilege. C. Information Hiding. D. Fail Securely.
- What is the fundamental mechanism in a fault-tolerant architecture that allows a system
to remain operational after a fault has caused a system failure?
A. Relying solely on a single, highly optimized component. B. Including fault-tolerance
facilities like redundancy and diversity. C. Eliminating all non-functional requirements. D.
Using only the Pipe and Filter architectural pattern.
- A Systems of Systems (SoS) classified as Collaborative is primarily characterized by:
A. The constituent systems only use a single, centralized control system. B. The
constituent systems must negotiate and agree on a course of action to achieve an overall
goal. C. The constituent systems are owned and managed by a single organization. D.
The constituent systems lack a formal requirements specification.
- The concept of Reductionism is challenging for complex systems because:
A. It mandates the use of an incremental software development process. B. It suggests
understanding a system by decomposing it into independent components, but the
emergent properties of the complex system are missed. C. It prevents the use of formal
methods in system assurance. D. It is exclusively an architectural concept in the small.
- In a self-monitoring fault-tolerant architecture, what is the role of the self-
monitoring component?
A. To manage the user interface. B. To continuously check the system for violations of
health or security policies. C. To provide the repository for all system data. D. To act as
the master process for all distributed computation.
- Which key principle of dependability involves providing multiple components and
varying the techniques used to implement them to minimize the chance of common-
mode failures?
A. Redundancy and diversity. B. Configuration management. C. Requirements
refinement. D. Operational profiling.

- Which type of system is a Mentcare system (managing patient records) most
accurately classified as in terms of application architecture?
A. Real-time software system. B. Language processing system. C. Transaction processing
system (specifically an Information System). D. Embedded system.
- Which security design principle is best enforced by the API Gateway pattern
centralizing authorization checks?
A. Least Surprise. B. Fail Securely. C. Economy of Mechanism. D. Centralization of
Security (as a cross-cutting concern).
- Which metric is a measure of the probability that the system will fail when a
request for service is made?
A. ROCOF (Rate of Occurrence of Failure). B. MTTF (Mean Time To Failure). C. POFOD
(Probability of Failure on Demand). D. MTTR (Mean Time To Repair).
- Why is the definition of system boundary and the context model important for
project management?
A. To ensure the code is bug-free. B. To help prevent scope creep, which can significantly
increase project cost. C. To define the sequence of activity diagrams. D. To eliminate the
need for formal methods.
- In a system involving human, social, and organizational elements interacting with
computing hardware and software, the system is classified as a:
A. Stand-alone software application. B. Technical computing system. C. Sociotechnical
system. D. Black Box system.
- Which component is not a standard part of a Language Processing System's
application architecture?
A. A translator (compiler/interpreter). B. An abstract machine that executes the
generated language. C. A component that only processes CRUD operations. D. A
component to read and analyze the input text.
- The concept of Resilience Engineering specifically covers which three topics
according to the text?
A. Reliability, Safety, and Security. B. Project planning, Quality management, and
Configuration management. C. Cybersecurity, organizational resilience, and resilient
systems design. D. Functional requirements, non-functional requirements, and
architectural patterns.

- Which characteristic is critical for a distributed system where different
components may be owned and managed by different companies?
A. Architecture in the small. B. The logical view. C. Architecture in the large. D. The
process of component adaptation.
- Which software quality standard focuses on defining a framework for the quality
management system?
A. ISO 9001. B. Scrum. C. ATAM. D. COCOMO.
- The primary purpose of an Information System application architecture is:
A. To translate one language into another. B. To allow the creation of new software from
reusable components. C. To manage and process large amounts of data and support
business operations. D. To control physical devices in real-time.
- The compiler for a high-level programming language uses a specific application
architecture. The core of this system, which includes the translator and the abstract
machine, is known as what general type of application architecture?
A. Transaction Processing System. B. Language Processing System. C. Component-Based
## System. D. Distributed Component System.
- What is the main distinction between User Requirements and System
Requirements in the specification process?
A. User requirements are written only in formal notations; system requirements are only
in natural language. B. User requirements describe services for the user in a customer-
understandable language; System requirements are a detailed specification for the
developers. C. User requirements only cover non-functional aspects; system
requirements only cover functional aspects. D. User requirements are part of the
Glossary; system requirements are part of the Introduction.
- The term 'Scope Creep' is defined as a continuous increase in the scope of a
project. Which architectural artifact helps to prevent this?
A. Sequence Diagram. B. Proper model of the system context. C. Author Index. D.
Reliability measurement operational profile.
- In a Language Processing System, what does the 'abstract machine' component
do?

A. It performs the lexical analysis of the input text. B. It executes the generated language
(intermediate code). C. It provides the user interface for the language. D. It manages the
component configuration.
- A Transaction Processing System (like an ATM system) must ensure what critical
non-functional property for its database operations?
A. Decoupling. B. Consistency/Integrity (ACID properties). C. Environmental control. D.
P2P communication.
- What type of model focuses on the run-time interactions between system
components, showing the order in which messages are exchanged?
A. Structural Model (e.g., Class Diagram). B. Context Model. C. Interaction Model (e.g.,
## Sequence Diagram). D. Behavioral Model (e.g., State Diagram).
- Which statement is the least accurate description of software architecture?
A. It is the blueprint of a building, not the interior decorating. B. It defines the structure,
components, relationships, and governing principles. C. It is the set of design decisions
that, once made, are difficult to change. D. It must be implemented using a plan-driven
development approach only.
- What is a trade-off in the context of architectural decision-making?
A. A decision that satisfies all quality attributes simultaneously. B. A decision where
improving one quality attribute necessitates compromising another. C. The mandatory
selection of a distributed component architecture. D. The process of generating user
stories.
- When developing a component-based system, after performing component
analysis, what is the next logical step according to the component-based software
engineering (CBSE) process?
A. Application system configuration. B. Requirements refinement. C. Component
adaptation. D. Software testing.

## Answers
## 1. B 2. C 3. B 4. B 5. C
## 6. D 7. B 8. D 9. B 10. C
## 11. B 12. C 13. C 14. B 15. B
## 16. C 17. B 18. B 19. A 20. D

## 21. C 22. B 23. B 24. D 25. C
## 26. A 27. B 28. A 29. B 30. C
## 31. C 32. B 33. C 34. C 35. B
## 36. B 37. B 38. B 39. B 40. C
## 41. C 42. B 43. B 44. C 45. C
## 46. B 47. B 48. C 49. B 50. B
## 51. C 52. C 53. C 54. B 55. B
## 56. B 57. C 58. B 59. C 60. B

## 61. C 62. B 63. D 64. C 65. C
## 66. B 67. B 68. C 69. C 70. D
## 71. C 72. B 73. C 74. B 75. B
## 76. C 77. C 78. D 79. B 80. B
## 81. B 82. D 83. B 84. B 85. B
## 86. B 87. C 88. B 89. B 90. B
## 91. B 92. A 93. C 94. C 95. B
## 96. A 97. B 98. B 99. B 100. B
## 101. A 102. C 103. D 104. C 105. B
## 106. C 107. C 108. C 109. C 110. A
## 111. C 112. B 113. B 114. B 115. B
## 116. B 117. C 118. D 119. B 120. B
