# PathFinder Folder Structure & Implementation Design Plan

This document details the folder structure, layers, and configuration files established for the PathFinder project.

## Project Structure Overview

```
path_finder/
├── public/                 # Static assets (logos, icons, animations, etc.)
├── src/                    # Source application codebase
│   ├── app/                # App layer: config, providers, router
│   ├── pages/              # View layer: route pages divided by category
│   ├── features/           # Feature layer: core business logic engines
│   ├── components/         # Shared component library modules
│   ├── services/           # API, AI, and Export services
│   ├── store/              # Zustand global client-side state
│   ├── hooks/              # Custom reusable React hooks
│   ├── utils/              # General formatters and helper libraries
│   ├── constants/          # Application flags, colors, and configuration lists
│   ├── data/               # Local JSON taxonomies and template assets
│   ├── styles/             # Modular vanilla CSS themes, variables, and typography
│   ├── App.jsx             # Main application entry layout
│   └── main.jsx            # React root DOM rendering script
├── docs/                   # Documentation resources
├── tests/                  # Automated tests (unit, integration, e2e, performance)
├── .env                    # Environment configuration
├── .env.example            # Environment configuration template
├── vite.config.js          # Vite build config with path aliasing
├── package.json            # NPM dependencies configuration
├── README.md               # Repository documentation
└── jsconfig.json           # Path-resolution settings for code editors
```

## Detailed File Verification

