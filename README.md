# PathFinder

An AI-powered Adaptive Learning & Career outcome roadmap engine.

## File Structure

Generated boilerplate following the structured design of App, Pages, Features, Components, Services, Stores, Hooks, and Utils layers.

# SkillPilot AI

AI-powered roadmap, revision, and career intelligence platform that helps users master a skill with a personalized learning path, tracked progress, resource recommendations, and job-market insights.

---

## 1. Product Summary

SkillPilot AI is a SaaS web application that generates personalized roadmaps for any skill and adapts them to the user's:

* current knowledge level
* revision needs
* target role
* salary target
* available study time
* completion deadline
* learning style

It is not just a course list. It is a complete system that combines:

* onboarding and authentication
* AI-generated skill hierarchy
* roadmap planning with timeline
* revision mode for known concepts
* mind map visualization
* task list / todo tracking
* resource discovery and ranking
* job recommendations
* salary insights
* premium plan features
* analytics and retention loops

The platform is designed as a business-ready SaaS with free and premium tiers.

---

## 2. Core User Flow

### Step 1: Authentication

The user lands on the login / register page and authenticates using the supported auth flow.

### Step 2: Onboarding Questions

After login, the user answers a short onboarding wizard, ideally no more than 5 questions:

1. What skill do you want to master?
2. What is your target outcome? (job, salary, entrepreneurship, freelancing, promotion, mastery)
3. What is your current level? (beginner, some concepts known, advanced, revision only)
4. What concepts do you already know? (revision-aware mode)
5. How much time can you spend per day and what is your target timeline?

### Step 3: AI Roadmap Generation

The AI engine creates a roadmap based on the user profile.

### Step 4: Mind Map + Tasks

The roadmap is shown as a hierarchical mind map and a daily task list / sidebar.

### Step 5: Resources + Jobs

Each topic comes with:

* YouTube resources
* paid course links
* official docs
* blogs / GitHub repos
* job roles
* salary ranges
* required skillset

### Step 6: Revision Loop

The user can mark concepts as known, weak, strong, or skipped. The system recalculates the revision schedule.

### Step 7: Premium Upsell

Advanced features such as unlimited roadmaps, AI mentor, resume analysis, job matching, and export tools are gated behind premium.

---

## 3. Major Features

### Authentication

* email/password login
* registration
* forgot password
* email verification
* protected routes
* session persistence

### Onboarding

* skill selection
* goal selection
* timeline setup
* study hours per day
* current knowledge selection
* revision mode selection

### Roadmap Engine

* generates ordered learning phases
* creates topic hierarchy
* supports beginner to advanced paths
* aligns roadmap to timeline
* adds project milestones
* adds revision checkpoints

### Revision Engine

* marks known topics
* tracks weak topics
* spaced repetition scheduling
* interview revision mode
* flashcard support
* confidence scoring

### Mind Map View

* visual graph of skill tree
* expandable nodes
* node-level resources
* node-level tasks
* node progress status

### Resource Engine

* YouTube search and ranking
* Udemy course suggestions
* Coursera suggestions
* official documentation links
* blogs, books, GitHub repositories
* beginner / intermediate / advanced resource mapping

### Job Intelligence Engine

* recommended job roles
* industry matching
* salary bands
* job skill requirements
* missing-skill analysis
* readiness scoring

### Progress and Tracking

* daily todo sidebar
* milestones
* streak tracking
* completion percentage
* task checkoff
* revision reminders

### Premium / Monetization

* subscription plans
* feature limits
* plan upgrades
* export features
* AI mentor access
* advanced analytics

### Analytics

* onboarding completion
* roadmap creation rate
* task completion rate
* user retention
* premium conversion tracking

---

## 4. Recommended Tech Stack

### Frontend

* React
* Vite
* JavaScript or TypeScript
* Tailwind CSS
* shadcn/ui or custom component library
* React Router
* React Flow or a similar graph library for mind maps
* Zustand / Redux Toolkit for state management
* React Query / TanStack Query for server state

### Backend

* Node.js
* Express / NestJS / Fastify
* PostgreSQL
* Redis for caching and queues
* OpenAI API or another LLM provider
* Vector search (pgvector / Pinecone / similar) for skill and resource retrieval

### Services

