# Performance_Testing_K6
# 🚀 K6 Performance Testing Project

Performance testing project developed with **Grafana K6** to evaluate the response time, stability, and scalability of a web application under different load conditions.

## 📌 Project Overview

This project demonstrates the implementation of the five most common performance testing strategies using **K6**:

- ✅ Smoke Test
- 📈 Load Test
- 💥 Stress Test
- ⚡ Spike Test
- ⏳ Soak Test

- | Test Type | Purpose |
|-----------|---------|
| 🟢 Smoke Test | Verify the application is available and responsive before executing more intensive performance tests. |
| 🔵 Load Test | Measure application performance under the expected number of concurrent users and normal workload. |
| 🟠 Stress Test | Determine the application's breaking point by gradually increasing the load beyond normal operating conditions. |
| 🔴 Spike Test | Evaluate how the application responds to sudden and extreme increases in user traffic, and how quickly it recovers. |
| 🟣 Soak Test | Validate application stability, reliability, and resource utilization during prolonged execution under sustained load. |

---

Each test validates a different aspect of the application's performance and resilience.

---

## 🛠️ Technology Stack

- Grafana K6
- JavaScript (ES6)
- Visual Studio Code

---

## 🌐 Target Application

**Application under test**

> https://test.k6.io

This public demo website provided by the K6 team is specifically designed for learning and practicing performance testing.

---


# 📊 Performance Test Summary

| Test Type | Objective | Max VUs | Duration | Avg Response Time | P95 Response Time | HTTP Errors | Result |
|-----------|-----------|---------|----------|-------------------|-------------------|-------------|--------|
| 🟢 Smoke | Verify application availability | 1 | 30 s | **28.76 ms** | **40.77 ms** | 0% | ✅ Excellent |
| 🔵 Load | Validate expected user load | 5 | 40 s | **281.93 ms** | **572.21 ms** | 0% | ⚠️ Threshold exceeded |
| 🟠 Stress | Evaluate behavior under heavy load | 100 | 2m 30s | **427.94 ms** | **1.53 s** | 0% | ✅ Stable |
| 🔴 Spike | Simulate sudden traffic spikes | 100 | 1 min | **453.45 ms** | **2.28 s** | 0% | ✅ Stable |
| 🟣 Soak | Validate long-running stability | 10 | 2m 20s | **434.05 ms** | **1.62 s** | 0% | ✅ Stable |

---

# 📈 Key Findings

### ✅ Smoke Test

- Application responded successfully.
- Very low response time.
- No HTTP failures.
- Suitable as a health check before deployment.

---

### ✅ Load Test

- Application handled the expected load without errors.
- 100% successful requests.
- The configured threshold **P95 < 500 ms** was exceeded.

**Threshold Result**

```
Expected:
P95 < 500 ms

Obtained:
572.21 ms
```

This indicates that although the application remained available, response times increased under normal load.

---

### ✅ Stress Test

- System supported up to **100 concurrent virtual users**.
- No request failures.
- Response time increased under heavy load, which is expected.
- Application remained operational throughout the test.

---

### ✅ Spike Test

- Simulated a sudden increase in traffic.
- No HTTP errors occurred.
- Response times increased significantly during peak demand.
- The application recovered successfully after the traffic spike.

---

### ✅ Soak Test

- Long-duration execution to evaluate stability.
- No memory leaks or request failures observed.
- Performance remained stable throughout the execution.

---

# 📊 Overall Results

| Metric | Result |
|---------|--------|
| Availability | ✅ 100% |
| HTTP Success Rate | ✅ 100% |
| Failed Requests | ✅ 0% |
| Smoke Test | ✅ Passed |
| Load Test | ⚠️ Threshold exceeded |
| Stress Test | ✅ Passed |
| Spike Test | ✅ Passed |
| Soak Test | ✅ Passed |

---

# 💡 Conclusion

The application demonstrated **excellent availability and stability** throughout all performance testing scenarios.

Key observations include:

- 100% successful HTTP requests in every test.
- No request failures during high-load conditions.
- Stable behavior under stress, spike, and long-duration workloads.
- The only identified improvement opportunity was during the **Load Test**, where the **95th percentile response time (572 ms)** exceeded the configured threshold of **500 ms**.

Overall, the application proved capable of handling increasing traffic while maintaining service availability, making it suitable for moderate to high workloads.

---

## 📁 Project Structure

```
scripts/
│
├── smoke-test.js
├── load-test.js
├── stress-test.js
├── spike-test.js
└── soak-test.js
```

---

## 👩‍💻 Author

**Ana Centeno**

QA Engineer | Performance Testing | Automation Testing

- Grafana K6
- JavaScript
- Performance Testing
- Quality Assurance