### 1. Root Configuration Layer
*   **[package.json](file:///Users/jayanthpranaykonada/pathfinder/path_finder/package.json)**: Fully loaded with React 18, Vite 5, Zustand, TanStack Query, Axios, and ESLint configurations.
*   **[vite.config.js](file:///Users/jayanthpranaykonada/pathfinder/path_finder/vite.config.js)**: Configures `@/` as a shortcut pointing to the `src/` directory.
*   **[jsconfig.json](file:///Users/jayanthpranaykonada/pathfinder/path_finder/jsconfig.json)**: Links path alias `@/*` to `src/*` for editor autocomplete.
*   **[.env](file:///Users/jayanthpranaykonada/pathfinder/path_finder/.env)** & **[.env.example](file:///Users/jayanthpranaykonada/pathfinder/path_finder/.env.example)**: Environment files defining default API url variables.
*   **[index.html](file:///Users/jayanthpranaykonada/pathfinder/path_finder/index.html)**: Main HTML structure linking to `src/main.jsx`.

### 2. App Routing & Configuration (`src/app/`)
*   **Router (`src/app/router/`)**:
    *   [AppRouter.jsx](file:///Users/jayanthpranaykonada/pathfinder/path_finder/src/app/router/AppRouter.jsx): Handles paths, auth restrictions, and page rendering mapping.
    *   [ProtectedRoute.jsx](file:///Users/jayanthpranaykonada/pathfinder/path_finder/src/app/router/ProtectedRoute.jsx) & [PublicRoute.jsx](file:///Users/jayanthpranaykonada/pathfinder/path_finder/src/app/router/PublicRoute.jsx): Protects dashboard views from unauthenticated requests, and redirects logged-in users away from auth pages.
*   **Providers (`src/app/providers/`)**:
    *   `AuthProvider.jsx`: React Context wrapping state login/logout helper operations.
    *   `ThemeProvider.jsx`: Implements standard CSS data-theme toggles.
    *   `QueryProvider.jsx`: Sets up React Query environment.
    *   `NotificationProvider.jsx`: Handles global banner notification alerts list.
    *   `PremiumProvider.jsx`: Flags premium state.
*   **Config (`src/app/config/`)**:
    *   `axios.js`: Configured axios instances.
    *   `env.js`: Environment mappings.
    *   `queryClient.js`: Global config parameters for query clients.

### 3. Pages Layer (`src/pages/`)
Includes boilerplate for modular navigation:
*   `auth/`: `Login.jsx`, `Register.jsx`, `ForgotPassword.jsx`, `VerifyEmail.jsx`, `ResetPassword.jsx`.
*   `onboarding/`: `SkillSelection.jsx`, `GoalSelection.jsx`, `ExperienceLevel.jsx`, `RevisionSelection.jsx`, `TimeAvailability.jsx`, `TimelineSelection.jsx`, `SalaryTarget.jsx`, `ReviewInputs.jsx`.
*   `dashboard/`: `DashboardHome.jsx`, `DailyTasks.jsx`, `Progress.jsx`, `Analytics.jsx`, `UpcomingRevision.jsx`, `Streaks.jsx`, `RecentActivity.jsx`.
*   `roadmap/`: `RoadmapBuilder.jsx`, `RoadmapTimeline.jsx`, `RoadmapMilestones.jsx`, `ProjectMilestones.jsx`, `InterviewPreparation.jsx`, `AdaptiveRoadmap.jsx`.
*   `mindmap/`: `MindMapView.jsx`, `ConceptExplorer.jsx`, `NodeDetails.jsx`, `ProgressMap.jsx`.
*   `revision/`: `RevisionDashboard.jsx`, `WeakConcepts.jsx`, `StrongConcepts.jsx`, `Flashcards.jsx`, `SpacedRepetition.jsx`, `InterviewRevision.jsx`, `RevisionHistory.jsx`.
*   `resources/`: `ResourceLibrary.jsx`, `YoutubeResources.jsx`, `UdemyResources.jsx`, `CourseraResources.jsx`, `GithubResources.jsx`, `DocumentationResources.jsx`, `BooksResources.jsx`, `ResourceRanking.jsx`.
*   `jobs/`: `JobDashboard.jsx`, `RecommendedRoles.jsx`, `SkillGapAnalysis.jsx`, `SalaryInsights.jsx`, `IndustryDemand.jsx`, `ResumeMatch.jsx`.
*   `mentor/`: `MentorChat.jsx`, `AskRoadmap.jsx`, `AskConcept.jsx`, `DailyCoach.jsx`.
*   `interview/`: `MockInterview.jsx`, `TechnicalQuestions.jsx`, `HRQuestions.jsx`, `CompanyWisePrep.jsx`, `InterviewAnalytics.jsx`.
*   `premium/`: `Upgrade.jsx`, `Billing.jsx`, `Subscription.jsx`, `FeatureComparison.jsx`.
*   `admin/`: `Dashboard.jsx`, `UserManagement.jsx`, `ResourceManagement.jsx`, `SkillManagement.jsx`, `RoadmapTemplates.jsx`, `PremiumAnalytics.jsx`, `RevenueDashboard.jsx`.

### 4. Engine Business Logic Layer (`src/features/`)
*   `roadmap-engine/`: `roadmapGenerator.js`, `timelineGenerator.js`, `milestoneGenerator.js`, `dependencyResolver.js`, `projectGenerator.js`.
*   `revision-engine/`: `confidenceCalculator.js`, `spacedRepetition.js`, `memoryDecay.js`, `interviewRevision.js`, `revisionPlanner.js`, `revisionScore.js`.
*   `resource-engine/`: `resourceRanker.js`, `youtubeFinder.js`, `courseraFinder.js`, `udemyFinder.js`, `githubFinder.js`, `docsFinder.js`, `booksFinder.js`, `recommendationEngine.js`.
*   `job-intelligence/`: `salaryEstimator.js`, `marketDemand.js`, `roleMatcher.js`, `skillGapAnalyzer.js`, `resumeAnalyzer.js`, `jobReadinessScore.js`.

### 5. Services & Utils Layer
*   `services/api/`: `auth.api.js`, `roadmap.api.js`, `jobs.api.js`, `resources.api.js`, `revision.api.js`, `mentor.api.js`, `analytics.api.js`, `payment.api.js`.
*   `services/ai/`: `roadmapAI.js`, `mentorAI.js`, `revisionAI.js`, `interviewAI.js`, `resourceAI.js`.
*   `services/export/`: `pdfExport.js`, `notionExport.js`, `calendarExport.js`, `csvExport.js`.
*   `store/`: 11 Zustand global stores (e.g. `authStore.js`).
*   `hooks/`: 8 custom React hooks (e.g. `useAuth.js`).
*   `utils/`: Helper utilities (e.g. `roadmapUtils.js`).
*   `data/skills/`: Skills datasets `java.json`, `python.json`, `ai_ml.json`, `web_dev.json`, `cyber_security.json`.

---

## Esthetical Theme Definition (`src/styles/themes.css`)
Our global styling configuration uses custom HSL values configured for deep space premium design visuals, supporting glassmorphism and transition effects out-of-the-box.

# SkillPilot AI - Implementation Specification v1.0

## Project Objective

Build an AI-powered learning and career platform that generates personalized skill roadmaps, revision plans, resource recommendations, job insights, and progress tracking systems.

The platform must support:

* Learning from scratch
* Revision of known concepts
* Career-focused learning
* Entrepreneurship-focused learning
* Interview preparation
* Continuous progress tracking

---

# Phase 1: Foundation

## AUTH-001 Authentication Module

### Features

* User Registration
* User Login
* Forgot Password
* Reset Password
* Email Verification
* Session Persistence
* Logout

### Database

Users Table

Fields:

* id
* name
* email
* password_hash
* avatar
* role
* subscription_plan
* created_at
* updated_at

### Acceptance Criteria

* User can create account
* User can login
* Protected routes work
* Session survives page refresh

---

## PROFILE-001 User Profile

### Features

Store:

* Name
* Education
* Current Profession
* Current Skill Level
* Country
* Preferred Language

### Acceptance Criteria

* Profile editable
* Profile persists

---

# Phase 2: Onboarding Engine

## ONBOARD-001 Skill Selection

Question:

What skill do you want to master?

Examples:

* Java
* Data Science
* AI
* UI UX
* Entrepreneurship

### Acceptance Criteria

* Searchable skill list
* Custom skill support

---

## ONBOARD-002 Goal Selection

Options

* Get Job
* Career Switch
* Promotion
* Freelancing
* Entrepreneurship
* Mastery

Additional Inputs

Job Goal

* Target Salary

Entrepreneur Goal

* Revenue Goal

---

## ONBOARD-003 Knowledge Assessment

Options

* Beginner
* Intermediate
* Advanced
* Revision Only

---

## ONBOARD-004 Known Concepts

User can select:

* Strong
* Medium
* Weak
* Unknown

For every concept.

---

## ONBOARD-005 Timeline

Inputs

* Hours Per Day
* Days Per Week
* Deadline

Acceptance Criteria

* Validation
* Dynamic timeline estimation

---

# Phase 3: Skill Taxonomy Engine

## TAXONOMY-001

Purpose

Maintain hierarchical knowledge trees.

Example

Java

* Basics
* OOP
* Collections
* Multithreading
* JDBC
* Spring
* Spring Boot
* Security
* Microservices

### Requirements

Each node contains:

* title
* description
* difficulty
* estimated hours
* dependencies

---

## TAXONOMY-002 Dependency Mapping

Example

Cannot start:

Spring Boot

until:

Java Basics
OOP
Collections

are completed.

---

# Phase 4: Roadmap Engine

## ROADMAP-001 Generate Roadmap

Inputs

* Skill
* Goal
* Timeline
* Hours Per Day
* Knowledge State

Outputs

* Phases
* Topics
* Milestones
* Projects
* Revision Schedule

---

## ROADMAP-002 Timeline Generation

Generate:

Daily Plan

Weekly Plan

Monthly Plan

---

## ROADMAP-003 Milestone System

Milestones:

* Learning
* Project
* Revision
* Interview

---

## ROADMAP-004 Adaptive Roadmaps

If user misses tasks:

AI recalculates schedule.

---

# Phase 5: Revision Engine

## REVISION-001 Knowledge States

Each topic must have:

* Not Started
* Learning
* Strong
* Weak
* Forgotten
* Mastered

---

## REVISION-002 Spaced Repetition

Intervals

* 1 Day
* 3 Days
* 7 Days
* 15 Days
* 30 Days
* 60 Days

---

## REVISION-003 Revision Planner

Generate:

Today's Revision Tasks

Based on:

* Confidence
* Time Since Last Review

---

## REVISION-004 Interview Revision Mode

Focus only on:

* Frequently Asked Concepts
* High Impact Topics
* Problem Solving

---

# Phase 6: Resource Intelligence Engine

## RESOURCE-001 Resource Aggregation

Sources

* YouTube
* Coursera
* Udemy
* Official Docs
* GitHub
* Books
* Blogs

---

## RESOURCE-002 Resource Ranking

Score Based On

* Popularity
* Freshness
* Difficulty
* Completion Rate

---

## RESOURCE-003 Resource Categories

For Every Topic

Provide:

* Best Free Resource
* Best Paid Resource
* Best Documentation
* Best Practice Resource
* Best Revision Resource

---

# Phase 7: Mind Map Engine

## MINDMAP-001 Interactive Graph

Features

* Zoom
* Pan
* Expand
* Collapse

---

## MINDMAP-002 Node Details

Clicking a node shows:

* Description
* Resources
* Tasks
* Progress

---

## MINDMAP-003 Node Status

Statuses

* Not Started
* In Progress
* Completed
* Revision Due

---

# Phase 8: Task System

## TASK-001 Daily Tasks

Generate:

Today's Learning Tasks

Today's Revision Tasks

Today's Project Tasks

---

## TASK-002 Progress Tracking

Track

* Completion %
* Streak
* Study Hours

---

## TASK-003 Calendar View

Show:

* Daily Tasks
* Weekly Tasks
* Revision Events

---

# Phase 9: Career Intelligence Engine

## CAREER-001 Job Recommendations

Based on:

* Roadmap
* Skill Progress
* Goal

---

## CAREER-002 Salary Engine

Show:

* Entry Salary
* Mid Salary
* Senior Salary

---

## CAREER-003 Skill Gap Analysis

Inputs

* Resume
* Roadmap
* Target Role

Outputs

* Missing Skills
* Readiness %
* Recommendations

---

## CAREER-004 Industry Mapping

Show:

* Industries Hiring
* Demand Score
* Growth Rate

---

# Phase 10: Resume Intelligence

## RESUME-001 Resume Upload

Supported

* PDF
* DOCX

---

## RESUME-002 ATS Analysis

Outputs

* ATS Score
* Missing Keywords
* Improvements

---

## RESUME-003 Resume Optimization

Generate:

* Summary
* Skills Section
* Projects Section

---

# Phase 11: LinkedIn Intelligence

## LINKEDIN-001 Profile Analysis

Analyze

* Headline
* About
* Experience

---

## LINKEDIN-002 Suggestions

Generate:

* Better Headline
* Better Summary
* Better Keywords

---

# Phase 12: AI Mentor

## MENTOR-001 Chat

Questions

Examples

How do I learn Spring Boot?

Explain Multithreading.

---

## MENTOR-002 Context Awareness

Mentor knows:

* User roadmap
* Progress
* Weak topics

---

# Phase 13: Notification System

## NOTIFY-001 Reminders

Types

* Study Reminder
* Revision Reminder
* Milestone Reminder

---

## NOTIFY-002 Channels

* In App
* Email
* Push

---

# Phase 14: Export System

## EXPORT-001 PDF

Export:

* Roadmap
* Progress
* Tasks

---

## EXPORT-002 Notion

Generate:

Complete Notion Workspace

---

## EXPORT-003 Calendar

Export:

* Google Calendar
* ICS

---

# Phase 15: Analytics

## ANALYTICS-001 User Analytics

Track

* Daily Active Users
* Weekly Active Users
* Monthly Active Users

---

## ANALYTICS-002 Learning Analytics

Track

* Learning Velocity
* Retention Score
* Consistency Score
* Job Readiness Score

---

## ANALYTICS-003 Business Analytics

Track

* Free Users
* Premium Users
* Conversion Rate
* Churn

---

# Phase 16: Premium System

## PREMIUM-001 Free Plan

Includes

* Limited Roadmaps
* Basic Resources
* Basic Tracking

---

## PREMIUM-002 Pro Plan

Includes

* Unlimited Roadmaps
* AI Mentor
* Resume Analyzer
* Job Matching
* Advanced Revision
* Exports

---

## PREMIUM-003 Enterprise Plan

Includes

* College Dashboard
* Placement Analytics
* Team Accounts

---

# Phase 17: Admin Dashboard

## ADMIN-001 User Management

Manage:

* Users
* Plans
* Roles

---

## ADMIN-002 Resource Management

Manage:

* Resource Quality
* Broken Links

---

## ADMIN-003 Taxonomy Management

Manage:

* Skills
* Categories
* Concepts

---

## ADMIN-004 Analytics Dashboard

Monitor

* Revenue
* Users
* Growth

---

# Non Functional Requirements

## Security

* JWT Authentication
* Password Hashing
* Rate Limiting
* Input Validation
* CSRF Protection

---

## Performance

* Lazy Loading
* Pagination
* Caching
* Query Optimization

---

## Scalability

* Modular Architecture
* Queue Workers
* Background Jobs

---

## Accessibility

* Keyboard Navigation
* Screen Reader Support
* Color Contrast Compliance

---

# MVP Release Scope

Build First:

1. Authentication
2. Onboarding
3. Skill Taxonomy
4. Roadmap Engine
5. Mind Map
6. Tasks
7. Revision Engine
8. Resource Engine
9. Job Recommendations
10. Premium Gating

Everything else is Phase 2+.

# Product Success Metric

The product succeeds when a user can answer:

* What should I learn?
* What should I revise?
* What should I do today?
* How close am I to my goal?
* What job can I get?
* What salary can I expect?
* What skills am I missing?
* What should I do next?




