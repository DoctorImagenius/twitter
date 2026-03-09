# Twitter X App (React)

A simple **Twitter/X inspired social posts application** built with **React Functional Components**.
This project allows users to **sign up, log in, create posts, and interact with comments**.
The UI is inspired by a simplified version of **Twitter/X timeline layout**.

---

## Features

### 1. Authentication

* Users can **Sign Up** and **Sign In**.
* Each user has:

  * Name
  * Email
  * Password
* User authentication state is stored using **LocalStorage** for persistence.

### 2. Posts

* Users can:

  * Create a post
  * Edit their own post
  * Delete their own post
* Each post contains:

  * Title
  * Content
* All posts are displayed in the **Posts page (Home timeline)**.

Posts are initialized from the API:

```
https://jsonplaceholder.typicode.com/posts
```

---

### 3. Comments

* Each post can have multiple comments.
* Only **authenticated users** can add comments.
* Users can:

  * Edit their own comments
  * Delete their own comments

Comments are initialized using:

```
https://jsonplaceholder.typicode.com/comments
```

---

## Data Persistence

The project uses **LocalStorage** to store:

* Current logged-in user
* Created posts
* Comments
* Users

This ensures that the user data remains available after refreshing the page.

---

## Tech Stack

* **React (Functional Components)**
* **React Context API** for state management
* **React Router** for navigation
* **CSS Modules** for styling
* **React Icons**
* **JSONPlaceholder API** for initial data

---

## UI Inspiration

The UI layout is inspired by **Twitter/X**, including:

* Sidebar navigation (desktop)
* Bottom navigation bar (mobile)

---

## How to Run the Project

1. Clone the repository

```
git clone <repository-url>
```

2. Navigate to the project folder

```
cd project-folder
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## Notes

* The project stores data in **LocalStorage**, so it works without a backend.
* API endpoints are only used to **initialize posts and comments data**.
* All other operations (create, edit, delete) are handled **in memory / LocalStorage**.

---

## Author

Developed as a **React practice project** focusing on:

* Component architecture
* State management
* CRUD operations
* Responsive UI design
