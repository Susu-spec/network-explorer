# Architecture (Internal)

## User Interaction Specification

**Desktop (Mouse):**
- **Cursor movement:** Parallax tilt effect (Canvas tilts subtly toward cursor position)
- **Scroll wheel:** Zoom in/out
- **Click + Drag:** Pan/move the graph around
- **Click on node:** See node details

**Mobile/Tablet (Touch):**
- **Two-finger pinch:** Zoom in/out
- **Double tap + hold:** Enter drag mode, pan the graph around
- **Single tap on node:** See node details

### Parallax Tilt Behaviour
**Desktop:**
- Cursor position relative to canvas center determines the tilt angle
- X-axis movement = Y-axis rotation
- Y-axis movement = X-axis rotation (up/down tilt)

### Performance Considerations
- Always throttle/debounce parallax calculations
- Viewport culling: If we need to rerender, only render nodes within the current view
- Touch event optimisation: Passive event listeners
