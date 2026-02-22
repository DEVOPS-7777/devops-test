## DevOps Coding Test

### Instructions
- The repo contains a working **Node.js API + Redis** setup with **basic prebuilt configuration files** (for you to improve).  
  - Your goal is to make the system **reliable**, **secure**, and **maintainable**.  
  - You may modify existing files or add new ones.  
- Deliverables should be **code, configuration, documentation, and scripts only**.  
- **All monitoring, logging, and testing must be added by you** — no prebuilt files.  
  - Preference for using **Prometheus** for monitoring and **Playwright or Cypress** for testing, though other tools are acceptable if justified.


### Main Requirements

Think about general principles of CI/CD, version control, collaboration, containerization, orchestration, monitoring and observability, logging and alerts, security and secrets management, and testing/staging tools.

The improved system should meet the following:

#### 1. Setup & Configuration
- Run consistently across **environments** without **manual setup**.  
- Provide a **reproducible setup** for a new developer.  
- Keep **sensitive information** out of **source control**.  
- Implement a clear **configuration strategy** for multiple environments.  
- Support **multiple instances** safely and reliably.  

#### 2. Reliability & Observability
- Start successfully even when **dependencies** are temporarily unavailable.  
- **Detect failures** and **recover automatically** where possible.  
- Provide a clear way to verify **system health**.  
- Include **monitoring and metrics** for performance and reliability.  
- Include **centralized logging** for troubleshooting and observability.  
- Allow **failure simulation** to verify **resilience**.  

#### 3. Automation & Safety
- Allow **safe updates** with **minimal disruption**.  
- Include **automated tests** for critical system functionality.  
- **Validate changes automatically** before **release**.