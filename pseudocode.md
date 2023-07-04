QUESTIONS
  -what is the best way to go about collecting user input and dislaying that on page.
  -can you slash through text in bootstrap/JS or only CSS
  -Can i fit all user determined spaces into one file?-> active/completed/all
  -how can local storagre and usestate be manipulted to streamline functions/vars



MoSCoW

  Must haves
    -a text box for user input
    -a dynamic display of user inputs
    -a check box as well as visual representation of user inout being "removed"
    -a page to dislay all tasks
    -a page to display active tasks
    -a age to display completed tasks
    -a "remove all" button for all active items
    -differentiation between soft/hard delete

  Should have
    -local storage
      -persistent state through reloads of the page

  Could have
    - user determined priority in list
    - log in feature to store tasks long term
    - editable feature to update list/correct errors
    - "new" status

  Wont have
    - API call
    - outside app compatability




  AGILE STORIES/KANBAN
     - as a user I want to be able to type in a task for my to do list
     - as a user I want to see my tasks displayed on the page
     - as a user I want to be able to check off completed items
     - as a user I want to see all items, active items and completed items
     - as a user I want to be able to clear all and start fresh
     - as a user I want to be able to leave the page and come back to my list later



BEGIN

    - load page with blank text box
    - let user input list
    - page will render with user input
    - once user input is displayed, display buttons/pages


INIT

    - import react/bootstrap/other relevant libraries if needed
    - display text box
    - update page with user input (persistent)
    - button to clear all
    - button to move to active page
    - button to move to comlpeted page
    - button to move to all page
    - button to clear selected item


FNCTN

    - onInput even listener
    - onClick event listener (for all pages/clears)
    - export function to show all page elements
    - useState to display page as neccessitated by user
    - local storage to hold information across loads


END
    
