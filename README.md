# 🚀 K6 Performance Testing Project

Performance testing project developed with **Grafana K6** to evaluate the response time, stability, and scalability of a web application under different load conditions.

---

## 📌 Project Overview

This project demonstrates the implementation of the five most common performance testing strategies using **Grafana K6**.

The performance tests were executed against the public demo application **BlazeDemo**, simulating different traffic patterns to evaluate the application's availability, responsiveness, stability, and behavior under load.

### Performance Test Types

| Test Type | Purpose |
|-----------|---------|
| 🟢 Smoke Test | Verify the application is available and responsive before executing more intensive performance tests. |
| 🔵 Load Test | Measure application performance under the expected number of concurrent users and normal workload. |
| 🟠 Stress Test | Determine the application's breaking point by gradually increasing the load beyond normal operating conditions. |
| 🔴 Spike Test | Evaluate how the application responds to sudden and extreme increases in user traffic, and how quickly it recovers. |
| 🟣 Soak Test | Validate application stability, reliability, and resource utilization during prolonged execution under sustained load. |

---

# 🛠️ Technology Stack

- Grafana K6
- JavaScript (ES6)
- Visual Studio Code

---

# 🌐 Application Under Test (AUT)

**Target Website**

> https://blazedemo.com/

BlazeDemo is a public web application commonly used for practicing functional and performance testing. It simulates a flight reservation system and provides a reliable environment for validating application performance under different workload scenarios.

---

# 📊 Performance Test Summary

| Test Type | Objective | Max VUs | Duration | Avg Response Time | P95 Response Time | HTTP Errors | Result |
|-----------|-----------|---------|----------|-------------------|-------------------|-------------|--------|
| 🟢 Smoke | Verify application availability | 1 | 30 s | **520.49 ms** | **1.54 s** | 0% | ✅ Passed |
| 🔵 Load | Validate expected user load | 5 | 40 s | **281.93 ms** | **572.21 ms** | 0% | ⚠️ Threshold exceeded |
| 🟠 Stress | Evaluate behavior under heavy load | 100 | 2m 30s | **427.94 ms** | **1.53 s** | 0% | ✅ Passed |
| 🔴 Spike | Simulate sudden traffic spikes | 100 | 1 min | **453.45 ms** | **2.28 s** | 0% | ✅ Passed |
| 🟣 Soak | Validate long-running stability | 10 | 2m 20s | **434.05 ms** | **1.62 s** | 0% | ✅ Passed |

---

# 📈 Test Results

## 🟢 Smoke Test

### Objective

Verify that the application is available, responsive, and capable of handling basic requests before executing more intensive performance tests.

### Results

- 20 successful HTTP requests.
- 100% successful checks.
- 0% failed requests.
- Average response time: **520.49 ms**
- 95th percentile response time: **1.54 s**
- Maximum response time: **2.06 s**

### Conclusion

The BlazeDemo application remained fully available during the entire execution. All requests returned **HTTP 200**, confirming that the application is healthy and ready for additional performance testing.

---

## 🔵 Load Test

### Objective

Evaluate the application's performance under the expected number of concurrent users.

### Results

- 123 successful requests.
- 100% successful checks.
- No HTTP failures.
- Average response time: **281.93 ms**
- 95th percentile: **572.21 ms**

### Threshold Evaluation

| Threshold | Result |
|-----------|--------|
| P95 < 500 ms | ❌ Failed (572.21 ms) |
| Error Rate < 1% | ✅ Passed |

### Conclusion

The application handled the expected workload without request failures. Although all requests were successful, the configured response time threshold was exceeded, indicating room for performance optimization.

---

## 🟠 Stress Test

### Objective

Determine how the application behaves under high traffic and identify its stability limits.

### Results

- 4,027 successful requests.
- 100% successful checks.
- Average response time: **427.94 ms**
- P95 response time: **1.53 s**
- Maximum virtual users: **100**
- HTTP failures: **0%**

### Conclusion

The application remained stable under heavy load, processing all requests successfully without failures. Response times increased as expected but service availability was maintained throughout the test.

---

## 🔴 Spike Test

### Objective

Simulate sudden traffic spikes and evaluate the application's response and recovery.

### Results

- 2,851 successful requests.
- 100% successful checks.
- Average response time: **453.45 ms**
- P95 response time: **2.28 s**
- Maximum virtual users: **100**
- HTTP failures: **0%**

### Conclusion

The application successfully handled sudden increases in traffic without request failures. Although response times increased during peak demand, the system remained available and stable.

---

## 🟣 Soak Test

### Objective

Validate application stability during a prolonged execution period.

### Results

- 916 successful requests.
- 100% successful checks.
- Average response time: **434.05 ms**
- P95 response time: **1.62 s**
- Maximum virtual users: **10**
- HTTP failures: **0%**

### Conclusion

The application maintained consistent performance throughout the long-duration execution. No failures or signs of instability were observed.

---

# 📊 Overall Results

| Metric | Result |
|---------|--------|
| Application Under Test | https://blazedemo.com/ |
| Performance Tests Executed | 5 |
| HTTP Success Rate | ✅ 100% |
| Failed Requests | ✅ 0% |
| Smoke Test | ✅ Passed |
| Load Test | ⚠️ Threshold exceeded |
| Stress Test | ✅ Passed |
| Spike Test | ✅ Passed |
| Soak Test | ✅ Passed |

---

# 💡 Final Conclusion

The performance evaluation demonstrates that the **BlazeDemo** application maintained **100% availability** throughout all test scenarios.

Key observations include:

- ✅ No HTTP request failures were detected.
- ✅ All functional checks passed successfully.
- ✅ The application remained stable during Stress, Spike, and Soak tests.
- ⚠️ During the Load Test, the configured response time threshold (**P95 < 500 ms**) was exceeded, suggesting that response times may increase under expected workloads.

Overall, the application proved capable of handling different traffic patterns while maintaining service availability and operational stability.

---

# 📁 Project Structure

```text
QA_Project_K6_Performance/
│
├── scripts/
│   ├── smoke-test.js
│   ├── load-test.js
│   ├── stress-test.js
│   ├── spike-test.js
│   └── soak-test.js
│
└── README.md
```

---

# 🔗 Related Projects

- 🤖 [QA Automation Portfolio](https://github.com/AnaCenteno-DA/QA_Automation_Portfolio)
- 📊 [Data Analytics Portfolio](https://github.com/AnaCenteno-DA/Data_Analytics_Portfolio)

---

# 👩‍💻 Author

**Ana Centeno**

QA Engineer | Manual Testing | Performance Testing | Test Automation

### Skills

- Grafana K6
- JavaScript
- Performance Testing
- Manual Testing
- Quality Assurance
- Git & GitHub
