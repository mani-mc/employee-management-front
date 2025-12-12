# 💻 Employee Management  (Frontend)
A clean and high-performance **Employee Management** user interface designed to interact with the corresponding backend API. Built for a fast development experience and seamless deployment.

## 🚀 Tech Stack

| Technology | Badge |
| :--- | :--- |
| **React** | ![React Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) |
| **Vite** | ![Vite Badge](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| **Axios** | ![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) |
| **React Icons** | ![React Icons Badge](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white) |
| **JavaScript** | ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **CSS** | ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) |
| **npm** | ![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) |

---

## ✨ Features

* **Full CRUD Functionality:** Interface for viewing, adding, editing, and deleting employee records.
* **Efficient Data Fetching:** Uses **Axios** for streamlined, promise-based HTTP requests to the backend API.
* **Modern UI/UX:** Clean, intuitive design built with React components and enhanced with **React Icons** for visual cues.
* **Fast Development:** Utilizes Vite for lightning-fast module bundling and Hot Module Replacement (HMR).
* **API Integration:** Easily connects to the backend RESTful API (e.g., `employee-management-back`).
* **Environment Configuration:** Supports environment variables for configuring the backend API URL.

---

## 🌐 Live Demo

[![Deploy with Vercel](https://vercel.com/button)](https://employee-management-front-mu.vercel.app)

Experience the application live: **[employee-management-front-mu.vercel.app](https://employee-management-front-mu.vercel.app)**

---

## 🛠️ Installation and Setup

Follow these steps to get the frontend application running locally.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (LTS recommended)
* **Backend API running:** Ensure the [Employee Management Backend](https://github.com/mani-mc/employee-management-back) is running or hosted and accessible.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mani-mc/employee-management-front.git](https://github.com/mani-mc/employee-management-front.git)
    cd employee-management-front
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure API Endpoint:**
    Create a `.env` file in the root directory (or use `.env.production` for production builds) to define the backend API URL.

    ```bash
    # Example .env file content
    VITE_BACKEND_API_URL="http://localhost:5000/api"
    ```

4.  **Run the application in development mode:**
    ```bash
    npm run dev
    ```
    The application will typically open on `http://localhost:5173/` (or similar, as indicated by Vite).

---

## 🚀 Deployment

### Build for Production

To create a production-ready build, run the following command:

```bash
npm run build
