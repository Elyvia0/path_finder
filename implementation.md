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
