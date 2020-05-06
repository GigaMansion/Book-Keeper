# Book-Keeper

## Rationale

To have a software that records income and expenses with evidence neatly with access control to different people within the same organization.

## Implementation

[Frontend](#Frontend): website.

[Backend](#Backend): Python application running in Docker.

[Database](#Database): SQL or non-SQL? Files like images stored separately in the file system. May use Redis as a cache to boost performance.

[Tool](#Tool): load data from Excel or Google Forms

## Frontend

Use React as the JavaScript framework.

Use Bootstrap to beautify the interface.

## Backend

Use Python.

Nginx, flask, Django...

## Database

May need Redis as the cache to boost performance.

SQL vs non-SQL like MongoDB.

Images and files not stored in database.

## Tool

Need to adapt to the uniformed/non-uniformed format of the existing data.

## Workflow

1. Team members start with their own branches after git clone.

2. Do not push changes to the master branch directly.

2. Initiate pull requests for merging code into the master branch.

3. Team members need to pull the master branch regularly while working to ensure merge compatibility.

4. Include unit tests in every possible subsection in the implementation.

5. Unit tests will run on Travis CI, a platform for continuous integration that is free for open-source project.

6. Use GitHub features such as project management properly.

7. Always write high quality code that make it easy for others to understand.

