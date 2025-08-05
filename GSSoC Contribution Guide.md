
# 👋🏻 How to Contribute to Open Source for GSSoC – Beginner's Guide

Are you selected for **GSSoC** and wondering:

*"How do I even begin contributing to open source?"* Well, buckle up, rookie dev — you're about to become an OSS warrior. Let’s make this GSSoC journey memorable together! See you on the battlefield, coder ⚔️

[Hitesh Kumar](https://www.linkedin.com/in/hitesh-kumar-aiml/)

*Project Admin | OSS Enthusiast*

[Mohd Mashruf](https://www.linkedin.com/in/mohd-mashruf/)

*Project Admin | OSS Enthusiast*

Watch It:

[GSSoC 2025 Contributor Onboarding | Complete Guide to Getting Started](https://youtu.be/It76LBC3Ils?si=iyVdhPUarbi43Eps)

[How to contribute to open source projects (our community project walkthrough)](https://youtu.be/dLRA1lffWBw?si=R6YlU-YaMXw4kCFq)

**What Is GSSoC?**

**GirlScript Summer of Code (GSSoC)** is a 3-month open-source program where contributors collaborate on real-world projects under mentors.

✅ You work on issues ✅ Raise PRs ✅ Get reviews ✅ And grow as a dev 💪

**Understanding Labels in GSSoC**

Most GSSoC repositories use labels to mark contributor-friendly issues:

| **Label** | **Meaning** | **Points** |
| --- | --- | --- |
| GSSoC | Issue is part of GSSoC 2025 ✅ | |
| Level 1 | **Beginner-friendly.** Great for your first contribution! | 3 |
| Level 2 | **Intermediate.** Requires some familiarity. | 7 |
| Level 3 | **Advanced.** A significant and complex task. | 10 |

**Pro Tip:** Start with Easy or good first issue labels to get familiar with the codebase before tackling more complex tasks.

**The Complete Contribution Workflow (with Commands)**

### **Step 1: 🔍 Choose a Project (e.g.,)**

Visit the GitHub Repo and look under the Issues tab. Filter by `label:GSSoC level:Level 1`. You can also create an issue if you find a bug or want to add a feature.

### **Step 2: 🍴 Fork & Clone the Repo**

```bash
git clone https://github.com/your-username/Voice-Marketing-Agent.git
cd voice-Marketing-Agent
```

### **Step 3: Add Upstream Remote**

```bash
git remote add upstream https://github.com/openVoiceX/Voice-Marketing-Agent.git
```

### **Step 4: Create a Feature Branch**

```bash
git checkout -b fix/navbar-overflow
```

### **Step 5: Make Your Changes**

**📌 Example Issue: Navbar breaks on small screens [GSSoC] [Level 1]**

Fix: Add responsive Tailwind classes to collapse menu

```jsx
<nav className="flex flex-wrap md:flex-nowrap p-4 bg-black">
  <div className="w-full md:w-auto">...logo...</div>
  <div className="w-full md:w-auto">...menu...</div>
</nav>
```

### **Step 6: 💾 Stage & Commit**

```bash
git add .
git commit -m "Fix: responsive navbar issue for small screens #123"
```

### **Step 7: 📤 Push to Your Fork**

```bash
git push origin fix/navbar-overflow
```

### **Step 8: 🚀 Open a Pull Request**

Go to your GitHub fork → Click Compare & pull request.

✍️ In the PR:
- Mention the issue number: Fixes #123
- Describe the change
- Mention you’re a **GSSoC'25** participant

### **Step 9: 🗣️ Engage with Reviews**

Mentors might leave comments. Read, fix, and push again:

```bash
git add .
git commit --amend
```

## **🌟 Best Practices for GSSoC Contributors**

| **✅ Do This** | **❌ Don’t Do This** |
| --- | --- |
| Ask to get assigned to the issue first | Submit PRs without assignment |
| Follow the repo’s coding style | Mix your own formatting |
| Be respectful in PRs/comments | Spam issues/PRs for points |
| Start small — Level 1 issues | Try to solve Level 3 bugs on Day 1 |

## **🛠 Example: Real Contribution in CodeStreak**

```bash
# Found issue: "Add dark mode toggle" [GSSoC] [Level 2]
git checkout -b feature/dark-mode
# Add toggle in settings
git add .
git commit -m "Feat: Added dark mode toggle button #45"
git push origin feature/dark-mode
```

## **🔥 Final Tips**

- Join project Discord/Slack — mentors are active there.
- Keep contributing — even small fixes matter.
- Be consistent, not perfect.
- Add PRs to your resume or GitHub Readme.

# **Local Development Setup Guide (Based on Project Code)**

This guide explains how to set up and run the Voice Marketing Agent locally using Docker.

### **Section 1: Prerequisites**

Install:
- Git
- Docker & Docker Compose

### 🚀 Setup Steps

1. Clone the Repository

```bash
git clone https://github.com/Hiteshydv001/Voice-Marketing-Agent.git
cd Voice-Marketing-Agent
```

2. Configure Environment Variables

```bash
cp .env.example .env  # macOS/Linux
copy .env.example .env  # Windows
```

3. Launch All Services

```bash
docker compose up --build -d
```

4. Download the AI Model

```bash
docker exec -it voice-marketing-agent-ollama ollama pull tinylama
```

5. Verify Services

- Frontend: http://localhost:3000
- API Docs: http://localhost:8000/docs

### 🧪 Developer Workflow

Create new branch:

```bash
git checkout -b fix/some-feature
```

#### ⚙️ Backend

- Code in `backend/src/`
- Logs: `docker logs -f voice-marketing-agent-backend`

#### 🎨 Frontend

- Code in `frontend/src/`

### 📞 Twilio Integration (with ngrok)

1. Install ngrok
2. Run:

```bash
ngrok http 8000
```

3. Update `.env` with `PUBLIC_URL=https://your-ngrok-url.ngrok-free.app`

4. Restart container:

```bash
docker compose restart api
```
