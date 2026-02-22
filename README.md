## DevOps Coding Test

### Instructions
- The repo contains a working Node.js API + Redis setup, and basic prebuilt configuration files (to be improved on).
    - Improve the system to be **reliable**, **secure**, and **maintainable**.
    - You may modify existing files and add new ones.
- Deliver solutions as **code, configuration, documentation, and scripts only**.
- **All (1) monitoring, (2) logging, and (3) testing must be added by you** — no files are prebuilt. Preference for use of Prometheus, Playwright.

### Main Requirements

The improved system should:

#### 1. Setup & Configuration
- Run consistently across **environments** without **manual setup**.
- Provide a **reproducible setup** for a new developer.
- Keep **sensitive information** out of **source control**.
- Use a clear **configuration strategy** across environments.
- Support **multiple instances** safely.
- Remain **simple to understand and operate**.

#### 2. Reliability & Observability
- Start successfully even when **dependencies** are unavailable.
- **Detect failures** and **recover automatically** where possible.
- Provide a way to verify **system health**.
- Include **monitoring and metrics** for system performance and reliability.
- Include **centralized logging** for troubleshooting and observability.
- Allow **failure simulation** to verify **resilience**.

#### 3. Automation & Safety
- Allow **safe updates** with **minimal disruption**.
- Include **automated tests** for key system functionality.
- **Validate changes automatically** before **release**.