const availableTimesByDate = {
    '2023-10-12': ['10:30', '11:00', '12:00',"17:00","18:00"],
    '2023-10-13': ['10:00', '11:30', '12:00',"19:00","20:00"],
    '2023-10-14': ['14:00', '15:00', '16:30',"21:00"],
    '2023-10-15': ['10:00', '11:30', '12:00',"17:00"],
    '2023-10-16': ['14:30', '15:00', '16:00',"18:00"],
    '2023-10-17': ['10:00', '11:30', '12:00',"17:00","18:00"],
    '2023-10-18': ['14:00', '15:00', '16:30',"19:00","20:00"],
    '2023-10-19': ['10:00', '11:30', '12:00',"17:00","18:00"],
    '2023-10-20': ['14:30', '15:00', '16:00',"21:00"],
    '2023-10-21': ['10:00', '11:30', '12:00',"17:00","18:00"],
    '2023-10-22': ['14:00', '15:00', '16:30',"19:00","20:00"],
    '2023-10-23': ['10:00', '11:30', '12:00',"21:00"],
    '2023-10-24': ['14:30', '15:00', '16:00',"17:00"],
    '2023-10-25': ['10:00', '11:30', '12:00',"19:00","20:00"],
    '2023-10-26': ['14:00', '15:00', '16:30',"21:00"],
    '2023-10-27': ['10:00', '11:30', '12:00',"19:00","20:00"],
    '2023-10-28': ['14:30', '15:00', '16:00',"17:00","18:00"],
    '2023-10-29': ['10:00', '11:30', '12:00',"19:00","20:00"],
    '2023-10-30': ['14:00', '15:00', '16:30',"21:00"],
    '2023-10-31': ['10:00', '11:30', '12:00',"18:00"],
    '2023-11-01': ['14:30', '15:00', '16:00',"17:00","18:00"],
    '2023-11-02': ['11:30', '11:00', '12:00',"17:00","18:00"],
    '2023-11-03': ['11:00', '11:30', '12:00',"19:00","20:00"],
    '2023-11-04': ['14:00', '15:00', '16:30',"21:00"],
    '2023-11-05': ['10:00', '11:30', '12:00',"17:00"],
    '2023-11-06': ['14:30', '15:00', '16:00',"18:00"],
    '2023-11-07': ['10:00', '11:30', '12:00',"17:00","18:00"],
    '2023-11-08': ['14:00', '15:00', '16:30',"19:00","20:00"],
    '2023-11-09': ['10:00', '11:30', '12:00',"17:00","18:00"],
    '2023-11-10': ['14:30', '15:00', '16:00',"21:00"],
    '2023-11-11': ['10:00', '11:30', '12:00',"17:00","18:00"],
    '2023-11-12': ['14:00', '15:00', '16:30',"19:00","20:00"],
    '2023-11-13': ['10:00', '11:30', '12:00',"21:00"],
    '2023-11-14': ['14:30', '15:00', '16:00',"17:00"],
    '2023-11-15': ['10:00', '11:30', '12:00',"19:00","20:00"],
    '2023-11-16': ['14:00', '15:00', '16:30',"21:00"],
    '2023-11-17': ['10:00', '11:30', '12:00',"19:00","20:00"],
    '2023-11-18': ['14:30', '15:00', '16:00',"17:00","18:00"],
    '2023-11-19': ['10:00', '11:30', '12:00',"19:00","20:00"],
    '2023-11-20': ['14:00', '15:00', '16:30',"21:00"],
    '2023-11-11': ['10:00', '11:30', '12:00',"18:00"],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}


/*


https://www.coursera.org/learn/meta-front-end-developer-capstone/discussions/forums/f1M3RrlHEe2qmAqrCd7t4Q/threads/GY8m40dYEe66bBLEH6-jOQ

I've created a JavaScript file that closely mimics the behavior of the API we're supposed to be using. 
This means that for the time being, we can continue working on our frontend without getting stuck due to the unavailability of the API. 
The mimic file performs the same actions and returns similar data as the actual API would, allowing us to test and develop as if nothing's amiss.  

make sure to check the AvailableTimesByDate Array and change its values as you want to test your application

put this file within your react app  and import its function to use it

https://drive.google.com/file/d/1PMLIeT_CGv6oGL7WoXa-ubgcSspRfyBL/view?usp=sharing


*/