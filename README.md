![Banner Logo](https://miro.medium.com/v2/resize:fit:1400/1*-Ijet6kVJqGgul6adezDLQ.png)

Welcome to the React Hooks Collection repository! This is a collection of custom React hooks that are designed to simplify and improve your React development experience. These hooks provide reusable and effective solutions to problems and patterns found in React applications.

## Available Hooks

Currently, the following hooks have been implemented and thoroughly (almost) tested:

- [`useClipboard`](/docs/useClipboard.md): Simplifies clipboard operations, allowing you to easily copy and paste text.
- `useDebounce`: A hook that provides a debounced version of a value, which is updated only after a certain delay.
- `useDebug`: A hook that returns true if the current window URL contains the string `#debug` or if we're in development mode.
- `useDocumentReadyState`: A hook that returns the document ready state, which is useful for detecting when the document is fully loaded.
- `useDocumentTitle`: A hook that sets the document title based on a given string.
- `useDrag` - [UNFINISHED]
- `useEffectOnce`: A hook that runs an effect only once, on the initial render.
- `useEventListener`: A hook that adds an event listener to a specified target and removes it when the component unmounts.
- `useFavicon`: A hook that sets the favicon of the document.
- `useFirstMountState`: A hook that returns true if the component is being rendered for the first time.
- `useFoucFix`: A hook that fixes the focus issue in Next JS.
- `useGeolocation`: A hook that alows to get the current geolocation of the user.
- `useHover`: A hook that tracks the hover state of a given ref.
- `useIdle`: A hook that tracks whether the user is idle or active based on mouse and keyboard events.
- `useIntersectionObserver`: A hook that observes the intersection of a target element with an ancestor element or the viewport.
- `useInterval`: A hook that sets up an interval and clears it after the component unmounts.
- `useIOSToolbarState`: A hook that returns the current state of the iOS toolbar (visible or hidden).
- `useIsClient`: A hook that returns true if the current window is a client-side window.
- `useIsomorphicLayoutEffect`: A hook that resolves to useEffect on the server and useLayoutEffect on the client.
- `useIsTouchDevice`: A hook that returns true if the current window is a touch device.
- `useIsVisible`: A hook that returns true if an element is visible within the viewport.
- `useKeySequence`: A hook that listens for a sequence of keyboard events and triggers a callback when the sequence is completed.
- `useList`: A hook that manages a list of items and provides convenience methods for adding, removing, and updating items.
- `useMediaQuery`: A hook that returns true if a given media query matches the current viewport.
  useOnClickOutside: A hook that triggers a callback when a click event occurs outside of a specified ref.
- `useMousePosition`: A hook that returns the current mouse position.
- `useNetworkState`: A hook that returns the current network state (online/offline).
- `useOrientation`: A hook that returns the current orientation of the device (portrait or landscape).
- `usePageLeave`: A hook that triggers a callback when the user attempts to leave the current page.
- `useRect`: A hook that returns the current dimensions of a DOM element.
- `useScript`: A hook that dynamically loads an external script.
- `useSessionStorage`: A hook that provides a convenient way to interact with session storage.
- `useThrottle`: A hook that throttles a value, ensuring that it is only updated at most once per specified duration.
- `useUnmount`: A hook that triggers a callback when the component unmounts.
- `useUpdateEffect`: A hook that runs an effect only when the dependencies change, skipping the initial render.
- `useWindowSize`: A hook that returns the current size of the browser window.

### Usage

- [Available Hooks](#available-hooks)
  - [Usage](#usage)
    - [`useClipboard`](#useclipboard)
    - [`useDebounce`](#usedebounce)
    - [`useDebug`](#usedebug)
    - [`useDocumentReadyState`](#usedocumentreadystate)
    - [`useDocumentTitle`](#usedocumenttitle)
    - [`useEffectOnce`](#useeffectonce)
    - [`useEventListener`](#useeventlistener)
    - [`useFavicon`](#usefavicon)
    - [`useFirstMountState`](#usefirstmountstate)
    - [`useFoucFix`](#usefoucfix)
    - [`useGeolocation`](#usegeolocation)
    - [`useHover`](#usehover)
    - [`useIdle`](#useidle)
    - [`useIntersectionObserver`](#useintersectionobserver)
    - [`useInterval`](#useinterval)
    - [`useIOSToolbarState`](#useiostoolbarstate)
    - [`useIsClient`](#useisclient)
    - [`useIsomorphicLayoutEffect`](#useisomorphiclayouteffect)
    - [`useIsTouchDevice`](#useistouchdevice)
    - [`useIsVisible`](#useisvisible)
    - [`useKeySequence`](#usekeysequence)
    - [`useList`](#uselist)
    - [`useMediaQuery`](#usemediaquery)
    - [`useOnClickOutside`](#useonclickoutside)
    - [`useOrientation`](#useorientation)
    - [`usePageLeave`](#usepageleave)
    - [`useScript`](#usescript)
    - [`useSessionStorage`](#usesessionstorage)
    - [`useThrottle`](#usethrottle)
    - [`useUnmout`](#useunmout)
    - [`useUpdateEffect`](#useupdateeffect)
    - [`useWindowSize`](#usewindowsize)

---

#### `useClipboard`

The `useClipboard` hook simplifies clipboard operations, allowing you to easily copy text to the clipboard and retrieve the currently copied value

```tsx
import { useClipboard } from "./hooks/useClipboard";

function MyComponent() {
  const [copiedText, copy] = useClipboard();

  const handleCopy = () => {
    copy("Hello, world!", () => {
      console.log("Text copied to clipboard!");
    });
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy Text</button>
      <p>Copied Text: {copiedText}</p>
    </div>
  );
}
```

---

#### `useDebounce`

The `useDebounce` hook is used to debounce a value, which means delaying the update of the value until a certain amount of time has passed since the last change. This is useful for scenarios where you want to wait for a user to finish typing or for a certain event to settle before triggering an action

```tsx
import { useDebounce } from "./hooks/useDebounce";

function MyComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Perform search with the debounced search term
    searchItems(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <p>Debounced Search Term: {debouncedSearchTerm}</p>
    </div>
  );
}
```

---

#### `useDebug`

The `useDebug` hook is a utility that determines whether the current environment is in debug mode. It returns true if the current window URL contains the string #debug or if the application is running in development mode.

```tsx
import { useDebug } from "./useDebug";

function MyComponent() {
  const isDebugMode = useDebug();

  return (
    <div>
      <h1>My Component</h1>
      {isDebugMode && (
        <div>
          <p>Debug information:</p>
          <ul>
            <li>Current URL: {window.location.href}</li>
            <li>Environment: {process.env.NODE_ENV}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
```

---

#### `useDocumentReadyState`

The `useDocumentReadyState` hook provides the current `readyState` of the document. It returns the `readyState` value, which can be one of the following:

- `'loading'`: The document is still loading.
- `'interactive'`: The document has finished loading and the document has been parsed, but sub-resources such as images, stylesheets, and frames are still loading.
- `'complete'`: The document and all sub-resources have finished loading. The state indicates that the `load` event is about to fire.

```tsx
import { useDocumentReadyState } from "./hooks/useDocumentReadyState";

function MyComponent() {
  const readyState = useDocumentReadyState();

  return (
    <div>
      <h1>My Component</h1>
      <p>Document Ready State: {readyState}</p>
    </div>
  );
}
```

---

#### `useDocumentTitle`

The `useDocumentTitle` hook is used to update the document title with a provided string. It takes a single parameter, `title`, which represents the new title to be set for the document.

```tsx
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function MyComponent() {
  useDocumentTitle("My App - Dashboard");

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Component content */}
    </div>
  );
}
```

---

#### `useEffectOnce`

The `useEffectOnce` hook is used to run an effect function only once, on the initial render of a component. It takes a single parameter, `effect`, which is the effect function to be executed.

```jsx
import { useEffectOnce } from "./hooks/useEffectOnce";

function MyComponent() {
  useEffectOnce(() => {
    console.log("This effect runs only once on mount");

    return () => {
      console.log("This cleanup runs only once on unmount");
    };
  });

  return (
    <div>
      <h1>My Component</h1>
      {/* Component content */}
    </div>
  );
}
```

---

#### `useEventListener`

The `useEventListener` hook is used to add an event listener to a specified target element or the window object. It provides a convenient way to handle events in functional components.

```tsx
import { useEventListener } from "./hooks/useEventListener";
import { useRef } from "react";

function MyComponent() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEventListener("click", handleClick, buttonRef);

  function handleClick(event: MouseEvent) {
    console.log("Button clicked!", event);
  }

  return (
    <div>
      <button ref={buttonRef}>Click me</button>
    </div>
  );
}
```

---

#### `useFavicon`

The `useFavicon` hook is used to dynamically update the browser's favicon with a provided URL. It allows you to change the favicon image displayed in the browser's address bar and tabs.

Example usage:

```tsx
import { useFavicon } from "./hooks/useFavicon";

function MyComponent() {
  useFavicon("https://example.com/favicon.ico");

  return (
    <div>
      <h1>My Component</h1>
      {/* Component content */}
    </div>
  );
}
```

---

#### `useFirstMountState`

The `useFirstMountState` hook is used to determine whether the component is being rendered for the first time or not. It returns `true` on the initial render and `false` on subsequent renders.

Example usage:

```tsx
import { useFirstMountState } from "./hooks/useFirstMountState";

function MyComponent() {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (isFirstMount) {
      console.log("This is the first render");
    } else {
      console.log("This is a subsequent render");
    }
  }, [isFirstMount]);

  return (
    <div>
      <h1>My Component</h1>
      {/* Component content */}
    </div>
  );
}
```

---

#### `useFoucFix`

The `useFoucFix` hook is a temporary fix for the [Flash of Unstyled Content (FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content#:~:text=A%20flash%20of%20unstyled%20content,before%20all%20information%20is%20retrieved.) issue in Next.js. It addresses the problem where stylesheets are loaded asynchronously, causing a brief period where the page is rendered without styles.

This hook is a temporary solution and should be removed once the FOUC issue is resolved in Next.js.

See [https://github.com/vercel/next.js/issues/17464](https://github.com/vercel/next.js/issues/17464) for more information.

```tsx
import { useFoucFix } from "./hooks/useFoucFix";

function MyApp({ Component, pageProps }) {
  useFoucFix();

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
```

---

#### `useGeolocation`

The `useGeolocation` hook is a utility that allows you to get the current geolocation of the user. It provides a `loading` state that indicates whether the geolocation data is still loading, and a `error` state that indicates whether there was an error fetching the geolocation data.

```tsx
import { useGeolocation } from "./hooks/useGeolocation";

function MyComponent() {
  const {
    loading,
    accuracy,
    altitude,
    altitudeAccuracy,
    heading,
    latitude,
    longitude,
    speed,
    timestamp,
    error,
  } = useGeolocation();

  return (
    <div>
      <p>Loading: {loading}</p>
      <p>Accuracy: {accuracy}</p>
      <p>Altitude: {altitude}</p>
      <p>Altitude Accuracy: {altitudeAccuracy}</p>
      <p>Heading: {heading}</p>
      <p>Latitue {latitute}</p>
      <p>Longtitude {longtitude}</p>
      <p>Speed {speed}</p>
      <p>Timestamp {timestamp}</p>
      <p>Error {error}</p>
    </div>
  );
}
```

---

#### `useHover`

The `useHover` hook provides a convenient way to track the hover state of a given element. It returns a ref object that can be attached to the target element, and a boolean value indicating whether the element is currently being hovered over.

```tsx
import { useHover } from "./hooks/useHover";

function MyComponent() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return <div ref={hoverRef}>{isHovered ? "Hovered" : "Not hovered"}</div>;
}
```

---

#### `useIdle`

The useIdle hook is a utility that detects user inactivity and sets an idle state after a specified amount of time. It monitors various user events such as mouse movements, mouse clicks, keyboard input, window resizing, touch events, and scroll events. If no user activity is detected within the specified time (default is 1 minute), the hook sets the idle state to true. The idle state is reset to false whenever user activity is detected.

```tsx
import { useIdle } from "./hooks/useIdle";

function MyComponent() {
  const isIdle = useIdle(1000 * 60 * 5); // User is considered idle after 5 minutes

  return <div>{isIdle ? "User is idle" : "User is active"}</div>;
}
```

---

#### `useIntersectionObserver`

The `useIntersectionObserver` hook is a utility that uses the Intersection Observer API to track the visibility of a DOM element. It allows you to detect when an element enters or leaves the viewport or a specified root element.

```tsx
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

function MyComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  return (
    <div ref={ref}>
      {entry?.isIntersecting ? "Element is visible" : "Element is not visible"}
    </div>
  );
}
```

---

#### `useInterval`

The `useInterval` hook is a utility that creates an interval and executes a callback function at specified delay. It allows you to easily set up recurring tasks or animations in your React components.

```tsx
import { useInterval } from "./hooks/useInterval";

function MyComponent() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```

---

#### `useIOSToolbarState`

The `useIOSToolbarState` hook is a utility that detects the visibility of the iOS toolbar and provides its state. It is specifically designed to handle the behavior of the toolbar in iOS Safari.

```tsx
import { useIOSToolbarState } from "./hooks/useIOSToolbarState";

function MyComponent() {
  const { isVisible } = useIOSToolbarState();

  return (
    <div>{isVisible ? "iOS toolbar is visible" : "iOS toolbar is hidden"}</div>
  );
}
```

---

#### `useIsClient`

The `useIsClient` hook is a utility that determines if the code is running on the client-side or server-side. It can be useful in scenarios where you need to conditionally execute code or render components based on the execution environment.

```tsx
import { useIsClient } from "./hooks/useIsClient";

function MyComponent() {
  const isClient = useIsClient();

  return (
    <div>
      {isClient ? "Running on the client-side" : "Running on the server-side"}
    </div>
  );
}
```

---

#### `useIsomorphicLayoutEffect`

The `useIsomorphicLayoutEffect` hook is a utility that provides a unified way to use either useEffect or useLayoutEffect based on the environment (client-side or server-side). It is particularly useful when dealing with server-side rendering (SSR) scenarios, where the useLayoutEffect hook cannot be used on the server-side because it requires a browser environment.

```tsx
import { useIsomorphicLayoutEffect } from "./hooks/useIsomorphicLayoutEffect";

function MyComponent() {
  useIsomorphicLayoutEffect(() => {
    console.log("This effect runs on both client-side and server-side");
  }, []);

  return <div>My Component</div>;
}
```

---

#### `useIsTouchDevice`

The useIsTouchDevice hook is a utility that determines if the current device is a touch device or not. It can be useful for adapting your application's user interface or functionality based on the input method available on the user's device.

```tsx
import { useIsTouchDevice } from "./hooks/useIsTouchDevice";

function MyComponent() {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div>
      {isTouchDevice ? "This is a touch device" : "This is not a touch device"}
    </div>
  );
}
```

---

#### `useIsVisible`

The useIsVisible hook is a utility that uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect if an element is visible within the viewport or a specified root element. It provides a convenient way to track the visibility of elements and trigger actions based on their visibility state.

```tsx
import { useIsVisible } from "./hooks/useIsVisible";

function MyComponent() {
  const { setRef, inView } = useIsVisible({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    once: true,
  });

  return (
    <div ref={setRef}>
      {inView ? "Element is visible" : "Element is not visible"}
    </div>
  );
}
```

---

#### `useKeySequence`

The `useKeySequence` hook is a utility that listens for a specific key sequence and executes a callback function when the sequence is detected. It allows you to define custom keyboard shortcuts or triggers in your application.

```tsx
import { useKeySequence } from "./hooks/useKeySequence";

function MyComponent() {
  useKeySequence({
    sequence: "abc",
    callback: () => {
      console.log('Key sequence "abc" detected!');
    },
    eventType: "keydown",
    keystrokeDelay: 500,
  });

  return (
    <div>
      Press the keys 'a', 'b', and 'c' in sequence to trigger the callback.
    </div>
  );
}
```

---

#### `useList`

The `useList` hook is a custom React hook that provides a list and a set of utility functions to manage the list. It allows you to easily manipulate the elements of the list without directly modifying the state.

```tsx
import { useList } from "./hooks/useList";

function MyComponent() {
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
    "apple",
    "banana",
    "orange",
  ]);

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => push("grape")}>Add Grape</button>
      <button onClick={() => removeAt(1)}>Remove at Index 1</button>
      <button onClick={() => insertAt(2, "pineapple")}>
        Insert Pineapple at Index 2
      </button>
      <button onClick={() => updateAt(0, "mango")}>
        Update at Index 0 with Mango
      </button>
      <button onClick={clear}>Clear List</button>
    </div>
  );
}
```

---

#### `useMediaQuery`

The useMediaQuery hook is a utility that checks if the current browser window matches a given media query. It allows you to conditionally render components or apply styles based on the viewport size or other media features.

```tsx
import { useMediaQuery } from "./hooks/useMediaQuery";

function MyComponent() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      {isSmallScreen ? (
        <div>
          <h2>Small Screen</h2>
          <p>This content is optimized for small screens.</p>
        </div>
      ) : (
        <div>
          <h2>Large Screen</h2>
          <p>This content is optimized for large screens.</p>
        </div>
      )}
    </div>
  );
}
```

---

`useMousePosition`

The `useMousePosition` hook is a utility that returns the current mouse position. It provides a `x` and `y` property that represent the mouse's x and y coordinates, respectively.

```tsx
import { useMousePosition } from "./hooks/useMousePosition";

function MyComponent() {
  const { x, y } = useMousePosition();

  return (
    <div>
      <p>Mouse X: {x}</p>
      <p>Mouse Y: {y}</p>
    </div>
  );
}
```

---

`useNetworkState`

The `useNetworkState` hook is a utility that returns the current network state (online/offline). It provides a `online` property that indicates whether the network is currently online, and a `speed` property that represents the current network speed in bytes per second.

```tsx
import { useNetworkState } from "./hooks/useNetworkState.ts";

function MyComponent() {
  const { online, speed } = useNetworkState();

  return (
    <>
      <p>Network is {online ? "online" : "offline"}</p>
      <p>Network speed: {speed} bytes per second</p>
    </>
  );
}
```

---

#### `useOnClickOutside`

The `useOnClickOutside` hook is a utility that triggers a callback when a click event occurs outside of a specified ref.

```tsx
import { useRef } from "react";
import { useOnClickOutside } from "./hooks/useOnClickOutside";

function MyComponent() {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    console.log("Clicked outside the element");
  });

  return (
    <div ref={ref}>
      <h1>Click outside of this element</h1>
    </div>
  );
}
```

---

#### `useOrientation`

The `useOrientation` hook is a utility that provides the current orientation of the device or browser window. It returns an object containing the angle and type of the device orientation.

```tsx
import { useOrientation } from "./hooks/useOrientation";

function MyComponent() {
  const { angle, type } = useOrientation();

  return (
    <div>
      <p>Device Orientation: {angle} degrees</p>
      <p>Device Type: {type}</p>
    </div>
  );
}
```

---

#### `usePageLeave`

The `usePageLeave` hook is a utility that triggers a callback when the user attempts to leave the current page. It provides a way to handle page transitions or perform cleanup tasks when the user navigates away from the page.

```tsx
import { usePageLeave } from "./hooks/usePageLeave";

function MyComponent() {
  usePageLeave(() => {
    console.log("User has left the page");
  });

  return <div>Click the button to leave the page</div>;
}
```

---

`useRect`

The `useRect` hook is a utility that returns the current dimensions of a DOM element. It provides a `width` and `height` property that represent the width and height of the element, respectively.

```tsx
import { useRect } from "./hooks/useRect";

function MyComponent() {
  const { width, height } = useRect(document.getElementById("my-element"));

  return (
    <div>
      <p>Element Width: {width}</p>
      <p>Element Height: {height}</p>
    </div>
  );
}
```

---

#### `useScript`

The `useScript` hook is a utility that dynamically loads an external script from a given URL. It allows you to load and execute scripts in your React components without having to use the `<script>` tag directly.

```tsx
import { useScript } from "./hooks/useScript";

function MyComponent() {
  useScript("https://example.com/script.js");

  return <div>My Component</div>;
}
```

---

#### `useSessionStorage`

The `useSessionStorage` hook is a utility that provides a convenient way to interact with session storage. It allows you to store and retrieve data in the session storage of the browser.

```tsx
import { useSessionStorage } from "./hooks/useSessionStorage";

function MyComponent() {
  const [storedValue, setStoredValue] = useSessionStorage(
    "my-key",
    "initial-value"
  );

  return (
    <div>
      <p>Stored Value: {storedValue}</p>
      <button onClick={() => setStoredValue("new-value")}>Set Value</button>
    </div>
  );
}
```

---

#### `useThrottle`

The `useThrottle` hook is a utility that throttles the update of a value, ensuring that it is only updated at most once per specified duration. It allows you to limit the frequency of updates to a value, which can be useful in scenarios where you want to perform an action or update a state only once per user interaction.

```tsx
import { useThrottle } from "./hooks/useThrottle";

function MyComponent() {
  const [value, setValue] = useState(0);
  const throttledValue = useThrottle(value, 500);

  return (
    <div>
      <p>Throttled Value: {throttledValue}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}
```

---

#### `useUnmout`

The `useUnmout` hook is a utility that allows you to execute a function when a component is unmounted. It provides a way to clean up resources or perform cleanup tasks when a component is removed from the DOM.

```tsx
import { useUnmout } from "./hooks/useUnmout";

function MyComponent() {
  useUnmout(() => {
    console.log("Component has been unmounted");
  });

  return <div>My Component</div>;
}
```

---

#### `useUpdateEffect`

The `useUpdateEffect` hook is a utility that runs an effect function only when the dependencies change, skipping the initial render. It allows you to perform side effects or update state based on the values of the dependencies.

```tsx
import { useUpdateEffect } from "./hooks/useUpdateEffect";

function MyComponent() {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log("Count has been updated");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

#### `useWindowSize`

The `useWindowSize` hook is a utility that returns the current size of the browser window. It provides an object containing the width and height of the window.

```tsx
import { useWindowSize } from "./hooks/useWindowSize";

function MyComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        Window Size: {width}x{height}
      </p>
    </div>
  );
}
```
