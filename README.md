## APInsights - API for Infojr Insights website.
### What does it do ?
APInsights can be used for getting links and its image and description about content within the internet and categorized inside the API.
### How to run it locally ?
1. You will need git, npm and node.js to run it.
2. Clone this repository using git and go to the folder
```git 
git clone https://github.com/LucasDSL/APInsights.git apinsights
cd apinsights
```
3. On this directory, create a ".env" file for the database credentials and fill it like below

```txt
HOST=<host_name>
PORT=<port_number>
USER=<user_name>
PASSWORD=<passowrd>
DATABASE=<databse_name>
```
obs: change everything for its name without the "<>"

4. Install all dependencies using npm:
```txt
npm install
```
5. All done! Run it!
```txt
npm run dev
```
Now even if you change the code, the nodemon will restart the server for you.\
And you can make request following the documentation below!
### Documentation 
Being made
