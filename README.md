# Project MERN E-COM Final
This project allows users to interact with a dyna,ic e-commerce website. It features user creation/authentication, product creation, and cart functionality. Unfortunately it is not finished but basic functionality is almost complete.

# Scrapped TypeScript code:
https://github.com/gaelzarco/HackerUSA-UNLV-Final

### API
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /server                              | Home page                                 |
| POST   | /user                                | Create a new user                         |
| POST   | /user/login                          | Log in as user and retrieve credentials   |
| GET    | /catalog                             | Finds all products and returns the        |
| POST   | /catalog                             | Creates a new product for the catalog     |
| GET    | /catalog/:productId                  | Retrieves info about a single product     |
| GET    | /cart/:id                            | Retrieves a user's cart or returns null   |
| POST   | /cart/:id                            | Adds product to cart and handles quantity, 
|                                       total, etc. or creates a cart if one does not exist |


### App (http://localhost:3000)
| Path                  | Component                        | Purpose                                                                         |
| --------------------- | -------------------------------- | ------------------------------------------------------------------------------- |
| /                     | `/components/LandingPage.js`     | Landing page with user login form                                               |
| /user/create          | `/components/CreateUser.js`      | Form for creating a new user                                                    |
| /user/login           | `/components/UserLogin.js`       | Form for logging in a user                                                      |
| /catalog              | `/components/Catalog.js`         | Page to view entire catalog                                                     |
| /catalog/create       | `/components/CreateCatalog.js`   | Form for creating a product                                                     |
| /catalog/product/:id  | `/components/ProductView.js`     | Page to view a specific product                                                 |
| /cart                 | `/components/Cart.js`            | Page to view items in cart                                                      |
