import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './routes/app.jsx'
import Error from "./routes/error.jsx";

import Notes from "./routes/notes/index.jsx";
import NotesEdit from "./routes/notes/edit.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/notes",
                element: <Notes />
            },
            {
                path: "/note/:noteId",
                element: <NotesEdit />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
