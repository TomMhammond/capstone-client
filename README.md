# Project Title
Pawsome Practice Manager

## TO START APP
1. Ensure that you have the server running. Server can be retrieved from: https://github.com/TomMhammond/capstone-server.
2. In the terminal, run 'npm i' to install node modules.
3. Follow instructions in .example.env to create a .env file.
4. Run 'npm start' to start the app.
5. Use default credentials to login: Username: admin Password: pass

## Overview

Pawsome Practice Manager is an application that provides veterinary clinics with all information needed (Inventory, client data, clinic staff data) in one place.

### Problem

Many clinics use a variety of applications to keep track of similar tasks. This often leads to data being incorrectly entered or data entry not being completed at all. 

### User Profile

- Veterinary Staff
    - Doctors of Veterinary Medicine (DVM)
    - Registered Veterinary Technicians (RVT)
    - Animal Care Attendants/ Veterinary Assistants
    - Client facing staff


### Features

As a user, I want to be able to check the inventory levels within the clinic.
As a user, I want to be able to access client information (Animal species, breed, owner name, owner address, visit history).
As a user, I want to be able to access information about clinic staff (email, phone number, etc).
As a user, I want to be able to update information in any the above categories.
As a user, I want to be able to generate a report that shows what inventory should be ordered (current inventory should be matched against a predetermined amount that should be in clinic at any given time). 


## Implementation

### Tech Stack

-React
-MySQL
-Express
-Client libraries:
    -react
    -react-router-dom
    -axios
-Server libraries
    -knex
    -express

### APIs

Currently, no external APIs will be utilized.

### Sitemap

- Home Page
- Staff List Page
    - Staff Page
- Clients List Page
    - Client Page
- Pets List Page
    - Pet Page
- Inventory List Page
    - Inventory Add Page
    - Inventory Check Page

### Mockups



### Data

Data will be stored as a MySql DB.
The DB will be divided into multiple tables:
- Pets
    - will relate to clients by owner id being a foreign key
    - will relate to medical by medical id as foreign key
- Clients
    - each pet will have a client id as a foreign key
- Medical
    - each pet will have a pet id as a foreign key
- Staff
- Inventory

### Endpoints

**GET /clients**
- gets a list of all clients, owners of pets to be specific.

Response:
[
    {
        "id": "1",
        "first_name": "Courtney",
        "last_name": "Marchant",
        "phone": "416-555-5555",
        "email": "courtney@somemail.com",
        "address": "1 Front Street W",
        "city": "Toronto",
        "province": "Ontario",
        "country": "Canada",
        "postal_code" "M5V 0V0"
    },
    ...
]

