# bugs-and-glitches-task
A basic RESTful API using FastAPI and SQLite that allows users to manage a simple "To-Do List" application.

### Getting Started

Follow these instructions to clone and run the project on your local machine.

#### Prerequisites

- Node.js
- Git

#### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/bugs-and-glitches-task.git
    cd bugs-and-glitches-task
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

3. **Create a .env file**
    ```
    PORT=3000
    ```

4. **Run the application**:
    ```sh
    npm start
    ```


### API Endpoints
- **GET /todos**: Retrieve a list of all to-do items.
    - **Description**: This endpoint fetches all the to-do items from the database.
    - **Response**: 
        - **200 OK**: Returns a JSON array of to-do items.
        - **404 Not Found**: Returns a message indicating no to-do items are found.
    - **Example**:
        ```json
        [
            {
                "id": 1,
                "title": "Buy groceries",
                "description": "Milk, Bread, Cheese",
                "completed": false
            },
            ...
        ]
        ```

- **POST /todos**: Create a new to-do item.
    - **Description**: This endpoint creates a new to-do item with the provided details.
    - **Request Body**:
    - **Example**:
        ```json
        {
            "title": "Buy things",
            "description": "Milk, Bread, Cheese, and Eggs",
            "completed": false
        }
        ```
    - **Response**:
        - **200 OK**: Returns the created to-do item.
    - **Example**:
        ```json
        {
            "id": 2,
            "title": "Read a book",
            "description": "Finish reading 'Clean Code'",
            "completed": false
        }
        ```

- **GET /todos/{todo_id}**: Retrieve a specific to-do item by its ID.
    - **Description**: This endpoint fetches a to-do item by its ID.
    - **Response**:
        - **200 OK**: Returns the to-do item with the specified ID.
        - **404 Not Found**: Returns a message indicating the to-do item does not exist.
    - **Example**:
        ```json
        {
            "id": 1,
            "title": "Buy groceries",
            "description": "Milk, Bread, Cheese",
            "completed": false
        }
        ```

- **PUT /todos/{todo_id}**: Update a specific to-do item by its ID.
    - **Description**: This endpoint updates the details of a to-do item with the specified ID.
    - **Request Body**: Can include any of the fields in the POST request.
    - **Example**:
        ```json
        {
            "title": "Buy things",
            "description": "Milk, Bread, Cheese, and Eggs",
            "completed": false
        }
        ```
    - **Response**:
        - **200 OK**: Returns the updated to-do item.
    - **Example**:
        ```json
        {
            "id": 1,
            "title": "Buy groceries",
            "description": "Milk, Bread, Cheese, and Eggs",
            "completed": true
        }
        ```

- **DELETE /todos/{todo_id}**: Delete a specific to-do item by its ID.
    - **Description**: This endpoint deletes the to-do item with the specified ID.
    - **Response**:
        - **200 OK**: Returns a message indicating the task was deleted successfully.
    - **Example**:
        ```json
        {
            "message": "Task deleted successfully"
        }
        ```

### Database Schema
Create a simple SQLite database schema with a table for to-do items that includes the following fields:
- `id`: integer (primary key, autoincrement)
- `title`: text
- `description`: text
- `completed`: boolean
