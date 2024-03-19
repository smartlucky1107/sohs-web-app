# SOHS API README

## Introduction

This README provides information on how to use the Sohs API endpoints for managing tests and workers data.

## Workers Endpoints

1. **Create Worker (POST):** `/api/workers/addworker`

   - Use this endpoint to create a new worker.

     **Sample Worker Request:**

   ```json
   {
     "name": "Misari Bin Dollah",
     "jobt": "Technician",
     "empno": "636033",
     "dob": "Mon, 18 Mar 2024 18:00:00 GMT",
     "date": "Mon, 18 Mar 2024 18:00:00 GMT",
     "fin": "SXXXX137H",
     "exp": "",
     "hist": "",
     "dept": "FE",
     "company_address": "",
     "inf": "No",
     "notify": "Yes",
     "diag": "NIDE-NOTIFIED",
     "stat": "STATUTORY",
     "sex": "M",
     "previous_result": ""
   }
   ```

2. **Get Workers (GET):** `/api/workers`

   - Use this endpoint to retrieve all workers.

   **Sample Worker Response:**

   ```json
   {
    "success": true,
    "data": [
      {
        "_id": "65f82985b1fc3879105560b7",
        "name": "Misari Bin Dollah",
        "jobt": "Technician",
        "empno": "636033",
        "dob": "Mon, 18 Mar 2024 18:00:00 GMT",
        "date": "Mon, 18 Mar 2024 18:00:00 GMT",
        "fin": "SXXXX137H",
        "exp": "",
        "hist": "",
        "dept": "FE",
        "company_address": "",
        "inf": "No",
        "notify": "Yes",
        "diag": "NIDE-NOTIFIED",
        "stat": "STATUTORY",
        "sex": "M",
        "previous_result": "Noise Induced Deafness-Early -Notified",
      },
      {...}
    ]
   }

   ```

3. **Get Worker (GET):** `/api/workers?fin={fin}`

   - Use this endpoint to retrieve a specific worker by NRIC/FIN.

   **Sample Worker Response:**

   ```json
   {
     "success": true,
     "data": [
       {
         "_id": "65f82985b1fc3879105560b7",
         "name": "Misari Bin Dollah",
         "jobt": "Technician",
         "empno": "636033",
         "dob": "Mon, 18 Mar 2024 18:00:00 GMT",
         "date": "Mon, 18 Mar 2024 18:00:00 GMT",
         "fin": "SXXXX137H",
         "exp": "",
         "hist": "",
         "dept": "FE",
         "company_address": "",
         "inf": "No",
         "notify": "Yes",
         "diag": "NIDE-NOTIFIED",
         "stat": "STATUTORY",
         "sex": "M",
         "previous_result": "Noise Induced Deafness-Early -Notified"
       }
     ]
   }
   ```

4. **Update Worker (POST):** `/api/workers/editworker`

   - Use this endpoint to update a specific user by ID.

   **Sample Worker Request:**

   ```json
   {
     "id": "{fin}",
     "name": "Misari Bin Dollah",
     "jobt": "Technician",
     "empno": "636033",
     "dob": "Mon, 18 Mar 2024 18:00:00 GMT",
     "date": "Mon, 18 Mar 2024 18:00:00 GMT",
     "fin": "SXXXX137H",
     "exp": "",
     "hist": "",
     "dept": "FE",
     "company_address": "",
     "inf": "No",
     "notify": "Yes",
     "diag": "NIDE-NOTIFIED",
     "stat": "STATUTORY",
     "sex": "M",
     "previous_result": ""
   }
   ```

5. **Delete Worker (POST):** `/api/workers/deleteworker`

   - Use this endpoint to delete a specific worker by ID.

   **Sample Worker Request:**

   ```json
   {
     "_id": "65f82985b1fc3879105560b7"
   }
   ```

6. **Clear Workers (POST):** `/api/workers/clear`

   - Use this endpoint to delete all workers.

   **Sample Worker Response:**

   ```json
   {
     "success": true,
     "message": "Worker data cleared successfully"
   }
   ```

## Tests Endpoints

