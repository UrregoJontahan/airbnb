import axios from "axios"

export async function Login(userData:any){

  try{
    const response = await axios.post("http://localhost:2000/users", userData)
    return response.data
  } catch{
    console.log("Ay,noooooooooooooooooooooooooooooooooooooooooo")
  }

  // const handleLogin = (e) => {
  //   e.preventDefault()
  // }

   return(
    <div className="block mx-96 mt-20 max-w-screen-md">
    <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text flex justify-center">Login</h1>
    <form className="grid gap-x-4 gap-y-8" method="POST">
      <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="h-4 rounded-lg p-8 text-black focus:border-violet-500" />
      <input type="password" name="password" placeholder="password" className="h-4 rounded-lg p-8 text-black" />
      <input type="submit" name="submit" value="Login" className="bg-violet-neon hover:bg-blue-500 cursor-pointer h-12 rounded-lg"/>
    </form>
  </div>
   )
}