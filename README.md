# MVC
> **📁 Folder Structure for Splash**:

```sh
/modules
└── /Splash
    ├── SplashModel.ts
    ├── SplashView.tsx
    └── SplashController.tsx
```

### 1️⃣ SplashModel.ts — (Business Logic / Async Simulation)
### 2️⃣ SplashView.tsx — (Pure UI)
### SplashController.tsx — (Handles effect and navigation)

> **📁 Summary: MVC Separation**:

| File                   | Responsibility                                |
| ---------------------- | --------------------------------------------- |
| `SplashModel.ts`       | Simulates app initialization (business logic) |
| `SplashView.tsx`       | Pure presentation (no logic)                  |
| `SplashController.tsx` | Controls lifecycle + navigation               |