1. **Create Test (POST):** `/api/tests/add-test`

   - Use this endpoint to create a new test.

     **Sample Test Request:**

   ```json
   {
     "company_address": "",
     "name": "",
     "fin": "",
     "dob": "",
     "sex": "",
     "empno": "",
     "date": "",
     "jobt": "",
     "yrs_exposure": "",
     "dept": "",
     "ihd": "",
     "excessive_noise": "",
     "hearing_protectors": "",
     "air_l0_5": "",
     "air_l1": "",
     "air_l2": "",
     "air_l3": "",
     "air_l4": "",
     "air_l6": "",
     "air_l8": "",
     "bone_l0_5": "",
     "bone_l1": "",
     "bone_l2": "",
     "bone_l3": "",
     "bone_l4": "",
     "bone_l6": "",
     "bone_l8": "",
     "air_r0_5": "",
     "air_r1": "",
     "air_r2": "",
     "air_r3": "",
     "air_r4": "",
     "air_r6": "",
     "air_r8": "",
     "bone_r0_5": "",
     "bone_r1": "",
     "bone_r2": "",
     "bone_r3": "",
     "bone_r4": "",
     "bone_r6": "",
     "bone_r8": "",
     "name_and_signature": "",
     "date_tested": "",
     "dwd_right": "",
     "dwd_left": "",
     "diagnosis": "",
     "action_plans": "",
     "action_plans_text": "",
     "certification": "",
     "statutory": "",
     "notify": "",
     "IHDinf": "",
     "IHDiag": "",
     "occ_hist": "",
     "ear_discharge": "",
     "ear_operation": "",
     "ringing_ears": "",
     "head_or_ear": "",
     "ear_problem": "",
     "loud_noise_exposure": "",
     "medication": "",
     "military_service": "",
     "medical_problem": "",
     "med_hist": "",
     "other_info": "",
     "counsel": "",
     "protect": "",
     "prototype": "",
     "profreq": "",
     "demo": "",
     "cleanfreq": "",
     "rearex": "",
     "learex": "",
     "tester": "",
     "review1yr": "",
     "review6mo": "",
     "tonotify": "",
     "notified": "",
     "previous_result": ""
   }
   ```

2. **Get Tests (GET):** `/api/tests`

   - Use this endpoint to retrieve all tests.

   **Sample Worker Response:**

   ```json
   {
    "success": true,
    "data": [
      {
        "_id": "65f7f2df56c1949249555241",
        "company_address": "",
        "name": "Yun Wei Hoong",
        "fin": "SXXXX365H",
        "dob": "",
        "sex": "M",
        "empno": "162274",
        "date": "",
        "jobt": "TECHNICIAN",
        "yrs_exposure": "",
        "dept": "",
        "ihd": "",
        "excessive_noise": "",
        "hearing_protectors": "",
        "air_l0_5": "",
        "air_l1": "",
        "air_l2": "",
        "air_l3": "",
        "air_l4": "",
        "air_l6": "",
        "air_l8": "",
        "bone_l0_5": "",
        "bone_l1": "",
        "bone_l2": "",
        "bone_l3": "",
        "bone_l4": "",
        "bone_l6": "",
        "bone_l8": "",
        "air_r0_5": "",
        "air_r1": "",
        "air_r2": "",
        "air_r3": "",
        "air_r4": "",
        "air_r6": "",
        "air_r8": "",
        "bone_r0_5": "",
        "bone_r1": "",
        "bone_r2": "",
        "bone_r3": "",
        "bone_r4": "",
        "bone_r6": "",
        "bone_r8": "",
        "name_and_signature": "",
        "date_tested": "Wed, 04 Apr 1923 12:06:40 GMT",
        "dwd_right": "",
        "dwd_left": "",
        "diagnosis": "Causes Other Than Noise",
        "action_plans": "",
        "action_plans_text": "",
        "certification": "",
        "statutory": "STATUTORY",
        "notify": "",
        "IHDinf": "false",
        "IHDiag": "ENT",
        "occ_hist": "",
        "ear_discharge": "false",
        "ear_operation": "false",
        "ringing_ears": "false",
        "head_or_ear": "false",
        "ear_problem": "false",
        "loud_noise_exposure": "false",
        "medication": "false",
        "military_service": "false",
        "medical_problem": "false",
        "med_hist": "",
        "other_info": "",
        "counsel": "false",
        "protect": "false",
        "profreq": "",
        "demo": "false",
        "cleanfreq": "",
        "rearex": "",
        "learex": "",
        "tester": "",
        "review1yr": "false",
        "review6mo": "false",
        "tonotify": "false",
        "notified": "false",
        "previous_result": "Causes Other Than Noise"
       },
       {...}
    ]
   }

   ```

