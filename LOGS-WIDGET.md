# Logs Widget Integration Guide

This document explains how to integrate the `LogsWidget` module in a React + TypeScript app.

## Purpose
Provide a concise, reusable log viewer that can be embedded in the host app, showing recent activity with basic filtering and a consistent UI.

## Main Entry File

`src/logs-widget/LogsWidget.tsx`

## Recommended Use (Minimal Integration)

```tsx
import {LogsWidget} from "./logs-widget/LogsWidget";

function AppHeader() {
  return <LogsWidget />;
}
```

## Where To Inject
Place the widget entry point in the app header or the sidebar so it is always discoverable. Use it as a persistent access point rather than a standalone page.

Common placements:
1. Header: add a "Logs" navigation entry or dropdown that mounts the widget in the main content area.
2. Sidebar: add a primary nav item that routes to or reveals the widget view.