* authentication provider or custom auth
* file storage for resume uploads
* email service
* payment gateway
* analytics service
* notification service

---

## 5. Folder Structure Explained

Below is the recommended React + Vite structure and what each part does.

```text
skillpilot-ai/
├── public/
├── src/
│   ├── app/
│   ├── pages/
│   ├── features/
│   ├── components/
│   ├── services/
│   ├── hooks/
│   ├── constants/
│   ├── utils/
│   ├── assets/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── vite.config.js
├── package.json
└── README.md
```

### `public/`

Static assets that are served directly.

Suggested subfolders:

* `logos/` → brand logos and marks
* `illustrations/` → hero illustrations and empty states
* `icons/` → custom icons
* `animations/` → Lottie or other animation assets
* `favicon.ico` → browser tab icon

### `src/app/`

Application-wide setup.

#### `src/app/router/`

All routing definitions.

* `AppRouter.jsx` → central route config
* `ProtectedRoute.jsx` → blocks unauthenticated access
* `PublicRoute.jsx` → redirects logged-in users away from auth pages

#### `src/app/providers/`

Global providers.

* `AuthProvider.jsx` → session/auth context
* `ThemeProvider.jsx` → dark/light mode handling
* `QueryProvider.jsx` → TanStack Query configuration
* `NotificationProvider.jsx` → toast / alerts / push notification context

#### `src/app/store/`

Global app state.

* `authStore.js` → user session and auth data
* `roadmapStore.js` → roadmap state, phases, milestones
* `revisionStore.js` → revision states and spaced repetition
* `jobStore.js` → job recommendations and salary insights
* `userStore.js` → profile and onboarding profile
* `uiStore.js` → sidebar, modal, theme, layout preferences

### `src/pages/`

Route-level screens.

#### `src/pages/auth/`

Authentication screens.

* `Login.jsx` → login form
* `Register.jsx` → signup form
* `ForgotPassword.jsx` → password recovery
* `VerifyEmail.jsx` → email confirmation screen

#### `src/pages/onboarding/`

Wizard screens shown after login.

* `SkillSelection.jsx` → choose the skill to master
* `GoalSelection.jsx` → choose job / salary / entrepreneurship / mastery goal
* `CurrentKnowledge.jsx` → select known topics / current level
* `RevisionSelection.jsx` → mark concepts as known or weak
* `TimelineSetup.jsx` → hours per day, days per week, target date
* `ReviewPlan.jsx` → confirm and generate roadmap

#### `src/pages/dashboard/`

User home after roadmap generation.

* `DashboardHome.jsx` → summary page
* `DailyTasks.jsx` → todo list and task completion
* `ProgressTracker.jsx` → roadmap completion statistics
* `Analytics.jsx` → learning analytics, streaks, retention
* `ActivityFeed.jsx` → recent changes and notifications

#### `src/pages/roadmap/`

Roadmap views.

* `RoadmapBuilder.jsx` → roadmap generation and editing interface
* `RoadmapTimeline.jsx` → timeline and schedule view
* `RoadmapMilestones.jsx` → milestone checkpoints
* `RoadmapProjects.jsx` → project suggestions and progress

#### `src/pages/mindmap/`

Mind map views.

* `MindMapView.jsx` → interactive roadmap graph
* `NodeDetails.jsx` → selected node details
* `ConceptExplorer.jsx` → browse concepts and sub-concepts

#### `src/pages/revision/`

Revision system screens.

* `RevisionDashboard.jsx` → revision summary
* `WeakTopics.jsx` → topics needing attention
* `SpacedRepetition.jsx` → repetition schedule
* `Flashcards.jsx` → flashcard-based revision
* `InterviewRevision.jsx` → interview-focused revision mode

#### `src/pages/resources/`

Resource library screens.

* `ResourceLibrary.jsx` → all learning resources
* `YoutubeResources.jsx` → curated YouTube links
* `CourseResources.jsx` → Udemy / Coursera / paid courses
* `BooksResources.jsx` → books and PDFs
* `OfficialDocs.jsx` → official documentation links

#### `src/pages/jobs/`

Career intelligence screens.

