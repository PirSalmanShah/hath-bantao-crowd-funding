import mongoose from 'mongoose'
import NextAuth from 'next-auth'
import User from '@/app/models/User'
import Payment from '@/app/models/Payment'

import GitHubProvider from 'next-auth/providers/github'

export const authOptions ={
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
   if(account.provider=="github"){
    const email = user?.email || profile?.email;
    const nameOfUser = user?.name
    // Connect to database
    // console.log(user)
    // console.log(account)
    // console.log(profile)
    // console.log(email)
    await mongoose.connect(process.env.MONGODB_URI)
    
    const currentUser = await User.findOne({email:email})
    if(!currentUser){
      const newUser = new User({
        username:nameOfUser,
        email:email,
       
        
      })
      await newUser.save()
      
    }
    return true
   }
  },
  async session({ session, token, user }) {
    // Ensure name and email are passed into the session
    const dbusername = await User.findOne({email:session.user.email})
    console.log(dbusername)
    session.user.name = dbusername.username
    session.user.email= dbusername.email
    return session
  },
}
}
const handler = NextAuth(authOptions)

export {handler as GET,handler as POST}