3. **Get Worker (GET):** `/api/tests/test?fin={fin}`

   - Use this endpoint to retrieve a specific test by NRIC/FIN.

   **Sample Worker Response:**

   ```json
   {
     "_id": "65f7f2df56c1949249555245",
     "company_address": "",
     "name": "Cheong Kim Kiat",
     "fin": "SXXXX016A",
     "dob": "",
     "sex": "M",
     "empno": "608538",
     "date": "1988",
     "jobt": "TECHNICIAN",
     "yrs_exposure": "",
     "dept": "BE",
     "ihd": "",
     "excessive_noise": "",
     "hearing_protectors": "",
     "air_l0_5": "",
     "air_l1": "",
     "air_l2": "",
     "air_l3": "",
     "air_l4": "",
     "air_l6": "",
     "air_l8": "",
     "bone_l0_5": "",
     "bone_l1": "",
     "bone_l2": "",
     "bone_l3": "",
     "bone_l4": "",
     "bone_l6": "",
     "bone_l8": "",
     "air_r0_5": "",
     "air_r1": "",
     "air_r2": "",
     "air_r3": "",
     "air_r4": "",
     "air_r6": "",
     "air_r8": "",
     "bone_r0_5": "",
     "bone_r1": "",
     "bone_r2": "",
     "bone_r3": "",
     "bone_r4": "",
     "bone_r6": "",
     "bone_r8": "",
     "name_and_signature": "",
     "date_tested": "Wed, 04 Apr 1923 12:06:40 GMT",
     "dwd_right": "",
     "dwd_left": "",
     "diagnosis": "Noise Induced Deafness-Early- Notified",
     "action_plans": "",
     "action_plans_text": "",
     "certification": "",
     "statutory": "STATUTORY",
     "notify": "Yes",
     "IHDinf": "false",
     "IHDiag": "NIDE-NOTIFIED",
     "occ_hist": "",
     "ear_discharge": "false",
     "ear_operation": "false",
     "ringing_ears": "false",
     "head_or_ear": "false",
     "ear_problem": "false",
     "loud_noise_exposure": "false",
     "medication": "false",
     "military_service": "false",
     "medical_problem": "false",
     "med_hist": "",
     "other_info": "",
     "counsel": "false",
     "protect": "false",
     "profreq": "",
     "demo": "false",
     "cleanfreq": "",
     "rearex": "",
     "learex": "",
     "tester": "",
     "review1yr": "false",
     "review6mo": "false",
     "tonotify": "false",
     "notified": "false",
     "previous_result": "Noise Induced Deafness-Early- Notified"
   }
   ```

4. **Update Worker (POST):** `/api/tests/edit-test`

   - Use this endpoint to update a specific user by ID.

   **Sample Worker Request:**

   ```json
   {
     "id": "{fin}",
     "company_address": "",
     "name": "",
     "fin": "",
     "dob": "",
     "sex": "",
     "empno": "",
     "date": "",
     "jobt": "",
     "yrs_exposure": "",
     "dept": "",
     "ihd": "",
     "excessive_noise": "",
     "hearing_protectors": "",
     "air_l0_5": "",
     "air_l1": "",
     "air_l2": "",
     "air_l3": "",
     "air_l4": "",
     "air_l6": "",
     "air_l8": "",
     "bone_l0_5": "",
     "bone_l1": "",
     "bone_l2": "",
     "bone_l3": "",
     "bone_l4": "",
     "bone_l6": "",
     "bone_l8": "",
     "air_r0_5": "",
     "air_r1": "",
     "air_r2": "",
     "air_r3": "",
     "air_r4": "",
     "air_r6": "",
     "air_r8": "",
     "bone_r0_5": "",
     "bone_r1": "",
     "bone_r2": "",
     "bone_r3": "",
     "bone_r4": "",
     "bone_r6": "",
     "bone_r8": "",
     "name_and_signature": "",
     "date_tested": "",
     "dwd_right": "",
     "dwd_left": "",
     "diagnosis": "",
     "action_plans": "",
     "action_plans_text": "",
     "certification": "",
     "statutory": "",
     "notify": "",
     "IHDinf": "",
     "IHDiag": "",
     "occ_hist": "",
     "ear_discharge": "",
     "ear_operation": "",
     "ringing_ears": "",
     "head_or_ear": "",
     "ear_problem": "",
     "loud_noise_exposure": "",
     "medication": "",
     "military_service": "",
     "medical_problem": "",
     "med_hist": "",
     "other_info": "",
     "counsel": "",
     "protect": "",
     "prototype": "",
     "profreq": "",
     "demo": "",
     "cleanfreq": "",
     "rearex": "",
     "learex": "",
     "tester": "",
     "review1yr": "",
     "review6mo": "",
     "tonotify": "",
     "notified": "",
     "previous_result": ""
   }
   ```

## Request and Response Formats

- **Request Format:**
  - Ensure to send requests in JSON format.
- **Response Format:**
  - All responses will be in JSON format.

## Error Handling

- The API will return appropriate error codes and messages for different scenarios, such as invalid requests or server errors.

## Getting Started

1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Start the server using `npm run dev`.
4. Use the provided endpoints to perform CRUD operations on workers and tests.