* `JobDashboard.jsx` → job overview
* `JobRecommendations.jsx` → recommended roles
* `SkillGapAnalysis.jsx` → missing skills analysis
* `SalaryInsights.jsx` → salary range view
* `MarketDemand.jsx` → demand by role / industry

#### `src/pages/profile/`

User profile and personal info.

* `Profile.jsx` → personal profile overview
* `ResumeUpload.jsx` → resume upload / parsing
* `Certifications.jsx` → certs, badges, achievements
* `Goals.jsx` → target role and target salary settings

#### `src/pages/premium/`

Monetization pages.

* `Upgrade.jsx` → upgrade CTA
* `Billing.jsx` → billing details
* `Subscription.jsx` → subscription plan management

#### `src/pages/admin/`

Internal tools for business operations.

* `UserManagement.jsx` → manage users and plans
* `RoadmapTemplates.jsx` → manage roadmap templates
* `ResourceManagement.jsx` → curate or remove resources
* `AnalyticsDashboard.jsx` → platform analytics
* `SubscriptionManagement.jsx` → plans, trials, upgrades

### `src/features/`

Feature-specific logic grouped by product domain.

* `authentication/` → login, register, session logic
* `onboarding/` → onboarding wizard logic
* `roadmap-engine/` → roadmap generation rules and state
* `revision-engine/` → weak/known topic tracking, spaced repetition
* `resource-engine/` → resource discovery, ranking, filtering
* `job-intelligence/` → role matching, salary estimates, skills mapping
* `notification-system/` → reminders, toasts, alerts
* `export-system/` → PDF, Notion, CSV export logic
* `premium-system/` → subscription gating and plan access
* `analytics-engine/` → event capture and metrics

### `src/components/`

Reusable UI components.

#### `src/components/common/`

* `Navbar.jsx` → top navigation
* `Sidebar.jsx` → persistent sidebar
* `Footer.jsx` → footer
* `Loader.jsx` → loading indicator
* `EmptyState.jsx` → empty / no-data UI

#### `src/components/forms/`

Reusable form fields and form layouts.

#### `src/components/buttons/`

Primary, secondary, icon, and action buttons.

#### `src/components/cards/`

Generic card layouts for content blocks.

#### `src/components/modals/`

Dialogs and confirmation windows.

#### `src/components/tables/`

Tables for jobs, resources, and analytics.

#### `src/components/charts/`

Graphs for progress, streaks, and analytics.

#### `src/components/timelines/`

Timeline components for roadmap rendering.

#### `src/components/progress/`

Progress bars, completion rings, step indicators.

#### `src/components/roadmap/`

* `RoadmapCard.jsx` → roadmap summary card
* `MilestoneCard.jsx` → milestone block
* `ConceptCard.jsx` → concept display card
* `TopicProgress.jsx` → topic status progress
* `ProjectCard.jsx` → project suggestion card

#### `src/components/mindmap/`

* `MindMapCanvas.jsx` → graph container
* `MindMapNode.jsx` → single node in the graph
* `ConceptDrawer.jsx` → side drawer for selected concept
* `NodeProgress.jsx` → completion indicator on a node

#### `src/components/revision/`

* `RevisionCard.jsx` → revision topic card
* `Flashcard.jsx` → flashcard UI
* `RevisionCalendar.jsx` → spaced repetition calendar
* `ConfidenceMeter.jsx` → known / weak confidence score

#### `src/components/jobs/`

* `JobCard.jsx` → role summary card
* `SalaryCard.jsx` → salary range card
* `SkillGapCard.jsx` → missing skill card
* `MatchScore.jsx` → role fit score UI

#### `src/components/resources/`

* `ResourceCard.jsx` → generic resource card
* `CourseCard.jsx` → course listing card
* `YoutubeCard.jsx` → YouTube item card
* `GithubCard.jsx` → GitHub repository card
* `BookCard.jsx` → book / reading resource card

### `src/services/`

API and external integrations.

#### `src/services/api/`

Frontend API wrappers.

* `axios.js` → axios instance and interceptors
* `auth.api.js` → auth endpoints
* `roadmap.api.js` → roadmap endpoints
* `jobs.api.js` → job intelligence endpoints
* `resources.api.js` → resource search endpoints
* `revision.api.js` → revision endpoints
* `premium.api.js` → billing / plan endpoints

#### `src/services/ai/`

