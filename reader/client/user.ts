import { User, UserRequest } from "../proto/proto/user_pb";
import { client } from "./utils";

export default function CreateUser(id: number) {

  return new Promise<User>((resolve, reject) => {

    const request = new UserRequest()
    const user =  new User()
    user.setUsername('Juan')
    user.setRole(1)
    user.setPassword('1234')
    request.setUser(user)

    client.createUser(request, (err, res) => {

      if (err) {
        reject(err)
      }else {
        console.log("res", res)
        resolve(user)
      }

    });

  });

}
