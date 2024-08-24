## Coding Guidelines

### SOLID Principles
- **Single Responsibility Principle (SRP):** Each component should have a single responsibility.
- **Open/Closed Principle:** Components should be open for extension but closed for modification.
- **Dependency Inversion Principle:** Use event-driven architecture or dispatching to adhere to the principle.
- **Modularity:** Apply the concept of modularity with a focus on Separation of Concerns (SoC).
- **Functional Programming Concepts:** Emphasize immutability of values.
- **Adhere to DRY, YAGNI, Early Return, and KISS Principles:**
  - **DRY:** Don’t Repeat Yourself.
  - **YAGNI:** You Aren't Gonna Need It.
  - **Early Return:** Return early to avoid deep nesting.
  - **KISS:** Keep It Simple, Stupid.

### Naming Conventions and Design System
- **Constants:** Use Snake Case (e.g., `CONSTANT_NAME`).
- **Components:** Define components in the `components` folder.
- **Custom Hooks Logic:** Define logic related to custom hooks in the `hooks` folder.
- **Stateless Logic:** Place stateless logic in the `utils` folder.
- **Schema Logic:** Define schema logic within the `utils` folder.
- **Type Definitions:** Place type definitions in the `types` folder.
- **API Definitions:** Define APIs in the `apis` folder.
- **Component Names:** Use Pascal Case (e.g., `ComponentName`).
- **Utility Functions:** Use Camel Case (e.g., `utilityFunction`).
- **Domain-Driven Design:** Follow domain-driven design principles for page component definitions.
- **Design System Implementation:** Implement the design system across components (monolith).
- **Documentation:** Document complex code sections or those that refer to specific concepts.
- **End-to-End Tests:** Write e2e tests using Cypress.
- **React Query Adapters:** Use adapters with React Query, leveraging `select` to transform data into a flat object.
- **Error Handling:** Implement error handling in the API and use error boundaries in the project for disaster recovery.
- **CI/CD Process:** Document the CI/CD process in the README file.
- **Package Management:** Add packages only after confirming their necessity.
- **ESLint Configuration:** Configure ESLint to improve developer experience (DX) and adhere to SonarQube rules.
- **Prettier Configuration:** Set up Prettier for code formatting.

### Git Practices
- **Documentation:** [Follow the Git documentation](https://github.com/WonderScript/git-best-practices).
- **Code Formatting:** Use ESLint and Prettier for code formatting.
- **Editor:** Use VS Code.
- **Extensions:** Utilize the Material Icons extension for better iconography.