Client-side AI service wrappers.

* `roadmapAI.js` → roadmap generation requests
* `revisionAI.js` → revision suggestions
* `jobAI.js` → job-role and skill-gap analysis
* `mentorAI.js` → AI mentor chat helper

#### `src/services/export/`

Export utilities.

* `pdfExport.js` → generate PDF export
* `notionExport.js` → format Notion-friendly export
* `calendarExport.js` → calendar reminders and schedule export

### `src/hooks/`

Custom React hooks.

* `useAuth.js` → auth/session state
* `useRoadmap.js` → roadmap loading and updates
* `useRevision.js` → revision state access
* `useResources.js` → resource querying
* `useJobs.js` → job recommendation data
* `usePremium.js` → plan / feature gating

### `src/constants/`

Application-wide constants.

* `routes.js` → route paths
* `plans.js` → free / premium plan definitions
* `skills.js` → skill taxonomy root list
* `featureFlags.js` → toggleable product features

### `src/utils/`

Pure helper functions.

* `roadmapUtils.js` → roadmap sorting, phase parsing
* `revisionUtils.js` → spaced repetition calculations
* `salaryUtils.js` → salary formatting and ranges
* `resourceUtils.js` → resource filtering and ranking
* `dateUtils.js` → dates, deadlines, intervals

### `src/assets/`

Imported images, SVGs, icons, and local media used in the app.

### `src/styles/`

Global styles, theme variables, and utility style files.

### `src/App.jsx`

Root app component. Usually contains the top-level layout and router mounting.

### `src/main.jsx`

Application bootstrap file. Mounts React into the DOM and wraps the app with providers.

---

## 6. What Happens in Each Major Page

### Login / Register

Handles authentication and redirects.

### Onboarding Wizard

Collects the user goal, skill, current level, known concepts, and available time.

### Roadmap Page

Displays the generated learning sequence with phases, milestones, and timelines.

### Mind Map Page

Visual representation of the full roadmap hierarchy.

### Revision Page

Shows:

* known topics
* weak topics
* next revision date
* flashcards
* interview revision path

### Resources Page

Lists ranked resources for each topic with filters.

### Jobs Page

Shows recommended roles, salary estimates, market demand, and missing skills.

### Dashboard

Provides a quick summary of progress and the next actions.

### Premium Page

Explains feature limits and subscription upgrade options.

### Admin Page

Used only by the internal team to manage content, users, and business metrics.

---

## 7. AI / Product Engines

### Roadmap Engine

The roadmap engine converts user input into a structured learning path.

Input:

* skill
* level
* timeline
* hours per day
* target outcome
* revision mode
* known concepts

Output:

* phases
* topics
* subtopics
* project checkpoints
* revision checkpoints
* interview checkpoints

### Revision Engine

Calculates what the user already knows and what needs review.

Features:

* known / weak / strong labels
* spaced repetition
* smart skip logic
* interview revision mode
* priority scoring

### Resource Engine

Searches and ranks resources by:

* topic relevance
* difficulty
* freshness
* popularity
* learning type

### Job Intelligence Engine

Generates:

* job role suggestions
* salary ranges
* industry mapping
* skill requirement lists
* readiness score

### Export Engine

Supports output in:

* PDF
* Notion-ready format
* calendar format
* shareable link format

---

## 8. Database Entities (Recommended)

The frontend assumes the backend provides these core entities:

* `users`
* `user_profiles`
* `skills`
* `skill_nodes`
* `roadmaps`
* `roadmap_nodes`
* `roadmap_progress`
* `revision_states`
* `tasks`
* `task_progress`
* `resources`
* `resource_ratings`
* `job_roles`
* `job_skill_requirements`
* `salary_bands`
* `subscriptions`
* `feature_flags`
* `notifications`
* `analytics_events`
* `exports`

---

## 9. Free vs Premium Business Model

### Free Tier

* limited roadmaps
* basic roadmap timeline
* basic mind map
* limited resources
* limited job insights
* basic progress tracking

### Premium Tier

* unlimited roadmaps
* revision engine
* spaced repetition
* AI mentor chat
* job matching
* salary analysis
* resume analysis
* LinkedIn optimization
* Notion export
* PDF export
* calendar sync
* smart notifications
* adaptive roadmap generation
* interview prep mode
* advanced analytics