**POST /clients/**
- adds a new client, id will be automatically created by DB.
- request body will have fields matching the response.

Response:
    {
        "id": "1",
        "first_name": "Courtney",
        "last_name": "Marchant",
        "phone": "416-555-5555",
        "email": "courtney@somemail.com",
        "address": "1 Front Street W",
        "city": "Toronto",
        "province": "Ontario",
        "country": "Canada",
        "postal_code" "M5V 0V0"
    }

**GET /clients/:id**
- gets a single client by id.

Paramaters:
- client id

Response:
    {
        "id": "1",
        "first_name": "Courtney",
        "last_name": "Marchant",
        "phone": "416-555-5555",
        "email": "courtney@somemail.com",
        "address": "1 Front Street W",
        "city": "Toronto",
        "province": "Ontario",
        "country": "Canada",
        "postal_code" "M5V 0V0"
    }

**PUT /clients:id**
- body shall include keys that are being changed (id will not be able to be changed) with their new value.
- response will return the changed key(s) plus id.

Parameters
- client id
Response:
    {
        'message' : 'success'
    }

**GET /pets**
- gets a list of pets that are registered with the clinic

Response:
[
    {
        "id": "1",
        "owner_id": "1",
        "name": "Lupin",
        "species": "Feline",
        "sex": "male",
        "dob": "2023-05-15"
    }
]

**GET /pets/:id**
- gets a single pet by their id

Paramaters
- pet id

Response:
    {
        "id": "1",
        "client_id": "1",
        "medical_id": "1",
        "name": "Lupin",
        "species": "feline",
        "breed": "domestic short hair",
        "color": "grey and tan",
        "sex": "male",
        "aggressive": "false",
        "weight": "10",
        "deceased" : "false"
    }

**GET /pets/:clientId**
- gets list of pets by clients id

Paramaters
- client id

Response:
[
    {
        "pet_id": "1",
        "medical_id": "1",
        "name": "Lupin",
        "species": "feline"
    },
    ...
]

**GET /pets/:clientId/medical**
- gets a single pets medical records

Parameters
- pet id

Response:
    {
        "id": "1",
        "pet_id": "1",
        "isNuetured": "true",
        "isVaccinated": "true",
        "allergies" : ["wheat"],
        "conditions": ["stomach upset", "reverse sneezing"],

    }

**POST /pets/**
- adds a new pet, id will be automatically created by DB.
- request body will have fields matching the response.

Response:
    {
        "id": "1",
        "client_id": "1",
        "medical_id": "1",
        "name": "Lupin",
        "species": "feline",
        "breed": "domestic short hair",
        "color": "grey and tan",
        "sex": "male",
        "aggressive": "false",
        "weight": "10"
    }

**PUT /pets/:id**
- body shall include keys that are being changed (id will not be able to be changed)
- response will return the changed key(s) plus id and name

Parameters
- pet id
Response:
    {
        "id": "1",
        "name" "Lupin",
        "aggressive": "true"
    }

**GET /staff**
- will get a list of all staff

Response: 
[
    {
        "id": "1",
        "first_name": "Bianca",
        "last_name": "Ferlisi",
        "position": "Lead DVM",
    },
    ...
]

**GET /staff/:id**
- will return a single staff member

Parameters
- staff id

Response:
    {
        "id": "1",
        "first_name": "Bianca",
        "last_name": "Ferlisi",
        "position": "Lead DVM",
        "hire_date": "2023-07-01",
        "certifications": ["Doctor of veterinary medicine", "no fear care", "JHSC"],

    }

**PUT /staff/:id**
- will edit a particular staff member by id

Parameters
- staff id

Response:
    {
        "id": "1",
        "message": "edit successful"
    }

**GET /inventory**
- will give a list of all inventory

Response:
[
    {
        "id": "1",
        "name": "syringe",
        "expected_qty": "5",
        "qty_on_hand": "4"
    },
    ...
]

**GET /inventory/:id**
- will give detailed response on one inventory item

Parameters:
- inventory id

### Auth

Auth will be implemented with JWT
- Will be added after core functionalitly is completed
    - A mock user will be hardcoded at first, swapped out after core functionality completed
    - JWT will be stored in session storage, as sensitive data will be store, so forced logout on tab closure will be important

## Roadmap

- Create server
    - express project
    - routes will be created and basic logic implemented

- Create client
    - react project with routes and boilerplate pages

- Create migrations for DB.

- Create initial sample data:
    - Create 20 sample pets with varying owners (one owner may have two or more pets).
    - Create sample owners/clients.
    - Create sample medical charts for each pet.

- Create seeds with sample data.

- Feature / clients list page
    - will show a list of clients.
    - will be able to search for a particular client by name.
    - clicking on client will bring up the clients information and list of their pets that are being treated by the clinic (client card feature).
    - There will be an option to add a client.

- Feature / client page
    - will neatly display all client information expanding on what is shown within the client list.
    - will give option to edit or delete client from practice.
    - will provide hyperlinks to each pet that the client has in practice.

- Feature / edit client page
    - will allow for clients to be edited. 
    - client id will NOT be editable.

- Feature / pets list page
    - will display a list of all pets that are/ have been treated by the practice.
    - search functionality will be implemented.
    - clicking on a pet will display pet information and provide a hyperlink to the pets medical chart (pet card feature).

- Feature / pet page
    - will neatly display client information expanding upon what is show within the pets list.
    - if the pet is marked as aggressive, the card will be styled to reflect so (red warning border around card).
    - Will be able to click into the pets medical record
    - (Possibly may show an image of pets/ more likely will find a silhouette image/icon of the species/breed to display)

- Feature / edit client page
    - will allow for pets to be edited. 
    - pet id, species, sex, and dob will not be editable.

- Feature / staff list page
    - will display of all staff memembers
    - clicking on a staff member will bring up the staff members page

- Feature / staff page
    - will display information of a single staff member
    - will be able to edit or delete staff member through this page

- Feature / edit client page
    - will allow for staff to be edited. 
    - staff id will NOT be editable.

- Feature / inventory list page
    - will list out all inventory within the clinc
    - there will be a button that when clicked brings user to "inventory check page'
    - there will be a button that allows users to add an inventory item

- Feature / add inventory
    - will allow users to add a single new inventory item. Will require the minimum amount in clinic to be set along with the current amount.

- Feature / inventory check page
    - will allow users to put a new qty of inventory for each item
    - on submit will direct to a page which will show amount of inventory needed to order

- Feature / authentication
    - login page will be created
    - will allow a user to login
    - if not logged in, no information will be available



## Nice-to-haves

-Integrate a schedule buidler using FullCalendar or react-big-calenday(npm packages). Use timeline view which will show which ops are being used for which patient.
- Dashboard that loads upon login. Dashboard will have list of clients booked for the day, will indicate whether inventory needs to be done, show whether any clients need to be contacted for the day.
- Authentication based on user level, ie: admin, reception, vet care staff, doctor