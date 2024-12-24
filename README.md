# Weather Data Viewer [✈](https://weather-api-umber-chi.vercel.app/)

- A web application that fetches and displays historical weather data based on user input (latitude, longitude, and date range) from the Open-Meteo Archive API.
- Teck stack used
    - React JS
    - Tailwind CSS
    - Shadcn UI
## Features
- Input Fields: Users can input the latitude, longitude, and start and end dates for fetching historical weather data.
- Table View: Display weather data in a tabular format with pagination.
- Loading State: A loader animation is shown while the data is being fetched.
- Error Handling: If there is an error with the input or API request, an error message is displayed.
- Pagination: Data is paginated to avoid overloading the table with too much data at once.
- Optimized API Calls: API calls are optimized to avoid excessive requests to the free API by validating inputs and ensuring data is only fetched when necessary using useCallback to memoize the fetchWeatherData function and prevent unnecessary re-renders when the component is updated.

## API Usage
- Endpoint
  - URL: https://archive-api.open-meteo.com/v1/archive
- Query Parameters:
  - latitude (required): Latitude of the location.
  - longitude (required): Longitude of the location.
  - start_date (required): Start date for the data.
  - end_date (required): End date for the data.
  - daily (required): The weather parameters to retrieve (e.g., temperature_2m_max,temperature_2m_min,temperature_2m_mean).
 
## Checkout live : [Weather-Todays.com](https://weather-api-umber-chi.vercel.app/)

## Some snap shotes 🎇📸
![image](https://github.com/user-attachments/assets/aadbb2fd-8605-4c79-aa8b-4857337382b4)
![image](https://github.com/user-attachments/assets/ebdce1f3-5aba-43c6-abb4-d9001e5e9fc2)
![image](https://github.com/user-attachments/assets/ca8932ae-6760-4612-ae06-18e8afe4777b)
![image](https://github.com/user-attachments/assets/edb21208-40b6-483e-9088-0b154934527f)
![image](https://github.com/user-attachments/assets/c96bd95b-dd1d-4c81-9667-9088fddfc733)





