# web-app

Project Structure
============================

### Source files

The actual source files of a software project are divided into three code bases. We include the Backend and Frontend git repository as a submodule in this git repository.

> **Main Repo**: [cmpe_senior_project](https://github.com/umangdalsania/cmpe_senior_project)

> **Backend Repo**: [automatedirrigationsystem](https://github.com/umangdalsania/cmpe_senior_project)

> **Frontend Repo**: [web-app](https://github.com/xianahui7/web-app)


### Frontend directory layout
    .
    ├── web-app	                        # Frontend submodule
        ├── Dockerfile                  # Docker file for backend
        └── frontend                    # Main directory
            ├── README.md
            ├── images                  # Background picture, can be del
            │   └── plants.jpg
            ├── lessc
            ├── package-lock.json
            ├── package.json
            ├── public                  # Static objects
            │   ├── index.html
            │   ├── manifest.json
            │   ├── pictures
            │   │   ├── 5V-Single-Channel-Relay-Module.jpg
            │   │   ├── adc_i2c_module.jpg
            │   │   ├── esp8266.jpg
            │   │   ├── light_sensor.jpg
            │   │   ├── moisture_sensor.jpg
            │   │   └── temp_humid_sensor.jpg
            │   └── robots.txt
            └── src                         
                ├── App.js              # Main App run file
                ├── Graphs              # Graph module code
                │   ├── BarChart.js
                │   ├── LineChart.js
                │   └── PieChart.js
                ├── Routing             # Site routing code
                │   └── Route.js
                ├── Styling             # CSS code
                │   ├── App.css
                │   ├── NVD3.css
                │   ├── background.js
                │   ├── index.css
                │   ├── index.html
                │   └── table.css
                ├── Test                # Unit testing
                │   └── setupTests.js
                ├── WebPages            # Main website code
                │   ├── Analytics.js
                │   ├── Home.js
                │   ├── MyPlant.js
                │   └── old             # Old code templates, can be del
                │       ├── Add_Plant.js
                │       ├── Add_Profile.js
                │       ├── Remove_Plant.js
                │       ├── Remove_Prof.js
                │       ├── Update_Plant.js
                │       ├── Update_Prof.js
                │       └── pp.js
                ├── WebpageComponents   # UI components
                │   ├── Footer.js
                │   └── Navigation.js
                ├── component           # Webapp backend handles communication with API code
                │   ├── add_plant.js
                │   ├── add_profile.js
                │   ├── generate_graph.js
                │   ├── get_plant.js
                │   ├── get_profile.js
                │   ├── get_sensor_data.js
                │   ├── get_sensor_history.js
                │   ├── helper_functions    # Gets data from API
                │   │   ├── get_plant_helper.js
                │   │   ├── get_profile_helper.js
                │   │   └── get_sensor_history_helper.js
                │   ├── remove_plant.js
                │   ├── remove_profile.js
                │   ├── table_functions     # Format data into tables
                │   │   ├── ReadOnlyRow_plant.js
                │   │   ├── ReadOnlyRow_profile.js
                │   │   └── ReadOnlyRow_sensor.js
                │   ├── testing_functions   # Component level test
                │   │   ├── add_sensor_data.js
                │   │   └── delete_sensor_data.js
                │   ├── update_plant.js
                │   └── update_profile.js
                ├── index.js
                └── reportWebVitals.js

### Setup

**Software Setup**: The project contains a Docker file that can quickly deploy react frontend applications. However user will requre to setup Flask API therefore it is suggested to use Main Repo's docker-compose.
