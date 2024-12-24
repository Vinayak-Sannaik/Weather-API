export const validateInputs = (inputs) => {
    // Check if all fields are filled
    if (!inputs.latitude || !inputs.longitude || !inputs.startDate || !inputs.endDate) {
      return { valid: false, error: 'All fields are required' };
    }
  
    // Validate latitude (-90 to 90)
    const lat = parseFloat(inputs.latitude);
    if (isNaN(lat) || lat < -90 || lat > 90) {
      return { valid: false, error: 'Invalid latitude (-90 to 90)' };
    }
  
    // Validate longitude (-180 to 180)
    const lon = parseFloat(inputs.longitude);
    if (isNaN(lon) || lon < -180 || lon > 180) {
      return { valid: false, error: 'Invalid longitude (-180 to 180)' };
    }
  
    // Validate date range (startDate should not be after endDate)
    const startDate = new Date(inputs.startDate);
    const endDate = new Date(inputs.endDate);
    if (startDate > endDate) {
      return { valid: false, error: 'Start date should not be later than end date' };
    }
  
    return { valid: true, error: '' };
  };
  