### Future Enterprise Tier

* classroom / batch dashboards
* institute-level analytics
* student placement readiness reports
* faculty / admin management tools

---

## 10. Suggested API Areas

These are logical backend API groups the frontend will consume.

* `/auth/*`
* `/onboarding/*`
* `/roadmaps/*`
* `/revision/*`
* `/resources/*`
* `/jobs/*`
* `/analytics/*`
* `/exports/*`
* `/billing/*`
* `/admin/*`

Example responsibilities:

* create account / login
* save onboarding answers
* generate roadmap
* mark topic complete
* save revision state
* fetch resources
* fetch job roles
* fetch salary bands
* upgrade subscription
* export roadmap

---

## 11. Design Principles

This project should be built with these rules:

1. Keep onboarding short.
2. Keep roadmap generation explainable.
3. Never overwhelm the user with too many options.
4. Let the mind map and sidebar stay synchronized.
5. Make revision a first-class feature, not an add-on.
6. Keep resource recommendations ranked and curated.
7. Tie every roadmap to an actual job market outcome.
8. Use premium features to solve high-value pain points.

---

## 12. Important Product Outcomes

The platform should help users answer:

* What should I learn next?
* What do I already know?
* What should I revise?
* What resource should I use?
* What job can I get from this skill?
* What salary range is realistic?
* How far am I from my goal?
* What should I do today?

---

## 13. Roadmap Logic Example

If the user selects **Java** and wants a **backend developer job** in **6 months**, and they already know basics, the system should generate something like:

* Java basics revision
* OOP and collections refresh
* advanced Java and multithreading
* SQL and JDBC
* Spring Core and Spring Boot
* REST APIs
* authentication / security
* project phase
* interview revision
* job applications

Each phase should include:

* estimated hours
* daily tasks
* milestone goals
* resources
* revision points
* project checkpoints

---

## 14. Business Expansion Ideas

These are high-value future features:

* AI mentor assistant
* resume ATS scoring
* LinkedIn profile optimizer
* mock interview mode
* voice-based learning coach
* personalized job alerts
* market trend prediction
* course comparison engine
* skill gap analysis against job descriptions
* multi-skill roadmaps
* team / institute dashboards
* certificate and badge system
* downloadable Notion workspace generation

---

## 15. Environment Variables (Example)

These will depend on your backend and integrations.

```env
VITE_API_URL=
VITE_APP_NAME=
VITE_OPENAI_KEY=
VITE_AUTH_PROVIDER=
VITE_PAYMENT_KEY=
VITE_ANALYTICS_KEY=
VITE_UPLOAD_URL=
```

Never commit secrets into version control.

---

## 16. Development Workflow

1. Build the authentication flow.
2. Build the onboarding wizard.
3. Build the roadmap generation UI.
4. Add mind map rendering.
5. Add tasks / progress tracking.
6. Add resource cards.
7. Add revision state tracking.
8. Add job insights.
9. Add premium gating.
10. Add exports and notifications.
11. Add analytics and admin controls.

---

## 17. Suggested MVP Scope

The first version should include:

* auth
* onboarding
* roadmap generation
* mind map
* todo sidebar
* revision mode
* resource suggestions
* job recommendations
* basic premium gating

After that, add:

* AI mentor
* exports
* analytics
* resume analysis
* advanced job matching

---

## 18. What Not to Do

* do not hardcode a single roadmap for every skill
* do not rely only on AI text generation without taxonomy constraints
* do not overload the UI in the first screen
* do not make revision an afterthought
* do not show random unranked resources
* do not mix admin logic with user logic
* do not keep premium and free features blurred

---

## 19. Final Product Goal

The goal of SkillPilot AI is to become a complete skill-to-career operating system that can:

* take a user from zero knowledge to job readiness
* adapt to their current state
* help them revise what they already know
* recommend the right resources
* show the right jobs and salaries
* keep them on track daily
* monetize advanced value through premium features

---

## 20. Build Philosophy

The frontend is the experience layer.
The backend is the intelligence layer.
The roadmap engine is the core product.
The revision engine is the retention engine.
The job intelligence engine is the monetization engine.
The analytics layer is the growth engine.

That is what makes this a business, not just an app.
