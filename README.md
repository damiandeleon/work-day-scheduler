# work-day-scheduler
The user can use this as an online day planner.  Great for teaching kids how to schedule and manage their day.

## To Launch
Click: [Launch Workday Scheduler](https://damiandeleon.github.io/work-day-scheduler/)

## Tecnologies Used
HTML, CSS, Boostrap, Google Fonts, Awesome Fonts, JavaScript, JQuery, MomentJS API


# Layout
## Current Date
On the top header, the user will see beneath the title of the page to find the current date and day of the week. 
![Screen Shot 2021-01-27 at 9 21 03 AM](https://user-images.githubusercontent.com/73486962/106021376-5b648600-608a-11eb-807f-fbbd0f522942.png)    
  

![UtilIndicator](https://user-images.githubusercontent.com/73486962/106021302-44be2f00-608a-11eb-9b1b-f9a5f2671f39.png)
  


## Time Slots
In the body of the page, the user will find stacked rows, divided into hourly time slots.  


## Time slot indicator
On the left side of each row is the time of the day designated for the row.  

## Event text entry
The middle section will be a text area, where the user will type event details freehand. 

## Save functionality
On the second to the right side of the section, will be the save button, represented by a floppy disk icon. The save button will save whatever is entered in it's respective row.  This information is saved in local storage where it will remain until it is manually deleted.

## Delete functionality - ***BONUS***
On the far right side will be the delete button represented by a trash icon.  The delete button will delete whatever event text that is entered in it's respective row.  This information will be deleted from local storage.


## Time of Day interactivity
The page will dynamically shade between different color backgrounds to indicate to the user the chronological relationship the time slot has to the current time. If the event is in the past, the text area background will be gray.  If the event is within the current time slot, the background will be red.  If the event is in the future, the background will be green.
![ChroloEvents](https://user-images.githubusercontent.com/73486962/106021186-27896080-608a-11eb-96bb-266be7aefe3b.png)


## Credits
Header date and time display was used using moment.js, found at https://momentjs.com/

JQuery, found at jquery.com was used for reference on the structure of methods.