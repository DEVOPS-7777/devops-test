## DevOps Coding Test

### Instructions
- The repo contains a working **Node.js API + Redis** setup with **basic prebuilt configuration files** (for you to improve).  
  - Your goal is to make the system **reliable**, **secure**, and **maintainable**.  
  - You may modify existing files or add new ones.
  - No AI allowed.
- Deliverables should be **code, configuration, documentation, and scripts only**.
  - Github Actions and potentially AWS configuration will be required, as per permissions given by the test coordinator.
  - Other deliverables are as per the Main requirements specification below.
- **All monitoring, logging, and testing are added by you** — no prebuilt files.  
  - Preference for using **Prometheus** for monitoring and **Playwright or Cypress** for testing, though other tools are acceptable if justified.


### Main Requirements

Think about general principles of CI/CD, version control, collaboration, containerization, orchestration, monitoring and observability, logging and alerts, security and secrets management, and testing/staging tools.

The improved system should meet the following:

#### 1. Setup & Configuration 
- Implement a consistent **environment configuration strategy** that supports development, staging, and production using environment variables, structured configuration, and secure secret management.
  - Keep **sensitive information** out of source control.
  - Run consistently across **environments** without manual setup. 
- Support **multiple instances** safely and reliably, considering the semi-stateful on node redis db.
- Provide a reproducible setup for a new developer with **documentation**.

#### 2. Reliability & Observability
- **Detect failures** and **recover automatically** where possible.  
  - Provide a clear way to verify **system health**.
  - Start successfully even when **dependencies** are temporarily unavailable.
  - Allow **failure simulation** to verify **resilience**. 
- Include **monitoring and metrics** for performance and reliability.  
- Include **centralized logging** for troubleshooting and observability.  

#### 3. Automation & Safety
- Allow **safe updates** with **minimal disruption**.  
- Include **automated tests** for critical system functionality.  
- **Validate changes automatically** before **release**.