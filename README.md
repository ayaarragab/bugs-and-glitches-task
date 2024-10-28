# bugs-and-glitches-task
A basic RESTful API using FastAPI and SQLite that allows users to manage a simple "To-Do List" application.

### API Endpoints
- **GET /todos**: Retrieve a list of all to-do items.
- **POST /todos**: Create a new to-do item. The request body should include:
    - `title`: string
    - `description`: string (optional)
    - `completed`: boolean (default: false)
- **GET /todos/{todo_id}**: Retrieve a specific to-do item by its ID.
- **PUT /todos/{todo_id}**: Update a specific to-do item by its ID. The request body can include any of the fields in the POST request.
- **DELETE /todos/{todo_id}**: Delete a specific to-do item by its ID.

### Database Schema
Create a simple SQLite database schema with a table for to-do items that includes the following fields:
- `id`: integer (primary key, autoincrement)
- `title`: text
- `description`: text
- `completed`: boolean
