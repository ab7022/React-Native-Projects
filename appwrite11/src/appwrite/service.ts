import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();
const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT = Config.APPWRITE_PROJECT!;

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;

};
export class AppwriteService{
    account;

    constructor() {
        appwriteClient.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
        this.account = new Account(appwriteClient);
    }
    async createAccount({email, password, name}: CreateUserAccount) {
        try {
           const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                //TODO:
               return this.login({email, password});
                
            }else{
                return userAccount
            }
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_SHORT,
            });
            console.log("Appwrite account creation"+error);
            
        }
    }
    async login({email, password}: LoginUserAccount) {
        try {
            const userAccount = await this.account.createSession(email, password);
            return userAccount;
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_SHORT,
            });
            console.log("Appwrite login"+error);
        }
    }
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_SHORT,
            });
            console.log("Appwrite get current user"+error);
        }
    }

    async logout() {
        try {
            await this.account.deleteSession('current');
            return true;
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_SHORT,
            });
            console.log("Appwrite logout"+error);
        }
    }
}