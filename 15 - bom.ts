// window object
const viewportWidth: number = window.innerWidth; // Output: 1504 (change by resizing the window)
const viewportHeight: number = window.innerHeight; // Output: 834 (change by resizing the window)

// ********

// screen object
const screenWidth: number = screen.width; // Output: 1504
const screenAvailableWidth: number = screen.availWidth; // Output: 1504

const screenHeight: number = screen.height; // Output: 1003
const screenAvailableHeight: number = screen.availHeight; // Output: 955 (height - 48px for taskbar)

const screenColorDepth: number = screen.colorDepth; // Output: 24
const screenPixelDepth: number = screen.pixelDepth; // Output: 24

const screenOrientationType: string = screen.orientation.type; // Output: landscape-primary

// ********

// Example: https://www.aria-zamani.ir/blog/typescript/location?query=example#section1

const currentPageUrl: string = window.location.href; // Output: https://www.aria-zamani.ir/blog/typescript/location
const currentPageProtocol: string = window.location.protocol; // Output: http: or https:
const currentPageHost: string = window.location.hostname; // Output: www.aria-zamani.ir
const currentPagePathname: string = window.location.pathname; // Output: /blog/typescript/location
const currentPageSearch: string = window.location.search; // Output: ?query=example
const currentPageHash: string = window.location.hash; // Output: #section1
const currentPagePort: string = window.location.port; // Output: 80 or 443 (default ports for HTTP and HTTPS)

window.location.assign("https://www.aria-zamani.ir"); // Redirects to the specified URL

// ********

alert("Hello, World!"); // Displays an alert dialog with the specified message
confirm("Are you sure you want to proceed?"); // Displays a confirmation dialog with OK and Cancel buttons
prompt("Please enter your name:", ""); // Displays a prompt dialog asking for user input

// ********

// set cookie
const cookie = "username=Aria Zamani; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";

// get cookie
const cookies = document.cookie;