# Twitter Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Twitter clone web application built using Next.js, Tailwind CSS, Prisma, and MongoDB. This clone allows users to post tweets, follow other users, like tweets, and perform various other Twitter-like functionalities.

## Features

- User registration and authentication
- User profiles with profile pictures and bio
- Post tweets
- Like and retweet tweets
- Follow and unfollow users
- Timeline displaying tweets from followed users
- Explore page to discover new users and tweets
- Notifications for likes, retweets, and new followers
- Responsive design for mobile and desktop devices

## Tech Stack

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically generated applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [Prisma](https://www.prisma.io/): An open-source database toolkit for Node.js that provides an ORM (Object Relational Mapping) to interact with the database.
- [MongoDB](https://www.mongodb.com/): A NoSQL database used for storing user data, tweets, and other application-related information.

## Demo

https://github.com/ayusshrathore/twitter-clone/assets/61450246/a5a1e045-bcc9-4d6e-b33a-1611ddf7667c


## Prerequisites

To run the Twitter clone locally, you need to have the following installed on your machine:

- Node.js: Version 14 or above
- npm: Version 6 or above
- MongoDB: Installed and running locally or accessible remote MongoDB instance

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ayusshrathore/twitter-clone.git
   cd twitter-clone
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables:

   Create a new file named `.env in the root directory and add the following variables:

   ```
   DATABASE_URL="mongodb://localhost:27017/twitter-clone" # Replace with your MongoDB connection URL
   NEXTAUTH_JWT_SECRET="your-jwt-secret" # Replace with your own JWT secret key
   NEXTAUTH_SECRET="your-nextauth-secret" # Replace with your own NextAuth secret key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Deployment

To deploy the Twitter clone application, you can follow the deployment instructions specific to each technology used:

- Next.js: Refer to the Next.js documentation on deployment options, such as Vercel, Netlify, or custom server setups.
- Tailwind CSS: Deployment is typically handled as part of the Next.js deployment process.
- Prisma and MongoDB: You can deploy the MongoDB database using services like MongoDB Atlas or deploy your own MongoDB instance. For Prisma, you can either deploy the Prisma server yourself or use a managed Prisma service.

Ensure to set the appropriate environment variables for the deployed environment.

## File Structure

The file structure of the Twitter clone application is as follows:

```
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   ├── notifications.tsx
│   └── api/
│       ├── auth/
│       │   ├── [...nextauth].ts
│       ├── posts/
│       │   ├── index.ts
│       │   ├── [postId].ts
│       ├── users/
│       │   ├── index.ts
│       │   ├── [userId].ts
│       ├── notifications/
│       │   ├── [userId].ts
│       ├── comments.ts
│       ├── current.ts
│       ├── edit.ts
│       ├── follow.ts
│       ├── like.ts
│       ├── register.ts
│   ├── posts/
│   │   ├── [postId].tsx
│   ├── users/
│   │   ├── [userId].tsx
├── components/
│   ├── layout/
│   │   ├── FollowBar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SidebarItem.tsx
│   │   ├── SidebarLogo.tsx
│   │   ├── SidebarTweetButton.tsx
│   ├── modals/
│   │   ├── EditModal.tsx
│   │   ├── LoginModal.tsx
│   │   ├── Modal.tsx
│   │   ├── RegisterModal.tsx
│   ├── posts/
│   │   ├── CommentFeed.tsx
│   │   ├── CommentItem.tsx
│   │   ├── PostFeed.tsx
│   │   ├── PostItem.tsx
│   ├── users/
│   │   ├── UserBio.tsx
│   │   ├── UserHero.tsx
│   ├── Avatar.tsx
│   ├── Button.tsx
│   ├── Form.tsx
│   ├── Header.tsx
│   ├── ImageUpload.tsx
│   ├── Input.tsx
│   ├── Layout.tsx
│   ├── NotificationsFeed.tsx
│   └── ...
├── libs/
│   ├── prismadb.ts
│   ├── fetcher.ts
│   ├── serverAuth.ts
│   └── ...
├── hooks/
│   ├── useCurrentUser.ts
│   ├── useEditModal.ts
│   ├── useFollow.ts
│   ├── useLike.ts
│   ├── useLoginModal.ts
│   ├── useNotifications.ts
│   ├── usePost.ts
│   ├── usePosts.ts
│   ├── useRegisterModal.ts
│   ├── useUser.ts
│   ├── useUsers.ts
├── styles/
│   ├── globals.css
├── prisma/
│   ├── schema.prisma
├── public/
│   ├── images/
├── package.json
```

## Contributing

Contributions to the Twitter clone project are welcome! If you find any issues or want to contribute enhancements, feel free to open an issue or submit a pull request. Please follow the standard GitHub workflow when contributing.

When submitting a pull request, ensure to include a clear description of the changes and any necessary steps to test the changes.

## License

This Twitter clone project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was inspired by the functionality and design of the Twitter platform.

## Contact

For any questions or inquiries, please contact [heyfreaker@gmail.com](mailto:heyfreaker@gmail.com).

Happy tweeting!
