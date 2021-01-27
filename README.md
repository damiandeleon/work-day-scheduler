# work-day-scheduler
This tool is used to keep a daily track of events schduled for a user.  

## Utility Structure
### Current Date
On the top header, the user will see beneath the title of the page to find the urernt date and day of the week. 

### Time Slots
In the body of the page, the user will find stacked rows, divided into hourly time slots.  

### Time slot indicator
On the left side of each row is the time of the day designated for the row.  

### Event text entry
The middle section will be a text area, where the user will type event details freehand. 

### Save functionality
On the right side of the section, will be the save button, represented by a flooppy disk icon. The save button will save whatever is intered in it's respective row.  This information is saved in local storage where it will remain until it is manually deleted.  

### Time of Day interactivity
The page will dynamically shade between different color backgrounds to indicate to the user the choronigical relationship the timeslot has to the current time. If the event is in the past, the text area background will be gray.  If the event is within the current time slot, the background will be red.  If the event is in the future, the background will be green.


## Credits
Header date and time display was used using moment.js, found at https://momentjs.com/
jquery.com was used for reference on the structure of methods.
