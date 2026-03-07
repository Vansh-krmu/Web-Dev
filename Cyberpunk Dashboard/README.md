=================================================================================
**NOT COMPLETE. DO NOT RUN YET.**

=================================================================================
# NETRUNNER_OS

A cyberpunk-inspired browser-based **operating system simulator** built with vanilla web technologies.

NETRUNNER_OS recreates the aesthetic and interaction style of a futuristic hacking interface inspired by cyberpunk media. The project simulates a fictional terminal-driven operating environment used by “netrunners” to manage missions, monitor system resources, and interact with the digital infrastructure of Night City.

The goal of the project is to explore **UI simulation, immersive design, and real-time interface behavior using only front-end technologies.**

---

## Concept

In cyberpunk fiction, a *Netrunner* is a hacker who directly interfaces with digital systems.  
This project imagines what a **personal hacking OS** might look like if it existed in a stylized cyberpunk world.

Instead of building a traditional webpage, the interface behaves like a **mini operating system**, complete with:

- login authentication
- boot sequence
- terminal interaction
- system monitoring panels
- mission management
- cybernetic implant status
- live city feed

The experience is meant to feel like **jacking into a futuristic machine** rather than opening a website.

---

## Features

### Boot & Login Simulation
- Secure login screen
- Animated boot sequence
- Transition into the OS environment

### Terminal Interface
- Command-based interaction panel
- Simulates hacker-style system control
- Dynamic output display

### Mission System
- Add and track missions
- Interactive task list UI
- Designed to simulate contract tracking for a netrunner

### System Monitor
Visual indicators representing:
- CPU activity
- Network load
- Memory usage

Includes **Hack Mode** functionality to simulate system behavior changes.

### Street Cred System
A gamified reputation meter representing the user’s status in Night City.

### Night City Feed
Scrolling feed displaying simulated network updates and events.

### Cybernetic Implants Panel
Displays active augmentations such as:
- Kiroshi Optics
- Reflex Boosters
- Subdermal Armor

Interactive elements allow the interface to react to selected implants.

### Immersive Audio Feedback
- Keypress sounds
- glitch effects
- enhanced interaction feedback

---

## Interface Design

The visual design intentionally follows cyberpunk UI principles:

- neon color palette (cyan / magenta / yellow)
- terminal typography
- glitch aesthetics
- glowing panels
- dense information dashboards

The layout is organized into **modular panels**, similar to a control deck used by hackers in cyberpunk fiction.

---

## Tech Stack

This project is built entirely with **core web technologies**:

- **HTML5** – structure and UI layout  
- **CSS3** – styling, animations, visual effects  
- **JavaScript (Vanilla)** – application logic and interactivity  

No frameworks or libraries were used in order to demonstrate how complex interactive interfaces can be created with **pure frontend fundamentals**.

---

## Project Structure

```
project/
│
├── index.html        # Main application layout
├── style.css         # Core styling and panel layout
├── glitch.css        # Visual glitch effects
├── app.js            # Application logic and UI behavior
│
└── sounds/
    ├── key.mp3
    └── glitch.mp3
```

---

## How to Run

1. Clone the repository

```
git clone https://github.com/yourusername/netrunner-os.git
```

2. Open the project folder

3. Launch `index.html` in your browser

No build tools or dependencies are required.

---

## Design Goals

This project focuses on:

- creating **immersive interfaces**
- simulating **fictional software environments**
- experimenting with **UI storytelling**
- demonstrating advanced front-end layout and animation techniques

The objective was not simply to build a webpage, but to create a **narrative-driven interface experience.**

---

## Possible Future Improvements

- Expanded terminal command system
- Saveable missions
- simulated network hacking mini-games
- dynamic system monitoring
- persistent user profiles
- procedural Night City feed generation
- WebGL visual effects

---

## Inspiration

The interface is inspired by the game CYBERPUNK2077.

---

## Author

Created as a web development project exploring immersive UI simulation and interactive interface design.
