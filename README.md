
# Script for REST API for local attendance machine


#### NOTE BRANCH CUSTOM
The branch on this "custom" is made based on the company's needs with its attendance device combined with opening the door using fingerprints. which causes too much data for the user

## Documentation library

[bulentv/js_zklib](https://github.com/bulentv/js_zklib.git)


## API Reference

### Home page

```http
  GET /
```

### Get time machine

```http
  GET /get-time
```
#### Response success
```http
[
  {
    "status": "success",
    "message": "Success get time machine",
    "data": {
      "time_machine": "Thu Jul 25 2024 11:00:11 GMT+0700 (Indochina Time)"
    }
  }
]
```

#### Description
It serves the function of retrieving the current time from the attendance machine. Its usage is crucial within the context of managing employee attendance or time recording processes within an organization.


### Machine time synchronization

```http
  GET /sync-time
```
#### Response success
```http
[
  {
    "status": "success",
    "message": "Success sync time machine",
    "data": {
      "time_machine": "Thu Jul 25 2024 11:06:16 GMT+0700 (Indochina Time)"
    }
  }
]
```

#### Description
The sync-time function serves to change or synchronize the time on the attendance machine. This functionality is essential for ensuring that the clock on the attendance device is accurate and aligned with the correct time, which is crucial for maintaining the integrity and reliability of attendance records within an organization.

### Get Users

```http
  GET /get-users
```
#### Response success
```http
[
  {
    "status": "success",
    "message": "Success get users from machine",
    "data": {
      "users": [
        {
          "uid": 1,
          "role": 14,
          "password": "",
          "name": "Alfandy",
          "cardno": 0,
          "userid": "1"
        },
         {
          "uid": 2,
          "role": 14,
          "password": "",
          "name": "Afriandani",
          "cardno": 0,
          "userid": "2"
        },
 
      ]
    }
  }
]
```

#### Description
Now, get-users is a function used to retrieve user data from the attendance machine. This functionality allows the system to fetch information about users registered in the attendance system, such as their names, IDs, roles, or any other relevant details stored on the device. This data retrieval process is essential for administrative purposes, including managing user permissions, monitoring attendance patterns, or generating reports related to employee activity and attendance.

### Get Attendance

```http
  GET /get-attendance
```
#### Response success
```http
[
  {
    "status": "success",
    "message": "Success get attendance data",
    "data": {
      "attendance": [
        {
          "uid": 0,
          "id": 1,
          "state": 1,
          "timestamp": "2024-07-25T03:51:20.000Z"
        },
        {
          "uid": 0,
          "id": 2,
          "state": 1,
          "timestamp": "2024-07-25T04:08:55.000Z"
        },
      ]
    }
  }
]
```

#### Description
get-attendance is a function used to retrieve attendance log data from the attendance machine. This function enables the system to fetch records of attendance events logged on the device, including timestamps of check-ins and check-outs for each user. This data retrieval is crucial for various administrative tasks, such as calculating work hours, assessing attendance trends, or generating reports for payroll and compliance purposes within the organization.

### Get Attendance

```http
  GET /clear-attendance-log
```
#### Response success
```http
[
  {
    "status": "success",
    "message": "Success get attendance data",
    "data": {
      "attendance": [
        {
          "uid": 0,
          "id": 1,
          "state": 1,
          "timestamp": "2024-07-25T03:51:20.000Z"
        },
        {
          "uid": 0,
          "id": 2,
          "state": 1,
          "timestamp": "2024-07-25T04:08:55.000Z"
        },
      ]
    }
  }
]
```

#### Description
is used to delete or reset the attendance log data stored on the attendance machine. This functionality is important for administrative purposes, allowing authorized personnel to clear existing attendance records from the device. Typically, this action is taken to prepare the device for a new reporting period, to maintain data privacy by removing outdated records, or to troubleshoot issues related to the attendance system. It ensures that the attendance log is current and accurate for ongoing monitoring and reporting within the organization.





# Installation

ZKLib is a JavaScript library for interacting with ZK devices.

## Requirements

- Node.js >= 10.0.0
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfandy12/api-local-zklib.git
   ```
2. Navigate into the cloned directory:
  ```bash
  cd api-local-zklib
   ```
3. Install dependencies using npm:
 ```bash
  npm install
   ```

## Usage

1. Start the application:
   ```bash
   npm start
   ```
2. The application should now be running. Access it through http://localhost:3000 (or another port specified in your configuration).



## Feedback

If you have any feedback, please reach out to us at alfandy@websion.id

