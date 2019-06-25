2. fix reducers so i don't have to do accounts.accounts
3. Need validation that amount is a number
4. Not using API_URL in actions, not working for some reason?

- can wrap component with withRouter to get access to this.props.match props, etc
https://medium.com/@jeremylenz/react-router-basics-what-i-wish-theyd-told-me-37b29201d40a


nvm install node -> for any rake start errors


Transaction.all.each do |t|
  t.destroy
end


[x] The code should be written in ES6 as much as possible
[x] Use the create-react-app generator to start your project.
[x] Your app should have one HTML page to render your react-redux application
[x] There should be 2 container components
There should be 5 stateless components
[x] There should be 3 routes
[x] The Application must make use of react-router and proper RESTful routing
[x] Use Redux middleware to respond to and modify state change
[x] Make use of async actions to send data to and receive data from a server
[x] Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
[x] Your client-side application should handle the display of data with minimal data manipulation
[x] Your application should have some minimal styling
