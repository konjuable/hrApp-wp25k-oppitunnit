# hrApp

# 0. Projekti aloitetaan tyhjästä react-projektista

Ohjeet projektin tekoon löytyvät URL-osoitteesta: https://space.itslearning.com/ContentArea/ContentArea.aspx?LocationID=10098&LocationType=1

# 1. hrApp - Step 1

Kuvaus

1. Create new React app named hrApp.
- Initialize Git, connect your app to GitHub with a clean initial commit.
- For production create branch "main"
- Push clean (emplty) react-project to branch "main"
- For Step 1 features create a new branch "step1".

2. Add the following React components:
- Header: displays app name.
- Footer: includes your copyright with "WP25K".
- Person: accepts and displays props for name, title, salary, phone, email, and animal.

3. Style all components, appealing even to your teacher. This is your base app for next weeks.

4. Commit your changes, push the branch "step1" to GitHub, create a pull request, review, and merge to branch "main".

# hrApp - Step2

1. For Step 2 features create a new branch "step2"

2. Create an array of employee objects, 10 persons minimum
  – Each object should include:
    id, name, title, salary, phone, email, animal, startDate, location, department, skills
{
  id: 1,
  name: "Aino Virtanen",
  title: "HR Manager",
  salary: 4200,
  phone: "040-1234567",
  email: "aino.virtanen@example.com",
  animal: "Owl",
  startDate: "2018-04-01",
  location: "Helsinki",
  department: "Human Resources",
  skills: ["Recruiting", "Communication", "Employee Relations"]
}

 

3. Rename your existing Person component to PersonCard
  – Update the file name and all imports
  – This component shows the data for one employee

4. Create a new PersonList component
  – Use .map() to go through the employee array
  – Show one PersonCard for each employee
  – Keep your App.jsx clean by moving the mapping logic here

5. In the PersonCard component, calculate how many years the person has worked
  – Use the startDate to figure out the number of years
  – You can use JavaScript Date objects for this

6. Add conditional reminders:
  – If the person has worked exactly 5, 10, 15 (etc.) years:
   → Show 🎉 and message: "Schedule recognition meeting."
  – If the person has worked less than 0.5 years (6 months):
   → Show 🔔 and message: "Schedule probation review."

7. Show the person’s favorite animal as an emoji
  – Example: "Owl" becomes 🦉
  – You can include the emoji in the data or map animal names to emojis using a function

8. Make sure your data includes different cases
  – Add employees with 5, 10, or 15 years of service
  – Also add some with less than 6 months of service

9. Commit your changes and push to GitHub
  – Create a new pull request, review your code, and merge into the main branch

# repo hrApp-wp25k-oppitunnit
