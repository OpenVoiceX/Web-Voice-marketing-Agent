# 👋🏻 How to Contribute to Open Source for GSSoC – Beginner's Guide

Are you selected for **GSSoC** and wondering:

*"How do I even begin contributing to open source?"* Well, buckle up, rookie dev — you're about to become an OSS warrior.Let’s make this GSSoC journey memorable together!  See you on the battlefield, coder ⚔️

[Hitesh Kumar](https://www.linkedin.com/in/hitesh-kumar-aiml/)

*Project Admin | OSS Enthusiast*

[Mohd Mashruf](https://www.linkedin.com/in/mohd-mashruf/)

*Project Admin | OSS Enthusiast*

Watch It:

[GSSoC 2025 Contributor Onboarding | Complete Guide to Getting Started](https://youtu.be/It76LBC3Ils?si=iyVdhPUarbi43Eps)

[How to contribute to open source projects (our community project walkthrough)](https://youtu.be/dLRA1lffWBw?si=R6YlU-YaMXw4kCFq)

*Important:* These are the steps you need to follow if you stick with any issue: contact mentors and PA.

**What Is GSSoC?**

**GirlScript Summer of Code (GSSoC)** is a 3-month open-source program where contributors collaborate on real-world projects under mentors.

✅ You work on issues ✅ Raise PRs ✅ Get reviews ✅ And grow as a dev 💪

**Understanding Labels in GSSoC**

Most GSSoC repositories use labels to mark contributor-friendly issues:

| **Label** | **Meaning** | **Points** |
| --- | --- | --- |
| 
GSSoC | Issue is part of GSSoC 2025 ✅ |  |
| Level 1 | **Beginner-friendly.** Great for your first contribution! | 3 |
| Level 2 | **Intermediate.** Requires some familiarity. | 7 |
| Level 3 | **Advanced.** A significant and complex task. | 10 |

**Pro Tip:** Start with Easy or good first issue labels to get familiar with the codebase before tackling more complex tasks.

**The Complete Contribution Workflow                            (with Commands)**

### **Step 1: 🔍 Choose a Project (e.g.,)**

Visit theAdåLea&GjtHub-Repo and look under the Issues tab.'

Filter by:

label:GSSoC level:Level 1You can also create Issue : Click on New issue  to create a  issue if you find any bug or add feature that is not listed

### **Step 2: 🍴 Fork & Clone the Repo**

```jsx
`*git clone [https://github.com/your-username/ /web-voice-marketing-agent.git](https://github.com/your-username/.git)*`
**`*cd /web-voice-marketing-agent*`**
```

### **Step 3:Add Upstream Remote**

On you local Machine Create a folder then open VS code or any IDE The In Terminal

`*git remote add upstream https://github.com/openVoiceX//web-voice-marketing-agent.git*`

### **Step 4: Create a Feature Branch**

***git checkout -b fix/navbar-overflow***

### **Step 5: Make Your Changes**

### **📌 Example Issue: Navbar breaks on small screens [GSSoC] [Level 1]**

- File: src/components/Navbar.js
- Fix: Add responsive Tailwind classes to collapse menu

```jsx
`*<nav className="flex flex-wrap md:flex-nowrap p-4 bg-black">*`
`*<div className="w-full md:w-auto">...logo...</div>*`
`*<div className="w-full md:w-auto">...menu...</div>*`
`*</nav>*`
```

### **Step 6: 💾 Stage & Commit**

```jsx
**`*git add .*`**
**`*git commit -m "Fix: responsive navbar issue for small screens #123"*`**
```

### **Step 7: 📤 Push to Your Fork**

```jsx
***git push origin fix/navbar-overflow***
```

### **Step 8: 🚀 Open a Pull Request**

Go to your GitHub fork → Click Compare & pull request.

✍️ In the PR:

- Mention the issue number: Fixes #123
- Describe the change
- Mention you’re a **GSSoC'25** participant

### **Step 9: 🗣️ Engage with Reviews**

Your mentors might leave comments. Don’t panic. Read, fix, push again:

```jsx
**`*git add .*`**
**`*git commit --amend*`**
```

## **🌟 Best Practices for GSSoC Contributors**

| **✅ Do This** | **❌ Don’t Do This** |
| --- | --- |
| Ask to get assigned to the issue first | Submit PRs without assignment |
| Follow the repo’s coding style | Mix your own formatting |
| Be respectful in PRs/comments | Spam issues/PRs for points |
| Start small — Level 1 issues | Try to solve Level 3 bugs on Day 1 |

## **🛠 Example: Real Contribution in CodeStreak**

Opened a PR, got reviewed, made fixes, PR merged 🎉 ✅ Contribution done 🏅 You get points 🚀 You get better at real-world dev

```jsx
# Found issue: "Add dark mode toggle" [GSSoC] [Level 2]
*git checkout -b feature/dark-mode*
# Added a toggle in settings
*git add .*
*git commit -m "Feat: Added dark mode toggle button #45"*
*git push origin feature/dark-mode*
```

## **🔥 Final Tips**

- Join the project Discord/Slack — mentors are active there.
- Keep contributing, even small fixes matter.
- Be consistent, not perfect.
- Add your PRs to your resume or GitHub Readme like a champ 🏆
- 
- **🙌 Ready to Get Started?**

**Voice-Marketing-Agent** is a platform that sends personalized coding problems daily via WhatsApp, Email, or SMS — built with AI to help students practice smart, join custom battles, and never miss contests!

You can always reach out:

1. **Hitesh Kumar ( Project Admin )**

**Repo:** [](https://github.com/karmveershubham/CodeStreak)[Voice-Market-Agent](https://github.com/OpenVoiceX/Voice-Marketing-Agent)

**GitHub:** [](https://github.com/karmveershubham)[Hitesh Kumar](https://github.com/Hiteshydv001)

**LinkedIn**:[Hitesh Kumar](https://www.linkedin.com/in/hitesh-kumar-aiml/)

2. **Mohd Mashruf ( Project Admin )**

**Repo:** [](https://github.com/karmveershubham/CodeStreak) [Voice-Market-Agent](https://github.com/OpenVoiceX/Voice-Marketing-Agent)

**GitHub:**[Mohd Mashruf](https://github.com/mashrufmohd/)

 **LinkedIn**:[Mohd Mashruf](https://www.linkedin.com/in/mohd-mashruf/)·
