
# Features and Functionalities

This documentation will guide you through the various features and functionalities of this web application, starting from the authentication page and walking you through each subsequent page until you reach the user details page. Each feature will be explained in detail, along with explanations for the decisions I made.

## Login-Auth page

Since an authentication page was provided, I decided to include an authentication feature. This was implemented with Firebase, with `Email` and `Password` provider. Since authentication was implemented, I also included protected routes feature - this enables only `authenticated` users to access subsequent pages, if not, they are redirected to the log in page.

## Routing

Almighty React-Router was used to implement routing feature.

## Fetching Data

I fetched data through out the applications with `axios` and `axios interceptors`.

`Axios interceptors` provided a way to intercept and modify HTTP requests and responses before they are handled by the application.

## Authenticated Pages

### Users Page

#### Fetching And Populating Data In The Users Page

I used `Generics` in `TypeScript` to type check the value of the returned data like this:

 ```tsx
 export default  function PaginatedItems<T extends object>() {
     
   const [currentItems, setCurrentItems] = useState<T[]>([]);
   // rest of the code here
   return (
    // rest of return statement here
   )
 }
 ``` 
 
This was implemented like this because the shape of the data coming from the API is unknown, hence `Generics` came in handy. The above code implies that `currentItems` is a an `array` of `objects`.

The returned data was later populated in the UI with an `HTML Table`. This was used as the preferred method because `HTML Tables` allows for proper alignment of the kind of the design provided. Note that, this table is scrollable on mobile.

#### Pagination Feature

The pagination feature at the bottom of the table, was implemented with `react-pagination` library for seamless implementation and designed by your truly. I included slice options of 20, 50, 100 in the dropdown. Depending on the amount of data a user prefers to be displayed on the screen.

### User-Details Page

#### Fetching Data And Populating In The User Details Page

In the user details page, I used `index-signature` to represent the data type of the return value from the API like this:

```tsx
 const [ user, setUser ] = useState<{[key: string]: any}>();
```

This indicates that `user` is an object of properties whose `key` is a type of `string` and `value` is of type of `any`. 

Not particularly sure why the instruction says we should save user details data in `localStorage` or `indexedDB` but I guess it was so if the user details data already exists in the `localStorage`, we shouldn't make any more network requests. If that's the case, then personally, I think this is efficient for performance since we won't be making network requests every time. The feature works programmatically this way:

```tsx
    const fetchUserDetails = (): void => {

      const usersFromLocalStorage = localStorage.getItem('users')
      if(usersFromLocalStorage) {
        const users: {[key: string] : any}[] = JSON.parse(usersFromLocalStorage); //users is an array of objects
        // Loop through the users array and find if the id of a particular user is present
        const user = users.find((u: {[key: string]: any}) => u.id === id); 
        if(user){
          setUser(user)
        }
        //if not present, fetch user details from API and update the localstorage, then setUser to the fetched data
        else {
          getUserById(id!)
          .then(({data}: AxiosResponse<{[key: string]:any}>) => {
            users.push(data)
            localStorage.setItem('users', JSON.stringify(users));
            setUser(data)
          })
          .catch(err => console.log(err))
        }
      }
      //if users doesn't exist yet, fetchData from the API and initialize the users property on the localStorage
      else {
        getUserById(id!)
        .then(({data}: AxiosResponse<{[key: string]:any}>) => {
          const users = [data]
          localStorage.setItem('users', JSON.stringify(users));
          setUser(data)
        }) 
        .catch(err => console.log(err)) 
      }
    }
```

The algorithm First checks if the `users` property exists in the `localStorage`, if `true` it loops through the data and then finds if the user details already exists in the data with `Array.find`. If it does, it updates the user state with `setUser`, if not, only then is a network request made for a new user details and then updates `localStorage`. 

If `users` property doesn't exist on the `localStorage` yet, an API call is made and a `users` property is initialized in the `localStorage`.

After this process is completed, data is then populated to the UI.