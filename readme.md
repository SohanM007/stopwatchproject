<!-- git init   -  initialize
ls -a      - its gonna show all file 
git status - what's currently going on 
git add.   - all the changes(file) we want to stage.
git add ./filename - its gonna add particular file to the stage
git commit -m 'your commit message'  -  whatever now in staging is commited .we are not gonna lose tha chages.

then go to the git create new repositories -
       give the name Repository name
        and click on Create Repository


come to terminal and type or copy from github -

   git remote add origin https://github.com/SohanM007/stopwatchproject.git

Now we can declear main(M) is my main branch -
   git branch -M main


now what evever there is changes we want to push that to the origin -
       git push -u origin main

suppose Any of the file is remmaining 
       git add
       git commit -m 'modified readme'
       git push

  we can see how many commit are made
       git log
    
how to see previous file
       git log
       copy particulat command 
       git checkout command(that you have copied)

how to go back to a previous commit or older commit ?
       git checkout command

if you want to go back to the main file again 
    -just click on main(left corner on downside) and click on main which gonna pop in top

if you want to create a branch?
     git checkout -b feature/test

how to publish that new branch ?
git push --set-upstream origin feature/test

how can we go back to main branch ?
git checkout main -->